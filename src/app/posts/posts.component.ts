import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {PostService} from './posts.service'
import {AppError} from '../common/app-error';
import{Post} from './post';
import {PostWithUser} from './postwithuser';
import{combineLatest, of, pipe} from 'rxjs';
import { CustomError } from '../common/custom-error';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsComponent {
  
  posts: any[];
  newPost: any;
  errorMessage: any;

 constructor(private service: PostService){
 }

 posts$ = this.service.posts$.pipe(
   catchError( error=>{
     this.errorMessage= error;
     return of (null)
   })
 );

 users$ = this.service.users$.pipe(
   catchError((error)=>{
     this.errorMessage=error;
     return of(null);
   })
 )

 postwithuser$ = combineLatest(this.posts$, this.users$).pipe(
   map(([posts, users])=>
   posts.map({
     ...posts,
     username: users.find(u=>u.id===posts.userId).name
   } as PostWithUser[] )
   )
 );

 getPosts(){
  this.service.getAll().subscribe(posts => this.posts= (posts as Post[]));
 //console.log('get post', this.postwithuser$);
 
 }

 createPost(){
  this.service.create().subscribe((data) => {this.newPost= (data as Post)});
 }
}
