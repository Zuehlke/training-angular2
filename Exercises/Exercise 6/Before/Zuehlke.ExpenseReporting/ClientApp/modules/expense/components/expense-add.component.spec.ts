import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RouterStub } from '../../../utils/testutils';

import { ExpenseAddComponent } from './expense-add.component';
import { ExpenseFormComponent } from './expense-form.component';
import { ExpenseService } from '../services/expense.service';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

describe('ExpenseDetailComponent', () => {

    let expenseAddComponent: ExpenseAddComponent;
    let fixture: ComponentFixture<ExpenseAddComponent>;
    let expenseService: ExpenseService;

    const newExpense = new ExpenseRecord(null, 'Palpatine', ExpenseReason.Hotel, new Date('1999/1/12'), 54.00, 'Reasoning about the dark side of the force');

    beforeAll(()=>{
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });	
	
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, HttpModule],
            declarations: [ExpenseAddComponent, ExpenseFormComponent],
            providers: [ExpenseService, { provide: Router, useClass: RouterStub }]
        });

        fixture = TestBed.createComponent(ExpenseAddComponent);
        expenseAddComponent = fixture.componentInstance;

        // Expense service actually injected into the component
        expenseService = fixture.debugElement.injector.get(ExpenseService);
        spyOn(expenseService, 'updateExpense').and.returnValue(new BehaviorSubject({}).asObservable());
        spyOn(expenseService, 'createExpense').and.returnValue(new BehaviorSubject({}).asObservable());
    });

    it('should navigate to overview when back button is clicked', inject([Router], (router: Router) => {
        fixture.detectChanges();

        const spy = spyOn(router, 'navigate');

        const backButton = fixture.debugElement.query(By.css('.btn-default'));
        backButton.triggerEventHandler('click', null); //click back button

        const routerArguments = spy.calls.first().args[0]; //check that router was called with overview route
        expect(routerArguments).toEqual(['/expense']);
    }));

    it('should create a new expense if the save button was clicked', async(inject([Router], (router: Router) => {
        const spy = spyOn(router, 'navigate');
        expenseAddComponent.expense = newExpense;
        fixture.detectChanges();

        const saveButton = fixture.debugElement.query(By.css('.btn-primary'));
        saveButton.triggerEventHandler('click', null); //trigger a save

        fixture.whenStable().then(() => {
            expect(expenseService.createExpense).toHaveBeenCalledTimes(1);
            expect(expenseService.createExpense).toHaveBeenCalledWith(newExpense);
            expect(expenseService.updateExpense).not.toHaveBeenCalled();

            const routerArguments = spy.calls.first().args[0]; //check that router was called with overview route
            expect(routerArguments).toEqual(['/expense']);
        });
    })));

});