# Greet And Calculate

This project is an example of introductory level Test Driven Development. Version 0.1.0 includes a *greet.js* file with a greeting function that can be used to print 'hello' + a name passed in as an argument. It also includes an *arithmetic.js* file with a basic functions for addition and subtraction.

## Getting Started

Fork this repository and clone it down to your local machine.

### Prerequisites

You'll need to have node and npm installed and up to date on your computer, a command line interface (CLI) like Terminal on a Mac or gitbash on a PC, and a code editor (VS Code was used to develop this project). 

You can check to see if you have node and npm installed by using the following commands:
```
node -v
npm -v
```

If it is not yet installed, you can find more information about installing them here:

[install npm](https://www.npmjs.com/get-npm)
[install node](https://nodejs.org/en/download/)


### Installing

Once you have npm and node installed and you've opened up the forked repository in you editor of choice, you'll need to install the dependencies from the package.json file.

```
npm i
```

## Running the tests

This project uses eslint, jest, and node's assert for testing. They should be installed when you've finished installing the dependencies. Then you can run the following script to run the tests in the test file:

```
npm run test:watch
```

### What the tests do

*greet.test.js* has two tests that run on *greet.js*, the first of which tests that the greet function returns the expected greeting when a valid argument is supplied, and the second of which returns an error when an invalid argument is supplied. The greet function accepts a single argument in string format.

*arithmetic.test.js* has five tests of the add function and five tests of the subtract function in *arithmetic.js*. These ensure that the functions can do arithmetic with integers, floating point numbers, and numbers in string format as inputs. If an argument is passed in in any other format, an error should be returned. The add and subtract functions accept 2 arguments which must be integers, floating point numbers, or numbers in string format. As written, the results of addition and subtraction of very large numbers (1 * 10^22 and larger) will not be completely accurate.

## Author

* **Sarah Flynn** - [My Github](https://github.com/sarahflynn)

## Acknowledgments

* Code partially modeled on a demo by MartyPDX - [MartyPDX GitHub](https://github.com/martypdx/tdd-greeter)
