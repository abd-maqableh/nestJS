export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(name: string, description: string, price: number, imageUrl: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;

  constructor(name?: string, description?: string, price?: number, imageUrl?: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
export class ProductResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
  }
}
