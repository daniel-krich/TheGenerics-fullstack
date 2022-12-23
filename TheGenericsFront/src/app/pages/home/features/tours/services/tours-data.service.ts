import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TourInterface } from '../interfaces/Tour.interface';
import { TourModel } from '../models/tour.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/consts';

@Injectable()
export class ToursDataService {

    private _toursList: TourModel[] | undefined;
    constructor(private httpClient: HttpClient) {

        httpClient.get<TourInterface[]>(BASE_URL + '/api/tours')
                    .pipe(map(x => x.map(y => new TourModel(new Date(y.tourDate), y.tourArena, y.tourLocation))))
                    .subscribe(x => this._toursList = x);
    }

    public get toursList(): TourModel[] | undefined {
        return this._toursList;
    }
}
