import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlayerDataModel } from 'src/types/types';
import { AuthPayloadServiceModel } from 'src/auth/authPayloadDto'

const fakeUsers : PlayerDataModel[] = [
    new PlayerDataModel(1,"Blade", "kenzaki@gmail.com", "password"),
    new PlayerDataModel(2,"Blade", "tachibana@gmail.com", "password"),
    new PlayerDataModel(3,"Chalice", "hajime@gmail.com", "password"),
];

@Injectable()
export class AuthService {



    //Inject JwtService
    constructor(private jwtService : JwtService){

    }

    validateUser({username, password} : AuthPayloadServiceModel)
    {
        console.log("[Validate] User : " + username  + "  Pass : " + password);
        console.log("[Validate] fake user count : " + fakeUsers.length);
        try{
            const findUser = fakeUsers.find((user) => user.username === username)
            console.log(findUser);
            if(!findUser)
            {
                console.log("[validate] No user found")
                return null;
            }
            
            if(findUser.password !== password)
            {
                console.log("[Validate] Incorrect Password")
                return null;
            }
            else
            {
                const { password, ...user} = findUser
                return this.jwtService.sign(user);
            }
        }
        catch (excption){
            throw excption;
        }
        
    }
}
