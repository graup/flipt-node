/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface FlagList {
  flags: FliptApi.Flag[];
  nextPageToken: string;
  totalCount: number;
}
