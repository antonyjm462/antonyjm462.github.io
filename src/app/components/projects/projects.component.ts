import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  subscription: Subscription;

  constructor(private about: AboutService) { 
    this.projects = about.projects;
  }

  ngOnInit() {
  }

  

}
