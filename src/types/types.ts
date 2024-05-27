export class CreatePlayerDataModel{
    uid : number
    name : string
    email : string
    age : number

    constructor(uid : number, name : string ,email : string, age : number)
    {
        this.uid = uid
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

export class PlayerDataModel{
    uid : number
    username : string
    email : string
    password : string

    constructor(uid : number, username : string , email : string ,password : string)
    {
        this.uid = uid
        this.username = username;
        this.email  = email;
        this.password = password;
    }
}