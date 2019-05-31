import { AuthenticationService } from '../../user/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NotitieDataService } from '../notitie-data.service';
import { Observable, Subject } from 'rxjs';
import { Notitie } from '../notitie.model';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-notitie-list',
  templateUrl: './notitie-list.component.html',
  styleUrls: ['./notitie-list.component.css']
})
export class NotitieListComponent implements OnInit {
  public filterNotitieName: string = '';
  public filterNotitie$ = new Subject<string>();

  public notities: Notitie[];
  public loadingError$ = this._notitieDataService.loadingError$;

  constructor(
    private _notitieDataService: NotitieDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.filterNotitie$
      .pipe(
        distinctUntilChanged(),
        debounceTime(250)
      )
      .subscribe(val => {
        // create a parameter object with a filter property and navigate to that url
        // e.g. /notitie/list?filter=sp
        // don't do any filtering here, that happens when we process this new url
        const params = val ? { queryParams: { filter: val } } : undefined;
        this._router.navigate(['/notitie/list'], params);
      });

    this._route.queryParams
      .pipe(
        switchMap(newParams => {
          // set the value of the input field with the url parameter as well
          if (newParams['filter']) {
            this.filterNotitieName = newParams['filter'];
          }
          // when the queryparameter changes, take the filter parameter and use it to ask
          // the service for all notities with this filter in their name
          // this._notitieDataService.getNotities$(params['filter']).subscribe(
          return this._notitieDataService.getNotitieFilter$(newParams['filter']);
        })
      )
      .subscribe(val => {
        this.notities = val;
      });
      console.log(this.notities);
  }
}
