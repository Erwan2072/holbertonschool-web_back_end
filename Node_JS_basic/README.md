# NodeJS Basics
## Resources
### Read or watch:

 - <a href="https://intranet.hbtn.io/rltoken/RqwwGmqIE4M3WwjqXusJ7w">Node JS getting started</a>
 - <a href="https://intranet.hbtn.io/rltoken/TyodG31Rx3XIiGE7HnxNYw">Process API doc</a>
 - <a href="https://intranet.hbtn.io/rltoken/Ic5-12q1xFd74_0psW4CdQ">Child process</a>
 - <a href="https://intranet.hbtn.io/rltoken/Bi4zX1TeHY2RF5lLYgKspg">Express getting started</a>
 - <a href="https://intranet.hbtn.io/rltoken/eBgT_wcT40RgCLtYXuRpvw">Mocha documentation</a>
 - <a href="https://intranet.hbtn.io/rltoken/rlx9PqRqSQkA6v6ZJmYKNw">Nodemon documentation</a>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

 - run javascript using NodeJS
 - use NodeJS modules
 - use specific Node JS module to read files
 - use process to access command line arguments and the environment
 - create a small HTTP server using Node JS
 - create a small HTTP server using Express JS
 - create advanced routes with Express JS
 - use ES6 with Node JS with Babel-node
 - use Nodemon to develop faster

## Requirements

 - Allowed editors: vi, vim, emacs, Visual Studio Code
 - All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node (version 20.x.x)
 - All your files should end with a new line
 - A README.md file, at the root of the folder of the project, is mandatory
 - Your code should use the js extension
 - Your code will be tested using Jest and the command npm run test
 - Your code will be verified against lint using ESLint
 - Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
 - All of your functions/classes must be exported by using this format: module.exports = myFunction;

## Provided files
### <p style="color: red;">database.csv</p>
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### <p style="color: red;">package.json</p>
```json
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-preset-env": "^1.7.0",
      "lint": "*",
      "eslint": "^6.8.0",
      "eslint-config-airbnb-base": "^14.2.1",
      "eslint-plugin-import": "^2.29.1",
      "eslint-plugin-jest": "^22.21.0",
      "nodemon": "^2.0.22",
      "chai": "^4.4.1",
      "mocha": "^6.2.3",
      "request": "^2.88.2",
      "sinon": "^7.5.0"
  }
}
```

### <p style="color: red;">babel.config.js</p>
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### <p style="color: red;">.eslintrc.js</p>
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```

### and…
Don’t forget to run $ npm install when you have the package.json



## TASKS
<details>
  <summary>Click to show/hide all tasks</summary>

### 0. Executing basic javascript with Node JS
In the file 0-console.js, create a function named `displayMessage` that prints in STDOUT the string argument.

### 1. Using Process stdin
Create a program named `1-stdin.js` that will be executed through command line:

- It should display the message "Welcome to Holberton School, what is your name?" (followed by a new line)
- The user should be able to input their name on a new line
- The program should display "Your name is: INPUT"
- When the user ends the program, it should display "This important software is now closing" (followed by a new line)

Requirements:

- Your code will be tested through a child process, make sure you have everything you need for that

### 2. Reading a file synchronously with Node JS
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

- Create a function named `countStudents`. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text "Cannot load the database"
- If the database is available, it should log the following message to the console "Number of students: NUMBER_OF_STUDENTS"
- It should log the number of students in each field, and the list with the following format: "Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES"
- CSV file can contain empty lines (at the end) - and they are not a valid student!

### 3. Reading a file asynchronously with Node JS
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

- Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text "Cannot load the database"
- If the database is available, it should log the following message to the console "Number of students: NUMBER_OF_STUDENTS"
- It should log the number of students in each field, and the list with the following format: "Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES"
- CSV file can contain empty lines (at the end) - and they are not a valid student!

### 4. Create a small HTTP server using Node's HTTP module
In a file named `4-http.js`, create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port `1245`
- Displays "Hello Holberton School!" in the page body for any endpoint as plain text

### 5. Create a more complex HTTP server using Node's HTTP module
In a file named `5-http.js`, create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port `1245`
- It should return plain text
- When the URL path is `/`, it should display "Hello Holberton School!" in the page body
- When the URL path is `/students`, it should display "This is the list of our students" followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

### 6. Create a small HTTP server using Express
Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port `1245`
- Displays "Hello Holberton School!" in the page body for the endpoint `/`

### 7. Create a more complex HTTP server using Express
In a file named `7-http_express.js`, recreate the small HTTP server using Express:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port `1245`
- It should return plain text
- When the URL path is `/`, it should display "Hello Holberton School!" in the page body
- When the URL path is `/students`, it should display "This is the list of our students" followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

### 8. Organize a complex HTTP server using Express
Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like import or export.

#### 8.1 Organize the structure of the server
- Create 2 directories within:
  - `controllers`
  - `routes`
- Create a file `full_server/utils.js`, in the file create a function named `readDatabase` that accepts a file path as argument:
  - It should read the database asynchronously
  - It should return a
