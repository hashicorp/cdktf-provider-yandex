// https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbVirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#authority AlbVirtualHost#authority}
  */
  readonly authority?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#http_router_id AlbVirtualHost#http_router_id}
  */
  readonly httpRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#id AlbVirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * modify_request_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#modify_request_headers AlbVirtualHost#modify_request_headers}
  */
  readonly modifyRequestHeaders?: AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable;
  /**
  * modify_response_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#modify_response_headers AlbVirtualHost#modify_response_headers}
  */
  readonly modifyResponseHeaders?: AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable;
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#route AlbVirtualHost#route}
  */
  readonly route?: AlbVirtualHostRoute[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#timeouts AlbVirtualHost#timeouts}
  */
  readonly timeouts?: AlbVirtualHostTimeouts;
}
export interface AlbVirtualHostModifyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#append AlbVirtualHost#append}
  */
  readonly append?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#remove AlbVirtualHost#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace AlbVirtualHost#replace}
  */
  readonly replace?: string;
}

export function albVirtualHostModifyRequestHeadersToTerraform(struct?: AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    remove: cdktf.booleanToTerraform(struct!.remove),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}

export class AlbVirtualHostModifyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._remove = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._remove = value.remove;
      this._replace = value.replace;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class AlbVirtualHostModifyRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostModifyRequestHeadersOutputReference {
    return new AlbVirtualHostModifyRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostModifyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#append AlbVirtualHost#append}
  */
  readonly append?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#remove AlbVirtualHost#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace AlbVirtualHost#replace}
  */
  readonly replace?: string;
}

export function albVirtualHostModifyResponseHeadersToTerraform(struct?: AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    remove: cdktf.booleanToTerraform(struct!.remove),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}

export class AlbVirtualHostModifyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._remove = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._remove = value.remove;
      this._replace = value.replace;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class AlbVirtualHostModifyResponseHeadersList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostModifyResponseHeadersOutputReference {
    return new AlbVirtualHostModifyResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
}

export function albVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference | AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcMatch {
  /**
  * fqmn block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#fqmn AlbVirtualHost#fqmn}
  */
  readonly fqmn?: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn;
}

export function albVirtualHostRouteGrpcRouteGrpcMatchToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqmn: albVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct!.fqmn),
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqmn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqmn = this._fqmn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqmn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqmn.internalValue = value.fqmn;
    }
  }

  // fqmn - computed: false, optional: true, required: false
  private _fqmn = new AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference(this, "fqmn");
  public get fqmn() {
    return this._fqmn;
  }
  public putFqmn(value: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn) {
    this._fqmn.internalValue = value;
  }
  public resetFqmn() {
    this._fqmn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqmnInput() {
    return this._fqmn.internalValue;
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference {
    return new AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcRouteAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#auto_host_rewrite AlbVirtualHost#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#backend_group_id AlbVirtualHost#backend_group_id}
  */
  readonly backendGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#host_rewrite AlbVirtualHost#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#idle_timeout AlbVirtualHost#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#max_timeout AlbVirtualHost#max_timeout}
  */
  readonly maxTimeout?: string;
}

export function albVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_timeout: cdktf.stringToTerraform(struct!.maxTimeout),
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeout = this._maxTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._backendGroupId = undefined;
      this._hostRewrite = undefined;
      this._idleTimeout = undefined;
      this._maxTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._backendGroupId = value.backendGroupId;
      this._hostRewrite = value.hostRewrite;
      this._idleTimeout = value.idleTimeout;
      this._maxTimeout = value.maxTimeout;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // backend_group_id - computed: false, optional: false, required: true
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_timeout - computed: false, optional: true, required: false
  private _maxTimeout?: string; 
  public get maxTimeout() {
    return this.getStringAttribute('max_timeout');
  }
  public set maxTimeout(value: string) {
    this._maxTimeout = value;
  }
  public resetMaxTimeout() {
    this._maxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutInput() {
    return this._maxTimeout;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#status AlbVirtualHost#status}
  */
  readonly status?: string;
}

export function albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AlbVirtualHostRouteGrpcRoute {
  /**
  * grpc_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#grpc_match AlbVirtualHost#grpc_match}
  */
  readonly grpcMatch?: AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable;
  /**
  * grpc_route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#grpc_route_action AlbVirtualHost#grpc_route_action}
  */
  readonly grpcRouteAction?: AlbVirtualHostRouteGrpcRouteGrpcRouteAction;
  /**
  * grpc_status_response_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#grpc_status_response_action AlbVirtualHost#grpc_status_response_action}
  */
  readonly grpcStatusResponseAction?: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction;
}

export function albVirtualHostRouteGrpcRouteToTerraform(struct?: AlbVirtualHostRouteGrpcRouteOutputReference | AlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_match: cdktf.listMapper(albVirtualHostRouteGrpcRouteGrpcMatchToTerraform)(struct!.grpcMatch),
    grpc_route_action: albVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct!.grpcRouteAction),
    grpc_status_response_action: albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct!.grpcStatusResponseAction),
  }
}

export class AlbVirtualHostRouteGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcMatch = this._grpcMatch?.internalValue;
    }
    if (this._grpcRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRouteAction = this._grpcRouteAction?.internalValue;
    }
    if (this._grpcStatusResponseAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatusResponseAction = this._grpcStatusResponseAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcMatch.internalValue = undefined;
      this._grpcRouteAction.internalValue = undefined;
      this._grpcStatusResponseAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcMatch.internalValue = value.grpcMatch;
      this._grpcRouteAction.internalValue = value.grpcRouteAction;
      this._grpcStatusResponseAction.internalValue = value.grpcStatusResponseAction;
    }
  }

  // grpc_match - computed: false, optional: true, required: false
  private _grpcMatch = new AlbVirtualHostRouteGrpcRouteGrpcMatchList(this, "grpc_match", false);
  public get grpcMatch() {
    return this._grpcMatch;
  }
  public putGrpcMatch(value: AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable) {
    this._grpcMatch.internalValue = value;
  }
  public resetGrpcMatch() {
    this._grpcMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcMatchInput() {
    return this._grpcMatch.internalValue;
  }

  // grpc_route_action - computed: false, optional: true, required: false
  private _grpcRouteAction = new AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference(this, "grpc_route_action");
  public get grpcRouteAction() {
    return this._grpcRouteAction;
  }
  public putGrpcRouteAction(value: AlbVirtualHostRouteGrpcRouteGrpcRouteAction) {
    this._grpcRouteAction.internalValue = value;
  }
  public resetGrpcRouteAction() {
    this._grpcRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteActionInput() {
    return this._grpcRouteAction.internalValue;
  }

  // grpc_status_response_action - computed: false, optional: true, required: false
  private _grpcStatusResponseAction = new AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference(this, "grpc_status_response_action");
  public get grpcStatusResponseAction() {
    return this._grpcStatusResponseAction;
  }
  public putGrpcStatusResponseAction(value: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction) {
    this._grpcStatusResponseAction.internalValue = value;
  }
  public resetGrpcStatusResponseAction() {
    this._grpcStatusResponseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusResponseActionInput() {
    return this._grpcStatusResponseAction.internalValue;
  }
}
export interface AlbVirtualHostRouteHttpRouteDirectResponseAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#body AlbVirtualHost#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#status AlbVirtualHost#status}
  */
  readonly status?: number;
}

export function albVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference | AlbVirtualHostRouteHttpRouteDirectResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status: cdktf.numberToTerraform(struct!.status),
  }
}

export class AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteDirectResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteDirectResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
}

export function albVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference | AlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpMatchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpMatchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#http_method AlbVirtualHost#http_method}
  */
  readonly httpMethod?: string[];
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#path AlbVirtualHost#path}
  */
  readonly path?: AlbVirtualHostRouteHttpRouteHttpMatchPath;
}

export function albVirtualHostRouteHttpRouteHttpMatchToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpMethod),
    path: albVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct!.path),
  }
}

export class AlbVirtualHostRouteHttpRouteHttpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._path.internalValue = value.path;
    }
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string[]; 
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }
  public set httpMethod(value: string[]) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // path - computed: false, optional: true, required: false
  private _path = new AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: AlbVirtualHostRouteHttpRouteHttpMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class AlbVirtualHostRouteHttpRouteHttpMatchList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteHttpRouteHttpMatchOutputReference {
    return new AlbVirtualHostRouteHttpRouteHttpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#auto_host_rewrite AlbVirtualHost#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#backend_group_id AlbVirtualHost#backend_group_id}
  */
  readonly backendGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#host_rewrite AlbVirtualHost#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#idle_timeout AlbVirtualHost#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#prefix_rewrite AlbVirtualHost#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#timeout AlbVirtualHost#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#upgrade_types AlbVirtualHost#upgrade_types}
  */
  readonly upgradeTypes?: string[];
}

