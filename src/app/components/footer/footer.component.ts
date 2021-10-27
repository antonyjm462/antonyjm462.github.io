import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
