import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CoursesContainerComponent } from "./courses-container/courses-container.component";
import { ExitFormGuard } from "./exit-form.guard";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { UsersComponent } from "./users/users.component";
import { ValidateUserGuard } from "./validate-user.guard";
import { CompCommunicationComponent } from "./comp-communication/comp-communication.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { FrameComponent } from "./frame/frame.component";
import { UserComponent } from "./user/user.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";

export const routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CoursesContainerComponent
  },
  {
    path: 'service',
    component: CompCommunicationComponent
  },
  {
    path: 'content-projection',
    component: UserComponent
  },

  {
    path: 'course/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    component: FormsComponent,
    //   canActivate: [ValidateUserGuard],
    children: [
      {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full'
      },
      {
        path: 'template',
        component: TemplateFormComponent,
        canDeactivate: [ExitFormGuard]
      },
      {
        path: 'model',
        component: ReactiveFormComponent
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'async',
    component: AsyncPipeComponent
  },
  {
    path: 'obsDemo',
    component: ObservableDemoComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(module => module.ProductsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]