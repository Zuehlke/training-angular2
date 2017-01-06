import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord, ExpenseReason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    selector: 'expense-form',
    template: require('./expense-form.component.html')
})
export class ExpenseFormComponent {

    @Input()
    expense: ExpenseRecord;


    get reasons() {
        let theReasons = [];
        for (var property in ExpenseReason) {
            if (ExpenseReason.hasOwnProperty(property) && !isNaN(parseInt(property))) {
                theReasons.push(ExpenseReason[property]);
            }
        }

        return theReasons;
    }
}


