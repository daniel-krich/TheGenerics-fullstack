import { TourInterface } from "../interfaces/Tour.interface";

export class TourModel implements TourInterface {
    public tourTicketBought: boolean = false;
    
    constructor(public tourDate: Date,
                public tourLocation: string,
                public tourArena: string) { }
}