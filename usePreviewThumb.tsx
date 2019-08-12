import * as React from "react"
import { Frame } from "framer"
import { url } from "framer/resource"

export function usePreviewThumb() {
    // file within Framer's metadata folder
    // SVG performs best at the preview pane
    return (
        <Frame
            radius="50%"
            background={{ src: url(`../metadata/icon.svg`) }}
            size="100%"
        ></Frame>
    )
}
