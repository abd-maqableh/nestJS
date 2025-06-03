import { Controller, Get } from "@nestjs/common";

@Controller("/api/users")
export class UsersController {
  // This controller can be extended with methods to handle user-related requests
  // For example, you can add methods for creating, updating, deleting, and retrieving users
  // Each method can use decorators like @Get(), @Post(), @Put(), @Delete() to define the HTTP methods
  @Get()
  public getAllUsers() {
    return [
      {
        id: "1",
        name: "John Doe",
        email: "john@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: false,
      },
    ];
  }
}
