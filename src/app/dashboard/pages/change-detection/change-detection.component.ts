import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

  <app-title [title]="curretFramework()"/>

  <pre>{{ frameworkAsSignal() | json}}</pre>
  <pre>{{ frameworkAsProperty() | json}}</pre>
  `
})
export default class ChangeDetectionComponent {

public curretFramework = computed(
  ()=> `Change detection - ${this.frameworkAsSignal().name}`
)


  public frameworkAsSignal = signal({
 name:'angular',
 releaseDate: 2016

  })

  public frameworkAsProperty = signal({
    name:'angular',
    releaseDate: 2016
     });


     constructor(){

setTimeout(() => {

  this.frameworkAsSignal.update( value => ({
   ...value,
    name: 'react'
  }))

console.log('hecho')
},3000);



     }

}
