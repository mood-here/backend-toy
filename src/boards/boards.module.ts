import { Module } from '@nestjs/common';
import { BoardsService } from './services/boards.service';
import { BoardsController } from './controllers/boards.controller';
import { BoardRepository } from './repositories/boards.repository';

@Module({
    providers: [BoardsService, BoardRepository],
    controllers: [BoardsController],
})
export class BoardsModule {}
