import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { PullToRefreshPreviewProps } from "../typings/PullToRefreshProps";

declare function require(name: string): string;

export function preview(props: PullToRefreshPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
