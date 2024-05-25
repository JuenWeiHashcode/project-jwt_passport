import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreatePlayerDataModel } from 'src/types/types';
import { CreatePlayerServiceModel } from 'src/users/dtos/CreatePlayer.dto';
import { PlayerService } from 'src/users/services/player/player.service';

@Controller('player')
export class PlayerController {

    //DI
    constructor (private playerService : PlayerService){

    }

    @Get()
    defaultScreen()
    {
        return { message :  "WELCOME TO PLAYER PAGE" }
    }

    @Get('Get')
    getAllPlayer()
    {
        return this.playerService.getAllPlayer()
    }

    @Get('Get/:id')
    getPlayerById(@Param("id", ParseIntPipe) playerId : number)
    {
        console.log("Player ID : " + playerId)
        return {
            message : "Valid Input"
        }
    }

    @Post('Create')
    createPlayer(@Body() body : CreatePlayerServiceModel)
    {
        //console.log(body)
        return this.playerService.createPlayer(body)
    }
}
