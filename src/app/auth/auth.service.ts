import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AuthResponse } from "./authResponse.model";
import { User } from "./user.model";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<AuthResponse> {
        const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
        const body = {email, password, returnSecureToken: true};
        return this.http.post<AuthResponse>(endpoint, body);
    }

    formatUser(data: AuthResponse) {
        const expiryDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
        const user = new User(data.idToken, data.email, data.localId, expiryDate);
        return user;
    }

    getErrorMessage(message: string) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Incorrect password';
            default:
                return 'Unknow Error Occured. Please try again';
        }
    }

}