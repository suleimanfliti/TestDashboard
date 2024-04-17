import {UsersServiceService} from '../../services/users-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {User} from '../../models/user'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  users: User[] = [];
  paginatedData: User[] = []; // Paginated data to display
  pageSize = 6; // Number of items per page
  currentPage = 0; // Current page index
  totalItems = 12; // Total number of items
  isLoading = false; // Loading indicator
  userId =0
  title = 'test-dashboard';
  searchValue: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private Users: UsersServiceService, private router:Router,) { }

  clearSearch() {
    this.searchValue = '';
  }
  
   ngOnInit():void  {
     this.loadData();
  }

  // getUserId(id:number){

  //   let queryParams:any = {};
   
  //   queryParams.id = id;
  
  //   this.router.navigate(['/details'],{
  //     queryParams : queryParams
  //   });
  // }
  
  loadData(): void {
    this.isLoading = true;
    this.Users.getData(this.currentPage + 1).subscribe(
      response => {

        this.users = response.data;
        this.totalItems = response.total;
        this.updatePaginator();
        this.isLoading = false;
      },
      error => {
        console.log('Error occurred while fetching data:', error);
        this.isLoading = false;
      }
    );
  }

  updatePaginator(): void {
    this.paginator.length = this.totalItems;
    this.paginator.pageIndex = this.currentPage;
    this.paginator.pageSize = this.pageSize;
    this.paginatedData = this.users;
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }
  

}
