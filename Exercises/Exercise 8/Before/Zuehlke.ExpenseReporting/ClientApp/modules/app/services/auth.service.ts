import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    isAuthorized: Boolean;

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