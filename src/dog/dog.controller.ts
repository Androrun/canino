import { Body, Controller, Post, Put } from '@nestjs/common';
import { Dog } from './dto/create-sign.dto';

@Controller('dog')
export class DogController {

    @Post()
    async create(@Body()dog: Dog) {
    return 'The name of the dog is Tobi'  ;
 }
}
