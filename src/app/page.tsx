"use client";

import { Button } from "@/components/ui/button";
import useIsPwa from "@/hooks/useIsPwa";

export default function Home() {
  const isPwa = useIsPwa();
  return (
    <div className={"flex flex-col gap-3"}>
      <Button
        aria-labelledby={"button"}
        data-button={"button"}
        variant={"default"}
      >
        Click me {isPwa ? "PWA" : "Not PWA"}
      </Button>
    </div>
  );
}
