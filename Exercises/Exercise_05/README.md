## Exercise 5 - Creating an expense record ##

In this exercise, we reuse the existing form component and use it to add a new expense. For that, we also have to implement the add functionality in the backend.

### Tasks ###

1. Extend the `ExpenseController` to support creating a new expense.
1. Extend the `ExpenseService` to support creating a new expense.
1. Extend the `ExpenseAddCompnent` to have a click handler that invokes the `ExpenseService` to add the new expense to the database.
1. Add a new button to the expense-overview component that links to the form for adding an expense.

### Implementation Hints ###

#### 1. Extend the ExpenseController ####

1. Create a method named `Post()` returning an `IActionResult` and decorate this method using the `[HttpPost]` attribute.
1. Extend the method to have a parameter of type `ExpenseRecord` that is decorated with the `[FromBody]` attribute.
1. Invoke the `Create(Expense record)` method of the repository passing the expense record that is to be created:
    * If the create method runs successfully return an HTTP Created status code passing along the URL of the newly created resource.
    * If the create method throws an `InvalidOperationException` return an HTTP Conflict status code.
    * If the create method throws an `ArgumentNullException` return a HTTP BadRequest status code.

#### 2. Extend the ExpenseService ####

1. Create a method named `createExpense(expense: ExpenseRecord)` that returns a `Promise<Response>`. Within this method invoke the `post()` method of the Http service using the URL /api/expenses and the expense passed into the method as body to create the specified expense. You can use the already provided method `generateGuid()` to add a guid to the expense to be created.

#### 3. Add a save button ####

1. Implement the `createExpense()` method in the add component to invoke the `createExpense(expense: ExpenseRecord)` method of the `ExpenseService`.
1. Use the `await` keyword to wait for the update to complete then return to the overview using the `goBack()` methdod, or call the `handleError()` method if an error occured to provide an error message to the user.
1. Surround the existing button in the add view with a button-group.
1. Add a second button to the group. Mark this button as the primary button and change the icon to the save icon. Set the caption to "Create Expense".
1. Use the `createExpense()` method as a click handler for the newly created button.

#### 4. Create a navigation button ####

1. Create a new route in the `expense.routing.ts` that navigates to the `ExpenseAddCompnent`.
1. Add a new button in the panel footer of the `expense-overview.component.html` that routes to the `ExpenseAddComponent`.