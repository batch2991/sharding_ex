import {test as t} from "@playwright/test"
import { LoginPage } from "./LoginPage"
import { getEnvURL } from "../utils/config"
import { ENV } from "../utils/config"
import { ProductPage } from "./ProductsPage"
import { CartPage } from "./CartPage"

type MyFixtures={
  loginPage:LoginPage 
  productPage:ProductPage
  cartPage:CartPage
}

export const test=t.extend<MyFixtures>({
  loginPage: async ({page},use)=>{
       let loginobj=new LoginPage(page)
       await loginobj.openUrl(getEnvURL())       
       await use(loginobj)
       console.log("After the fixture")
  },
  productPage: async({page},use)=>{
    let prodobj=new ProductPage(page)
    await prodobj.openUrl(ENV.productsurl)
    await use(prodobj)
  },
  cartPage:async({page},use)=>{
    let cartobj=new CartPage(page)
    await use(cartobj)
  }

})

export {expect} from "@playwright/test"