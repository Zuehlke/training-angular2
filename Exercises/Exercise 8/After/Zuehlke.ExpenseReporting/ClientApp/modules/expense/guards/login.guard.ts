import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: AuthService, private router: Router) { }

    canActivate() {
        if (!this.loginService.isAuthorized) {
            this.router.navigate(["/home"]);
            return false;
        }

        return true;
    }
}