import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { transform } from "ol/proj";
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
  WebMercator = "EPSG:3857";
  WGS84 = "EPSG:4326";
  constructor() { }

  ngAfterViewInit(): void {
    this.map.setTarget(this.mapDivView.nativeElement);
  }

  ngOnInit(): void {


    const WebMercator = "EPSG:3857";
    const WGS84 = "EPSG:4326";

    const osmLayer = new TileLayer({
      source: new OSM()
    });


    this.map = new Map({
      controls: [
        new Attribution({
          collapsible: true,
          collapsed: true
        })
      ],
      layers: [
        osmLayer
      ],
      view: new View({
        center: transform(
          [-111.10153522152252, 12.879058994639166],
          WGS84,
          WebMercator
        ),
        zoom: 2.6,
        projection: WebMercator
      })
    });
  }
}
