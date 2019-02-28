"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MapComponent = /** @class */ (function () {
    function MapComponent(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.mockRooms = [
            { roomId: 1, roomName: "Collab" },
            { roomId: 2, roomName: "Boo" },
            { roomId: 3, roomName: "Python" },
            { roomId: 4, roomName: "SQL" },
            { roomId: 5, roomName: "Cafeteria" },
            { roomId: 6, roomName: "Assembly" },
            { roomId: 7, roomName: "Game Room" },
        ];
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.onRoomButtonTap = function (room) {
        this._router.navigateByUrl('/request-view');
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "ns-map",
            moduleId: module.id,
            templateUrl: "./map.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBT3pEO0lBV0ksc0JBQ1ksZUFBK0IsRUFDL0IsT0FBZTtRQURmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBWDNCLGNBQVMsR0FBRztZQUNSLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1lBQy9CLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVCLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1lBQy9CLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVCLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO1lBQ2xDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1lBQ2pDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO1NBQ3JDLENBQUM7SUFLRixDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXRCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQWErQix1QkFBYztZQUN0QixlQUFNO09BYmxCLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1hcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbW9ja1Jvb21zID0gW1xyXG4gICAgICAgIHtyb29tSWQ6IDEsIHJvb21OYW1lOiBcIkNvbGxhYlwifSxcclxuICAgICAgICB7cm9vbUlkOiAyLCByb29tTmFtZTogXCJCb29cIn0sXHJcbiAgICAgICAge3Jvb21JZDogMywgcm9vbU5hbWU6IFwiUHl0aG9uXCJ9LFxyXG4gICAgICAgIHtyb29tSWQ6IDQsIHJvb21OYW1lOiBcIlNRTFwifSxcclxuICAgICAgICB7cm9vbUlkOiA1LCByb29tTmFtZTogXCJDYWZldGVyaWFcIn0sXHJcbiAgICAgICAge3Jvb21JZDogNiwgcm9vbU5hbWU6IFwiQXNzZW1ibHlcIn0sXHJcbiAgICAgICAge3Jvb21JZDogNywgcm9vbU5hbWU6IFwiR2FtZSBSb29tXCJ9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Sb29tQnV0dG9uVGFwKHJvb20pIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3JlcXVlc3QtdmlldycpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==