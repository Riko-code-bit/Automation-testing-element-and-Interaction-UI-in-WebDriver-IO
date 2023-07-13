

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    /**
     * define selectors using getter methods
     */
    get elementButton () {
        return $(`//div[@class='category-cards']/div[@class='card mt-4 top-card']/div[1]/div[.='Elements']`);
    }

    
    open () {
        return super.open();
    }

    async klikElementBtn() {
        await this.elementButton.click();
    }
}

export default new homePage();
