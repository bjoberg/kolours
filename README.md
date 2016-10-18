# Kolours

[![Build Status](https://travis-ci.org/bjoberg/kolours.svg?branch=master)](https://travis-ci.org/bjoberg/kolours)

Kolours is a simple web app that asks the user to input an RGB color code. If the user selects that color, the background of the page will change to the selected color.

A personal design project, my goal with Kolours was to create the simplest, most robust web application that I could. Kolours doesn't do much, but with this project I attempted to build my first piece of "real" software that is fully functional, visually appealing, tested, and documented.

Project link: [https://bjoberg.github.io/kolours/](https://bjoberg.github.io/kolours/)

For more information, please refer to the project [wiki](https://github.com/bjoberg/kolours/wiki).

## Installation

1. Install [node.js (v6.x.x or higher)](https://nodejs.org/en/download/current/).
  * **Note**: To confirm that you have the correct version of npm installed on your computer, run `node -v`. If you do not have v6.x.x or higher, redownload the latest version of node.js.
2. Confirm your version of npm. You want v3.x.x or higher.
  * **Note**: npm comes packaged with node.js. To confirm that you have the correct version of npm installed on your computer run `npm -v`. If you do not have v3.x.x or higher, redownload the latest version of node.js.
3. Install the [Angular 2 CLI](https://cli.angular.io/).
4. Clone this repository.
5. Within your command line, navigate into your local (recently cloned) project directory, and run `npm install`.
6. Run `ng serve` to start your development server. 
7. Once the development server has started, navigate to `http://localhost:4200/` to view the site locally.
  * **Note**: The app will automatically reload if you change any of the source files. So you do not need to keep running `ng-serve` everytime you edit a file.

## Testing

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Credits

* This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## License

MIT
