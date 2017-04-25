import { IExpenseDetail } from './../components/expense-detail.interface';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ExpenseDetailComponent } from "../components/expense-detail.component";

@Injectable()
export class FormGuard implements CanDeactivate<IExpenseDetail> {

    canDeactivate(component: IExpenseDetail) {
        if (!component) {
            return true;
        }
        return component.isFormValidOrPristine;
    }

}