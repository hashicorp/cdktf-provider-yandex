// https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#description AlbLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#folder_id AlbLoadBalancer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#labels AlbLoadBalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#network_id AlbLoadBalancer#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#region_id AlbLoadBalancer#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#security_group_ids AlbLoadBalancer#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * allocation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#allocation_policy AlbLoadBalancer#allocation_policy}
  */
  readonly allocationPolicy: AlbLoadBalancerAllocationPolicy;
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#listener AlbLoadBalancer#listener}
  */
  readonly listener?: AlbLoadBalancerListener[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#timeouts AlbLoadBalancer#timeouts}
  */
  readonly timeouts?: AlbLoadBalancerTimeouts;
}
export interface AlbLoadBalancerAllocationPolicyLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#disable_traffic AlbLoadBalancer#disable_traffic}
  */
  readonly disableTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#subnet_id AlbLoadBalancer#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#zone_id AlbLoadBalancer#zone_id}
  */
  readonly zoneId: string;
}

export function albLoadBalancerAllocationPolicyLocationToTerraform(struct?: AlbLoadBalancerAllocationPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_traffic: cdktf.booleanToTerraform(struct!.disableTraffic),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export interface AlbLoadBalancerAllocationPolicy {
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#location AlbLoadBalancer#location}
  */
  readonly location: AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable;
}

export function albLoadBalancerAllocationPolicyToTerraform(struct?: AlbLoadBalancerAllocationPolicyOutputReference | AlbLoadBalancerAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(albLoadBalancerAllocationPolicyLocationToTerraform)(struct!.location),
  }
}

export class AlbLoadBalancerAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable; 
  public get location() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('location')));
  }
  public set location(value: AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface AlbLoadBalancerListenerEndpointAddressExternalIpv4Address {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
}

export function albLoadBalancerListenerEndpointAddressExternalIpv4AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}

export class AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface AlbLoadBalancerListenerEndpointAddressExternalIpv6Address {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
}

export function albLoadBalancerListenerEndpointAddressExternalIpv6AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}

export class AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface AlbLoadBalancerListenerEndpointAddressInternalIpv4Address {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#subnet_id AlbLoadBalancer#subnet_id}
  */
  readonly subnetId?: string;
}

export function albLoadBalancerListenerEndpointAddressInternalIpv4AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressInternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._subnetId = value.subnetId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface AlbLoadBalancerListenerEndpointAddress {
  /**
  * external_ipv4_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#external_ipv4_address AlbLoadBalancer#external_ipv4_address}
  */
  readonly externalIpv4Address?: AlbLoadBalancerListenerEndpointAddressExternalIpv4Address;
  /**
  * external_ipv6_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#external_ipv6_address AlbLoadBalancer#external_ipv6_address}
  */
  readonly externalIpv6Address?: AlbLoadBalancerListenerEndpointAddressExternalIpv6Address;
  /**
  * internal_ipv4_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#internal_ipv4_address AlbLoadBalancer#internal_ipv4_address}
  */
  readonly internalIpv4Address?: AlbLoadBalancerListenerEndpointAddressInternalIpv4Address;
}

export function albLoadBalancerListenerEndpointAddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ipv4_address: albLoadBalancerListenerEndpointAddressExternalIpv4AddressToTerraform(struct!.externalIpv4Address),
    external_ipv6_address: albLoadBalancerListenerEndpointAddressExternalIpv6AddressToTerraform(struct!.externalIpv6Address),
    internal_ipv4_address: albLoadBalancerListenerEndpointAddressInternalIpv4AddressToTerraform(struct!.internalIpv4Address),
  }
}

export interface AlbLoadBalancerListenerEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#ports AlbLoadBalancer#ports}
  */
  readonly ports: number[];
  /**
  * address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address: AlbLoadBalancerListenerEndpointAddress[] | cdktf.IResolvable;
}

export function albLoadBalancerListenerEndpointToTerraform(struct?: AlbLoadBalancerListenerEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    address: cdktf.listMapper(albLoadBalancerListenerEndpointAddressToTerraform)(struct!.address),
  }
}

export interface AlbLoadBalancerListenerHttpHandlerHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}

export class AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerHttpHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * http2_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerHttpHandlerOutputReference | AlbLoadBalancerListenerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    http2_options: albLoadBalancerListenerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}

export class AlbLoadBalancerListenerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerHttpRedirects {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_to_https AlbLoadBalancer#http_to_https}
  */
  readonly httpToHttps?: boolean | cdktf.IResolvable;
}

