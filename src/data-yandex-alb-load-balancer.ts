// https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#load_balancer_id DataYandexAlbLoadBalancer#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#name DataYandexAlbLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#timeouts DataYandexAlbLoadBalancer#timeouts}
  */
  readonly timeouts?: DataYandexAlbLoadBalancerTimeouts;
}
export interface DataYandexAlbLoadBalancerAllocationPolicyLocation {
}

export function dataYandexAlbLoadBalancerAllocationPolicyLocationToTerraform(struct?: DataYandexAlbLoadBalancerAllocationPolicyLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerAllocationPolicyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerAllocationPolicyLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerAllocationPolicyLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_traffic - computed: true, optional: false, required: false
  public get disableTraffic() {
    return this.getBooleanAttribute('disable_traffic');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataYandexAlbLoadBalancerAllocationPolicyLocationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerAllocationPolicyLocationOutputReference {
    return new DataYandexAlbLoadBalancerAllocationPolicyLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerAllocationPolicy {
}

export function dataYandexAlbLoadBalancerAllocationPolicyToTerraform(struct?: DataYandexAlbLoadBalancerAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataYandexAlbLoadBalancerAllocationPolicyLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
}

export class DataYandexAlbLoadBalancerAllocationPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerAllocationPolicyOutputReference {
    return new DataYandexAlbLoadBalancerAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4Address {
}

export function dataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressToTerraform(struct?: DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference {
    return new DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6Address {
}

export function dataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressToTerraform(struct?: DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference {
    return new DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4Address {
}

export function dataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressToTerraform(struct?: DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference {
    return new DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerEndpointAddress {
}

export function dataYandexAlbLoadBalancerListenerEndpointAddressToTerraform(struct?: DataYandexAlbLoadBalancerListenerEndpointAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerEndpointAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerEndpointAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ipv4_address - computed: true, optional: false, required: false
  private _externalIpv4Address = new DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv4AddressList(this, "external_ipv4_address", false);
  public get externalIpv4Address() {
    return this._externalIpv4Address;
  }

  // external_ipv6_address - computed: true, optional: false, required: false
  private _externalIpv6Address = new DataYandexAlbLoadBalancerListenerEndpointAddressExternalIpv6AddressList(this, "external_ipv6_address", false);
  public get externalIpv6Address() {
    return this._externalIpv6Address;
  }

  // internal_ipv4_address - computed: true, optional: false, required: false
  private _internalIpv4Address = new DataYandexAlbLoadBalancerListenerEndpointAddressInternalIpv4AddressList(this, "internal_ipv4_address", false);
  public get internalIpv4Address() {
    return this._internalIpv4Address;
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointAddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerEndpointAddressOutputReference {
    return new DataYandexAlbLoadBalancerListenerEndpointAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerEndpoint {
}

export function dataYandexAlbLoadBalancerListenerEndpointToTerraform(struct?: DataYandexAlbLoadBalancerListenerEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataYandexAlbLoadBalancerListenerEndpointAddressList(this, "address", false);
  public get address() {
    return this._address;
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
}

export class DataYandexAlbLoadBalancerListenerEndpointList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerEndpointOutputReference {
    return new DataYandexAlbLoadBalancerListenerEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerHttpHandlerHttp2Options {
}

export function dataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsToTerraform(struct?: DataYandexAlbLoadBalancerListenerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_streams - computed: true, optional: false, required: false
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
}

export class DataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference {
    return new DataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerHttpHandler {
}

export function dataYandexAlbLoadBalancerListenerHttpHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_http10 - computed: true, optional: false, required: false
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }

  // http2_options - computed: true, optional: false, required: false
  private _http2Options = new DataYandexAlbLoadBalancerListenerHttpHandlerHttp2OptionsList(this, "http2_options", false);
  public get http2Options() {
    return this._http2Options;
  }

  // http_router_id - computed: true, optional: false, required: false
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
}

export class DataYandexAlbLoadBalancerListenerHttpHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerHttpHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerHttpHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerHttpRedirects {
}

export function dataYandexAlbLoadBalancerListenerHttpRedirectsToTerraform(struct?: DataYandexAlbLoadBalancerListenerHttpRedirects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerHttpRedirectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerHttpRedirects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerHttpRedirects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_to_https - computed: true, optional: false, required: false
  public get httpToHttps() {
    return this.getBooleanAttribute('http_to_https');
  }
}

export class DataYandexAlbLoadBalancerListenerHttpRedirectsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerHttpRedirectsOutputReference {
    return new DataYandexAlbLoadBalancerListenerHttpRedirectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerHttp {
}

export function dataYandexAlbLoadBalancerListenerHttpToTerraform(struct?: DataYandexAlbLoadBalancerListenerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // handler - computed: true, optional: false, required: false
  private _handler = new DataYandexAlbLoadBalancerListenerHttpHandlerList(this, "handler", false);
  public get handler() {
    return this._handler;
  }

  // redirects - computed: true, optional: false, required: false
  private _redirects = new DataYandexAlbLoadBalancerListenerHttpRedirectsList(this, "redirects", false);
  public get redirects() {
    return this._redirects;
  }
}

export class DataYandexAlbLoadBalancerListenerHttpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerHttpOutputReference {
    return new DataYandexAlbLoadBalancerListenerHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerStreamHandler {
}

export function dataYandexAlbLoadBalancerListenerStreamHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
}

export class DataYandexAlbLoadBalancerListenerStreamHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerStreamHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerStreamHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerStream {
}

export function dataYandexAlbLoadBalancerListenerStreamToTerraform(struct?: DataYandexAlbLoadBalancerListenerStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // handler - computed: true, optional: false, required: false
  private _handler = new DataYandexAlbLoadBalancerListenerStreamHandlerList(this, "handler", false);
  public get handler() {
    return this._handler;
  }
}

export class DataYandexAlbLoadBalancerListenerStreamList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerStreamOutputReference {
    return new DataYandexAlbLoadBalancerListenerStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options {
}

export function dataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_streams - computed: true, optional: false, required: false
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_http10 - computed: true, optional: false, required: false
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }

  // http2_options - computed: true, optional: false, required: false
  private _http2Options = new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsList(this, "http2_options", false);
  public get http2Options() {
    return this._http2Options;
  }

  // http_router_id - computed: true, optional: false, required: false
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsDefaultHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsDefaultHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsDefaultHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsDefaultHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsDefaultHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }

  // http_handler - computed: true, optional: false, required: false
  private _httpHandler = new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerList(this, "http_handler", false);
  public get httpHandler() {
    return this._httpHandler;
  }

  // stream_handler - computed: true, optional: false, required: false
  private _streamHandler = new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerList(this, "stream_handler", false);
  public get streamHandler() {
    return this._streamHandler;
  }
}

export class DataYandexAlbLoadBalancerListenerTlsDefaultHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsDefaultHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options {
}

export function dataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_streams - computed: true, optional: false, required: false
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_http10 - computed: true, optional: false, required: false
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }

  // http2_options - computed: true, optional: false, required: false
  private _http2Options = new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsList(this, "http2_options", false);
  public get http2Options() {
    return this._http2Options;
  }

  // http_router_id - computed: true, optional: false, required: false
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsSniHandlerHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsSniHandlerHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }

  // http_handler - computed: true, optional: false, required: false
  private _httpHandler = new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerList(this, "http_handler", false);
  public get httpHandler() {
    return this._httpHandler;
  }

  // stream_handler - computed: true, optional: false, required: false
  private _streamHandler = new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerList(this, "stream_handler", false);
  public get streamHandler() {
    return this._streamHandler;
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTlsSniHandler {
}

export function dataYandexAlbLoadBalancerListenerTlsSniHandlerToTerraform(struct?: DataYandexAlbLoadBalancerListenerTlsSniHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTlsSniHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTlsSniHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // handler - computed: true, optional: false, required: false
  private _handler = new DataYandexAlbLoadBalancerListenerTlsSniHandlerHandlerList(this, "handler", false);
  public get handler() {
    return this._handler;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_names - computed: true, optional: false, required: false
  public get serverNames() {
    return cdktf.Fn.tolist(this.getListAttribute('server_names'));
  }
}

export class DataYandexAlbLoadBalancerListenerTlsSniHandlerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsSniHandlerOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsSniHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListenerTls {
}

export function dataYandexAlbLoadBalancerListenerTlsToTerraform(struct?: DataYandexAlbLoadBalancerListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListenerTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListenerTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_handler - computed: true, optional: false, required: false
  private _defaultHandler = new DataYandexAlbLoadBalancerListenerTlsDefaultHandlerList(this, "default_handler", false);
  public get defaultHandler() {
    return this._defaultHandler;
  }

  // sni_handler - computed: true, optional: false, required: false
  private _sniHandler = new DataYandexAlbLoadBalancerListenerTlsSniHandlerList(this, "sni_handler", false);
  public get sniHandler() {
    return this._sniHandler;
  }
}

export class DataYandexAlbLoadBalancerListenerTlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerTlsOutputReference {
    return new DataYandexAlbLoadBalancerListenerTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerListener {
}

export function dataYandexAlbLoadBalancerListenerToTerraform(struct?: DataYandexAlbLoadBalancerListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexAlbLoadBalancerListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbLoadBalancerListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataYandexAlbLoadBalancerListenerEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataYandexAlbLoadBalancerListenerHttpList(this, "http", false);
  public get http() {
    return this._http;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stream - computed: true, optional: false, required: false
  private _stream = new DataYandexAlbLoadBalancerListenerStreamList(this, "stream", false);
  public get stream() {
    return this._stream;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexAlbLoadBalancerListenerTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
}

export class DataYandexAlbLoadBalancerListenerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexAlbLoadBalancerListenerOutputReference {
    return new DataYandexAlbLoadBalancerListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#create DataYandexAlbLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#delete DataYandexAlbLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer#update DataYandexAlbLoadBalancer#update}
  */
  readonly update?: string;
}

export function dataYandexAlbLoadBalancerTimeoutsToTerraform(struct?: DataYandexAlbLoadBalancerTimeoutsOutputReference | DataYandexAlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class DataYandexAlbLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbLoadBalancerTimeouts | undefined {
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

  public set internalValue(value: DataYandexAlbLoadBalancerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer yandex_alb_load_balancer}
*/
export class DataYandexAlbLoadBalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_load_balancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/alb_load_balancer yandex_alb_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbLoadBalancerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbLoadBalancerConfig = {}) {
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
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_policy - computed: true, optional: false, required: false
  private _allocationPolicy = new DataYandexAlbLoadBalancerAllocationPolicyList(this, "allocation_policy", false);
  public get allocationPolicy() {
    return this._allocationPolicy;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // listener - computed: true, optional: false, required: false
  private _listener = new DataYandexAlbLoadBalancerListenerList(this, "listener", false);
  public get listener() {
    return this._listener;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // name - computed: true, optional: true, required: false
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexAlbLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexAlbLoadBalancerTimeouts) {
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
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataYandexAlbLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
