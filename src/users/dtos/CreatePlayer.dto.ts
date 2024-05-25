import { IsEmail, IsNotEmpty } from "class-validator"

export class CreatePlayerServiceModel
{
    //Something like [Required] class attribute
    @IsNotEmpty()
    playerName : string

    @IsEmail()@IsNotEmpty()
    email : string

    @IsNotEmpty()
    age : number

    constructor(playerName : string , email : string, age : number)
    {
        this.playerName = playerName;
        this.email = email;
        this.age = age;
    }
}