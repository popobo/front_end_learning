import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      Review Details {params.reviewId} for product {params.productId}
    </h1>
  );
}
