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
        // this.datas = Ddata.datas;
        // console.log("get data")
        // console.log(Ddata.datas)


        let banks_data = {};
        let rr = []
        let result_banks = Ddata.datas.reduce(function (r, o) {
          let key = o.bank;

          if (!banks_data[key]) {
            banks_data[key] = {
              "bank": key,
              "balance": 0,
              "interestAmount": 0,
              "withholdingTaxAmount": 0
            };
            //Object.assign({}, o); // create a copy of o
            rr.push(banks_data[key]);
          } else {
            banks_data[key].balance += parseFloat(o.balance);
            banks_data[key].interestAmount += parseFloat(o.interestAmount);
            banks_data[key].withholdingTaxAmount += parseFloat(o.withholdingTaxAmount);
          }

          return rr;
        }, []);

        this.datas = result_banks;
        console.log(result_banks);

      });
  }


  ngOnInit() {
    this.initContent();
  }

  ngOnDestroy() {
    this.bankSub.unsubscribe();
  }

}
