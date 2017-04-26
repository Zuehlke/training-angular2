import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private router:Router){
    }

    fakeLogin(): void {
        this.isAuthorized = true;
    }    

    fakeLogout(): void {
        this.isAuthorized = false;
        this.router.navigate(['/home']);
    }
}