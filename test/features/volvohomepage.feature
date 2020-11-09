Feature: Validating Volvo home page headers

    As I land on the volvo home page
    I should be be able to check the header links 

    Background:

        Given I am on the volvo home page

    Scenario: Validating the header links
        When I see the header Cars and side navigator
        When  I click on "Cars"
        Then "Cars" section should fly out
        When I click on "side navigator"
        Then "side navigator" section should fly out
       

     