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
        this._router.navigateByUrl("/request-view/" + room.roomId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBT3pEO0lBV0ksc0JBQ1ksZUFBK0IsRUFDL0IsT0FBZTtRQURmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBWDNCLGNBQVMsR0FBRztZQUNSLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1lBQy9CLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVCLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1lBQy9CLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVCLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO1lBQ2xDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1lBQ2pDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO1NBQ3JDLENBQUM7SUFLRixDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQWlCLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBdEJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBYStCLHVCQUFjO1lBQ3RCLGVBQU07T0FibEIsWUFBWSxDQXVCeEI7SUFBRCxtQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbWFwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYXAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBtb2NrUm9vbXMgPSBbXHJcbiAgICAgICAge3Jvb21JZDogMSwgcm9vbU5hbWU6IFwiQ29sbGFiXCJ9LFxyXG4gICAgICAgIHtyb29tSWQ6IDIsIHJvb21OYW1lOiBcIkJvb1wifSxcclxuICAgICAgICB7cm9vbUlkOiAzLCByb29tTmFtZTogXCJQeXRob25cIn0sXHJcbiAgICAgICAge3Jvb21JZDogNCwgcm9vbU5hbWU6IFwiU1FMXCJ9LFxyXG4gICAgICAgIHtyb29tSWQ6IDUsIHJvb21OYW1lOiBcIkNhZmV0ZXJpYVwifSxcclxuICAgICAgICB7cm9vbUlkOiA2LCByb29tTmFtZTogXCJBc3NlbWJseVwifSxcclxuICAgICAgICB7cm9vbUlkOiA3LCByb29tTmFtZTogXCJHYW1lIFJvb21cIn0sXHJcbiAgICBdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBvblJvb21CdXR0b25UYXAocm9vbSkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvcmVxdWVzdC12aWV3LyR7cm9vbS5yb29tSWR9YCk7XHJcbiAgICB9XHJcbn1cclxuIl19