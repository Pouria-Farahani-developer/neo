"use client"
import useStore from "@/lib/store/src/useCounterStore";
import { Button } from "@/components/ui/button";


function Counter() {
    const { count, inc } = useStore()
    return (
        <div>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Button variant='destructive'>Shadcn Works!</Button>
            </div>
        </div>
    )
}

export default Counter;

