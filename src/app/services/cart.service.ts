import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { appSettings } from '../settings/appSettings';
import { Cart } from '../interfaces/cart';

interface State {
  carts: Cart[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private http = inject(HttpClient);
  private baseUrl = appSettings.apiUrl

  #state = signal<State>({
    loading: true,
    carts: [],
  });

  public carts = computed(() => this.#state().carts);
  public loading = computed(() => this.#state().loading);

  constructor() {
    const username = window.localStorage.getItem('use')
    const token = window.localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
    this.http.get<any[]>(`${this.baseUrl}/carrito/listarUser/${username}`,{headers})
    .subscribe((res) => {
      this.#state.set({
        loading: false,
        carts: res,
      })
      ;
    });
}
}
