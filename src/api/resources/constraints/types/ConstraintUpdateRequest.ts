/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface ConstraintUpdateRequest {
    type: FliptApi.ConstraintComparisonType;
    property: string;
    operator: string;
    value?: string;
    description?: string;
}
