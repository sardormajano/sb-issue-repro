import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'AppComponent',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            imports: [AppModule]
        })
    ]
  };

export const Basic = () => ({
    component: AppComponent,
    props: {},
  });
  
  Basic.story = {
    name: 'Basic story',
  };
  