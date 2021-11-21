"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Passo 1
class CreateCourseService {
    // execute(name:String, duration: number, educator: string) // Passo 1
    // execute(data: ICourse) Passo 2
    // 
    execute({ name, duration, educator }) {
        // console.log(name, duration, educator); Passo 1
        // console.log(data.name, data.duration, data.educator); // Passo 2
        console.log(name, duration, educator); // Passo 3
    }
}
exports.default = new CreateCourseService;
