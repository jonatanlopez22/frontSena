import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A'|'B'|'F'|'Z';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');



  public frameworks = signal(['angular','veu','boostrap','qwik']);
  public frameworks2 = signal([]);



public toogleContent(){
  this.showContent.update(value => !value)
  this.grade.set('B')
}




}
