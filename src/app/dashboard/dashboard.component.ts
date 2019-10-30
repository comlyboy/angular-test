import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs';
// import { datas } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  datas: any[] = []
  title: string = "BRADLEY";

  banks: string[] = [];
  states: string[] = [];
  wht: number[] = []
  whtt: number[] = []

  private dashSub: Subscription;



  data_states: any[];
  data_banks: any[];
  data_acc_type: any[] = [{
    "name": "Joint",
    "value": 8940000
  },
  {
    "name": "Savings",
    "value": 5000000
  },
  {
    "name": "Current",
    "value": 5000000
  },
  {
    "name": "Fixed Deposit",
    "value": 5455000
  },
  {
    "name": "Others",
    "value": 5000000
  },
  {
    "name": "Domiciliary",
    "value": 7200000
  }];

  data_acc_design: any[] = [{
    "name": "NGO",
    "value": 8940000
  },
  {
    "name": "Individual",
    "value": 5000000
  },
  {
    "name": "Corporate",
    "value": 5000000
  },
  {
    "name": "Others",
    "value": 5000000
  }];

  // view: any[] = [1200, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "States";
  xAxisLabell = "Banks";
  showYAxisLabel = true;
  yAxisLabel = "WHT";

  colorScheme = {
    domain: [
      "#91bad6",
      "#73a5c6",
      "#528aae",
      "#2e5984",
      "#91bad6",
      "#73a5c6",
      "#528aae",
      "#2e5984",
      "#1e3f66"
    ]
  };



  // options
  // // showLegend_pie = true;

  // colorSchemee = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // pie
  viewPie: any[] = [500, 500];
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(
    public dashboardService: DashboardService,
  ) { }


  initContent() {
    this.dashboardService.getDatas()
    // console.log("get data")
    this.dashSub = this.dashboardService.getDataUpdateListener()
      .subscribe((Ddata: { datas: any[] }) => {
        this.datas = Ddata.datas;
        // console.log("get data")
        // console.log(Ddata.datas)
      });

    setTimeout(() => {
      let states_data = {};
      let r = []
      let result = this.datas.reduce(function (r, o) {
        let key = o.state;

        if (!states_data[key]) {
          states_data[key] = { "name": key, "value": 0 };//Object.assign({}, o); // create a copy of o
          r.push(states_data[key]);
        } else {
          states_data[key].value += parseFloat(o.withholdingTaxAmount);
        }

        return r;
      }, []);


      this.data_states = result
      // console.log(result);



      let banks_data = {};
      let rr = []
      let result_banks = this.datas.reduce(function (r, o) {
        let key = o.bank;

        if (!banks_data[key]) {
          banks_data[key] = { "name": key, "value": 0 };//Object.assign({}, o); // create a copy of o
          r.push(banks_data[key]);
        } else {
          banks_data[key].value += parseFloat(o.withholdingTaxAmount);
        }

        return rr;
      }, []);


      this.data_banks = result_banks
      // console.log(result);

    }, 1000);

  }

  ngOnInit() {
    this.initContent();

    // this.datas.map((user) => {
    //   this.states.push(user.state)
    //   // console.log(user.state);
    //   // return user.states
    // })
    // this.datas.map((user) => {
    //   this.wht.push(user.wht)
    // })



  }

  ngAfterViewInit() {

  }


  ngOnDestroy() {
    this.dashSub.unsubscribe();
  }

}
