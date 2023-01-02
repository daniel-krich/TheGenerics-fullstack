import { Component, Input, OnInit } from '@angular/core';
import { TourModel } from '../../models/tour.model';
import { ToursDataService } from '../../services/tours-data.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

    @Input() public tourModel : TourModel | undefined;

    constructor(private tourService: ToursDataService) { }

    ngOnInit(): void {
    }

    public buyTicket(): void {
        if(this.tourModel !== undefined && this.tourModel.tourTicketBought === false) {
            this.tourService.buyTour(this.tourModel.tourId)?.subscribe(isSuccess => {
                if(isSuccess) {
                    alert(`Thank you for your purchase,\nWe'll wait for you at ${this.tourModel?.tourLocation} ${this.tourModel?.tourArena} (${this.tourModel?.tourDate.toLocaleDateString()})
                    `);
                }
            },
            (err) => {
                alert(`Error while purchasing ticket (${err})`);
            });
            
        }
    }

}
