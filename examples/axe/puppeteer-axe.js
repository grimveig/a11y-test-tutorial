/**
axe-core example with puppeteer
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
			// Run axe
			axe.run()
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
		console.log(results.violations.length);
	})
	.catch(err => {
		console.error('Error running axe-core:', err.message);
		process.exit(1);
	});