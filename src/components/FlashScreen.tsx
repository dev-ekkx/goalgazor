import React from "react";
import Image from "next/image";

export default function FlashScreen() {
  return (
    <section
      className={"bg-primary flex h-dvh w-full items-center justify-center"}
    >
      <Image
        src={"/images/logo.svg"}
        alt={"Goal Gazor"}
        width={120}
        height={50}
        className={"size-auto"}
      />
    </section>
  );
}
