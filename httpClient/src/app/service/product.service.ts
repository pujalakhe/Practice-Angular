import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Products } from '../product';
import { map } from 'rxjs/operators';
import { throwError, Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts: Products[] = [];
  constructor(private http: HttpClient) {}
  //create product in database
  createProduct(products: { pname: string; pdesc: string; pprice: number }) {
    console.log(products);
    const myHeader = new HttpHeaders({ myHeader: 'Puja' });
    //Post data to server
    this.http
      .post<{ name: string }>(
        'https://angularhttpclient-d6c93-default-rtdb.firebaseio.com/products.json',
        products,
        { headers: myHeader }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  //fetch product from database
  fetchProduct() {
    // const myHeader = new HttpHeaders({ myHeader: 'Puja' });
    return (
      this.http
        .get<{ [key: string]: Products }>(
          'https://angularhttpclient-d6c93-default-rtdb.firebaseio.com/products.json'
          // { headers: myHeader }
        )
        //transform json products into obj
        .pipe(
          map((res) => {
            const products = [];
            for (const key in res) {
              if (res.hasOwnProperty(key)) {
                products.push({ ...res[key], id: key });
              }
            }
            return products;
          })
        )
    );
  }
  //delete product from database
  deleteProduct(id: string) {
    this.http
      .delete(
        'https://angularhttpclient-d6c93-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }
  //delete all product from database
  deleteAllProduct() {
    this.http
      .delete(
        'https://angularhttpclient-d6c93-default-rtdb.firebaseio.com/products/.json'
      )
      .subscribe();
  }
  //Put() Method
  editProduct(id: string | undefined, value: Products) {
    this.http
      .put(
        'https://angularhttpclient-d6c93-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .pipe()
      .subscribe(() => {});
  }
  // //error Handling
  // public handelError(error: HttpErrorResponse) {
  //   let err: '';
  //   if (error.status === 0) {
  //     // console.log('An error Occurred:', error.error.status);
  //     alert('An error Occurred:' + error.status + error.statusText);
  //   } else {
  //     // console.log(
  //     //   `Backend returned code ${error.status},body was:`,
  //     //   error.status
  //     // );
  //     alert(`Backend returned code ${error.status} ${error.statusText}`);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }
}
