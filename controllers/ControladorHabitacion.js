import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorHabitaciones{

    constructor(){}

    async registrandoHabitacion(peticion,respuesta){
        let datosHabitacion=peticion.body
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            await servicioHabitacion.registrarHabitacion(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito agregando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    async buscandoUnaHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let servicioHabitacion= new ServicioHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje":"Exito buscando el empleado "+idHabitacion,
                "habitacion":await servicioHabitacion.buscarHabitacion(idHabitacion)

            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    async buscandoTodasHabitaciones(peticion,respuesta){
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            respuesta.status(200).json({

                "mensaje":"Exito buscando empleados",
                "empleados":await servicioHabitacion.buscarTodasHabitaciones()
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        let servicioHabitacion= new ServicioHabitaciones()
        try{
            await servicioHabitacion.editarHabitacion(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito editando al empleado"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

}