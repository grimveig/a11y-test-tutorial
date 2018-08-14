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

### Page scope

### Rule scope

### Output

### Sensitivity

### Severity levels