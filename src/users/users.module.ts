import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PlayerController } from './controllers/player/player.controller';
import { GuestController } from './controllers/guest/guest.controller';
import { PlayerService } from './services/player/player.service';
import { PlayerMiddleware } from './middlewares/player/player.middleware';

@Module({
  controllers: [PlayerController, GuestController],
  providers: [PlayerService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PlayerMiddleware).forRoutes('users')
  }
}
