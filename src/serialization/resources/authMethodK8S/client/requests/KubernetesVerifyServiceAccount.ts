/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../../core";

export const KubernetesVerifyServiceAccount: core.serialization.Schema<
    serializers.KubernetesVerifyServiceAccount.Raw,
    FliptApi.KubernetesVerifyServiceAccount
> = core.serialization.object({
    serviceAccountToken: core.serialization.string(),
});

export declare namespace KubernetesVerifyServiceAccount {
    interface Raw {
        serviceAccountToken: string;
    }
}
