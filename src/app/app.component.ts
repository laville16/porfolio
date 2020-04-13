import { Component } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import * as AOS from 'aos';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aslaville';
  ngOnInit() {
    AOS.init()
  }
 
}

