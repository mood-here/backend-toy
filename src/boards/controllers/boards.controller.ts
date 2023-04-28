import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from '../services/boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsServie: BoardsService) {}

    @Get('/')
    getBoards() {
        return this.boardsServie.findBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: number) {
        return this.boardsServie.findById(id);
    }

    @Post('/')
    postBoard(@Body() data) {
        return this.boardsServie.createBoard(data);
    }
}
