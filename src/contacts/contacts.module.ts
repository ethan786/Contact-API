import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contactsEntity } from 'src/Entity/contacts.entity';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([contactsEntity])],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
