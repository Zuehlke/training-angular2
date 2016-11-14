## Exercise 5 ##

In this exercise, we reuse the existing form component and use it to add a new expense. For that, we also have to implement the add functionality in the backend.

### Preparations ###

Make sure after the checkout that you go to the `Zuehlke.ExpenseReporting` directory and run

	npm install

and then

	webpack --config webpack.config.vendor.js


### Tasks ###

1. Extend the ExpenseController to support creating a new expense.
2. Extend the ExpenseService to support creating a new expense.
3. Extend the ExpenseAddCompnent to have a click handler that invokes the ExpenseService to add the new expense to the database.
1. Add a new button to the expense-overview component that links to the form for adding an expense.

### Implementation Hints ###

#### 1. Extend the ExpenseController ####

1. Create a method named `Post()` returning an `IActionResult` and decorate this method using the `[HttpPost]` attribute.
1. Extend the method to have a parameter of type `ExpenseRecord` that is decorated with the `[FromBody]` attribute.
1. Invoke the `Update(Expense expense)` method of the repository passing the expense record that is to be updated:
  * If the update method returns fine return a HTTP Created status code passing along the URL of the newly created resource.
  * If the update method throws an InvalidOperationException return a HTTP Conflict status code.
  * If the delete method throws an ArgumentNullException return a HTTP BadRequest status code.

#### 2. Extend the ExpenseService ####

1. Create a method named `createExpense(expense: Expense)` that returns an `Observable<Response>`. Within this method invoke the `post()` method of the Http service using the URL /api/expenses and the expense passed into the method as body to create the specified expense.

#### 3. Add a save button ####

1. Implement the `createExpense()` method in the add component to invoke the `createExpense()` method of the `ExpenseService`.
1. Call the `subscribe()` method to return to the expense overview or call the `handleError()` method to provide an error message to the user.
1. Surround the existing button in the detail view with a button-group.
1. Add a second button to the group. Mark this button as the primary button and change the icon to the save icon. Set the caption to "Create Expense".
1. Add the `createExpense()` method as a click handler to the newly created button.

#### 4. Create a navigation button ####

1. Create a route in the expense.routing.ts labelled /expenses/add that navigates to the `ExpenseAddCompnent`.
1. Add a new button in the panel footer of the `expense-overview.component.html` that routes to the `ExpenseAddComponent`. Check out the already provided route for the component in `expense.routing.ts`.