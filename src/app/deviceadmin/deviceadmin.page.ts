import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service'
import { Device } from '../Models/device';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-deviceadmin',
  templateUrl: './deviceadmin.page.html',
  styleUrls: ['./deviceadmin.page.scss'],
})
export class DeviceadminPage implements OnInit {

  public device: Device = {
    category: 0,
    description: "",
    id: 0,
    name: "",
    serie: "",
    stateDevice: true,
    _id: ""
  }

  constructor(public apiService: ApiService,
    public navController: NavController) {
    //this.device.name = "Luis";
  }

  ngOnInit() {
  }

  submitForm() {
    try {
      console.log("device", this.device);
      this.apiService.createDevice(this.device).subscribe(response => {
        console.log("Response", response);
        this.navController.back();
      });
    } catch (error) {
      console.error("Error", error);
    }
  }
}
