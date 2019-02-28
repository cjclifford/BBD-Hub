import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-request-view",
    moduleId: module.id,
    templateUrl: "./request-view.component.html"
})
export class RequestViewComponent implements OnInit {

    roomId;
    requests = [
        { requestId: 1, roomId: 1, flagId: 1, description: '', requestImage: 'https://static1.squarespace.com/static/55803cbbe4b0206c1dc1d585/t/5645c430e4b0b35dc7f0cae6/1447412964452/IMG_1796.JPG' },
        { requestId: 2, roomId: 3, flagId: 1, description: 'Card keeps declining', requestImage: 'https://pixel.nymag.com/imgs/fashion/daily/2017/06/21/21-vending-machine.w710.h473.2x.jpg' },
        { requestId: 3, roomId: 5, flagId: 2, description: '', requestImage: '' },
        { requestId: 4, roomId: 1, flagId: 1, description: '', requestImage: '' },
        { requestId: 5, roomId: 3, flagId: 2, description: '', requestImage: '' },
        { requestId: 6, roomId: 1, flagId: 2, description: '', requestImage: '' },
    ];

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit(): void {
        this.roomId = this._activatedRoute.snapshot.paramMap.get('id');
    }

    onNewRequestTap() {
        this._router.navigateByUrl(`/request-form/${this.roomId}`);
    }
}
