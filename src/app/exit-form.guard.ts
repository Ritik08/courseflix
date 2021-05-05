import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateFormComponent } from './template-form/template-form.component';

@Injectable({
  providedIn: 'root'
})
export class ExitFormGuard implements CanDeactivate<TemplateFormComponent> {
canDeactivate(component: TemplateFormComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, 
                nextState?: RouterStateSnapshot): boolean{
      return confirm("Are you sure, you want to exit the form. You can loose out the changes done in the form.");
  }
}
