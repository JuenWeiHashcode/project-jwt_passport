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