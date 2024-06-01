"use client";

import { NextUIProvider } from "@nextui-org/react";
import RegistrationPage from "./components/register";

export default function Home() {
  return (
    <main>
      <NextUIProvider>
        <RegistrationPage />
      </NextUIProvider>
    </main>
  );
}
