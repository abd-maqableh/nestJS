import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";

@Module({
  controllers: [ProductsController],
  // providers: [], // Uncomment and add providers if needed
  // imports: [], // Uncomment and add imports if needed
})
export class ProductsModule {
  // This module can be extended with controllers, providers, and imports as needed
}
