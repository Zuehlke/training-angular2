## Exercise 1: Create a Module and a Component ##

This exercise will lead you through the process of creating a module and a component together with creating the required navigation infrastructure.


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

1. Create and configure a new module named `ExpenseModule`.
2. Add a component named `ExpenseOverview` to the newly created module. This component should show some simple static HTML.
3. Configure a route to the newly created component.
4. Add a menu item to the application's main navigation to access the component.

### Detailed Steps ###

#### 1. Create the ExpenseModule ####

1. Create folder named "expense" in the modules folder of your solution.
1. Add a file named "expense.module.ts" to the folder and implement a class named `ExpenseModule` decorated with the `@NgModule()` decorator.
1. Configure the module to import the `CommonModule`
1. Modify the `NgModule` decorator of the `AppModule` located in the app.module.ts in the app folder to make the `ExpenseModule` known to the application.

#### 2. Create the ExpenseOverview component ####

1. Add a folder named "components" to the module's folder.
1. Add a file named "expense-overview.component.html" that contains some simple HTML like a heading or a single paragraph.
1. Add a file named "expense-overview.component.ts" and implement a class named `ExpenseOverview` decorated with the `@Component()` decorator.
1. Configure the component to use the expense-overview.component.html as its template.
1. Add a declarations section to the `NgModule` decorator of the `ExpenseModule` and add the component to it, so that the module knows that this component exists.


#### 3. Configure the routing ####

1. Add a file named "expense.routing.ts" to the module folder and export a list of routes containing a route to the new component.
1. Also link the new router to the router of the application.
1. Add the `expenseRouting` information to the `imports` section of the `NgModule` decorator of the `ExpenseModule` to make the routes known to the application.

#### 4. Add a menu item ####

1. Add a new menu item linking to the `'/overview'` route to the navigation menu in the navmenu.component.html in the components folder of the app module.

[1]:Before
[2]:Before/Zuehlke.ExpenseReporting
