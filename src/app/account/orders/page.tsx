import OrderList from "@/components/account/OrderList";
import OrderListSkeleton from "@/components/skeleton/OrderListSkeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <main>
      <Heading tag="h1">Orders</Heading>
      <Card>
        <CardHeader />
        <CardContent>
          <Suspense fallback={<OrderListSkeleton />}>
            <OrderList />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}
