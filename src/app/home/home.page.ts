import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    public router: Router,
  ) {}

   ngOnInit(){
     this.news();
     this.loadMap();
   }

   login(){
    this.router.navigate(['/pages/login'])
  }

  news(){
    document.getElementById('news').style.display = 'block';
    document.getElementById('maps').style.display = 'none';
    document.getElementById('reports').style.display = 'none';
    document.getElementById('btn2').style.backgroundColor = '#9a24eb ';
    document.getElementById('btn').style.transition = 'background-color 1s';
    document.getElementById('btn').style.backgroundColor = '#a83ef0';
    document.getElementById('btn3').style.backgroundColor = '#9a24eb ';
  }

  maps(){
    document.getElementById('maps').style.display = 'block';
    document.getElementById('news').style.display = 'none';
    document.getElementById('reports').style.display = 'none';
    document.getElementById('btn').style.backgroundColor = '#9a24eb ';
    document.getElementById('btn2').style.transition = 'background-color 1s';
    document.getElementById('btn2').style.backgroundColor = '#a83ef0';
    document.getElementById('btn3').style.backgroundColor = '#9a24eb ';
  }

  reports(){
    document.getElementById('reports').style.display = 'block';
    document.getElementById('maps').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('btn').style.backgroundColor = '#9a24eb ';
    document.getElementById('btn2').style.backgroundColor = '#9a24eb ';
    document.getElementById('btn3').style.transition = 'background-color 1s';
    document.getElementById('btn3').style.backgroundColor = '#a83ef0';
   
  }

  async loadMap(){
    
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: 4.65436456, lng: -74.0327897893};

    const map = new google.maps.Map(mapEle, {
      mapId: "8659919e8587e744",
      center:myLatLng, 
      zoom:12,
      disableDefaultUI: true,
    });

    google.maps.event.addListenerOnce(this.maps, 'idle', () => {
      mapEle.classList.add('show-map')
    })
 
  }
}
