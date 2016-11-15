import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Expense, Reason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    selector: 'expense-form',
    template: require('./expense-form.component.html')
})
export class ExpenseFormComponent {

    @Input() expense: Expense;


    get reasons() {
        let theReasons = [];
        for (var property in Reason) {
            if (Reason.hasOwnProperty(property) && !isNaN(parseInt(property))) {
                theReasons.push(Reason[property]);
            }
        }

        return theReasons;
    }
}


