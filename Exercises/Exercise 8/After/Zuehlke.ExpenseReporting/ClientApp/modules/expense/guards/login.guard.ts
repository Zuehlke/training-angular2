import { NotificationService } from './../../app/services/notification.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: AuthService, private router: Router, private notify: NotificationService) { }

    canActivate() {
        if (!this.loginService.isAuthorized) {
            this.notify.error("You are not authorized to view this page. Pleas log-in first!");
            this.router.navigate(["/home"]);
            return false;
        }

        return true;
    }
}