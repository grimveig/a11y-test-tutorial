#Pa11y javascript interface
<em>Examples in [pa11y-javascript.js](../../examples/pa11y/pa11y-javascript.js)</em>

## Setting up
If you've already completed the setup for the command-line tool, the javascript interface
is already installed. If you haven't run ```npm install pa11y``` in your terminal

## 1. A basic run 
```
pa11y(http://url/to/page).then((results) => {

    console.log("Issues detected on page with standard config: " , 
    results.issues)
})
```
## 2. Configurations how-to
The pa11y() function takes an array with configuration options as a 
second argument. See [configurations.md](configurations.md) for more details

```
var config_array = {
                    "threshold": 5 ,
                    "hideElements" : "#hide-selector"
                    }


pa11y(http://url/to/page, configarray).then((results) => {

    console.log("Issues detected on page with custom config: " , 
    results.issues)
})
```

## 3. Troubleshooting
###Not a function errors
Some people run into this problem when using node version 10,
change node version to 8 

###Error: net::ERR_CONNECTION_REFUSED
>Is your server running?

No? Start your server!

>Is it the correct url ( and port)?

No? Fix the url

>Do you need to be logged in?

Some pages requires a user to be logged in order to access the content.
<ol>
    <li>Open a browser with dev tools</li>
    <li>Go to the url you want to test</li>
    <li>If you're not already logged in; log in</li>
    <li>In Network: find the original request for the page you're trying to test
        and inspect the request header.   
    </li>
    <li>If there is a cookie in the header containing a session id, copy the key and 
    coockie value</li>
    <li>Add this line to your config array:</li>   
</ol>

```
headers: {
       Cookie: 'coockie-key=sessiontoken'
   }
``` 
