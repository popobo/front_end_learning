import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      Review Details {params.reviewId} for product {params.productId}
    </h1>
  );
}
