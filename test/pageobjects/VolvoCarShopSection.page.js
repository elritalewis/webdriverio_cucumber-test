import Page from './page'

class VolvoCarShopSectionPage extends Page {

    
    //define elements
    

    get carShop() { return $("//a[text()='Shop']"); }
    get carStyleMomentum() { return $("//nav[@aria-label='Trim Group Side Menu']//a[@aria-label='Select Momentum']"); }
    get carStyleMomentumB3MildHybrid() { return $("//a[@aria-label='Select  B3 mild hybrid']"); }
    get carRechargeRDesign() { return $("//span[text()='Recharge R-Design']"); }
    get carEngine() { return $("//a[@aria-label='Select  T6 AWD plug-in hybrid']"); }
    get carColour() { return $("//span[text()='Black Stone - 019']"); }
    get carInterior() { return $("//a[text()='Interior']"); }
    get carInteriorStyle() { return $("//a[text()='Interior']"); }
    get carWheels() { return $("//a[text()='Wheels']"); }
    get carWheelsType() { return $("//span[contains(text(),'5-Spoke Black Diamond')]"); }
    get carExterior() { return $("//a[text()='Exterior styling']"); }
    get carExteriorContinueToPackages() { return $("//span[text()='Continue to Packages']"); }
    get carPackagesAddPowerSeats() { return $("//h3[text()='Power Seats']/preceding-sibling::div//span[text()='Add']"); }
    get carPackagesAddPowerSeatsAcceptSelection() { return $("//span[text()='Accept selection']"); }   
    get carPackages() { return $("//a[text()='Packages']"); }
    get optionalEquipments() { return $("//a[text()='Optional equipment']"); }
    get optionalEquipmentsAddFourZoneClimate() { return $("//h3[text()='Four-zone climate system']/preceding-sibling::div//span[text()='Add']"); }
    get carSummary() { return $("//a[text()='Summary']"); }
    //define or overwrite page methods
     
    open () {
        super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        browser.pause(2000);
    }

    clickOnCarShop() {
        browser.pause(2000);
        this.carShop.click();
    }

    clickOnCarStyleMomentum() {
        browser.pause(2000);
        let clickable = this.carStyleMomentum.isClickable();
        console.log(clickable); 
        this.carStyleMomentum.click();
    }

    clickOnCarStyleMomentumB3MildHybrid() {
        browser.pause(2000);
        let clickable = this.carStyleMomentumB3MildHybrid.isClickable();
        console.log(clickable); 
        this.carStyleMomentumB3MildHybrid.click();
    }

    clickOnCarRechargeRDesign() {
        let clickable = this.carRechargeRDesign.isClickable();
        console.log(clickable); 
        this.carRechargeRDesign.click();
    }

    selectCarEngine() {
        let clickable = this.carEngine.isClickable();
        console.log(clickable); 
        this.carEngine.click();
    }

    selectCarColour() {
        let clickable = this.carColour.isClickable();
        console.log(clickable); 
        this.carColour.click();
    }

    selectCarInterior() {
        browser.pause(2000);
        let clickable = this.carInterior.isClickable();
        console.log(clickable); 
        this.carInterior.click();
    }
    selectCarInteriorStyle() {
        browser.pause(2000);
        let clickable = this.carInteriorStyle.isClickable();
        console.log(clickable); 
        this.carInteriorStyle.click();
    }
    selectCarWheels() {
        browser.pause(2000);
        let clickable = this.carWheels.isClickable();
        console.log(clickable); 
        this.carWheels.click();
    }

    selectCarWheelsType() {
        browser.pause(2000);
        let clickable = this.carWheelsType.isClickable();
        console.log(clickable); 
        this.carWheelsType.click();
    }

    selectCarExterior() {
        browser.pause(2000);
        let clickable = this.carExterior.isClickable();
        console.log(clickable); 
        this.carExterior.click();
    }
    clickOnCarExteriorContinueToPackages() {
        browser.pause(2000);
        let clickable = this.carExteriorContinueToPackages.isClickable();
        console.log(clickable); 
        this.carExteriorContinueToPackages.click();
    }

    selectCarPackages() {
        browser.pause(2000);
        let clickable = this.carPackages.isClickable();
        console.log(clickable); 
        this.carPackages.click();
    }

    selectCarPackagesAddPowerSeats() {
        browser.pause(2000);
        let clickable = this.carPackagesAddPowerSeats.isClickable();
        console.log(clickable); 
        this.carPackagesAddPowerSeats.click();
    }

    clickOnCarPackagesAddPowerSeatsAcceptSelection() {
        browser.pause(2000);
        let clickable = this.carPackagesAddPowerSeatsAcceptSelection.isClickable();
        console.log(clickable); 
        this.carPackagesAddPowerSeatsAcceptSelection.click();
    }

    selectCarOptionalEquipments() {
        browser.pause(2000);
        let clickable = this.optionalEquipments.isClickable();
        console.log(clickable); 
        this.optionalEquipments.click();
    }


    clickOnCarOptionalEquipmentsAddFourZoneClimate() {
        browser.pause(2000);
        let clickable = this.optionalEquipmentsAddFourZoneClimate.isClickable();
        console.log(clickable); 
        this.optionalEquipmentsAddFourZoneClimate.click();
    }

    clickOnCarSummary() {
        browser.pause(2000);
        let clickable = this.carSummary.isClickable();
        console.log(clickable); 
        this.carSummary.click();
    }
    
}

export default new VolvoCarShopSectionPage();
