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
  application: any;
  tech: any;
  framework: any;
  os: any;
  database: any;
  languages: any;
  languageShow: any;
  

  constructor(public about: AboutService) {
    this.skilltexts = about.skillText;
    this.desc = about.about_me;
    this.radarChartLabels = about.skills["language"].list_data;
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
    this.languages = this.about.skills["language"].list;
    this.languageShow = this.makepath(this.languages);
    this.database = this.makepath(this.about.skills["database"].list);
    this.os = this.makepath(this.about.skills["os"].list);
    this.framework = this.makepath(this.about.skills["framework"].list);
    this.tech = this.about.skills["tech"].list;
    this.application = this.makepath(this.about.skills["application"].list);
    console.log(this.radarChartLabels);
  }

  makepath(data){
    let list = data;
    for(let i=0;i<list.length;i++){
      list[i] = `../../../assets/icons/skill/${list[i]}.svg`;
    }
    return list;
  }

}
