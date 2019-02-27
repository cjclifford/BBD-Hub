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
      rooms => {
        this._sharedService.rooms = rooms;
        this.rooms = rooms;
        console.log(this.rooms);
      }
    );
  }
}
