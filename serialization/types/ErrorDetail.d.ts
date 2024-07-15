/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as RolloutApi from "../../api";
import * as core from "../../core";
export declare const ErrorDetail: core.serialization.ObjectSchema<serializers.ErrorDetail.Raw, RolloutApi.ErrorDetail>;
export declare namespace ErrorDetail {
    interface Raw {
        subCategory?: string | null;
        code?: string | null;
        in?: string | null;
        context?: Record<string, string[]> | null;
        message: string;
    }
}
