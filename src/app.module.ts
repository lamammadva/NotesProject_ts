import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/Note.entity';
import { UsersModule } from './users/users.module';
import { UserEntity } from './entities/User.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from './config/config';
import { ProfileModule } from './auth/profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:"mongodb",
      url:config.databaseUrl,
      entities: [NoteEntity,UserEntity],
      useNewUrlParser:true,
      synchronize: true,

      logging:['query'],
     
    }), 
    NotesModule, UsersModule, AuthModule, ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
