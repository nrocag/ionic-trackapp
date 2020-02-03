import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service'
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
    stateDevice: true,
    _id: ""
  }

  constructor(public apiService: ApiService, public navController: NavController, public router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      //console.log("edit params", params.get("item"));
      this.device.name = params.get("name");
      this.device._id = params.get("id");
      this.device.description = params.get("description");
      this.device.category = params.get("category");
      this.device.serie = params.get("serie");

      console.log("device", this.device);
    });
  }

  submitForm() {
    try {
      console.log("device", this.device);
      if (this.device._id == "") {
        this.apiService.createDevice(this.device).subscribe(response => {
          console.log("Response", response);
          this.navController.back();
        });
      }
      else {
        this.apiService.editDevice(this.device).subscribe(response => {
          console.log("Response", response);
          this.navController.back();
        });
      }
    } catch (error) {
      console.error("Error", error);
    }
  }
}
