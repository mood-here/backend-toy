import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';

@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>,
    ) {}

    save(options) {
        return this.boardRepository.save(options);
    }

    find() {
        return this.boardRepository.find();
    }

    findOne(options) {
        return this.boardRepository.findOne({ where: options });
    }

    update(id, options) {
        return this.boardRepository.update(id, options);
    }
}
