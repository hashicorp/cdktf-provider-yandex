// https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#allowed_unsafe_sysctls KubernetesNodeGroup#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#cluster_id KubernetesNodeGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#description KubernetesNodeGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#id KubernetesNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#labels KubernetesNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#name KubernetesNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#node_labels KubernetesNodeGroup#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#node_taints KubernetesNodeGroup#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#version KubernetesNodeGroup#version}
  */
  readonly version?: string;
  /**
  * allocation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#allocation_policy KubernetesNodeGroup#allocation_policy}
  */
  readonly allocationPolicy?: KubernetesNodeGroupAllocationPolicy;
  /**
  * deploy_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#deploy_policy KubernetesNodeGroup#deploy_policy}
  */
  readonly deployPolicy?: KubernetesNodeGroupDeployPolicy;
  /**
  * instance_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#instance_template KubernetesNodeGroup#instance_template}
  */
  readonly instanceTemplate: KubernetesNodeGroupInstanceTemplate;
  /**
  * maintenance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#maintenance_policy KubernetesNodeGroup#maintenance_policy}
  */
  readonly maintenancePolicy?: KubernetesNodeGroupMaintenancePolicy;
  /**
  * scale_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#scale_policy KubernetesNodeGroup#scale_policy}
  */
  readonly scalePolicy: KubernetesNodeGroupScalePolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#timeouts KubernetesNodeGroup#timeouts}
  */
  readonly timeouts?: KubernetesNodeGroupTimeouts;
}
export interface KubernetesNodeGroupVersionInfo {
}

export function kubernetesNodeGroupVersionInfoToTerraform(struct?: KubernetesNodeGroupVersionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KubernetesNodeGroupVersionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupVersionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupVersionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // new_revision_available - computed: true, optional: false, required: false
  public get newRevisionAvailable() {
    return this.getBooleanAttribute('new_revision_available');
  }

  // new_revision_summary - computed: true, optional: false, required: false
  public get newRevisionSummary() {
    return this.getStringAttribute('new_revision_summary');
  }

  // version_deprecated - computed: true, optional: false, required: false
  public get versionDeprecated() {
    return this.getBooleanAttribute('version_deprecated');
  }
}

export class KubernetesNodeGroupVersionInfoList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesNodeGroupVersionInfoOutputReference {
    return new KubernetesNodeGroupVersionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupAllocationPolicyLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#subnet_id KubernetesNodeGroup#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#zone KubernetesNodeGroup#zone}
  */
  readonly zone?: string;
}

