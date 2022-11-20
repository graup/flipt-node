/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";

export interface SegmentMatchType<RawValue extends SegmentMatchType.RawValue = SegmentMatchType.RawValue> {
  value: RawValue;
  visit: <_Result>(visitor: FliptApi.SegmentMatchType._Visitor<_Result>) => _Result;
}

const _AllMatchType: SegmentMatchType<"ALL_MATCH_TYPE"> = {
  value: "ALL_MATCH_TYPE",
  visit: (visitor) => visitor.allMatchType(),
};
const _AnyMatchType: SegmentMatchType<"ANY_MATCH_TYPE"> = {
  value: "ANY_MATCH_TYPE",
  visit: (visitor) => visitor.anyMatchType(),
};
export const SegmentMatchType = {
  AllMatchType: _AllMatchType,
  AnyMatchType: _AnyMatchType,
  _parse: (value: string): SegmentMatchType => {
    switch (value) {
      case "ALL_MATCH_TYPE": {
        return _AllMatchType;
      }
      case "ANY_MATCH_TYPE": {
        return _AnyMatchType;
      }
      default: {
        return {
          value: value as SegmentMatchType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace SegmentMatchType {
  type RawValue = "ALL_MATCH_TYPE" | "ANY_MATCH_TYPE";

  interface _Visitor<_Result> {
    allMatchType: () => _Result;
    anyMatchType: () => _Result;
    _other: (value: string) => _Result;
  }
}