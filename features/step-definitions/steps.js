import { Given, When, Then } from '@wdio/cucumber-framework';

import homePage from '../pageobjects/home.js';
import elementPage from '../pageobjects/element-page.js';



Given(`Im on homepage`, async () => {
    await homePage.open()
    await (await $(`[viewBox='0 0 448 512']`)).scrollIntoView() //scrolling to view
    await browser.pause(2000)
    await homePage.klikElementBtn()
});

When(`Im in element page and started testing button menu`, async () => {
    await elementPage.klickingButton()
    await elementPage.klickingOne()
    await elementPage.clickingTwo()
    await elementPage.doubleClick()
    await browser.pause(5000)
    await (await $(`//div[.='Interactions']`)).scrollIntoView()
    await browser.pause(3000)

});

Then(`I m testing interaction page`, async () => {
    await elementPage.clickingInteraction()
    await elementPage.clickDroppable()
    await (await $(`//div[@class='accordion']//span[@class='group-header']/div[contains(.,'Elements')]`)).scrollIntoView()
    await elementPage.dragAndDrop()
    await browser.pause(3000)
});

