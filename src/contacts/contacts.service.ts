import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createContactDto } from 'src/DTO/create-contact.dto';
import { contactsEntity } from 'src/Entity/contacts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
    constructor(@InjectRepository(contactsEntity) private repo : Repository<contactsEntity>) {}

    async getAllContacts() {
        return await this.repo.find();
    }
   async createNewContact(createContactDto : createContactDto) {
        const newContact = new contactsEntity();
        const {name,phone,address,email,notes} = createContactDto;
        newContact.name = name;
        newContact.phone = phone;
        newContact.address = address;
        newContact.email = email;
        newContact.notes = notes;
        this.repo.create(newContact);
        return await this.repo.save(newContact);
   }
   async deleteContactById(id : number) {
        try{
            return await this.repo.delete(id);
        }catch(err) {
            throw new InternalServerErrorException('Something went wrong');
        }
   }

   async getContactByid(id : number) {
        return await this.repo.findOne({
            where : {
                id : id
            }
        });
   }

   async updateContact(id : number, createContactDto : createContactDto) {
        
   }

}
