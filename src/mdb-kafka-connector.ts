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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_kafka_connector#id MdbKafkaConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._thisCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._thisCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._thisCluster.internalValue = value.thisCluster;
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
  private _externalCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
  public putThisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster.internalValue = value;
  }
  public resetThisCluster() {
    this._thisCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster.internalValue;
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

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._thisCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._thisCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._thisCluster.internalValue = value.thisCluster;
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
  private _externalCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
  public putThisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster.internalValue = value;
  }
  public resetThisCluster() {
    this._thisCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster.internalValue;
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

export class MdbKafkaConnectorConnectorConfigMirrormakerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._sourceCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCluster = this._sourceCluster?.internalValue;
    }
    if (this._targetCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCluster = this._targetCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationFactor = undefined;
      this._topics = undefined;
      this._sourceCluster.internalValue = undefined;
      this._targetCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationFactor = value.replicationFactor;
      this._topics = value.topics;
      this._sourceCluster.internalValue = value.sourceCluster;
      this._targetCluster.internalValue = value.targetCluster;
    }
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string; 
  public get topics() {
    return this.getStringAttribute('topics');
  }
  public set topics(value: string) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // source_cluster - computed: false, optional: false, required: true
  private _sourceCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference(this, "source_cluster");
  public get sourceCluster() {
    return this._sourceCluster;
  }
  public putSourceCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster) {
    this._sourceCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster.internalValue;
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster) {
    this._targetCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    this._id = config.id;
    this._name = config.name;
    this._properties = config.properties;
    this._tasksMax = config.tasksMax;
    this._connectorConfigMirrormaker.internalValue = config.connectorConfigMirrormaker;
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
  private _connectorConfigMirrormaker = new MdbKafkaConnectorConnectorConfigMirrormakerList(this, "connector_config_mirrormaker", false);
  public get connectorConfigMirrormaker() {
    return this._connectorConfigMirrormaker;
  }
  public putConnectorConfigMirrormaker(value: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable) {
    this._connectorConfigMirrormaker.internalValue = value;
  }
  public resetConnectorConfigMirrormaker() {
    this._connectorConfigMirrormaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigMirrormakerInput() {
    return this._connectorConfigMirrormaker.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
      connector_config_mirrormaker: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerToTerraform)(this._connectorConfigMirrormaker.internalValue),
    };
  }
}
