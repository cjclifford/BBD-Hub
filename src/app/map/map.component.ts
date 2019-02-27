import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/room.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private _roomsService: RoomsService,
    private _sharedService: SharedService
  ) {}

  rooms;

  ngOnInit() {
    this._roomsService.getAllRooms().subscribe(
      data => {
        this._sharedService.rooms = data;
        this.rooms = data;
        console.log(this.rooms);
      }
    );
  }
}
