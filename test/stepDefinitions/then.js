import { Then }     from 'cucumber';

import volvoCarsFlyOut from '../pageobjects/VolvoCarsFlyOut.page';
import volvoHomePage from '../pageobjects/VolvoHome.Page';
import volvoCarsShopSection from '../pageobjects/VolvoCarShopSection.page';


Then(/^"([^"]*)" section should fly out$/, function (arg1) {
    if (arg1=="Cars") {
        volvoCarsFlyOut.carSectionFlyoutIsVisible().should.be.true;
    }
    else if (arg1=="side navigator") {
        volvoHomePage.sideNavFlyOutIsVisible().should.be.true;
    }
});


Then(/^I should see a list of Car types "([^"]*)" "([^"]*)" "([^"]*)"$/, function (arg1, arg2, arg3) {
    volvoCarsFlyOut.carTypeElectricIsVisible();
    volvoCarsFlyOut.carTypeElectric.getText().should.equal(arg1);
    volvoCarsFlyOut.carTypeHybridIsVisible();
    volvoCarsFlyOut.carTypeHybrid.getText().should.equal(arg2);
    volvoCarsFlyOut.carTypeMildHybridIsVisible();
    volvoCarsFlyOut.carTypeMildHybrid.getText().should.equal(arg3);

});

Then(/^I should see a list of Car types "([^"]*)"$/, function (arg1) {
    volvoHomePage.sideNavBuildYourOwnHeaderIsVisible().should.be.true;
    volvoHomePage.sideNavBuildYourOwnHeader.getText().should.equal(arg1);
});

Then(/^I click on Summary$/, function () {
    volvoCarsShopSection.clickOnCarSummary();
});


