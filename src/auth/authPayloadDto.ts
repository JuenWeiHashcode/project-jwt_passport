//DTO ACT LIKE SERVICE MODEL
export class AuthPayloadServiceModel
{
    username : string;
    password : string;

    constructor(username : string , password : string)
    {
        this.username = username;
        this.password = password;
    }
}