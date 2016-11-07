import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-detail.component.html')
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {

    expense: Expense;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                const id = params['id'];
                
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private setExpense(id: string): void {
        
    }

    goBack(): void {
        this.router.navigate(['/overview']);
    }

    private handleError(error: any): Observable<any> {
        console.error('Error with expense: ' + this.expense);
        return Observable.throw(error);
    }

}