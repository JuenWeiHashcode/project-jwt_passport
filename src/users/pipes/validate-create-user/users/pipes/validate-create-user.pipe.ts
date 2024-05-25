import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreatePlayerServiceModel } from 'src/users/dtos/CreatePlayer.dto';

@Injectable()
export class validateCreateUserPipe implements PipeTransform {
  transform(createPlayerServiceModel: CreatePlayerServiceModel, metadata: ArgumentMetadata) {

    //Detect isit a real number even in string format.
    const parseInt = Number.parseInt(createPlayerServiceModel.age.toString())
    if(isNaN(parseInt))
      {
        console.log(parseInt + " is not the number");
        throw new HttpException('Invalid AGE, Expected Number' ,HttpStatus.BAD_REQUEST);
      }

    //console.log("Type : " + typeof(createPlayerServiceModel) + "\nValue : " + createPlayerServiceModel);
    console.log("It is valid age ,returning as value : " + parseInt)
    //Return the whiole servive model, but overrided the age property
    return {...createPlayerServiceModel, age: parseInt};
  }
}
