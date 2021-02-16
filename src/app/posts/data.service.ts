import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Post } from "./post";
import { BehaviorSubject } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import { CustomError } from "../common/custom-error";
import { AppError } from "../common/app-error";

@Injectable()
export class DataService {
  constructor( private http: HttpClient,  private ROOT_URL: string) {
    
  }
  getAll() {
    let params = new HttpParams().set("userId", "1");
    let headers = new HttpHeaders().set("Authorization", "auth-token");
    return this.http.get(this.ROOT_URL + "/posts", { headers })
    .map( response=>response)
    .catch(this.handleError);
  }

  create() {
    const data: Post = {
      id: null,
      userId: 23,
      title: "New Post",
      body: "Hello world!"
    };
    return this.http.post(this.ROOT_URL + "/posts", data).catch(this.handleError);
  }

  private handleError(error: Response){
      if(error.status===0){
        return Observable.throw(new CustomError(error));
      }else{
        return Observable.throw( new AppError(error));
      }
  }
}
