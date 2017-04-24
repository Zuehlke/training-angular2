## Exercise 8: Add Guards to control the navigation ##

In this exercise you will ensure that only a user who is logged in can navigate to the expense-module. Also, navigating away from an expense that is either dirty or invalid will be prevented.

### Tasks ###
 
1. Add a LoginGuard to the expense module that uses the AuthService to determine whether the user can navigate to the list of expenses. Also make sure that a user who is not logged in is redirected to the `/home` route. 
1. Add a FormGuard to the expense module that prevents the user from navigating away from the expense-detail.component if the contents of the form are either dirty or invalid.

### Implementation Hints ###

1. You can find documentation for Guards in the [Thoughtram Blog](https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html)
1. Use the `isAuthorized`-property of the `AuthService` class (./app/services/auth.service) to determine wether a user is logged in
1. Use the `isFormValidOrPristine`-property of the `ExpenseDetailComponent`-class to determine if the user can navigate away from an expense record.
1. You can inject the current instance of the `ExpenseDetailComponent` into your guard.