import { Given, When, Then } from 'cucumber';

import volvoHomePage from '../pageobjects/VolvoHome.page';
import volvoCarsFlyOut from '../pageobjects/VolvoCarsFlyOut.page';
import volvoCarsShopSection from '../pageobjects/VolvoCarShopSection.page';


When(/^I see the header Cars and side navigator$/, function () {
    volvoHomePage.getHeaderNameCars().should.equal("Cars");
        volvoHomePage.headerNameSideNavIsVisible().should.be.true;
});


When(/^I click on "([^"]*)"$/, { wrapperOptions: { retry: 2 } }, function (arg1) {
    if (arg1=="Cars") {
        volvoHomePage.clickOnHeaderNameCars();
    }
    else if (arg1=="side navigator") {
        volvoHomePage.clickOnHeaderNameSideNav();
    }
});
    When(/^I click on "([^"]*)" car type$/, function (arg1) {
        if (arg1 == "Mild hybrids") {
            volvoCarsFlyOut.clickOnCarNameTypeMildHybrid();
        }
        else if (arg1 == "Hybrids") {
            volvoCarsFlyOut.clickOnCarNameTypeHybrid();
        }
        else if (arg1 == "Electric") {
            volvoCarsFlyOut.clickOnCarNameTypeElectric();
        }
    
    });

When(/^I select a "([^"]*)" "([^"]*)" car model$/, function (carType,carModel) {
    if (carModel == "V60" && carType=="Mild hybrids") {
        volvoCarsFlyOut.clickOnCarNameTypeMildHybridV60();
    }
    else if (carModel == "V90" && carType == "Mild hybrids") {
        volvoCarsFlyOut.clickOnCarNameTypeMildHybridV90();
    }
    else if (carModel == "X60 Recharge" && carType == "Hybrids") {
        volvoCarsFlyOut.clickOnCarNameTypeHybridX60Recharge();
    }
    else if (carModel == "XC40 Recharge" && carType == "Electric") {
        volvoCarsFlyOut.clickOnCarNameTypeElectricXC40Recharge();
    }

});

When(/^I select "([^"]*)" to buy car$/, function (shop) {
    volvoCarsShopSection.clickOnCarShop();
});

When(/^I select "([^"]*)" car style$/, { wrapperOptions: { retry: 2 } }, function (shop) {
    volvoCarsShopSection.clickOnCarStyleMomentum();
});


When(/^I select "([^"]*)" Momemtum car style$/, function (carStyleType) {
    volvoCarsShopSection.clickOnCarStyleMomentumB3MildHybrid();
});

When(/^I select Wheels and select "([^"]*)"$/, function (wheelType) {
    volvoCarsShopSection.selectCarWheels();
    volvoCarsShopSection.selectCarWheelsType();
});

When(/^I select Interior and select "([^"]*)"$/, function (interiorStyle) {
    volvoCarsShopSection.selectCarInterior();
    volvoCarsShopSection.selectCarInteriorStyle();
});


When(/^I select Exterior styling and click on Continue to Packages$/, function () {
    volvoCarsShopSection.selectCarExterior();
    volvoCarsShopSection.clickOnCarExteriorContinueToPackages();
});

When(/^I select Packages as Power Seats$/, function () {
    volvoCarsShopSection.selectCarPackagesAddPowerSeats();
    volvoCarsShopSection.clickOnCarPackagesAddPowerSeatsAcceptSelection();
});

When(/^I select Optional Equipment as Four-zone climate system$/, function () {
    volvoCarsShopSection.clickOnCarSummary();
});   
