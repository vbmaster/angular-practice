import { Component, OnInit } from '@angular/core';
import {PostService} from './posts.service'
import {AppError} from '../common/app-error';
import{Post} from './post';
import{Observable, throwError} from 'rxjs';
import { CustomError } from '../common/custom-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  
  posts: any[];
  newPost: any;

 constructor(private service: PostService){
 }

 getPosts(){
  this.service.getAll().subscribe(posts => this.posts= (posts as Post[]));
 }

 createPost(){
  this.service.create().subscribe((data) => {this.newPost= (data as Post)});
 }
}
