# Angular 2 Training #

This repository contains materials and source code for the workshop introducing Angular 2 together with TypeScript and ASP.NET Core.

* In the [:file_folder: Application](Application) folder you can find the example application from the workshop in its final state.
* The [:file_folder: Exercises](Exercises) folder contains the materials for the exercises made in this workshop.

## Table of Contents  ##

<!-- TOC -->

- [Angular 2 Training](#angular-2-training)
    - [Table of Contents](#table-of-contents)
    - [Before you Start](#before-you-start)
        - [Installation Prerequisites](#installation-prerequisites)
        - [Running an Example Project or Exercise](#running-an-example-project-or-exercise)
        - [Running Unit- or E2E-Tests](#running-unit--or-e2e-tests)
    - [Additional Materials](#additional-materials)
        - [Books](#books)
        - [Blogs, Websites and Articles](#blogs-websites-and-articles)

<!-- /TOC -->

## Before you Start ##

This section contains information about the installation prerequisites and the steps you need to do before running one of the example applications. 

### Installation Prerequisites ###

The following tools are required to get the example applications running:

- [.NET Core SDK 1.1.1](http://bit.ly/dotnetcore111)
- [Node.js version 6 or newer](http://nodejs.org)
- [Git](http://git-scm.com)

To develop the applications you will need to have one of the following setups available:

1) You can work with [**Visual Studio 2017**](http://bit.ly/2017vs)
2) Or you can use [**Visual Studio Code**](https://code.visualstudio.com/) having the [C# for Visual Studio Code](https://github.com/OmniSharp/omnisharp-vscode) extension installed.

Additionally you will need to install a set of tools to run and test the application globally. Open a console and run

```bash
npm install -g webpack karma jasmine protractor webdriver-manager
```

### Running an Example Project or Exercise ###

This repository contains a whole bunch of Visual Studio solutions, both for the exercise and for the example application. To get one of the solutions running you need to execute these steps:

First load the solution using Visual Studio or Visual Studio Code. Then open a console at the Zuehlke.ExpenseReporting folder of the solution and run

```bash
npm install
``` 

After this ran successfully run

```
webpack --config webpack.config.vendor.js
```

to bundle the 3rd party scripts and styles for your application.

If you are using Visual Studio code you also need to run

```
dotnet restore
```

to restore the NuGet packages used by the application.

If your application still refuses to load properly you might need to repeat the `npm install` command.

### Running Unit- or E2E-Tests ###

To run unit-tests open a console at the Zuehlke.ExpenseReporting folder of the solution you want to test and run

```bash
npm test
``` 

To run the e2e UI tests open a console at the Zuehlke.ExpenseReporting folder of the solution you want to test and run

```bash
protractor
```
If you experience trouble running the e2e-tests try running

```bash
webdriver-manager update
```

to ensure that you have a running version of the selenium server.

## Additional Materials ##

In this section we list additional training materials

### Books ###

* **RESTful Web Services Cookbook** by Subbu Allamaraju, O'Reilly 2010  
https://www.amazon.de/dp/0596801688/ref=cm_sw_em_r_mt_dp_b5GiybP0E28NX
* **JavaScript: The Good Parts** by Douglas Crockford, O'Reilly 2008  
https://www.amazon.de/dp/0596517742/ref=cm_sw_em_r_mt_dp_35Giyb0W73XA4
* **C# 6.0 in a Nutshell** by Joseph and Ben Albahiri, O'Reilly 2015  
https://www.amazon.de/dp/1491927062/ref=cm_sw_em_r_mt_dp_1m3iybTCV244E

### Blogs, Websites and Articles ###

* **Angular Tutorial**, tutorial for Angular 2, published by Google  
https://angular.io/docs/ts/latest/tutorial 
* **Rangle's Angular Training Book**, online book, published by Rangle  
https://angular-2-training-book.rangle.io/
* **Angular University Blog**, Blog about Angular.   
http://blog.angular-university.io/
* **Thoughtram**, Blog about Angular and other topics. Written by Angular contributors.   
http://blog.thoughtram.io
* **Webpack - the missing Guide**, article, written by Guy Mograbi, November 2016   
http://www.eloquentwebapp.com/webpack-missing-guide
* **The Ultimate Guide to API Design**, article, written by Erich Reich, February 2017  
https://blog.qmo.io/ultimate-guide-to-api-design/
* **ASP.NET Core RESTful Web API versioning made easy**, article, written by Scott Hanselman, November 2016  
https://www.hanselman.com/blog/ASPNETCoreRESTfulWebAPIVersioningMadeEasy.aspx
* **Designing with Exceptions**, article, written by Jonathan Allen, September 2016  
http://www.infoq.com/articles/Exceptions-API-Design

 