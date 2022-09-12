import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./store/posts.state";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        const endpoint = 'https://ngrx-course-40d4c-default-rtdb.firebaseio.com/posts.json';
        return this.http.get<Post[]>(endpoint);
    }
}