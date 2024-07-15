/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as RolloutApi from "..";
export interface SimplePublicObject {
    createdAt: Date;
    archived?: boolean;
    archivedAt?: Date;
    propertiesWithHistory?: Record<string, RolloutApi.ValueWithTimestamp[]>;
    id: string;
    properties: Record<string, string | undefined>;
    updatedAt: Date;
}
