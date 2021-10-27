import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: any[];
  activeJob: any;

  constructor(public about: AboutService) {
    this.jobs = about.jobs;
    this.activeJob = this.jobs[0];
   }

  ngOnInit() {
  }

  setJob(job){
    this.activeJob = job;
  }

}
