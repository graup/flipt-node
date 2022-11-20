/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";
import * as core from "../../../core";

export const Distribution: core.schemas.ObjectSchema<Distribution.Raw, FliptApi.Distribution> = core.schemas.object({
  id: core.schemas.string(),
  ruleId: core.schemas.string(),
  variantId: core.schemas.string(),
  rollout: core.schemas.number(),
  createdAt: core.schemas.date(),
  updatedAt: core.schemas.date(),
});

export declare namespace Distribution {
  interface Raw {
    id: string;
    ruleId: string;
    variantId: string;
    rollout: number;
    createdAt: string;
    updatedAt: string;
  }
}
