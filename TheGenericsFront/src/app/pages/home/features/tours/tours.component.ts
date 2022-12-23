import { Component, OnInit } from '@angular/core';
import { ToursDataService } from './services/tours-data.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(public toursService: ToursDataService) { }

  ngOnInit(): void {
  }

}
