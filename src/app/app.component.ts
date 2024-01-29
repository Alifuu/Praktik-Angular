import { Component, HostListener } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
//Event Binding
 @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    console.log('di scroll:', event)
  }
  // Event Enter
  onEnterKeyPressed(event: KeyboardEvent): void {
    console.log('Tombol Enter ditekan', event);
  }
  // Event Key up
  onKeyUp(event: KeyboardEvent): void {
    console.log(`Tombol ditekan: ${event.key}`)
  }
// Event Form
  inputText : string ='';
  onSubmit(): void {
    console.log('Formulir dikirim dengan teks:', this.inputText);
  }
  // Property,Style,Class Binding
  title = 'Belajar Angular';
  public name = 'Fajar Ali Rohman';
  public isDisabled = true;
  public hasError = true;
  public titleStyles = {
    color: "purple",
    fontStyle: "italic"
  }
// mapping data sederhana
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' }
  ];

//state
pesan: string = 'Hai Dunia Maya';
ubah(){
  this.pesan = 'Pesan Diubah'
}
}
// Redux

// @select('rootReducer.pesan') pesan$: Observable<string> = new Observable<string>();;
// constructor(private ngRedux: NgRedux<AppState> ){}
// ubahPesan(){
// this.ngRedux.dispatch({ type: 'PESAN_DIUBAH'});
// }

// }
   