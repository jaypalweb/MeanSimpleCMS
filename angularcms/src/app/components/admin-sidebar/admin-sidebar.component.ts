import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  content: string;
  successMsg: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace('content');
    }

    this.sidebarService.getSidebar().subscribe(res => {
      this.content = res['content'];

      //content sometimes not comming - below a fix
      setTimeout(function () {
        CKEDITOR.instances.content.setData(this.content);
      }.bind(this), 500);

    });

  }

  editSidebar({ value }) {

    value.content = CKEDITOR.instances.content.getData();

    this.sidebarService.postSidebar(value).subscribe(res => {
      this.successMsg = true;
      setTimeout(function () {
        this.successMsg = false;
      }.bind(this), 2000);

    });
  }

}
