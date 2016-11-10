## Exercise 3 ##

In this exercise, we add the possibility to delete an exisiting expense in the overview. For that matter, we have to adapt the client (i.e. the HTML, the component and the service) as well as the backend (the Controller and the Repository).

### Preparations ###

Make sure after the checkout that you go to the `Zuehlke.ExpenseReporting` directory and run

	npm install

and then

	webpack --config webpack.config.vendor.js

### Tasks ###

1. Extend the Overview HTML and add a delete button in every row of the expenses table

2. Add a method in the overview component that deletes an expense and is called when the user clicks the delete button to delete an expense.

3. Extend the expense-service so it can send an HTTP DELETE request to the backend in order to effectively delete an expense.

4. Implement the delete method in the `ExpenseController` and the `ExpenseRepository` on the server side.

### Implementation Hints ###

1. Add a new `<td>` and a new `<th>` in the `expense-overview.component.html`. Futhermore, add a button for every expense with a click handler (`(click)="methodToImplement()"`) that deletes an expense

2. Add a method in the `expense-overview.component.ts` and delegate the acutal deletion to the `expense-services.ts`

3. Add a method in `expense-services.ts` that performs the HTTP DELETE request - use `this.http.delete(url, headers)` and return it. In the component, subscribe to the returned Observable from the service.

4. Delete the entry from the repository in the method `Delete(Guid id)` in the `ExpenseController`.


