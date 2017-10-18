import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class NotificationService {
    constructor(public toastr: ToastsManager) {
     }

    info(message: string): void {
        this.toastr.info(message, "INFO", {showCloseButton: true});
    }
    warning(message: string): void {
        this.toastr.warning(message, "WARNING", {showCloseButton: true});
    }
    error(message: string): void {
        this.toastr.error(message, "ERROR", {showCloseButton: true});
    }
    success(message: string): void {
        this.toastr.success(message, "SUCCESS", {showCloseButton: true});
    }

    setNotificationRoot(viewContainerRef: ViewContainerRef){
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
}