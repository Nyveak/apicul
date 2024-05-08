import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {
        message: "Formato de Email Incorrecto"
    })
    email: string;

    @IsNotEmpty({
        message: "Este campo es requerido."
    })
    firstName: string;
    
    @IsNotEmpty({
        message: "Este campo es requerido."
    })
    lastName: string;

    @IsNotEmpty({
        message: "Este campo es requerido."
    })
    address: string;

    @MinLength(10,{
        message: "El numero de telefono debe de tener minimo 10 digitos"
    })
    phonenumber: string;
}
