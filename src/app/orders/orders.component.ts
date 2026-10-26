import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'app-orders', standalone: true, imports: [CommonModule], template: `<ul><li *ngFor="let o of orders">{{ o.name }} - {{ o.total }}</li></ul>` })
export class OrdersComponent {
  orders = [{ name: 'Order 1', total: 120 }, { name: 'Order 2', total: 45 }];
}
