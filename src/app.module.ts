import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './config/typeorm.config';
import { BoardsModule } from './boards/boards.module';
import { VideosModule } from './videos/videos.module';

@Module({
    imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, VideosModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
