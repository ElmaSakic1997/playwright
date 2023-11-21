export class CustomerOrders {
    constructor(page) {
        this.page = page

        this.productsInfo = [
          { group: "Bar Table", name: "Leina bar table", quntity:10, options: [ { group: "", name: ""}, { group: "", name: ""}] },
          { group: "Accessory", name: "Tica - 1E3" },
          { group: "Bar Chair", name: "Leina bar chair - 095" },
          { group: "Bench", name: "Ava bench - veneer seat - 1C9" },
          { group: "Bed", name: "Ena bed 160 x 200 - 0B2" },
        ]

        this.productsInfo = [
          { group: "Bar Table", name: "Leina bar table" },
          { group: "Accessory", name: "Tica - 1E3" },
          { group: "Bar Chair", name: "Leina bar chair - 095" },
          { group: "Bench", name: "Ava bench - veneer seat - 1C9" },
          { group: "Bed", name: "Ena bed 160 x 200 - 0B2" },
        ]

        this.products = [
            {
                name: "Bar Table",
                dropdownLocator: page.locator('strong.select2-results__group:has-text("Bar table")'),
                actionLocator: page.locator('.select2-results__option .title:has-text("Leina bar table")')
            },
            {
                name: "Accessory",
                dropdownLocator: page.locator('strong.select2-results__group:has-text("Accessory")'),
                actionLocator: page.locator('span.title:has-text("Tica - 1E3")')
            },
            {
                name: "Bar Chair",
                dropdownLocator: page.locator('strong.select2-results__group:has-text("Bar chair")'),
                actionLocator: page.locator('span.title:has-text("Leina bar chair - 095")')
            },
            {
                name: "Bench",
                dropdownLocator: page.locator('strong.select2-results__group:has-text("Bench")'),
                actionLocator: page.locator('span.pl-item-text:has-text("Ava bench - veneer seat - 1C9")')
            },
            {
                name: "Bed",
                dropdownLocator: page.locator('strong.select2-results__group:text-is("Bed")'),
                actionLocator: page.locator('li.select2-results__option[role="treeitem"]:has-text("Ena bed 160 x 200 - 0B2")')
            }
        ]

        this.generateButton = page.locator('.js-generate-order-number')
        this.commissionField = page.getByLabel('* Commission')
        this.addItemButton = page.locator('.js-add-coi-item')
        this.quantity = page.locator('input[type="number"].js-quantity')

    }

    generateOrderNumber = async () => {
        await this.generateButton.waitFor()
        await this.generateButton.click()
    }

    fillCommission = async () => {
        await this.commissionField.waitFor()
        await this.commissionField.fill("Elma")
    }

    addItem = async () => {
        await this.addItemButton.waitFor()
        await this.addItemButton.click()
    }


    // findProductByName = (productName) => {
    //     return this.products.find(product => product.name === productName)
    // }

    // selectProductFromDropdown = async (productName) => {
    //     const product = this.findProductByName(productName)
    //     if(product) {
    //         await product.dropdownLocator.click()
    //     }
    // }

    // performActionOnProduct = async (productName) => {
    //     const product = this.findProductByName(productName)
    //     if(product) {
    //         await product.actionLocator.click()
    //     }
    // }

    selectItemV2 = async () => {
      this.productsInfo.forEach(async (product) => {
        await this.page.click(`.select2-results__group:text(${product.name})`)
        await this.page.click('.select2-results__option:has-text("Leina bar table 70 x 70 - 097")')
        await this.page.click('text=Select Option')
        await this.page.click('//strong[contains(@class, "select2-results__group") and contains(text(), "Oiled oak")]')
        await this.page.click('.select2-results__option:text("Oiled oak / White 1015")')
        await this.page.click('.select2-selection__placeholder')
        await this.page.click('css=.select2-results__option:has-text("Powder coated steel")')
        await this.page.click('.select2-results__option:text("Powder coated steel / Black matte 9005")')
        const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
        await this.page.fill('input[type="number"].js-quantity', quantity.toString())
        await this.page.click('text="Add item"')
        await this.addItemButton.click()
      });
    }

    selectItem = async () => {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === "Bar Table"){
                await this.page.click('.select2-results__group:text("Bar table")')
                await this.page.click('.select2-results__option:has-text("Leina bar table 70 x 70 - 097")')
                await this.page.click('text=Select Option')
                await this.page.click('//strong[contains(@class, "select2-results__group") and contains(text(), "Oiled oak")]')
                await this.page.click('.select2-results__option:text("Oiled oak / White 1015")')
                await this.page.click('.select2-selection__placeholder')
                await this.page.click('css=.select2-results__option:has-text("Powder coated steel")')
                await this.page.click('.select2-results__option:text("Powder coated steel / Black matte 9005")')
                const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
                await this.page.fill('input[type="number"].js-quantity', quantity.toString())
                await this.page.click('text="Add item"')
                await this.addItemButton.click()
            } else if (this.products[i].name === "Accessory") {
                await this.page.click('css=.select2-results__group >> text="Accessory"')
                await this.page.click('.pl-item-text:has-text("Tica")')
                await this.page.click('.select2-selection__rendered:has(.select2-selection__placeholder)')
                await this.page.click('.select2-results__group:has-text("American walnut")')
                await this.page.click('.select2-results__option:has-text("American walnut / Natural oil 1505")')
                const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
                await this.page.fill('input[type="number"].js-quantity', quantity.toString())
                await this.page.click('text="Add item"')
                await this.addItemButton.click()
            } else if (this.products[i].name === "Bar Chair") {
                await this.page.click('.select2-results__group:has-text("Bar chair")')
                await this.page.click('span.title:has-text("Leina bar chair - 095")')
                await this.page.click('.select2-selection__rendered:has-text("Select Option")')
                await this.page.click('.select2-results__group:text("Oiled oak")')
                await this.page.click('.select2-results__option:text("Oiled oak / White 1015")')
                await this.page.click('.select2-selection__rendered:has-text("Select Option")')
                await this.page.click('//strong[contains(@class, "select2-results__group") and contains(text(), "Powder coated steel")]')
                await this.page.click('li[role="treeitem"]:has-text("Powder coated steel / Black matte 9005")')
                const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
                await this.page.fill('input[type="number"].js-quantity', quantity.toString())
                await this.page.click('text="Add item"')
                await this.addItemButton.click()
            } else if (this.products[i].name === "Bench") {
                await this.page.click('strong.select2-results__group:has-text("Bench")')
                await this.page.click('span.pl-item-text:has-text("Ava bench - veneer seat - 1C9")')
                await this.page.click('.select2-selection__rendered:has-text("Select Option")')
                await this.page.click('.select2-results__group:has-text("Oiled oak")')
                await this.page.click('.select2-results__option:has-text("Oiled oak / White 1015")')
                const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
                await this.page.fill('input[type="number"].js-quantity', quantity.toString())
                await this.page.click('text="Add item"')
                await this.addItemButton.click()
            } else {
                await this.page.click('strong.select2-results__group:text-is("Bed")')
                await this.page.click('li.select2-results__option[role="treeitem"]:has-text("Ena bed 160 x 200 - 0B2")')
                await this.page.click('.select2-selection__rendered:has-text("Select Option")')
                await this.page.click('.select2-results__group:has-text("Oiled oak")')
                await this.page.click('.select2-results__option:has-text("Oiled oak / White 1015")')
                const quantity = Math.floor(Math.random() * (100 - 5 + 1) + 5)
                await this.page.fill('input[type="number"].js-quantity', quantity.toString())
                await this.page.click('text="Add item"')
            }
        }
    }
}
