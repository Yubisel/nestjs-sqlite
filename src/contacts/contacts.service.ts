import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    return await this.contactRepository.save(createContactDto);
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  async update(
    id: number,
    updateContactDto: UpdateContactDto,
  ): Promise<UpdateResult> {
    return await this.contactRepository.update(id, updateContactDto);
  }

  async remove(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
