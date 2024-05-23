"use client";

import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

export default function Overview() {
   const router = useRouter();

   return (
      <>
         <h1>Overview</h1>

         <Button onClick={() => router.push("/")}>Voltar</Button>
      </>
   );
}
