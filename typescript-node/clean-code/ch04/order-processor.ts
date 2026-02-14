import { Order } from "./Order";
import { User } from "./User";

export function processOrder(order: Order): Order {
  if (order.isEmpty()) {
    throw new Error("Pedido vazio");
  }

  return order;
}

export function canCheckout(user: User): boolean {
  return user.isValid();
}