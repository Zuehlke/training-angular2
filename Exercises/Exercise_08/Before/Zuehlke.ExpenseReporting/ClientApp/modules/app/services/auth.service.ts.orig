import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private router: Router, @Inject(PLATFORM_ID) private _platformId: Object) {
        isPlatformBrowser(this._platformId); 
    }

    fakeLogin(): void {
        this.isAuthorized = true;
    }

    fakeLogout(): void {
        this.isAuthorized = false;
        this.router.navigate(['/home']);
    }
}