# a11y testing with pa11y
Requirements : Node 8

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
Configurations options are added as flags to the axeq command.
In package.json add a new script:
```
   "scripts": {
    "axe-cmd-opts": "axe [https://path/to/page] --tags wcag2a,wcag2aa --exit"
  }
 ```
````--tags wcag2a,wcag2aa```` tells axe to run rules related to wcag level A and AA only.
The ```--exit``` flag tells axe to exit with codes;
1 if accessibility violations was found, 0 if no errors were found

<em>For more config options see [configurations.md](configurations.md)<br>


## 3. Troubleshooting
