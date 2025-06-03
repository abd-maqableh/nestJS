import { Module } from "@nestjs/common";
import { ReviewsController } from "./reviews.controller";

@Module({
  controllers: [ReviewsController],
  // providers: [], // Uncomment and add providers if needed
  // imports: [], // Uncomment and add imports if needed
})
export class ReviewsModule {
  // This module can be extended with controllers, providers, and imports as needed
}
