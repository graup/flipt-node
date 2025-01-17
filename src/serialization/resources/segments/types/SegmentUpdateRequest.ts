/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const SegmentUpdateRequest: core.serialization.ObjectSchema<
    serializers.SegmentUpdateRequest.Raw,
    FliptApi.SegmentUpdateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    matchType: core.serialization.lazy(async () => (await import("../../..")).SegmentMatchType),
});

export declare namespace SegmentUpdateRequest {
    interface Raw {
        name: string;
        description: string;
        matchType: serializers.SegmentMatchType.Raw;
    }
}
