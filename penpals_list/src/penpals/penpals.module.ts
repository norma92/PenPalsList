import { Module } from '@nestjs/common';
import { PenpalsController } from './controllers/penpals/penpals.controller';
import { PenpalsService } from './services/penpals/penpals.service';

@Module({
  controllers: [PenpalsController],
  providers: [PenpalsService]
})
export class PenpalsModule {}
