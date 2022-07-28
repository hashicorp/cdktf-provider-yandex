// https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbClickhouseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#cluster_id DataYandexMdbClickhouseCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#deletion_protection DataYandexMdbClickhouseCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#folder_id DataYandexMdbClickhouseCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#id DataYandexMdbClickhouseCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#service_account_id DataYandexMdbClickhouseCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * cloud_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#cloud_storage DataYandexMdbClickhouseCluster#cloud_storage}
  */
  readonly cloudStorage?: DataYandexMdbClickhouseClusterCloudStorage;
}
export interface DataYandexMdbClickhouseClusterAccess {
}

export function dataYandexMdbClickhouseClusterAccessToTerraform(struct?: DataYandexMdbClickhouseClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterAccess | undefined) {
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

  // metrika - computed: true, optional: false, required: false
  public get metrika() {
    return this.getBooleanAttribute('metrika');
  }

  // serverless - computed: true, optional: false, required: false
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }

  // web_sql - computed: true, optional: false, required: false
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
}

export class DataYandexMdbClickhouseClusterAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterAccessOutputReference {
    return new DataYandexMdbClickhouseClusterAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterBackupWindowStart {
}

export function dataYandexMdbClickhouseClusterBackupWindowStartToTerraform(struct?: DataYandexMdbClickhouseClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterBackupWindowStart | undefined) {
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

export class DataYandexMdbClickhouseClusterBackupWindowStartList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterBackupWindowStartOutputReference {
    return new DataYandexMdbClickhouseClusterBackupWindowStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigCompression {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigCompressionToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // min_part_size - computed: true, optional: false, required: false
  public get minPartSize() {
    return this.getNumberAttribute('min_part_size');
  }

  // min_part_size_ratio - computed: true, optional: false, required: false
  public get minPartSizeRatio() {
    return this.getNumberAttribute('min_part_size_ratio');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigCompressionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // age - computed: true, optional: false, required: false
  public get age() {
    return this.getNumberAttribute('age');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // regexp - computed: true, optional: false, required: false
  public get regexp() {
    return this.getStringAttribute('regexp');
  }

  // retention - computed: true, optional: false, required: false
  private _retention = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionList(this, "retention", false);
  public get retention() {
    return this._retention;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  private _pattern = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternList(this, "pattern", false);
  public get pattern() {
    return this._pattern;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafka {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }

  // sasl_password - computed: true, optional: false, required: false
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }

  // sasl_username - computed: true, optional: false, required: false
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }

  // sasl_password - computed: true, optional: false, required: false
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }

  // sasl_username - computed: true, optional: false, required: false
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigMergeTree {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigMergeTreeToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigMergeTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigMergeTree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigMergeTree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_bytes_to_merge_at_min_space_in_pool - computed: true, optional: false, required: false
  public get maxBytesToMergeAtMinSpaceInPool() {
    return this.getNumberAttribute('max_bytes_to_merge_at_min_space_in_pool');
  }

  // max_replicated_merges_in_queue - computed: true, optional: false, required: false
  public get maxReplicatedMergesInQueue() {
    return this.getNumberAttribute('max_replicated_merges_in_queue');
  }

  // number_of_free_entries_in_pool_to_lower_max_size_of_merge - computed: true, optional: false, required: false
  public get numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge() {
    return this.getNumberAttribute('number_of_free_entries_in_pool_to_lower_max_size_of_merge');
  }

  // parts_to_delay_insert - computed: true, optional: false, required: false
  public get partsToDelayInsert() {
    return this.getNumberAttribute('parts_to_delay_insert');
  }

  // parts_to_throw_insert - computed: true, optional: false, required: false
  public get partsToThrowInsert() {
    return this.getNumberAttribute('parts_to_throw_insert');
  }

  // replicated_deduplication_window - computed: true, optional: false, required: false
  public get replicatedDeduplicationWindow() {
    return this.getNumberAttribute('replicated_deduplication_window');
  }

  // replicated_deduplication_window_seconds - computed: true, optional: false, required: false
  public get replicatedDeduplicationWindowSeconds() {
    return this.getNumberAttribute('replicated_deduplication_window_seconds');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigRabbitmqToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfig {
}

export function dataYandexMdbClickhouseClusterClickhouseConfigToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_pool_size - computed: true, optional: false, required: false
  public get backgroundPoolSize() {
    return this.getNumberAttribute('background_pool_size');
  }

  // background_schedule_pool_size - computed: true, optional: false, required: false
  public get backgroundSchedulePoolSize() {
    return this.getNumberAttribute('background_schedule_pool_size');
  }

  // compression - computed: true, optional: false, required: false
  private _compression = new DataYandexMdbClickhouseClusterClickhouseConfigCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }

  // geobase_uri - computed: true, optional: false, required: false
  public get geobaseUri() {
    return this.getStringAttribute('geobase_uri');
  }

  // graphite_rollup - computed: true, optional: false, required: false
  private _graphiteRollup = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupList(this, "graphite_rollup", false);
  public get graphiteRollup() {
    return this._graphiteRollup;
  }

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }

  // kafka_topic - computed: true, optional: false, required: false
  private _kafkaTopic = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicList(this, "kafka_topic", false);
  public get kafkaTopic() {
    return this._kafkaTopic;
  }

  // keep_alive_timeout - computed: true, optional: false, required: false
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // mark_cache_size - computed: true, optional: false, required: false
  public get markCacheSize() {
    return this.getNumberAttribute('mark_cache_size');
  }

  // max_concurrent_queries - computed: true, optional: false, required: false
  public get maxConcurrentQueries() {
    return this.getNumberAttribute('max_concurrent_queries');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_partition_size_to_drop - computed: true, optional: false, required: false
  public get maxPartitionSizeToDrop() {
    return this.getNumberAttribute('max_partition_size_to_drop');
  }

  // max_table_size_to_drop - computed: true, optional: false, required: false
  public get maxTableSizeToDrop() {
    return this.getNumberAttribute('max_table_size_to_drop');
  }

  // merge_tree - computed: true, optional: false, required: false
  private _mergeTree = new DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeList(this, "merge_tree", false);
  public get mergeTree() {
    return this._mergeTree;
  }

  // metric_log_enabled - computed: true, optional: false, required: false
  public get metricLogEnabled() {
    return this.getBooleanAttribute('metric_log_enabled');
  }

  // metric_log_retention_size - computed: true, optional: false, required: false
  public get metricLogRetentionSize() {
    return this.getNumberAttribute('metric_log_retention_size');
  }

  // metric_log_retention_time - computed: true, optional: false, required: false
  public get metricLogRetentionTime() {
    return this.getNumberAttribute('metric_log_retention_time');
  }

  // part_log_retention_size - computed: true, optional: false, required: false
  public get partLogRetentionSize() {
    return this.getNumberAttribute('part_log_retention_size');
  }

  // part_log_retention_time - computed: true, optional: false, required: false
  public get partLogRetentionTime() {
    return this.getNumberAttribute('part_log_retention_time');
  }

  // query_log_retention_size - computed: true, optional: false, required: false
  public get queryLogRetentionSize() {
    return this.getNumberAttribute('query_log_retention_size');
  }

  // query_log_retention_time - computed: true, optional: false, required: false
  public get queryLogRetentionTime() {
    return this.getNumberAttribute('query_log_retention_time');
  }

  // query_thread_log_enabled - computed: true, optional: false, required: false
  public get queryThreadLogEnabled() {
    return this.getBooleanAttribute('query_thread_log_enabled');
  }

  // query_thread_log_retention_size - computed: true, optional: false, required: false
  public get queryThreadLogRetentionSize() {
    return this.getNumberAttribute('query_thread_log_retention_size');
  }

  // query_thread_log_retention_time - computed: true, optional: false, required: false
  public get queryThreadLogRetentionTime() {
    return this.getNumberAttribute('query_thread_log_retention_time');
  }

  // rabbitmq - computed: true, optional: false, required: false
  private _rabbitmq = new DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqList(this, "rabbitmq", false);
  public get rabbitmq() {
    return this._rabbitmq;
  }

  // text_log_enabled - computed: true, optional: false, required: false
  public get textLogEnabled() {
    return this.getBooleanAttribute('text_log_enabled');
  }

  // text_log_level - computed: true, optional: false, required: false
  public get textLogLevel() {
    return this.getStringAttribute('text_log_level');
  }

  // text_log_retention_size - computed: true, optional: false, required: false
  public get textLogRetentionSize() {
    return this.getNumberAttribute('text_log_retention_size');
  }

  // text_log_retention_time - computed: true, optional: false, required: false
  public get textLogRetentionTime() {
    return this.getNumberAttribute('text_log_retention_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // trace_log_enabled - computed: true, optional: false, required: false
  public get traceLogEnabled() {
    return this.getBooleanAttribute('trace_log_enabled');
  }

  // trace_log_retention_size - computed: true, optional: false, required: false
  public get traceLogRetentionSize() {
    return this.getNumberAttribute('trace_log_retention_size');
  }

  // trace_log_retention_time - computed: true, optional: false, required: false
  public get traceLogRetentionTime() {
    return this.getNumberAttribute('trace_log_retention_time');
  }

  // uncompressed_cache_size - computed: true, optional: false, required: false
  public get uncompressedCacheSize() {
    return this.getNumberAttribute('uncompressed_cache_size');
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseResources {
}

export function dataYandexMdbClickhouseClusterClickhouseResourcesToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseResources | undefined) {
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

export class DataYandexMdbClickhouseClusterClickhouseResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouse {
}

export function dataYandexMdbClickhouseClusterClickhouseToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterClickhouseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataYandexMdbClickhouseClusterClickhouseConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbClickhouseClusterClickhouseResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterDatabase {
}

export function dataYandexMdbClickhouseClusterDatabaseToTerraform(struct?: DataYandexMdbClickhouseClusterDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataYandexMdbClickhouseClusterDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterDatabaseOutputReference {
    return new DataYandexMdbClickhouseClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterFormatSchema {
}

export function dataYandexMdbClickhouseClusterFormatSchemaToTerraform(struct?: DataYandexMdbClickhouseClusterFormatSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterFormatSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterFormatSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterFormatSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataYandexMdbClickhouseClusterFormatSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterFormatSchemaOutputReference {
    return new DataYandexMdbClickhouseClusterFormatSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterHost {
}

export function dataYandexMdbClickhouseClusterHostToTerraform(struct?: DataYandexMdbClickhouseClusterHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterHost | undefined) {
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

  // shard_name - computed: true, optional: false, required: false
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataYandexMdbClickhouseClusterHostList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterHostOutputReference {
    return new DataYandexMdbClickhouseClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterMaintenanceWindow {
}

export function dataYandexMdbClickhouseClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbClickhouseClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexMdbClickhouseClusterMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference {
    return new DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterMlModel {
}

export function dataYandexMdbClickhouseClusterMlModelToTerraform(struct?: DataYandexMdbClickhouseClusterMlModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterMlModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterMlModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterMlModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataYandexMdbClickhouseClusterMlModelList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterMlModelOutputReference {
    return new DataYandexMdbClickhouseClusterMlModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterShardGroup {
}

export function dataYandexMdbClickhouseClusterShardGroupToTerraform(struct?: DataYandexMdbClickhouseClusterShardGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterShardGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterShardGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterShardGroup | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shard_names - computed: true, optional: false, required: false
  public get shardNames() {
    return this.getListAttribute('shard_names');
  }
}

export class DataYandexMdbClickhouseClusterShardGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterShardGroupOutputReference {
    return new DataYandexMdbClickhouseClusterShardGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserPermission {
}

export function dataYandexMdbClickhouseClusterUserPermissionToTerraform(struct?: DataYandexMdbClickhouseClusterUserPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterUserPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
}

export class DataYandexMdbClickhouseClusterUserPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterUserPermissionOutputReference {
    return new DataYandexMdbClickhouseClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserQuota {
}

export function dataYandexMdbClickhouseClusterUserQuotaToTerraform(struct?: DataYandexMdbClickhouseClusterUserQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterUserQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterUserQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getNumberAttribute('errors');
  }

  // execution_time - computed: true, optional: false, required: false
  public get executionTime() {
    return this.getNumberAttribute('execution_time');
  }

  // interval_duration - computed: true, optional: false, required: false
  public get intervalDuration() {
    return this.getNumberAttribute('interval_duration');
  }

  // queries - computed: true, optional: false, required: false
  public get queries() {
    return this.getNumberAttribute('queries');
  }

  // read_rows - computed: true, optional: false, required: false
  public get readRows() {
    return this.getNumberAttribute('read_rows');
  }

  // result_rows - computed: true, optional: false, required: false
  public get resultRows() {
    return this.getNumberAttribute('result_rows');
  }
}

export class DataYandexMdbClickhouseClusterUserQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterUserQuotaOutputReference {
    return new DataYandexMdbClickhouseClusterUserQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserSettings {
}

export function dataYandexMdbClickhouseClusterUserSettingsToTerraform(struct?: DataYandexMdbClickhouseClusterUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterUserSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_http_cors_header - computed: true, optional: false, required: false
  public get addHttpCorsHeader() {
    return this.getBooleanAttribute('add_http_cors_header');
  }

  // allow_ddl - computed: true, optional: false, required: false
  public get allowDdl() {
    return this.getBooleanAttribute('allow_ddl');
  }

  // compile - computed: true, optional: false, required: false
  public get compile() {
    return this.getBooleanAttribute('compile');
  }

  // compile_expressions - computed: true, optional: false, required: false
  public get compileExpressions() {
    return this.getBooleanAttribute('compile_expressions');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // count_distinct_implementation - computed: true, optional: false, required: false
  public get countDistinctImplementation() {
    return this.getStringAttribute('count_distinct_implementation');
  }

  // distinct_overflow_mode - computed: true, optional: false, required: false
  public get distinctOverflowMode() {
    return this.getStringAttribute('distinct_overflow_mode');
  }

  // distributed_aggregation_memory_efficient - computed: true, optional: false, required: false
  public get distributedAggregationMemoryEfficient() {
    return this.getBooleanAttribute('distributed_aggregation_memory_efficient');
  }

  // distributed_ddl_task_timeout - computed: true, optional: false, required: false
  public get distributedDdlTaskTimeout() {
    return this.getNumberAttribute('distributed_ddl_task_timeout');
  }

  // distributed_product_mode - computed: true, optional: false, required: false
  public get distributedProductMode() {
    return this.getStringAttribute('distributed_product_mode');
  }

  // empty_result_for_aggregation_by_empty_set - computed: true, optional: false, required: false
  public get emptyResultForAggregationByEmptySet() {
    return this.getBooleanAttribute('empty_result_for_aggregation_by_empty_set');
  }

  // enable_http_compression - computed: true, optional: false, required: false
  public get enableHttpCompression() {
    return this.getBooleanAttribute('enable_http_compression');
  }

  // fallback_to_stale_replicas_for_distributed_queries - computed: true, optional: false, required: false
  public get fallbackToStaleReplicasForDistributedQueries() {
    return this.getBooleanAttribute('fallback_to_stale_replicas_for_distributed_queries');
  }

  // force_index_by_date - computed: true, optional: false, required: false
  public get forceIndexByDate() {
    return this.getBooleanAttribute('force_index_by_date');
  }

  // force_primary_key - computed: true, optional: false, required: false
  public get forcePrimaryKey() {
    return this.getBooleanAttribute('force_primary_key');
  }

  // group_by_overflow_mode - computed: true, optional: false, required: false
  public get groupByOverflowMode() {
    return this.getStringAttribute('group_by_overflow_mode');
  }

  // group_by_two_level_threshold - computed: true, optional: false, required: false
  public get groupByTwoLevelThreshold() {
    return this.getNumberAttribute('group_by_two_level_threshold');
  }

  // group_by_two_level_threshold_bytes - computed: true, optional: false, required: false
  public get groupByTwoLevelThresholdBytes() {
    return this.getNumberAttribute('group_by_two_level_threshold_bytes');
  }

  // http_connection_timeout - computed: true, optional: false, required: false
  public get httpConnectionTimeout() {
    return this.getNumberAttribute('http_connection_timeout');
  }

  // http_headers_progress_interval - computed: true, optional: false, required: false
  public get httpHeadersProgressInterval() {
    return this.getNumberAttribute('http_headers_progress_interval');
  }

  // http_receive_timeout - computed: true, optional: false, required: false
  public get httpReceiveTimeout() {
    return this.getNumberAttribute('http_receive_timeout');
  }

  // http_send_timeout - computed: true, optional: false, required: false
  public get httpSendTimeout() {
    return this.getNumberAttribute('http_send_timeout');
  }

  // input_format_defaults_for_omitted_fields - computed: true, optional: false, required: false
  public get inputFormatDefaultsForOmittedFields() {
    return this.getBooleanAttribute('input_format_defaults_for_omitted_fields');
  }

  // input_format_values_interpret_expressions - computed: true, optional: false, required: false
  public get inputFormatValuesInterpretExpressions() {
    return this.getBooleanAttribute('input_format_values_interpret_expressions');
  }

  // insert_quorum - computed: true, optional: false, required: false
  public get insertQuorum() {
    return this.getNumberAttribute('insert_quorum');
  }

  // insert_quorum_timeout - computed: true, optional: false, required: false
  public get insertQuorumTimeout() {
    return this.getNumberAttribute('insert_quorum_timeout');
  }

  // join_overflow_mode - computed: true, optional: false, required: false
  public get joinOverflowMode() {
    return this.getStringAttribute('join_overflow_mode');
  }

  // join_use_nulls - computed: true, optional: false, required: false
  public get joinUseNulls() {
    return this.getBooleanAttribute('join_use_nulls');
  }

  // joined_subquery_requires_alias - computed: true, optional: false, required: false
  public get joinedSubqueryRequiresAlias() {
    return this.getBooleanAttribute('joined_subquery_requires_alias');
  }

  // low_cardinality_allow_in_native_format - computed: true, optional: false, required: false
  public get lowCardinalityAllowInNativeFormat() {
    return this.getBooleanAttribute('low_cardinality_allow_in_native_format');
  }

  // max_ast_depth - computed: true, optional: false, required: false
  public get maxAstDepth() {
    return this.getNumberAttribute('max_ast_depth');
  }

  // max_ast_elements - computed: true, optional: false, required: false
  public get maxAstElements() {
    return this.getNumberAttribute('max_ast_elements');
  }

  // max_block_size - computed: true, optional: false, required: false
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }

  // max_bytes_before_external_group_by - computed: true, optional: false, required: false
  public get maxBytesBeforeExternalGroupBy() {
    return this.getNumberAttribute('max_bytes_before_external_group_by');
  }

  // max_bytes_before_external_sort - computed: true, optional: false, required: false
  public get maxBytesBeforeExternalSort() {
    return this.getNumberAttribute('max_bytes_before_external_sort');
  }

  // max_bytes_in_distinct - computed: true, optional: false, required: false
  public get maxBytesInDistinct() {
    return this.getNumberAttribute('max_bytes_in_distinct');
  }

  // max_bytes_in_join - computed: true, optional: false, required: false
  public get maxBytesInJoin() {
    return this.getNumberAttribute('max_bytes_in_join');
  }

  // max_bytes_in_set - computed: true, optional: false, required: false
  public get maxBytesInSet() {
    return this.getNumberAttribute('max_bytes_in_set');
  }

  // max_bytes_to_read - computed: true, optional: false, required: false
  public get maxBytesToRead() {
    return this.getNumberAttribute('max_bytes_to_read');
  }

  // max_bytes_to_sort - computed: true, optional: false, required: false
  public get maxBytesToSort() {
    return this.getNumberAttribute('max_bytes_to_sort');
  }

  // max_bytes_to_transfer - computed: true, optional: false, required: false
  public get maxBytesToTransfer() {
    return this.getNumberAttribute('max_bytes_to_transfer');
  }

  // max_columns_to_read - computed: true, optional: false, required: false
  public get maxColumnsToRead() {
    return this.getNumberAttribute('max_columns_to_read');
  }

  // max_execution_time - computed: true, optional: false, required: false
  public get maxExecutionTime() {
    return this.getNumberAttribute('max_execution_time');
  }

  // max_expanded_ast_elements - computed: true, optional: false, required: false
  public get maxExpandedAstElements() {
    return this.getNumberAttribute('max_expanded_ast_elements');
  }

  // max_insert_block_size - computed: true, optional: false, required: false
  public get maxInsertBlockSize() {
    return this.getNumberAttribute('max_insert_block_size');
  }

  // max_memory_usage - computed: true, optional: false, required: false
  public get maxMemoryUsage() {
    return this.getNumberAttribute('max_memory_usage');
  }

  // max_memory_usage_for_user - computed: true, optional: false, required: false
  public get maxMemoryUsageForUser() {
    return this.getNumberAttribute('max_memory_usage_for_user');
  }

  // max_network_bandwidth - computed: true, optional: false, required: false
  public get maxNetworkBandwidth() {
    return this.getNumberAttribute('max_network_bandwidth');
  }

  // max_network_bandwidth_for_user - computed: true, optional: false, required: false
  public get maxNetworkBandwidthForUser() {
    return this.getNumberAttribute('max_network_bandwidth_for_user');
  }

  // max_query_size - computed: true, optional: false, required: false
  public get maxQuerySize() {
    return this.getNumberAttribute('max_query_size');
  }

  // max_replica_delay_for_distributed_queries - computed: true, optional: false, required: false
  public get maxReplicaDelayForDistributedQueries() {
    return this.getNumberAttribute('max_replica_delay_for_distributed_queries');
  }

  // max_result_bytes - computed: true, optional: false, required: false
  public get maxResultBytes() {
    return this.getNumberAttribute('max_result_bytes');
  }

  // max_result_rows - computed: true, optional: false, required: false
  public get maxResultRows() {
    return this.getNumberAttribute('max_result_rows');
  }

  // max_rows_in_distinct - computed: true, optional: false, required: false
  public get maxRowsInDistinct() {
    return this.getNumberAttribute('max_rows_in_distinct');
  }

  // max_rows_in_join - computed: true, optional: false, required: false
  public get maxRowsInJoin() {
    return this.getNumberAttribute('max_rows_in_join');
  }

  // max_rows_in_set - computed: true, optional: false, required: false
  public get maxRowsInSet() {
    return this.getNumberAttribute('max_rows_in_set');
  }

  // max_rows_to_group_by - computed: true, optional: false, required: false
  public get maxRowsToGroupBy() {
    return this.getNumberAttribute('max_rows_to_group_by');
  }

  // max_rows_to_read - computed: true, optional: false, required: false
  public get maxRowsToRead() {
    return this.getNumberAttribute('max_rows_to_read');
  }

  // max_rows_to_sort - computed: true, optional: false, required: false
  public get maxRowsToSort() {
    return this.getNumberAttribute('max_rows_to_sort');
  }

  // max_rows_to_transfer - computed: true, optional: false, required: false
  public get maxRowsToTransfer() {
    return this.getNumberAttribute('max_rows_to_transfer');
  }

  // max_temporary_columns - computed: true, optional: false, required: false
  public get maxTemporaryColumns() {
    return this.getNumberAttribute('max_temporary_columns');
  }

  // max_temporary_non_const_columns - computed: true, optional: false, required: false
  public get maxTemporaryNonConstColumns() {
    return this.getNumberAttribute('max_temporary_non_const_columns');
  }

  // max_threads - computed: true, optional: false, required: false
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }

  // merge_tree_max_bytes_to_use_cache - computed: true, optional: false, required: false
  public get mergeTreeMaxBytesToUseCache() {
    return this.getNumberAttribute('merge_tree_max_bytes_to_use_cache');
  }

  // merge_tree_max_rows_to_use_cache - computed: true, optional: false, required: false
  public get mergeTreeMaxRowsToUseCache() {
    return this.getNumberAttribute('merge_tree_max_rows_to_use_cache');
  }

  // merge_tree_min_bytes_for_concurrent_read - computed: true, optional: false, required: false
  public get mergeTreeMinBytesForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_bytes_for_concurrent_read');
  }

  // merge_tree_min_rows_for_concurrent_read - computed: true, optional: false, required: false
  public get mergeTreeMinRowsForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_rows_for_concurrent_read');
  }

  // min_bytes_to_use_direct_io - computed: true, optional: false, required: false
  public get minBytesToUseDirectIo() {
    return this.getNumberAttribute('min_bytes_to_use_direct_io');
  }

  // min_count_to_compile - computed: true, optional: false, required: false
  public get minCountToCompile() {
    return this.getNumberAttribute('min_count_to_compile');
  }

  // min_count_to_compile_expression - computed: true, optional: false, required: false
  public get minCountToCompileExpression() {
    return this.getNumberAttribute('min_count_to_compile_expression');
  }

  // min_execution_speed - computed: true, optional: false, required: false
  public get minExecutionSpeed() {
    return this.getNumberAttribute('min_execution_speed');
  }

  // min_execution_speed_bytes - computed: true, optional: false, required: false
  public get minExecutionSpeedBytes() {
    return this.getNumberAttribute('min_execution_speed_bytes');
  }

  // min_insert_block_size_bytes - computed: true, optional: false, required: false
  public get minInsertBlockSizeBytes() {
    return this.getNumberAttribute('min_insert_block_size_bytes');
  }

  // min_insert_block_size_rows - computed: true, optional: false, required: false
  public get minInsertBlockSizeRows() {
    return this.getNumberAttribute('min_insert_block_size_rows');
  }

  // output_format_json_quote_64bit_integers - computed: true, optional: false, required: false
  public get outputFormatJsonQuote64BitIntegers() {
    return this.getBooleanAttribute('output_format_json_quote_64bit_integers');
  }

  // output_format_json_quote_denormals - computed: true, optional: false, required: false
  public get outputFormatJsonQuoteDenormals() {
    return this.getBooleanAttribute('output_format_json_quote_denormals');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // quota_mode - computed: true, optional: false, required: false
  public get quotaMode() {
    return this.getStringAttribute('quota_mode');
  }

  // read_overflow_mode - computed: true, optional: false, required: false
  public get readOverflowMode() {
    return this.getStringAttribute('read_overflow_mode');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getNumberAttribute('readonly');
  }

  // receive_timeout - computed: true, optional: false, required: false
  public get receiveTimeout() {
    return this.getNumberAttribute('receive_timeout');
  }

  // replication_alter_partitions_sync - computed: true, optional: false, required: false
  public get replicationAlterPartitionsSync() {
    return this.getNumberAttribute('replication_alter_partitions_sync');
  }

  // result_overflow_mode - computed: true, optional: false, required: false
  public get resultOverflowMode() {
    return this.getStringAttribute('result_overflow_mode');
  }

  // select_sequential_consistency - computed: true, optional: false, required: false
  public get selectSequentialConsistency() {
    return this.getBooleanAttribute('select_sequential_consistency');
  }

  // send_progress_in_http_headers - computed: true, optional: false, required: false
  public get sendProgressInHttpHeaders() {
    return this.getBooleanAttribute('send_progress_in_http_headers');
  }

  // send_timeout - computed: true, optional: false, required: false
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }

  // set_overflow_mode - computed: true, optional: false, required: false
  public get setOverflowMode() {
    return this.getStringAttribute('set_overflow_mode');
  }

  // skip_unavailable_shards - computed: true, optional: false, required: false
  public get skipUnavailableShards() {
    return this.getBooleanAttribute('skip_unavailable_shards');
  }

  // sort_overflow_mode - computed: true, optional: false, required: false
  public get sortOverflowMode() {
    return this.getStringAttribute('sort_overflow_mode');
  }

  // timeout_overflow_mode - computed: true, optional: false, required: false
  public get timeoutOverflowMode() {
    return this.getStringAttribute('timeout_overflow_mode');
  }

  // transfer_overflow_mode - computed: true, optional: false, required: false
  public get transferOverflowMode() {
    return this.getStringAttribute('transfer_overflow_mode');
  }

  // transform_null_in - computed: true, optional: false, required: false
  public get transformNullIn() {
    return this.getBooleanAttribute('transform_null_in');
  }

  // use_uncompressed_cache - computed: true, optional: false, required: false
  public get useUncompressedCache() {
    return this.getBooleanAttribute('use_uncompressed_cache');
  }
}

export class DataYandexMdbClickhouseClusterUserSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterUserSettingsOutputReference {
    return new DataYandexMdbClickhouseClusterUserSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUser {
}

export function dataYandexMdbClickhouseClusterUserToTerraform(struct?: DataYandexMdbClickhouseClusterUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permission - computed: true, optional: false, required: false
  private _permission = new DataYandexMdbClickhouseClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }

  // quota - computed: true, optional: false, required: false
  private _quota = new DataYandexMdbClickhouseClusterUserQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataYandexMdbClickhouseClusterUserSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
}

export class DataYandexMdbClickhouseClusterUserList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterUserOutputReference {
    return new DataYandexMdbClickhouseClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterZookeeperResources {
}

export function dataYandexMdbClickhouseClusterZookeeperResourcesToTerraform(struct?: DataYandexMdbClickhouseClusterZookeeperResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterZookeeperResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterZookeeperResources | undefined) {
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

export class DataYandexMdbClickhouseClusterZookeeperResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference {
    return new DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterZookeeper {
}

export function dataYandexMdbClickhouseClusterZookeeperToTerraform(struct?: DataYandexMdbClickhouseClusterZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbClickhouseClusterZookeeperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbClickhouseClusterZookeeper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterZookeeper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbClickhouseClusterZookeeperResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbClickhouseClusterZookeeperList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbClickhouseClusterZookeeperOutputReference {
    return new DataYandexMdbClickhouseClusterZookeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterCloudStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster#enabled DataYandexMdbClickhouseCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterCloudStorageToTerraform(struct?: DataYandexMdbClickhouseClusterCloudStorageOutputReference | DataYandexMdbClickhouseClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataYandexMdbClickhouseClusterCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster}
*/
export class DataYandexMdbClickhouseCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_clickhouse_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbClickhouseClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbClickhouseClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_clickhouse_cluster',
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
    this._deletionProtection = config.deletionProtection;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
    this._cloudStorage.internalValue = config.cloudStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  private _access = new DataYandexMdbClickhouseClusterAccessList(this, "access", false);
  public get access() {
    return this._access;
  }

  // backup_window_start - computed: true, optional: false, required: false
  private _backupWindowStart = new DataYandexMdbClickhouseClusterBackupWindowStartList(this, "backup_window_start", false);
  public get backupWindowStart() {
    return this._backupWindowStart;
  }

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataYandexMdbClickhouseClusterClickhouseList(this, "clickhouse", false);
  public get clickhouse() {
    return this._clickhouse;
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

  // database - computed: true, optional: false, required: false
  private _database = new DataYandexMdbClickhouseClusterDatabaseList(this, "database", true);
  public get database() {
    return this._database;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // embedded_keeper - computed: true, optional: false, required: false
  public get embeddedKeeper() {
    return this.getBooleanAttribute('embedded_keeper');
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

  // format_schema - computed: true, optional: false, required: false
  private _formatSchema = new DataYandexMdbClickhouseClusterFormatSchemaList(this, "format_schema", false);
  public get formatSchema() {
    return this._formatSchema;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataYandexMdbClickhouseClusterHostList(this, "host", false);
  public get host() {
    return this._host;
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

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbClickhouseClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // ml_model - computed: true, optional: false, required: false
  private _mlModel = new DataYandexMdbClickhouseClusterMlModelList(this, "ml_model", false);
  public get mlModel() {
    return this._mlModel;
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

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // shard_group - computed: true, optional: false, required: false
  private _shardGroup = new DataYandexMdbClickhouseClusterShardGroupList(this, "shard_group", false);
  public get shardGroup() {
    return this._shardGroup;
  }

  // sql_database_management - computed: true, optional: false, required: false
  public get sqlDatabaseManagement() {
    return this.getBooleanAttribute('sql_database_management');
  }

  // sql_user_management - computed: true, optional: false, required: false
  public get sqlUserManagement() {
    return this.getBooleanAttribute('sql_user_management');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataYandexMdbClickhouseClusterUserList(this, "user", true);
  public get user() {
    return this._user;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zookeeper - computed: true, optional: false, required: false
  private _zookeeper = new DataYandexMdbClickhouseClusterZookeeperList(this, "zookeeper", false);
  public get zookeeper() {
    return this._zookeeper;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new DataYandexMdbClickhouseClusterCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: DataYandexMdbClickhouseClusterCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      cloud_storage: dataYandexMdbClickhouseClusterCloudStorageToTerraform(this._cloudStorage.internalValue),
    };
  }
}
