export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Review Details {params.reviewId} for product {params.productId}
    </h1>
  );
}
