import { getCurrentUserOrders } from "@/actions/order";
import OrderItem from "./OrderItem";

export default async function OrderList() {
  const orders = await getCurrentUserOrders();

  if (!orders.length) return <p>You don&apos;t have any orders yet.</p>;

  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id} className="py-4">
          <OrderItem order={order} />
        </li>
      ))}
    </ul>
  );
}
