$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Login Profile",
  "description": "As an customer of the company\nI want to login my customer profile using my credentials\nIn order to make a purchase",
  "id": "login-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.before({
  "duration": 4195583554,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Flipkart home\" page on URL \"www.flipkart.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Login \u0026 Signup\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Login \u0026 Signup\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Flipkart home",
      "offset": 13
    },
    {
      "val": "www.flipkart.com",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 31717067180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 228105179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 680978128,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login",
  "description": "",
  "id": "login-profile;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I fill in \"Username\" with \"8596096645\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I fill in \"Password\" with \"Amzy@080194\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the \"My Account\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "8596096645",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 88600400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "Amzy@080194",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 80023855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 473000067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "duration": 10020158724,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[text()\u003d\u0027My Account\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REMMACL37PG8WN\u0027, ip: \u00272405:204:5293:d26b:f15d:bdce:beb1:fc9e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 2997, moz:profile: /var/folders/4j/lfd7p7g90s7..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.4.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: dd9294ed-f8ca-8547-a689-5865d1479ff6\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027My Account\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepdefs.StepDefinitions.i_should_see_the_button(StepDefinitions.java:48)\n\tat ✽.And I should see the \"My Account\" button(LoginProfile.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 637188684,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REMMACL37PG8WN\u0027, ip: \u00272405:204:5293:d26b:f15d:bdce:beb1:fc9e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u00step({
  "line": 21,
  "name": "I fill in \"Password\" with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"\u003cwarning\u003e\" message",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "warning"
      ],
      "line": 25,
      "id": "login-profile;failed-login-using-wrong-credentials;;1"
    },
    {
      "cells": [
        "Test",
        "!23",
        "Please enter valid Email ID/Mobile number"
      ],
      "line": 26,
      "id": "login-profile;failed-login-using-wrong-credentials;;2"
    },
    {
      "cells": [
        "Tset",
        "123",
        "Please enter valid Email ID/Mobile number"
      ],
      "line": 27,
      "id": "login-profile;failed-login-using-wrong-credentials;;3"
    },
    {
      "cells": [
        "Tset",
        "!23",
        "Please enter valid Email ID/Mobile number"
      ],
      "line": 28,
      "id": "login-profile;failed-login-using-wrong-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1624320183,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Flipkart home\" page on URL \"www.flipkart.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Login \u0026 Signup\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Login \u0026 Signup\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Flipkart home",
      "offset": 13
    },
    {
      "val": "www.flipkart.com",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 24281855525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 259019985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 505023637,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter valid Email ID/Mobile number\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 259077693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "!23",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 72945519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 316433623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email ID/Mobile number",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 249999590,
  "status": "passed"
});
formatter.after({
  "duration": 622382834,
  "status": "passed"
});
formatter.before({
  "duration": 1957002136,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Flipkart home\" page on URL \"www.flipkart.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Login \u0026 Signup\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Login \u0026 Signup\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Flipkart home",
      "offset": 13
    },
    {
      "val": "www.flipkart.com",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 20526976277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 37639377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 251343570,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter valid Email ID/Mobile number\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Tset",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 248713478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 41923423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 248979088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email ID/Mobile number",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 249498729,
  "status": "passed"
});
formatter.after({
  "duration": 581893063,
  "status": "passed"
});
formatter.before({
  "duration": 2576196280,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Flipkart home\" page on URL \"www.flipkart.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Login \u0026 Signup\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Login \u0026 Signup\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Flipkart home",
      "offset": 13
    },
    {
      "val": "www.flipkart.com",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 18892127584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 99974686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 270929468,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter valid Email ID/Mobile number\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Tset",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 252044090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "!23",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 10020462387,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[contains(@class,\u0027_2zrpKA _3v41xv\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REMMACL37PG8WN\u0027, ip: \u00272405:204:5293:d26b:f15d:bdce:beb1:fc9e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 3163, moz:profile: /var/folders/4j/lfd7p7g90s7..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.4.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 809a1b10-5a27-cf49-9677-d81641557cb5\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@class,\u0027_2zrpKA _3v41xv\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepdefs.StepDefinitions.i_fill_in_with(StepDefinitions.java:27)\n\tat ✽.And I fill in \"Password\" with \"!23\"(LoginProfile.feature:21)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email ID/Mobile number",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 588119643,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REMMACL37PG8WN\u0027, ip: \u00272405:204:5293:d26b:f15d:bdce:beb1:fc9e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 3163, moz:profile: /var/folders/4j/lfd7p7g90s7..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.4.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:448)\n\tat stepdefs.ServiceHooks.embedScreenshot(ServiceHooks.java:40)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat TestRunner.feature(TestRunner.java:34)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
});emote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:448)\n\tat stepdefs.ServiceHooks.embedScreenshot(ServiceHooks.java:40)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat TestRunner.feature(TestRunner.java:34)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.before({
  "duration": 3062521671,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Flipkart home\" page on URL \"www.flipkart.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Login \u0026 Signup\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Login \u0026 Signup\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Flipkart home",
      "offset": 13
    },
    {
      "val": "www.flipkart.com",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 18127233801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 38081027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login \u0026 Signup",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 236334917,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter valid Email ID/Mobile number\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Tset",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 70912790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "!23",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 65962565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 461023650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email ID/Mobile number",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "duration": 5040410585,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[text()\u003d\u0027Please enter valid Email ID/Mobile number\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REMMACL37PG8WN\u0027, ip: \u00272405:204:5293:d26b:f15d:bdce:beb1:fc9e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 3163, moz:profile: /var/folders/4j/lfd7p7g90s7..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.4.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 809a1b10-5a27-cf49-9677-d81641557cb5\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Please enter valid Email ID/Mobile number\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepdefs.StepDefinitions.i_should_see_message(StepDefinitions.java:42)\n\tat ✽.And I should see \"Please enter valid Email ID/Mobile number\" message(LoginProfile.feature:23)\n",
  "status": "failed"
});
formatter.after({
  "duration": 5594421755,
  "status": "passed"
});
});