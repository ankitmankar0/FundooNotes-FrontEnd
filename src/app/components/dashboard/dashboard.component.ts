import { Component, Input, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy, } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, _SnackBarContainer} from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/Data/data.service';
import { LabelService } from 'src/app/services/label/label.service';
import { LabelComponent } from '../label/label.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { style } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  grid = false;
  ArrayOfLabel: any


  @Input() GetLable: any;

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  

  private _mobileQueryListener: () => void;

  constructor(private data: DataService, changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog, media: MediaMatcher, private labelservice:LabelService, private router:Router, private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  ngOnInit(): void {
    this.GetLabels()
  }

  GetLabels()
  {
    this.labelservice.getallLabel()
    .subscribe((result: any)=>{
      console.log(result);
      this.ArrayOfLabel = result.data;
      console.log(this.ArrayOfLabel);
      
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  SearchNote(event:any) {
    console.log(event)
    console.log(event.target.value)
    this.data.sendData(event.target.value)
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '300px',
      height:"150px",      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("logout sucessfully!!!");
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 3000,
    }) 
  }
  
}
