// https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbGreenplumClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#cluster_id DataYandexMdbGreenplumCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#folder_id DataYandexMdbGreenplumCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#greenplum_config DataYandexMdbGreenplumCluster#greenplum_config}
  */
  readonly greenplumConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#id DataYandexMdbGreenplumCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#name DataYandexMdbGreenplumCluster#name}
  */
  readonly name?: string;
  /**
  * pooler_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#pooler_config DataYandexMdbGreenplumCluster#pooler_config}
  */
  readonly poolerConfig?: DataYandexMdbGreenplumClusterPoolerConfig;
}
export interface DataYandexMdbGreenplumClusterAccess {
}

export function dataYandexMdbGreenplumClusterAccessToTerraform(struct?: DataYandexMdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lens - computed: true, optional: false, required: false
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }

  // web_sql - computed: true, optional: false, required: false
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
}

export class DataYandexMdbGreenplumClusterAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterAccessOutputReference {
    return new DataYandexMdbGreenplumClusterAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackupWindowStart {
}

export function dataYandexMdbGreenplumClusterBackupWindowStartToTerraform(struct?: DataYandexMdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataYandexMdbGreenplumClusterBackupWindowStartList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterBackupWindowStartOutputReference {
    return new DataYandexMdbGreenplumClusterBackupWindowStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterHosts {
}

export function dataYandexMdbGreenplumClusterMasterHostsToTerraform(struct?: DataYandexMdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterMasterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterHosts | undefined) {
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

export class DataYandexMdbGreenplumClusterMasterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterHostsOutputReference {
    return new DataYandexMdbGreenplumClusterMasterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterSubclusterResources {
}

export function dataYandexMdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference {
    return new DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterSubcluster {
}

export function dataYandexMdbGreenplumClusterMasterSubclusterToTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterMasterSubclusterResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterSubclusterOutputReference {
    return new DataYandexMdbGreenplumClusterMasterSubclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentHosts {
}

export function dataYandexMdbGreenplumClusterSegmentHostsToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterSegmentHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentHosts | undefined) {
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

export class DataYandexMdbGreenplumClusterSegmentHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentHostsOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentSubclusterResources {
}

export function dataYandexMdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentSubcluster {
}

export function dataYandexMdbGreenplumClusterSegmentSubclusterToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterSegmentSubclusterResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterPoolerConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#pool_client_idle_timeout DataYandexMdbGreenplumCluster#pool_client_idle_timeout}
  */
  readonly poolClientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#pool_size DataYandexMdbGreenplumCluster#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster#pooling_mode DataYandexMdbGreenplumCluster#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function dataYandexMdbGreenplumClusterPoolerConfigToTerraform(struct?: DataYandexMdbGreenplumClusterPoolerConfigOutputReference | DataYandexMdbGreenplumClusterPoolerConfig): any {
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

export class DataYandexMdbGreenplumClusterPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterPoolerConfig | undefined {
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

  public set internalValue(value: DataYandexMdbGreenplumClusterPoolerConfig | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster yandex_mdb_greenplum_cluster}
*/
export class DataYandexMdbGreenplumCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/mdb_greenplum_cluster yandex_mdb_greenplum_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbGreenplumClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbGreenplumClusterConfig = {}) {
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
    this._clusterId = config.clusterId;
    this._folderId = config.folderId;
    this._greenplumConfig = config.greenplumConfig;
    this._id = config.id;
    this._name = config.name;
    this._poolerConfig.internalValue = config.poolerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  private _access = new DataYandexMdbGreenplumClusterAccessList(this, "access", false);
  public get access() {
    return this._access;
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // backup_window_start - computed: true, optional: false, required: false
  private _backupWindowStart = new DataYandexMdbGreenplumClusterBackupWindowStartList(this, "backup_window_start", false);
  public get backupWindowStart() {
    return this._backupWindowStart;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // master_host_count - computed: true, optional: false, required: false
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }

  // master_hosts - computed: true, optional: false, required: false
  private _masterHosts = new DataYandexMdbGreenplumClusterMasterHostsList(this, "master_hosts", false);
  public get masterHosts() {
    return this._masterHosts;
  }

  // master_subcluster - computed: true, optional: false, required: false
  private _masterSubcluster = new DataYandexMdbGreenplumClusterMasterSubclusterList(this, "master_subcluster", false);
  public get masterSubcluster() {
    return this._masterSubcluster;
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // segment_host_count - computed: true, optional: false, required: false
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }

  // segment_hosts - computed: true, optional: false, required: false
  private _segmentHosts = new DataYandexMdbGreenplumClusterSegmentHostsList(this, "segment_hosts", false);
  public get segmentHosts() {
    return this._segmentHosts;
  }

  // segment_in_host - computed: true, optional: false, required: false
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }

  // segment_subcluster - computed: true, optional: false, required: false
  private _segmentSubcluster = new DataYandexMdbGreenplumClusterSegmentSubclusterList(this, "segment_subcluster", false);
  public get segmentSubcluster() {
    return this._segmentSubcluster;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // pooler_config - computed: false, optional: true, required: false
  private _poolerConfig = new DataYandexMdbGreenplumClusterPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: DataYandexMdbGreenplumClusterPoolerConfig) {
    this._poolerConfig.internalValue = value;
  }
  public resetPoolerConfig() {
    this._poolerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerConfigInput() {
    return this._poolerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      greenplum_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._greenplumConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pooler_config: dataYandexMdbGreenplumClusterPoolerConfigToTerraform(this._poolerConfig.internalValue),
    };
  }
}
