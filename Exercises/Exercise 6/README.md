## Exercise 6: Unit Testing ##

In this exercise you will write unit tests in order to test the behaviour of the application.

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

1. Add a unit test that tests that an expense record can be deleted in the backend.
2. Add a unit test that tests the deletion of an expense in expense-overview.component.spec.ts.


### Detailed Steps ###

#### 1. Backend Unit Test ####

1. Add a unit test that tests that an expense record can be deleted in `ExpenseRepositoryTests.cs`. Implement it in the test method `CanDeleteRecord()`. 
2. Make sure that the deletion of a record does not throw an exception. 
3. Check that the record has been deleted successfully, i.e it is not in the `ExpenseRepository` anymore.

#### 2. Frontend Unit Test ####

1. Add a unit test that tests the deletion of an expense in `expense-overview.component.spec.ts`. For orientation, you can refer to the already existing `"should show two expenses after OnInit"` unit test. 
2. Make sure that the view is updated and stable.
3. Delete an entry by clicking the delete button. You can use the following code snippet to achieve that: 

	`const firstExpenseDeleteIcon = fixture.debugElement.query(By.css('tbody > tr td:last-child a'));`
	`firstExpenseDeleteIcon.triggerEventHandler('click', new Event('dummyEvent'));`
4. Check that the expenseService was called exactly once and with the deleted expense.
5. Check that the table now contains one entry only, i.e. the deleted expense is not in the table anymore.
