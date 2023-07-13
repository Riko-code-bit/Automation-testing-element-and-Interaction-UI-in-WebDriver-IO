

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class elementPage extends Page {
    /**
     * define selectors using getter methods
     */
    get klikButtonBtn () {
        return $(`//span[.='Buttons']`);
    }

    async klickingButton() {
        await this.klikButtonBtn.click()
    }

    get oneKlikButton() {
        return $(`//button[text()='Click Me']`)
    }

    async klickingOne () {
        await this.oneKlikButton.click()
        await browser.pause(2000)
    }

    get klickTwo() {
        return $(`//button[text()='Right Click Me']`)
    }

    async clickingTwo() {
        await this.klickTwo.click({ button:'right'})
        await browser.pause(2000)

    }

    get klickThree() { 
        return $(`//button[text()='Double Click Me']`)
    }

    async doubleClick () {
        await this.klickThree.doubleClick()
        await browser.pause(2000)

    }

    get clickInteraction() {
        return $(`//div[.='Interactions']`)
    }

    async clickingInteraction() {
        await this.clickInteraction.click()
    }

    get Droppable() {
        return $(`.show.element-list li:nth-of-type(4)`)
    }

    async clickDroppable() {
        await this.Droppable.click()
    }

    get draggable() {
        return $(`#draggable`)
    }

    get droppable() {
        return $(`#droppable`)
    }

    async dragAndDrop () {
        const drag = await this.draggable
        const drop = await this.droppable

        drag.dragAndDrop(drop)
    }
}
export default new elementPage();
