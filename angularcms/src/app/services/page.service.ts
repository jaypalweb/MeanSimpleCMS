import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }
  public pagesBS = new BehaviorSubject<object>(null);

  getPages() {
    return this.http.get('http://localhost:3000/pages');
  }

  getPage(slug) {
    return this.http.get('http://localhost:3000/pages/' + slug);
  }

  postAddPage(value) {
    return this.http.post('http://localhost:3000/pages/add-page', value);
  }

  getEditPage(id) {
    return this.http.get('http://localhost:3000/pages/edit-page/' + id);
  }

  postEditPage(value) {
    return this.http.post('http://localhost:3000/pages/edit-page/' + value.id, value);
  }

  deletePage(id) {
    return this.http.get('http://localhost:3000/pages/delete-page/' + id);
  }
}
