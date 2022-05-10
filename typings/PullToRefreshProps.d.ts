/**
 * This file was generated from PullToRefresh.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListWidgetValue } from "mendix";
import { Big } from "big.js";

export interface PullToRefreshContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tpl: ListWidgetValue;
    datasource: ListValue;
    nextId: EditableValue<Big>;
    actionRefresh?: ActionValue;
}

export interface PullToRefreshPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    tpl: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    datasource: {} | { type: string } | null;
    nextId: string;
    actionRefresh: {} | null;
}
