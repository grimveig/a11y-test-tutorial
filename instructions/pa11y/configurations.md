# Pa11y configurations
This page contains a limited selection of configurations for a basic run with
pa11y. For more advanced options see pa11y's  [documnetation on github](https://github.com/pa11y/pa11y#configuration)

##Page scope

``` hideElements: 'img, #issue' ```<br>
Exclude elements from test.<br>
parameter: css-selectors in comma separated string
    
``` rootElements: '#start' ``` <br>
Testing subsections of page; starts test on element with id<br>
parameter: css-selector in string

##Rule scope
A list of all rule-ids can be found in [rules/htmlcs.md](../../rules/htmlcs.md) <br>
Details about the rules are available on [pa11y's github wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).
More thorough descriptions on [HTML_CodeSniffer's github](http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/)
<hr>

````standard: 'wcag2aaa'````<br>
Standard the page should be tested against. Defaults to wcag2aa
.<br>
tags:```wcag2A```,```wcag2AA```,```wcag2AAA```,```section508```


```
ignore:[ 'WCAG2AA.Principle1.Guideline1_2.1_2_5',
         'WCAG2AA.Principle1.Guideline1_3.1_3_1']
```
WCAG 2.0 rules to exclude from the test (f.ex if you know that a rule fails but
will not be fixed at the moment).<br> 
parameter: Array of strings wilt rule-ids<br>
<em>rule-id format: [Standard].[Principle].[Guidline].[rule-id(s)]</em>


```
rules: ['Principle1.Guideline1_4.1_4_6']
```
Add rules from other rulesets. F.ex in this example Criteria 1.4.6 Color contrast, WCAG level AAA, will be added to the ruleset
of WCAG level AA (assuming that the standard is set to default)<br>
parameter: Array of strings wilt rule-ids.<br> 
<em>rule-id format:[Principle].[Guidline].[rule-id(s)] </em>

##Output
<em>pa11y's default options is "human-readable" in terminal, but other options are available.</em>

####Format
```reporter: 'json'``` <br>
Set output format.<br>
Embedded options: ````json````,```cli```, ```csv```<br>
<em>In additional node modules</em><br>
````html````: ```npm install pa11y-reporter-html```<br>
```tsv``` : ```npm install pa11y-reporter-tsv```

### Destination
Default option is terminal, if you want to wrote fo file add ```> path/to/file```
to the end of your script in package.js<br>
```
"pa11y": "pa11y http://url/to/test/page --config path/to/file.json > path/to/destination/filename.[extension]"
```

or directly in terminal: ```npm run pa11y > report.txt```

###Sensitivity

``` "threshold": 5 ```<br>
How many issues that can be detected before the test fails. Default is 0

#### Error levels 