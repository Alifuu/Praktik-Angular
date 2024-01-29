import { Component,input,OnInit,OnChanges,OnDestroy, SimpleChanges } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  private namaData: Subscription = new Subscription;
  public nilaiData: number = 0;

  constructor(private homeService: HomeService){
    console.log('Constructor berhasil')
  }
   ngOnInit(): void {
    this.namaData = this.homeService.getData().subscribe(value =>{
      this.nilaiData = value;
    })
     console.log('Ini ng OnInit')
    //  Dipanggil setelah Angular menginisialisasi komponen.
   }
   ngOnChanges(changes: SimpleChanges): void {
     console.log('ini OnChanges')
    //   Dipanggil setiap kali nilai input dari komponen berubah.
   }
   ngOnDestroy(): void {
    console.log('ini OnDestroy')
    this.namaData.unsubscribe();
    //  Dipanggil sebelum Angular menghancurkan komponen.
   }
}