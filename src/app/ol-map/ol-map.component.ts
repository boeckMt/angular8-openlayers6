import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

// import { Map, View } from 'ol';
import View from 'ol/View.js';
import Map from 'ol/src/Map.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Attribution from 'ol/control/Attribution';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OlMapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv', { static: false }) mapDivView: ElementRef;
  public map;
  constructor() { }

  ngAfterViewInit() {
    this.map.setTarget(this.mapDivView.nativeElement);
  }

  ngOnInit() {
    this.map = new Map({
      controls: [
        new Attribution({
          collapsible: true,
          collapsed: true
        })
      ],
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });
  }

}
