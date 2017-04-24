import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord, ExpenseReason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'expense-form',
    template: require('./expense-form.component.html')
})
export class ExpenseFormComponent {

    @Input()
    expense: ExpenseRecord;

    // @ViewChild("expenseForm")
    // expenseForm: ElementRef;

    expenseFormGroup = new FormGroup({});

    get isFormSaved(): boolean {
        return this.expenseFormGroup.valid || this.expenseFormGroup.pristine;
    }

    get reasons() {
        let availableReasons = [];
        for (var property in ExpenseReason) {
            if (ExpenseReason.hasOwnProperty(property) && !isNaN(parseInt(property))) {
                availableReasons.push(ExpenseReason[property]);
            }
        }
        return availableReasons;
    }
}