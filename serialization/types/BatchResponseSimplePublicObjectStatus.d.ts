/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as RolloutApi from "../../api";
import * as core from "../../core";
export declare const BatchResponseSimplePublicObjectStatus: core.serialization.Schema<serializers.BatchResponseSimplePublicObjectStatus.Raw, RolloutApi.BatchResponseSimplePublicObjectStatus>;
export declare namespace BatchResponseSimplePublicObjectStatus {
    type Raw = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
}
