import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

@Controller("/api/products")
export class ProductsController {
  private products: Product[] = [
    {
      id: 1,
      name: "Sample Product",
      description: "This is a sample product description.",
      price: 19.99,
      imageUrl: "https://example.com/sample-product.jpg",
    },
    {
      id: 2,
      name: "Another Product",
      description: "This is another product description.",
      price: 29.99,
      imageUrl: "https://example.com/another-product.jpg",
    },
  ];

  @Post()
  public createProduct(@Body() product: CreateProductDto) {
    // This method would typically handle the creation of a new product
    console.log("Creating product:", product);
    this.products.push({
      ...product,
      id: this.products.length + 1, // Simple ID generation
    });
    return {
      ...product,
      id: this.products.length + 1, // Simple ID generation
    };
  }

  @Get()
  public getProducts() {
    // This method would typically return a list of products
    return this.products;
  }

  @Get(":id")
  public getProductById(@Param("id") id: string) {
    console.log("Fetching product with ID:", id);
    // This method would typically return a single product by ID
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`, {
        description: `No product found with ID ${id}`,
      });
    }
    return product;
  }

  @Put(":id")
  public updateProduct(@Param("id") id: string, @Body() product: CreateProductDto) {
    console.log("Updating product with ID:", id, "to", product);
    // This method would typically handle the update of an existing product
    const index = this.products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`, {
        description: `No product found with ID ${id}`,
      });
    }
    this.products[index] = { ...this.products[index], ...product };
    return this.products[index];
  }
  @Delete(":id")
  public deleteProduct(@Param("id") id: string) {
    console.log("Deleting product with ID:", id);
    // This method would typically handle the deletion of a product
    const index = this.products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`, {
        description: `No product found with ID ${id}`,
      });
    }
    const deletedProduct = this.products.splice(index, 1);
    return deletedProduct[0];
  }
}
