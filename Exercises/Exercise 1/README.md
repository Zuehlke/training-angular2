## Exercise 1: Create a Module and a Compnent ##

This exercise will lead you through the process of creating a module and a component together with creating the required navigation infrastructure.


### Prerequisites ###

Open the solution contained in the [:file_folder: Before](Before)[1] folder of this tutorial. After opening the solution for the first time, open a console window, switch to the [:file_folder: Zuehlke.ExpenseReporting][2] folder and run

```bash
npm install
```

followed by

```bash
webpack --config webpack.config.vendor.js
```

to make sure all dependencies are loaded and the vendor scripts have been built and included properly.

### Tasks ###

1. Create folder for your new module named "expense".
2. Create a module class for the ExpenseModule

### Detailed Steps ###

1. Create folder named "expense" in the [:file_folder: modules][3] folder of your solution.
2. Add a file named "expense.module.ts" to the folder
3. Implement a class named `ExpenseModule` decorated with the `@NgModule()` directive.
4. Configure the module to import the CommonModule:

  Your module declaration should look like this now:

  ```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
  ],
})
export class ExpenseModule { }
  ```

5. Add a file named expense.routing.ts to the [:file_folder: modules][3]

[1]:Before
[2]:Before/Zuehlke.ExpenseReporting
[3]:Before/Zuehlke.ExpenseReporting/ClientApp/modules
