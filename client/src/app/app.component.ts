import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private Socket: Socket,
  ){}
  ngOnInit() {
    console.log('test');
    fetch('/api/test').then(async(result)=>{
      const body = await result.body;
      console.log('body:', body)
    });
  }
}
