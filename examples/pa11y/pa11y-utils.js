'use strict'

var utils = module.exports = {}
const _ = require('lodash')
utils.rules = require('./htmlcs_rules.js')

utils.getCriteriaRules = function(level,criteria_number){
    var seperate = criteria_number.split('_');
    var principle_key = 'Guideline'+seperate[0]+'_'+seperate[1]
    var criteria = _.filter(utils.rules[level][principle_key], function(o){
        if(o.includes(criteria_number))
            return o
    })
    return criteria
}

utils.getIgnoreRulesForGuideline = function(level,guideline_key){
    var ignore_rules =_.cloneDeep(utils.rules[level])
    delete ignore_rules[guideline_key]
    var flat = _.flattenDeep(_.values(ignore_rules))
    return flat;
}