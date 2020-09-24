# Readme Generator

Richard Ay, September 2020

## Table of Contents
* [Project Objective](#project-objective)
* [Acceptance Criteria](#acceptance-criteria)
* [Deployment Link](#deployment-link)
* [Application Logic](#application-logic)
* [Technologies Used](#technologies-used)
* [Application Screen Shot](#application-screen-shot)



## Project Objective
As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## Acceptance Criteria
GIVEN a command-line application that accepts user input:

1) WHEN I am prompted for information about my application repository, THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, 
License, Contributing, Tests, and Questions.
2) WHEN I enter my project title, THEN this is displayed as the title of the README.
3) WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
4) WHEN I choose a license for my application from a list of options, THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
5) WHEN I enter my GitHub username, THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile.
6) WHEN I enter my email address, THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
7) WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README.


## Deployment Link
The deployment link to display the application is: 
[GitHub Pages](https://captainrich.github.io/Readme-Generator/) 

## Application Logic

1) On start-up, local storage is read and if data is acquired, the equity and crypto-currency pages are populated.
2) On the main page the user can define, edit, or delete investments (equities or crypto-currencies).
3) A timer is started that updated the investment information every 10 minutes.  (Only the transitory data is updated by this process.  Other data is only updated once a day after the market closes - this data is not updated by the timer function.)
4) Whenever data is updated, the entire set of investment information is saved to local storage.
5) When the user clicks on an investment, the appropriate page (either equity or crypto-currency) is displayed with the data for that investment.
6) On either the equity page or the crypto-currency page, a drop list is available to switch to other (similar) investments. Whenever an investment is selected, its data is updated and displayed on the page.
7) For each investment, its characteristic parameters are compared to a user defined range.  The HTML page is updated to indicate if the parameters are inside or outside of these defined ranges (by placing icons next to the parameters).  A parameter outside of the specified range deserves additional evaluation on a brokerage website. 

## Technologies Used

1) The HTML framework employed is 'Bulma'.
2) Certain fonts are displayed using 'FontAwesome'.
3) Date and time information is acquired and manipulated via 'moment.js'.
4) Several different public APIs are used to acquire the financial data:
   * AlphaAdvantage.co
   * Finnhub.io
   * nomics.com

## Application Screen Shot

![Stockman Image](./readme.jpg)
![Stockman Image](./stockman2.jpg)
![Stockman Image](./stockman3.jpg)