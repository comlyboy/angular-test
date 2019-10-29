import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL = 'http://localhost:3000/api/data';
  // datas: any[] = [];

  private dataUpdated = new Subject<{
    datas: any[];
  }>();

  constructor(
    private http: HttpClient
  ) { }

  getDataUpdateListener() {
    return this.dataUpdated.asObservable();
  }


  getDatas() {
    this.http
      .get<{ datas: any[] }>(
        this.API_URL
      )
      .subscribe(fetchedData => {
        // this.datas = datas;
        this.dataUpdated.next({
          datas: fetchedData.datas
        });
        // console.log("getted")
        // console.log(fetchedData.datas)
      });
  }


}
