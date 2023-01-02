import { TourInterface } from "../interfaces/Tour.interface";

export class TourModel implements TourInterface {

    constructor(public tourId: number,
                public tourDate: Date,
                public tourLocation: string,
                public tourArena: string,
                public tourTicketBought: boolean = false) { }
    ;
}