import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { emitWarning } from 'process';
import { CreatePlayerDataModel } from 'src/types/types';
import { CreatePlayerServiceModel } from 'src/users/dtos/CreatePlayer.dto';

@Injectable()
export class PlayerService {
    private fakeUsers : CreatePlayerDataModel[] = [{
        uid : 1,
        name : "OMO",
        email : "tachibanaSan@gmail.com",
        age : 34
    },{
        uid : 2,
        name : "Blade",
        email : "kenzaki@gmail.com",
        age : 25
    }]


    getAllPlayer()
    {
        return this.fakeUsers;
    }

    createPlayer(newPlayerData : CreatePlayerServiceModel)
    {
        this.fakeUsers.push(new CreatePlayerDataModel(randomInt(100), newPlayerData.playerName , newPlayerData.email, newPlayerData.age))
        return "Sucessfully ADDED"
    }

    getPlayerById(id : number)
    {
        const searchUser = this.fakeUsers.find(player => player.uid === id);
        if(searchUser == null)
            return "No Player Match"
        
        return "Result : " + searchUser; 
    }
}