export function albLoadBalancerListenerHttpRedirectsToTerraform(struct?: AlbLoadBalancerListenerHttpRedirectsOutputReference | AlbLoadBalancerListenerHttpRedirects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_to_https: cdktf.booleanToTerraform(struct!.httpToHttps),
  }
}

export class AlbLoadBalancerListenerHttpRedirectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpRedirects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpToHttps = this._httpToHttps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpRedirects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpToHttps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpToHttps = value.httpToHttps;
    }
  }

  // http_to_https - computed: false, optional: true, required: false
  private _httpToHttps?: boolean | cdktf.IResolvable; 
  public get httpToHttps() {
    return this.getBooleanAttribute('http_to_https');
  }
  public set httpToHttps(value: boolean | cdktf.IResolvable) {
    this._httpToHttps = value;
  }
  public resetHttpToHttps() {
    this._httpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToHttpsInput() {
    return this._httpToHttps;
  }
}
export interface AlbLoadBalancerListenerHttp {
  /**
  * handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler?: AlbLoadBalancerListenerHttpHandler;
  /**
  * redirects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#redirects AlbLoadBalancer#redirects}
  */
  readonly redirects?: AlbLoadBalancerListenerHttpRedirects;
}

export function albLoadBalancerListenerHttpToTerraform(struct?: AlbLoadBalancerListenerHttpOutputReference | AlbLoadBalancerListenerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: albLoadBalancerListenerHttpHandlerToTerraform(struct!.handler),
    redirects: albLoadBalancerListenerHttpRedirectsToTerraform(struct!.redirects),
  }
}

export class AlbLoadBalancerListenerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler?.internalValue;
    }
    if (this._redirects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirects = this._redirects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler.internalValue = undefined;
      this._redirects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler.internalValue = value.handler;
      this._redirects.internalValue = value.redirects;
    }
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new AlbLoadBalancerListenerHttpHandlerOutputReference(this, "handler");
  public get handler() {
    return this._handler;
  }
  public putHandler(value: AlbLoadBalancerListenerHttpHandler) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }

  // redirects - computed: false, optional: true, required: false
  private _redirects = new AlbLoadBalancerListenerHttpRedirectsOutputReference(this, "redirects");
  public get redirects() {
    return this._redirects;
  }
  public putRedirects(value: AlbLoadBalancerListenerHttpRedirects) {
    this._redirects.internalValue = value;
  }
  public resetRedirects() {
    this._redirects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsInput() {
    return this._redirects.internalValue;
  }
}
export interface AlbLoadBalancerListenerStreamHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
}

export function albLoadBalancerListenerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerStreamHandlerOutputReference | AlbLoadBalancerListenerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
  }
}

export class AlbLoadBalancerListenerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }
}
export interface AlbLoadBalancerListenerStream {
  /**
  * handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler?: AlbLoadBalancerListenerStreamHandler;
}

export function albLoadBalancerListenerStreamToTerraform(struct?: AlbLoadBalancerListenerStreamOutputReference | AlbLoadBalancerListenerStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: albLoadBalancerListenerStreamHandlerToTerraform(struct!.handler),
  }
}

export class AlbLoadBalancerListenerStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler.internalValue = value.handler;
    }
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new AlbLoadBalancerListenerStreamHandlerOutputReference(this, "handler");
  public get handler() {
    return this._handler;
  }
  public putHandler(value: AlbLoadBalancerListenerStreamHandler) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}

export class AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * http2_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    http2_options: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}

export class AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
}

export function albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
  }
}

export class AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#certificate_ids AlbLoadBalancer#certificate_ids}
  */
  readonly certificateIds: string[];
  /**
  * http_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_handler AlbLoadBalancer#http_handler}
  */
  readonly httpHandler?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler;
  /**
  * stream_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#stream_handler AlbLoadBalancer#stream_handler}
  */
  readonly streamHandler?: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler;
}

export function albLoadBalancerListenerTlsDefaultHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateIds),
    http_handler: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToTerraform(struct!.httpHandler),
    stream_handler: albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToTerraform(struct!.streamHandler),
  }
}

export class AlbLoadBalancerListenerTlsDefaultHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._httpHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHandler = this._httpHandler?.internalValue;
    }
    if (this._streamHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHandler = this._streamHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._httpHandler.internalValue = undefined;
      this._streamHandler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._httpHandler.internalValue = value.httpHandler;
      this._streamHandler.internalValue = value.streamHandler;
    }
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // http_handler - computed: false, optional: true, required: false
  private _httpHandler = new AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference(this, "http_handler");
  public get httpHandler() {
    return this._httpHandler;
  }
  public putHttpHandler(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler) {
    this._httpHandler.internalValue = value;
  }
  public resetHttpHandler() {
    this._httpHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHandlerInput() {
    return this._httpHandler.internalValue;
  }

  // stream_handler - computed: false, optional: true, required: false
  private _streamHandler = new AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference(this, "stream_handler");
  public get streamHandler() {
    return this._streamHandler;
  }
  public putStreamHandler(value: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler) {
    this._streamHandler.internalValue = value;
  }
  public resetStreamHandler() {
    this._streamHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHandlerInput() {
    return this._streamHandler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * http2_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    http2_options: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
  }
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#certificate_ids AlbLoadBalancer#certificate_ids}
  */
  readonly certificateIds: string[];
  /**
  * http_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http_handler AlbLoadBalancer#http_handler}
  */
  readonly httpHandler?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler;
  /**
  * stream_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#stream_handler AlbLoadBalancer#stream_handler}
  */
  readonly streamHandler?: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateIds),
    http_handler: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToTerraform(struct!.httpHandler),
    stream_handler: albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToTerraform(struct!.streamHandler),
  }
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._httpHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHandler = this._httpHandler?.internalValue;
    }
    if (this._streamHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHandler = this._streamHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._httpHandler.internalValue = undefined;
      this._streamHandler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._httpHandler.internalValue = value.httpHandler;
      this._streamHandler.internalValue = value.streamHandler;
    }
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // http_handler - computed: false, optional: true, required: false
  private _httpHandler = new AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference(this, "http_handler");
  public get httpHandler() {
    return this._httpHandler;
  }
  public putHttpHandler(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler) {
    this._httpHandler.internalValue = value;
  }
  public resetHttpHandler() {
    this._httpHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHandlerInput() {
    return this._httpHandler.internalValue;
  }

  // stream_handler - computed: false, optional: true, required: false
  private _streamHandler = new AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference(this, "stream_handler");
  public get streamHandler() {
    return this._streamHandler;
  }
  public putStreamHandler(value: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler) {
    this._streamHandler.internalValue = value;
  }
  public resetStreamHandler() {
    this._streamHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHandlerInput() {
    return this._streamHandler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#server_names AlbLoadBalancer#server_names}
  */
  readonly serverNames: string[];
  /**
  * handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler: AlbLoadBalancerListenerTlsSniHandlerHandler;
}

export function albLoadBalancerListenerTlsSniHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    server_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serverNames),
    handler: albLoadBalancerListenerTlsSniHandlerHandlerToTerraform(struct!.handler),
  }
}

export interface AlbLoadBalancerListenerTls {
  /**
  * default_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#default_handler AlbLoadBalancer#default_handler}
  */
  readonly defaultHandler: AlbLoadBalancerListenerTlsDefaultHandler;
  /**
  * sni_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#sni_handler AlbLoadBalancer#sni_handler}
  */
  readonly sniHandler?: AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable;
}

export function albLoadBalancerListenerTlsToTerraform(struct?: AlbLoadBalancerListenerTlsOutputReference | AlbLoadBalancerListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_handler: albLoadBalancerListenerTlsDefaultHandlerToTerraform(struct!.defaultHandler),
    sni_handler: cdktf.listMapper(albLoadBalancerListenerTlsSniHandlerToTerraform)(struct!.sniHandler),
  }
}

export class AlbLoadBalancerListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHandler = this._defaultHandler?.internalValue;
    }
    if (this._sniHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniHandler = this._sniHandler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHandler.internalValue = undefined;
      this._sniHandler = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHandler.internalValue = value.defaultHandler;
      this._sniHandler = value.sniHandler;
    }
  }

  // default_handler - computed: false, optional: false, required: true
  private _defaultHandler = new AlbLoadBalancerListenerTlsDefaultHandlerOutputReference(this, "default_handler");
  public get defaultHandler() {
    return this._defaultHandler;
  }
  public putDefaultHandler(value: AlbLoadBalancerListenerTlsDefaultHandler) {
    this._defaultHandler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHandlerInput() {
    return this._defaultHandler.internalValue;
  }

  // sni_handler - computed: false, optional: true, required: false
  private _sniHandler?: AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable; 
  public get sniHandler() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sni_handler');
  }
  public set sniHandler(value: AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable) {
    this._sniHandler = value;
  }
  public resetSniHandler() {
    this._sniHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHandlerInput() {
    return this._sniHandler;
  }
}
export interface AlbLoadBalancerListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name: string;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#endpoint AlbLoadBalancer#endpoint}
  */
  readonly endpoint?: AlbLoadBalancerListenerEndpoint[] | cdktf.IResolvable;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#http AlbLoadBalancer#http}
  */
  readonly http?: AlbLoadBalancerListenerHttp;
  /**
  * stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#stream AlbLoadBalancer#stream}
  */
  readonly stream?: AlbLoadBalancerListenerStream;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#tls AlbLoadBalancer#tls}
  */
  readonly tls?: AlbLoadBalancerListenerTls;
}

