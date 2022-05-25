import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadState = 'loading';
  constructor() {
  }

  ngOnInit(): void {
  }

  // randomInputFunction(event) {
  //   this.randomInput = event.target.value
  // }

  triggerButton() {
    this.loadState = 'finished'
  }

}
