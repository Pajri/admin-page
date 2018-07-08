import { Component, OnInit, ViewChild, ViewContainerRef,
ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { ContentListComponent } from '../content-list/content-list.component';
import { ContentUploadComponent } from '../content-upload/content-upload.component';
import { ContentDashboardComponent} from '../content-dashboard/content-dashboard.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  entryComponents : [ContentListComponent,ContentUploadComponent,ContentDashboardComponent]
})
export class ContentComponent implements OnInit {
  @ViewChild('contentContainer',{read: ViewContainerRef}) container;
  componentRef : ComponentRef<any>;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {}

  toggleContent(content:string){
    //create component
    this.container.clear();
    var component = null;
    switch(content){
      case 'list' :
        component = ContentListComponent;
        break;
      case 'upload' :
        component = ContentUploadComponent;
        break;
      case 'dashboard' :
        component = ContentDashboardComponent;
        break;
      default :
        component = ContentDashboardComponent;
        break;
    }
    
    const factory : ComponentFactory<any> = 
      this.componentFactoryResolver.resolveComponentFactory(component);

    this.componentRef = this.container.createComponent(factory);
  }

  ngOnDestroy(){
    this.componentRef.destroy();
  }
}
