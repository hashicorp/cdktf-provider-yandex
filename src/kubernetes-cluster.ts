// https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#cluster_ipv4_range KubernetesCluster#cluster_ipv4_range}
  */
  readonly clusterIpv4Range?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#cluster_ipv6_range KubernetesCluster#cluster_ipv6_range}
  */
  readonly clusterIpv6Range?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#description KubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#folder_id KubernetesCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#network_id KubernetesCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#network_policy_provider KubernetesCluster#network_policy_provider}
  */
  readonly networkPolicyProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#node_ipv4_cidr_mask_size KubernetesCluster#node_ipv4_cidr_mask_size}
  */
  readonly nodeIpv4CidrMaskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#node_service_account_id KubernetesCluster#node_service_account_id}
  */
  readonly nodeServiceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#release_channel KubernetesCluster#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#service_account_id KubernetesCluster#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#service_ipv4_range KubernetesCluster#service_ipv4_range}
  */
  readonly serviceIpv4Range?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#service_ipv6_range KubernetesCluster#service_ipv6_range}
  */
  readonly serviceIpv6Range?: string;
  /**
  * kms_provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#kms_provider KubernetesCluster#kms_provider}
  */
  readonly kmsProvider?: KubernetesClusterKmsProvider;
  /**
  * master block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#master KubernetesCluster#master}
  */
  readonly master: KubernetesClusterMaster;
  /**
  * network_implementation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#network_implementation KubernetesCluster#network_implementation}
  */
  readonly networkImplementation?: KubernetesClusterNetworkImplementation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
}
export interface KubernetesClusterKmsProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#key_id KubernetesCluster#key_id}
  */
  readonly keyId?: string;
}

export function kubernetesClusterKmsProviderToTerraform(struct?: KubernetesClusterKmsProviderOutputReference | KubernetesClusterKmsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class KubernetesClusterKmsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterKmsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKmsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface KubernetesClusterMasterVersionInfo {
}

export function kubernetesClusterMasterVersionInfoToTerraform(struct?: KubernetesClusterMasterVersionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KubernetesClusterMasterVersionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterVersionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterVersionInfo | undefined) {
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

export class KubernetesClusterMasterVersionInfoList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterMasterVersionInfoOutputReference {
    return new KubernetesClusterMasterVersionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterMaintenancePolicyMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#day KubernetesCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#duration KubernetesCluster#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#start_time KubernetesCluster#start_time}
  */
  readonly startTime: string;
}

export function kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToTerraform(struct?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow | cdktf.IResolvable): any {
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

export interface KubernetesClusterMasterMaintenancePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}
  */
  readonly autoUpgrade: boolean | cdktf.IResolvable;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#maintenance_window KubernetesCluster#maintenance_window}
  */
  readonly maintenanceWindow?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterMaintenancePolicyToTerraform(struct?: KubernetesClusterMasterMaintenancePolicyOutputReference | KubernetesClusterMasterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
    maintenance_window: cdktf.listMapper(kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToTerraform)(struct!.maintenanceWindow),
  }
}

export class KubernetesClusterMasterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    if (this._maintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpgrade = undefined;
      this._maintenanceWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpgrade = value.autoUpgrade;
      this._maintenanceWindow = value.maintenanceWindow;
    }
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
  private _maintenanceWindow?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable; 
  public get maintenanceWindow() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('maintenance_window')));
  }
  public set maintenanceWindow(value: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }
}
export interface KubernetesClusterMasterRegionalLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone?: string;
}

