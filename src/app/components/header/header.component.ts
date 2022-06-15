import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { productsCount } from 'src/app/cart-state-store/cart.selector';
import { removeCustomer } from 'src/app/customer-state-store/customer.action';
import { ProductServiceService } from 'src/app/services_folder/product-service.service';
import { StoreserviceService } from 'src/app/services_folder/storeservice.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countProducts$:Observable<number>;
  constructor(private router: Router, private storeService:StoreserviceService,private cookies:CookieService, private productsService:ProductServiceService, private store:Store) {
    this.countProducts$=store.select(productsCount)
   }
  categoriesArray:string[]=["Electronics","Grocery","Fashion","Appliances","Beauty","Furniture"];

  ngOnInit(): void {
  }

  searchedInput:string='';

  logoutFunction(){
    this.router.navigate(['/login']);
    this.store.dispatch(removeCustomer())
    this.cookies.delete('jwt_token')
    window.localStorage.clear();
  }

  homePage(){
    this.router.navigate(['/home']);
  }
  goToCart(){
    this.router.navigate(['/cart']);
  }
  goToUserProfile(){
    this.router.navigate(['/user-profile']);
  }

  productsPage(){
    this.router.navigate(['/products']);
  }

  onSearch(e:any){
    this.searchedInput=e.target.value
  }

  onsubmitSearch(){
    if(this.categoriesArray.includes(this.searchedInput)){
      this.storeService.setProductsFoundVar(true)
      this.storeService.setMyVariable(this.searchedInput);
      this.productsPage()
    }else{
      this.storeService.setMyVariable(this.searchedInput);
      this.storeService.setProductsFoundVar(false)
      this.productsPage()
    }
    
  }

}
