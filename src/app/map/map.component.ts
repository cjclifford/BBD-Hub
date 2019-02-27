import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _requestService: RequestsService) {}

  public requests;

  ngOnInit() {
    console.log('map component');
    this._requestService.getAllRequests().subscribe(
      data => {
        this.requests = data.recordset;
      }
    );
  }

}
