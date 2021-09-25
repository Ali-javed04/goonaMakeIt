import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  display = "none";
  NotPlay=true
  display1 = "none"
  display2 = "none"
  selectiIcon:string
  selectName:string
  InstalledWallets=[
    {
      id:1,
      icon:'/assets/ms.svg',
      name:'Phantom'
    },
    {
      id:2,
      icon:'/assets/ex.svg',
      name:'Sollet'
    },
  ]
  avaliableWallets=[
    {
      id:1,
      icon:'/assets/sq.svg',
      name:'Slope',

    },
    {
      id:1,
      icon:'/assets/ms.svg',
      name:'Slope',

    },{
      id:1,
      icon:'/assets/ms.svg',
      name:'Slope',

    },{
      id:1,
      icon:'/assets/ms.svg',
      name:'Slope',

    }
  ]
  ngOnInit(): void {
  }
  openModal() {
    this.display2 = "none";
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  OpenConnectModel(wallet) {
    this.display = "none"
    this.display1 = "block"
    this.selectName = wallet.name
    this.selectiIcon = wallet.icon
    this.NotPlay = false

  }
  openModal2() {
    this.display1 = "block";
  }
  onCloseHandled2() {
    this.display1 = "none";
  }
  openModal3() {
    this.display2 = "block";
  }
  onCloseHandled3() {
    this.display2 = "none";
  }
  disconnect() {
    this.display1="none"
    this.display="block"
    this.NotPlay = true

  }
}
