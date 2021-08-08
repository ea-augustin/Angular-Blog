import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {NgForm} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService:PostService) {
  }

  ngOnInit(): void {

  }

  onAddPost(form: NgForm) {
    if(form.invalid){
      return;
    }
    this.postService.addPost(form.value.title,form.value.content)
    form.resetForm();
  }
}
