import { Component, OnInit } from '@angular/core';
import { homeListAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    homeListAnimation
  ]
})
export class HomeComponent implements OnInit {

  items = [];
  constructor() {
    this.items = ['Full Stack / MEAN Stack Web Development', 'User Interface Development',
    'CMS: Template Customizations', 'E-Commerce Web Development', 'End-to-End Customer Support / Trainings', 'Search Engine Optimization'];
   }

  ngOnInit() {
  }

}
