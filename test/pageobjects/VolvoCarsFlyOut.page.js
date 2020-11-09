import Page from './page'

class VolvoCarsFlyOut extends Page {


    //define elements
    
    get carSectionFlyout() { return $("//div[@data-autoid='nav:carMenuDesktop']"); }
    get carTypeElectric() { return $("//h2[text()='Electric']"); }
    get carTypeHybrid() { return $("//h2[text()='Hybrids']"); }
    get carTypeMildHybrid() { return $("//h2[text()='Mild hybrids']"); }
    get carTypeMildHybridV60() { return $("//img[@alt='V60']"); }
    get carTypeMildHybridV90() { return $("//img[@alt='V90']"); }
    get carTypeHybridXC60Recharge() { return $("//img[@alt='XC60 Recharge']"); }
    get carTypeElectricXC40Recharge() { return $("//img[@alt='XC40 Recharge']"); }



    //define or overwrite page methods

    open() {
        super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        browser.pause(2000);
    }
    carTypeHybridIsVisible() {
        return this.carTypeHybrid.isDisplayed();
    }

    carTypeElectricIsVisible() {
        return this.carTypeElectric.isDisplayed();
    }

    carTypeMildHybridIsVisible() {
        return this.carTypeMildHybrid.isDisplayed();
    }


    clickOnCarNameTypeMildHybrid() {
        this.carTypeMildHybrid.click();
    }

    clickOnCarNameTypeHybrid() {
        this.carTypeHybrid.click();
    }

    clickOnCarNameTypeElectric() {
        this.carTypeElectric.click();
    }

    carSectionFlyoutIsVisible() {
        return this.carSectionFlyout.isDisplayed();
    }

    clickOnCarNameTypeMildHybridV60() {
        this.carTypeMildHybridV60.click();
    }

    clickOnCarNameTypeMildHybridV90() {
        this.carTypeMildHybridV90.click();
    }

    clickOnCarNameTypeHybridXC60Recharge() {
        this.carTypeHybridXC60Recharge.click();
    }

    clickOnCarNameTypeElectricXC40Recharge() {
        this.carTypeElectricXC40Recharge.click();
    }


}

export default new VolvoCarsFlyOut();