export function albLoadBalancerListenerToTerraform(struct?: AlbLoadBalancerListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    endpoint: cdktf.listMapper(albLoadBalancerListenerEndpointToTerraform)(struct!.endpoint),
    http: albLoadBalancerListenerHttpToTerraform(struct!.http),
    stream: albLoadBalancerListenerStreamToTerraform(struct!.stream),
    tls: albLoadBalancerListenerTlsToTerraform(struct!.tls),
  }
}

export interface AlbLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#create AlbLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#delete AlbLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer#update AlbLoadBalancer#update}
  */
  readonly update?: string;
}

export function albLoadBalancerTimeoutsToTerraform(struct?: AlbLoadBalancerTimeoutsOutputReference | AlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class AlbLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerTimeouts | undefined {
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

  public set internalValue(value: AlbLoadBalancerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer yandex_alb_load_balancer}
*/
export class AlbLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_load_balancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/alb_load_balancer yandex_alb_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: AlbLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_load_balancer',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._regionId = config.regionId;
    this._securityGroupIds = config.securityGroupIds;
    this._allocationPolicy.internalValue = config.allocationPolicy;
    this._listener = config.listener;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // allocation_policy - computed: false, optional: false, required: true
  private _allocationPolicy = new AlbLoadBalancerAllocationPolicyOutputReference(this, "allocation_policy");
  public get allocationPolicy() {
    return this._allocationPolicy;
  }
  public putAllocationPolicy(value: AlbLoadBalancerAllocationPolicy) {
    this._allocationPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener?: AlbLoadBalancerListener[] | cdktf.IResolvable; 
  public get listener() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('listener');
  }
  public set listener(value: AlbLoadBalancerListener[] | cdktf.IResolvable) {
    this._listener = value;
  }
  public resetListener() {
    this._listener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbLoadBalancerTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region_id: cdktf.stringToTerraform(this._regionId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      allocation_policy: albLoadBalancerAllocationPolicyToTerraform(this._allocationPolicy.internalValue),
      listener: cdktf.listMapper(albLoadBalancerListenerToTerraform)(this._listener),
      timeouts: albLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
