import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { loginDetails } from "../data/loginDetails"
import { HomePage } from "../page-objects/HomePage"
import { CustomerOrders } from "../page-objects/CustomerOrders"
import { Delivery } from "../page-objects/Delivery"
import { AddProduct } from "../page-objects/AddProduct"

test.only("Vorta test", async ({ page }) => {
    console.log("Start of the test")
    const loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.fillLoginDetails(loginDetails)

    const homePage = new HomePage(page)
    await homePage.goToOrdersCustomer()
    await homePage.addCustomerOrder()
    await homePage.newCustomerOrder()

    const customerOrder = new CustomerOrders(page)
    await customerOrder.generateOrderNumber()
    await customerOrder.fillCommission()
    await customerOrder.addItem()
    // await customerOrder.selectItemV2()
    // await customerOrder.addItem()
    // await customerOrder.selectItem()

    // customerOrder.findProductByName("Bar Table")
    // await customerOrder.selectProductFromDropdown("Bar Table")
    // await customerOrder.performActionOnProduct("Bar Table")

    const delivery = new Delivery(page)
    await delivery.deliveryDetails()

    // await page.locator('.ts-save-button').click()
    // await page.locator('.btn.btn-submit.js-save-chain-warning').click();

    const addProduct = new AddProduct(page)
    await addProduct.articles()
    await addProduct.addNewProduct()

    await addProduct.fillProductInformation()
    await addProduct.fillPackageInfo()
    await addProduct.finalInformation()
    await addProduct.materialInformation()

    await page.pause()

    console.log("End of the test")


})
