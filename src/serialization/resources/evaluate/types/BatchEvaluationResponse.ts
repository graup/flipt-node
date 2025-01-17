/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const BatchEvaluationResponse: core.serialization.ObjectSchema<
    serializers.BatchEvaluationResponse.Raw,
    FliptApi.BatchEvaluationResponse
> = core.serialization.object({
    requestId: core.serialization.string(),
    responses: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).EvaluationResponse)
    ),
    requestDurationMillis: core.serialization.number(),
});

export declare namespace BatchEvaluationResponse {
    interface Raw {
        requestId: string;
        responses: serializers.EvaluationResponse.Raw[];
        requestDurationMillis: number;
    }
}
