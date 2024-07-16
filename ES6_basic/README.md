## ES6 Basics

<img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240716%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20240716T063113Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6768a99f3a2cd74b3a69fd1e99e43e073861a8f4872fde49a8540259b3e0b6ee" alt="" loading="lazy" style="">

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/Q20cy-_XFufANSBCW0hvog" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="/rltoken/OHkTGVz-DLmzmrpDuWDYBw" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
<li><a href="/rltoken/5FxmFLP2qwTEo0puWUVHsQ" title="Arrow functions" target="_blank">Arrow functions</a></li>
<li><a href="/rltoken/qZm6g37BqHVD9G96MLsnsg" title="Default parameters" target="_blank">Default parameters</a></li>
<li><a href="/rltoken/qD9tUS00akyWTDU7MKUAuA" title="Rest parameter" target="_blank">Rest parameter</a></li>
<li><a href="/rltoken/HXwwEz4yeECpV8lCvs200g" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/GT7hK6Qly9Rrureewp_arA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="/rltoken/k18kRmC2WpcC_85dA44gBA" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/awTYlxNaMZw7HShPeC9D5w" title="ESLint" target="_blank">ESLint</a> along with specific rules that we’ll provide</li>
<li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory: </p>

<ul>
<li>Install Jest using: <code>npm install --save-dev jest</code></li>
<li>Install Babel using: <code>npm install --save-dev babel-jest @babel/core @babel/preset-env</code></li>
<li>Install ESLint using: <code>npm install --save-dev eslint</code></li>
</ul>

<h2>Configuration files</h2>

<p>Please create the following 3 files (with the provided contents) in the project directory:</p>

<h3><code>package.json</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre><code>
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
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre><code>
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
</code>
</pre>
</details>

<h3>Finally…</h3>

<p>Don’t forget to run <code>npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>

  </div>
</div>







          <h2 class="gap">Tasks</h2>

    <div data-role="task21455" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21455">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Const or let?
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Modify</p>

<ul>
<li>function <code>taskFirst</code> to instantiate variables using <code>const</code></li>
<li>function <code>taskNext</code> to instantiate variables using <code>let</code></li>
</ul>

<pre><code>export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
</code></pre>

<p>Execution example:</p>

<pre><code>bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>0-constants.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21455" data-batch-id="558" data-toggle="modal" data-target="#task-21455-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21455-users-done-modal" data-task-id="21455" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "0. Const or let?"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21455-score-info-score">0</span>/5
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21456" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-21456">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Block Scope
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Given what you’ve read about <code>var</code> and hoisting, modify the variables inside the function <code>taskBlock</code> so that the variables aren’t overwritten inside the conditional block.</p>

<pre><code>export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>1-block-scoped.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21456" data-batch-id="558" data-toggle="modal" data-target="#task-21456-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21456-users-done-modal" data-task-id="21456" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "1. Block Scope"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21456-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21457" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-21457">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Arrow functions
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite the following standard function to use ES6’s arrow syntax of the function <code>add</code> (it will be an anonymous function after)</p>

<pre><code>export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>2-arrow.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21457" data-batch-id="558" data-toggle="modal" data-target="#task-21457-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21457-users-done-modal" data-task-id="21457" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "2. Arrow functions"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21457-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21458" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-21458">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Parameter defaults
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Condense the internals of the following function to 1 line - without changing the name of each function/variable. </p>

<p><em>Hint:</em> The key here to define default parameter values for the function parameters.</p>

<pre><code>export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
142
56
41
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>3-default-parameter.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21458" data-batch-id="558" data-toggle="modal" data-target="#task-21458-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21458-users-done-modal" data-task-id="21458" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "3. Parameter defaults"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21458-score-info-score">0</span>/5
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21459" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-21459">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Rest parameter syntax for functions
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Modify the following function to return the number of arguments passed to it using the rest parameter syntax</p>

<pre><code>export default function returnHowManyArguments() {

}
</code></pre>

<p>Example:</p>

<pre><code>&gt; returnHowManyArguments("Hello", "Holberton", 2020);
3
&gt;
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
1
4
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>4-rest-parameter.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21459" data-batch-id="558" data-toggle="modal" data-target="#task-21459-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21459-users-done-modal" data-task-id="21459" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "4. Rest parameter syntax for functions"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21459-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21460" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-21460">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. The wonders of spread syntax
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.</p>

