Feature: Validating Cars purchase

    As I land on the volvo home page
    I should be be able to click on cars link
    and select a car to purchase

    Background:

        Given I am on the volvo home page

    Scenario: Validating Mild Hybrids V60 Car
        When I click on "Cars"
        When I click on "Mild hybrids" car type
        When I select a "Mild hybrids" "V60" car model
        When I select "Shop" to buy car
        When I select "Momentum" car style
        When I select "B3 mild hybrid" Momemtum car style
        When I select Wheels and select "wheel type"
        When I select Interior and select "interior stlye"
        When I select Exterior styling and click on Continue to Packages
        When I select Packages as Power Seats
        When I select Optional Equipment as Four-zone climate system
        Then I click on Summary
     



  

     
