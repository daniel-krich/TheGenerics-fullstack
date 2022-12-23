import { Component, Input, OnInit } from '@angular/core';
import { TourModel } from '../../models/tour.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

    @Input() public tourModel : TourModel | undefined;

    constructor() { }

    ngOnInit(): void {
    }

    public buyTicket(): void {
        if(this.tourModel !== undefined && this.tourModel.tourTicketBought === false) {
            this.tourModel.tourTicketBought = true;
            alert(`Thank you for your purchase,\nWe'll wait for you at ${this.tourModel.tourLocation} ${this.tourModel.tourArena} (${this.tourModel.tourDate.toLocaleDateString()})
            `);
        }
    }

}
