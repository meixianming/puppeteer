const puppeteer = require('puppeteer');
(async () => {
	let browser = await puppeteer.launch({headless: false});
	let page = await browser.newPage();
	let response = await page.goto("https://www.baidu.com/");
	await page.waitFor(1000);
	let element  = await page.$("#u1 > a.bri");
	let box = await element.boundingBox();
	const x = box.x + (box.width/2);
	const y = box.y + (box.height/2);
	await page.mouse.move(x,y);
	await page.waitFor(10000);
	await page.close();
	await browser.close();
}
)();