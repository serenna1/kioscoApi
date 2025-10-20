import { Module } from '@nestjs/common';
import { ChequeoController } from './chequeo.controller';
import { ChequeoService } from './chequeo.service';

@Module({
  controllers: [ChequeoController],
  providers: [ChequeoService]
})
export class ChequeoModule {}
