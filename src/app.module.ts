import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SiswaModule } from './apps/todos/main/src/siswa/siswa.module';



@Module({

  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  imports: [SiswaModule],

})
export class AppModule { }
