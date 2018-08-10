# a11y testing with pa11y
More in  at https://github.com/pa11y/pa11y
Requirements : Node 8


## Setting up
 ```
 npm install -save-dev pa11y
  ```
  add a script in package.json for the commandline tool:
 ```
   "scripts": {
    "pa11y": "pa11y [http://url/to/test/page]"
  }
 ```
## 1. A basic run

 ```
 npm run pa11y
  ```
<ul>
<li>0: No accessbility issues found</li>
<li>1: Test aborted due to technical errors </li>
<li>2: Accessibility issues found</li>
</ul>  
  
  
### Configurations how-to
You can either add options directly to the script in package.json
 ```
   "scripts": {
    "pa11y": "pa11y http://url/to/test/page --threshold 10"
  }
 ```
 or specifying them in a .json file.
 ```
 {
  "threshold": 10
}
 ```
By default it will look for a pa11y.json file in the current directory. You can change this with the  ```--config  ``` flag in package.js:

```
"pa11y": "pa11y http://url/to/test/page --config path/to/file.json"
```

<em>For more config options see [configurations.md](configurations.md)


