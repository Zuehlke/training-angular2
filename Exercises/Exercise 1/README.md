## Exercise 1: Create a Module and a Component ##

This exercise will lead you through the process of creating a module and a component together with creating the required navigation infrastructure.

### Tasks ###

1. Create and configure a new module named `ExpenseModule`.
2. Add a component named `ExpenseOverview` to the newly created module. This component should show some simple static HTML.
3. Configure a route to the newly created component.
4. Add a menu item to the application's main navigation to access the component.

### Detailed Steps ###

#### 1. Create the ExpenseModule ####

1. Create folder named "expense" in the modules folder of your solution.
1. Add a file named "expense.module.ts" to the folder and implement a class named `ExpenseModule` decorated with the `@NgModule()` decorator.
1. Configure the module to import the `CommonModule`.

  Your module declaration should look like this now:

  ```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
      imports: [
        CommonModule
      ]
})
export class ExpenseModule { }
  ```

1. Modify the `NgModule` decorator of the `AppModule` located in the app.module.ts in the app folder to make the `ExpenseModule` known to the application.

#### 2. Create the ExpenseOverview component ####

1. Add a folder named "components" to the module's folder.
1. Add a file named "expense-overview.component.html" that contains some simple HTML like a heading or a single paragraph.
1. Add a file named "expense-overview.component.ts" and implement a class named `ExpenseOverview` decorated with the `@Component()` decorator.
1. Configure the component to use the expense-overview.component.html as its template.

  Your component declaration should look like this now:

  ```typescript
import { Component }  from '@angular/core';

@Component({
      template: require('./expense-overview.component.html')
})
export class ExpenseOverviewComponent {
}

  ```
1. Add a declarations section to the `NgModule` decorator of the `ExpenseModule` and add the component to it, so that the module knows that this component exists.

  The `NgModule` decorator should look like this now:

  ```typescript
  @NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      ExpenseOverviewComponent
    ]
  })
  ```

#### 3. Configure the routing ####

1. Add a file named "expense.routing.ts" to the module's folder and export a list of routes containing a route to the new component.
1. Also link the new router to the router of the application.

  The routing information should look like this now:

  ```typescript
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';

export const expenseRoutes: Routes = [
      { path: 'overview', component: ExpenseOverviewComponent }
];

export const expenseRouting: ModuleWithProviders = RouterModule.forChild(expenseRoutes);
  ```

1. Add the `expenseRouting` information to the `imports` section of the `NgModule` decorator of the `ExpenseModule` to make the routes known to the application.

  The `NgModule` decorator should look like this now:

  ```typescript
  @NgModule({
    imports: [
        CommonModule, expenseRouting
    ],
    declarations: [
      ExpenseOverviewComponent
    ]
  })
  ```

#### 4. Add a menu item ####

1. Add a new menu item linking to the `'/overview'` route to the navigation menu in the navmenu.component.html in the components folder of the app module.

  The newly created menu item should look like this now:

  ```html
<li [routerLinkActive]="['link-active']">
      <a [routerLink]="['/overview']">
        <span class='glyphicon glyphicon-th-list'></span> Overview
      </a>
</li>
  ```

[1]:Before
[2]:Before/Zuehlke.ExpenseReporting
