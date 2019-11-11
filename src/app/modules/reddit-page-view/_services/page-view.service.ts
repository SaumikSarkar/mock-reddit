import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageViewService {

  //************ Variables ************/

  apiUrl: string = 'https://www.reddit.com/r/AskReddit/comments/duib1h/which_book_should_a_depressed_person_absolutely/.json';

  //********************************* */

  constructor(private http: HttpClient) { }

  getPageData() : Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
