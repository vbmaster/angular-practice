import { Component, OnInit } from '@angular/core';
import {PostService} from './posts.service'

import{Post} from './post';
import{Observable, throwError} from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  
  posts: Post[];
  newPost: Post;

 constructor(private service: PostService){
 }

 getPosts(){
  this.service.getPosts().subscribe(
                (data) => {
                  this.posts=(data as Post[]);
                },
                console.error
            );
 }

 createPost(){
  this.service.createPost() .subscribe(
                (data) => {
                    this.newPost= (data as Post);
                },
                console.error
            );
 }
}
