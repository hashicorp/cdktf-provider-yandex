// https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbKafkaConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#cluster_id MdbKafkaConnector#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#name MdbKafkaConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#properties MdbKafkaConnector#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#tasks_max MdbKafkaConnector#tasks_max}
  */
  readonly tasksMax?: number;
  /**
  * connector_config_mirrormaker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#connector_config_mirrormaker MdbKafkaConnector#connector_config_mirrormaker}
  */
  readonly connectorConfigMirrormaker?: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable;
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#bootstrap_servers MdbKafkaConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_mechanism MdbKafkaConnector#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_password MdbKafkaConnector#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_username MdbKafkaConnector#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#security_protocol MdbKafkaConnector#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}

export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster {
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#alias MdbKafkaConnector#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#external_cluster MdbKafkaConnector#external_cluster}
  */
  readonly externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * this_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#this_cluster MdbKafkaConnector#this_cluster}
  */
  readonly thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToTerraform)(struct!.externalCluster),
    this_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToTerraform)(struct!.thisCluster),
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster;
    }
    if (this._thisCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster = undefined;
      this._thisCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster = value.externalCluster;
      this._thisCluster = value.thisCluster;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable; 
  public get externalCluster() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('external_cluster');
  }
  public set externalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster = value;
  }
  public resetExternalCluster() {
    this._externalCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable; 
  public get thisCluster() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('this_cluster');
  }
  public set thisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster = value;
  }
  public resetThisCluster() {
    this._thisCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster;
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#bootstrap_servers MdbKafkaConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_mechanism MdbKafkaConnector#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_password MdbKafkaConnector#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#sasl_username MdbKafkaConnector#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#security_protocol MdbKafkaConnector#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}

export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster {
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#alias MdbKafkaConnector#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#external_cluster MdbKafkaConnector#external_cluster}
  */
  readonly externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * this_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#this_cluster MdbKafkaConnector#this_cluster}
  */
  readonly thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToTerraform)(struct!.externalCluster),
    this_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToTerraform)(struct!.thisCluster),
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster;
    }
    if (this._thisCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster = undefined;
      this._thisCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster = value.externalCluster;
      this._thisCluster = value.thisCluster;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable; 
  public get externalCluster() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('external_cluster');
  }
  public set externalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster = value;
  }
  public resetExternalCluster() {
    this._externalCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable; 
  public get thisCluster() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('this_cluster');
  }
  public set thisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster = value;
  }
  public resetThisCluster() {
    this._thisCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster;
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormaker {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#replication_factor MdbKafkaConnector#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#topics MdbKafkaConnector#topics}
  */
  readonly topics: string;
  /**
  * source_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#source_cluster MdbKafkaConnector#source_cluster}
  */
  readonly sourceCluster: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster;
  /**
  * target_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#target_cluster MdbKafkaConnector#target_cluster}
  */
  readonly targetCluster: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    topics: cdktf.stringToTerraform(struct!.topics),
    source_cluster: mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToTerraform(struct!.sourceCluster),
    target_cluster: mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToTerraform(struct!.targetCluster),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector yandex_mdb_kafka_connector}
*/
export class MdbKafkaConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector yandex_mdb_kafka_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbKafkaConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: MdbKafkaConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_connector',
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
    this._clusterId = config.clusterId;
    this._name = config.name;
    this._properties = config.properties;
    this._tasksMax = config.tasksMax;
    this._connectorConfigMirrormaker = config.connectorConfigMirrormaker;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // tasks_max - computed: false, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // connector_config_mirrormaker - computed: false, optional: true, required: false
  private _connectorConfigMirrormaker?: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable; 
  public get connectorConfigMirrormaker() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connector_config_mirrormaker');
  }
  public set connectorConfigMirrormaker(value: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable) {
    this._connectorConfigMirrormaker = value;
  }
  public resetConnectorConfigMirrormaker() {
    this._connectorConfigMirrormaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigMirrormakerInput() {
    return this._connectorConfigMirrormaker;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
      connector_config_mirrormaker: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerToTerraform)(this._connectorConfigMirrormaker),
    };
  }
}
