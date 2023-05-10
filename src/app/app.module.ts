import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ModalComponent } from './components/modal/modal.component';
import { BasketComponent } from './components/basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BaseComponent,
        ProductsComponent,
        ProductDetailsComponent,
        ModalComponent,
        BasketComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatDividerModule,
        MatListModule,
        MatProgressBarModule,
        MatExpansionModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
