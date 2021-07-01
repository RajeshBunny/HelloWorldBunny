import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  @Input() registerMessage: any;
  constructor(private router: Router, public dataService: DataServiceService) { }
  ngOnInit() {
  }


  loginNavigate() {
    this.dataService.getPreviousRoute()
    this.router.navigate(["login"]);
  }
}
