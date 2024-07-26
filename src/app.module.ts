import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsController } from './cat.controller';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
