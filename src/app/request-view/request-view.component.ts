import { Component, OnInit } from '@angular/core';
import { requests } from 'src/request';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  mRequests: requests[];

  rooms;
    
  constructor(
    private _sharedService: SharedService,
    private _requestsService: RequestsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rooms = this._sharedService.rooms;
    this._requestsService.getRequestByRoomId(this._activatedRoute.snapshot.paramMap.get('id'));
  }

}
