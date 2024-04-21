import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable, Subscribable } from 'rxjs';
@Component({
  selector: 'app-side-menu-toolbar',
  templateUrl: './side-menu-toolbar.component.html',
  styleUrl: './side-menu-toolbar.component.css'
})
export class SideMenuToolbarComponent {
showFiller: boolean = true;
isHandset$: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined;
constructor(){
  console.log(this.isHandset$);
}

}
