"use client";

import useIsPwa from "@/hooks/useIsPwa";
import FlashScreen from "@/components/FlashScreen";

export default function Home() {
  const isPwa = useIsPwa();
  return (
    <div className={"flex flex-col gap-3"}>{!isPwa && <FlashScreen />}</div>
  );
}
