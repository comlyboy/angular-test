import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: any[] = []


  private dashSub: Subscription;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  datas: any[] = [
    {
      "accountName": "Oladapo Jones",
      "accountNumber": "9823101",
      "dateOfBirth": "",
      "dateOpened": "20/10/1999",
      "firstName": "Oladapo",
      "lastName": "Jones",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "GTBank",
      "branch": "",
      "state": "Lagos",
      "balance": "25,000.00",
      "interestAmount": "1,250.00",
      "wht": "125.00"
    },
    {
      "accountName": "Segun Alaba",
      "accountNumber": "9823102",
      "dateOfBirth": "",
      "dateOpened": "20/10/2000",
      "firstName": "Segun",
      "lastName": "Alaba",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "GTBank",
      "branch": "",
      "state": "Lagos",
      "balance": "20,000.00",
      "interestAmount": "1,000.00",
      "wht": "100.00"
    },
    {
      "accountName": "James Morrison",
      "accountNumber": "9823103",
      "dateOfBirth": "",
      "dateOpened": "20/10/2001",
      "firstName": "James",
      "lastName": "Morrison",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "GTBank",
      "branch": "",
      "state": "Lagos",
      "balance": "2,000.00",
      "interestAmount": "100.00",
      "wht": "10.00"
    },
    {
      "accountName": "Musi Oba",
      "accountNumber": "9823104",
      "dateOfBirth": "",
      "dateOpened": "20/10/2002",
      "firstName": "Musi",
      "lastName": "Oba",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "GTBank",
      "branch": "",
      "state": "Lagos",
      "balance": "15,000.00",
      "interestAmount": "750.00",
      "wht": "75.00"
    },
    {
      "accountName": "Chris Okotie",
      "accountNumber": "9823105",
      "dateOfBirth": "",
      "dateOpened": "20/10/2014",
      "firstName": "Chris",
      "lastName": "Okotie",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "1,300,000.00",
      "interestAmount": "65,000.00",
      "wht": "6,500.00"
    },
    {
      "accountName": "Alabi Pasuma",
      "accountNumber": "9823106",
      "dateOfBirth": "",
      "dateOpened": "20/10/2015",
      "firstName": "Alabi",
      "lastName": "Pasuma",
      "middleName": "",
      "accountDesignation": "Others",
      "accountStatus": "Active",
      "accountType": "Curent",
      "currency": "NGN",
      "bank": "Union",
      "branch": "",
      "state": "Oyo",
      "balance": "20,000.00",
      "interestAmount": "1,000.00",
      "wht": "100.00"
    },
    {
      "accountName": "Pastor Jide",
      "accountNumber": "9823107",
      "dateOfBirth": "",
      "dateOpened": "20/10/2003",
      "firstName": "Pastor",
      "lastName": "Jide",
      "middleName": "",
      "accountDesignation": "Others",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Oyo",
      "balance": "239,999.00",
      "interestAmount": "11,999.95",
      "wht": "1,200.00"
    },
    {
      "accountName": "Dele Momo",
      "accountNumber": "9823108",
      "dateOfBirth": "",
      "dateOpened": "20/10/2004",
      "firstName": "Dele",
      "lastName": "Momo",
      "middleName": "",
      "accountDesignation": "Others",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Stanbic",
      "branch": "",
      "state": "Oyo",
      "balance": "4,999.00",
      "interestAmount": "249.95",
      "wht": "25.00"
    },
    {
      "accountName": "David Leke",
      "accountNumber": "9823109",
      "dateOfBirth": "",
      "dateOpened": "20/10/2005",
      "firstName": "David",
      "lastName": "Leke",
      "middleName": "",
      "accountDesignation": "Others",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Stanbic",
      "branch": "",
      "state": "Ogun",
      "balance": "40,000.00",
      "interestAmount": "2,000.00",
      "wht": "200.00"
    },
    {
      "accountName": "Pam Pam",
      "accountNumber": "9823110",
      "dateOfBirth": "",
      "dateOpened": "20/10/2006",
      "firstName": "Pam",
      "lastName": "Pam",
      "middleName": "",
      "accountDesignation": "Others",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Stanbic",
      "branch": "",
      "state": "Kaduna",
      "balance": "23,487.00",
      "interestAmount": "1,174.35",
      "wht": "117.44"
    },
    {
      "accountName": "Lexus Inc",
      "accountNumber": "9823111",
      "dateOfBirth": "",
      "dateOpened": "20/10/2007",
      "firstName": "Sam",
      "lastName": "Khar",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Union",
      "branch": "",
      "state": "Kaduna",
      "balance": "946,500.00",
      "interestAmount": "47,325.00",
      "wht": "4,732.50"
    },
    {
      "accountName": "Uber Nigeria",
      "accountNumber": "9823112",
      "dateOfBirth": "",
      "dateOpened": "20/10/2008",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "9,098.00",
      "interestAmount": "454.90",
      "wht": "45.49"
    },
    {
      "accountName": "Chakra Pharmacy",
      "accountNumber": "9823113",
      "dateOfBirth": "",
      "dateOpened": "20/10/2003",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "345,000.00",
      "interestAmount": "17,250.00",
      "wht": "1,725.00"
    },
    {
      "accountName": "RCCG, Blazing Fire Parish",
      "accountNumber": "9823114",
      "dateOfBirth": "",
      "dateOpened": "20/10/2004",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "34,000.00",
      "interestAmount": "1,700.00",
      "wht": "170.00"
    },
    {
      "accountName": "Water and Fire Music Group",
      "accountNumber": "9823115",
      "dateOfBirth": "",
      "dateOpened": "20/10/2005",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "89,237.00",
      "interestAmount": "4,461.85",
      "wht": "446.19"
    },
    {
      "accountName": "Jags Consulting",
      "accountNumber": "9823116",
      "dateOfBirth": "",
      "dateOpened": "20/10/2006",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "92,834,098.00",
      "interestAmount": "4,641,704.90",
      "wht": "464,170.49"
    },
    {
      "accountName": "Shalaye Hotels",
      "accountNumber": "9823117",
      "dateOfBirth": "",
      "dateOpened": "20/10/2007",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "999,934.00",
      "interestAmount": "49,996.70",
      "wht": "4,999.67"
    },
    {
      "accountName": "Lux Club",
      "accountNumber": "9823118",
      "dateOfBirth": "",
      "dateOpened": "20/10/2008",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "123,949.00",
      "interestAmount": "6,197.45",
      "wht": "619.75"
    },
    {
      "accountName": "Sweet Boy Co-operative",
      "accountNumber": "9823119",
      "dateOfBirth": "",
      "dateOpened": "20/10/2009",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "accountDesignation": "Corporate",
      "accountStatus": "Active",
      "accountType": "Current",
      "currency": "NGN",
      "bank": "Zenith",
      "branch": "",
      "state": "Lagos",
      "balance": "84,747.00",
      "interestAmount": "4,237.35",
      "wht": "423.74"
    },
    {
      "accountName": "Alani Adeolu",
      "accountNumber": "9823120",
      "dateOfBirth": "",
      "dateOpened": "20/10/2010",
      "firstName": "Alani",
      "lastName": "Adeolu",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Polaris",
      "branch": "",
      "state": "Kano",
      "balance": "30,000.00",
      "interestAmount": "1,500.00",
      "wht": "150.00"
    },
    {
      "accountName": "Chika Okoli",
      "accountNumber": "9823121",
      "dateOfBirth": "",
      "dateOpened": "20/10/2011",
      "firstName": "Chika",
      "lastName": "Okoli",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Polaris",
      "branch": "",
      "state": "Kano",
      "balance": "450,000.00",
      "interestAmount": "22,500.00",
      "wht": "2,250.00"
    },
    {
      "accountName": "Michel Okoro",
      "accountNumber": "9823122",
      "dateOfBirth": "",
      "dateOpened": "20/10/2012",
      "firstName": "Michel",
      "lastName": "Okoro",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Polaris",
      "branch": "",
      "state": "Rivers",
      "balance": "450,000.00",
      "interestAmount": "22,500.00",
      "wht": "2,250.00"
    },
    {
      "accountName": "Miriam Usman",
      "accountNumber": "9823123",
      "dateOfBirth": "",
      "dateOpened": "20/10/2013",
      "firstName": "Miriam",
      "lastName": "Usman",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Access",
      "branch": "",
      "state": "Rivers",
      "balance": "80,000.00",
      "interestAmount": "4,000.00",
      "wht": "400.00"
    },
    {
      "accountName": "Taribo North",
      "accountNumber": "9823124",
      "dateOfBirth": "",
      "dateOpened": "20/10/2014",
      "firstName": "Taribo",
      "lastName": "North",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Access",
      "branch": "",
      "state": "Rivers",
      "balance": "1,233,434.00",
      "interestAmount": "61,671.70",
      "wht": "6,167.17"
    },
    {
      "accountName": "Tinuke Salami",
      "accountNumber": "9823125",
      "dateOfBirth": "",
      "dateOpened": "20/10/2015",
      "firstName": "Tinuke",
      "lastName": "Salami",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Savings",
      "currency": "NGN",
      "bank": "Access",
      "branch": "",
      "state": "Rivers",
      "balance": "98,500.00",
      "interestAmount": "4,925.00",
      "wht": "492.50"
    },
    {
      "accountName": "Judas Iscariot",
      "accountNumber": "9823126",
      "dateOfBirth": "",
      "dateOpened": "20/10/2016",
      "firstName": "Judas",
      "lastName": "Iscariot",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Others",
      "currency": "NGN",
      "bank": "Access",
      "branch": "",
      "state": "Kwara",
      "balance": "560,000.00",
      "interestAmount": "28,000.00",
      "wht": "2,800.00"
    },
    {
      "accountName": "Temi Fowler",
      "accountNumber": "9823127",
      "dateOfBirth": "",
      "dateOpened": "20/10/2017",
      "firstName": "Temi",
      "lastName": "Fowler",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Others",
      "currency": "NGN",
      "bank": "Sterling",
      "branch": "",
      "state": "Kwara",
      "balance": "45,000.00",
      "interestAmount": "2,250.00",
      "wht": "225.00"
    },
    {
      "accountName": "Ricky Tom",
      "accountNumber": "9823128",
      "dateOfBirth": "",
      "dateOpened": "20/10/2018",
      "firstName": "Ricky",
      "lastName": "Tom",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Others",
      "currency": "NGN",
      "bank": "Sterling",
      "branch": "",
      "state": "Kwara",
      "balance": "33,000.00",
      "interestAmount": "1,650.00",
      "wht": "165.00"
    },
    {
      "accountName": "Bolanle Adisa",
      "accountNumber": "9823129",
      "dateOfBirth": "",
      "dateOpened": "20/10/2019",
      "firstName": "Bolanle",
      "lastName": "Adisa",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Others",
      "currency": "NGN",
      "bank": "Sterling",
      "branch": "",
      "state": "Osun",
      "balance": "45,000.00",
      "interestAmount": "2,250.00",
      "wht": "225.00"
    },
    {
      "accountName": "Deedee Mayana",
      "accountNumber": "9823130",
      "dateOfBirth": "",
      "dateOpened": "20/10/2010",
      "firstName": "Deedee",
      "lastName": "Mayana",
      "middleName": "",
      "accountDesignation": "Individual",
      "accountStatus": "Active",
      "accountType": "Others",
      "currency": "NGN",
      "bank": "Sterling",
      "branch": "",
      "state": "Osun",
      "balance": "1,100,000.00",
      "interestAmount": "55,000.00",
      "wht": "5,500.00"
    }
  ]

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {

    let states_data = {};
    let r = []
    let result = this.datas.reduce(function (r, o) {
      let key = o.state;
      // console.log('====key=== ' + key);

      if (!states_data[key]) {
        states_data[key] = { "Bank": key, "wht": 0 };//Object.assign({}, o); // create a copy of o
        r.push(states_data[key]);
      } else {
        states_data[key].wht += parseFloat(o.wht);
      }

      return r;
    }, []);

    // print('==finish==')
    console.log(result[0]);
    result.forEach(roe   => {
const z 
    });
    // console.log(this.datas)
  }

  ngOnDestroy() {
    this.dashSub.unsubscribe();
  }

}
