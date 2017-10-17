## Exercise 9: Add a toaster plugin to the application ##

In this exercise you will install a toaster plugin using npm. Once you have accomplished this task you will use the plugin to show status notifications to the user.

### Tasks ###
 
1. Install the ng2-toastr plugin from the official [npm site](https://www.npmjs.com/package/ng2-toastr). Read the instructions carefully in order to install the correct version for Angular (4.x.y)! After installing the plugin add it to the webpack vendor config.
1. Follow the usage instructions on the official npm site of the ng2-toaster plugin and replace the alert(...) calls in the NotificationService with nice looking toasts.

### Implementation Hints ###

1. Make sure to reference both the .css file as well as the .js file of the ng2-toastr plugin in the webpack vendor config. If you are not sure on how to accomplish this have a look at how bootstrap does it in the webpack vendor config. Run 

		webpack --config webpack.vendor.config.js

	after adding the plugin to the webpack vendor config.