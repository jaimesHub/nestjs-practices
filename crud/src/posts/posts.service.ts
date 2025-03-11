import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  getPosts() {
    return 'All posts'
  }

  createPost(body: any) {
    return body
  }

  getPost(id: string) {
    return `Post ${id}`
  }

  updatePost(id: string, body: any) {
    return `Post ${id} updated`
  }

  deletePost(id: string) {
    return `Post ${id} deleted`
  }
}
