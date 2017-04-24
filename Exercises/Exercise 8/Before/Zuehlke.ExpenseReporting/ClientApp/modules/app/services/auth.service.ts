import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isAuthorized: Boolean;

    fakeLogin(): void {
        this.isAuthorized = true;
    }    

    fakeLogout(): void {
        this.isAuthorized = false;
    }

}