import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() created_At: Date;
  @Input() index: number;
  @Input() loveIts: number;

  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }

  onLike(){
    this.loveIts =this.postsService.onLike(this.index);
  console.log("I have", this.loveIts, "like");
  }
  
  onUnLike(){
    this.loveIts =this.postsService.onUnLike(this.index);
    console.log("I have", this.loveIts, "like");
  }

  onDeletePost() {
    const confirmation = confirm('Voulez-vous supprimer ce post?');
    if (confirmation) {
    this.postsService.removePost(this.index);
    console.log("Post n°", this.index, "deleted");
    }
  }
}