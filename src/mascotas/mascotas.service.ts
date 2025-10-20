import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
    mascotas: any = [];
    constructor(){
        let mascota ={
            "id" : "1",
            "nombre" : "Firulais",
            "especie" : "Perro",
            "raza":"caniche toy",
            "edad" : "3",
            "duenio" : "Juan Perez",
            "telefono" : "555-1234"
        };
        this.mascotas.push(mascota);
        mascota ={
            "id" : "2",
            "nombre" : "Michi",
            "especie" : "Gato",
            "raza":"siames",
            "edad" : "2",
            "duenio" : "Ana Gomez",
            "telefono" : "555-5678"
        };
        this.mascotas.push(mascota);
        mascota ={
            "id" : "3",
            "nombre" : "Nemo",
            "especie" : "tortuga",
            "raza":"marina",
            "edad" : "1",
            "duenio" : "Carlos Lopez",  
            "telefono" : "555-8765"
        };
        this.mascotas.push(mascota);

    }
    getMascotas(){
        return this.mascotas;
    }
    getMacotasId(id:Number){
        for(let i = 0; i < this.mascotas.length; i++){
            if (this.mascotas[i].id == id){
                return this.mascotas[i];
            }  
        }
        return "No se encontro el paciente";
    }
    ingresarPacientes(mascota:any){
        const nuevoId = this.mascotas.length + 1;
        const mascotaAIngresar = {
            "id": nuevoId,
            "nombre": mascota.nombre || "completar nombre",
            "especie": mascota.especie || "completar especie",
            "raza": mascota.raza || "completar raza",
            "edad": mascota.edad || "completar edad",
            "duenio": mascota.duenio || "completar duenio",
            "telefono": mascota.telefono || "completar telefono"       

        };
        
            this.mascotas.push(mascotaAIngresar);
            return {
            mensaje: "Paciente ingresado correctamente",
            paciente: mascotaAIngresar
    };
        

    }
    
            
}

   
    
    
    