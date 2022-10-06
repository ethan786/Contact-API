import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { CallLogsModule } from './call-logs/call-logs.module';


const ormOptions: TypeOrmModuleOptions = {
  type : 'mysql',
  host : 'localhost',
  port : 3306,
  username : 'root',
  password : 'Himanshu',
  database : 'call-logs-app',
  autoLoadEntities : true,
  logging : true,
  synchronize : true,
};

@Module({
  imports: [ContactsModule, TypeOrmModule.forRoot(ormOptions), CallLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
