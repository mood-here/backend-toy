import { Injectable } from '@nestjs/common';
import { VideoRepository } from '../repositories/video.repository';
import Flickr from 'flickr-sdk';

@Injectable()
export class VideosService {
    constructor(private videoRepository: VideoRepository) {}

    async createVideo(body, file) {
        const oauth = new Flickr.OAuth(
            process.env.FLICKR_API_KEY,
            process.env.FLICKR_SECRET_KEY,
        );
        // console.log(oauth);

        const responseToken = await oauth.request(
            'http://localhost:3000/videos/oauth/callback',
        );
        console.log(responseToken.body);
        const oauth_token = responseToken.body.oauth_token;
        const oauth_token_secret = responseToken.body.oauth_token_secret;

        // const perms = ['read', 'write'];
        const url = oauth.authorizeUrl(oauth_token, 'write');

        console.log(url);
    }

    async createtestVideo(data, file) {
        const oauth = new Flickr.OAuth(
            process.env.FLICKR_API_KEY,
            process.env.FLICKR_SECRET_KEY,
        );

        const oauth_token = process.env.OAUTH_TOKEN;
        const oauth_token_secret = process.env.OAUTH_TOKEN_SECRET;
        const oauth_verifier = process.env.OAUTH_VERIFIER;

        const verify = await oauth.verify(
            oauth_token,
            oauth_verifier,
            oauth_token_secret,
        );

        const rest_token = verify.body.oauth_token;
        const rest_token_secret = verify.body.oauth_token_secret;

        console.log(verify.body);
        const flickr = new Flickr(
            oauth.plugin(
                // process.env.FLICKR_API_KEY,
                // process.env.FLICKR_SECRET_KEY,
                rest_token,
                rest_token_secret,
            ),
        );

        const uploadFlickr = await new Flickr.Upload(
            oauth.plugin(
                // process.env.FLICKR_API_KEY,
                // process.env.FLICKR_SECRET_KEY,
                rest_token,
                rest_token_secret,
            ),
            file.buffer,
            {
                title: 'test',
            },
        )
            .then((res) => {
                console.log('ya', res.body);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(uploadFlickr);
    }

    async callbackFlickr(oauth_token, oauth_verifier) {
        // console.log(responseSecond.body);
        // console.log(flickr);
        // // // console.log(1);
        // return await this.videoRepository.save(body);
    }

    async findVideos() {
        // return await this.videoRepository.find();
    }

    async findById(id) {
        // return await this.videoRepository.findOne(id);
    }
}
