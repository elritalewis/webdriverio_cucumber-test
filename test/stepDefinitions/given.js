import { Given} from 'cucumber';

import volvoHomePage from '../pageobjects/VolvoHome.Page';



// *** belongs to Yahoo serch feature
Given(/^I am on the volvo home page$/, function () {
    volvoHomePage.open();
    browser.getTitle().should.equal('A million more | Volvo Cars');
    const cookies = browser.getCookies();
    console.log(cookies);
    browser.setCookies({
        name: '_ga', value:'GA1.2.2099791311.1604739575'
    })
    if (volvoHomePage.allowCookiesIsVisible().should.be.true) {
        volvoHomePage.clickonAllowCookies();
    }
});
