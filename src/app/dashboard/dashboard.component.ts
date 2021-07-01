import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dataSvc: DashboardService) {

  }

  ngOnInit() {
  }

  getDetails() {
    console.log('enter');
    const data = this.dataSvc.getDetailsService().subscribe(re => {
      console.log(re);
    }
    )

  }
  Logout() {
    this.router.navigate(['login']);
  }
}
