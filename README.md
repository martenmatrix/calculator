
# Calculator

This application is a simple calculator, which calculates results without the `eval()` function because it is [slow and allows bad actors to run arbitrary code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!). It is able to calculate simple addition, subtraction, multiplication and division with decimals.

Because of `eval()` being dangerous, the app pushes, when an operator is pressed, the typed number and operator to an array named `typeHistory`. When its length is bigger than three, it calculates the total sum of the array with the built-in `reduce()`, clears `typeHistory` and saves the result plus displays it. If another calculation is performed, the current total is pushed as the first number to the history array.

## Table of Contents
- [Deployed links](#globe_with_meridians-deployed-links)
- [Usage](#grey_exclamation-usage)
- [Features](#sparkles-features)
- [Installation](#wrench-installation)
- [Technology stack](#blue_book-technology-stack)
- [License](#scroll-license)

## :globe_with_meridians: Deployed links

The application is hosted at the following address:

- https://martenmatrix.github.io/calculator/

## :grey_exclamation: Usage
1. Enter a number with the  buttons our your keyboard.
2. Enter an operator with the buttons our your keyboard.
3. Choose another number.
4. If everything went fine, you should now be able to see the calculated result. :tada:
If not, please [create an issue](https://github.com/martenmatrix/capital-gains-trading-calculator/issues/new).
5. Jump to step two, if you want to expand your calculation.

## :sparkles: Features
- calculate simple addition, subtraction, multiplication and division with decimals
- display current total after every operator used
- does not use `eval()`

## :wrench: Installation
If you want to run the application on your local pc or just want to contribute, do the following steps:
1. Clone the repository.
`git clone https://github.com/martenmatrix/calculator`
2. Open up `index.html` or use an application like [Liver Server for VSC](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for your IDE to load the page.

## :blue_book: Technology Stack
This application is written in vanilla JavaScript.

## :scroll: License
[MIT](https://github.com/martenmatrix/capital-gains-trading-calculator/blob/master/LICENSE)
