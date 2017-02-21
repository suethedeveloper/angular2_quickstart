import { Component }    from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;

  constructor(private postsService: PostsService) {
    this.name = 'John Doe';
    this.email = 'jonedoe@gmail.com';
    this.address = {
      street: '123 main st',
      city: 'Any Town',
      state: 'CA',
      zipcode: 94566
    };
    this.hobbies = ['Music', 'Camping', 'Craft'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {this.posts = posts;});
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(index){
    console.log('clicked', index);
    this.hobbies.splice(index,1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}

interface Post {
  title: string;
  body: string;
  id: number;
}
