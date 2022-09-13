import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./store/posts.state";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    endpoint: string = 'https://ngrx-course-40d4c-default-rtdb.firebaseio.com/posts.json';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.endpoint);
    }

    addPost(post: Post): Observable<any> {
        const body = post;
        return this.http.post(this.endpoint, body);
    }
}