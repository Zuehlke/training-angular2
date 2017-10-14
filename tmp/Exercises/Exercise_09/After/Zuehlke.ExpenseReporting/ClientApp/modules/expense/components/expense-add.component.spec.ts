/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RouterStub } from '../../../utils/testutils';

import { ExpenseAddComponent } from './expense-add.component';
import { ExpenseFormComponent } from './expense-form.component';
import { ExpenseService } from '../services/expense.service';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

import { NotificationService } from './../../app/services/notification.service';
import { ToastModule } from 'ng2-toastr'; 

describe('The ExpenseDetailComponent', () => {

    let expenseAddComponent: ExpenseAddComponent;
    let fixture: ComponentFixture<ExpenseAddComponent>;
    let expenseService: ExpenseService;

    const newExpense = new ExpenseRecord("", 'Palpatine', ExpenseReason.Hotel, new Date('1999/1/12'), 54.00, 'Reasoning about the dark side of the force');

    beforeAll(()=>{
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, HttpModule, ToastModule.forRoot()],
            declarations: [ExpenseAddComponent, ExpenseFormComponent],
            providers: [ExpenseService, NotificationService, FormBuilder, { provide: Router, useClass: RouterStub }]
        });

        fixture = TestBed.createComponent(ExpenseAddComponent);
        expenseAddComponent = fixture.componentInstance;

        expenseService = fixture.debugElement.injector.get(ExpenseService);
    });

    it('should navigate to overview when back button is clicked', inject([Router], (router: Router) => {
        const routerSpy = spyOn(router, 'navigate');
        fixture.detectChanges();

        const backButton = fixture.debugElement.query(By.css('.btn-default'));
        backButton.triggerEventHandler('click', null);

        const routerArguments = routerSpy.calls.first().args[0];
        expect(routerArguments).toEqual(['/expense']);
    }));

    it('should create a new expense if the save button was clicked', inject([Router], async (router: Router) => {
        spyOn(expenseService, 'updateExpense').and.returnValue(Promise.resolve());
        spyOn(expenseService, 'createExpense').and.returnValue(Promise.resolve());
        const routerSpy = spyOn(router, 'navigate');
        
        expenseAddComponent.expense = newExpense;
        fixture.detectChanges();

        const saveButton = fixture.debugElement.query(By.css('.btn-primary'));
        saveButton.triggerEventHandler('click', null); //trigger a save

        await fixture.whenStable();
        expect(expenseService.createExpense).toHaveBeenCalledTimes(1);
        expect(expenseService.createExpense).toHaveBeenCalledWith(newExpense);
        expect(expenseService.updateExpense).not.toHaveBeenCalled();

        const routerArguments = routerSpy.calls.first().args[0]; //check that router was called with overview route
        expect(routerArguments).toEqual(['/expense']);
    }));
});