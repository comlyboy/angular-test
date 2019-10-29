import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit, OnDestroy {
  datas: any[] = [];

  totalStates: number = 37;

  private stateSub: Subscription;

  constructor(
    public dashboardService: DashboardService,

  ) { }

  initContent() {
    this.dashboardService.getDatas()
    // console.log("get data")
    this.stateSub = this.dashboardService.getDataUpdateListener()
      .subscribe((Ddata: { datas: any[] }) => {
        this.datas = Ddata.datas;
        // console.log("get data")
        console.log(Ddata.datas)
      });
  }


  ngOnInit() {
    this.initContent();
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }
}