<pre><code>export default function concatArrays(array1, array2, string) {
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code> 5-spread-operator.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21460" data-batch-id="558" data-toggle="modal" data-target="#task-21460-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21460-users-done-modal" data-task-id="21460" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "5. The wonders of spread syntax"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21460-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21461" data-position="7" id="task-num-6">
      <div class="panel panel-default task-card " id="task-21461">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Take advantage of template literals
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.</p>

<pre><code>export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>6-string-interpolation.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21461" data-batch-id="558" data-toggle="modal" data-target="#task-21461-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21461-users-done-modal" data-task-id="21461" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "6. Take advantage of template literals"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21461-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21462" data-position="8" id="task-num-7">
      <div class="panel panel-default task-card " id="task-21462">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Object property value shorthand syntax
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Notice how the keys and the variable names are the same?</p>

<p>Modify the following function’s <code>budget</code> object to simply use the object property value shorthand syntax instead.</p>

<pre><code>export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>7-getBudgetObject.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21462" data-batch-id="558" data-toggle="modal" data-target="#task-21462-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21462-users-done-modal" data-task-id="21462" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "7. Object property value shorthand syntax"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21462-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21465" data-position="8" id="task-num-8">
      <div class="panel panel-default task-card " id="task-21465">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. No need to create empty objects before adding in properties
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite the <code>getBudgetForCurrentYear</code> function to use ES6 computed property names on the <code>budget</code> object</p>

<pre><code>function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>8-getBudgetCurrentYear.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21465" data-batch-id="558" data-toggle="modal" data-target="#task-21465-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21465-users-done-modal" data-task-id="21465" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "8. No need to create empty objects before adding in properties"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21465-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21466" data-position="9" id="task-num-9">
      <div class="panel panel-default task-card " id="task-21466">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. ES6 method properties
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite <code>getFullBudgetObject</code> to use ES6 method properties in the <code>fullBudget</code> object</p>

<pre><code>import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
$20
20 euros
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>9-getFullBudget.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21466" data-batch-id="558" data-toggle="modal" data-target="#task-21466-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21466-users-done-modal" data-task-id="21466" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "9. ES6 method properties"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21466-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21463" data-position="10" id="task-num-10">
      <div class="panel panel-default task-card " id="task-21463">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      10. For...of Loops
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite the function <code>appendToEachArrayValue</code> to use ES6’s <code>for...of</code> operator. And don’t forget that <code>var</code> is not ES6-friendly.</p>

<pre><code>export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>10-loops.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21463" data-batch-id="558" data-toggle="modal" data-target="#task-21463-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21463-users-done-modal" data-task-id="21463" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "10. For...of Loops"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21463-score-info-score">0</span>/3
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21464" data-position="11" id="task-num-11">
      <div class="panel panel-default task-card " id="task-21464">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      11. Iterator
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Write a function named <code>createEmployeesObject</code> that will receive two arguments:</p>

<ul>
<li><code>departmentName</code> (String)</li>
<li><code>employees</code> (Array of Strings)</li>
</ul>

<pre><code>export default function createEmployeesObject(departmentName, employees) {

}
</code></pre>

<p>The function should return an object with the following format:</p>

<pre><code>{
     $departmentName: [
          $employees,
     ],
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>11-createEmployeesObject.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21464" data-batch-id="558" data-toggle="modal" data-target="#task-21464-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21464-users-done-modal" data-task-id="21464" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "11. Iterator"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21464-score-info-score">0</span>/2
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task21467" data-position="12" id="task-num-12">
      <div class="panel panel-default task-card " id="task-21467">
  <span id="user_id" data-id="8687"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      12. Let's create a report object
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="8687"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Write a function named <code>createReportObject</code> whose parameter, <code>employeesList</code>, is the return value of the previous function <code>createEmployeesObject</code>.</p>

<pre><code>export default function createReportObject(employeesList) {

}
</code></pre>

<p><code>createReportObject</code> should return an object containing the key <code>allEmployees</code> and a method property called <code>getNumberOfDepartments</code>. </p>

<p><code>allEmployees</code> is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.</p>

<p>The method property receives <code>employeesList</code> and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.</p>

<pre><code>{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
            <li>Directory: <code>ES6_basic</code></li>
            <li>File: <code>12-createReportObject.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">

<div>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="21467" data-batch-id="558" data-toggle="modal" data-target="#task-21467-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-21467-users-done-modal" data-task-id="21467" data-batch-id="558">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "12. Let's create a report object"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>




    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#sandboxes-modal"><i aria-hidden="true" class="fa fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
            <strong class="text-primary">
              <span id="task-21467-score-info-score">0</span>/2
            </strong>
            <span class="text-muted">pts</span>
        </div>
      </div>


  </div>
</div>

    </div>

    <p class="lg-gap">
      <a class="btn btn-primary btn-block" data-confirm="Are you sure? Make sure you focused on the mandatory tasks first" href="/projects/2345/unlock_optionals">Done with the mandatory tasks? Unlock 2 advanced tasks now!</a>
    </p>


          <div class="gap">
  <div data-react-class="projects/ProjectReview" data-react-props="{&quot;correction&quot;:{&quot;statusURI&quot;:&quot;/corrections/877832/status_self_paced.json&quot;,&quot;startReviewURI&quot;:&quot;/corrections/877832/start_auto_review_self_paced.json&quot;},&quot;csrfToken&quot;:&quot;poo0Q6DQ5ItmAPFxyDZLMXslVW29I0diPmICzLDSik-uFkRP-I90OnI1gi53ZEL2_z-LejiYmGiLokLo7G_i1g&quot;,&quot;nextProject&quot;:{&quot;details&quot;:{&quot;curriculum_completed&quot;:false,&quot;message&quot;:&quot;Next project: ES6 classes&quot;,&quot;uri&quot;:&quot;/projects/2347&quot;},&quot;fetchURI&quot;:&quot;/projects/2345/next&quot;},&quot;pollingInterval&quot;:10000,&quot;progress&quot;:{&quot;auto_review&quot;:{&quot;can_execute&quot;:true,&quot;completion&quot;:{&quot;count&quot;:0,&quot;is_completed&quot;:false,&quot;percentage&quot;:0.0},&quot;inability_to_execute_reason&quot;:null},&quot;tasks&quot;:[{&quot;id&quot;:21455,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:5,&quot;score&quot;:0}},{&quot;id&quot;:21456,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21457,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21458,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:5,&quot;score&quot;:0}},{&quot;id&quot;:21459,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21460,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21461,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21462,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21465,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21466,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21463,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:3,&quot;score&quot;:0}},{&quot;id&quot;:21464,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:2,&quot;score&quot;:0}},{&quot;id&quot;:21467,&quot;progress_score&quot;:{&quot;progress&quot;:0.0,&quot;score&quot;:0.0},&quot;score_info&quot;:{&quot;passed&quot;:false,&quot;points&quot;:2,&quot;score&quot;:0}}],&quot;summary&quot;:{&quot;completion&quot;:0.0,&quot;score&quot;:{&quot;mandatory&quot;:null,&quot;optional&quot;:null}},&quot;can_skip&quot;:true,&quot;can_start_peer_review&quot;:false},&quot;peerReview&quot;:null,&quot;project&quot;:{&quot;completion&quot;:0.0,&quot;id&quot;:2345,&quot;index&quot;:0,&quot;isAccessible&quot;:true,&quot;isOptional&quot;:false,&quot;imagePath&quot;:&quot;/assets/pathway/002_color-261c5d8dcd9df7930ced5c51da7ac8a20266ad8b3861fea9ce55fbc3a4df3fd7.png&quot;,&quot;name&quot;:&quot;ES6 Basics&quot;,&quot;score&quot;:{&quot;mandatory&quot;:null,&quot;optional&quot;:null},&quot;tasksCount&quot;:2},&quot;skipURI&quot;:&quot;/corrections/877832/skip&quot;,&quot;taskLevelReviewTypeHumanized&quot;:&quot;Your score will be updated as you progress.&quot;}" data-react-cache-id="projects/ProjectReview-0"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Score</h3></div><div class="panel-body"><div class="align-items-center d-flex gap-5"><div class="pathway" style="padding: 10px 30px 40px;"><div class="project-circle " style="border-radius: 100%; box-shadow: rgb(229, 230, 230) 10px 20px 10px; height: 125px; margin: auto; padding: 5px; width: 125px;"><div data-test-id="CircularProgressbarWithChildren"><div style="position: relative; width: 100%; height: 100%;"><svg class="CircularProgressbar " viewBox="0 0 100 100" data-test-id="CircularProgressbar" style="height: 115px; vertical-align: middle; width: 115px;"><path class="CircularProgressbar-trail" d="
      M 50,50
      m 0,-48.5
      a 48.5,48.5 0 1 1 0,97
      a 48.5,48.5 0 1 1 0,-97
    " stroke-width="3" fill-opacity="0" style="stroke-dasharray: 304.734px, 304.734px; stroke-dashoffset: 0px;"></path><path class="CircularProgressbar-path" d="
      M 50,50
      m 0,-48.5
      a 48.5,48.5 0 1 1 0,97
      a 48.5,48.5 0 1 1 0,-97
    " stroke-width="3" fill-opacity="0" style="stroke-dasharray: 304.734px, 304.734px; stroke-dashoffset: 304.734px;"></path></svg><div data-test-id="CircularProgressbarWithChildren__children" style="position: absolute; width: 100%; height: 100%; margin-top: -100%; display: flex; flex-direction: column; justify-content: center; align-items: center;"><div style="height: 100%; position: absolute; transform: rotate(0turn);"><div class="circular-progress-bar-radial-separator" style="height: 4%; width: 8px;"></div></div><div style="height: 100%; position: absolute; transform: rotate(0.5turn);"><div class="circular-progress-bar-radial-separator" style="height: 4%; width: 8px;"></div></div><div class="position-relative"><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="ES6 Basics"><div class="align-items-center d-flex justify-content-center project-circle-body active" style="border-radius: 100%; height: 100px; width: 100px;"><img alt="Project badge" src="/assets/pathway/002_color-261c5d8dcd9df7930ced5c51da7ac8a20266ad8b3861fea9ce55fbc3a4df3fd7.png" width="60%"></div></span></div></div></div></div></div></div><div style="flex-basis: 100%;"><p class="mb-2 text-primary"><span>Your score will be updated as you progress.</span></p><p>Please review <strong>all the tasks</strong> before you start the peer review.</p><div class="d-flex flex-wrap gap-3 justify-content-between mt-4"><div class="btn-group"><button class="btn btn-primary" id="project-launch-review-btn"><i aria-hidden="true" class="fa fa-paper-plane"></i><span class="ml-2">Review all the tasks</span></button></div><div></div></div></div></div></div></div></div>
</div>



          <div class="modal fade" id="container-specs-modal"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandbox</h4></div><div class="modal-body"><div data-react-class="user_containers/ContainerSpecs" data-react-props="{&quot;containerModelName&quot;:&quot;Sandbox&quot;,&quot;containerSpecs&quot;:[{&quot;description&quot;:&quot;\u003cp\u003eUbuntu 18.04 with Node 12\u003c/p\u003e\n&quot;,&quot;id&quot;:29,&quot;name&quot;:&quot;Ubuntu 18.04 - Node 12&quot;,&quot;online&quot;:true}],&quot;containersLimit&quot;:5,&quot;csrfToken&quot;:&quot;vxfiXkzX5m2O0qexL4884KbgHqceRa4umvvFPL-lt4m3i5JSFIh23Jrn1O6Q3TUnIvrAsJv-cSQvO4UY4xjfEA&quot;,&quot;startStatusURI&quot;:&quot;/user_containers/start_status.json&quot;,&quot;startURI&quot;:&quot;/user_containers/start.json&quot;}" data-react-cache-id="user_containers/ContainerSpecs-0"><div><div class="d-flex gap-4 sandboxes-filters"><a class="btn btn-outline-primary"><i aria-hidden="true" class="fa fa-filter"></i><span class="ml-2">Running only</span></a><div class="align-items-center d-flex" style="position: relative; width: 100%;"><input class="form-control" placeholder="Search for an image ..." type="search" value=""></div></div><div class="mt-3"><h3>1 image<small class="ml-2">(0/5 Sandboxes spawned)</small></h3></div><div class="mt-3"><div class="panel panel-default"><div class="panel-body"><div class="align-items-center d-flex flex-wrap justify-content-between"><div><h3 class="mt-0"><i aria-hidden="true" class="fa fa-terminal text-danger"></i><span class="ml-2">Ubuntu 18.04 - Node 12</span></h3><div class="mt-2 text-muted"><p>Ubuntu 18.04 with Node 12</p>
</div></div><div class="d-flex flex-wrap gap-5"><a class="btn btn-success"><i aria-hidden="true" class="fa fa-play"></i><span class="ml-2">Run</span></a></div></div></div></div></div></div></div></div></div></div></div>
          <div class="modal fade" id="sandboxes-modal"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandboxes</h4></div><div class="modal-body"><div data-react-class="user_sandboxes/Sandboxes" data-react-props="{&quot;images&quot;:[{&quot;id&quot;:16,&quot;name&quot;:&quot;Ubuntu 22.04 LTS&quot;,&quot;aws_region&quot;:&quot;US East (N. Virginia)\t&quot;},{&quot;id&quot;:50,&quot;name&quot;:&quot;Ubuntu 18.04 LTS&quot;,&quot;aws_region&quot;:&quot;US East (N. Virginia)\t&quot;},{&quot;id&quot;:17,&quot;name&quot;:&quot;Ubuntu 22.04 LTS&quot;,&quot;aws_region&quot;:&quot;South America (São Paulo)&quot;},{&quot;id&quot;:51,&quot;name&quot;:&quot;Ubuntu 18.04 LTS&quot;,&quot;aws_region&quot;:&quot;South America (São Paulo)&quot;},{&quot;id&quot;:14,&quot;name&quot;:&quot;Ubuntu 22.04 LTS&quot;,&quot;aws_region&quot;:&quot;Europe (Paris)&quot;},{&quot;id&quot;:52,&quot;name&quot;:&quot;Ubuntu 18.04 LTS&quot;,&quot;aws_region&quot;:&quot;Europe (Paris)&quot;},{&quot;id&quot;:18,&quot;name&quot;:&quot;Ubuntu 22.04 LTS&quot;,&quot;aws_region&quot;:&quot;Asia Pacific (Sydney)&quot;},{&quot;id&quot;:53,&quot;name&quot;:&quot;Ubuntu 18.04 LTS&quot;,&quot;aws_region&quot;:&quot;Asia Pacific (Sydney)&quot;}],&quot;sandboxesUri&quot;:&quot;/user_sandboxes&quot;,&quot;csrfToken&quot;:&quot;9ryrZHKBzm4OJDEzd2d0ZE7lfU6l2xBIoPh059kBSkr-INtoKt5e3xoRQmzINX2jyv-jWSBgz0IVODTDhbwi0w&quot;,&quot;maxNumberOfContainers&quot;:2}" data-react-cache-id="user_sandboxes/Sandboxes-0"><div class="d-flex flex-column"><div class="dropdown pull-right" style="align-self: end;"><button aria-expanded="false" aria-haspopup="true" class="btn btn-lg btn-primary dropdown-toggle" data-toggle="dropdown" type="button">New sandbox <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right"><li class="divider" role="separator"></li><li class="dropdown-header">US East (N. Virginia)	</li><li><a role="button">Ubuntu 18.04 LTS</a></li><li><a role="button">Ubuntu 22.04 LTS</a></li><li class="divider" role="separator"></li><li class="dropdown-header">South America (São Paulo)</li><li><a role="button">Ubuntu 18.04 LTS</a></li><li><a role="button">Ubuntu 22.04 LTS</a></li><li class="divider" role="separator"></li><li class="dropdown-header">Europe (Paris)</li><li><a role="button">Ubuntu 18.04 LTS</a></li><li><a role="button">Ubuntu 22.04 LTS</a></li><li class="divider" role="separator"></li><li class="dropdown-header">Asia Pacific (Sydney)</li><li><a role="button">Ubuntu 18.04 LTS</a></li><li><a role="button">Ubuntu 22.04 LTS</a></li></ul></div><div class="mt-2 alert alert-info">No sandboxes yet!</div></div></div></div></div></div></div>

      <div class="d-flex justify-content-around align-items-center">
          <div>
            <a data-toggle="tooltip" title="" class="btn btn-primary" role="button" href="/projects/3143" data-original-title="Python - Server-Side Rendering">Previous project</a>
          </div>
          <form action="/corrections/877832/skip" method="post">
            <input name="authenticity_token" type="hidden" value="t5pbfnx06HR499CA36z56y4aGmxPp-I3-Ye8QZeqMzC_BityJCt4xWzCo99g_vAsqgDEe8ocPT1MR_xlyxdbqQ">
            <button class="btn btn-warning" type="submit">
              Next project
            </button>
          </form>
      </div>
  </div>
</div>

      </article>
    </main>