export function kubernetesClusterMasterRegionalLocationToTerraform(struct?: KubernetesClusterMasterRegionalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface KubernetesClusterMasterRegional {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#region KubernetesCluster#region}
  */
  readonly region: string;
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#location KubernetesCluster#location}
  */
  readonly location?: KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterRegionalToTerraform(struct?: KubernetesClusterMasterRegionalOutputReference | KubernetesClusterMasterRegional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    location: cdktf.listMapper(kubernetesClusterMasterRegionalLocationToTerraform)(struct!.location),
  }
}

export class KubernetesClusterMasterRegionalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterRegional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterRegional | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._location = value.location;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // location - computed: false, optional: true, required: false
  private _location?: KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable; 
  public get location() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('location');
  }
  public set location(value: KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface KubernetesClusterMasterZonal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone?: string;
}

export function kubernetesClusterMasterZonalToTerraform(struct?: KubernetesClusterMasterZonalOutputReference | KubernetesClusterMasterZonal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class KubernetesClusterMasterZonalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterZonal | undefined {
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

  public set internalValue(value: KubernetesClusterMasterZonal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
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
export interface KubernetesClusterMaster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#public_ip KubernetesCluster#public_ip}
  */
  readonly publicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#security_group_ids KubernetesCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version?: string;
  /**
  * maintenance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: KubernetesClusterMasterMaintenancePolicy;
  /**
  * regional block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#regional KubernetesCluster#regional}
  */
  readonly regional?: KubernetesClusterMasterRegional;
  /**
  * zonal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#zonal KubernetesCluster#zonal}
  */
  readonly zonal?: KubernetesClusterMasterZonal;
}

export function kubernetesClusterMasterToTerraform(struct?: KubernetesClusterMasterOutputReference | KubernetesClusterMaster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: cdktf.booleanToTerraform(struct!.publicIp),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    version: cdktf.stringToTerraform(struct!.version),
    maintenance_policy: kubernetesClusterMasterMaintenancePolicyToTerraform(struct!.maintenancePolicy),
    regional: kubernetesClusterMasterRegionalToTerraform(struct!.regional),
    zonal: kubernetesClusterMasterZonalToTerraform(struct!.zonal),
  }
}

export class KubernetesClusterMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMaster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp = undefined;
      this._securityGroupIds = undefined;
      this._version = undefined;
      this._maintenancePolicy.internalValue = undefined;
      this._regional.internalValue = undefined;
      this._zonal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp = value.publicIp;
      this._securityGroupIds = value.securityGroupIds;
      this._version = value.version;
      this._maintenancePolicy.internalValue = value.maintenancePolicy;
      this._regional.internalValue = value.regional;
      this._zonal.internalValue = value.zonal;
    }
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // external_v4_address - computed: true, optional: false, required: false
  public get externalV4Address() {
    return this.getStringAttribute('external_v4_address');
  }

  // external_v4_endpoint - computed: true, optional: false, required: false
  public get externalV4Endpoint() {
    return this.getStringAttribute('external_v4_endpoint');
  }

  // internal_v4_address - computed: true, optional: false, required: false
  public get internalV4Address() {
    return this.getStringAttribute('internal_v4_address');
  }

  // internal_v4_endpoint - computed: true, optional: false, required: false
  public get internalV4Endpoint() {
    return this.getStringAttribute('internal_v4_endpoint');
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: boolean | cdktf.IResolvable; 
  public get publicIp() {
    return this.getBooleanAttribute('public_ip');
  }
  public set publicIp(value: boolean | cdktf.IResolvable) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
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
  private _versionInfo = new KubernetesClusterMasterVersionInfoList(this, "version_info", false);
  public get versionInfo() {
    return this._versionInfo;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new KubernetesClusterMasterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: KubernetesClusterMasterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // regional - computed: false, optional: true, required: false
  private _regional = new KubernetesClusterMasterRegionalOutputReference(this, "regional");
  public get regional() {
    return this._regional;
  }
  public putRegional(value: KubernetesClusterMasterRegional) {
    this._regional.internalValue = value;
  }
  public resetRegional() {
    this._regional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalInput() {
    return this._regional.internalValue;
  }

  // zonal - computed: false, optional: true, required: false
  private _zonal = new KubernetesClusterMasterZonalOutputReference(this, "zonal");
  public get zonal() {
    return this._zonal;
  }
  public putZonal(value: KubernetesClusterMasterZonal) {
    this._zonal.internalValue = value;
  }
  public resetZonal() {
    this._zonal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalInput() {
    return this._zonal.internalValue;
  }
}
export interface KubernetesClusterNetworkImplementationCilium {
}

export function kubernetesClusterNetworkImplementationCiliumToTerraform(struct?: KubernetesClusterNetworkImplementationCiliumOutputReference | KubernetesClusterNetworkImplementationCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KubernetesClusterNetworkImplementationCiliumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkImplementationCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkImplementationCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface KubernetesClusterNetworkImplementation {
  /**
  * cilium block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#cilium KubernetesCluster#cilium}
  */
  readonly cilium?: KubernetesClusterNetworkImplementationCilium;
}

export function kubernetesClusterNetworkImplementationToTerraform(struct?: KubernetesClusterNetworkImplementationOutputReference | KubernetesClusterNetworkImplementation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cilium: kubernetesClusterNetworkImplementationCiliumToTerraform(struct!.cilium),
  }
}

export class KubernetesClusterNetworkImplementationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkImplementation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkImplementation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cilium.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cilium.internalValue = value.cilium;
    }
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new KubernetesClusterNetworkImplementationCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: KubernetesClusterNetworkImplementationCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#read KubernetesCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster#update KubernetesCluster#update}
  */
  readonly update?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeoutsOutputReference | KubernetesClusterTimeouts | cdktf.IResolvable): any {
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

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterTimeouts | undefined {
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

  public set internalValue(value: KubernetesClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster yandex_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/kubernetes_cluster yandex_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_kubernetes_cluster',
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
    this._clusterIpv4Range = config.clusterIpv4Range;
    this._clusterIpv6Range = config.clusterIpv6Range;
    this._description = config.description;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._networkPolicyProvider = config.networkPolicyProvider;
    this._nodeIpv4CidrMaskSize = config.nodeIpv4CidrMaskSize;
    this._nodeServiceAccountId = config.nodeServiceAccountId;
    this._releaseChannel = config.releaseChannel;
    this._serviceAccountId = config.serviceAccountId;
    this._serviceIpv4Range = config.serviceIpv4Range;
    this._serviceIpv6Range = config.serviceIpv6Range;
    this._kmsProvider.internalValue = config.kmsProvider;
    this._master.internalValue = config.master;
    this._networkImplementation.internalValue = config.networkImplementation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ipv4_range - computed: true, optional: true, required: false
  private _clusterIpv4Range?: string; 
  public get clusterIpv4Range() {
    return this.getStringAttribute('cluster_ipv4_range');
  }
  public set clusterIpv4Range(value: string) {
    this._clusterIpv4Range = value;
  }
  public resetClusterIpv4Range() {
    this._clusterIpv4Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4RangeInput() {
    return this._clusterIpv4Range;
  }

  // cluster_ipv6_range - computed: true, optional: true, required: false
  private _clusterIpv6Range?: string; 
  public get clusterIpv6Range() {
    return this.getStringAttribute('cluster_ipv6_range');
  }
  public set clusterIpv6Range(value: string) {
    this._clusterIpv6Range = value;
  }
  public resetClusterIpv6Range() {
    this._clusterIpv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv6RangeInput() {
    return this._clusterIpv6Range;
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

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_policy_provider - computed: false, optional: true, required: false
  private _networkPolicyProvider?: string; 
  public get networkPolicyProvider() {
    return this.getStringAttribute('network_policy_provider');
  }
  public set networkPolicyProvider(value: string) {
    this._networkPolicyProvider = value;
  }
  public resetNetworkPolicyProvider() {
    this._networkPolicyProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyProviderInput() {
    return this._networkPolicyProvider;
  }

  // node_ipv4_cidr_mask_size - computed: false, optional: true, required: false
  private _nodeIpv4CidrMaskSize?: number; 
  public get nodeIpv4CidrMaskSize() {
    return this.getNumberAttribute('node_ipv4_cidr_mask_size');
  }
  public set nodeIpv4CidrMaskSize(value: number) {
    this._nodeIpv4CidrMaskSize = value;
  }
  public resetNodeIpv4CidrMaskSize() {
    this._nodeIpv4CidrMaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpv4CidrMaskSizeInput() {
    return this._nodeIpv4CidrMaskSize;
  }

  // node_service_account_id - computed: false, optional: false, required: true
  private _nodeServiceAccountId?: string; 
  public get nodeServiceAccountId() {
    return this.getStringAttribute('node_service_account_id');
  }
  public set nodeServiceAccountId(value: string) {
    this._nodeServiceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeServiceAccountIdInput() {
    return this._nodeServiceAccountId;
  }

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_ipv4_range - computed: true, optional: true, required: false
  private _serviceIpv4Range?: string; 
  public get serviceIpv4Range() {
    return this.getStringAttribute('service_ipv4_range');
  }
  public set serviceIpv4Range(value: string) {
    this._serviceIpv4Range = value;
  }
  public resetServiceIpv4Range() {
    this._serviceIpv4Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4RangeInput() {
    return this._serviceIpv4Range;
  }

  // service_ipv6_range - computed: true, optional: true, required: false
  private _serviceIpv6Range?: string; 
  public get serviceIpv6Range() {
    return this.getStringAttribute('service_ipv6_range');
  }
  public set serviceIpv6Range(value: string) {
    this._serviceIpv6Range = value;
  }
  public resetServiceIpv6Range() {
    this._serviceIpv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv6RangeInput() {
    return this._serviceIpv6Range;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // kms_provider - computed: false, optional: true, required: false
  private _kmsProvider = new KubernetesClusterKmsProviderOutputReference(this, "kms_provider");
  public get kmsProvider() {
    return this._kmsProvider;
  }
  public putKmsProvider(value: KubernetesClusterKmsProvider) {
    this._kmsProvider.internalValue = value;
  }
  public resetKmsProvider() {
    this._kmsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsProviderInput() {
    return this._kmsProvider.internalValue;
  }

  // master - computed: false, optional: false, required: true
  private _master = new KubernetesClusterMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: KubernetesClusterMaster) {
    this._master.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // network_implementation - computed: false, optional: true, required: false
  private _networkImplementation = new KubernetesClusterNetworkImplementationOutputReference(this, "network_implementation");
  public get networkImplementation() {
    return this._networkImplementation;
  }
  public putNetworkImplementation(value: KubernetesClusterNetworkImplementation) {
    this._networkImplementation.internalValue = value;
  }
  public resetNetworkImplementation() {
    this._networkImplementation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImplementationInput() {
    return this._networkImplementation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterTimeouts) {
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
      cluster_ipv4_range: cdktf.stringToTerraform(this._clusterIpv4Range),
      cluster_ipv6_range: cdktf.stringToTerraform(this._clusterIpv6Range),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      network_policy_provider: cdktf.stringToTerraform(this._networkPolicyProvider),
      node_ipv4_cidr_mask_size: cdktf.numberToTerraform(this._nodeIpv4CidrMaskSize),
      node_service_account_id: cdktf.stringToTerraform(this._nodeServiceAccountId),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      service_ipv4_range: cdktf.stringToTerraform(this._serviceIpv4Range),
      service_ipv6_range: cdktf.stringToTerraform(this._serviceIpv6Range),
      kms_provider: kubernetesClusterKmsProviderToTerraform(this._kmsProvider.internalValue),
      master: kubernetesClusterMasterToTerraform(this._master.internalValue),
      network_implementation: kubernetesClusterNetworkImplementationToTerraform(this._networkImplementation.internalValue),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
