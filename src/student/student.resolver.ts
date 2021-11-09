import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import {  StudentCreateDTO } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => Student,{name:"createStudent"})
  create(@Args('student') student:StudentCreateDTO){
    return  this.studentService.create(student);
 }

  @Query(() => [Student], { name: 'getAllStudent' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'getStudent' })
  findOne(@Args('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  updateStudent(@Args('student') student: UpdateStudentInput) {
    return this.studentService.update(student.id, student);
  }


  @Mutation(() => Student)
  removeStudent(@Args('id') id: string) {
    return this.studentService.remove(id);
  }
}
