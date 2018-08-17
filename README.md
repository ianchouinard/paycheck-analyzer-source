# Paycheck Analyzer Source Code
source code for the small tool I made for myself to visualize paychecks and bill due dates.

[View Live App](https://paycheck-analyzer.herokuapp.com/)

## What it does
Just enter in your last pay date, pat frequency, net pay, and some re-occuring bills and the app will calculate when all of your paychecks occur over the next 12 months, and list which bills happen in each pay period.

## Dev
App is built with angular 6, and has no backend. 

The majority of the logic is in [the Setup Service](./src/app/modules/setup/services/setup.service.ts)

To run the angular app locally run "ng serve" after "npm install" from this directory.



