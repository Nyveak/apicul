import { IsNotEmpty } from "class-validator";

export class CreateTaskCategoryDto {

    @IsNotEmpty()
    Description: string

    @IsNotEmpty()
    Color: string
}
