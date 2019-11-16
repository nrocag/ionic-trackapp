import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mapdevice',
    loadChildren: () => import('./mapdevice/mapdevice.module').then(m => m.MapdevicePageModule)
    //loadChildren: './mapdevice/mapdevice.module#MapdevicePageModule'
  },
  {
    path: 'deviceadmin',
    loadChildren: () => import('./deviceadmin/deviceadmin.module').then(m => m.DeviceadminPageModule)
  },
  {
    path: 'deviceslist',
    loadChildren: () => import('./deviceslist/deviceslist.module').then(m => m.DeviceslistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
