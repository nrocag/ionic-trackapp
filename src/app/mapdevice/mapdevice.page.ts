import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapdevice',
  templateUrl: './mapdevice.page.html',
  styleUrls: ['./mapdevice.page.scss'],
})
export class MapdevicePage implements OnInit {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyB-FuhPd8c7lgG_v8v6GSsUbWJMZOCMqds`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(AIzaSyB-FuhPd8c7lgG_v8v6GSsUbWJMZOCMqds`)'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  ngOnInit() {
  }

}
