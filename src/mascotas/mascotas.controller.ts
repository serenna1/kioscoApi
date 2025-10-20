import { MascotasService } from './mascotas.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('mascotas')
export class MascotasController {
     constructor(private readonly mascotasService: MascotasService){}
     @Get('pacientes')
        getMascotas(): string {
         return this.mascotasService.getMascotas();
     }
     @Get('pacientes/:id')
        getMascotasId(@Param('id') id:any) : any{ // error conel id:any
            const idNumber = parseInt(id, 10);

            return this.mascotasService.getMacotasId(idNumber);
        }
    @Post('ingresarPaciente')
    ingresarPacientes(@Body() nuevoPaciente: any):any{
        return this.mascotasService.ingresarPacientes(nuevoPaciente);

    }
    // todavia no funciona el post tenemos problemas con el body

}
