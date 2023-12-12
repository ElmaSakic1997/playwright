export class AddProduct {
    constructor(page) {
        this.page = page

        this.articlesButton = page.locator('a.dropdown-toggle:has-text("Articles")').first()
        this.productsButton = page.getByRole('link', { name: 'Products' })
        this.addProductButton = page.locator('button.btn-primary.ts-add-button')
        this.nameField = page.locator('input[name="product[model]"]')
        this.sku = page.locator('ins.iCheck-helper')
        this.classification = page.locator('select[name="product[classification_id]"]')
        this.factories = page.locator('p[title=" Select factories..."]')
        this.factoryChoice = page.locator('label:has-text("APTHA Furniture d.o.o. Sarajevo")')
        this.selectBrand = page.locator('#product_brand_id')
        this.nextButton = page.locator('button:has-text("Next")')

        this.noOfArticles = page.locator('#product_packagings_attributes_0_number_of_pieces')
        this.grossWeight = page.locator('#product_packagings_attributes_0_gross_weight')
        this.netWeight = page.locator('#product_packagings_attributes_0_net_weight')
        this.width = page.locator('#product_packagings_attributes_0_width')
        this.depth = page.locator('#product_packagings_attributes_0_depth')
        this.height = page.locator('#product_packagings_attributes_0_height')

        this.name = page.locator('input[placeholder="Enter name of the part"]')

    }

    articles = async () => {
        await this.articlesButton.waitFor()
        await this.articlesButton.click()
        await this.productsButton.waitFor()
        await this.productsButton.click()
    }

    addNewProduct = async () => {
        await this.addProductButton.waitFor()
        await this.addProductButton.click()
    }

    fillProductInformation = async () => {
        await this.nameField.waitFor()
        await this.nameField.fill("Elma Test Chair")

        await this.sku.waitFor()
        await this.sku.click()

        await this.classification.waitFor()
        await this.classification.click()
        await this.classification.selectOption("20")

        await this.factories.waitFor()
        await this.factories.click()
        await this.factoryChoice.waitFor()
        await this.factoryChoice.click()
        await this.page.mouse.click(0, 0)

        await this.selectBrand.waitFor()
        await this.selectBrand.click()
        await this.selectBrand.selectOption("2")

        await this.nextButton.waitFor()
        await this.nextButton.click()
    }

    fillPackageInfo = async () => {
        await this.noOfArticles.waitFor()
        await this.noOfArticles.fill("2")
        await this.grossWeight.waitFor()
        await this.grossWeight.fill("500")
        await this.netWeight.waitFor()
        await this.netWeight.fill("700")
        await this.width.waitFor()
        await this.width.fill("400")
        await this.depth.waitFor()
        await this.depth.fill("200")
        await this.height.waitFor()
        await this.height.fill("600")

        await this.page.locator('button.btn.btn-submit.js-save-form.ts-save-button').click()

        await this.page.locator('#NXReportButton').click()
    }

    finalInformation = async () => {
        await this.page.locator('div[data-intro="Add article part here."]').click()
        await this.name.fill("Seat")
        await this.page.locator('div.btn.btn-submit.btn-small.js-ad-save-button span:text("Save")').click()
    }

    materialInformation = async () => {
        await this.page.locator('div.level-block-add.js-add-block.js-unsortable').click();
        await this.page.locator('.js-vt-select2.select2-container').click()
        await this.page.locator('li.select2-results__option:text("Glass")').click()
        await this.page.locator('li.select2-results__option:text("Metal")').click()
        await this.page.mouse.click(0, 0)
        await this.page.locator('input[name="influences_price"]').click()
        await this.page.locator('div.btn.btn-submit.btn-small.js-ad-save-select-button span:text("Save")').click()
    }
}