import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AuthResponse } from "./authResponse.model";
import { User } from "./user.model";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import { autoLogout } from "./store/auth.actions";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    timeoutInterval: any;
    constructor(private http: HttpClient, private store: Store<AppState>) {}

    login(email: string, password: string): Observable<AuthResponse> {
        const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
        const body = {email, password, returnSecureToken: true};
        return this.http.post<AuthResponse>(endpoint, body);
    }

    signup(email: string, password: string): Observable<AuthResponse> {
        const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`;
        const body = {email, password, returnSecureToken: true};
        return this.http.post<AuthResponse>(endpoint, body);
    }

    formatUser(data: AuthResponse) {
        const expiryDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
        const user = new User(data.idToken, data.email, data.localId, expiryDate);
        return user;
    }

    setUserInLocal(userData: User) {
        localStorage.setItem('user', JSON.stringify(userData));
        this.runTimeoutInterval(userData)
    }

    getUserFromLocal() {
        const userJSON = localStorage.getItem('user');
        if(userJSON) {
            const user = JSON.parse(userJSON);
            const expiryDate = new Date(user.expiresIn);
            const userData = new User(user.idToken, user.email, user.localId, expiryDate);
            this.runTimeoutInterval(userData);
            return userData;
        }
        return null;
    }

    runTimeoutInterval(userData: User) {
        const todayDate = new Date().getTime();
        const expiryDate = userData.expiryDate.getTime();
        const timeInterval = expiryDate - todayDate;

        this.timeoutInterval = setTimeout(() => {
            this.store.dispatch(autoLogout());
        }, timeInterval)
    }

    logout() {
        localStorage.removeItem('user');
        if(this.timeoutInterval) {
            clearInterval(this.timeoutInterval);
            this.timeoutInterval = null;
        }
    }

    getErrorMessage(message: string) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Incorrect password';
            case 'EMAIL_EXISTS':
                return 'Email already used';
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                return 'Too many attempts made. Please try again'
            default:
                return 'Unknow Error Occured. Please try again';
        }
    }

}