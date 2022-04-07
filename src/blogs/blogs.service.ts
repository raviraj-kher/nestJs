import { HttpException, Injectable } from '@nestjs/common';
import { BLOGS } from './blogs.mock';

@Injectable()
export class BlogsService {

    blogs = BLOGS;

    getBlogs(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.blogs);
        });
    }

    getBlog(blogId): Promise<any> {
        let id = Number(blogId);
        return new Promise(resolve => {
            const course = this.blogs.find(course => course.id === id);
            if (!course) {
                throw new HttpException('Course does not exist', 404)
            }
            resolve(course);
        });
    }
}
