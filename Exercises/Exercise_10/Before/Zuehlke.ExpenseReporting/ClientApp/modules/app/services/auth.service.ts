import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { isPlatformBrowser} from '@angular/common';

@Injectable()
export class AuthService {

    set isAuthorized(val: boolean) {
        if (isPlatformBrowser(this._platformId)) {
            sessionStorage.setItem("isAuthorized", val + "");
        }
    }

    get isAuthorized(): boolean {
        if (isPlatformBrowser(this._platformId)) {
            return sessionStorage.getItem("isAuthorized") === "true";
        }
        return false;
    }

    constructor(private router: Router, private notify: NotificationService, @Inject(PLATFORM_ID) private _platformId: Object) {
        isPlatformBrowser(this._platformId); 
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