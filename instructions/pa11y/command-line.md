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
<li>0: Test passed</li>
<li>1: Test aborted due to technical errors </li>
<li>2: Test failed</li>
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
pa11y --config ./path/to/custom-config.json http://path/to/page 
```

<em>For more config options see [configurations.md](configurations.md)


## Troubleshooting
Error: net::ERR_CONNECTION_REFUSED
>Is your server running?

No? Start your server!

>Is it the correct url ( and port)?

No? Fix the url

>Do you need to be logged in?

Some pages requires a user to be logged in in order to access the content.
<ol>
    <li>Open a browser with dev tools</li>
    <li>Go to the url you want to test</li>
    <li>If you´´e not already logged in; log in</li>
    <li>In Network: find the original request for the page you´re trying to test
        and inspect the request header.   
    </li>
    <li>If there is a cookie in the header containing a session id, copy the key and 
    coockie value</li>
    <li>Add this line to your config file:</li>
    
</ol>

```
headers: {
       Cookie: 'coockie-key=sessiontoken'
   }
``` 
