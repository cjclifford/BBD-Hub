import { Component, OnInit } from '@angular/core';
import { requests } from 'src/request';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  mRequests: requests[];
    
  constructor() { }

  ngOnInit() {
  }

}
