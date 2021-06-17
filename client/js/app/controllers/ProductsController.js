class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message'
    );

    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView($('#productsView')),
      'add'
    );

    this.allProducts();
  }

  allProducts() {
    let service = new ProductService();

    service
      .allProducts()
      .then((products) => {
        products.forEach((product) => {
          this._productsList.add(product);
        });
      })

      .catch((err) => {
        this._alert.message = err;
      });
  }

  search(event) {
    let input = event.target.value;
    const list = this._productsList;

    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView(document.querySelector('#productsView')),
      'add'
    );

    if (event.target.value === '') {
      return this.allProducts();
    }

    this._filteredList(list, input);
  }

  _filteredList(list, input) {
    list.products.forEach((product) => {
      if (this._contains(product.description, input)) {
        this._productsList.add(product);
      }
    });
  }

  _upper(string) {
    return string.toUpperCase();
  }

  _contains(description, value) {
    return this._upper(description).includes(this._upper(value));
  }
}
