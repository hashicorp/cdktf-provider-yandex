// https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbVirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host#http_router_id DataYandexAlbVirtualHost#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host#id DataYandexAlbVirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host#name DataYandexAlbVirtualHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host#virtual_host_id DataYandexAlbVirtualHost#virtual_host_id}
  */
  readonly virtualHostId?: string;
}
export interface DataYandexAlbVirtualHostModifyRequestHeaders {
}

export function dataYandexAlbVirtualHostModifyRequestHeadersToTerraform(struct?: DataYandexAlbVirtualHostModifyRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostModifyRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostModifyRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostModifyRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getStringAttribute('append');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove - computed: true, optional: false, required: false
  public get remove() {
    return this.getBooleanAttribute('remove');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataYandexAlbVirtualHostModifyRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostModifyRequestHeadersOutputReference {
    return new DataYandexAlbVirtualHostModifyRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostModifyResponseHeaders {
}

export function dataYandexAlbVirtualHostModifyResponseHeadersToTerraform(struct?: DataYandexAlbVirtualHostModifyResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostModifyResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostModifyResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostModifyResponseHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getStringAttribute('append');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove - computed: true, optional: false, required: false
  public get remove() {
    return this.getBooleanAttribute('remove');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataYandexAlbVirtualHostModifyResponseHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostModifyResponseHeadersOutputReference {
    return new DataYandexAlbVirtualHostModifyResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqmn - computed: true, optional: false, required: false
  private _fqmn = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnList(this, "fqmn", false);
  public get fqmn() {
    return this._fqmn;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_host_rewrite - computed: true, optional: false, required: false
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }

  // host_rewrite - computed: true, optional: false, required: false
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // max_timeout - computed: true, optional: false, required: false
  public get maxTimeout() {
    return this.getStringAttribute('max_timeout');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRoute {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpc_match - computed: true, optional: false, required: false
  private _grpcMatch = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchList(this, "grpc_match", false);
  public get grpcMatch() {
    return this._grpcMatch;
  }

  // grpc_route_action - computed: true, optional: false, required: false
  private _grpcRouteAction = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionList(this, "grpc_route_action", false);
  public get grpcRouteAction() {
    return this._grpcRouteAction;
  }

  // grpc_status_response_action - computed: true, optional: false, required: false
  private _grpcStatusResponseAction = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionList(this, "grpc_status_response_action", false);
  public get grpcStatusResponseAction() {
    return this._grpcStatusResponseAction;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpMatch {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathList(this, "path", false);
  public get path() {
    return this._path;
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_host_rewrite - computed: true, optional: false, required: false
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }

  // host_rewrite - computed: true, optional: false, required: false
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // prefix_rewrite - computed: true, optional: false, required: false
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // upgrade_types - computed: true, optional: false, required: false
  public get upgradeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('upgrade_types'));
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteRedirectAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteRedirectActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remove_query - computed: true, optional: false, required: false
  public get removeQuery() {
    return this.getBooleanAttribute('remove_query');
  }

  // replace_host - computed: true, optional: false, required: false
  public get replaceHost() {
    return this.getStringAttribute('replace_host');
  }

  // replace_path - computed: true, optional: false, required: false
  public get replacePath() {
    return this.getStringAttribute('replace_path');
  }

  // replace_port - computed: true, optional: false, required: false
  public get replacePort() {
    return this.getNumberAttribute('replace_port');
  }

  // replace_prefix - computed: true, optional: false, required: false
  public get replacePrefix() {
    return this.getStringAttribute('replace_prefix');
  }

  // replace_scheme - computed: true, optional: false, required: false
  public get replaceScheme() {
    return this.getStringAttribute('replace_scheme');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteRedirectActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRoute {
}

export function dataYandexAlbVirtualHostRouteHttpRouteToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_response_action - computed: true, optional: false, required: false
  private _directResponseAction = new DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionList(this, "direct_response_action", false);
  public get directResponseAction() {
    return this._directResponseAction;
  }

  // http_match - computed: true, optional: false, required: false
  private _httpMatch = new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchList(this, "http_match", false);
  public get httpMatch() {
    return this._httpMatch;
  }

  // http_route_action - computed: true, optional: false, required: false
  private _httpRouteAction = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionList(this, "http_route_action", false);
  public get httpRouteAction() {
    return this._httpRouteAction;
  }

  // redirect_action - computed: true, optional: false, required: false
  private _redirectAction = new DataYandexAlbVirtualHostRouteHttpRouteRedirectActionList(this, "redirect_action", false);
  public get redirectAction() {
    return this._redirectAction;
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRoute {
}

export function dataYandexAlbVirtualHostRouteToTerraform(struct?: DataYandexAlbVirtualHostRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexAlbVirtualHostRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpc_route - computed: true, optional: false, required: false
  private _grpcRoute = new DataYandexAlbVirtualHostRouteGrpcRouteList(this, "grpc_route", false);
  public get grpcRoute() {
    return this._grpcRoute;
  }

  // http_route - computed: true, optional: false, required: false
  private _httpRoute = new DataYandexAlbVirtualHostRouteHttpRouteList(this, "http_route", false);
  public get httpRoute() {
    return this._httpRoute;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataYandexAlbVirtualHostRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host yandex_alb_virtual_host}
*/
export class DataYandexAlbVirtualHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_virtual_host";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/alb_virtual_host yandex_alb_virtual_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbVirtualHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbVirtualHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_virtual_host',
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
    this._httpRouterId = config.httpRouterId;
    this._id = config.id;
    this._name = config.name;
    this._virtualHostId = config.virtualHostId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return cdktf.Fn.tolist(this.getListAttribute('authority'));
  }

  // http_router_id - computed: true, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // modify_request_headers - computed: true, optional: false, required: false
  private _modifyRequestHeaders = new DataYandexAlbVirtualHostModifyRequestHeadersList(this, "modify_request_headers", false);
  public get modifyRequestHeaders() {
    return this._modifyRequestHeaders;
  }

  // modify_response_headers - computed: true, optional: false, required: false
  private _modifyResponseHeaders = new DataYandexAlbVirtualHostModifyResponseHeadersList(this, "modify_response_headers", false);
  public get modifyResponseHeaders() {
    return this._modifyResponseHeaders;
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

  // route - computed: true, optional: false, required: false
  private _route = new DataYandexAlbVirtualHostRouteList(this, "route", false);
  public get route() {
    return this._route;
  }

  // virtual_host_id - computed: true, optional: true, required: false
  private _virtualHostId?: string; 
  public get virtualHostId() {
    return this.getStringAttribute('virtual_host_id');
  }
  public set virtualHostId(value: string) {
    this._virtualHostId = value;
  }
  public resetVirtualHostId() {
    this._virtualHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostIdInput() {
    return this._virtualHostId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_router_id: cdktf.stringToTerraform(this._httpRouterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      virtual_host_id: cdktf.stringToTerraform(this._virtualHostId),
    };
  }
}
