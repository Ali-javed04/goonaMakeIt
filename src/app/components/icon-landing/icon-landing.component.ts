import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-landing',
  templateUrl: './icon-landing.component.html',
  styleUrls: ['./icon-landing.component.scss']
})
export class IconLandingComponent implements OnInit {


  games=[
    {
      id:1,
      logo:'/assets/auroryFTX.svg',
      img:'/assets/pugb.svg',
      name:'Pugb Mobile',
      date:'23/08/21',
      description:' Win 2 consecutive PUGB games to win an Aurorian NFT valued at 25 SOL ($4K). Aurorian NFTs give access to the AuroryDAO and have utility in the Aurory game. Entry price: 0.05 SOL',
      download:'2.348 Gamers',

    },
    {
      id:1,
      logo:'/assets/auroryFTX.svg',
      img:'/assets/pugb.svg',
      name:'Pugb Mobile',
      date:'23/08/21',
      description:' Win 2 consecutive PUGB games to win an Aurorian NFT valued at 25 SOL ($4K). Aurorian NFTs give access to the AuroryDAO and have utility in the Aurory game. Entry price: 0.05 SOL',
      download:'2.348 Gamers',

    },
    {
      id:1,
      logo:'/assets/auroryFTX.svg',
      img:'/assets/pugb.svg',
      name:'Pugb Mobile',
      date:'23/08/21',
      description:' Win 2 consecutive PUGB games to win an Aurorian NFT valued at 25 SOL ($4K). Aurorian NFTs give access to the AuroryDAO and have utility in the Aurory game. Entry price: 0.05 SOL',
      download:'2.348 Gamers',

    },
    {
      id:1,
      logo:'/assets/auroryFTX.svg',
      img:'/assets/pugb.svg',
      name:'Pugb Mobile',
      date:'23/08/21',
      description:' Win 2 consecutive PUGB games to win an Aurorian NFT valued at 25 SOL ($4K). Aurorian NFTs give access to the AuroryDAO and have utility in the Aurory game. Entry price: 0.05 SOL',
      download:'2.348 Gamers',

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
