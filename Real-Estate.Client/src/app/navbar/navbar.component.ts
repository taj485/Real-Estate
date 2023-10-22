import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private _httpClient: HttpClient){
    
  }

  testApi(){
    this._httpClient.get('https://localhost:7177/weatherforecast').subscribe(x => {
      console.log(x)
    })
    //alert("Hello")
  }

}



