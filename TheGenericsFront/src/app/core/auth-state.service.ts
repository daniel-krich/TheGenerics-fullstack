import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    public username: string | null = null;
    public isLoggedIn: boolean = false;

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    public runAutoAuthentication(): void {
        this.httpClient.get<{ username: string, error: boolean }>(this.baseUrl + '/api/auth')
                        .subscribe(x => {
                            this.username = x.username;
                            this.isLoggedIn = !x.error;
                        });
    }

    public tryAuthentication(username: string, password: string): Observable<{ username: string, error: boolean }> {
        return this.httpClient.post<{ username: string, error: boolean }>(this.baseUrl + '/api/auth', {
            username: username,
            password: password
        }).pipe(
            tap(x => {
                if(!x.error){
                    this.username = x.username;
                    this.isLoggedIn = true;
                }
            }),
            catchError((error: Error) => { alert(error.message); return EMPTY; })
        );
    }

    public runLogout() : Observable<void> {
        return this.httpClient.delete<void>(this.baseUrl + '/api/auth').pipe(
            tap(_ => {
                this.username = null;
                this.isLoggedIn = false;
            })
        );
    }
}