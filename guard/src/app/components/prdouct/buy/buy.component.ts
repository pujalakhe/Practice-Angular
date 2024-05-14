import { Component } from '@angular/core';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  name:string='';
  price:number|null=null;
  isPurchaseClicked:boolean=false;
  checkFunction(){
    if(this.name===null || this.name==='' || this.price===null)
      return false;
    return true;
  }
  onPurchase(){
    this.isPurchaseClicked=this.checkFunction();
    if((this.name!==null && this.name!=='') && this.price!==null){
      alert("Thanks for purchasing");    
    }
    else{
      alert("please select some items to purchase");
    }
  }
  canExit(){
    console.log('can Exit called');
    if((this.name|| this.price) && !this.isPurchaseClicked){
     return confirm ('You have some unsave changes.Are you sure want to naviagte away?');
    }
    else{
      return true ;
    }
  }
}
