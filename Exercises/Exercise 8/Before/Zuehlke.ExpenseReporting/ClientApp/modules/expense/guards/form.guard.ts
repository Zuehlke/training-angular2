import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ExpenseDetailComponent } from "../components/expense-detail.component";


@Injectable()
export class FormGuard implements CanDeactivate<ExpenseDetailComponent> {

    canDeactivate(component: ExpenseDetailComponent) {
        if (!component) {
            return true;
        }
        return component.isFormValidOrPristine;
    }

}