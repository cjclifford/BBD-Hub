import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import * as camera from 'nativescript-camera';
import { Image } from 'tns-core-modules/ui/image';

@Component({
    selector: "ns-request-form",
    moduleId: module.id,
    templateUrl: "./request-form.component.html"
})
export class RequestFormComponent implements OnInit {

    roomId;
    image: Image;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit(): void {
        this.roomId = this._activatedRoute.snapshot.paramMap.get('id');
        camera.requestPermissions().then(
            function success() {
                camera.takePicture()
                    .then((imageAsset) => {
                        this.image = new Image();
                        this.image.src = imageAsset;
                    }).catch((error) => {
                        console.log('Error: ', error.message);
                });
            },
            function failure() {}
        )
    }

    onNewRequestTap() {
        this._router.navigateByUrl(`/request-form/${this.roomId}`);
    }
}
