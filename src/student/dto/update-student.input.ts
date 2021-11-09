import { StudentCreateDTO } from './create-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(StudentCreateDTO) {
  @Field()
  id: string;
  @Field()
  name:string
  @Field()
  gender:string
  @Field()
  address:string
  @Field()
  mobileNo:string
  @Field()
  DateOfBirth:string
}
