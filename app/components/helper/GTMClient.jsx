"use client";

import dynamic from "next/dynamic";
const DynamicGTM = dynamic(() => import("@next/third-parties/google").then(mod => mod.GoogleTagManager), { ssr: false });

export default function GTMClient() {
  return <DynamicGTM gtmId={process.env.NEXT_PUBLIC_GTM} />;
} 