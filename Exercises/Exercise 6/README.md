## Exercise 6 ##

In this exercise, we are going to unit test the code of our application.

### Preparations ###

Make sure after the checkout that you go to the `Zuehlke.ExpenseReporting` directory and run

	npm install

and then

	webpack --config webpack.config.vendor.js

### Tasks ###

1. Add a unit test that tests that an expense record can be deleted in the backend.

2. Add a unit test that tests the deletion of an expense in expense-overview.component.spec.ts


### Implementations Hints ###

1. Add a unit test that tests that an expense record can be deleted in `ExpenseRepositoryTests.cs`. Implement it in the test method `CanDeleteRecord()`.

2. Add a unit test that tests the deletion of an expense in `expense-overview.component.spec.ts`. For orientation, you can refer to the already existing `"should show two expenses after OnInit"` unit test. In order to delete an entry by clicking the delete button, you can use 

	`const firstExpenseDeleteIcon = fixture.debugElement.query(By.css('tbody > tr td:last-child a'));`
	`firstExpenseDeleteIcon.triggerEventHandler('click', new Event('dummyEvent'));`
