export class SearchDocument {
  private product_name: string;
  private product_id: number;
  private quantity: number;
  private price: number;
  private image_url: string;
  private description: string;
  private brand: string;
  private category: string;

  constructor(
    product_name: string,
    product_id: number,
    quantity: number,
    price: number,
    image_url: string,
    description: string,
    brand: string,
    category: string
  ) {
    this.product_name = product_name;
    this.product_id = product_id;
    this.quantity = quantity;
    this.price = price;
    this.image_url = image_url;
    this.description = description;
    this.brand = brand;
    this.category = category;
  }
}
