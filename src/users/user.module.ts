import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  // providers: [], // Uncomment and add providers if needed
  // imports: [], // Uncomment and add imports if needed
})
export class UsersModule {
  // This module can be extended with controllers, providers, and imports as needed
}
