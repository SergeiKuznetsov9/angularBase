// Ангуляр приложение имеет модульную архитектуру. Оно состоит их одного главного модуля и прочих второстепеннных
// Модуль по сути - это контейнер, в котором находятся части приложения
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { RoutesComponent } from './routes/routes.component';
import { ListRout1Component } from './routes/list-rout1/list-rout1.component';
import { ListRout2Component } from './routes/list-rout2/list-rout2.component';
import { StylesComponent } from './styles/styles.component';
import { TopicComponent } from './styles/topic/topic.component';
import { PersonComponent } from './person/person.component';
import { DetailsComponent } from './person/details/details.component';
import { TimersComponent } from './timers/timers.component';
import { TimerItemComponent } from './timers/timer-item/timer-item.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { SpoilersComponent } from './spoilers/spoilers.component';
import { SpoilerItemComponent } from './spoilers/spoiler-item/spoiler-item.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ComponentWithHooksComponent } from './life-cycle/component-with-hooks/component-with-hooks.component';
import { BlockComponent } from './block/block.component';
import { BlockItemComponent } from './block/block-item/block-item.component';
import { ListHostComponent } from './list-host/list-host.component';
import { ListItemComponent } from './list-host/list-item/list-item.component';
import { ListHostComponentComponent } from './list-host/list-host-component/list-host-component.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { StructureDirComponent } from './structure-dir/structure-dir.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';


// Класс становится той или иной сущностью Angular Только лишь благодаря декоратору
// @NgModule - это декоратор модуля
// Объект, передаваемый в декоратор называется метаданными,
// Декоратор с метаданными называется аннотацией


@NgModule({

  // все, что используется в модуле(компоненты, дирррективы, пайпы и т.д)
  declarations: [
    AppComponent,
    ListComponent,
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    RoutesComponent,
    ListRout1Component,
    ListRout2Component,
    StylesComponent,
    TopicComponent,
    PersonComponent,
    DetailsComponent,
    TimersComponent,
    TimerItemComponent,
    UsersComponent,
    UserDetailsComponent,
    SpoilersComponent,
    SpoilerItemComponent,
    LifeCycleComponent,
    ComponentWithHooksComponent,
    BlockComponent,
    BlockItemComponent,
    ListHostComponent,
    ListItemComponent,
    ListHostComponentComponent,
    ClassBindingComponent,
    TwoWayBindingComponent,
    NgClassDirComponent,
    StructureDirComponent,
    TemplateRefComponent,
  ],

  // Это свойство позволяет сделать доступным компоненты этого модуля в другом, более высокоуровневом
  exports: [],

  // Здесь указывают модули, необходимые для работы этого модуля
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  // указываются необходимые для работы модуля сервисы
  providers: [],

  // указывается корневой компонент модуля
  bootstrap: [AppComponent]
})
export class AppModule { }
