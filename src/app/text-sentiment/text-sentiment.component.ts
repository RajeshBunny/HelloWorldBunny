import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";
import { FormGroup, FormControl, Validators } from "../../../node_modules/@angular/forms";
@Component({
  selector: "app-text-sentiment",
  templateUrl: "./text-sentiment.component.html",
  styleUrls: ["./text-sentiment.component.css"]
})
export class TextSentimentComponent implements OnInit {
  tabledata: any;
  mydata: any;
  years: any;
  dname: any;
  name: any;
  position: any;
  dpos: any;
  dpass: any;
  dynamicdata: any;
  genders = ['male', 'female'];

  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;
  formText = new FormGroup({
    firstName: new FormControl('Rajesh', Validators.required),
    lastName: new FormControl(123),
    password: new FormControl('', Validators.required)

  });

  constructor(private _service: DataServiceService) { }

  ngOnInit() { }
  table() {
    this.tabledata = true;
    this._service.getCommonService().subscribe(data => {
      this.mydata = data;
      console.log(this.mydata);
    });
  }
  hideTable() {
    this.tabledata = false;
    if (true) {

    } else { }

  }
  onSubmit() {
    this.dname = this.name;
    this.dpass = this.years;
    this.dpos = this.position;

    this.dynamicdata = {
      Name: this.dname,
      Years: this.dpass,
      Position: this.dpos
    };

    console.log(this.dynamicdata);
    this.mydata.push(this.dynamicdata);
    console.log(this.mydata);
  }

  onSubmitReactiveForm() {
    console.log(this.formText.value);
  }
}
