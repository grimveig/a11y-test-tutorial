# a11y testing with aXe commandline
Requirements : Node 6<br>
For more information see [axe-cli on github](https://github.com/dequelabs/axe-cli)


## Setting up
 ```
 npm install axe-cli
  ```
  add a script in package.json for the commandline tool:
 ```
   "scripts": {
    "axe-command": "axe [https://path/to/page]"
  }
 ```
## 1. A basic run

 ```
 npm run axe-command
  ```
  
## 2. Configurations how-to
Configurations options are added as flags to the axe command.
In package.json add a new script:
```
   "scripts": {
    "axe-cmd-opts": "axe [https://path/to/page] --tags wcag2a,wcag2aa --exit"
  }
 ```

````--tags wcag2a,wcag2aa```` tells axe to run rules related to wcag level A and AA only. <br>
The ```--exit``` flag tells axe to exit with codes;
* 1 if accessibbility issues were detected
* 0 if no accessibility issues were detected

<em>For more config options see [configurations.md](configurations.md)<br>

