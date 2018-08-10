# Pa11y configurations
This page contains a selection of useful basic configurations
for pa11y. For more advanced options see pa11y's  [documnetation on github](https://github.com/pa11y/pa11y#configuration)

##Page scope

``` hideElements: 'img, #issue' ```<br>
Exclude elements from test, takes a string with comma seperated 
css selectors
    
``` rootElements: '#start' ``` <br>
Testing subsections of page; starts test on element with id (css-selector) 

##Rule scope
````standard: 'wcag2aaa'````<br>
Standard the page should be tested against. Defaults to wcag2aa
.<br>
tags:```wcag2a```,```wcag2aa```,```wcag2aaa```,```section508```


```
ignore:[ 'WCAG2AA.Principle1.Guideline1_2.1_2_5',
         'WCAG2AA.Principle1.Guideline1_3.1_3_1']
```
Array of WCAG 2.0 rules to exclude from the test (f.ex if you know that a rule fails but
will not be fixed at the moment).<br>
A list of all tags can be found in [rules/htmlcs.md](../rules/htmlcs.md) <br>
Details about the rules are available on [pa11y's github wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).
More thorough description are available on [HTML_CodeSniffer's github](http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/)

