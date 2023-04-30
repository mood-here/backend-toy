import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideosService } from '../services/videos.service';

@Controller('videos')
export class VideosController {
    constructor(private videosServie: VideosService) {}

    @Get('')
    getVideos() {
        // return this.videosServie.findVideos();
    }

    @Get(':id')
    getVideoById(@Param('id') id: number) {
        // return this.videosServie.findById(id);
    }

    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    postVideo(@UploadedFile() file: Express.Multer.File, @Body() data) {
        console.log(file);
        console.log('data', data);
        return this.videosServie.createVideo(data, file);
    }

    @Post('test')
    @UseInterceptors(FileInterceptor('file'))
    testVideo(@UploadedFile() file: Express.Multer.File, @Body() data) {
        return this.videosServie.createtestVideo(data, file);
    }

    @Get('oauth/callback')
    callbackFlickr(
        @Query('oauth_token') oauth_token: string,
        @Query('oauth_verifier') oauth_verifier: string,
    ) {
        console.log(oauth_token, oauth_verifier);
        return this.videosServie.callbackFlickr(oauth_token, oauth_verifier);
    }
}
