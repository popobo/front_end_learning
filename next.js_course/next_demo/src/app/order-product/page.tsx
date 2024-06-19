"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handlerClick = () => {
    console.log("Order Product");
    router.push("/");
    // router.replace("/");
    // router.back();
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handlerClick}>Place Order</button>
    </>
  );
}
