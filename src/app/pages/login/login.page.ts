import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  elemento: any;
  cambio: number = 0;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'])
  }

  subir(){
    this.elemento = document.getElementById('up').style.transition = 'height 2s';
    this.elemento = document.getElementById('up').style.height = '90%';
    this.elemento = document.getElementById('btn').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('btn').style.opacity = '0';
    this.elemento = document.getElementById('backbutton').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('backbutton').style.opacity = '0';
    this.elemento = document.getElementById('form').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('form').style.opacity = '1';
    this.elemento = document.getElementById('form').style.transition = 'all 1.5s linear';
    this.elemento = document.getElementById('form').style.transform = 'translateY(-250px)';
    this.elemento = document.getElementById('btn-x').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('btn-x').style.opacity = '1';
    document.getElementById('sea').style.transition = 'opacity 2s';
    document.getElementById('sea').style.opacity = '0';
  }

  bajar(){
    this.elemento = document.getElementById('up').style.transition = 'height 2s';
    this.elemento = document.getElementById('up').style.height = '35%';
    this.elemento = document.getElementById('btn').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('btn').style.opacity = '1';
    this.elemento = document.getElementById('backbutton').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('backbutton').style.opacity = '1';
    this.elemento = document.getElementById('form').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('form').style.opacity = '0';
    this.elemento = document.getElementById('form').style.transition = 'all 1.5s linear';
    this.elemento = document.getElementById('form').style.transform = 'translateY(100px)';
    this.elemento = document.getElementById('btn-x').style.transition = 'opacity 2s';
    this.elemento = document.getElementById('btn-x').style.opacity = '0';
    document.getElementById('sea').style.transition = 'opacity 2s';
    document.getElementById('sea').style.opacity = '1';
  }

  rotate(){ 
    if(this.cambio == 0){
      document.getElementById('icon').style.transform = 'rotate(180deg)';
      document.getElementById('subcontainer').style.transition = 'height 1s';
      document.getElementById('subcontainer').style.height = '150px';
      document.getElementById('panel').style.transition = 'opacity 2s';
      document.getElementById('panel').style.opacity = '1';
      this.cambio = 1;
    }else if(this.cambio == 1){
      document.getElementById('icon').style.transform = 'rotate(0deg)';
      document.getElementById('subcontainer').style.transition = 'height 1s';
      document.getElementById('subcontainer').style.height = '0px';
      document.getElementById('panel').style.transition = 'opacity 2s';
      document.getElementById('panel').style.opacity = '0';
      this.cambio = 0;
    }
  }

}
