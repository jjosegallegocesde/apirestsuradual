import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitacion.js'

let controladorHabitacion= new ControladorHabitaciones()

//Para separar las rutas de la logica de negocio
//utilizare un metodo especial de EXPRESS
export let rutas=express.Router()

rutas.post('/empleado',controladorHabitacion.registrandoHabitacion)
rutas.get('/empleados',controladorHabitacion.buscandoTodasHabitaciones)
rutas.get('/empleado/:idhabitacion',controladorHabitacion.buscandoUnaHabitacion)
rutas.put('/empleado/:idhabitacion',controladorHabitacion.editandoHabitacion)

