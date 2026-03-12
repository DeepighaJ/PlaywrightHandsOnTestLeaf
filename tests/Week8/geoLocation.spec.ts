import {test} from "@playwright/test"

// test.use({
//     geolocation:{
//         latitude: 51.5007292,
//         longitude: -0.1272003
//     },
//     permissions:['geolocation']
// });

test("Launching the application with US location",async({browser})=>{

    const context = await browser.newContext({
        geolocation: {
            latitude: 51.5007292,
            longitude: -0.1272003
        },
        permissions: ['geolocation']
    });
    const page = await context.newPage();
    // await page.goto("https://www.pvrcinemas.com")
    await page.goto("https://www.irctc.co.in/nget/train-search")

    await page.waitForTimeout(5000)

    const location = await page.evaluate(() => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            resolve({
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            });
        });
    });
});

console.log(location);

})

test.skip("Verifying Geolocation from the browser",async({page})=>{
    await page.goto("https://www.google.com/maps")
    const location = await page.evaluate(() => {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve({
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                });
            });
        });
    });

    console.log(location);

})

