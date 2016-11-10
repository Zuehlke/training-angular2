## Exercise 4 ##

In this exercise, we add the possibility to edit an exisiting expense. For that matter, we have to adapt the client (i.e. the HTML, the component and the service) as well as the backend (the Controller and the Repository).

### Preparations ###

Make sure after the checkout that you run

	npm install

and then

	webpack --config webpack.config.vendor.js


### Tasks ###


1. Add the provided expense-form into the panel body of the detail view and provide the correct expense as input to the form component.

2. Extend the form component HTML so that all fields of an expense (except the id) can be updated.

3. Add a save button in the HTML to save the changes and register a click handler that persists changes. 

4. Add the implementation in the backend to update an expense.

### Implementation Hints ###


1. Use the selector `<expense-form>` from `expense-form.component.ts` to add the HTML of the form into the panel body of the `expense-detail.component.html`. Provide the correct expense as input for the form component.

2. Extend the `expense-form.component.html` so that all fields of an expense (except the id) can be updated. Use two-way binding `[(ngModel)]` to ensure that changes in the input fields are also passed to the property. For orientation, use the `input` fields for the already provided fields of an expense.

3. Add a save button in the `expense-form.component.html` to save the changes and register a click handler that persists changes. For that matter, implement the save method in the `expense-form.component.ts` and delegate the handling to the `expense.services.ts`. Perform a HTTP PUT request. After the update is succesful, return to the overview page using the `navigateToOverview()` method.

4. Implement the `Put(Expense Record record)` method in the `ExpenseController`.