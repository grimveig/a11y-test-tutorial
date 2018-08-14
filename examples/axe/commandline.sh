#!/usr/bin/env bash
npm install -g axe-cli

#Run an audit on the content of <body> only
axe http://localhost:3000/index.html --include body

#Run an audit on hyperlinks only
axe http://localhost:3000/index.html --include a

#Run an audit on the content of <body>, and exclude the element with id lost_cause
axe http://localhost:3000/index.html --include body --exclude '#lost_cause'


#Rule scope

#Run an audit on rules that is related to WCAG level A
axe http://localhost:3000/index.html --tags wcag2a

#Run an audit on rules that is related to WCAG level A & AA
axe http://localhost:3000/index.html --tags wcag2a,wcag2aa

#Run an audit on the color-contrast rule
axe http://localhost:3000/index.html --rules color-contrast

#Run an audit on color-contrast and html-has-lang rule, and exit with statuscode
axe http://localhost:3000/index.html --rules color-contrast,html-has-lang

#Output
#Exit with statuscode
axe http://localhost:3000/index.html --exit