import { map, catchError, tap } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Post } from "./post";
// import 'rxjs/add/operator/catch';
// import "rxjs/add/observable/throw";
// import "rxjs/add/operator/map";
import { CustomError } from "../common/custom-error";
import { AppError } from "../common/app-error";
import {pipe} from 'rxjs';
@Injectable()
export class DataService {

  constructor(
    private http: HttpClient,
    @Inject("ROOT_URL") private ROOT_URL: string
  ) {}

  posts$ = this.http.get(this.ROOT_URL).pipe(
    tap(console.log),
    catchError(this.handleError)
  )
  

  users$ = this.http.get("http://jsonplaceholder.typicode.com/users").pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  getAll() {

    

    let params = new HttpParams().set("userId", "1");
    let headers = new HttpHeaders().set("Authorization", "auth-token");
    return this.http
      .get(this.ROOT_URL, { headers })
      .pipe(catchError(this.handleError)); //.catch(this.handleError);
  }

  create() {
    const data: Post = {
      id: null,
      userId: 23,
      title: "New Post",
      body: "Hello world!",
    };
    return this.http.post(this.ROOT_URL, data); //.catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 0) {
      return Observable.throw(new CustomError(error));
    } else {
      return Observable.throw(new AppError(error));
    }
  }
}
