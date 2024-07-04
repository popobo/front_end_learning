"use client";
// this does not mean, this component is not going to be rendered on server side

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // prevent the models to be rendered on the server side, hydration errors
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
