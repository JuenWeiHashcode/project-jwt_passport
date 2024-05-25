import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PlayerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, nextFunction: () => void) {
    console.log("Middleware awake!");

    const authorizationHeader = req.headers['authorization']
    
    if(!authorizationHeader || authorizationHeader !== "SAMPLEAUTHTOKEN")
      throw new HttpException('Missing AUTH Token', HttpStatus.FORBIDDEN);

    nextFunction();
  }
}
