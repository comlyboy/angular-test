import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {

  totalinteractions: number = 56;

  constructor() { }

  ngOnInit() {
  }

}