export function kubernetesNodeGroupAllocationPolicyLocationToTerraform(struct?: KubernetesNodeGroupAllocationPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class KubernetesNodeGroupAllocationPolicyLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupAllocationPolicyLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupAllocationPolicyLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class KubernetesNodeGroupAllocationPolicyLocationList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupAllocationPolicyLocation[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupAllocationPolicyLocationOutputReference {
    return new KubernetesNodeGroupAllocationPolicyLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupAllocationPolicy {
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#location KubernetesNodeGroup#location}
  */
  readonly location?: KubernetesNodeGroupAllocationPolicyLocation[] | cdktf.IResolvable;
}

export function kubernetesNodeGroupAllocationPolicyToTerraform(struct?: KubernetesNodeGroupAllocationPolicyOutputReference | KubernetesNodeGroupAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(kubernetesNodeGroupAllocationPolicyLocationToTerraform)(struct!.location),
  }
}

export class KubernetesNodeGroupAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location = new KubernetesNodeGroupAllocationPolicyLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: KubernetesNodeGroupAllocationPolicyLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface KubernetesNodeGroupDeployPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#max_expansion KubernetesNodeGroup#max_expansion}
  */
  readonly maxExpansion: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#max_unavailable KubernetesNodeGroup#max_unavailable}
  */
  readonly maxUnavailable: number;
}

export function kubernetesNodeGroupDeployPolicyToTerraform(struct?: KubernetesNodeGroupDeployPolicyOutputReference | KubernetesNodeGroupDeployPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_expansion: cdktf.numberToTerraform(struct!.maxExpansion),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}

export class KubernetesNodeGroupDeployPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupDeployPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpansion = this._maxExpansion;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupDeployPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxExpansion = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxExpansion = value.maxExpansion;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_expansion - computed: false, optional: false, required: true
  private _maxExpansion?: number; 
  public get maxExpansion() {
    return this.getNumberAttribute('max_expansion');
  }
  public set maxExpansion(value: number) {
    this._maxExpansion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpansionInput() {
    return this._maxExpansion;
  }

  // max_unavailable - computed: false, optional: false, required: true
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface KubernetesNodeGroupInstanceTemplateBootDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#size KubernetesNodeGroup#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#type KubernetesNodeGroup#type}
  */
  readonly type?: string;
}

export function kubernetesNodeGroupInstanceTemplateBootDiskToTerraform(struct?: KubernetesNodeGroupInstanceTemplateBootDiskOutputReference | KubernetesNodeGroupInstanceTemplateBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class KubernetesNodeGroupInstanceTemplateBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplateBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplateBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface KubernetesNodeGroupInstanceTemplateContainerRuntime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#type KubernetesNodeGroup#type}
  */
  readonly type: string;
}

export function kubernetesNodeGroupInstanceTemplateContainerRuntimeToTerraform(struct?: KubernetesNodeGroupInstanceTemplateContainerRuntimeOutputReference | KubernetesNodeGroupInstanceTemplateContainerRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class KubernetesNodeGroupInstanceTemplateContainerRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplateContainerRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplateContainerRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface KubernetesNodeGroupInstanceTemplateNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#ipv4 KubernetesNodeGroup#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#ipv6 KubernetesNodeGroup#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#nat KubernetesNodeGroup#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#security_group_ids KubernetesNodeGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#subnet_ids KubernetesNodeGroup#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kubernetesNodeGroupInstanceTemplateNetworkInterfaceToTerraform(struct?: KubernetesNodeGroupInstanceTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    nat: cdktf.booleanToTerraform(struct!.nat),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class KubernetesNodeGroupInstanceTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._nat = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._nat = value.nat;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class KubernetesNodeGroupInstanceTemplateNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupInstanceTemplateNetworkInterfaceOutputReference {
    return new KubernetesNodeGroupInstanceTemplateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupInstanceTemplatePlacementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#placement_group_id KubernetesNodeGroup#placement_group_id}
  */
  readonly placementGroupId: string;
}

export function kubernetesNodeGroupInstanceTemplatePlacementPolicyToTerraform(struct?: KubernetesNodeGroupInstanceTemplatePlacementPolicyOutputReference | KubernetesNodeGroupInstanceTemplatePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placement_group_id: cdktf.stringToTerraform(struct!.placementGroupId),
  }
}

export class KubernetesNodeGroupInstanceTemplatePlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplatePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupId = this._placementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplatePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placementGroupId = value.placementGroupId;
    }
  }

  // placement_group_id - computed: false, optional: false, required: true
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }
}
export interface KubernetesNodeGroupInstanceTemplateResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#core_fraction KubernetesNodeGroup#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#cores KubernetesNodeGroup#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#gpus KubernetesNodeGroup#gpus}
  */
  readonly gpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#memory KubernetesNodeGroup#memory}
  */
  readonly memory?: number;
}

export function kubernetesNodeGroupInstanceTemplateResourcesToTerraform(struct?: KubernetesNodeGroupInstanceTemplateResourcesOutputReference | KubernetesNodeGroupInstanceTemplateResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export class KubernetesNodeGroupInstanceTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplateResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplateResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._gpus = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._gpus = value.gpus;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: true, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: true, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface KubernetesNodeGroupInstanceTemplateSchedulingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#preemptible KubernetesNodeGroup#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
}

export function kubernetesNodeGroupInstanceTemplateSchedulingPolicyToTerraform(struct?: KubernetesNodeGroupInstanceTemplateSchedulingPolicyOutputReference | KubernetesNodeGroupInstanceTemplateSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}

export class KubernetesNodeGroupInstanceTemplateSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplateSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplateSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
    }
  }

  // preemptible - computed: true, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }
}
export interface KubernetesNodeGroupInstanceTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#metadata KubernetesNodeGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#nat KubernetesNodeGroup#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#network_acceleration_type KubernetesNodeGroup#network_acceleration_type}
  */
  readonly networkAccelerationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#platform_id KubernetesNodeGroup#platform_id}
  */
  readonly platformId?: string;
  /**
  * boot_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#boot_disk KubernetesNodeGroup#boot_disk}
  */
  readonly bootDisk?: KubernetesNodeGroupInstanceTemplateBootDisk;
  /**
  * container_runtime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#container_runtime KubernetesNodeGroup#container_runtime}
  */
  readonly containerRuntime?: KubernetesNodeGroupInstanceTemplateContainerRuntime;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#network_interface KubernetesNodeGroup#network_interface}
  */
  readonly networkInterface?: KubernetesNodeGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable;
  /**
  * placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#placement_policy KubernetesNodeGroup#placement_policy}
  */
  readonly placementPolicy?: KubernetesNodeGroupInstanceTemplatePlacementPolicy;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#resources KubernetesNodeGroup#resources}
  */
  readonly resources?: KubernetesNodeGroupInstanceTemplateResources;
  /**
  * scheduling_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#scheduling_policy KubernetesNodeGroup#scheduling_policy}
  */
  readonly schedulingPolicy?: KubernetesNodeGroupInstanceTemplateSchedulingPolicy;
}

export function kubernetesNodeGroupInstanceTemplateToTerraform(struct?: KubernetesNodeGroupInstanceTemplateOutputReference | KubernetesNodeGroupInstanceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    nat: cdktf.booleanToTerraform(struct!.nat),
    network_acceleration_type: cdktf.stringToTerraform(struct!.networkAccelerationType),
    platform_id: cdktf.stringToTerraform(struct!.platformId),
    boot_disk: kubernetesNodeGroupInstanceTemplateBootDiskToTerraform(struct!.bootDisk),
    container_runtime: kubernetesNodeGroupInstanceTemplateContainerRuntimeToTerraform(struct!.containerRuntime),
    network_interface: cdktf.listMapper(kubernetesNodeGroupInstanceTemplateNetworkInterfaceToTerraform)(struct!.networkInterface),
    placement_policy: kubernetesNodeGroupInstanceTemplatePlacementPolicyToTerraform(struct!.placementPolicy),
    resources: kubernetesNodeGroupInstanceTemplateResourcesToTerraform(struct!.resources),
    scheduling_policy: kubernetesNodeGroupInstanceTemplateSchedulingPolicyToTerraform(struct!.schedulingPolicy),
  }
}

export class KubernetesNodeGroupInstanceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupInstanceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._networkAccelerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccelerationType = this._networkAccelerationType;
    }
    if (this._platformId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformId = this._platformId;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._containerRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRuntime = this._containerRuntime?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupInstanceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._nat = undefined;
      this._networkAccelerationType = undefined;
      this._platformId = undefined;
      this._bootDisk.internalValue = undefined;
      this._containerRuntime.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._schedulingPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._nat = value.nat;
      this._networkAccelerationType = value.networkAccelerationType;
      this._platformId = value.platformId;
      this._bootDisk.internalValue = value.bootDisk;
      this._containerRuntime.internalValue = value.containerRuntime;
      this._networkInterface.internalValue = value.networkInterface;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._resources.internalValue = value.resources;
      this._schedulingPolicy.internalValue = value.schedulingPolicy;
    }
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // network_acceleration_type - computed: true, optional: true, required: false
  private _networkAccelerationType?: string; 
  public get networkAccelerationType() {
    return this.getStringAttribute('network_acceleration_type');
  }
  public set networkAccelerationType(value: string) {
    this._networkAccelerationType = value;
  }
  public resetNetworkAccelerationType() {
    this._networkAccelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccelerationTypeInput() {
    return this._networkAccelerationType;
  }

  // platform_id - computed: true, optional: true, required: false
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new KubernetesNodeGroupInstanceTemplateBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: KubernetesNodeGroupInstanceTemplateBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // container_runtime - computed: false, optional: true, required: false
  private _containerRuntime = new KubernetesNodeGroupInstanceTemplateContainerRuntimeOutputReference(this, "container_runtime");
  public get containerRuntime() {
    return this._containerRuntime;
  }
  public putContainerRuntime(value: KubernetesNodeGroupInstanceTemplateContainerRuntime) {
    this._containerRuntime.internalValue = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new KubernetesNodeGroupInstanceTemplateNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: KubernetesNodeGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new KubernetesNodeGroupInstanceTemplatePlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: KubernetesNodeGroupInstanceTemplatePlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new KubernetesNodeGroupInstanceTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: KubernetesNodeGroupInstanceTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new KubernetesNodeGroupInstanceTemplateSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: KubernetesNodeGroupInstanceTemplateSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }
}
export interface KubernetesNodeGroupMaintenancePolicyMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#day KubernetesNodeGroup#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#duration KubernetesNodeGroup#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#start_time KubernetesNodeGroup#start_time}
  */
  readonly startTime: string;
}

