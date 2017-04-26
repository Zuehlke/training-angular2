import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class NotificationService {

    info(message: string): void {
        alert(`INFO: ${message}`);
    }
    warning(message: string): void {
        alert(`WARNING: ${message}`);
    }
    error(message: string): void {
        alert(`ERROR: ${message}`);
    }
    success(message: string): void {
        alert(`SUCCESS: ${message}`);
    }
}