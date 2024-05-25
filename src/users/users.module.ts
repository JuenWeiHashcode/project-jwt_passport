import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
    //Hardcode route : "forRoutes('player');"
    //Use controller route : "forRoutes([Controller]]);"
    //Limited HTTP TYpe : forRoutes({
    //   path : "player",
    //   method : RequestMethod.GET
    // });
    consumer.apply(PlayerMiddleware).forRoutes({
      path : "player",
      method : RequestMethod.GET
    });
  }
}
