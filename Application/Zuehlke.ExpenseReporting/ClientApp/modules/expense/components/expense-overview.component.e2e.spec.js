describe('Expense overview list', function () {


    let session = {
        login: () => {
            // GIVEN user is logged in
            browser.get('/');
            let waitForAngularEnabledBefore = browser.waitForAngularEnabled();
            browser.waitForAngularEnabled(false);
            /*
            as there is a fancy success toast shown for 5 seconds (using $timeout), the tests will also _wait_ until the toast disappears
            therefore: disable waitForAngular temporarily and make toast disappear by clicking close button
            */
            element(by.partialLinkText('Click here to log in')).click();
            element(by.css('.toast-close-button')).click();

            /*
            login and toast stuff done, back to previous behavior
            */
            browser.waitForAngularEnabled(waitForAngularEnabledBefore);
        },
        logout: () => {
            element(by.partialLinkText('Mischief')).click();
        }
    };

    let verifyRoute = {
        is: (expectedRoute) => {
            var EC = protractor.ExpectedConditions;
            // Waits for the URL to contain 'foo'.
            browser.wait(EC.urlContains(expectedRoute), 100);
        }
    };

    beforeEach(session.login);

    afterEach(session.logout);

    describe('Landingpage', function () {
        it('should show the landing page with title', function () {
            expect(browser.getTitle()).toEqual('Angular 2 Workshop');
        });
    });

    describe('Home page', function () {
        it('should activate the home page after login', function () {
            verifyRoute.is('home');
        });
    });

    describe('Expense', function () {

        beforeEach(function navigateToExpenses() {
            element(by.linkText('Expenses')).click();

            verifyRoute.is('expense');
        });

        describe('list', function () {
    
            it('should have Anakin Skywalker as first entry', function () {
                expect(element(by.id('00000000-0000-0000-0000-000000000001')).getText()).toEqual('ANAKIN SKYWALKER');
            });
    
            it('should show more than one entry', function () {
                let rows = element.all(by.css('.table')).all(by.css('tr'));
                expect(rows.size).not.toBeLessThan(2);
            });
        });
    
        describe('details', function () {

            beforeEach(function navigateToDetails() {
                element(by.linkText('ANAKIN SKYWALKER')).click();
            });
    
            it('should show the details form', function () {
                expect(element(by.cssContainingText('.panel-heading', 'Receipt from Anakin Skywalker')).isPresent()).toBeTruthy();
            });
        });

        describe('add', function () {
            beforeEach(function navigateToDetails() {
                element(by.linkText('Add new expense')).click();
            });
    
            it('should show empty details form', function () {
                expect(element(by.cssContainingText('.panel-heading', 'Add new Receipt')).isPresent()).toBeTruthy();
            });

            it('should redirect to list on success', function () {
                let newName = "STORM TROOPER " + Math.round(new Date().getTime()/1000);
                
                element(by.name('name')).sendKeys(newName);
                element(by.name('text')).sendKeys('Flight to Death Star');
                element(by.name('amount')).sendKeys('1000');
                element(by.cssContainingText('option', 'Flight')).click();


                // expect success message, toast magic again
                let waitForAngularEnabledBefore = browser.waitForAngularEnabled();
                browser.waitForAngularEnabled(false);
                element(by.linkText('Create expense')).click();

                expect(element(by.css('.toast-success')).getText()).toBeDefined();
                element(by.css('.toast-close-button')).click();

                browser.waitForAngularEnabled(waitForAngularEnabledBefore);

                expect(element(by.css('.panel-heading')).getText()).toBe('Expenses Overview');
            });
        });
    });

});