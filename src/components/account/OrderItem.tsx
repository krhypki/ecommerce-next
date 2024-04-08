"use client";

import { OrderWithRelations } from "@/lib/types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import Link from "next/link";
import { useState } from "react";
import CartItem from "../cart/CartItem";
import { Button } from "../ui/button";
import Collapse from "../ui/collapse";

type OrderItemProps = {
  order: OrderWithRelations;
};

export default function OrderItem({ order }: OrderItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = order.products.reduce(
    (price, item) => price + item.product.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="flex justify-between mb-10">
        <p>Total: {formatCurrency(totalPrice)}</p>
        <time>{formatDate(order.date)}</time>
        <Button onClick={() => setIsOpen(!isOpen)} variant="secondary">
          {isOpen ? "Hide details" : "Show details"}
        </Button>
      </div>

      <Collapse isOpen={isOpen}>
        <ul>
          {order.products.map((item) => (
            <li key={item.id}>
              <Link href={`/product/${item.product.id}`}>
                <CartItem
                  product={{ ...item.product, quantity: item.quantity }}
                  className="justify-between items-center py-4 border-b"
                >
                  <p>{formatCurrency(item.product.price * item.quantity)}</p>
                </CartItem>
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}
