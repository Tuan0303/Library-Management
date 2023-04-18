import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {
  // public dataSource!: MatTableDataSource<User>
  // public users!: User[]

  // @ViewChild(MatPaginator) paginator!: MatPaginator
  // @ViewChild(MatSort) sort!: MatSort

   //Sidebar toggle show hide function
   status = false;

   addToggle()
  {
    this.status = !this.status;
  }

  // displayedColumns: string[] = [
  //   'user_id',
  //   'full_name',
  //   'email',
  //   'password',
  //   'role',
  //   'created_at',
  //   'updated_at',
  //   'action'
  // ]
  // constructor(
  //   private AdminService: AdminApiService,
  //   private router: Router,
  //   private confrm: NgConfirmService,
  //   private toast: NgToastService
  // ) { }

  // ngOnInit() {
  //   this.getUsers();
  //   console.log(this.getUsers());

  // }

  // getUsers() {
  //   this.AdminService.getUsers()
  //     .subscribe(res => {
  //       this.users = res;
  //       this.dataSource = new MatTableDataSource(this.users)
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       console.log(this.users);

  //     })

  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // edit(user_id: number) {
  //   this.router.navigate(['admin-update-user', user_id])
  // }

  // delete(user_id: string) {
  //   this.confrm.showConfirm(("Are you sure want to delete ?"),

  //   () => {
  //     this.AdminService.deleteUser(user_id).subscribe(res=> {
  //       if (res.ok === true) {
  //         this.toast.success({ detail: "Success", summary: "Delete Update", duration: 3000 });
  //         this.getUsers();
  //       } else {
  //         console.log("Unknown response from server: ", res);
  //       }
  //     });
  //   },
  //   () => {}
  // );

  // }
}
