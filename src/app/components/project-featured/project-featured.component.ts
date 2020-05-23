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
  imgVal: number = 1;
  pngVal: string;
  item: any;
  
  constructor(private about: AboutService) { 
    this.about.imgValChanged.subscribe(val => {
      if(val && this.item){
        this.imgVal+=1;
        if(this.imgVal > this.about.get_last(this.item)){ 
          this.imgVal = 1;
        }
      } 
      this.pngVal = `${this.imgVal}.png`;
    });
    this.subscription = this.about.imgValChanged.subscribe();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  set_project(project){
    this.item = project;
  }

}
