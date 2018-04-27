import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WebapiService } from './services/webapi.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  // DEPENDENCY INJECTION OF OUR WEB API SERVICE
  constructor(private webApiService: WebapiService ) {

  }

  private webApiKey = '69ffb707-3131-4444-bc75-19c1ee7fe1ea';
  public title = 'U.S. Holidays 2017';
  public holidays: any = [];
  public selectedHoliday: number = 0;

  // A HOLIDAY WAS CLICKED ON - ROUTE TO THE HOLIDAY DISPLAY COMPONENT VIEW
  public onHolidayClick(event: MouseEvent, index: number): void {
    console.log('clicked on holiday ' + this.holidays[index].name);
    this.selectedHoliday = index;
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {

    // RETRIEVE THE HOLIDAY LIST FOR US HOLIDAYS IN 2017
    this.webApiService.getHolidayData(
      'https://holidayapi.com/v1/holidays?',
      'key=' + this.webApiKey + '&country=US&year=2017')
      .subscribe(
        (holidayData) => this.onHolidayDataLoaded(holidayData),
        err => {
          this.onHolidayError(err);
        });
  }

  public ngAfterViewInit(): void {

  }

  // HTTP REQUEST ERROR
  private onHolidayError(err: string): void {
    console.log(err);
  }

  // HTTP PAYLOAD RECEIVED
  private onHolidayDataLoaded(data: any): void {
    console.log(data);

    // BUILD A LIST OF THE PUBLICLY OBSERVED HOLIDAYS
    let i = 0;
    for (let key in data.holidays) {
      console.log(key + '=' + data.holidays[key]);
      for ( let subkey in data.holidays[key] ) {

        if ( data.holidays[key][subkey].public == true ) {
          console.log(subkey + '=' + data.holidays[key][subkey].name);
          this.holidays.push(_.cloneDeep(data.holidays[key][subkey]));
          i++;
        }
      }
    }
    // THIS IS THE FINAL LIST THAT WAS FILTERED
    console.log(this.holidays);
  }
}
