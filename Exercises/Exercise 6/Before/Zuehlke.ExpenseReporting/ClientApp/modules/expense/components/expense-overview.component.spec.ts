/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { By } from '@angular/platform-browser';

import { ExpenseOverviewComponent } from './expense-overview.component';
import { ExpenseFilterPipe } from '../pipes/expense-filter.pipe';
import { ExpenseService } from '../services/expense.service';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

describe('The ExpenseOverviewComponent', () => {

    let expenseOverviewComponent: ExpenseOverviewComponent;
    let fixture: ComponentFixture<ExpenseOverviewComponent>;
    let expenseService: ExpenseService;

    const expense1 = new ExpenseRecord('1', 'Anakin Skywalker', ExpenseReason.Bus, new Date('2016/1/12'), 12.22, 'Visiting Mom');
    const expense2 = new ExpenseRecord('2', 'Yoda', ExpenseReason.Flight, new Date('2016/5/12'), 10, 'Flight to Coruscant');
    const testExpenses = [expense1, expense2];

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule,
                HttpModule
            ],
            declarations: [
                ExpenseOverviewComponent,
                ExpenseFilterPipe
            ],
            providers: [
                ExpenseService
            ]
        });

        fixture = TestBed.createComponent(ExpenseOverviewComponent);
        expenseOverviewComponent = fixture.componentInstance;

        expenseService = fixture.debugElement.injector.get(ExpenseService);
    });

    it('should not show expenses before OnInit', () => {
        spyOn(expenseService, 'getExpenses').and.returnValue(Promise.resolve(testExpenses));
        expect(expenseService.getExpenses).not.toHaveBeenCalled();
    });

    it('should show two expenses after OnInit', async () => {
        spyOn(expenseService, 'getExpenses').and.returnValue(Promise.resolve(testExpenses));

        fixture.detectChanges();
        await fixture.whenStable();

        expect(expenseService.getExpenses).toHaveBeenCalledTimes(1);

        const tableBody = fixture.debugElement.query(By.css('tbody'));
        expect(tableBody.nativeElement.children.length).toEqual(2);
        expect(tableBody.nativeElement.children[0].children[0].textContent).toContain('ANAKIN SKYWALKER');
        expect(tableBody.nativeElement.children[1].children[0].textContent).toContain('YODA');
    });
});