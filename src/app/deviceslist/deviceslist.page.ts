import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service'
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.page.html',
  styleUrls: ['./deviceslist.page.scss'],
})
export class DeviceslistPage implements OnInit {

  public items: [];

  constructor(public apiService: ApiService, public navController: NavController, public router: Router) {

  }

  ionViewDidEnter() {
    this.getList();
  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.apiService.getDevices().subscribe(response => {
      this.items = response;
    });
  }

  public editDevice(item: any) {
    console.log("item", item);
    this.router.navigate(['deviceadmin',
      {
        name: item.name,
        id: item._id,
        description: item.description,
        category: item.category,
        serie: item.serie
      }]);
  }

  public removeDevice(item: any) {
    this.apiService.deleteDevice(item._id).subscribe(() => {
      this.getList();
    });
  }
}
