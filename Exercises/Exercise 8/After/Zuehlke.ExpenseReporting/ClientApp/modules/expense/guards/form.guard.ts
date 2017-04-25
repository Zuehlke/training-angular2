import { IExpenseDetail } from './../components/expense-detail.interface';
import { NotificationService } from './../../app/services/notification.service';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ExpenseDetailComponent } from "../components/expense-detail.component";

@Injectable()
export class FormGuard implements CanDeactivate<IExpenseDetail> {

    constructor(private notify: NotificationService) {
    }

    canDeactivate(component: IExpenseDetail) {
        if (!component) {
            return true;
        }
        if (!component.isFormValidOrPristine) {
            this.notify.warning("Please ensure the data on this form is valid before navigating away!");
        }
        return component.isFormValidOrPristine;
    }

}