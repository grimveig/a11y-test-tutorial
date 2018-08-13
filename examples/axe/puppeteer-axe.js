/**
axe-core example with puppeteer
based on the puppeteer example found on axe-cores github:
https://github.com/dequelabs/axe-core/blob/develop/doc/examples/puppeteer/axe-puppeteer.js
**/

const puppeteer = require('puppeteer');
const axeCore = require('axe-core');

const main = async url => {
	let browser;
	let results;
	try {
		// Setup Puppeteer
		browser = await puppeteer.launch();

		// Get new page
		const page = await browser.newPage();
		await page.goto("http://localhost:3000/index.html");


		// Inject and run axe-core
		const handle = await page.evaluateHandle(`
			// Inject axe source code
			${axeCore.source}

            // run rules related to wcag2a and wcag2aa only
			const config_array = {
                             runOnly: {
                                      type: "tag",
                                      values: ["wcag2a","wcag2aa"]
                                       }
                                }

			// Run axe
			axe.run(config_array)
		`);

		// Get the results from `axe.run()`.
		results = await handle.jsonValue();
		// Destroy the handle & return axe results.
		await handle.dispose();
	} catch (err) {
		// Ensure we close the puppeteer connection when possible
		if (browser) {
			await browser.close();
		}

		// Re-throw
		throw err;
	}

	await browser.close();
	return results;
};

main("http://localhost:3000/index.html")
	.then(results => {
		console.log("number of violations for wcag2 level A & AA:", results.violations.length);
	})
	.catch(err => {
		console.error('Error running axe-core:', err.message);
		process.exit(1);
	});