import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  // Req,
  // Res,
  Headers,
  ParseIntPipe,
  NotAcceptableException,
  ValidationPipe,
} from "@nestjs/common";
// import { Request, Response } from "express";
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
  public createProduct(@Body(new ValidationPipe()) product: CreateProductDto) {
    const newProduct = {
      ...product,
      id: this.products.length + 1, // Simple ID generation
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // @Post("express-way")
  // public createProductExpressWay(
  //   @Req() req: Request,
  //   @Res({
  //     passthrough: true, // Allows us to modify the response object
  //   })
  //   res: Response,
  // ) {
  //   console.log("Creating product using Express way:", req.body);
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   const product: CreateProductDto = req.body;
  //   const newProduct: Product = {
  //     ...product,
  //     id: this.products.length + 1, // Simple ID generation
  //   };
  //   this.products.push(newProduct);
  //   res.status(201).json(newProduct);
  //   // console.log("response body:", res);

  //   // set Cookie
  //   res.cookie("sessionId", "123456789");
  //   res.cookie("authToken", "abcdefg12345", {
  //     httpOnly: true,
  //     maxAge: 3600000, // 1 hour
  //     secure: true, // Set to true if using HTTPS
  //     sameSite: "strict", // Adjust as needed
  //   });
  //   // res.cookie('sessionId', '123456789', { httpOnly: true, secure: true, sameSite: 'Strict' });
  // }

  @Get()
  public getProducts() {
    // This method would typically return a list of products
    return this.products;
  }

  @Get(":id")
  public getProductById(
    @Param(
      "id",
      new ParseIntPipe({
        exceptionFactory: (error: string) =>
          new NotAcceptableException(`Invalid product ID: ${error}`),
      }),
    )
    id: number,
  ) {
    console.log("Fetching product with ID:", id);
    // This method would typically return a single product by ID
    const product = this.products.find((p) => p.id === id);
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
