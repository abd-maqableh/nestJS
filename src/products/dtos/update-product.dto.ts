import { IsString, IsNumber, IsNotEmpty, Min, MinLength, IsOptional } from "class-validator";

export class UpdateProductDto {
  @MinLength(1, {
    message: "Name must be at least 1 character long" + " and cannot be empty.",
    context: {
      errorCode: "INVALID_NAME_MIN_LENGTH",
    },
  })
  @IsString({
    message: "Name must be a string" + " and cannot be empty.",
    context: {
      errorCode: "INVALID_NAME_TYPE",
    },
  })
  @IsNotEmpty()
  @IsOptional()
  name?: string;
  @IsOptional()
  description?: string;
  @Min(0, {
    message: "Price must be a positive number" + " and cannot be empty.",
    context: {
      errorCode: "INVALID_PRICE_MIN",
    },
  })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    {
      message: "Price must be a number" + " and cannot be empty.",
      context: {
        errorCode: "INVALID_PRICE_TYPE",
      },
    },
  )
  @IsNotEmpty()
  @IsOptional()
  price?: number;
  @IsOptional()
  imageUrl?: string;

  constructor(name?: string, description?: string, price?: number, imageUrl?: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
