
interface setQuantity {
    (a: number):void;
  }
  
export class Product{
    expired: boolean=true;
    imageUrl: string="";
    productCategory: string="";
    productDoe:string= "";
    productDom:string= "";
    productId:number= 0;
    productName: string="";
    productPrice:number= 0;
    stockQuantity:number= 0;
    warrantyId:number= 0;

    

//    setQuan(qty: number){
//        this.stockQuantity=qty
//     };
      
    
//     // public set setQuantity(qty:number){
//     //     this.stockQuantity=qty;
//     // }

}