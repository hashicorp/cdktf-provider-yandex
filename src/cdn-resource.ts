// https://www.terraform.io/docs/providers/yandex/r/cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#active CdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#cname CdnResource#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#origin_group_id CdnResource#origin_group_id}
  */
  readonly originGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#origin_group_name CdnResource#origin_group_name}
  */
  readonly originGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#origin_protocol CdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#secondary_hostnames CdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#updated_at CdnResource#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#options CdnResource#options}
  */
  readonly options?: CdnResourceOptions;
  /**
  * ssl_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#ssl_certificate CdnResource#ssl_certificate}
  */
  readonly sslCertificate?: CdnResourceSslCertificate;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#timeouts CdnResource#timeouts}
  */
  readonly timeouts?: CdnResourceTimeouts;
}
export interface CdnResourceOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#allowed_http_methods CdnResource#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#browser_cache_settings CdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#cache_http_headers CdnResource#cache_http_headers}
  */
  readonly cacheHttpHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#cors CdnResource#cors}
  */
  readonly cors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#custom_host_header CdnResource#custom_host_header}
  */
  readonly customHostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#custom_server_name CdnResource#custom_server_name}
  */
  readonly customServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#disable_cache CdnResource#disable_cache}
  */
  readonly disableCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#disable_proxy_force_ranges CdnResource#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#edge_cache_settings CdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#fetched_compressed CdnResource#fetched_compressed}
  */
  readonly fetchedCompressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#forward_host_header CdnResource#forward_host_header}
  */
  readonly forwardHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#gzip_on CdnResource#gzip_on}
  */
  readonly gzipOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#ignore_cookie CdnResource#ignore_cookie}
  */
  readonly ignoreCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#ignore_query_params CdnResource#ignore_query_params}
  */
  readonly ignoreQueryParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#proxy_cache_methods_set CdnResource#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#query_params_blacklist CdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#query_params_whitelist CdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#redirect_http_to_https CdnResource#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#redirect_https_to_http CdnResource#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#slice CdnResource#slice}
  */
  readonly slice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#static_request_headers CdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#static_response_headers CdnResource#static_response_headers}
  */
  readonly staticResponseHeaders?: { [key: string]: string };
}

export function cdnResourceOptionsToTerraform(struct?: CdnResourceOptionsOutputReference | CdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHttpMethods),
    browser_cache_settings: cdktf.numberToTerraform(struct!.browserCacheSettings),
    cache_http_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cacheHttpHeaders),
    cors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cors),
    custom_host_header: cdktf.stringToTerraform(struct!.customHostHeader),
    custom_server_name: cdktf.stringToTerraform(struct!.customServerName),
    disable_cache: cdktf.booleanToTerraform(struct!.disableCache),
    disable_proxy_force_ranges: cdktf.booleanToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdktf.numberToTerraform(struct!.edgeCacheSettings),
    fetched_compressed: cdktf.booleanToTerraform(struct!.fetchedCompressed),
    forward_host_header: cdktf.booleanToTerraform(struct!.forwardHostHeader),
    gzip_on: cdktf.booleanToTerraform(struct!.gzipOn),
    ignore_cookie: cdktf.booleanToTerraform(struct!.ignoreCookie),
    ignore_query_params: cdktf.booleanToTerraform(struct!.ignoreQueryParams),
    proxy_cache_methods_set: cdktf.booleanToTerraform(struct!.proxyCacheMethodsSet),
    query_params_blacklist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryParamsBlacklist),
    query_params_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryParamsWhitelist),
    redirect_http_to_https: cdktf.booleanToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdktf.booleanToTerraform(struct!.redirectHttpsToHttp),
    slice: cdktf.booleanToTerraform(struct!.slice),
    static_request_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.staticRequestHeaders),
    static_response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticResponseHeaders),
  }
}

