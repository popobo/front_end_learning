"use client";

import { X } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}

const UploadThingStyles = createGlobalStyle`
  @import url('@uploadthing/react/styles.css');
`;

const UploadContainer = styled.div`
  /* 可能需要的额外样式 */
`;

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadContainer>
      <UploadThingStyles />
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </UploadContainer>
  );
};
