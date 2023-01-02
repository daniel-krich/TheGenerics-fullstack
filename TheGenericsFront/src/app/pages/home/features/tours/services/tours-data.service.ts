import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TourInterface } from '../interfaces/Tour.interface';
import { TourModel } from '../models/tour.model';
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';

@Injectable()
export class ToursDataService {

    private _toursList: TourModel[] | undefined;
    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

        httpClient.get<TourInterface[]>(this.baseUrl + '/api/tours')
                    .pipe(map(x => x.map(y => new TourModel(y.tourId, new Date(y.tourDate), y.tourArena, y.tourLocation, y.tourTicketBought))))
                    .subscribe(x => this._toursList = x);
    }

    public get toursList(): TourModel[] | undefined {
        return this._toursList;
    }

    public buyTour(tourId: number): Observable<boolean> | null {
        const tour: TourModel | undefined = this._toursList?.find(x => x.tourId == tourId);
        if(tour && !tour.tourTicketBought) {
            const obs$: Observable<boolean> = this.httpClient.post<boolean>(this.baseUrl + `/api/tours/${tourId}/purchase`, {});
            obs$.subscribe(x => { 
                if(x) {
                    tour.tourTicketBought = true;
                }
                
            });
            return obs$;
        }
        return null;
    }
}
