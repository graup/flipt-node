/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";
import * as core from "../../../core";
import * as serializers from "../..";

export const BatchEvaluationRequest: core.schemas.ObjectSchema<
  BatchEvaluationRequest.Raw,
  FliptApi.BatchEvaluationRequest
> = core.schemas.object({
  requestId: core.schemas.string().optional(),
  requests: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).EvaluationRequest)),
  excludeNotFound: core.schemas.boolean().optional(),
});

export declare namespace BatchEvaluationRequest {
  interface Raw {
    requestId?: string | null;
    requests: serializers.EvaluationRequest.Raw[];
    excludeNotFound?: boolean | null;
  }
}
