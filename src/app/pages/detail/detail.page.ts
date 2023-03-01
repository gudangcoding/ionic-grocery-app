import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  itemId: number;
  product!: Product;
  relatedItems!: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.itemId = +this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.product = this.productService.getById(this.itemId);
    this.relatedItems = this.productService
      .getAll()
      .filter((item) => item.id !== this.product.id);
  }
}
