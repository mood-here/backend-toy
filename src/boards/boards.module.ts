import { Module } from '@nestjs/common';
import { BoardsService } from './services/boards.service';
import { BoardsController } from './controllers/boards.controller';
import { BoardRepository } from './repositories/boards.repository';
import { Board } from './entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    providers: [BoardsService, BoardRepository],
    controllers: [BoardsController],
})
export class BoardsModule {}
