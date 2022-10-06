import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { createContactDto } from 'src/DTO/create-contact.dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor (private  contactsService: ContactsService) {}

    // get all contacts
    @Get() 
    getAllContacts() {
        return this.contactsService.getAllContacts();
    }

    // get contact by id
    @Get(':id')
    getContactByid(@Param('id') id : number) {
        return this.contactsService.getContactByid(id);
    }

    // create contacts
    @Post() 
    createNewContact(@Body() data : createContactDto) {
        return this.contactsService.createNewContact(data);
    }
    // update contacts
    @Patch(':id') 
    updateContact(@Body() data : createContactDto, @Param('id') id : number) {
        return this.contactsService.updateContact(id, data);
    }


    // delete contacts
    @Delete(':id')
    deleteContactById(@Param('id') id : number) {
        return this.contactsService.deleteContactById(id);
    }
}
