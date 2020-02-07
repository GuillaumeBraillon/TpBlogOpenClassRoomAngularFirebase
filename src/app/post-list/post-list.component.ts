import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  POSTS : any[];
  postSubscription : Subscription;
  constructor(private postsService : PostsService){
   
  }
  ngOnInit(){
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS; 
      }
    );
   this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
