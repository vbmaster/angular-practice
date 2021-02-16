import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,  HttpParams,  HttpResponse} from '@angular/common/http';
import{Observable, throwError} from 'rxjs';

import{Post} from './post';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  readonly ROOT_URL="https://jsonplaceholder.typicode.com"
  posts: Observable<any>;
  newPost: Observable<Post>

 constructor(private http:HttpClient){
 }

 getPosts(){
   let params = new HttpParams().set('userId', '1');
   let headers= new HttpHeaders().set('Authorization', 'auth-token');
   this.posts= this.http.get<Post[]>(this.ROOT_URL + "/posts", { headers});
 }

 createPost(){
   const data: Post={
     id: null,
     userId: 23,
     title: 'New Post',
     body: 'Hello world!'
   };
   this.newPost= this.http.post<Post>(this.ROOT_URL + "/posts", data)
 }
}
