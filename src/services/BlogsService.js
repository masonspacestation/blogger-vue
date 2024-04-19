import App from "../App.vue";
import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { api } from "./AxiosService.js"
import { Modal } from "bootstrap";




class BlogsService {
  postNewBlog() {
    throw new Error("Method not implemented.");
  }
  async getProfileBlogs(profileId) {
    AppState.profileBlogs = []
    const response = await api.get(`api/blogs?creatorId=${profileId}`)
    console.log('blogs here', response.data);
    const profileBlogs = response.data.map(blog => new Blog(blog))
    AppState.profileBlogs = profileBlogs
  }
  async setActiveBlog(blogId) {
    AppState.activeBlog = null
    const response = await api.get(`api/blogs/${blogId}`)
    const activeBlog = new Blog(response.data)
    AppState.activeBlog = activeBlog
    console.log('new active', AppState.activeBlog);
  }
  async getBlogs() {
    const response = await api.get('api/blogs')
    console.log('service 1', response.data);
    const blogs = response.data.map(blog => new Blog(blog))
    AppState.blogs = blogs
    console.log(AppState.blogs);
  }
}


export const blogsService = new BlogsService()