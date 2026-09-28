import {expect, test} from "../pages/customfixture"
import { getEnvURL } from "../utils/config"
import { ENV } from "../utils/config"

test("Validate Login for Valid credentials", async({page,loginPage,productPage})=>{  
   await page.context().clearCookies()  
   await loginPage.login(ENV.USER_ID,ENV.PASSWORD)
   let status=await productPage.validateProductPage()
   expect(status).toBeTruthy()
   await productPage.logout()
})

test("Validate Login for In-Valid credentials", async({page,loginPage})=>{      
   await page.context().clearCookies()  
   await loginPage.login(ENV.USER_ID,"12334556")
   let errormsg=await loginPage.getErrorMessage()
   expect(errormsg).toContain("Username and password do not match any user")
})