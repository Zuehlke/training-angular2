import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord, ExpenseReason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'expense-form',
    template: require('./expense-form.component.html')
})
export class ExpenseFormComponent implements OnInit {

    @Input()
    expense: ExpenseRecord;

    constructor(private formBuilder: FormBuilder) { }

    @ViewChild("expenseForm")
    expenseForm: any;

    ngOnInit() {
        this.expenseForm.control.valueChanges.subscribe(() => {
            this.isFormValidOrPristine = this.expenseForm.valid || this.expenseForm.pristine;
        });
    }

    private isFormValidOrPristineValue = true;

    @Output()
    isFormValidOrPristineChange = new EventEmitter<boolean>();

    @Input()
    get isFormValidOrPristine(): boolean {
        return this.isFormValidOrPristineValue;
    }

    set isFormValidOrPristine(val) {
        this.isFormValidOrPristineValue = val;
        this.isFormValidOrPristineChange.emit(this.isFormValidOrPristineValue);
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