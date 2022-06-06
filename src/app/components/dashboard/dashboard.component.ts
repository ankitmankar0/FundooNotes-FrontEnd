import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy, } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, _SnackBarContainer} from '@angular/material/snack-bar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  grid = false;

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

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
