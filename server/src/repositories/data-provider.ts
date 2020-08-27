import Product from "../models/product";

export default function getData() {
  const product1 = new Product("PL123456", "name", "dose", "substance", "url");
  const product2 = new Product("PL513872", "name", "dose", "substance", "url");
  const product3 = new Product("PL999999", "name", "dose", "substance", "url");
  const product4 = new Product("PL654321", "name", "dose", "substance", "url");
  const product5 = new Product("PL818181", "name", "dose", "substance", "url");
  const product6 = new Product(
    "PL001730050",
    "Ibugel gel",
    "10mg",
    "Ibuprofen",
    "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca"
  );
  const product7 = new Product(
    "PL001655013",
    "Anadin Extra",
    "5mg",
    "Paracetamol",
    "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970"
  );
  const product8 = new Product(
    "PL136060206",
    "Tadalafil film-coated tablets",
    "10mg",
    "Tadafil",
    "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077"
  );
  const product9 = new Product(
    "PL252980158",
    "Nabilone capsules",
    "1mg",
    "Nabilone",
    "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4"
  );
  const product10 = new Product(
    "PL201170079",
    "Ramipril tablets",
    "2.5mg",
    "Ramipril",
    "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039"
  );
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
  ];

  let productObjects = {};
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productObjects[product.plNumber] = product;
  }

  return productObjects;
}
