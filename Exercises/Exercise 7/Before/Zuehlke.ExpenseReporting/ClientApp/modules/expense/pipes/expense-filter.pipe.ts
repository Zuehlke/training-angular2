import { PipeTransform, Pipe } from '@angular/core';
import { ExpenseRecord } from '../model/expense';

@Pipe({
    name: 'expenseFilter'
})
export class ExpenseFilterPipe implements PipeTransform {

    transform(value: ExpenseRecord[], filterText: string): ExpenseRecord[] {
        if (filterText) {
            filterText = filterText.toLocaleLowerCase();
            return value.filter((expense: ExpenseRecord) =>
                expense.name.toLocaleLowerCase().indexOf(filterText) !== -1);
        }
        return value;
    }
}