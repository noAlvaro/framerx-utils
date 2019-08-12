import { transform } from "framer"
import { easedProgress } from "./easedProgress"

export function easedTransform(
    input,
    inputRange,
    outputRange,
    curve,
    options = { clamp: true }
) {
    return transform(
        easedProgress[curve](input),
        inputRange,
        outputRange,
        options
    )
}
