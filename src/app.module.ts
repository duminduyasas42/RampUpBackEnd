import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StudentModule,GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '0718432383Dd',
        database: 'student',
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
