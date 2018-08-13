# a11y testing with pa11y
Requirements : Node 6 or higher<br>

## Setting up
```
 npm install axe-core
  ```

## 1. A basic run  
1. Add the script to your html
``` 
<script src="node_modules/axe-core/axe.min.js" ></script>
```
2. Add a call to axe.run on the bottom of your page

```
<script>
    axe.run(function(error, result){
        console.log(result);
    });
</script>
``` 

3. Open your browsers dev tool
4. Go to your page. You can see the output in the dev tool console.

## 2. Configurations how-to

<em>The rest of this tutorial is based on script injection with a headless browser. 
If you are unfamilliar with headless browsers see the example in [puppeteer-axe.js](../../examples/axe/puppeteer-axe.js) for setup
<em>
The ```axe.run``` function takes an array with configuration options as a second argument. 

```
var config_array = {
                 runOnly: {
                          type: "tag",
                          values: ["wcag2a","wcag2aa"]
                           }
                    }

axe.run() 
                    

```



<em>For more about config options see [configurations.md](configurations.md)</em>

## 3. Troubleshooting
###ReferenceError: Node is not defined
The document you are attempting to test is not visbible to aXe. 
1. Check that the script is correctly injected.
