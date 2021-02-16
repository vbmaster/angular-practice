import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Post } from "./post";

@Injectable()
export class PostService extends DataService {
  posts: { posts: Post[] } = { posts: [] };

  newPost: Observable<Post>;
  //ROOT_URL = "https://1jsonplaceholder.typicode.com";
  
  constructor( http: HttpClient) {
    super (http, 'https://jsonplaceholder.typicode.com');
  }
  
}
