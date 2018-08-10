'use strict'
/**
Tests with pa11ys javascript interface
Note: this example requires a running server.
**/

const pa11y = require('pa11y')
const _ = require('lodash')
const utils = require('./pa11y-utils.js')
const test_url = "http://localhost:3000/index.html"
const options_default = {standard: 'WCAG2AA'}


runAudit()

function runAudit(){
    auditWholePage()
    auditSectionOfPage()
    auditWithExcludedRule()
    auditOnSingleGuideline()
    auditOnExtendedRuleset()
}

/*
    Runs default accessibility tests on a page with default configs
    for conformance level AA in WCAG 2.0
*/
function auditWholePage() {
    try {
        pa11y(test_url, options_default).then((results) => {

        console.log("Issues detected on page with standard config: " , results.issues.length)
    })} catch(error){
        console.log(error.message)
    }
}


/*
  Accessibility audit starts at the element matching the id specified in
  extended_options.rootElement
*/
function auditSectionOfPage() {
    var extended_options = _.cloneDeep(options_default)
    extended_options.rootElement = "#lost_cause" //id of rootelement for testing
    try{
        pa11y(test_url, extended_options).then((results) => {
            console.log("Issues detected on page section starting at #lost_cause:",results.issues.length)
        })
    } catch(error) {
        console.log(error.message)
    }
}

/*
  Exclude HTML CodeSniffer rule from the audit (see https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules)
  NB, format: [Standard].[Principle].[Guideline WCAG2AA].[criteria-id].[rule-id]
*/
function auditWithExcludedRule() {
    var extended_options = _.cloneDeep(options_default)
        extended_options.ignore = ['WCAG2AA.Principle1.Guideline1_1.1_1_1.H37'];
    try {
        pa11y(test_url, extended_options).then((results) => {
        console.log("Issues detected when excluding rule 1_1_1.H37:", results.issues.length)
    })} catch(error){
        console.log(error.message)
    }
}

function auditOnSingleGuideline(){
    var extended_options = _.cloneDeep(options_default)
        extended_options.ignore = utils.getIgnoreRulesForGuideline('AA', 'Guideline1_1');
       try{
        pa11y(test_url, extended_options).then((results) => {
           console.log("Issues detected concerning Guideline 1.1 non-text content: ",results.issues.length)

        })
    } catch(error) {
        console.log(error.message)
    }
}

/*
  Add rules for extra criterias from WCAG
  NB, format: [Principle].[Guideline].[criteria-id]
*/
function auditOnExtendedRuleset(){
    var extended_options = _.cloneDeep(options_default)
        //Add rules for enchanced contrast criteria (levelAAA)
        extended_options.rules = ['Principle1.Guideline1_4.1_4_6']
       try{
        pa11y(test_url, extended_options).then((results) => {
           console.log("Issues detected with extended ruleset:" + results.issues.length)

        })
    } catch(error) {
        console.log(error.message)
    }
}

