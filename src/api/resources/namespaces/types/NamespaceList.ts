/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface NamespaceList {
    namespaces: FliptApi.Namespace[];
    nextPageToken: string;
    totalCount: number;
}
