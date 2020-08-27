import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { Map, View } from 'ol';
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
  @ViewChild('mapDiv') mapDivView: ElementRef;
  public map: Map;
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
