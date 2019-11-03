import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.page.html',
  styleUrls: ['./deviceslist.page.scss'],
})
export class DeviceslistPage implements OnInit {

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ name: string; description: string; serie: string; icon: string; stateDevice: boolean }> = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        name: 'Item ' + i,
        description: 'This is item #' + i,
        serie: 'Serial ' + (i * 100),
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        stateDevice: i % 2 === 0
      });
    }
  }

  public editDevice(item: any) {

  }

  public removeDevice(item: any) {

  }

  ngOnInit() {
  }

}
