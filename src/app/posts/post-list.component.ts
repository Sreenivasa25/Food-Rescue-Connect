import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.postsSvc.getAll().subscribe(data => this.posts = data);
  }

  claim(id: string) {
    this.postsSvc.claim(id);
  }
}
