exports.CartPage = class CartPage{

  constructor(page){
    this.page = page;
    this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'
  }
  getProductInCart(productName){
  return this.page.locator(this.noOfProducts).filter({hasText:productName}).first()





  }


}