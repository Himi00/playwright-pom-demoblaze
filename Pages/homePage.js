exports.HomePage = class HomePage {


constructor(page)
    {
        this.page = page;
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartButton = "//a[normalize-space()='Add to cart']"
        this.cartButton = "[href='cart.html']"

    }


async addProductToCart(productName)
{
    const productList = await this.page.$$(this.productList);
    for (const product of productList)
    {
        if (productName === await product.textContent())
        {
            await product.click();
            break;
        }
    }
   const dialogPromise = this.page.waitForEvent('dialog');
   await this.page.locator(this.addToCartButton).click();
   const dialog = await dialogPromise;
    console.log(dialog.message());
    await dialog.accept();
}
  async gotoCart()
  {
    await this.page.locator(this.cartButton).click();
  } 









}
