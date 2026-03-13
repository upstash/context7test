/**
 * Product management service
 */
export class ProductService {
  /**
   * Creates a new product
   * @param name Product name
   * @param price Product price
   * @returns The created product
   */
  async createProduct(name: string, price: number): Promise<Product> {
    return {
      id: Math.random().toString(36),
      name,
      price,
      stock: 0,
    };
  }

  /**
   * Updates product stock
   * @param id Product ID
   * @param quantity New stock quantity
   */
  async updateStock(id: string, quantity: number): Promise<void> {
    // Implementation
  }

  /**
   * Lists all products
   * @returns Array of products
   */
  async listProducts(): Promise<Product[]> {
    return [];
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}
