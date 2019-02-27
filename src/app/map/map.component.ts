import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/room.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _roomsService: RoomsService) {}

  public requests;

  ngOnInit() {
    console.log('map component');
    this._roomsService.getAllRequests().subscribe(
      data => {
        this.requests = data;
        console.log(data);
      }
    );
  }

}
