import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { isBrowser } from 'angular2-universal';

@Injectable()
export class AuthService {

    set isAuthorized(val: boolean) {
        if (isBrowser) {
            sessionStorage.setItem("isAuthorized", val + "");
        }
    }

    get isAuthorized(): boolean {
        if (isBrowser) {
            return sessionStorage.getItem("isAuthorized") === "true";
        }
        return false;
    }

    constructor(private router: Router, private notify: NotificationService) {
    }

    fakeLogin(): void {
        this.isAuthorized = true;
        this.notify.success("You are now logged in!");
    }

    fakeLogout(): void {
        this.isAuthorized = false;
        this.notify.info("You have successfully logged out!");
        this.router.navigate(['/home']);
    }
}