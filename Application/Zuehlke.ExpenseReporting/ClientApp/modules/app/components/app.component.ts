import { NotificationService } from './../services/notification.service';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {
    constructor(notificationService:NotificationService, viewContainerRef:ViewContainerRef){
        notificationService.setNotificationRoot(viewContainerRef);
    }
}