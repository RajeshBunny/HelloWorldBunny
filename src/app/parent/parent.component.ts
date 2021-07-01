import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) childRef;
  exampleParent: any;
  constructor(public dataService: DataServiceService) { }
  namee = "hello"
  ngOnInit() {
  }
  ngAfterViewInit() {
    // Parent: Hello I am Child !
    this.exampleParent = this.childRef.passtoParent;
    // Child: Hello I am Parent !
    this.childRef.getDetails();
  }
  getDetails() {
    console.log(this.dataService.getPreviousRoute());
  }

}
