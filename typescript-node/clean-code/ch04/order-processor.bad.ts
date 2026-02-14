/**
 * Processa pedidos
 */

// valor minimo para frete gratis
const MIN_FREE_SHIP = 150.0;

interface OrderItem {
  price: number;
  qty: number;
}

interface Order {
  items: OrderItem[];
  coupon?: string;
  total?: number;
  shipping?: number;
  free_shipping?: boolean;
}

interface User {
  name: string;
  email: string;
}

/**
 * Processa o pedido do usuario
 * @param o - O pedido
 * @returns true se processou com sucesso
 */
export function processOrder(o: Order): boolean {
  // verifica se o pedido tem itens
  if (o.items.length === 0) {
    return false;
  }

  // calcula o total
  let t = 0;
  for (const i of o.items) {
    // soma preco * quantidade
    t += i.price * i.qty;
  }

  // aplica desconto se tiver cupom
  if (o.coupon) {
    // 10% de desconto
    t = t * 0.9;
  }

  // verifica se o usuario pode ter frete gratis
  const fs = t >= MIN_FREE_SHIP;

  // define o valor do frete
  const shipping = fs ? 0 : 15.0;

  // total final
  const total = t + shipping;

  // salva no objeto de saida
  o.total = total;
  o.shipping = shipping;
  o.free_shipping = fs;

  // retorna verdadeiro se deu certo
  return true;
}

/**
 * Valida se o usuario pode finalizar
 * @param u - usuario
 * @returns true se pode fazer checkout
 */
export function canCheckout(u: User): boolean {
  // verifica se tem nome
  if (!u.name?.trim()) {
    return false;
  }
  // verifica se tem email
  if (!u.email?.trim()) {
    return false;
  }
  // verifica se o email eh valido - formato basico
  if (!u.email.includes('@')) {
    return false;
  }
  // ta tudo ok
  return true;
}
