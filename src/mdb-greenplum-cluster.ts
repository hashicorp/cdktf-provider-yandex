// https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbGreenplumClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#assign_public_ip MdbGreenplumCluster#assign_public_ip}
  */
  readonly assignPublicIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#deletion_protection MdbGreenplumCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#description MdbGreenplumCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#environment MdbGreenplumCluster#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#folder_id MdbGreenplumCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#greenplum_config MdbGreenplumCluster#greenplum_config}
  */
  readonly greenplumConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#id MdbGreenplumCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#labels MdbGreenplumCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#master_host_count MdbGreenplumCluster#master_host_count}
  */
  readonly masterHostCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#name MdbGreenplumCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#network_id MdbGreenplumCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#security_group_ids MdbGreenplumCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#segment_host_count MdbGreenplumCluster#segment_host_count}
  */
  readonly segmentHostCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#segment_in_host MdbGreenplumCluster#segment_in_host}
  */
  readonly segmentInHost: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#subnet_id MdbGreenplumCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#user_name MdbGreenplumCluster#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#user_password MdbGreenplumCluster#user_password}
  */
  readonly userPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#version MdbGreenplumCluster#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#zone MdbGreenplumCluster#zone}
  */
  readonly zone: string;
  /**
  * access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#access MdbGreenplumCluster#access}
  */
  readonly access?: MdbGreenplumClusterAccess;
  /**
  * backup_window_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#backup_window_start MdbGreenplumCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbGreenplumClusterBackupWindowStart;
  /**
  * master_subcluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#master_subcluster MdbGreenplumCluster#master_subcluster}
  */
  readonly masterSubcluster: MdbGreenplumClusterMasterSubcluster;
  /**
  * pooler_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#pooler_config MdbGreenplumCluster#pooler_config}
  */
  readonly poolerConfig?: MdbGreenplumClusterPoolerConfig;
  /**
  * segment_subcluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#segment_subcluster MdbGreenplumCluster#segment_subcluster}
  */
  readonly segmentSubcluster: MdbGreenplumClusterSegmentSubcluster;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#timeouts MdbGreenplumCluster#timeouts}
  */
  readonly timeouts?: MdbGreenplumClusterTimeouts;
}
export interface MdbGreenplumClusterMasterHosts {
}

export function mdbGreenplumClusterMasterHostsToTerraform(struct?: MdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MdbGreenplumClusterMasterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterMasterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class MdbGreenplumClusterMasterHostsList extends cdktf.ComplexList {

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
  public get(index: number): MdbGreenplumClusterMasterHostsOutputReference {
    return new MdbGreenplumClusterMasterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterSegmentHosts {
}

export function mdbGreenplumClusterSegmentHostsToTerraform(struct?: MdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MdbGreenplumClusterSegmentHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterSegmentHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentHosts | undefined) {
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
}

export class MdbGreenplumClusterSegmentHostsList extends cdktf.ComplexList {

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
  public get(index: number): MdbGreenplumClusterSegmentHostsOutputReference {
    return new MdbGreenplumClusterSegmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#data_lens MdbGreenplumCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#web_sql MdbGreenplumCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterAccessToTerraform(struct?: MdbGreenplumClusterAccessOutputReference | MdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}

export class MdbGreenplumClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._webSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._webSql = value.webSql;
    }
  }

  // data_lens - computed: false, optional: true, required: false
  private _dataLens?: boolean | cdktf.IResolvable; 
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }
  public set dataLens(value: boolean | cdktf.IResolvable) {
    this._dataLens = value;
  }
  public resetDataLens() {
    this._dataLens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLensInput() {
    return this._dataLens;
  }

  // web_sql - computed: false, optional: true, required: false
  private _webSql?: boolean | cdktf.IResolvable; 
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
  public set webSql(value: boolean | cdktf.IResolvable) {
    this._webSql = value;
  }
  public resetWebSql() {
    this._webSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSqlInput() {
    return this._webSql;
  }
}
export interface MdbGreenplumClusterBackupWindowStart {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#hours MdbGreenplumCluster#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#minutes MdbGreenplumCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbGreenplumClusterBackupWindowStartToTerraform(struct?: MdbGreenplumClusterBackupWindowStartOutputReference | MdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}

export class MdbGreenplumClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface MdbGreenplumClusterMasterSubclusterResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#disk_size MdbGreenplumCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#disk_type_id MdbGreenplumCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#resource_preset_id MdbGreenplumCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct?: MdbGreenplumClusterMasterSubclusterResourcesOutputReference | MdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}

export class MdbGreenplumClusterMasterSubclusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterMasterSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterMasterSubcluster {
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#resources MdbGreenplumCluster#resources}
  */
  readonly resources: MdbGreenplumClusterMasterSubclusterResources;
}

export function mdbGreenplumClusterMasterSubclusterToTerraform(struct?: MdbGreenplumClusterMasterSubclusterOutputReference | MdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct!.resources),
  }
}

export class MdbGreenplumClusterMasterSubclusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterMasterSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbGreenplumClusterMasterSubclusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterMasterSubclusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterPoolerConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#pool_client_idle_timeout MdbGreenplumCluster#pool_client_idle_timeout}
  */
  readonly poolClientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#pool_size MdbGreenplumCluster#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#pooling_mode MdbGreenplumCluster#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function mdbGreenplumClusterPoolerConfigToTerraform(struct?: MdbGreenplumClusterPoolerConfigOutputReference | MdbGreenplumClusterPoolerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_client_idle_timeout: cdktf.numberToTerraform(struct!.poolClientIdleTimeout),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    pooling_mode: cdktf.stringToTerraform(struct!.poolingMode),
  }
}

