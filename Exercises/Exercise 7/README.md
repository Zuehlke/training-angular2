## Exercise 7: tbd ##

In this exercise you will extend the form component to feature some basic validation.

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

1. Extend the controls in the ExpenseFormCompnent to show a validation message if the value is neither pristine nor valid.
2. Extend the controls in the ExpenseFormComponent to show a red border if the value is neither pristine nor valid.
3. Extend the controls in the ExpenseFormComponent to show a rex X on the control if the value is neither pristine nor valid.

### implementation hints ###

* Have a look at [getbootstrap.com](http://getbootstrap.com) to see what can be done about the tasks!
* Have a look an [angular.io](http://angular.io) to see how to validate controls.
