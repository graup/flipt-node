/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";
import * as core from "../../../core";

export interface Request {
  flagKey: string;
  id: string;
  _body: FliptApi.VariantUpdateRequest;
}

export type Response = core.APIResponse<FliptApi.Variant, FliptApi.variants.update.Error>;
export type Error = FliptApi.variants.update.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FliptApi.variants.update.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}