export class CdnResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._browserCacheSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheSettings = this._browserCacheSettings;
    }
    if (this._cacheHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHttpHeaders = this._cacheHttpHeaders;
    }
    if (this._cors !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors;
    }
    if (this._customHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostHeader = this._customHostHeader;
    }
    if (this._customServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customServerName = this._customServerName;
    }
    if (this._disableCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCache = this._disableCache;
    }
    if (this._disableProxyForceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyForceRanges = this._disableProxyForceRanges;
    }
    if (this._edgeCacheSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings;
    }
    if (this._fetchedCompressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchedCompressed = this._fetchedCompressed;
    }
    if (this._forwardHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHostHeader = this._forwardHostHeader;
    }
    if (this._gzipOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipOn = this._gzipOn;
    }
    if (this._ignoreCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCookie = this._ignoreCookie;
    }
    if (this._ignoreQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryParams = this._ignoreQueryParams;
    }
    if (this._proxyCacheMethodsSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCacheMethodsSet = this._proxyCacheMethodsSet;
    }
    if (this._queryParamsBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist;
    }
    if (this._queryParamsWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist;
    }
    if (this._redirectHttpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpToHttps = this._redirectHttpToHttps;
    }
    if (this._redirectHttpsToHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpsToHttp = this._redirectHttpsToHttp;
    }
    if (this._slice !== undefined) {
      hasAnyValues = true;
      internalValueResult.slice = this._slice;
    }
    if (this._staticRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRequestHeaders = this._staticRequestHeaders;
    }
    if (this._staticResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticResponseHeaders = this._staticResponseHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._browserCacheSettings = undefined;
      this._cacheHttpHeaders = undefined;
      this._cors = undefined;
      this._customHostHeader = undefined;
      this._customServerName = undefined;
      this._disableCache = undefined;
      this._disableProxyForceRanges = undefined;
      this._edgeCacheSettings = undefined;
      this._fetchedCompressed = undefined;
      this._forwardHostHeader = undefined;
      this._gzipOn = undefined;
      this._ignoreCookie = undefined;
      this._ignoreQueryParams = undefined;
      this._proxyCacheMethodsSet = undefined;
      this._queryParamsBlacklist = undefined;
      this._queryParamsWhitelist = undefined;
      this._redirectHttpToHttps = undefined;
      this._redirectHttpsToHttp = undefined;
      this._slice = undefined;
      this._staticRequestHeaders = undefined;
      this._staticResponseHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._browserCacheSettings = value.browserCacheSettings;
      this._cacheHttpHeaders = value.cacheHttpHeaders;
      this._cors = value.cors;
      this._customHostHeader = value.customHostHeader;
      this._customServerName = value.customServerName;
      this._disableCache = value.disableCache;
      this._disableProxyForceRanges = value.disableProxyForceRanges;
      this._edgeCacheSettings = value.edgeCacheSettings;
      this._fetchedCompressed = value.fetchedCompressed;
      this._forwardHostHeader = value.forwardHostHeader;
      this._gzipOn = value.gzipOn;
      this._ignoreCookie = value.ignoreCookie;
      this._ignoreQueryParams = value.ignoreQueryParams;
      this._proxyCacheMethodsSet = value.proxyCacheMethodsSet;
      this._queryParamsBlacklist = value.queryParamsBlacklist;
      this._queryParamsWhitelist = value.queryParamsWhitelist;
      this._redirectHttpToHttps = value.redirectHttpToHttps;
      this._redirectHttpsToHttp = value.redirectHttpsToHttp;
      this._slice = value.slice;
      this._staticRequestHeaders = value.staticRequestHeaders;
      this._staticResponseHeaders = value.staticResponseHeaders;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // browser_cache_settings - computed: true, optional: true, required: false
  private _browserCacheSettings?: number; 
  public get browserCacheSettings() {
    return this.getNumberAttribute('browser_cache_settings');
  }
  public set browserCacheSettings(value: number) {
    this._browserCacheSettings = value;
  }
  public resetBrowserCacheSettings() {
    this._browserCacheSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheSettingsInput() {
    return this._browserCacheSettings;
  }

  // cache_http_headers - computed: true, optional: true, required: false
  private _cacheHttpHeaders?: string[]; 
  public get cacheHttpHeaders() {
    return this.getListAttribute('cache_http_headers');
  }
  public set cacheHttpHeaders(value: string[]) {
    this._cacheHttpHeaders = value;
  }
  public resetCacheHttpHeaders() {
    this._cacheHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHttpHeadersInput() {
    return this._cacheHttpHeaders;
  }

  // cors - computed: true, optional: true, required: false
  private _cors?: string[]; 
  public get cors() {
    return this.getListAttribute('cors');
  }
  public set cors(value: string[]) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // custom_host_header - computed: true, optional: true, required: false
  private _customHostHeader?: string; 
  public get customHostHeader() {
    return this.getStringAttribute('custom_host_header');
  }
  public set customHostHeader(value: string) {
    this._customHostHeader = value;
  }
  public resetCustomHostHeader() {
    this._customHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostHeaderInput() {
    return this._customHostHeader;
  }

  // custom_server_name - computed: true, optional: true, required: false
  private _customServerName?: string; 
  public get customServerName() {
    return this.getStringAttribute('custom_server_name');
  }
  public set customServerName(value: string) {
    this._customServerName = value;
  }
  public resetCustomServerName() {
    this._customServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServerNameInput() {
    return this._customServerName;
  }

  // disable_cache - computed: true, optional: true, required: false
  private _disableCache?: boolean | cdktf.IResolvable; 
  public get disableCache() {
    return this.getBooleanAttribute('disable_cache');
  }
  public set disableCache(value: boolean | cdktf.IResolvable) {
    this._disableCache = value;
  }
  public resetDisableCache() {
    this._disableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheInput() {
    return this._disableCache;
  }

  // disable_proxy_force_ranges - computed: true, optional: true, required: false
  private _disableProxyForceRanges?: boolean | cdktf.IResolvable; 
  public get disableProxyForceRanges() {
    return this.getBooleanAttribute('disable_proxy_force_ranges');
  }
  public set disableProxyForceRanges(value: boolean | cdktf.IResolvable) {
    this._disableProxyForceRanges = value;
  }
  public resetDisableProxyForceRanges() {
    this._disableProxyForceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyForceRangesInput() {
    return this._disableProxyForceRanges;
  }

  // edge_cache_settings - computed: true, optional: true, required: false
  private _edgeCacheSettings?: number; 
  public get edgeCacheSettings() {
    return this.getNumberAttribute('edge_cache_settings');
  }
  public set edgeCacheSettings(value: number) {
    this._edgeCacheSettings = value;
  }
  public resetEdgeCacheSettings() {
    this._edgeCacheSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheSettingsInput() {
    return this._edgeCacheSettings;
  }

  // fetched_compressed - computed: true, optional: true, required: false
  private _fetchedCompressed?: boolean | cdktf.IResolvable; 
  public get fetchedCompressed() {
    return this.getBooleanAttribute('fetched_compressed');
  }
  public set fetchedCompressed(value: boolean | cdktf.IResolvable) {
    this._fetchedCompressed = value;
  }
  public resetFetchedCompressed() {
    this._fetchedCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchedCompressedInput() {
    return this._fetchedCompressed;
  }

  // forward_host_header - computed: true, optional: true, required: false
  private _forwardHostHeader?: boolean | cdktf.IResolvable; 
  public get forwardHostHeader() {
    return this.getBooleanAttribute('forward_host_header');
  }
  public set forwardHostHeader(value: boolean | cdktf.IResolvable) {
    this._forwardHostHeader = value;
  }
  public resetForwardHostHeader() {
    this._forwardHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostHeaderInput() {
    return this._forwardHostHeader;
  }

  // gzip_on - computed: true, optional: true, required: false
  private _gzipOn?: boolean | cdktf.IResolvable; 
  public get gzipOn() {
    return this.getBooleanAttribute('gzip_on');
  }
  public set gzipOn(value: boolean | cdktf.IResolvable) {
    this._gzipOn = value;
  }
  public resetGzipOn() {
    this._gzipOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipOnInput() {
    return this._gzipOn;
  }

  // ignore_cookie - computed: true, optional: true, required: false
  private _ignoreCookie?: boolean | cdktf.IResolvable; 
  public get ignoreCookie() {
    return this.getBooleanAttribute('ignore_cookie');
  }
  public set ignoreCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreCookie = value;
  }
  public resetIgnoreCookie() {
    this._ignoreCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCookieInput() {
    return this._ignoreCookie;
  }

  // ignore_query_params - computed: true, optional: true, required: false
  private _ignoreQueryParams?: boolean | cdktf.IResolvable; 
  public get ignoreQueryParams() {
    return this.getBooleanAttribute('ignore_query_params');
  }
  public set ignoreQueryParams(value: boolean | cdktf.IResolvable) {
    this._ignoreQueryParams = value;
  }
  public resetIgnoreQueryParams() {
    this._ignoreQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryParamsInput() {
    return this._ignoreQueryParams;
  }

  // proxy_cache_methods_set - computed: true, optional: true, required: false
  private _proxyCacheMethodsSet?: boolean | cdktf.IResolvable; 
  public get proxyCacheMethodsSet() {
    return this.getBooleanAttribute('proxy_cache_methods_set');
  }
  public set proxyCacheMethodsSet(value: boolean | cdktf.IResolvable) {
    this._proxyCacheMethodsSet = value;
  }
  public resetProxyCacheMethodsSet() {
    this._proxyCacheMethodsSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCacheMethodsSetInput() {
    return this._proxyCacheMethodsSet;
  }

  // query_params_blacklist - computed: true, optional: true, required: false
  private _queryParamsBlacklist?: string[]; 
  public get queryParamsBlacklist() {
    return this.getListAttribute('query_params_blacklist');
  }
  public set queryParamsBlacklist(value: string[]) {
    this._queryParamsBlacklist = value;
  }
  public resetQueryParamsBlacklist() {
    this._queryParamsBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsBlacklistInput() {
    return this._queryParamsBlacklist;
  }

  // query_params_whitelist - computed: true, optional: true, required: false
  private _queryParamsWhitelist?: string[]; 
  public get queryParamsWhitelist() {
    return this.getListAttribute('query_params_whitelist');
  }
  public set queryParamsWhitelist(value: string[]) {
    this._queryParamsWhitelist = value;
  }
  public resetQueryParamsWhitelist() {
    this._queryParamsWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsWhitelistInput() {
    return this._queryParamsWhitelist;
  }

  // redirect_http_to_https - computed: true, optional: true, required: false
  private _redirectHttpToHttps?: boolean | cdktf.IResolvable; 
  public get redirectHttpToHttps() {
    return this.getBooleanAttribute('redirect_http_to_https');
  }
  public set redirectHttpToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectHttpToHttps = value;
  }
  public resetRedirectHttpToHttps() {
    this._redirectHttpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps;
  }

  // redirect_https_to_http - computed: true, optional: true, required: false
  private _redirectHttpsToHttp?: boolean | cdktf.IResolvable; 
  public get redirectHttpsToHttp() {
    return this.getBooleanAttribute('redirect_https_to_http');
  }
  public set redirectHttpsToHttp(value: boolean | cdktf.IResolvable) {
    this._redirectHttpsToHttp = value;
  }
  public resetRedirectHttpsToHttp() {
    this._redirectHttpsToHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpsToHttpInput() {
    return this._redirectHttpsToHttp;
  }

  // slice - computed: true, optional: true, required: false
  private _slice?: boolean | cdktf.IResolvable; 
  public get slice() {
    return this.getBooleanAttribute('slice');
  }
  public set slice(value: boolean | cdktf.IResolvable) {
    this._slice = value;
  }
  public resetSlice() {
    this._slice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice;
  }

  // static_request_headers - computed: true, optional: true, required: false
  private _staticRequestHeaders?: string[]; 
  public get staticRequestHeaders() {
    return this.getListAttribute('static_request_headers');
  }
  public set staticRequestHeaders(value: string[]) {
    this._staticRequestHeaders = value;
  }
  public resetStaticRequestHeaders() {
    this._staticRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRequestHeadersInput() {
    return this._staticRequestHeaders;
  }

  // static_response_headers - computed: true, optional: true, required: false
  private _staticResponseHeaders?: { [key: string]: string }; 
  public get staticResponseHeaders() {
    return this.getStringMapAttribute('static_response_headers');
  }
  public set staticResponseHeaders(value: { [key: string]: string }) {
    this._staticResponseHeaders = value;
  }
  public resetStaticResponseHeaders() {
    this._staticResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResponseHeadersInput() {
    return this._staticResponseHeaders;
  }
}
export interface CdnResourceSslCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#certificate_manager_id CdnResource#certificate_manager_id}
  */
  readonly certificateManagerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#type CdnResource#type}
  */
  readonly type: string;
}

export function cdnResourceSslCertificateToTerraform(struct?: CdnResourceSslCertificateOutputReference | CdnResourceSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_manager_id: cdktf.stringToTerraform(struct!.certificateManagerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CdnResourceSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceSslCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateManagerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateManagerId = this._certificateManagerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceSslCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateManagerId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateManagerId = value.certificateManagerId;
      this._type = value.type;
    }
  }

  // certificate_manager_id - computed: false, optional: true, required: false
  private _certificateManagerId?: string; 
  public get certificateManagerId() {
    return this.getStringAttribute('certificate_manager_id');
  }
  public set certificateManagerId(value: string) {
    this._certificateManagerId = value;
  }
  public resetCertificateManagerId() {
    this._certificateManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagerIdInput() {
    return this._certificateManagerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#create CdnResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#delete CdnResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource#update CdnResource#update}
  */
  readonly update?: string;
}

export function cdnResourceTimeoutsToTerraform(struct?: CdnResourceTimeoutsOutputReference | CdnResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CdnResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource yandex_cdn_resource}
*/
export class CdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cdn_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/cdn_resource yandex_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CdnResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.73.0',
        providerVersionConstraint: '~> 0.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._cname = config.cname;
    this._originGroupId = config.originGroupId;
    this._originGroupName = config.originGroupName;
    this._originProtocol = config.originProtocol;
    this._secondaryHostnames = config.secondaryHostnames;
    this._updatedAt = config.updatedAt;
    this._options.internalValue = config.options;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cname - computed: true, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_group_id - computed: false, optional: true, required: false
  private _originGroupId?: number; 
  public get originGroupId() {
    return this.getNumberAttribute('origin_group_id');
  }
  public set originGroupId(value: number) {
    this._originGroupId = value;
  }
  public resetOriginGroupId() {
    this._originGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupIdInput() {
    return this._originGroupId;
  }

  // origin_group_name - computed: false, optional: true, required: false
  private _originGroupName?: string; 
  public get originGroupName() {
    return this.getStringAttribute('origin_group_name');
  }
  public set originGroupName(value: string) {
    this._originGroupName = value;
  }
  public resetOriginGroupName() {
    this._originGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupNameInput() {
    return this._originGroupName;
  }

  // origin_protocol - computed: false, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // secondary_hostnames - computed: false, optional: true, required: false
  private _secondaryHostnames?: string[]; 
  public get secondaryHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_hostnames'));
  }
  public set secondaryHostnames(value: string[]) {
    this._secondaryHostnames = value;
  }
  public resetSecondaryHostnames() {
    this._secondaryHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryHostnamesInput() {
    return this._secondaryHostnames;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // options - computed: false, optional: true, required: false
  private _options = new CdnResourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CdnResourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate = new CdnResourceSslCertificateOutputReference(this, "ssl_certificate");
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: CdnResourceSslCertificate) {
    this._sslCertificate.internalValue = value;
  }
  public resetSslCertificate() {
    this._sslCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cname: cdktf.stringToTerraform(this._cname),
      origin_group_id: cdktf.numberToTerraform(this._originGroupId),
      origin_group_name: cdktf.stringToTerraform(this._originGroupName),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryHostnames),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      options: cdnResourceOptionsToTerraform(this._options.internalValue),
      ssl_certificate: cdnResourceSslCertificateToTerraform(this._sslCertificate.internalValue),
      timeouts: cdnResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