export function kubernetesNodeGroupMaintenancePolicyMaintenanceWindowToTerraform(struct?: KubernetesNodeGroupMaintenancePolicyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    duration: cdktf.stringToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class KubernetesNodeGroupMaintenancePolicyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupMaintenancePolicyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupMaintenancePolicyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._duration = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._duration = value.duration;
      this._startTime = value.startTime;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class KubernetesNodeGroupMaintenancePolicyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupMaintenancePolicyMaintenanceWindowOutputReference {
    return new KubernetesNodeGroupMaintenancePolicyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupMaintenancePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#auto_repair KubernetesNodeGroup#auto_repair}
  */
  readonly autoRepair: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#auto_upgrade KubernetesNodeGroup#auto_upgrade}
  */
  readonly autoUpgrade: boolean | cdktf.IResolvable;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#maintenance_window KubernetesNodeGroup#maintenance_window}
  */
  readonly maintenanceWindow?: KubernetesNodeGroupMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable;
}

export function kubernetesNodeGroupMaintenancePolicyToTerraform(struct?: KubernetesNodeGroupMaintenancePolicyOutputReference | KubernetesNodeGroupMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
    maintenance_window: cdktf.listMapper(kubernetesNodeGroupMaintenancePolicyMaintenanceWindowToTerraform)(struct!.maintenanceWindow),
  }
}

export class KubernetesNodeGroupMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // auto_repair - computed: false, optional: false, required: true
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: false, required: true
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new KubernetesNodeGroupMaintenancePolicyMaintenanceWindowList(this, "maintenance_window", true);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: KubernetesNodeGroupMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface KubernetesNodeGroupScalePolicyAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#initial KubernetesNodeGroup#initial}
  */
  readonly initial: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#max KubernetesNodeGroup#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#min KubernetesNodeGroup#min}
  */
  readonly min: number;
}

export function kubernetesNodeGroupScalePolicyAutoScaleToTerraform(struct?: KubernetesNodeGroupScalePolicyAutoScaleOutputReference | KubernetesNodeGroupScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial: cdktf.numberToTerraform(struct!.initial),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class KubernetesNodeGroupScalePolicyAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupScalePolicyAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initial = this._initial;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupScalePolicyAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initial = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initial = value.initial;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // initial - computed: false, optional: false, required: true
  private _initial?: number; 
  public get initial() {
    return this.getNumberAttribute('initial');
  }
  public set initial(value: number) {
    this._initial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInput() {
    return this._initial;
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface KubernetesNodeGroupScalePolicyFixedScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#size KubernetesNodeGroup#size}
  */
  readonly size?: number;
}

export function kubernetesNodeGroupScalePolicyFixedScaleToTerraform(struct?: KubernetesNodeGroupScalePolicyFixedScaleOutputReference | KubernetesNodeGroupScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class KubernetesNodeGroupScalePolicyFixedScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupScalePolicyFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupScalePolicyFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface KubernetesNodeGroupScalePolicy {
  /**
  * auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#auto_scale KubernetesNodeGroup#auto_scale}
  */
  readonly autoScale?: KubernetesNodeGroupScalePolicyAutoScale;
  /**
  * fixed_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#fixed_scale KubernetesNodeGroup#fixed_scale}
  */
  readonly fixedScale?: KubernetesNodeGroupScalePolicyFixedScale;
}

export function kubernetesNodeGroupScalePolicyToTerraform(struct?: KubernetesNodeGroupScalePolicyOutputReference | KubernetesNodeGroupScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: kubernetesNodeGroupScalePolicyAutoScaleToTerraform(struct!.autoScale),
    fixed_scale: kubernetesNodeGroupScalePolicyFixedScaleToTerraform(struct!.fixedScale),
  }
}

export class KubernetesNodeGroupScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale?.internalValue;
    }
    if (this._fixedScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedScale = this._fixedScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale.internalValue = undefined;
      this._fixedScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale.internalValue = value.autoScale;
      this._fixedScale.internalValue = value.fixedScale;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new KubernetesNodeGroupScalePolicyAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: KubernetesNodeGroupScalePolicyAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale = new KubernetesNodeGroupScalePolicyFixedScaleOutputReference(this, "fixed_scale");
  public get fixedScale() {
    return this._fixedScale;
  }
  public putFixedScale(value: KubernetesNodeGroupScalePolicyFixedScale) {
    this._fixedScale.internalValue = value;
  }
  public resetFixedScale() {
    this._fixedScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale.internalValue;
  }
}
export interface KubernetesNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#create KubernetesNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#delete KubernetesNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#read KubernetesNodeGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group#update KubernetesNodeGroup#update}
  */
  readonly update?: string;
}

