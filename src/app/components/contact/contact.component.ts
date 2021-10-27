import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: string;

  constructor(private about: AboutService) { 
    this.contact = this.about.contact;
  }

  ngOnInit() {
  }

}
