// импортируется платформа с компилятором для браузера, которая ниже подключается
// Это нужно для компиляции приложения
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';

// здесь загружается рутовый модуль
// кроме того отлавливаются ошибки, которые отображаются в консоли браузера
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
