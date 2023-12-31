import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupaMod } from './supabase/SupaMod';
import { ChatModule } from './chat/chat.module';
import { ListingsModule } from './listings/listings.module';
import { ChatGateway } from './chat.gateway';
import { HealthModule } from './health/health.module';

@Module({
  imports: [SupaMod,ChatModule,ListingsModule, HealthModule],
  controllers: [AppController],
  providers: [AppService,ChatGateway],
})
export class AppModule {}
