import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  datas: any[] = [];

  totalStates: number = 37;

  private stateSub: Subscription;

  constructor(
    public dashboardService: DashboardService,

  ) { }

  initContent() {
    this.isLoading = true;
    this.dashboardService.getDatas()
    // console.log("get data")
    this.stateSub = this.dashboardService.getDataUpdateListener()
      .subscribe((Ddata: { datas: any[] }) => {


        let states_data = {};
        let rr = []
        let result_states = Ddata.datas.reduce(function (r, o) {
          let key = o.state;

          if (!states_data[key]) {
            states_data[key] = {
              "state": key,
              "balance": 0,
              "interestAmount": 0,
              "withholdingTaxAmount": 0
            };
            //Object.assign({}, o); // create a copy of o
            rr.push(states_data[key]);
          } else {
            states_data[key].balance += parseFloat(o.balance);
            states_data[key].interestAmount += parseFloat(o.interestAmount);
            states_data[key].withholdingTaxAmount += parseFloat(o.withholdingTaxAmount);
          }

          return rr;
        }, []);


        this.datas = result_states
        console.log(result_states);




        this.isLoading = false;
      });
  }


  ngOnInit() {
    this.initContent();
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }
}
