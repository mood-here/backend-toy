import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from '../entities/video.entity';

@Injectable()
export class VideoRepository {
    constructor(
        @InjectRepository(Video) private boardRepository: Repository<Video>,
    ) {}
}
