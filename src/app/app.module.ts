import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IntroComponent } from './components/intro/intro.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PostsComponent } from './components/posts/posts.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { JobComponent } from './components/job/job.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectFeaturedComponent } from './components/project-featured/project-featured.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ChangeImgDirective } from './directives/change-img.directive';

const COMPONENTS = [
  AppComponent,
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  AboutComponent,
  ContactComponent,
  ProjectsComponent,
  ProjectComponent, 
  ProjectFeaturedComponent,
  IntroComponent,
  JobsComponent,
  PostsComponent,
  AccomplishmentsComponent,
  LoadingScreenComponent, 
  ViewerComponent,
  JobComponent,
  ScrollToTopComponent
];

const PIPES = [];

const SERVICES = [
];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  ChartsModule,
  InlineSVGModule.forRoot()
];

const DIRECTIVES = [
  ChangeImgDirective,
]
@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...SERVICES,...DIRECTIVES],
  imports: [...MODULES],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
