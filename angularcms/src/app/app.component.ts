import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  front: boolean = true;
  //below showing some error so changed the code
  // get front() {
  //   if (localStorage.getItem("user") === "\"admin\"") {
  //     return false;
  //   }
  //   return true;
  // }
  ngDoCheck() {
    if (localStorage.getItem("user") === "\"admin\"") {
      this.front = false;
    } else {
      this.front = true;
    }
  }
  ngOnInit() {
    if (localStorage.getItem("user") === "\"admin\"") {
      this.front = false;
    }
  }
}
