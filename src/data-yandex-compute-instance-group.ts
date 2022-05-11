// https://www.terraform.io/docs/providers/yandex/d/compute_instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexComputeInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance_group#instance_group_id DataYandexComputeInstanceGroup#instance_group_id}
  */
  readonly instanceGroupId: string;
}
export interface DataYandexComputeInstanceGroupAllocationPolicy {
}

export function dataYandexComputeInstanceGroupAllocationPolicyToTerraform(struct?: DataYandexComputeInstanceGroupAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
}

export class DataYandexComputeInstanceGroupAllocationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupAllocationPolicyOutputReference {
    return new DataYandexComputeInstanceGroupAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupApplicationBalancerState {
}

export function dataYandexComputeInstanceGroupApplicationBalancerStateToTerraform(struct?: DataYandexComputeInstanceGroupApplicationBalancerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupApplicationBalancerStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupApplicationBalancerState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupApplicationBalancerState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
}

export class DataYandexComputeInstanceGroupApplicationBalancerStateList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupApplicationBalancerStateOutputReference {
    return new DataYandexComputeInstanceGroupApplicationBalancerStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupApplicationLoadBalancer {
}

export function dataYandexComputeInstanceGroupApplicationLoadBalancerToTerraform(struct?: DataYandexComputeInstanceGroupApplicationLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupApplicationLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupApplicationLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupApplicationLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_opening_traffic_duration - computed: true, optional: false, required: false
  public get maxOpeningTrafficDuration() {
    return this.getNumberAttribute('max_opening_traffic_duration');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_description - computed: true, optional: false, required: false
  public get targetGroupDescription() {
    return this.getStringAttribute('target_group_description');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_group_labels - computed: true, optional: false, required: false
  public targetGroupLabels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'target_group_labels').lookup(key);
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
}

export class DataYandexComputeInstanceGroupApplicationLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupApplicationLoadBalancerOutputReference {
    return new DataYandexComputeInstanceGroupApplicationLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupDeployPolicy {
}

export function dataYandexComputeInstanceGroupDeployPolicyToTerraform(struct?: DataYandexComputeInstanceGroupDeployPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupDeployPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupDeployPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupDeployPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_creating - computed: true, optional: false, required: false
  public get maxCreating() {
    return this.getNumberAttribute('max_creating');
  }

  // max_deleting - computed: true, optional: false, required: false
  public get maxDeleting() {
    return this.getNumberAttribute('max_deleting');
  }

  // max_expansion - computed: true, optional: false, required: false
  public get maxExpansion() {
    return this.getNumberAttribute('max_expansion');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }

  // startup_duration - computed: true, optional: false, required: false
  public get startupDuration() {
    return this.getNumberAttribute('startup_duration');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataYandexComputeInstanceGroupDeployPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupDeployPolicyOutputReference {
    return new DataYandexComputeInstanceGroupDeployPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupHealthCheckHttpOptions {
}

export function dataYandexComputeInstanceGroupHealthCheckHttpOptionsToTerraform(struct?: DataYandexComputeInstanceGroupHealthCheckHttpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupHealthCheckHttpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupHealthCheckHttpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupHealthCheckHttpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataYandexComputeInstanceGroupHealthCheckHttpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupHealthCheckHttpOptionsOutputReference {
    return new DataYandexComputeInstanceGroupHealthCheckHttpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupHealthCheckTcpOptions {
}

export function dataYandexComputeInstanceGroupHealthCheckTcpOptionsToTerraform(struct?: DataYandexComputeInstanceGroupHealthCheckTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupHealthCheckTcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupHealthCheckTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupHealthCheckTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataYandexComputeInstanceGroupHealthCheckTcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupHealthCheckTcpOptionsOutputReference {
    return new DataYandexComputeInstanceGroupHealthCheckTcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupHealthCheck {
}

export function dataYandexComputeInstanceGroupHealthCheckToTerraform(struct?: DataYandexComputeInstanceGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // http_options - computed: true, optional: false, required: false
  private _httpOptions = new DataYandexComputeInstanceGroupHealthCheckHttpOptionsList(this, "http_options", false);
  public get httpOptions() {
    return this._httpOptions;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // tcp_options - computed: true, optional: false, required: false
  private _tcpOptions = new DataYandexComputeInstanceGroupHealthCheckTcpOptionsList(this, "tcp_options", false);
  public get tcpOptions() {
    return this._tcpOptions;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export class DataYandexComputeInstanceGroupHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupHealthCheckOutputReference {
    return new DataYandexComputeInstanceGroupHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParams {
}

export function dataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateBootDisk {
}

export function dataYandexComputeInstanceGroupInstanceTemplateBootDiskToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateBootDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // initialize_params - computed: true, optional: false, required: false
  private _initializeParams = new DataYandexComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsList(this, "initialize_params", false);
  public get initializeParams() {
    return this._initializeParams;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateBootDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateBootDiskOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateBootDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord {
}

export function dataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord {
}

export function dataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord {
}

export function dataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateNetworkInterface {
}

export function dataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_record - computed: true, optional: false, required: false
  private _dnsRecord = new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_dns_record - computed: true, optional: false, required: false
  private _ipv6DnsRecord = new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordList(this, "ipv6_dns_record", false);
  public get ipv6DnsRecord() {
    return this._ipv6DnsRecord;
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_dns_record - computed: true, optional: false, required: false
  private _natDnsRecord = new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordList(this, "nat_dns_record", false);
  public get natDnsRecord() {
    return this._natDnsRecord;
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateNetworkSettings {
}

export function dataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateNetworkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateNetworkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateNetworkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicy {
}

export function dataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // placement_group_id - computed: true, optional: false, required: false
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateResources {
}

export function dataYandexComputeInstanceGroupInstanceTemplateResourcesToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_fraction - computed: true, optional: false, required: false
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateResourcesOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicy {
}

export function dataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams {
}

export function dataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplateSecondaryDisk {
}

export function dataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplateSecondaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplateSecondaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplateSecondaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // initialize_params - computed: true, optional: false, required: false
  private _initializeParams = new DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsList(this, "initialize_params", false);
  public get initializeParams() {
    return this._initializeParams;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstanceTemplate {
}

export function dataYandexComputeInstanceGroupInstanceTemplateToTerraform(struct?: DataYandexComputeInstanceGroupInstanceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstanceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstanceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_disk - computed: true, optional: false, required: false
  private _bootDisk = new DataYandexComputeInstanceGroupInstanceTemplateBootDiskList(this, "boot_disk", false);
  public get bootDisk() {
    return this._bootDisk;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataYandexComputeInstanceGroupInstanceTemplateNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // network_settings - computed: true, optional: false, required: false
  private _networkSettings = new DataYandexComputeInstanceGroupInstanceTemplateNetworkSettingsList(this, "network_settings", false);
  public get networkSettings() {
    return this._networkSettings;
  }

  // placement_policy - computed: true, optional: false, required: false
  private _placementPolicy = new DataYandexComputeInstanceGroupInstanceTemplatePlacementPolicyList(this, "placement_policy", false);
  public get placementPolicy() {
    return this._placementPolicy;
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexComputeInstanceGroupInstanceTemplateResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // scheduling_policy - computed: true, optional: false, required: false
  private _schedulingPolicy = new DataYandexComputeInstanceGroupInstanceTemplateSchedulingPolicyList(this, "scheduling_policy", false);
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }

  // secondary_disk - computed: true, optional: false, required: false
  private _secondaryDisk = new DataYandexComputeInstanceGroupInstanceTemplateSecondaryDiskList(this, "secondary_disk", false);
  public get secondaryDisk() {
    return this._secondaryDisk;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexComputeInstanceGroupInstanceTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstanceTemplateOutputReference {
    return new DataYandexComputeInstanceGroupInstanceTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstancesNetworkInterface {
}

export function dataYandexComputeInstanceGroupInstancesNetworkInterfaceToTerraform(struct?: DataYandexComputeInstanceGroupInstancesNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstancesNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstancesNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstancesNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataYandexComputeInstanceGroupInstancesNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstancesNetworkInterfaceOutputReference {
    return new DataYandexComputeInstanceGroupInstancesNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupInstances {
}

export function dataYandexComputeInstanceGroupInstancesToTerraform(struct?: DataYandexComputeInstanceGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataYandexComputeInstanceGroupInstancesNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_changed_at - computed: true, optional: false, required: false
  public get statusChangedAt() {
    return this.getStringAttribute('status_changed_at');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataYandexComputeInstanceGroupInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupInstancesOutputReference {
    return new DataYandexComputeInstanceGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupLoadBalancer {
}

export function dataYandexComputeInstanceGroupLoadBalancerToTerraform(struct?: DataYandexComputeInstanceGroupLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_opening_traffic_duration - computed: true, optional: false, required: false
  public get maxOpeningTrafficDuration() {
    return this.getNumberAttribute('max_opening_traffic_duration');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_description - computed: true, optional: false, required: false
  public get targetGroupDescription() {
    return this.getStringAttribute('target_group_description');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_group_labels - computed: true, optional: false, required: false
  public targetGroupLabels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'target_group_labels').lookup(key);
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
}

export class DataYandexComputeInstanceGroupLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupLoadBalancerOutputReference {
    return new DataYandexComputeInstanceGroupLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupLoadBalancerState {
}

export function dataYandexComputeInstanceGroupLoadBalancerStateToTerraform(struct?: DataYandexComputeInstanceGroupLoadBalancerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupLoadBalancerStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupLoadBalancerState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupLoadBalancerState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
}

export class DataYandexComputeInstanceGroupLoadBalancerStateList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupLoadBalancerStateOutputReference {
    return new DataYandexComputeInstanceGroupLoadBalancerStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRule {
}

export function dataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicyAutoScale {
}

export function dataYandexComputeInstanceGroupScalePolicyAutoScaleToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyAutoScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicyAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicyAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_utilization_target - computed: true, optional: false, required: false
  public get cpuUtilizationTarget() {
    return this.getNumberAttribute('cpu_utilization_target');
  }

  // custom_rule - computed: true, optional: false, required: false
  private _customRule = new DataYandexComputeInstanceGroupScalePolicyAutoScaleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }

  // initial_size - computed: true, optional: false, required: false
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // measurement_duration - computed: true, optional: false, required: false
  public get measurementDuration() {
    return this.getNumberAttribute('measurement_duration');
  }

  // min_zone_size - computed: true, optional: false, required: false
  public get minZoneSize() {
    return this.getNumberAttribute('min_zone_size');
  }

  // stabilization_duration - computed: true, optional: false, required: false
  public get stabilizationDuration() {
    return this.getNumberAttribute('stabilization_duration');
  }

  // warmup_duration - computed: true, optional: false, required: false
  public get warmupDuration() {
    return this.getNumberAttribute('warmup_duration');
  }
}

export class DataYandexComputeInstanceGroupScalePolicyAutoScaleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyAutoScaleOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyAutoScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicyFixedScale {
}

export function dataYandexComputeInstanceGroupScalePolicyFixedScaleToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyFixedScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicyFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicyFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataYandexComputeInstanceGroupScalePolicyFixedScaleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyFixedScaleOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyFixedScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRule {
}

export function dataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicyTestAutoScale {
}

export function dataYandexComputeInstanceGroupScalePolicyTestAutoScaleToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicyTestAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyTestAutoScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicyTestAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicyTestAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_utilization_target - computed: true, optional: false, required: false
  public get cpuUtilizationTarget() {
    return this.getNumberAttribute('cpu_utilization_target');
  }

  // custom_rule - computed: true, optional: false, required: false
  private _customRule = new DataYandexComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }

  // initial_size - computed: true, optional: false, required: false
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // measurement_duration - computed: true, optional: false, required: false
  public get measurementDuration() {
    return this.getNumberAttribute('measurement_duration');
  }

  // min_zone_size - computed: true, optional: false, required: false
  public get minZoneSize() {
    return this.getNumberAttribute('min_zone_size');
  }

  // stabilization_duration - computed: true, optional: false, required: false
  public get stabilizationDuration() {
    return this.getNumberAttribute('stabilization_duration');
  }

  // warmup_duration - computed: true, optional: false, required: false
  public get warmupDuration() {
    return this.getNumberAttribute('warmup_duration');
  }
}

export class DataYandexComputeInstanceGroupScalePolicyTestAutoScaleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyTestAutoScaleOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyTestAutoScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceGroupScalePolicy {
}

export function dataYandexComputeInstanceGroupScalePolicyToTerraform(struct?: DataYandexComputeInstanceGroupScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceGroupScalePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeInstanceGroupScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceGroupScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scale - computed: true, optional: false, required: false
  private _autoScale = new DataYandexComputeInstanceGroupScalePolicyAutoScaleList(this, "auto_scale", false);
  public get autoScale() {
    return this._autoScale;
  }

  // fixed_scale - computed: true, optional: false, required: false
  private _fixedScale = new DataYandexComputeInstanceGroupScalePolicyFixedScaleList(this, "fixed_scale", false);
  public get fixedScale() {
    return this._fixedScale;
  }

  // test_auto_scale - computed: true, optional: false, required: false
  private _testAutoScale = new DataYandexComputeInstanceGroupScalePolicyTestAutoScaleList(this, "test_auto_scale", false);
  public get testAutoScale() {
    return this._testAutoScale;
  }
}

export class DataYandexComputeInstanceGroupScalePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceGroupScalePolicyOutputReference {
    return new DataYandexComputeInstanceGroupScalePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance_group yandex_compute_instance_group}
*/
export class DataYandexComputeInstanceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_instance_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance_group yandex_compute_instance_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexComputeInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexComputeInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_instance_group',
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
    this._instanceGroupId = config.instanceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_policy - computed: true, optional: false, required: false
  private _allocationPolicy = new DataYandexComputeInstanceGroupAllocationPolicyList(this, "allocation_policy", false);
  public get allocationPolicy() {
    return this._allocationPolicy;
  }

  // application_balancer_state - computed: true, optional: false, required: false
  private _applicationBalancerState = new DataYandexComputeInstanceGroupApplicationBalancerStateList(this, "application_balancer_state", false);
  public get applicationBalancerState() {
    return this._applicationBalancerState;
  }

  // application_load_balancer - computed: true, optional: false, required: false
  private _applicationLoadBalancer = new DataYandexComputeInstanceGroupApplicationLoadBalancerList(this, "application_load_balancer", false);
  public get applicationLoadBalancer() {
    return this._applicationLoadBalancer;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // deploy_policy - computed: true, optional: false, required: false
  private _deployPolicy = new DataYandexComputeInstanceGroupDeployPolicyList(this, "deploy_policy", false);
  public get deployPolicy() {
    return this._deployPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataYandexComputeInstanceGroupHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_id - computed: false, optional: false, required: true
  private _instanceGroupId?: string; 
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }
  public set instanceGroupId(value: string) {
    this._instanceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupIdInput() {
    return this._instanceGroupId;
  }

  // instance_template - computed: true, optional: false, required: false
  private _instanceTemplate = new DataYandexComputeInstanceGroupInstanceTemplateList(this, "instance_template", false);
  public get instanceTemplate() {
    return this._instanceTemplate;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataYandexComputeInstanceGroupInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataYandexComputeInstanceGroupLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // load_balancer_state - computed: true, optional: false, required: false
  private _loadBalancerState = new DataYandexComputeInstanceGroupLoadBalancerStateList(this, "load_balancer_state", false);
  public get loadBalancerState() {
    return this._loadBalancerState;
  }

  // max_checking_health_duration - computed: true, optional: false, required: false
  public get maxCheckingHealthDuration() {
    return this.getNumberAttribute('max_checking_health_duration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scale_policy - computed: true, optional: false, required: false
  private _scalePolicy = new DataYandexComputeInstanceGroupScalePolicyList(this, "scale_policy", false);
  public get scalePolicy() {
    return this._scalePolicy;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // variables - computed: true, optional: false, required: false
  public variables(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'variables').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_group_id: cdktf.stringToTerraform(this._instanceGroupId),
    };
  }
}
