# webdriverio_cucumber-test

WebdriverIO_CucumberFW-test

This Project framework is designed using Webdriverio, node.js, and cucumber framework. Cucumber framework is used to develop test automation script.
Babel is used to compile test files and Grunt is used to manage and execute tests.
Allure, json and junit reporting is to show a very concise representation of what have been tested.
Parallel execution, Cross browser tests, Docker Image and browserstack/sauce lab integration is also available in this framework.


Installation: 
1)	Node.js
2)	Grunt: npm install -g grunt-cli
3)	JDK 1.8
4)	WebdriverIO CLI: npm i --save-dev @wdio/cli


Dependencies/Scripts:
1.	package.json
•	Project setup starts from  package.json folder
•	All the required dependencies, scripts for execution usinf npm commands, directories etc are mentioned in package.json folder
2.	package-lock.json :
•	Npm install command will download all the dependencies and also creates package-lock.json folder.
3.	Gruntfile.js:
•	This file is used to manage/execute the tests as Runner files.
•	Config file info is stored which is used to execute the tests.
4.	Babel.config.js:
•	It is used to compile test files.
5.	 docker-compose.yml:
•	Docker Compose is a tool for defining and running multi-container Docker applications. 
•	With Compose, a YAML file is used to configure the application’s services.
•	With a single command, you create and start all the services from your configuration.
 

Design Patterns:
•	This Project uses Page Object Design pattern. This design pattern stores all the page object elements in *.page.js. There is a clean separation between test code and page specific code such as locators and the functions.

                            
Cucumber Framework:
•	The Cucumber framework is all about Feature files and Step definition.
•	Feature files are created under test/features which will give easy representation ‘scenario’ that is under test.
•	Feature files are written with the help of Given, When and Then.
•	Steps definition file stores the mapping between each step of the scenario defined in the feature file with a code of function to be executed.

              

Test Run:
•	wdio.shared.conf.js has all the necessary configuration settings to drive this project. 
•	It has specs, reporters, services, cucumberopts, baseurl etc.
•	The rest of the *.conf.js files in config folder will pull the wdio.shared.conf.js and execute based on the configuration set.
•	Parallel execution/crossbrowser testing setup is also present in *.conf.js.
1)	To run the test in local:
grunt webdriver:test-local
2)	To run the test in Sauce Labs:
grunt webdriver:test-sauce
3)	To run the test in Browserstack:
grunt webdriver:test-browserstack
4)	To run the test in Browserstack:
grunt webdriver:test-browserstack
5)	To run the test in Docker:
npm run docker-compose
grunt webdriver:test-docker

		 
Reporting:
1)	Allure reports are generated using the command
npm run allure-report
 
2)	Junit reports are generated using command
npm run junit-report
 
Rerun service:
•	Failed cases can be generated using rerun service of webdriverio.
•	Service information is mentioned in wdio.shared.conf.
•	Rerun rate for a certain step definitions is applied. 








