## Exercise 2: Load and display data ##

This exercise will lead you through the process of loading a set of records from the server and displaying it in the application.


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

1. Implement an ASP.NET controller to provide the data. The controller shall be adressed via the URL /api/expenses.
2. Add an `ExpenseService` to the application that communicates with the backend to load the data using Angular's `Http` service.
2. Modify the ExpenseOverview component to invoke the service.
3. Modify the template of the ExpenseOverview component to display the data.

### Detailed Steps ###

#### 1. Implement an ASP.NET controller ####

1. Add a class named `ExpenseController` that inherits from the `Microsoft.AspNetCore.Mvc.Controller` class to the Controller folder of the application.
1. Add a `[Route(...)]` attribute to the class indicating the URL this controller can be addressed on.
1. Create a field holding an `IExpenseRepository` and initialize that field using a constructor parameter.
1. Create a method named `Get()` returning an `IAsyncResult` and decorate this method using the `[HttpGet]` attribute.
1. Invoke the `Ok()` method of the current class to return the results of the `All()` method of the expense repository.

#### 2. Add an ExpenseService ####

1. Add a folder named "services" to the folder of the expense module.
1. Add a file named "expense.service.ts" and implement a class named `ExpenseService` decorated with the `@Injectable()` decorator.
1. Define a field named `expenseUrl` of type `string` an initialize it with "/api/expenses".
1. Insert a constructor taking Angular's Http service as a parameter and initializing a private field from it.
1. Create a method named `getExpenses()` that returns an `Observable<Expense[]>`. Within this method invoke the `get()` method of the Http service to retrieve a list of expense records from the service.
1. Call the `map()` method to extract the array of expense records from the response or return an empty array if the response has no content.
1. Add a providers section to the `NgModule` decorator of the `ExpenseModule` and add the service to it, so that the module knows that this service exists.

#### 3. Load the data ####

1. Add a public field named "expenses" of the type `Expense[]` to the `ExpenseOverview` component.
1. Let the `ExpenseOverview` component implement the `OnInit` interface.
1. Insert a constructor taking the `ExpenseService` as a parameter and initializing a private field from it.
1. Implement the `ngOnInit()` method to invoke the `getExpenses()` method of the `ExpenseService`.
1. Call the `subscribe()` method to set the result of the service call to the `expenses` field.

#### 4. Display the data ####

1. Clean the contents of the expense-overview.component.html and add a bootstrap panel to it.
1. Set the heading of the panel to "Expenses Overview"
1. Add a table that gets displayed only if there are expenses available using the `*ngIf` attribute.
1. Add a `<thead>` to the table, introducing four columns for the Name, Date, Amount and Reason of an expense.
1. Introduce a `<tbody>` to add one row for each expense that has been loaded from the database using the `*ngFor` attribute.
1. In one data field (`<td>`) of the table use the string interpolation syntax to display the actual values of the expense.

[1]:Before
[2]:Before/Zuehlke.ExpenseReporting
