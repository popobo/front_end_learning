import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetail({ params }: Props) {
  return <h1>Product Detail {params.productId}</h1>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};
