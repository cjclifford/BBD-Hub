import { Component, OnInit } from '@angular/core';
import { requests } from 'src/request';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  mRequests: requests[];

  rooms;
    
  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.rooms = this._sharedService.rooms;
  }

}
