import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit, OnDestroy {
  datas: any[] = [];

  totalBanks: number = 231;

  private bankSub: Subscription;


  constructor(
    public dashboardService: DashboardService,

  ) { }

  initContent() {
    this.dashboardService.getDatas()
    // console.log("get data")
    this.bankSub = this.dashboardService.getDataUpdateListener()
      .subscribe((Ddata: { datas: any[] }) => {
        this.datas = Ddata.datas;
        // console.log("get data")
        // console.log(Ddata.datas)
      });
  }


  ngOnInit() {
    this.initContent();
  }

  ngOnDestroy() {
    this.bankSub.unsubscribe();
  }

}
