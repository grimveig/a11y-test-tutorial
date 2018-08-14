# aXe configurations
This page contains a limited selection of configurations for a basic run with
axe-cli and axe-core. 

## axe-cli (commandline tool)
You can configure how axe-cli runs by ading flags to the axe command in your script. For example; 
```axe http://localhost:3000/index.html --tags wcag2a,wcag2aa```  sets the rule scope of the audit to be rules related to 
wcag2 level A & AA

For examples see [commandline.sh](../../examples/axe/commandline.sh)


### Page scope
``` 
--include
```
Run audit on specified css-selectors
Parameters: css-selectors

```
--exclude
```

Exclude elementens with specified css selector from the audit
Parameters: css-selectors

### Rule scope
Rule scope can be defined either with the ```--tags``` <em>or</em> the ```--rules``` flag
An overview of rule-ids can be found in [rules/axe-core.md](../../rules/axe-core.md).
For more info see axe's [rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

```
--tags 
```
Run rules with specified tags<br>
Parameters: ```wcag2a```, ```wcag2aa```, ```Section508```, ```best-practice```, ```experimental```<br>

```
--rules
```
Run rules with specified rule-ids
Parameters: rule-ids

```
--disable
```

Exclude rules with specified ids
Parameter: rule-ids

### Output
```
--exit
```
Exit with status
* 0: no accessibility issues detected
* 1: accessibility issues detected

```
--save
```
Write results to a .json file
Optional parameter: name of file

```
--dir
```
Write results to a .json file in specified directory
Optional parameter: path to directory


##JS library 
There are two ways to configure tests with axe-core 
1. The axe.configure option
2. With optional parameteres in the axe.run fuction 

This tutorial focuses on basic configurations in the axe.run function, for details about axe.configure and adnvanced options 
for axe.run see axe-core's [API-documentation](https://www.deque.com/axe/documentation/#api-name-axeconfigure)

###axe.run parameters

The axe.run functions takes 3 optional paramaters
```
axe.run(context, options, callback)
```

```context ```: page scope of the test
``` options```: A json object containing additional configurations

###Page scope: 
Page scope is defined in the context parameter
Values:

* A CSS-selector
* A Node-list
* A reference to the document 
* An include/exclude object,a json object with node lists of elements to include and exclude from the test
 
```
{
  include: ['body'],
  exclude: ['#lost_cause']
}
``` 

You can read more about the include/exclude object in axe-core's [API documentation](https://www.deque.com/axe/documentation/#user-content-include-exclude-object)

### Rule scope
Rule scope configurations are added in the options object

``` 
runOnly: {
            type: "tag",
            values: ["wcag2a","wcag2aa"]
            }
```
Run only the rules with specified tag or id<br>
type: ``` tag``` or ```rule```<br>
values : see [rules/axe-core.md](../../rules/axe-core.md)

```
  "rules": {
    "color-contrast": { enabled: false },
  }
```

Edit properties of rules with specified rule-id<br> In this example color-contrast is excluded from the test
See [rules/axe-core.md](../../rules/axe-core.md) for all rule-ids

