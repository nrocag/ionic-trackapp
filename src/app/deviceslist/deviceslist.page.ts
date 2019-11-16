import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service'

@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.page.html',
  styleUrls: ['./deviceslist.page.scss'],
})
export class DeviceslistPage implements OnInit {

  public items: [];

  constructor(public apiService: ApiService) {

  }

  ionViewDidEnter() {
    this.getList();
  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.apiService.getDevices().subscribe(response => {
      console.log("Response", response);
      this.items = response;
    });
  }

  public editDevice(item: any) {

  }

  public removeDevice(item: any) {
    this.apiService.deleteDevice(item._id).subscribe(response => {
      console.log("Response", response);
      this.getList();
    });
  }
}
