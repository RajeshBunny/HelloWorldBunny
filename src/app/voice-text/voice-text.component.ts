import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";

@Component({
  selector: "app-voice-text",
  templateUrl: "./voice-text.component.html",
  styleUrls: ["./voice-text.component.css"]
})

export class VoiceTextComponent implements OnInit {
  constructor(private _service: DataServiceService) { }
  herosData: any;
  ngOnInit() { }

  getDetails() {
    this._service.getHerosDetails().subscribe(data => {
      this.herosData = data;
      console.log(this.herosData);
    });
  }
}