export function albVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    upgrade_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.upgradeTypes),
  }
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upgradeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTypes = this._upgradeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._backendGroupId = undefined;
      this._hostRewrite = undefined;
      this._idleTimeout = undefined;
      this._prefixRewrite = undefined;
      this._timeout = undefined;
      this._upgradeTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._backendGroupId = value.backendGroupId;
      this._hostRewrite = value.hostRewrite;
      this._idleTimeout = value.idleTimeout;
      this._prefixRewrite = value.prefixRewrite;
      this._timeout = value.timeout;
      this._upgradeTypes = value.upgradeTypes;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // backend_group_id - computed: false, optional: false, required: true
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // upgrade_types - computed: false, optional: true, required: false
  private _upgradeTypes?: string[]; 
  public get upgradeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('upgrade_types'));
  }
  public set upgradeTypes(value: string[]) {
    this._upgradeTypes = value;
  }
  public resetUpgradeTypes() {
    this._upgradeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypesInput() {
    return this._upgradeTypes;
  }
}
export interface AlbVirtualHostRouteHttpRouteRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#remove_query AlbVirtualHost#remove_query}
  */
  readonly removeQuery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace_host AlbVirtualHost#replace_host}
  */
  readonly replaceHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace_path AlbVirtualHost#replace_path}
  */
  readonly replacePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace_port AlbVirtualHost#replace_port}
  */
  readonly replacePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace_prefix AlbVirtualHost#replace_prefix}
  */
  readonly replacePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#replace_scheme AlbVirtualHost#replace_scheme}
  */
  readonly replaceScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#response_code AlbVirtualHost#response_code}
  */
  readonly responseCode?: string;
}

export function albVirtualHostRouteHttpRouteRedirectActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteRedirectActionOutputReference | AlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_query: cdktf.booleanToTerraform(struct!.removeQuery),
    replace_host: cdktf.stringToTerraform(struct!.replaceHost),
    replace_path: cdktf.stringToTerraform(struct!.replacePath),
    replace_port: cdktf.numberToTerraform(struct!.replacePort),
    replace_prefix: cdktf.stringToTerraform(struct!.replacePrefix),
    replace_scheme: cdktf.stringToTerraform(struct!.replaceScheme),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}

export class AlbVirtualHostRouteHttpRouteRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeQuery = this._removeQuery;
    }
    if (this._replaceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceHost = this._replaceHost;
    }
    if (this._replacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePath = this._replacePath;
    }
    if (this._replacePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePort = this._replacePort;
    }
    if (this._replacePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefix = this._replacePrefix;
    }
    if (this._replaceScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceScheme = this._replaceScheme;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._removeQuery = undefined;
      this._replaceHost = undefined;
      this._replacePath = undefined;
      this._replacePort = undefined;
      this._replacePrefix = undefined;
      this._replaceScheme = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._removeQuery = value.removeQuery;
      this._replaceHost = value.replaceHost;
      this._replacePath = value.replacePath;
      this._replacePort = value.replacePort;
      this._replacePrefix = value.replacePrefix;
      this._replaceScheme = value.replaceScheme;
      this._responseCode = value.responseCode;
    }
  }

  // remove_query - computed: false, optional: true, required: false
  private _removeQuery?: boolean | cdktf.IResolvable; 
  public get removeQuery() {
    return this.getBooleanAttribute('remove_query');
  }
  public set removeQuery(value: boolean | cdktf.IResolvable) {
    this._removeQuery = value;
  }
  public resetRemoveQuery() {
    this._removeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeQueryInput() {
    return this._removeQuery;
  }

  // replace_host - computed: false, optional: true, required: false
  private _replaceHost?: string; 
  public get replaceHost() {
    return this.getStringAttribute('replace_host');
  }
  public set replaceHost(value: string) {
    this._replaceHost = value;
  }
  public resetReplaceHost() {
    this._replaceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceHostInput() {
    return this._replaceHost;
  }

  // replace_path - computed: false, optional: true, required: false
  private _replacePath?: string; 
  public get replacePath() {
    return this.getStringAttribute('replace_path');
  }
  public set replacePath(value: string) {
    this._replacePath = value;
  }
  public resetReplacePath() {
    this._replacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePathInput() {
    return this._replacePath;
  }

  // replace_port - computed: false, optional: true, required: false
  private _replacePort?: number; 
  public get replacePort() {
    return this.getNumberAttribute('replace_port');
  }
  public set replacePort(value: number) {
    this._replacePort = value;
  }
  public resetReplacePort() {
    this._replacePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePortInput() {
    return this._replacePort;
  }

  // replace_prefix - computed: false, optional: true, required: false
  private _replacePrefix?: string; 
  public get replacePrefix() {
    return this.getStringAttribute('replace_prefix');
  }
  public set replacePrefix(value: string) {
    this._replacePrefix = value;
  }
  public resetReplacePrefix() {
    this._replacePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixInput() {
    return this._replacePrefix;
  }

  // replace_scheme - computed: false, optional: true, required: false
  private _replaceScheme?: string; 
  public get replaceScheme() {
    return this.getStringAttribute('replace_scheme');
  }
  public set replaceScheme(value: string) {
    this._replaceScheme = value;
  }
  public resetReplaceScheme() {
    this._replaceScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceSchemeInput() {
    return this._replaceScheme;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface AlbVirtualHostRouteHttpRoute {
  /**
  * direct_response_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#direct_response_action AlbVirtualHost#direct_response_action}
  */
  readonly directResponseAction?: AlbVirtualHostRouteHttpRouteDirectResponseAction;
  /**
  * http_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#http_match AlbVirtualHost#http_match}
  */
  readonly httpMatch?: AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable;
  /**
  * http_route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#http_route_action AlbVirtualHost#http_route_action}
  */
  readonly httpRouteAction?: AlbVirtualHostRouteHttpRouteHttpRouteAction;
  /**
  * redirect_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#redirect_action AlbVirtualHost#redirect_action}
  */
  readonly redirectAction?: AlbVirtualHostRouteHttpRouteRedirectAction;
}

export function albVirtualHostRouteHttpRouteToTerraform(struct?: AlbVirtualHostRouteHttpRouteOutputReference | AlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_response_action: albVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct!.directResponseAction),
    http_match: cdktf.listMapper(albVirtualHostRouteHttpRouteHttpMatchToTerraform)(struct!.httpMatch),
    http_route_action: albVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct!.httpRouteAction),
    redirect_action: albVirtualHostRouteHttpRouteRedirectActionToTerraform(struct!.redirectAction),
  }
}

export class AlbVirtualHostRouteHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directResponseAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponseAction = this._directResponseAction?.internalValue;
    }
    if (this._httpMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMatch = this._httpMatch?.internalValue;
    }
    if (this._httpRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouteAction = this._httpRouteAction?.internalValue;
    }
    if (this._redirectAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAction = this._redirectAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directResponseAction.internalValue = undefined;
      this._httpMatch.internalValue = undefined;
      this._httpRouteAction.internalValue = undefined;
      this._redirectAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directResponseAction.internalValue = value.directResponseAction;
      this._httpMatch.internalValue = value.httpMatch;
      this._httpRouteAction.internalValue = value.httpRouteAction;
      this._redirectAction.internalValue = value.redirectAction;
    }
  }

  // direct_response_action - computed: false, optional: true, required: false
  private _directResponseAction = new AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference(this, "direct_response_action");
  public get directResponseAction() {
    return this._directResponseAction;
  }
  public putDirectResponseAction(value: AlbVirtualHostRouteHttpRouteDirectResponseAction) {
    this._directResponseAction.internalValue = value;
  }
  public resetDirectResponseAction() {
    this._directResponseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponseActionInput() {
    return this._directResponseAction.internalValue;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch = new AlbVirtualHostRouteHttpRouteHttpMatchList(this, "http_match", false);
  public get httpMatch() {
    return this._httpMatch;
  }
  public putHttpMatch(value: AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable) {
    this._httpMatch.internalValue = value;
  }
  public resetHttpMatch() {
    this._httpMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch.internalValue;
  }

  // http_route_action - computed: false, optional: true, required: false
  private _httpRouteAction = new AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference(this, "http_route_action");
  public get httpRouteAction() {
    return this._httpRouteAction;
  }
  public putHttpRouteAction(value: AlbVirtualHostRouteHttpRouteHttpRouteAction) {
    this._httpRouteAction.internalValue = value;
  }
  public resetHttpRouteAction() {
    this._httpRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteActionInput() {
    return this._httpRouteAction.internalValue;
  }

  // redirect_action - computed: false, optional: true, required: false
  private _redirectAction = new AlbVirtualHostRouteHttpRouteRedirectActionOutputReference(this, "redirect_action");
  public get redirectAction() {
    return this._redirectAction;
  }
  public putRedirectAction(value: AlbVirtualHostRouteHttpRouteRedirectAction) {
    this._redirectAction.internalValue = value;
  }
  public resetRedirectAction() {
    this._redirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionInput() {
    return this._redirectAction.internalValue;
  }
}
export interface AlbVirtualHostRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name?: string;
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#grpc_route AlbVirtualHost#grpc_route}
  */
  readonly grpcRoute?: AlbVirtualHostRouteGrpcRoute;
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#http_route AlbVirtualHost#http_route}
  */
  readonly httpRoute?: AlbVirtualHostRouteHttpRoute;
}

export function albVirtualHostRouteToTerraform(struct?: AlbVirtualHostRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    grpc_route: albVirtualHostRouteGrpcRouteToTerraform(struct!.grpcRoute),
    http_route: albVirtualHostRouteHttpRouteToTerraform(struct!.httpRoute),
  }
}

export class AlbVirtualHostRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbVirtualHostRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._grpcRoute.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._httpRoute.internalValue = value.httpRoute;
    }
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

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new AlbVirtualHostRouteGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: AlbVirtualHostRouteGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new AlbVirtualHostRouteHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: AlbVirtualHostRouteHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }
}

