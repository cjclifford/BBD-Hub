import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-map",
    moduleId: module.id,
    templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {

    mockRooms = [
        {roomId: 1, roomName: "Collab"},
        {roomId: 2, roomName: "Boo"},
        {roomId: 3, roomName: "Python"},
        {roomId: 4, roomName: "SQL"},
        {roomId: 5, roomName: "Cafeteria"},
        {roomId: 6, roomName: "Assembly"},
        {roomId: 7, roomName: "Game Room"},
    ];
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onRoomButtonTap(room) {
        this._router.navigateByUrl('/request-view');
    }
}
