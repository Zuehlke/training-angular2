import { ExpenseFormComponent } from '../components/expense-form.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class FormGuard implements CanDeactivate<ExpenseFormComponent> {

    canDeactivate(component: ExpenseFormComponent) {
        if (!component) {
            return true;
        }
        return component.isFormSaved;
    }

}