export class AlbVirtualHostRouteList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRoute[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteOutputReference {
    return new AlbVirtualHostRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#create AlbVirtualHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#delete AlbVirtualHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host#update AlbVirtualHost#update}
  */
  readonly update?: string;
}

export function albVirtualHostTimeoutsToTerraform(struct?: AlbVirtualHostTimeoutsOutputReference | AlbVirtualHostTimeouts | cdktf.IResolvable): any {
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

export class AlbVirtualHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AlbVirtualHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host yandex_alb_virtual_host}
*/
export class AlbVirtualHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_virtual_host";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/alb_virtual_host yandex_alb_virtual_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbVirtualHostConfig
  */
  public constructor(scope: Construct, id: string, config: AlbVirtualHostConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.76.0',
        providerVersionConstraint: '~> 0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authority = config.authority;
    this._httpRouterId = config.httpRouterId;
    this._id = config.id;
    this._name = config.name;
    this._modifyRequestHeaders.internalValue = config.modifyRequestHeaders;
    this._modifyResponseHeaders.internalValue = config.modifyResponseHeaders;
    this._route.internalValue = config.route;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: false, optional: true, required: false
  private _authority?: string[]; 
  public get authority() {
    return cdktf.Fn.tolist(this.getListAttribute('authority'));
  }
  public set authority(value: string[]) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // http_router_id - computed: false, optional: false, required: true
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // modify_request_headers - computed: false, optional: true, required: false
  private _modifyRequestHeaders = new AlbVirtualHostModifyRequestHeadersList(this, "modify_request_headers", false);
  public get modifyRequestHeaders() {
    return this._modifyRequestHeaders;
  }
  public putModifyRequestHeaders(value: AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable) {
    this._modifyRequestHeaders.internalValue = value;
  }
  public resetModifyRequestHeaders() {
    this._modifyRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeadersInput() {
    return this._modifyRequestHeaders.internalValue;
  }

  // modify_response_headers - computed: false, optional: true, required: false
  private _modifyResponseHeaders = new AlbVirtualHostModifyResponseHeadersList(this, "modify_response_headers", false);
  public get modifyResponseHeaders() {
    return this._modifyResponseHeaders;
  }
  public putModifyResponseHeaders(value: AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable) {
    this._modifyResponseHeaders.internalValue = value;
  }
  public resetModifyResponseHeaders() {
    this._modifyResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeadersInput() {
    return this._modifyResponseHeaders.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new AlbVirtualHostRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: AlbVirtualHostRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbVirtualHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbVirtualHostTimeouts) {
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
      authority: cdktf.listMapper(cdktf.stringToTerraform)(this._authority),
      http_router_id: cdktf.stringToTerraform(this._httpRouterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      modify_request_headers: cdktf.listMapper(albVirtualHostModifyRequestHeadersToTerraform)(this._modifyRequestHeaders.internalValue),
      modify_response_headers: cdktf.listMapper(albVirtualHostModifyResponseHeadersToTerraform)(this._modifyResponseHeaders.internalValue),
      route: cdktf.listMapper(albVirtualHostRouteToTerraform)(this._route.internalValue),
      timeouts: albVirtualHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
