import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapdevicePage } from './mapdevice.page';
//import { ComponentsModule } from '../components/components.module'


const routes: Routes = [
  {
    path: '',
    component: MapdevicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapdevicePage]
})
export class MapdevicePageModule { }
