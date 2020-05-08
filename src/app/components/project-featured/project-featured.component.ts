import { AboutService } from 'src/app/services/about.service';
import { Input, Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-featured',
  templateUrl: './project-featured.component.html',
  styleUrls: ['./project-featured.component.scss']
})
export class ProjectFeaturedComponent {

  @Input() project;
  subscription: Subscription;
  imgVal: number;
  pngVal: string;
  
  constructor(private about: AboutService) { 
    this.about.imgValChanged.subscribe(val => {
      this.imgVal = val;
      this.pngVal = `${this.imgVal}.png`
    });
    this.subscription = this.about.imgValChanged.subscribe();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
