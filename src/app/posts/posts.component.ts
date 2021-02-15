import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import{Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  posts: any;
 constructor(private http:HttpClient){
 }

 getPosts(){
   this.posts= this.http.get("http://jsonplaceholder.typicode.com/posts")
 }
}