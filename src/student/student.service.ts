import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRespository:Repository<Student>){

  }



  async create(student: StudentCreateDTO):Promise<Student> {
    let std=this.studentRespository.create(student);
    return this.studentRespository.save(std);
  }

  async findAll():Promise<Student[]>{

    return this.studentRespository.find()
  }

  findOne(id: string) {
    return this.studentRespository.findOne(id);
  }

  update(id: string, updateStudentInput: UpdateStudentInput) {
    let student: Student = this.studentRespository.create(updateStudentInput)
    student.id = id;
    return this.studentRespository.save(student)
  }


  async remove(id: string) {
    let std = this.findOne(id)
    if (std) {
      let ret = await this.studentRespository.delete(id);
      if (ret.affected === 1) {
        return std;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
