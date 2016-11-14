## Exercise 8: Deploy App to Azure ##

In this exercise you will deploy your app to Microsoft Azure.

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
 
 1. Open the Azure Portal (https://portal.azure.com) and sign in using the Microsoft ID assigned to your MSDN-subscription.
-2. Open the "App Services" section, then select "Web App" and click "Create".
+2. Open the "App Services" section, click "Add", then select "Web App" and click "Create".
 3. Fill in the form:
 	* Provide a unique app name. Make sure to use only alphanumeric characters and dashes, as this name will be used as the URL of your application.
 	* Select a Subscription. Most likely your MSDN subscription will be preselected.
@@ -20,5 +20,5 @@ This exercise is about deploying our web app to Azure in order to have it availa
 4. Click create to get your app up and running. Once the webapp is running open [http://{your-appname-goes-here}.azurewebsites.net]()
 5. Open the Visual Studio solution contained in the "Before" folder of this excercise.
 6. Right-click the Angular2Application1 project and select publish.
-7. Chose Microsoft Azure App Service. Then find and select the web app we created in the previous steps.
+7. Choose Microsoft Azure App Service. Then find and select the web app we created in the previous steps.
 8. Click "OK" and "Publish". Your website will be opened shortly.