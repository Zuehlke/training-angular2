﻿import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ExpenseOverviewComponent } from './expense-overview.component';
import { ExpenseFilterPipe } from '../pipes/expense-filter.pipe';
import { ExpenseService } from '../services/expense.service';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

describe('ExpenseOverviewComponent', () => {

    let expenseOverviewComponent: ExpenseOverviewComponent;
    let fixture: ComponentFixture<ExpenseOverviewComponent>;

    const expense1 = new ExpenseRecord('1', 'Anakin Skywalker', ExpenseReason.Bus, new Date('2016/1/12'), 12.22, 'Visiting Mom');
    const expense2 = new ExpenseRecord('2', 'Yoda', ExpenseReason.Flight, new Date('2016/5/12'), 10, 'Flight to Coruscant');
    const testExpenses = [expense1, expense2];

    let expenseService: ExpenseService;
    let expenseServiceSpy: jasmine.Spy;

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, HttpModule],
            declarations: [ExpenseOverviewComponent, ExpenseFilterPipe],
            providers: [ExpenseService]
        });

        fixture = TestBed.createComponent(ExpenseOverviewComponent);
        expenseOverviewComponent = fixture.componentInstance;

        // Expense service actually injected into the component
        expenseService = fixture.debugElement.injector.get(ExpenseService);
        expenseServiceSpy = spyOn(expenseService, 'getExpenses').and.returnValue(Promise.resolve(testExpenses));
        expenseServiceSpy = spyOn(expenseService, 'deleteExpense').and.returnValue(Promise.resolve({}));
    });

    it('should not show expenses before OnInit', () => {
        expect(expenseServiceSpy.calls.any()).toBe(false, 'getExpenses not yet called');
    });

    it('should show two expenses after OnInit', async(() => { //use async to handle getExpenses request
        fixture.detectChanges();
        fixture.whenStable().then(() => { // wait for async getExpenses
            fixture.detectChanges(); // update view with expsenses

            expect(expenseService.getExpenses).toHaveBeenCalledTimes(1); //check that getExpenses() from the expense service was called

            const tableBody = fixture.debugElement.query(By.css('tbody')); //check for table to contain the two expenses
            expect(tableBody.nativeElement.children.length).toEqual(2);
            expect(tableBody.nativeElement.children[0].children[0].textContent).toContain('ANAKIN SKYWALKER');
            expect(tableBody.nativeElement.children[1].children[0].textContent).toContain('YODA');
        });
    }));

    it('should remove one entry when it is deleted', async(() => { //use async to handle async request
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges(); // update view with expsenses

            const firstExpenseDeleteIcon = fixture.debugElement.query(By.css('tbody > tr td:last-child a')); //query delete icon
            firstExpenseDeleteIcon.triggerEventHandler('click', new Event('dummyEvent')); //trigger a delete

            fixture.detectChanges(); //update view
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(expenseService.deleteExpense).toHaveBeenCalledTimes(1); //check that deleteExpense from the expense service was called
                expect(expenseService.deleteExpense).toHaveBeenCalledWith(expense1); //check that deleteExpense from the expense service was called with Anakin's expense

                const tableBody = fixture.debugElement.query(By.css('tbody')); //check for table to not contain Anakin Skywalker anymore
                expect(tableBody.nativeElement.children.length).toEqual(1);
                expect(tableBody.nativeElement.children[0].children[0].textContent).toContain('YODA');
            });
        });
    }));

});