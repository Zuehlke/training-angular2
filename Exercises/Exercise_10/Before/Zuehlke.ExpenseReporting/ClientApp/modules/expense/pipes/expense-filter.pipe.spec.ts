/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { ExpenseFilterPipe } from './expense-filter.pipe';
import { ExpenseRecord, ExpenseReason } from '../model/expense';

describe('ExpenseFilterPipe', () => {
    const pipe = new ExpenseFilterPipe();

    it('should filter out expenses that do not include <<Ana>>', () => {
        const expense1 = new ExpenseRecord('1', 'Anakin Skywalker', ExpenseReason.Hotel, new Date('2016/10/11'), 12.20, 'Night on Coruscant with Obi Wan');
        const expense2 = new ExpenseRecord('1', 'Obi Wan', ExpenseReason.Hotel, new Date('2016/10/12'), 12.20, 'Night on Coruscant with Anakin');
        const expenses = [expense1, expense2];

        expect(pipe.transform(expenses, 'Ana')[0]).toEqual(expense1); //check that only Anakin Skywalker is returned
    });
});