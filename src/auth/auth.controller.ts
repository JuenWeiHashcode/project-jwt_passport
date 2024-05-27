import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadServiceModel } from './authPayloadDto';

@Controller('auth')
export class AuthController {

    //Inject AuthService
    constructor(private authService : AuthService)
    {

    }

    @Post('login')
    public login(@Body() authPayloadDto : AuthPayloadServiceModel)
    {
        console.log("[Validate] Entered Login")
        const returnUser = this.authService.validateUser(authPayloadDto);
        if(!returnUser)
            {
                throw new HttpException('Invalid Credentials' , HttpStatus.UNAUTHORIZED) //401
            }
        console.log("Sucessfully Login");
        return returnUser;
    }
}
