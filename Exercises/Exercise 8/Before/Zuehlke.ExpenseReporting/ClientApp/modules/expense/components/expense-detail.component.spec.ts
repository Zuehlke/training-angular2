import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ActivatedRouteStub, RouterStub } from '../../../utils/testutils';

import { ExpenseDetailComponent } from './expense-detail.component';
import { ExpenseFormComponent } from './expense-form.component';
import { ExpenseService } from '../services/expense.service';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

describe('ExpenseDetailComponent', () => {

    let expenseDetailComponent: ExpenseDetailComponent;
    let fixture: ComponentFixture<ExpenseDetailComponent>;

    const expense1 = new ExpenseRecord('00000000-0000-0000-0000-000000000001', 'Anakin Skywalker', ExpenseReason.Bus, new Date('2016/1/12'), 12.22, 'Visiting Mom');
    const expense2 = new ExpenseRecord('00000000-0000-0000-0000-000000000002', 'Yoda', ExpenseReason.Flight, new Date('2016/5/12'), 10, 'Flight to Coruscant');
    const testExpenses = [expense1, expense2];

    let expenseService: ExpenseService;

    const activatedRoute = new ActivatedRouteStub();

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, HttpModule],
            declarations: [ExpenseDetailComponent, ExpenseFormComponent],
            providers: [ExpenseService, { provide: ActivatedRoute, useValue: activatedRoute }, { provide: Router, useClass: RouterStub }]
        });

        fixture = TestBed.createComponent(ExpenseDetailComponent);
        expenseDetailComponent = fixture.componentInstance;

        // Expense service actually injected into the component
        expenseService = fixture.debugElement.injector.get(ExpenseService);
        spyOn(expenseService, 'getExpenses').and.returnValue(new BehaviorSubject(testExpenses).asObservable());
        spyOn(expenseService, 'updateExpense').and.returnValue(new BehaviorSubject({}).asObservable());
        spyOn(expenseService, 'createExpense').and.returnValue(new BehaviorSubject({}).asObservable());
    });

    it('should load the correct expense', async(() => {
        activatedRoute.testParams = { id: expense1.id };
		spyOn(expenseService, 'getExpense').and.returnValue(new BehaviorSubject(expense1).asObservable());
        
		fixture.detectChanges();

        fixture.whenStable().then(() => { // wait for async getExpenses
            fixture.detectChanges(); // update view with expsense

            expect(expenseDetailComponent.expense).toEqual(expense1); //check whether Anakins expense is shown

            const title = fixture.debugElement.query(By.css('.panel-heading')).nativeElement;
            expect(title.textContent).toEqual('Receipt from ' + expense1.name);
        });
    }));

    it('should navigate to overview when back button is clicked', inject([Router], (router: Router) => {
        expenseDetailComponent.expense = expense1;
		fixture.detectChanges();

        const spy = spyOn(router, 'navigate');

        const backButton = fixture.debugElement.query(By.css('.btn-default'));
        backButton.triggerEventHandler('click', null); //click back button

        const routerArguments = spy.calls.first().args[0]; //check that router was called with overview route
        expect(routerArguments).toEqual(['/expense']);
    }));

    it('should update an expense if the save button was clicked', async(inject([Router], (router: Router) => {
        const spy = spyOn(router, 'navigate');

        expenseDetailComponent.expense = expense1;
        fixture.detectChanges();

        const saveButton = fixture.debugElement.query(By.css('.btn-primary'));
        saveButton.triggerEventHandler('click', null); //trigger a save

        fixture.whenStable().then(() => {
            expect(expenseService.updateExpense).toHaveBeenCalledTimes(1);
            expect(expenseService.updateExpense).toHaveBeenCalledWith(expense1);
            expect(expenseService.createExpense).not.toHaveBeenCalled();

            const routerArguments = spy.calls.first().args[0]; //check that router was called with overview route
            expect(routerArguments).toEqual(['/expense']);
        });
    })));

});