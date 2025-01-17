/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Rules {
    interface Options {
        environment?: environments.FliptApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Rules {
    constructor(private readonly options: Rules.Options) {}

    public async list(
        namespaceKey: string,
        flagKey: string,
        request: FliptApi.RuleListRequest = {}
    ): Promise<FliptApi.RuleList> {
        const { limit, offset, pageToken } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (offset != null) {
            _queryParams.append("offset", offset.toString());
        }

        if (pageToken != null) {
            _queryParams.append("pageToken", pageToken);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RuleList.parseOrThrow(_response.body as serializers.RuleList.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async create(
        namespaceKey: string,
        flagKey: string,
        request: FliptApi.RuleCreateRequest
    ): Promise<FliptApi.Rule> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.RuleCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Rule.parseOrThrow(_response.body as serializers.Rule.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async order(namespaceKey: string, flagKey: string, request: FliptApi.RuleOrderRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/order`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.RuleOrderRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async get(namespaceKey: string, flagKey: string, id: string): Promise<FliptApi.Rule> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Rule.parseOrThrow(_response.body as serializers.Rule.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async delete(namespaceKey: string, flagKey: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async update(
        namespaceKey: string,
        flagKey: string,
        id: string,
        request: FliptApi.RuleUpdateRequest
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.RuleUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
