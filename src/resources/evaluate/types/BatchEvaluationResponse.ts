/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";

export interface BatchEvaluationResponse {
  requestId: string;
  response: FliptApi.EvaluationResponse[];
  requestDurationMillis: number;
}
