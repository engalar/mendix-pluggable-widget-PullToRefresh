import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { PullToRefreshPreviewProps } from "../typings/PullToRefreshProps";

export function getProperties(
    values: PullToRefreshPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: PullToRefreshPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
