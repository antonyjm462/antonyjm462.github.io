import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  radarChartType:string = 'radar';
  skilltexts: any[];
  desc: string;
  radarChartLabels: string[];
  radarChartData: { data: number[]; label: string; }[];
  radarOptions: any;
  

  constructor(public about: AboutService) {
    this.skilltexts = about.skillText;
    this.desc = about.about_me;
    this.radarChartLabels = about.skills["language"].list;
    this.radarChartData = about.skills["language"].data;
    this.radarOptions = {
    responsive : true,
      legend: {
          labels: {
              fontColor: '#64ffda',
              fontFamily: 'IBM Plex Mono',
              fontStyle: 'Bold',
          }
        },
          title: {
            display: true,
            text: 'Skill Chart',
            fontColor: '#64ffda',
            fontFamily: 'IBM Plex Mono',
            fontStyle: 'Bold',
            fontSize: '16'
          },
          scale: {
            fontColor: '#64ffda',
            fontFamily: 'IBM Plex Mono',
            fontStyle: 'Bold',
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
  };

   }

  ngOnInit() {
  }

}
