const puppeteer = require('puppeteer');
// const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
	  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	  userDataDir:'	/Users/meixianming/Library/Application Support/Google/Chrome/Profile 1',
	  headless:false,
	  defaultViewport:{
			width: 1366,
			height:768
	  }
	});
  const page = await browser.newPage();
		await page.goto('https://www.hbg.com/zh-cn/login/');
	// await page.goto("http://152.136.95.92/website/");
		await page.evaluate(() => {
			// 修改navigator.webdriver,绕过反爬虫机制。
			Object.defineProperty(navigator,'webdriver',{
				get: ()=>false
			})
		});
		await page.type("input[name='login_name']","373948204@qq.com");
		await page.type("input[name='password']","28S348l7dYtyGi8");
			// await page.mouse.move(644,74);
		await page.tap(".submit button");
		// .btn_slide
		// await page.waitForSelector('.btn_slide');
		// const el = await page.$(".nav_project");
		await page.waitFor(3000);
		const el = await page.$(".btn_slide");
		const box = await el.boundingBox();
		const x = box.x + (box.width/2);
		const y = box.y + (box.height/2);
		await page.mouse.move(x,y);
		await page.mouse.down();
		await page.mouse.move(x+200,y,{steps:1000});
		await page.mouse.up();
		// await page.waitFor(10000);
		// await page.close();
		// await browser.close();
})();