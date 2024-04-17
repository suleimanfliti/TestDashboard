import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersServiceService} from '../../services/users-service.service';
import {User} from '../../models/user'


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  user: User | undefined;

constructor(private Users: UsersServiceService, private activatedRoute: ActivatedRoute
 
  ){}

ngOnInit(): void {
  const userId = this.activatedRoute.snapshot.paramMap.get('id');
  if (userId) {
    this.Users.getUserDetails(Number(userId)).subscribe(
      response => {
        this.user = response.data;
        console.log('this.users',this.user);
        
      },
      error => {
        console.log('Error occurred while fetching user details:', error);
      }
    );
  }
}
}


