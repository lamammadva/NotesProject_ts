import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './users.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/User.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserServices],
  exports: [UserServices],

})
export class UsersModule {}
