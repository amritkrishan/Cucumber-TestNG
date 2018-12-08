@LoginProfile
Feature: Login Profile
  As an customer of the company
  I want to login my customer profile using my credentials
  In order to make a purchase

  Background: User navigates to Company home page
    Given I am on the "Flipkart home" page on URL "www.flipkart.com"
    Then I should see "Login & Signup" message
    And I click on the "Login & Signup" button

  Scenario: Successful login
    When I fill in "Username" with "8596096645"
    And I fill in "Password" with "Amzy@080194"
    And I click on the "Login" button
    And I should see the "My Account" button


  Scenario Outline: Failed login using wrong credentials
    When I fill in "Username" with "<username>"
    And I fill in "Password" with "<password>"
    And I click on the "Login" button
    And I should see "<warning>" message
    Examples:
      | username    | password   | warning                                   |
      | Test        | !23        | Please enter valid Email ID/Mobile number |
      | Tset        | 123        | Please enter valid Email ID/Mobile number |
      | Tset        | !23        | Please enter valid Email ID/Mobile number |