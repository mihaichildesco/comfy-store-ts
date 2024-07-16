import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/state/store.ts";
import {decrement, increment, incrementByAmount, incrementAsync} from "@/state/counter/counterSlice.ts";
import {Button} from "@/components/ui/button.tsx";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <h2>{count}</h2>
            <div>
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
                <Button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
                <Button onClick={() => dispatch(incrementAsync(12))}>Increment async</Button>
            </div>
        </>
    );
}
