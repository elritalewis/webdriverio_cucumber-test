import Page from './page'

class VolvoHomePage extends Page {

    
    //define elements
    
    get acceptCookies() { return $("//button[@class='optanon-allow-all accept-cookies-button']"); }
    get headerNameVolvo() { return $("//*[@id='site - nav - topbar - wrapper']/nav/div[1]/a"); }
    get headerNameCars() { return $("//div[@data-autoid='nav:topNavCarMenuContainer']/button/em"); }
    get headerNameSideNav() { return $("//button[@data-autoid='nav:siteNavHamburgerIcon']"); }
    get sideNavBuildYourOwnHeader() { return $("//em[text()='Build Your Own']"); }
    get carSideNavigatorFlyout() { return $("//div[@data-autoid='nav:sideNavigationDraw']"); }
    
     //define or overwrite page methods
     
    open () {
        super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        browser.pause(2000);
    }

    clickOnHeaderNameVolvo() {
        this.headerNameVolvo.click();
    }

    clickOnHeaderNameCars() {
        this.headerNameCars.click();
    }

    getHeaderNameCars() {
       return this.headerNameCars.getText();
    }

    clickOnHeaderNameSideNav() {
        this.headerNameSideNav.click();
    }

    headerNameSideNavIsVisible() {
        return this.headerNameSideNav.isDisplayed();
    }

    sideNavBuildYourOwnHeaderIsVisible() {
        return this.sideNavBuildYourOwnHeader.isDisplayed();
    }

    sideNavFlyOutIsVisible() {
        return this.carSideNavigatorFlyout.isDisplayed();
    }

    clickonAllowCookies() {
        this.acceptCookies.click();
    }

    allowCookiesIsVisible() {
        return this.acceptCookies.isDisplayed();
    }

    
}

export default new VolvoHomePage();
