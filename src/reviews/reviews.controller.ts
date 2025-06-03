import { Controller, Get } from "@nestjs/common";

@Controller("/api/reviews")
export class ReviewsController {
  // This controller can be extended with methods to handle HTTP requests
  // For example, you can add methods for creating, updating, deleting, and retrieving reviews
  // Each method can use decorators like @Get(), @Post(), @Put(), @Delete() to define the HTTP routes

  @Get()
  public getAllReviews() {
    return [
      {
        id: "1",
        productId: "101",
        userId: "501",
        rating: 5,
        comment: "Excellent product!",
        createdAt: new Date(),
      },
      {
        id: "2",
        productId: "102",
        userId: "502",
        rating: 4,
        comment: "Very good, but could be improved.",
        createdAt: new Date(),
      },
    ];
  }
}
