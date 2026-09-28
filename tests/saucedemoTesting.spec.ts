import {expect, test} from "../pages/customfixture"
import { takescreenshot } from "../utils/config"


test("Validate No of products in the ProductsPage",{tag:"@smoke"}, async({productPage})=>{   
   let status=await productPage.validateProductPage()
   expect(status).toBeTruthy()
   let count=await productPage.getProductsCount()
   expect(count).toBe(4)
})
test("Validate the sorting of products", {tag:'@regression'},async ({page, productPage },testInfo) => { 
   let status = await productPage.validateProductPage()  
   expect(status).toBeTruthy()
   await productPage.sortProducts("lohi")
   await takescreenshot(page,testInfo,"After sorting products")
   let prices = await productPage.getPrices()
   let price2=prices
   prices.sort((a,b)=>a-b)
   expect(price2).toEqual(prices)
})
test("Verify to add any 2 products to cart",{tag:'@smoke'}, async ({page,productPage,cartPage },testInfo) => { 
   let status = await productPage.validateProductPage()
   expect(status).toBeTruthy()
   let names1 = await productPage.addProductsToCart()
   await productPage.goToCart()
   await takescreenshot(page,testInfo,"After Adding products to cart")
   let names2 = await cartPage.getProductsInCart()
   console.log(names1)
   console.log(names2)
   expect(names1.sort()).toEqual(names2.sort())

})
// test("Verify to remove 1 product in the cart",{tag:'@regression'}, async ({productPage,cartPage }) => {   
//    let status = await productPage.validateProductPage()
//    expect(status).toBeTruthy()
//    let names1 = await productPage.addProductsToCart()
//    await productPage.goToCart()
//    let names2 = await cartPage.getProductsInCart()
//    expect(names1.length).toBe(names2.length)

//    await cartPage.removeProductFromCart()
//    let names3 = await cartPage.getProductsInCart()
//    expect(names3.length).toBe(names2.length - 1)
// })