import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HeroService } from './sevices/hero.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsevalueComponent } from './ProviderTypes/usevalue/usevalue.component';
import { UseexistingComponent } from './ProviderTypes/useexisting/useexisting.component';
import { UsefactorComponent } from './ProviderTypes/usefactor/usefactor.component';
import { LoggerService } from './ProviderTypes/usefactor/logger.service';
import { Product } from './ProviderTypes/usefactor/product';
import { ProductService } from './ProviderTypes/usefactor/product.service';
import { FakeProductService } from './ProviderTypes/usefactor/fake-product.service';
import { NewProductService } from './ProviderTypes/useexisting/new-product.service';
import { InjectionToken } from '@angular/core';

const APP_CONFIG =Object.freeze(
  {
    serviceURL: 'www.serviceUrl.comapi',
    IsDevleomentMode: true
  });
  export const APP_CONFIG_TOKEN = new InjectionToken <any>("APP_CONFIG")
@NgModule({
  declarations: [
    AppComponent,
    UsevalueComponent,
    UseexistingComponent,
    UsefactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    HeroService,
    {provide:"USE_FAKE" , useValue:false},
    {provide: APP_CONFIG_TOKEN , useValue:APP_CONFIG},
    {provide:"Func" , useValue :()=>{
      return 55;
    }},
    //useFactor
    {provide:LoggerService,useClass:LoggerService},
    {provide:ProductService, 
      useFactory:resolveProductService,
      deps: ['USE_FAKE', LoggerService],
    },

    //useExisting
    { provide: ProductService, useExisting: NewProductService },
    { provide: NewProductService, useClass: NewProductService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function resolveProductService(USE_FAKE:boolean, LoggerService:any) {
  return USE_FAKE
    ? new FakeProductService()
    : new ProductService(LoggerService);
}