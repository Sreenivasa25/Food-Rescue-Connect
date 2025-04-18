import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  center = { lat: 12.9716, lng: 77.5946 };
  zoom = 12;
  markers: any[] = [];

  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.postsSvc.getAll().subscribe(data => {
      this.markers = data.map(p => ({
        position: this.fakeGeo(p.address),
        title: p.title
      }));
    });
  }

  fakeGeo(address: string) {
    return { lat: this.center.lat + Math.random() * 0.05, lng: this.center.lng + Math.random() * 0.05 };
  }
}
