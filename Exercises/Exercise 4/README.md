## Exercise 4: Edit a record ##

In this exercise you will extend the application to viewing and editing the details of an expense record.

### Before you start ###

Open the solution contained in the [Before][1] folder of this tutorial. After opening the solution for the first time, open a console window, switch to the [Zuehlke.ExpenseReporting][2] folder and run

```bash
npm install
```

followed by

```bash
webpack --config webpack.config.vendor.js
```

to make sure all dependencies are loaded and the vendor scripts have been built and included properly.

### Tasks ###

1. Add the provided expense form into the panel body of the detail view and provide the correct expense as input to the form component.
2. Extend the form component's HTML so that all fields of an expense (except the id) can be updated.
3. Extend the ExpenseController to support updating an expense record.
4. Extend the ExpenseService to support updating an expense record.
5. Add a save button to the detail view and register a click handler that persists changes.

### Detailed Steps ###

#### 1. Add the expense form to detail view ####

1. Use the selector `<expense-form>` from the expense-form.component.ts to reference the expense form in the detail view.
2. Use a property binding to bind the `expense` property of the detail view to the `expense` property of the expense form.

  By now the panel body of the detail view should look like this:
  ```html
<div class="panel-body">
      <div class="alert alert-danger" *ngIf="errorMessage" role="alert"><strong>Oh snap!</strong> {{errorMessage}}</div>
      <expense-form [expense]="expense"></expense-form>
</div>  
  ```

#### 2. Extend the expense form ####

1. Add a form-group to the expense form to handle the `text` property of an expense. Use a `<textarea>` element with two rows (`rows="2"`) to edit the text.
2. Add a form-group to the expense form to handle the `amount` property of an expense. Use an `<input>` element with the type set to date (`type="date"`).
3. Add the missing `<option>`s to the `<select>` element.

#### 3. Extend the ExpenseController ####

1. Create a method named `Put()` returning an `IAsyncResult` and decorate this method using the `[HttpPut({id})]` attribute.
1. Extend the method to have a parameter of type `ExpenseRecord` that is decorated with the `[FromBody]` attribute.
1. Invoke the `Update(Expense expense)` method of the repository passing the expense record that is to be updated:
  * If the delete method returns fine return `this.NoContent(`).
  * If the delete method throws an InvalidOperationException return `this.NotFound()`.
  * If the delete method throws an ArgumentNullException return `this.BadRequest()`.

  The update method of the controller should look like this now:
  ```csharp
[HttpPut("{id}")]
public IActionResult Put([FromBody]ExpenseRecord record)
{
        try
        {
            this.repository.Update(record);
            return this.NoContent();
        }
        catch (ArgumentNullException)
        {
            return this.BadRequest();
        }
        catch (InvalidOperationException)
        {
            return this.NotFound();
        }
}
  ```

#### 4. Extend the ExpenseService ####

1. Create a method named `updateExpense(expense: Expense)` that returns an `Observable<Response>`. Within this method invoke the `put()` method of the Http service using the URL /api/expenses/{id} and the expense passed into the method as body to update the specified expense.

  The update method of the service should look like this now:
  ```typescript
updateExpense(expense: Expense): Observable<Response> {
      return this.http.put(`${this.expenseUrl}/${expense.id}`, expense);
}
  ```

#### 5. Add a save button ####

1. Implement the `saveExpense()` method in the detail component to invoke the `updateExpense()` method of the `ExpenseService`.
1. Call the `subscribe()` method to return to the expense overview or call the `handleError()` method to provide an error message to the user.

  The save expense method of the detail component should look like this now:

  ```typescript
saveExpense(): void {
      this.expenseService.updateExpense(this.expense)
          .subscribe(() => { this.goBack() }, error => { this.handleError(error) });
}
  ```

1. Surround the existing button in the detail view with a button-group (see [getbootstrap.com](http://www.getbootstrap.com) for help).
1. Add a second button to the group. Mark this button as the primary button and change the icon to the save icon. Set the caption to "Save Expense".
1. Add the `saveExpense()` method as a click handler to the newly created button.


