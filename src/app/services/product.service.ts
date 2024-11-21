import { Product } from './../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { appSettings } from '../settings/appSettings';

interface State {
  products: Product[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = appSettings.apiUrl

  #state = signal<State>({
    loading: true,
    products: [],
  });

  public products = computed(() => this.#state().products);
  public loading = computed(() => this.#state().loading);

  constructor() {
    const token = window.localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
    this.http.get<any[]>(`${this.baseUrl}/producto/listar`,{headers})
    .subscribe((res) => {
      this.#state.set({
        loading: false,
        products: res,
      })
      ;
    });
}

getProduc(id:string){
  const token = window.localStorage.getItem('token')
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  this.http.get<any[]>(`${this.baseUrl}/producto/listarId/${id}`,{headers})
  .subscribe((res) => {
    this.#state.set({
      loading: false,
      products: res,
    })
    ;
  });

}

  }



