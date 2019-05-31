import { Injectable } from '@angular/core';
import { Notitie } from './notitie.model';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NotitieDataService {
    public loadingError$ = new Subject<string>();

    constructor(private http: HttpClient) { }

    get notities$(): Observable<Notitie[]> {
        return this.http.get(`${environment.apiUrl}/notities/`).pipe(
            catchError(error => {
                this.loadingError$.next(error.statusText);
                return of(null);
            }),
            map((list: any[]): Notitie[] => list.map(Notitie.fromJSON))
        );
    }

    addNewNotitie(notitie: Notitie) {
        return this.http.post(`${environment.apiUrl}/notities/`, notitie.toJSON());
    }

    getNotitieFilter$(name?: string, chef?: string, ingredient?: string) {
        let params = new HttpParams();
        params = name ? params.append('name', name) : params;
        params = chef ? params.append('chef', chef) : params;
        params = ingredient ? params.append('ingredientName', ingredient) : params;
        return this.http.get(`${environment.apiUrl}/notities/`, { params }).pipe(
            catchError(error => {
                this.loadingError$.next(error.statusText);
                return of(null);
            }),
            map((list: any[]): Notitie[] => list.map(Notitie.fromJSON))
        );
    }
}
