import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviceadmin',
  templateUrl: './deviceadmin.page.html',
  styleUrls: ['./deviceadmin.page.scss'],
})
export class DeviceadminPage implements OnInit {

  public device: any = {
    category: 0,
    description: "",
    id: 0,
    name: "",
    serie: "",
    stateDevice: true
  }

  constructor() {
    //this.device.name = "Luis";
  }

  ngOnInit() {
  }

  submitForm() {
    console.log("name", this.device);
  }
}