export class MdbGreenplumClusterPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterPoolerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolClientIdleTimeout = this._poolClientIdleTimeout;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._poolingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolingMode = this._poolingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterPoolerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolClientIdleTimeout = undefined;
      this._poolSize = undefined;
      this._poolingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolClientIdleTimeout = value.poolClientIdleTimeout;
      this._poolSize = value.poolSize;
      this._poolingMode = value.poolingMode;
    }
  }

  // pool_client_idle_timeout - computed: false, optional: true, required: false
  private _poolClientIdleTimeout?: number; 
  public get poolClientIdleTimeout() {
    return this.getNumberAttribute('pool_client_idle_timeout');
  }
  public set poolClientIdleTimeout(value: number) {
    this._poolClientIdleTimeout = value;
  }
  public resetPoolClientIdleTimeout() {
    this._poolClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolClientIdleTimeoutInput() {
    return this._poolClientIdleTimeout;
  }

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // pooling_mode - computed: false, optional: true, required: false
  private _poolingMode?: string; 
  public get poolingMode() {
    return this.getStringAttribute('pooling_mode');
  }
  public set poolingMode(value: string) {
    this._poolingMode = value;
  }
  public resetPoolingMode() {
    this._poolingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolingModeInput() {
    return this._poolingMode;
  }
}
export interface MdbGreenplumClusterSegmentSubclusterResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#disk_size MdbGreenplumCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#disk_type_id MdbGreenplumCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#resource_preset_id MdbGreenplumCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct?: MdbGreenplumClusterSegmentSubclusterResourcesOutputReference | MdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}

export class MdbGreenplumClusterSegmentSubclusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterSegmentSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterSegmentSubcluster {
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#resources MdbGreenplumCluster#resources}
  */
  readonly resources: MdbGreenplumClusterSegmentSubclusterResources;
}

export function mdbGreenplumClusterSegmentSubclusterToTerraform(struct?: MdbGreenplumClusterSegmentSubclusterOutputReference | MdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct!.resources),
  }
}

export class MdbGreenplumClusterSegmentSubclusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterSegmentSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbGreenplumClusterSegmentSubclusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterSegmentSubclusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#create MdbGreenplumCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#delete MdbGreenplumCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster#update MdbGreenplumCluster#update}
  */
  readonly update?: string;
}

