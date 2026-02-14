export interface OrderItem {
    price: number;
    qty: number;
}

export class Order {

  private static readonly MIN_ORDER_VALUE_FOR_FREE_SHIPPING = 150.0;
  private static readonly SHIPPING_PRICE = 15.0;
  private static readonly DISCOUNT_COUPON = 0.9;

  private total: number;
  private shipping: number;
  private totalWithoutDiscount: number;

  constructor(public items: OrderItem[], public coupon?: string) {
    this.total = 0;
    this.shipping = 0;

    this.totalWithoutDiscount = this.getSubTotal();

    this.shipping = this.calculateShipping(this.totalWithoutDiscount);

    this.total = this.applyDiscount(this.totalWithoutDiscount) + this.shipping;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public getSubTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

  public applyDiscount(price: number): number {
    if (this.coupon) {
      return price * Order.DISCOUNT_COUPON;
    }
    
    return price;
  }

  public calculateShipping(totalPrice: number): number {
    return totalPrice >= Order.MIN_ORDER_VALUE_FOR_FREE_SHIPPING ? 0 : Order.SHIPPING_PRICE;
  }

  public isFreeShipping(): boolean {
    return this.totalWithoutDiscount >= Order.MIN_ORDER_VALUE_FOR_FREE_SHIPPING;
  }

  public getTotal(): number {
    return this.total;
  }

  public getShipping(): number {
    return this.shipping;
  }
 
}