import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  github: string;
  linkedin: string;
  dev: string;
  email: string;

  constructor() {
    this.github = "https://github.com/antonyjm462";
    this.linkedin = "https://www.linkedin.com/in/antony-j-malakkaran-806534152/";
    this.dev = "https://dev.to/antonyjm462";
    this.email="mailto:antonyjm462@gmail.com";
   }

  ngOnInit() {
  }

}
