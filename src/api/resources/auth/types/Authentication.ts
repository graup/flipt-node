/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface Authentication {
    id: string;
    method: FliptApi.AuthenticationMethod;
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
    metadata: Record<string, string | undefined>;
}
