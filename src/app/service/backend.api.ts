import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class FreeApiService
{

    constructor(private httpClient : HttpClient){ }

    getComments() : Observable<any> {
        console.log(this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments"));
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");  
    }
                                            
}