export function mdbGreenplumClusterTimeoutsToTerraform(struct?: MdbGreenplumClusterTimeoutsOutputReference | MdbGreenplumClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster yandex_mdb_greenplum_cluster}
*/
export class MdbGreenplumCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/mdb_greenplum_cluster yandex_mdb_greenplum_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbGreenplumClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbGreenplumClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.77.0',
        providerVersionConstraint: '~> 0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignPublicIp = config.assignPublicIp;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._greenplumConfig = config.greenplumConfig;
    this._id = config.id;
    this._labels = config.labels;
    this._masterHostCount = config.masterHostCount;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._segmentHostCount = config.segmentHostCount;
    this._segmentInHost = config.segmentInHost;
    this._subnetId = config.subnetId;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
    this._version = config.version;
    this._zone = config.zone;
    this._access.internalValue = config.access;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._masterSubcluster.internalValue = config.masterSubcluster;
    this._poolerConfig.internalValue = config.poolerConfig;
    this._segmentSubcluster.internalValue = config.segmentSubcluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_public_ip - computed: false, optional: false, required: true
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // greenplum_config - computed: true, optional: true, required: false
  private _greenplumConfig?: { [key: string]: string }; 
  public get greenplumConfig() {
    return this.getStringMapAttribute('greenplum_config');
  }
  public set greenplumConfig(value: { [key: string]: string }) {
    this._greenplumConfig = value;
  }
  public resetGreenplumConfig() {
    this._greenplumConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenplumConfigInput() {
    return this._greenplumConfig;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
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

  // master_host_count - computed: false, optional: false, required: true
  private _masterHostCount?: number; 
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }
  public set masterHostCount(value: number) {
    this._masterHostCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostCountInput() {
    return this._masterHostCount;
  }

  // master_hosts - computed: true, optional: false, required: false
  private _masterHosts = new MdbGreenplumClusterMasterHostsList(this, "master_hosts", false);
  public get masterHosts() {
    return this._masterHosts;
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

  // segment_host_count - computed: false, optional: false, required: true
  private _segmentHostCount?: number; 
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }
  public set segmentHostCount(value: number) {
    this._segmentHostCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentHostCountInput() {
    return this._segmentHostCount;
  }

  // segment_hosts - computed: true, optional: false, required: false
  private _segmentHosts = new MdbGreenplumClusterSegmentHostsList(this, "segment_hosts", false);
  public get segmentHosts() {
    return this._segmentHosts;
  }

  // segment_in_host - computed: false, optional: false, required: true
  private _segmentInHost?: number; 
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }
  public set segmentInHost(value: number) {
    this._segmentInHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInHostInput() {
    return this._segmentInHost;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // access - computed: false, optional: true, required: false
  private _access = new MdbGreenplumClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbGreenplumClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // backup_window_start - computed: false, optional: true, required: false
  private _backupWindowStart = new MdbGreenplumClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbGreenplumClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // master_subcluster - computed: false, optional: false, required: true
  private _masterSubcluster = new MdbGreenplumClusterMasterSubclusterOutputReference(this, "master_subcluster");
  public get masterSubcluster() {
    return this._masterSubcluster;
  }
  public putMasterSubcluster(value: MdbGreenplumClusterMasterSubcluster) {
    this._masterSubcluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSubclusterInput() {
    return this._masterSubcluster.internalValue;
  }

  // pooler_config - computed: false, optional: true, required: false
  private _poolerConfig = new MdbGreenplumClusterPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: MdbGreenplumClusterPoolerConfig) {
    this._poolerConfig.internalValue = value;
  }
  public resetPoolerConfig() {
    this._poolerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerConfigInput() {
    return this._poolerConfig.internalValue;
  }

  // segment_subcluster - computed: false, optional: false, required: true
  private _segmentSubcluster = new MdbGreenplumClusterSegmentSubclusterOutputReference(this, "segment_subcluster");
  public get segmentSubcluster() {
    return this._segmentSubcluster;
  }
  public putSegmentSubcluster(value: MdbGreenplumClusterSegmentSubcluster) {
    this._segmentSubcluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSubclusterInput() {
    return this._segmentSubcluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbGreenplumClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbGreenplumClusterTimeouts) {
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
      assign_public_ip: cdktf.booleanToTerraform(this._assignPublicIp),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      greenplum_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._greenplumConfig),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      master_host_count: cdktf.numberToTerraform(this._masterHostCount),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      segment_host_count: cdktf.numberToTerraform(this._segmentHostCount),
      segment_in_host: cdktf.numberToTerraform(this._segmentInHost),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      access: mdbGreenplumClusterAccessToTerraform(this._access.internalValue),
      backup_window_start: mdbGreenplumClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      master_subcluster: mdbGreenplumClusterMasterSubclusterToTerraform(this._masterSubcluster.internalValue),
      pooler_config: mdbGreenplumClusterPoolerConfigToTerraform(this._poolerConfig.internalValue),
      segment_subcluster: mdbGreenplumClusterSegmentSubclusterToTerraform(this._segmentSubcluster.internalValue),
      timeouts: mdbGreenplumClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
