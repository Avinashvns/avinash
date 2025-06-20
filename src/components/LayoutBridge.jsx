"use client";
import dynamic from "next/dynamic";

const ClientWrapper = dynamic(() => import("./ClientWrapper"), { ssr: false });

export default function Body({ children }) {
  return <ClientWrapper>{children}</ClientWrapper>;
}
