import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    address: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private posts: PostsService) {}

  onSubmit() {
    if (this.form.valid) {
      this.posts.create(this.form.value).then(() => this.form.reset());
    }
  }
}
