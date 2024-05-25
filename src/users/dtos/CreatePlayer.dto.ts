import { IsEmail, IsNotEmpty } from "class-validator"

export class CreatePlayerServiceModel
{
    //Something like [Required] class attribute
    @IsNotEmpty()
    playerName : string

    @IsEmail()@IsNotEmpty()
    email : string

    constructor(playerName : string , email : string)
    {
        this.playerName = playerName;
        this.email = email;
    }
}