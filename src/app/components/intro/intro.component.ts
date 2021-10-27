import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  intro: string;
  headline: string;

  constructor(private about: AboutService,private data:DataService) { 
    this.intro = about.intro;
    this.headline = about.headline;
    console.log(data.hello);
  }

  ngOnInit() {
  }

}
