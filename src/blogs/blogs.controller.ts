import { Controller, Get, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private blogService: BlogsService) {}

    @Get()
    async getBlogs() {
        const blogs = await this.blogService.getBlogs();
        return blogs;
    }

    @Get(':blogId')
    async getBlog(@Param('blogId') blogId) {
        const blog = await this.blogService.getBlog(blogId);
        return blog;
    }

}
