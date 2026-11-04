import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { HomePage } from '../Pages/homePage';
import { CartPage } from '../Pages/cartPage';

test ('User can login and add product to cart', async({page}) => {

    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(process.env.DEMO_USERNAME,process.env.DEMO_PASSWORD);

    await expect(page.locator(login.welcomeText)).toContainText('Welcome HHimi');

    //home page

    const home = new HomePage(page);
    const message = await home.addProductToCart('Sony vaio i5');
    expect(message).toContain('Product added');
    await home.gotoCart();


    //cart
    const cart = new CartPage(page)
    await expect(cart.getProductInCart('Sony vaio i5')).toBeVisible();


})