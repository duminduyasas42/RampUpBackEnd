import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class StudentCreateDTO {
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
