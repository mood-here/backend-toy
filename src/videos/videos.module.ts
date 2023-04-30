import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosController } from './controllers/videos.controller';
import { Video } from './entities/video.entity';
import { VideoRepository } from './repositories/video.repository';
import { VideosService } from './services/videos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Video])],
    controllers: [VideosController],
    providers: [VideosService, VideoRepository],
})
export class VideosModule {}
