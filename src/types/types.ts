export class CreatePlayerDataModel{
    uid : number
    name : string
    email : string

    constructor(uid : number, name : string ,email : string)
    {
        this.uid = uid
        this.name = name;
        this.email = email;
    }
}