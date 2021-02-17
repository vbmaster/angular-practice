import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {PostsComponent} from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import {PostService} from './posts/posts.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, PostsComponent,GithubFollowersComponent ],
  providers: [PostService, {provide: ErrorHandler, useClass:AppErrorHandler}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
