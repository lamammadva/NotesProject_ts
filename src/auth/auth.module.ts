import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServices } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ProfileModule } from './profile/profile.module';
import config from 'src/config/config';

@Module({
  imports:[UsersModule,
    JwtModule.register({
      global: true,
      secret: config.jwtSecret,
      signOptions: { expiresIn: '60m' },
    }),
    ProfileModule
  ],
  controllers: [AuthController],
  providers:[AuthServices],

})
export class AuthModule {}