export function kubernetesNodeGroupTimeoutsToTerraform(struct?: KubernetesNodeGroupTimeoutsOutputReference | KubernetesNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KubernetesNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodeGroupTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group yandex_kubernetes_node_group}
*/
export class KubernetesNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_kubernetes_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_node_group yandex_kubernetes_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_kubernetes_node_group',
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
    this._allowedUnsafeSysctls = config.allowedUnsafeSysctls;
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeLabels = config.nodeLabels;
    this._nodeTaints = config.nodeTaints;
    this._version = config.version;
    this._allocationPolicy.internalValue = config.allocationPolicy;
    this._deployPolicy.internalValue = config.deployPolicy;
    this._instanceTemplate.internalValue = config.instanceTemplate;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._scalePolicy.internalValue = config.scalePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }

  // labels - computed: true, optional: true, required: false
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

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[]; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[]) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_info - computed: true, optional: false, required: false
  private _versionInfo = new KubernetesNodeGroupVersionInfoList(this, "version_info", false);
  public get versionInfo() {
    return this._versionInfo;
  }

  // allocation_policy - computed: false, optional: true, required: false
  private _allocationPolicy = new KubernetesNodeGroupAllocationPolicyOutputReference(this, "allocation_policy");
  public get allocationPolicy() {
    return this._allocationPolicy;
  }
  public putAllocationPolicy(value: KubernetesNodeGroupAllocationPolicy) {
    this._allocationPolicy.internalValue = value;
  }
  public resetAllocationPolicy() {
    this._allocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy.internalValue;
  }

  // deploy_policy - computed: false, optional: true, required: false
  private _deployPolicy = new KubernetesNodeGroupDeployPolicyOutputReference(this, "deploy_policy");
  public get deployPolicy() {
    return this._deployPolicy;
  }
  public putDeployPolicy(value: KubernetesNodeGroupDeployPolicy) {
    this._deployPolicy.internalValue = value;
  }
  public resetDeployPolicy() {
    this._deployPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPolicyInput() {
    return this._deployPolicy.internalValue;
  }

  // instance_template - computed: false, optional: false, required: true
  private _instanceTemplate = new KubernetesNodeGroupInstanceTemplateOutputReference(this, "instance_template");
  public get instanceTemplate() {
    return this._instanceTemplate;
  }
  public putInstanceTemplate(value: KubernetesNodeGroupInstanceTemplate) {
    this._instanceTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTemplateInput() {
    return this._instanceTemplate.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new KubernetesNodeGroupMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: KubernetesNodeGroupMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // scale_policy - computed: false, optional: false, required: true
  private _scalePolicy = new KubernetesNodeGroupScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: KubernetesNodeGroupScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesNodeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesNodeGroupTimeouts) {
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
      allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedUnsafeSysctls),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeLabels),
      node_taints: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeTaints),
      version: cdktf.stringToTerraform(this._version),
      allocation_policy: kubernetesNodeGroupAllocationPolicyToTerraform(this._allocationPolicy.internalValue),
      deploy_policy: kubernetesNodeGroupDeployPolicyToTerraform(this._deployPolicy.internalValue),
      instance_template: kubernetesNodeGroupInstanceTemplateToTerraform(this._instanceTemplate.internalValue),
      maintenance_policy: kubernetesNodeGroupMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      scale_policy: kubernetesNodeGroupScalePolicyToTerraform(this._scalePolicy.internalValue),
      timeouts: kubernetesNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
