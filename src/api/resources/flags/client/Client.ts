/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Flags {
    interface Options {
        environment?: environments.FliptApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Flags {
    constructor(private readonly options: Flags.Options) {}

    public async list(namespaceKey: string, request: FliptApi.FlagListRequest = {}): Promise<FliptApi.FlagList> {
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
                `/api/v1/namespaces/${namespaceKey}/flags`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.FlagList.parseOrThrow(_response.body as serializers.FlagList.Raw, {
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

    public async create(namespaceKey: string, request: FliptApi.FlagCreateRequest): Promise<FliptApi.Flag> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.FlagCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Flag.parseOrThrow(_response.body as serializers.Flag.Raw, {
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

    public async get(namespaceKey: string, key: string): Promise<FliptApi.Flag> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${key}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Flag.parseOrThrow(_response.body as serializers.Flag.Raw, {
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

    public async delete(namespaceKey: string, key: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${key}`
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
        key: string,
        request: FliptApi.FlagUpdateRequest
    ): Promise<FliptApi.Flag> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${key}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.FlagUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Flag.parseOrThrow(_response.body as serializers.Flag.Raw, {
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
}
