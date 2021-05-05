import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RatingComponent } from './rating/rating.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersSortPipe } from './users-sort.pipe';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CourseDetailsComponent } from './course-details/course-details.component'
import { ValidateUserGuard } from './validate-user.guard';
import { ExitFormGuard } from './exit-form.guard';
import { ChildViewComponent } from './child-view/child-view.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { TimeTickerComponent } from './time-ticker/time-ticker.component';
import { routes } from './routes';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { CompCommunicationComponent } from './comp-communication/comp-communication.component';
import { InventoryCountComponent } from './inventory-count/inventory-count.component';
import { LoginComponent } from './login/login.component';
import { HttpErrorInterceptor } from './HttpErrorInterceptor';
import { AuthInterceptor } from './AuthInterceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsModule } from './products/products.module';
import { FrameComponent } from './frame/frame.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    CoursesContainerComponent,
    SidebarComponent,
    RatingComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    UsersSortPipe,
    UsersComponent,
    FormsComponent,
    CourseDetailsComponent,
    ChildViewComponent,
    AsyncPipeComponent,
    TimeTickerComponent,
    BuyComponent,
    SellComponent,
    CompCommunicationComponent,
    InventoryCountComponent,
    LoginComponent,
    NotFoundComponent,
    FrameComponent,
    UserComponent,
    MovieComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
],
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
