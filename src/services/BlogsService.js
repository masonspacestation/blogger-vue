import App from "../App.vue";
import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { api } from "./AxiosService.js"




class BlogsService {
  async getBlogs() {
    const response = await api.get('api/blogs')
    console.log('service 1', response.data);
    const blogs = response.data.map(blog => new Blog(blog))
    AppState.blogs = blogs
    console.log(AppState.blogs);
  }
}


export const blogsService = new BlogsService()