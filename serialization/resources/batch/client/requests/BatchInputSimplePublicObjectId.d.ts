/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as RolloutApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const BatchInputSimplePublicObjectId: core.serialization.Schema<serializers.BatchInputSimplePublicObjectId.Raw, RolloutApi.BatchInputSimplePublicObjectId>;
export declare namespace BatchInputSimplePublicObjectId {
    interface Raw {
        inputs: serializers.SimplePublicObjectId.Raw[];
    }
}
