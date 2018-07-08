import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { ContentComponent } from '../content/content.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-navbar',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() content : ContentComponent;
  @Input() topbar : TopbarComponent;

  @ViewChild("sidenav") sidenav : ElementRef;
  private location : Location;

  constructor(location : Location) {
    this.location = location;
  }

  ngOnInit() {
    this.initSidenav();
  }

  showContent(content:string='dashboard'){
    this.location.replaceState(content,'');
  	this.content.toggleContent(content);
  }

  private initSidenav(){
    var topbarHeight = this.topbar.topbar.nativeElement.offsetHeight;
    this.sidenav.nativeElement.style.height = "calc(100vh - "+topbarHeight+"px)";
  }
}
