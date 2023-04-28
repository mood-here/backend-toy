import { Injectable } from '@nestjs/common';
import { BoardRepository } from '../repositories/boards.repository';

@Injectable()
export class BoardsService {
    constructor(private boardRepository: BoardRepository) {}

    async createBoard(body) {
        return await this.boardRepository.save(body);
    }

    async findBoards() {
        return await this.boardRepository.find();
    }

    async findById(id) {
        return await this.boardRepository.findOne(id);
    }
}
