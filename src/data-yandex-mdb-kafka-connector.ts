// https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbKafkaConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector#cluster_id DataYandexMdbKafkaConnector#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector#id DataYandexMdbKafkaConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector#name DataYandexMdbKafkaConnector#name}
  */
  readonly name: string;
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
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

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // external_cluster - computed: true, optional: false, required: false
  private _externalCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }

  // this_cluster - computed: true, optional: false, required: false
  private _thisCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
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

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetCluster {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // external_cluster - computed: true, optional: false, required: false
  private _externalCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }

  // this_cluster - computed: true, optional: false, required: false
  private _thisCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaConnectorConnectorConfigMirrormaker {
}

export function dataYandexMdbKafkaConnectorConnectorConfigMirrormakerToTerraform(struct?: DataYandexMdbKafkaConnectorConnectorConfigMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaConnectorConnectorConfigMirrormaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaConnectorConnectorConfigMirrormaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // source_cluster - computed: true, optional: false, required: false
  private _sourceCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerSourceClusterList(this, "source_cluster", false);
  public get sourceCluster() {
    return this._sourceCluster;
  }

  // target_cluster - computed: true, optional: false, required: false
  private _targetCluster = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerTargetClusterList(this, "target_cluster", false);
  public get targetCluster() {
    return this._targetCluster;
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getStringAttribute('topics');
  }
}

export class DataYandexMdbKafkaConnectorConnectorConfigMirrormakerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaConnectorConnectorConfigMirrormakerOutputReference {
    return new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector yandex_mdb_kafka_connector}
*/
export class DataYandexMdbKafkaConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_connector yandex_mdb_kafka_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbKafkaConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbKafkaConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_connector',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // connector_config_mirrormaker - computed: true, optional: false, required: false
  private _connectorConfigMirrormaker = new DataYandexMdbKafkaConnectorConnectorConfigMirrormakerList(this, "connector_config_mirrormaker", false);
  public get connectorConfigMirrormaker() {
    return this._connectorConfigMirrormaker;
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

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // tasks_max - computed: true, optional: false, required: false
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
