exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
    this.cartButton = page.locator('#cartur');
  }

  async addProductToCart(productName) {
    await this.page.getByRole('link', { name: productName }).click();

    const dialogPromise = this.page.waitForEvent('dialog');
    await this.addToCartButton.click();
    const dialog = await dialogPromise;

    const message = dialog.message();
    await dialog.accept();
    return message;
  }

  async gotoCart() {
    await this.cartButton.click();
  }
};