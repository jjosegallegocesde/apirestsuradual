import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema;

//construimos el esquema persdonalizando la informacion
const Empleado=new Schema({
    nombre:{
        type:String,
        required:true
    },
    cargo:{
        type:String,
        required:true
    },
    valorBono:{
        type:Number,
        required:true
    },

})

export const modeloHabitacion=mongoose.model('empleado',Empleado)