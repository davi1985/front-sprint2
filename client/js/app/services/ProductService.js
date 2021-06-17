class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http.get('http://localhost:3000/products').then((products) => {
      return products.map(
        (product) =>
          new Product(product.image, product.description, product.price)
      );
    });
  }
}
