import { Component, OnInit } from '@angular/core';

import { PageService } from './../../services/page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages: any;
  user: string;

  constructor(public pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPages().subscribe(pages => {
      this.pageService.pagesBS.next(pages);
      this.pages = this.pageService.pagesBS;
    });
  }

  get userLoggedIn() {
    if (localStorage.getItem("user")) {
      this.user = localStorage.getItem("user").replace(/\"/g, "");
      return true;
    }
    return false;
  }

}
