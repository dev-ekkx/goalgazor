import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className={"flex flex-col gap-3"}>
            <Button
                aria-labelledby={"button"}
                data-button={"button"}
                variant={"ghost"}
            >
                Click me
            </Button>
        </div>
    );
}
