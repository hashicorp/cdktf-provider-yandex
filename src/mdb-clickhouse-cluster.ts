// https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbClickhouseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#admin_password MdbClickhouseCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#copy_schema_on_new_hosts MdbClickhouseCluster#copy_schema_on_new_hosts}
  */
  readonly copySchemaOnNewHosts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#deletion_protection MdbClickhouseCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#description MdbClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#embedded_keeper MdbClickhouseCluster#embedded_keeper}
  */
  readonly embeddedKeeper?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#environment MdbClickhouseCluster#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#folder_id MdbClickhouseCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#labels MdbClickhouseCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#network_id MdbClickhouseCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#security_group_ids MdbClickhouseCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#service_account_id MdbClickhouseCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sql_database_management MdbClickhouseCluster#sql_database_management}
  */
  readonly sqlDatabaseManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sql_user_management MdbClickhouseCluster#sql_user_management}
  */
  readonly sqlUserManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#version MdbClickhouseCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#access MdbClickhouseCluster#access}
  */
  readonly access?: MdbClickhouseClusterAccess;
  /**
  * backup_window_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#backup_window_start MdbClickhouseCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbClickhouseClusterBackupWindowStart;
  /**
  * clickhouse block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#clickhouse MdbClickhouseCluster#clickhouse}
  */
  readonly clickhouse: MdbClickhouseClusterClickhouse;
  /**
  * cloud_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#cloud_storage MdbClickhouseCluster#cloud_storage}
  */
  readonly cloudStorage?: MdbClickhouseClusterCloudStorage;
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#database MdbClickhouseCluster#database}
  */
  readonly database?: MdbClickhouseClusterDatabase[] | cdktf.IResolvable;
  /**
  * format_schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#format_schema MdbClickhouseCluster#format_schema}
  */
  readonly formatSchema?: MdbClickhouseClusterFormatSchema[] | cdktf.IResolvable;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#host MdbClickhouseCluster#host}
  */
  readonly host: MdbClickhouseClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#maintenance_window MdbClickhouseCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbClickhouseClusterMaintenanceWindow;
  /**
  * ml_model block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#ml_model MdbClickhouseCluster#ml_model}
  */
  readonly mlModel?: MdbClickhouseClusterMlModel[] | cdktf.IResolvable;
  /**
  * shard_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#shard_group MdbClickhouseCluster#shard_group}
  */
  readonly shardGroup?: MdbClickhouseClusterShardGroup[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#timeouts MdbClickhouseCluster#timeouts}
  */
  readonly timeouts?: MdbClickhouseClusterTimeouts;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#user MdbClickhouseCluster#user}
  */
  readonly user?: MdbClickhouseClusterUser[] | cdktf.IResolvable;
  /**
  * zookeeper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#zookeeper MdbClickhouseCluster#zookeeper}
  */
  readonly zookeeper?: MdbClickhouseClusterZookeeper;
}
export interface MdbClickhouseClusterAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#data_lens MdbClickhouseCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#metrika MdbClickhouseCluster#metrika}
  */
  readonly metrika?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#serverless MdbClickhouseCluster#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#web_sql MdbClickhouseCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbClickhouseClusterAccessToTerraform(struct?: MdbClickhouseClusterAccessOutputReference | MdbClickhouseClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    metrika: cdktf.booleanToTerraform(struct!.metrika),
    serverless: cdktf.booleanToTerraform(struct!.serverless),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}

export class MdbClickhouseClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._metrika !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrika = this._metrika;
    }
    if (this._serverless !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._metrika = undefined;
      this._serverless = undefined;
      this._webSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._metrika = value.metrika;
      this._serverless = value.serverless;
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

  // metrika - computed: false, optional: true, required: false
  private _metrika?: boolean | cdktf.IResolvable; 
  public get metrika() {
    return this.getBooleanAttribute('metrika');
  }
  public set metrika(value: boolean | cdktf.IResolvable) {
    this._metrika = value;
  }
  public resetMetrika() {
    this._metrika = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metrikaInput() {
    return this._metrika;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
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
export interface MdbClickhouseClusterBackupWindowStart {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#hours MdbClickhouseCluster#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#minutes MdbClickhouseCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbClickhouseClusterBackupWindowStartToTerraform(struct?: MdbClickhouseClusterBackupWindowStartOutputReference | MdbClickhouseClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}

export class MdbClickhouseClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterBackupWindowStart | undefined {
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

  public set internalValue(value: MdbClickhouseClusterBackupWindowStart | undefined) {
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
export interface MdbClickhouseClusterClickhouseConfigCompression {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#method MdbClickhouseCluster#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_part_size MdbClickhouseCluster#min_part_size}
  */
  readonly minPartSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_part_size_ratio MdbClickhouseCluster#min_part_size_ratio}
  */
  readonly minPartSizeRatio: number;
}

export function mdbClickhouseClusterClickhouseConfigCompressionToTerraform(struct?: MdbClickhouseClusterClickhouseConfigCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    min_part_size: cdktf.numberToTerraform(struct!.minPartSize),
    min_part_size_ratio: cdktf.numberToTerraform(struct!.minPartSizeRatio),
  }
}

export interface MdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#age MdbClickhouseCluster#age}
  */
  readonly age: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#precision MdbClickhouseCluster#precision}
  */
  readonly precision: number;
}

export function mdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToTerraform(struct?: MdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    precision: cdktf.numberToTerraform(struct!.precision),
  }
}

export interface MdbClickhouseClusterClickhouseConfigGraphiteRollupPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#function MdbClickhouseCluster#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#regexp MdbClickhouseCluster#regexp}
  */
  readonly regexp?: string;
  /**
  * retention block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#retention MdbClickhouseCluster#retention}
  */
  readonly retention?: MdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention[] | cdktf.IResolvable;
}

export function mdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToTerraform(struct?: MdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    retention: cdktf.listMapper(mdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToTerraform)(struct!.retention),
  }
}

export interface MdbClickhouseClusterClickhouseConfigGraphiteRollup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#pattern MdbClickhouseCluster#pattern}
  */
  readonly pattern?: MdbClickhouseClusterClickhouseConfigGraphiteRollupPattern[] | cdktf.IResolvable;
}

export function mdbClickhouseClusterClickhouseConfigGraphiteRollupToTerraform(struct?: MdbClickhouseClusterClickhouseConfigGraphiteRollup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.listMapper(mdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToTerraform)(struct!.pattern),
  }
}

export interface MdbClickhouseClusterClickhouseConfigKafka {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_mechanism MdbClickhouseCluster#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_password MdbClickhouseCluster#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_username MdbClickhouseCluster#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#security_protocol MdbClickhouseCluster#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbClickhouseClusterClickhouseConfigKafkaToTerraform(struct?: MdbClickhouseClusterClickhouseConfigKafkaOutputReference | MdbClickhouseClusterClickhouseConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}

export class MdbClickhouseClusterClickhouseConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: MdbClickhouseClusterClickhouseConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
  }

  // sasl_mechanism - computed: true, optional: true, required: false
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

  // sasl_password - computed: true, optional: true, required: false
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

  // sasl_username - computed: true, optional: true, required: false
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

  // security_protocol - computed: true, optional: true, required: false
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
export interface MdbClickhouseClusterClickhouseConfigKafkaTopicSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_mechanism MdbClickhouseCluster#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_password MdbClickhouseCluster#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sasl_username MdbClickhouseCluster#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#security_protocol MdbClickhouseCluster#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToTerraform(struct?: MdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference | MdbClickhouseClusterClickhouseConfigKafkaTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}

export class MdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: MdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
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
export interface MdbClickhouseClusterClickhouseConfigKafkaTopic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#settings MdbClickhouseCluster#settings}
  */
  readonly settings?: MdbClickhouseClusterClickhouseConfigKafkaTopicSettings;
}

export function mdbClickhouseClusterClickhouseConfigKafkaTopicToTerraform(struct?: MdbClickhouseClusterClickhouseConfigKafkaTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    settings: mdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToTerraform(struct!.settings),
  }
}

export interface MdbClickhouseClusterClickhouseConfigMergeTree {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_to_merge_at_min_space_in_pool MdbClickhouseCluster#max_bytes_to_merge_at_min_space_in_pool}
  */
  readonly maxBytesToMergeAtMinSpaceInPool?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_replicated_merges_in_queue MdbClickhouseCluster#max_replicated_merges_in_queue}
  */
  readonly maxReplicatedMergesInQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#number_of_free_entries_in_pool_to_lower_max_size_of_merge MdbClickhouseCluster#number_of_free_entries_in_pool_to_lower_max_size_of_merge}
  */
  readonly numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#parts_to_delay_insert MdbClickhouseCluster#parts_to_delay_insert}
  */
  readonly partsToDelayInsert?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#parts_to_throw_insert MdbClickhouseCluster#parts_to_throw_insert}
  */
  readonly partsToThrowInsert?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#replicated_deduplication_window MdbClickhouseCluster#replicated_deduplication_window}
  */
  readonly replicatedDeduplicationWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#replicated_deduplication_window_seconds MdbClickhouseCluster#replicated_deduplication_window_seconds}
  */
  readonly replicatedDeduplicationWindowSeconds?: number;
}

export function mdbClickhouseClusterClickhouseConfigMergeTreeToTerraform(struct?: MdbClickhouseClusterClickhouseConfigMergeTreeOutputReference | MdbClickhouseClusterClickhouseConfigMergeTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes_to_merge_at_min_space_in_pool: cdktf.numberToTerraform(struct!.maxBytesToMergeAtMinSpaceInPool),
    max_replicated_merges_in_queue: cdktf.numberToTerraform(struct!.maxReplicatedMergesInQueue),
    number_of_free_entries_in_pool_to_lower_max_size_of_merge: cdktf.numberToTerraform(struct!.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge),
    parts_to_delay_insert: cdktf.numberToTerraform(struct!.partsToDelayInsert),
    parts_to_throw_insert: cdktf.numberToTerraform(struct!.partsToThrowInsert),
    replicated_deduplication_window: cdktf.numberToTerraform(struct!.replicatedDeduplicationWindow),
    replicated_deduplication_window_seconds: cdktf.numberToTerraform(struct!.replicatedDeduplicationWindowSeconds),
  }
}

export class MdbClickhouseClusterClickhouseConfigMergeTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseConfigMergeTree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytesToMergeAtMinSpaceInPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToMergeAtMinSpaceInPool = this._maxBytesToMergeAtMinSpaceInPool;
    }
    if (this._maxReplicatedMergesInQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicatedMergesInQueue = this._maxReplicatedMergesInQueue;
    }
    if (this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
    }
    if (this._partsToDelayInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.partsToDelayInsert = this._partsToDelayInsert;
    }
    if (this._partsToThrowInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.partsToThrowInsert = this._partsToThrowInsert;
    }
    if (this._replicatedDeduplicationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedDeduplicationWindow = this._replicatedDeduplicationWindow;
    }
    if (this._replicatedDeduplicationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedDeduplicationWindowSeconds = this._replicatedDeduplicationWindowSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterClickhouseConfigMergeTree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytesToMergeAtMinSpaceInPool = undefined;
      this._maxReplicatedMergesInQueue = undefined;
      this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
      this._partsToDelayInsert = undefined;
      this._partsToThrowInsert = undefined;
      this._replicatedDeduplicationWindow = undefined;
      this._replicatedDeduplicationWindowSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytesToMergeAtMinSpaceInPool = value.maxBytesToMergeAtMinSpaceInPool;
      this._maxReplicatedMergesInQueue = value.maxReplicatedMergesInQueue;
      this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = value.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
      this._partsToDelayInsert = value.partsToDelayInsert;
      this._partsToThrowInsert = value.partsToThrowInsert;
      this._replicatedDeduplicationWindow = value.replicatedDeduplicationWindow;
      this._replicatedDeduplicationWindowSeconds = value.replicatedDeduplicationWindowSeconds;
    }
  }

  // max_bytes_to_merge_at_min_space_in_pool - computed: true, optional: true, required: false
  private _maxBytesToMergeAtMinSpaceInPool?: number; 
  public get maxBytesToMergeAtMinSpaceInPool() {
    return this.getNumberAttribute('max_bytes_to_merge_at_min_space_in_pool');
  }
  public set maxBytesToMergeAtMinSpaceInPool(value: number) {
    this._maxBytesToMergeAtMinSpaceInPool = value;
  }
  public resetMaxBytesToMergeAtMinSpaceInPool() {
    this._maxBytesToMergeAtMinSpaceInPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToMergeAtMinSpaceInPoolInput() {
    return this._maxBytesToMergeAtMinSpaceInPool;
  }

  // max_replicated_merges_in_queue - computed: true, optional: true, required: false
  private _maxReplicatedMergesInQueue?: number; 
  public get maxReplicatedMergesInQueue() {
    return this.getNumberAttribute('max_replicated_merges_in_queue');
  }
  public set maxReplicatedMergesInQueue(value: number) {
    this._maxReplicatedMergesInQueue = value;
  }
  public resetMaxReplicatedMergesInQueue() {
    this._maxReplicatedMergesInQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicatedMergesInQueueInput() {
    return this._maxReplicatedMergesInQueue;
  }

  // number_of_free_entries_in_pool_to_lower_max_size_of_merge - computed: true, optional: true, required: false
  private _numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number; 
  public get numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge() {
    return this.getNumberAttribute('number_of_free_entries_in_pool_to_lower_max_size_of_merge');
  }
  public set numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(value: number) {
    this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = value;
  }
  public resetNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge() {
    this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFreeEntriesInPoolToLowerMaxSizeOfMergeInput() {
    return this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
  }

  // parts_to_delay_insert - computed: true, optional: true, required: false
  private _partsToDelayInsert?: number; 
  public get partsToDelayInsert() {
    return this.getNumberAttribute('parts_to_delay_insert');
  }
  public set partsToDelayInsert(value: number) {
    this._partsToDelayInsert = value;
  }
  public resetPartsToDelayInsert() {
    this._partsToDelayInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partsToDelayInsertInput() {
    return this._partsToDelayInsert;
  }

  // parts_to_throw_insert - computed: true, optional: true, required: false
  private _partsToThrowInsert?: number; 
  public get partsToThrowInsert() {
    return this.getNumberAttribute('parts_to_throw_insert');
  }
  public set partsToThrowInsert(value: number) {
    this._partsToThrowInsert = value;
  }
  public resetPartsToThrowInsert() {
    this._partsToThrowInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partsToThrowInsertInput() {
    return this._partsToThrowInsert;
  }

  // replicated_deduplication_window - computed: true, optional: true, required: false
  private _replicatedDeduplicationWindow?: number; 
  public get replicatedDeduplicationWindow() {
    return this.getNumberAttribute('replicated_deduplication_window');
  }
  public set replicatedDeduplicationWindow(value: number) {
    this._replicatedDeduplicationWindow = value;
  }
  public resetReplicatedDeduplicationWindow() {
    this._replicatedDeduplicationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedDeduplicationWindowInput() {
    return this._replicatedDeduplicationWindow;
  }

  // replicated_deduplication_window_seconds - computed: true, optional: true, required: false
  private _replicatedDeduplicationWindowSeconds?: number; 
  public get replicatedDeduplicationWindowSeconds() {
    return this.getNumberAttribute('replicated_deduplication_window_seconds');
  }
  public set replicatedDeduplicationWindowSeconds(value: number) {
    this._replicatedDeduplicationWindowSeconds = value;
  }
  public resetReplicatedDeduplicationWindowSeconds() {
    this._replicatedDeduplicationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedDeduplicationWindowSecondsInput() {
    return this._replicatedDeduplicationWindowSeconds;
  }
}
export interface MdbClickhouseClusterClickhouseConfigRabbitmq {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#password MdbClickhouseCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#username MdbClickhouseCluster#username}
  */
  readonly username?: string;
}

export function mdbClickhouseClusterClickhouseConfigRabbitmqToTerraform(struct?: MdbClickhouseClusterClickhouseConfigRabbitmqOutputReference | MdbClickhouseClusterClickhouseConfigRabbitmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MdbClickhouseClusterClickhouseConfigRabbitmqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseConfigRabbitmq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterClickhouseConfigRabbitmq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MdbClickhouseClusterClickhouseConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#background_pool_size MdbClickhouseCluster#background_pool_size}
  */
  readonly backgroundPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#background_schedule_pool_size MdbClickhouseCluster#background_schedule_pool_size}
  */
  readonly backgroundSchedulePoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#geobase_uri MdbClickhouseCluster#geobase_uri}
  */
  readonly geobaseUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#keep_alive_timeout MdbClickhouseCluster#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#log_level MdbClickhouseCluster#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#mark_cache_size MdbClickhouseCluster#mark_cache_size}
  */
  readonly markCacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_concurrent_queries MdbClickhouseCluster#max_concurrent_queries}
  */
  readonly maxConcurrentQueries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_connections MdbClickhouseCluster#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_partition_size_to_drop MdbClickhouseCluster#max_partition_size_to_drop}
  */
  readonly maxPartitionSizeToDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_table_size_to_drop MdbClickhouseCluster#max_table_size_to_drop}
  */
  readonly maxTableSizeToDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#metric_log_enabled MdbClickhouseCluster#metric_log_enabled}
  */
  readonly metricLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#metric_log_retention_size MdbClickhouseCluster#metric_log_retention_size}
  */
  readonly metricLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#metric_log_retention_time MdbClickhouseCluster#metric_log_retention_time}
  */
  readonly metricLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#part_log_retention_size MdbClickhouseCluster#part_log_retention_size}
  */
  readonly partLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#part_log_retention_time MdbClickhouseCluster#part_log_retention_time}
  */
  readonly partLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#query_log_retention_size MdbClickhouseCluster#query_log_retention_size}
  */
  readonly queryLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#query_log_retention_time MdbClickhouseCluster#query_log_retention_time}
  */
  readonly queryLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#query_thread_log_enabled MdbClickhouseCluster#query_thread_log_enabled}
  */
  readonly queryThreadLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#query_thread_log_retention_size MdbClickhouseCluster#query_thread_log_retention_size}
  */
  readonly queryThreadLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#query_thread_log_retention_time MdbClickhouseCluster#query_thread_log_retention_time}
  */
  readonly queryThreadLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#text_log_enabled MdbClickhouseCluster#text_log_enabled}
  */
  readonly textLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#text_log_level MdbClickhouseCluster#text_log_level}
  */
  readonly textLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#text_log_retention_size MdbClickhouseCluster#text_log_retention_size}
  */
  readonly textLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#text_log_retention_time MdbClickhouseCluster#text_log_retention_time}
  */
  readonly textLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#timezone MdbClickhouseCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#trace_log_enabled MdbClickhouseCluster#trace_log_enabled}
  */
  readonly traceLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#trace_log_retention_size MdbClickhouseCluster#trace_log_retention_size}
  */
  readonly traceLogRetentionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#trace_log_retention_time MdbClickhouseCluster#trace_log_retention_time}
  */
  readonly traceLogRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#uncompressed_cache_size MdbClickhouseCluster#uncompressed_cache_size}
  */
  readonly uncompressedCacheSize?: number;
  /**
  * compression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#compression MdbClickhouseCluster#compression}
  */
  readonly compression?: MdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable;
  /**
  * graphite_rollup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#graphite_rollup MdbClickhouseCluster#graphite_rollup}
  */
  readonly graphiteRollup?: MdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable;
  /**
  * kafka block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#kafka MdbClickhouseCluster#kafka}
  */
  readonly kafka?: MdbClickhouseClusterClickhouseConfigKafka;
  /**
  * kafka_topic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#kafka_topic MdbClickhouseCluster#kafka_topic}
  */
  readonly kafkaTopic?: MdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable;
  /**
  * merge_tree block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#merge_tree MdbClickhouseCluster#merge_tree}
  */
  readonly mergeTree?: MdbClickhouseClusterClickhouseConfigMergeTree;
  /**
  * rabbitmq block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#rabbitmq MdbClickhouseCluster#rabbitmq}
  */
  readonly rabbitmq?: MdbClickhouseClusterClickhouseConfigRabbitmq;
}

export function mdbClickhouseClusterClickhouseConfigToTerraform(struct?: MdbClickhouseClusterClickhouseConfigOutputReference | MdbClickhouseClusterClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_pool_size: cdktf.numberToTerraform(struct!.backgroundPoolSize),
    background_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundSchedulePoolSize),
    geobase_uri: cdktf.stringToTerraform(struct!.geobaseUri),
    keep_alive_timeout: cdktf.numberToTerraform(struct!.keepAliveTimeout),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mark_cache_size: cdktf.numberToTerraform(struct!.markCacheSize),
    max_concurrent_queries: cdktf.numberToTerraform(struct!.maxConcurrentQueries),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_partition_size_to_drop: cdktf.numberToTerraform(struct!.maxPartitionSizeToDrop),
    max_table_size_to_drop: cdktf.numberToTerraform(struct!.maxTableSizeToDrop),
    metric_log_enabled: cdktf.booleanToTerraform(struct!.metricLogEnabled),
    metric_log_retention_size: cdktf.numberToTerraform(struct!.metricLogRetentionSize),
    metric_log_retention_time: cdktf.numberToTerraform(struct!.metricLogRetentionTime),
    part_log_retention_size: cdktf.numberToTerraform(struct!.partLogRetentionSize),
    part_log_retention_time: cdktf.numberToTerraform(struct!.partLogRetentionTime),
    query_log_retention_size: cdktf.numberToTerraform(struct!.queryLogRetentionSize),
    query_log_retention_time: cdktf.numberToTerraform(struct!.queryLogRetentionTime),
    query_thread_log_enabled: cdktf.booleanToTerraform(struct!.queryThreadLogEnabled),
    query_thread_log_retention_size: cdktf.numberToTerraform(struct!.queryThreadLogRetentionSize),
    query_thread_log_retention_time: cdktf.numberToTerraform(struct!.queryThreadLogRetentionTime),
    text_log_enabled: cdktf.booleanToTerraform(struct!.textLogEnabled),
    text_log_level: cdktf.stringToTerraform(struct!.textLogLevel),
    text_log_retention_size: cdktf.numberToTerraform(struct!.textLogRetentionSize),
    text_log_retention_time: cdktf.numberToTerraform(struct!.textLogRetentionTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    trace_log_enabled: cdktf.booleanToTerraform(struct!.traceLogEnabled),
    trace_log_retention_size: cdktf.numberToTerraform(struct!.traceLogRetentionSize),
    trace_log_retention_time: cdktf.numberToTerraform(struct!.traceLogRetentionTime),
    uncompressed_cache_size: cdktf.numberToTerraform(struct!.uncompressedCacheSize),
    compression: cdktf.listMapper(mdbClickhouseClusterClickhouseConfigCompressionToTerraform)(struct!.compression),
    graphite_rollup: cdktf.listMapper(mdbClickhouseClusterClickhouseConfigGraphiteRollupToTerraform)(struct!.graphiteRollup),
    kafka: mdbClickhouseClusterClickhouseConfigKafkaToTerraform(struct!.kafka),
    kafka_topic: cdktf.listMapper(mdbClickhouseClusterClickhouseConfigKafkaTopicToTerraform)(struct!.kafkaTopic),
    merge_tree: mdbClickhouseClusterClickhouseConfigMergeTreeToTerraform(struct!.mergeTree),
    rabbitmq: mdbClickhouseClusterClickhouseConfigRabbitmqToTerraform(struct!.rabbitmq),
  }
}

export class MdbClickhouseClusterClickhouseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundPoolSize = this._backgroundPoolSize;
    }
    if (this._backgroundSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundSchedulePoolSize = this._backgroundSchedulePoolSize;
    }
    if (this._geobaseUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.geobaseUri = this._geobaseUri;
    }
    if (this._keepAliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._markCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.markCacheSize = this._markCacheSize;
    }
    if (this._maxConcurrentQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentQueries = this._maxConcurrentQueries;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPartitionSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionSizeToDrop = this._maxPartitionSizeToDrop;
    }
    if (this._maxTableSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTableSizeToDrop = this._maxTableSizeToDrop;
    }
    if (this._metricLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogEnabled = this._metricLogEnabled;
    }
    if (this._metricLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionSize = this._metricLogRetentionSize;
    }
    if (this._metricLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionTime = this._metricLogRetentionTime;
    }
    if (this._partLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionSize = this._partLogRetentionSize;
    }
    if (this._partLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionTime = this._partLogRetentionTime;
    }
    if (this._queryLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionSize = this._queryLogRetentionSize;
    }
    if (this._queryLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionTime = this._queryLogRetentionTime;
    }
    if (this._queryThreadLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogEnabled = this._queryThreadLogEnabled;
    }
    if (this._queryThreadLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionSize = this._queryThreadLogRetentionSize;
    }
    if (this._queryThreadLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionTime = this._queryThreadLogRetentionTime;
    }
    if (this._textLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogEnabled = this._textLogEnabled;
    }
    if (this._textLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogLevel = this._textLogLevel;
    }
    if (this._textLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionSize = this._textLogRetentionSize;
    }
    if (this._textLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionTime = this._textLogRetentionTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._traceLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogEnabled = this._traceLogEnabled;
    }
    if (this._traceLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionSize = this._traceLogRetentionSize;
    }
    if (this._traceLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionTime = this._traceLogRetentionTime;
    }
    if (this._uncompressedCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedCacheSize = this._uncompressedCacheSize;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._graphiteRollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphiteRollup = this._graphiteRollup;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kafkaTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopic = this._kafkaTopic;
    }
    if (this._mergeTree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTree = this._mergeTree?.internalValue;
    }
    if (this._rabbitmq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitmq = this._rabbitmq?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterClickhouseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundPoolSize = undefined;
      this._backgroundSchedulePoolSize = undefined;
      this._geobaseUri = undefined;
      this._keepAliveTimeout = undefined;
      this._logLevel = undefined;
      this._markCacheSize = undefined;
      this._maxConcurrentQueries = undefined;
      this._maxConnections = undefined;
      this._maxPartitionSizeToDrop = undefined;
      this._maxTableSizeToDrop = undefined;
      this._metricLogEnabled = undefined;
      this._metricLogRetentionSize = undefined;
      this._metricLogRetentionTime = undefined;
      this._partLogRetentionSize = undefined;
      this._partLogRetentionTime = undefined;
      this._queryLogRetentionSize = undefined;
      this._queryLogRetentionTime = undefined;
      this._queryThreadLogEnabled = undefined;
      this._queryThreadLogRetentionSize = undefined;
      this._queryThreadLogRetentionTime = undefined;
      this._textLogEnabled = undefined;
      this._textLogLevel = undefined;
      this._textLogRetentionSize = undefined;
      this._textLogRetentionTime = undefined;
      this._timezone = undefined;
      this._traceLogEnabled = undefined;
      this._traceLogRetentionSize = undefined;
      this._traceLogRetentionTime = undefined;
      this._uncompressedCacheSize = undefined;
      this._compression = undefined;
      this._graphiteRollup = undefined;
      this._kafka.internalValue = undefined;
      this._kafkaTopic = undefined;
      this._mergeTree.internalValue = undefined;
      this._rabbitmq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundPoolSize = value.backgroundPoolSize;
      this._backgroundSchedulePoolSize = value.backgroundSchedulePoolSize;
      this._geobaseUri = value.geobaseUri;
      this._keepAliveTimeout = value.keepAliveTimeout;
      this._logLevel = value.logLevel;
      this._markCacheSize = value.markCacheSize;
      this._maxConcurrentQueries = value.maxConcurrentQueries;
      this._maxConnections = value.maxConnections;
      this._maxPartitionSizeToDrop = value.maxPartitionSizeToDrop;
      this._maxTableSizeToDrop = value.maxTableSizeToDrop;
      this._metricLogEnabled = value.metricLogEnabled;
      this._metricLogRetentionSize = value.metricLogRetentionSize;
      this._metricLogRetentionTime = value.metricLogRetentionTime;
      this._partLogRetentionSize = value.partLogRetentionSize;
      this._partLogRetentionTime = value.partLogRetentionTime;
      this._queryLogRetentionSize = value.queryLogRetentionSize;
      this._queryLogRetentionTime = value.queryLogRetentionTime;
      this._queryThreadLogEnabled = value.queryThreadLogEnabled;
      this._queryThreadLogRetentionSize = value.queryThreadLogRetentionSize;
      this._queryThreadLogRetentionTime = value.queryThreadLogRetentionTime;
      this._textLogEnabled = value.textLogEnabled;
      this._textLogLevel = value.textLogLevel;
      this._textLogRetentionSize = value.textLogRetentionSize;
      this._textLogRetentionTime = value.textLogRetentionTime;
      this._timezone = value.timezone;
      this._traceLogEnabled = value.traceLogEnabled;
      this._traceLogRetentionSize = value.traceLogRetentionSize;
      this._traceLogRetentionTime = value.traceLogRetentionTime;
      this._uncompressedCacheSize = value.uncompressedCacheSize;
      this._compression = value.compression;
      this._graphiteRollup = value.graphiteRollup;
      this._kafka.internalValue = value.kafka;
      this._kafkaTopic = value.kafkaTopic;
      this._mergeTree.internalValue = value.mergeTree;
      this._rabbitmq.internalValue = value.rabbitmq;
    }
  }

  // background_pool_size - computed: true, optional: true, required: false
  private _backgroundPoolSize?: number; 
  public get backgroundPoolSize() {
    return this.getNumberAttribute('background_pool_size');
  }
  public set backgroundPoolSize(value: number) {
    this._backgroundPoolSize = value;
  }
  public resetBackgroundPoolSize() {
    this._backgroundPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundPoolSizeInput() {
    return this._backgroundPoolSize;
  }

  // background_schedule_pool_size - computed: true, optional: true, required: false
  private _backgroundSchedulePoolSize?: number; 
  public get backgroundSchedulePoolSize() {
    return this.getNumberAttribute('background_schedule_pool_size');
  }
  public set backgroundSchedulePoolSize(value: number) {
    this._backgroundSchedulePoolSize = value;
  }
  public resetBackgroundSchedulePoolSize() {
    this._backgroundSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundSchedulePoolSizeInput() {
    return this._backgroundSchedulePoolSize;
  }

  // geobase_uri - computed: true, optional: true, required: false
  private _geobaseUri?: string; 
  public get geobaseUri() {
    return this.getStringAttribute('geobase_uri');
  }
  public set geobaseUri(value: string) {
    this._geobaseUri = value;
  }
  public resetGeobaseUri() {
    this._geobaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geobaseUriInput() {
    return this._geobaseUri;
  }

  // keep_alive_timeout - computed: true, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mark_cache_size - computed: true, optional: true, required: false
  private _markCacheSize?: number; 
  public get markCacheSize() {
    return this.getNumberAttribute('mark_cache_size');
  }
  public set markCacheSize(value: number) {
    this._markCacheSize = value;
  }
  public resetMarkCacheSize() {
    this._markCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markCacheSizeInput() {
    return this._markCacheSize;
  }

  // max_concurrent_queries - computed: true, optional: true, required: false
  private _maxConcurrentQueries?: number; 
  public get maxConcurrentQueries() {
    return this.getNumberAttribute('max_concurrent_queries');
  }
  public set maxConcurrentQueries(value: number) {
    this._maxConcurrentQueries = value;
  }
  public resetMaxConcurrentQueries() {
    this._maxConcurrentQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesInput() {
    return this._maxConcurrentQueries;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_partition_size_to_drop - computed: true, optional: true, required: false
  private _maxPartitionSizeToDrop?: number; 
  public get maxPartitionSizeToDrop() {
    return this.getNumberAttribute('max_partition_size_to_drop');
  }
  public set maxPartitionSizeToDrop(value: number) {
    this._maxPartitionSizeToDrop = value;
  }
  public resetMaxPartitionSizeToDrop() {
    this._maxPartitionSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionSizeToDropInput() {
    return this._maxPartitionSizeToDrop;
  }

  // max_table_size_to_drop - computed: true, optional: true, required: false
  private _maxTableSizeToDrop?: number; 
  public get maxTableSizeToDrop() {
    return this.getNumberAttribute('max_table_size_to_drop');
  }
  public set maxTableSizeToDrop(value: number) {
    this._maxTableSizeToDrop = value;
  }
  public resetMaxTableSizeToDrop() {
    this._maxTableSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableSizeToDropInput() {
    return this._maxTableSizeToDrop;
  }

  // metric_log_enabled - computed: true, optional: true, required: false
  private _metricLogEnabled?: boolean | cdktf.IResolvable; 
  public get metricLogEnabled() {
    return this.getBooleanAttribute('metric_log_enabled');
  }
  public set metricLogEnabled(value: boolean | cdktf.IResolvable) {
    this._metricLogEnabled = value;
  }
  public resetMetricLogEnabled() {
    this._metricLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogEnabledInput() {
    return this._metricLogEnabled;
  }

  // metric_log_retention_size - computed: true, optional: true, required: false
  private _metricLogRetentionSize?: number; 
  public get metricLogRetentionSize() {
    return this.getNumberAttribute('metric_log_retention_size');
  }
  public set metricLogRetentionSize(value: number) {
    this._metricLogRetentionSize = value;
  }
  public resetMetricLogRetentionSize() {
    this._metricLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionSizeInput() {
    return this._metricLogRetentionSize;
  }

  // metric_log_retention_time - computed: true, optional: true, required: false
  private _metricLogRetentionTime?: number; 
  public get metricLogRetentionTime() {
    return this.getNumberAttribute('metric_log_retention_time');
  }
  public set metricLogRetentionTime(value: number) {
    this._metricLogRetentionTime = value;
  }
  public resetMetricLogRetentionTime() {
    this._metricLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionTimeInput() {
    return this._metricLogRetentionTime;
  }

  // part_log_retention_size - computed: true, optional: true, required: false
  private _partLogRetentionSize?: number; 
  public get partLogRetentionSize() {
    return this.getNumberAttribute('part_log_retention_size');
  }
  public set partLogRetentionSize(value: number) {
    this._partLogRetentionSize = value;
  }
  public resetPartLogRetentionSize() {
    this._partLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionSizeInput() {
    return this._partLogRetentionSize;
  }

  // part_log_retention_time - computed: true, optional: true, required: false
  private _partLogRetentionTime?: number; 
  public get partLogRetentionTime() {
    return this.getNumberAttribute('part_log_retention_time');
  }
  public set partLogRetentionTime(value: number) {
    this._partLogRetentionTime = value;
  }
  public resetPartLogRetentionTime() {
    this._partLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionTimeInput() {
    return this._partLogRetentionTime;
  }

  // query_log_retention_size - computed: true, optional: true, required: false
  private _queryLogRetentionSize?: number; 
  public get queryLogRetentionSize() {
    return this.getNumberAttribute('query_log_retention_size');
  }
  public set queryLogRetentionSize(value: number) {
    this._queryLogRetentionSize = value;
  }
  public resetQueryLogRetentionSize() {
    this._queryLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionSizeInput() {
    return this._queryLogRetentionSize;
  }

  // query_log_retention_time - computed: true, optional: true, required: false
  private _queryLogRetentionTime?: number; 
  public get queryLogRetentionTime() {
    return this.getNumberAttribute('query_log_retention_time');
  }
  public set queryLogRetentionTime(value: number) {
    this._queryLogRetentionTime = value;
  }
  public resetQueryLogRetentionTime() {
    this._queryLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionTimeInput() {
    return this._queryLogRetentionTime;
  }

  // query_thread_log_enabled - computed: true, optional: true, required: false
  private _queryThreadLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryThreadLogEnabled() {
    return this.getBooleanAttribute('query_thread_log_enabled');
  }
  public set queryThreadLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryThreadLogEnabled = value;
  }
  public resetQueryThreadLogEnabled() {
    this._queryThreadLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogEnabledInput() {
    return this._queryThreadLogEnabled;
  }

  // query_thread_log_retention_size - computed: true, optional: true, required: false
  private _queryThreadLogRetentionSize?: number; 
  public get queryThreadLogRetentionSize() {
    return this.getNumberAttribute('query_thread_log_retention_size');
  }
  public set queryThreadLogRetentionSize(value: number) {
    this._queryThreadLogRetentionSize = value;
  }
  public resetQueryThreadLogRetentionSize() {
    this._queryThreadLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionSizeInput() {
    return this._queryThreadLogRetentionSize;
  }

  // query_thread_log_retention_time - computed: true, optional: true, required: false
  private _queryThreadLogRetentionTime?: number; 
  public get queryThreadLogRetentionTime() {
    return this.getNumberAttribute('query_thread_log_retention_time');
  }
  public set queryThreadLogRetentionTime(value: number) {
    this._queryThreadLogRetentionTime = value;
  }
  public resetQueryThreadLogRetentionTime() {
    this._queryThreadLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionTimeInput() {
    return this._queryThreadLogRetentionTime;
  }

  // text_log_enabled - computed: true, optional: true, required: false
  private _textLogEnabled?: boolean | cdktf.IResolvable; 
  public get textLogEnabled() {
    return this.getBooleanAttribute('text_log_enabled');
  }
  public set textLogEnabled(value: boolean | cdktf.IResolvable) {
    this._textLogEnabled = value;
  }
  public resetTextLogEnabled() {
    this._textLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogEnabledInput() {
    return this._textLogEnabled;
  }

  // text_log_level - computed: true, optional: true, required: false
  private _textLogLevel?: string; 
  public get textLogLevel() {
    return this.getStringAttribute('text_log_level');
  }
  public set textLogLevel(value: string) {
    this._textLogLevel = value;
  }
  public resetTextLogLevel() {
    this._textLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogLevelInput() {
    return this._textLogLevel;
  }

  // text_log_retention_size - computed: true, optional: true, required: false
  private _textLogRetentionSize?: number; 
  public get textLogRetentionSize() {
    return this.getNumberAttribute('text_log_retention_size');
  }
  public set textLogRetentionSize(value: number) {
    this._textLogRetentionSize = value;
  }
  public resetTextLogRetentionSize() {
    this._textLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionSizeInput() {
    return this._textLogRetentionSize;
  }

  // text_log_retention_time - computed: true, optional: true, required: false
  private _textLogRetentionTime?: number; 
  public get textLogRetentionTime() {
    return this.getNumberAttribute('text_log_retention_time');
  }
  public set textLogRetentionTime(value: number) {
    this._textLogRetentionTime = value;
  }
  public resetTextLogRetentionTime() {
    this._textLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionTimeInput() {
    return this._textLogRetentionTime;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trace_log_enabled - computed: true, optional: true, required: false
  private _traceLogEnabled?: boolean | cdktf.IResolvable; 
  public get traceLogEnabled() {
    return this.getBooleanAttribute('trace_log_enabled');
  }
  public set traceLogEnabled(value: boolean | cdktf.IResolvable) {
    this._traceLogEnabled = value;
  }
  public resetTraceLogEnabled() {
    this._traceLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogEnabledInput() {
    return this._traceLogEnabled;
  }

  // trace_log_retention_size - computed: true, optional: true, required: false
  private _traceLogRetentionSize?: number; 
  public get traceLogRetentionSize() {
    return this.getNumberAttribute('trace_log_retention_size');
  }
  public set traceLogRetentionSize(value: number) {
    this._traceLogRetentionSize = value;
  }
  public resetTraceLogRetentionSize() {
    this._traceLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionSizeInput() {
    return this._traceLogRetentionSize;
  }

  // trace_log_retention_time - computed: true, optional: true, required: false
  private _traceLogRetentionTime?: number; 
  public get traceLogRetentionTime() {
    return this.getNumberAttribute('trace_log_retention_time');
  }
  public set traceLogRetentionTime(value: number) {
    this._traceLogRetentionTime = value;
  }
  public resetTraceLogRetentionTime() {
    this._traceLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionTimeInput() {
    return this._traceLogRetentionTime;
  }

  // uncompressed_cache_size - computed: true, optional: true, required: false
  private _uncompressedCacheSize?: number; 
  public get uncompressedCacheSize() {
    return this.getNumberAttribute('uncompressed_cache_size');
  }
  public set uncompressedCacheSize(value: number) {
    this._uncompressedCacheSize = value;
  }
  public resetUncompressedCacheSize() {
    this._uncompressedCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedCacheSizeInput() {
    return this._uncompressedCacheSize;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: MdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable; 
  public get compression() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compression');
  }
  public set compression(value: MdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // graphite_rollup - computed: false, optional: true, required: false
  private _graphiteRollup?: MdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable; 
  public get graphiteRollup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('graphite_rollup');
  }
  public set graphiteRollup(value: MdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable) {
    this._graphiteRollup = value;
  }
  public resetGraphiteRollup() {
    this._graphiteRollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteRollupInput() {
    return this._graphiteRollup;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new MdbClickhouseClusterClickhouseConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: MdbClickhouseClusterClickhouseConfigKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_topic - computed: false, optional: true, required: false
  private _kafkaTopic?: MdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable; 
  public get kafkaTopic() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('kafka_topic');
  }
  public set kafkaTopic(value: MdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable) {
    this._kafkaTopic = value;
  }
  public resetKafkaTopic() {
    this._kafkaTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic;
  }

  // merge_tree - computed: false, optional: true, required: false
  private _mergeTree = new MdbClickhouseClusterClickhouseConfigMergeTreeOutputReference(this, "merge_tree");
  public get mergeTree() {
    return this._mergeTree;
  }
  public putMergeTree(value: MdbClickhouseClusterClickhouseConfigMergeTree) {
    this._mergeTree.internalValue = value;
  }
  public resetMergeTree() {
    this._mergeTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeInput() {
    return this._mergeTree.internalValue;
  }

  // rabbitmq - computed: false, optional: true, required: false
  private _rabbitmq = new MdbClickhouseClusterClickhouseConfigRabbitmqOutputReference(this, "rabbitmq");
  public get rabbitmq() {
    return this._rabbitmq;
  }
  public putRabbitmq(value: MdbClickhouseClusterClickhouseConfigRabbitmq) {
    this._rabbitmq.internalValue = value;
  }
  public resetRabbitmq() {
    this._rabbitmq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqInput() {
    return this._rabbitmq.internalValue;
  }
}
export interface MdbClickhouseClusterClickhouseResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#disk_size MdbClickhouseCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#disk_type_id MdbClickhouseCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#resource_preset_id MdbClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbClickhouseClusterClickhouseResourcesToTerraform(struct?: MdbClickhouseClusterClickhouseResourcesOutputReference | MdbClickhouseClusterClickhouseResources): any {
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

export class MdbClickhouseClusterClickhouseResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouseResources | undefined {
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

  public set internalValue(value: MdbClickhouseClusterClickhouseResources | undefined) {
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
export interface MdbClickhouseClusterClickhouse {
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#config MdbClickhouseCluster#config}
  */
  readonly config?: MdbClickhouseClusterClickhouseConfig;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#resources MdbClickhouseCluster#resources}
  */
  readonly resources: MdbClickhouseClusterClickhouseResources;
}

export function mdbClickhouseClusterClickhouseToTerraform(struct?: MdbClickhouseClusterClickhouseOutputReference | MdbClickhouseClusterClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: mdbClickhouseClusterClickhouseConfigToTerraform(struct!.config),
    resources: mdbClickhouseClusterClickhouseResourcesToTerraform(struct!.resources),
  }
}

export class MdbClickhouseClusterClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
      this._resources.internalValue = value.resources;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new MdbClickhouseClusterClickhouseConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbClickhouseClusterClickhouseConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbClickhouseClusterClickhouseResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbClickhouseClusterClickhouseResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbClickhouseClusterCloudStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#enabled MdbClickhouseCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mdbClickhouseClusterCloudStorageToTerraform(struct?: MdbClickhouseClusterCloudStorageOutputReference | MdbClickhouseClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MdbClickhouseClusterCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterCloudStorage | undefined) {
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
export interface MdbClickhouseClusterDatabase {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
}

export function mdbClickhouseClusterDatabaseToTerraform(struct?: MdbClickhouseClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface MdbClickhouseClusterFormatSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#type MdbClickhouseCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#uri MdbClickhouseCluster#uri}
  */
  readonly uri: string;
}

export function mdbClickhouseClusterFormatSchemaToTerraform(struct?: MdbClickhouseClusterFormatSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface MdbClickhouseClusterHost {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#assign_public_ip MdbClickhouseCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#shard_name MdbClickhouseCluster#shard_name}
  */
  readonly shardName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#subnet_id MdbClickhouseCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#type MdbClickhouseCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#zone MdbClickhouseCluster#zone}
  */
  readonly zone: string;
}

export function mdbClickhouseClusterHostToTerraform(struct?: MdbClickhouseClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface MdbClickhouseClusterMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#day MdbClickhouseCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#hour MdbClickhouseCluster#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#type MdbClickhouseCluster#type}
  */
  readonly type: string;
}

export function mdbClickhouseClusterMaintenanceWindowToTerraform(struct?: MdbClickhouseClusterMaintenanceWindowOutputReference | MdbClickhouseClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MdbClickhouseClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: false, optional: true, required: false
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

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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
export interface MdbClickhouseClusterMlModel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#type MdbClickhouseCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#uri MdbClickhouseCluster#uri}
  */
  readonly uri: string;
}

export function mdbClickhouseClusterMlModelToTerraform(struct?: MdbClickhouseClusterMlModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface MdbClickhouseClusterShardGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#description MdbClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#shard_names MdbClickhouseCluster#shard_names}
  */
  readonly shardNames: string[];
}

export function mdbClickhouseClusterShardGroupToTerraform(struct?: MdbClickhouseClusterShardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    shard_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.shardNames),
  }
}

export interface MdbClickhouseClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#create MdbClickhouseCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#delete MdbClickhouseCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#update MdbClickhouseCluster#update}
  */
  readonly update?: string;
}

export function mdbClickhouseClusterTimeoutsToTerraform(struct?: MdbClickhouseClusterTimeoutsOutputReference | MdbClickhouseClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbClickhouseClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterTimeouts | undefined {
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

  public set internalValue(value: MdbClickhouseClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface MdbClickhouseClusterUserPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#database_name MdbClickhouseCluster#database_name}
  */
  readonly databaseName: string;
}

export function mdbClickhouseClusterUserPermissionToTerraform(struct?: MdbClickhouseClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}

export interface MdbClickhouseClusterUserQuota {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#errors MdbClickhouseCluster#errors}
  */
  readonly errors?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#execution_time MdbClickhouseCluster#execution_time}
  */
  readonly executionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#interval_duration MdbClickhouseCluster#interval_duration}
  */
  readonly intervalDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#queries MdbClickhouseCluster#queries}
  */
  readonly queries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#read_rows MdbClickhouseCluster#read_rows}
  */
  readonly readRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#result_rows MdbClickhouseCluster#result_rows}
  */
  readonly resultRows?: number;
}

export function mdbClickhouseClusterUserQuotaToTerraform(struct?: MdbClickhouseClusterUserQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors: cdktf.numberToTerraform(struct!.errors),
    execution_time: cdktf.numberToTerraform(struct!.executionTime),
    interval_duration: cdktf.numberToTerraform(struct!.intervalDuration),
    queries: cdktf.numberToTerraform(struct!.queries),
    read_rows: cdktf.numberToTerraform(struct!.readRows),
    result_rows: cdktf.numberToTerraform(struct!.resultRows),
  }
}

export interface MdbClickhouseClusterUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#add_http_cors_header MdbClickhouseCluster#add_http_cors_header}
  */
  readonly addHttpCorsHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#allow_ddl MdbClickhouseCluster#allow_ddl}
  */
  readonly allowDdl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#compile MdbClickhouseCluster#compile}
  */
  readonly compile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#compile_expressions MdbClickhouseCluster#compile_expressions}
  */
  readonly compileExpressions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#connect_timeout MdbClickhouseCluster#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#count_distinct_implementation MdbClickhouseCluster#count_distinct_implementation}
  */
  readonly countDistinctImplementation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#distinct_overflow_mode MdbClickhouseCluster#distinct_overflow_mode}
  */
  readonly distinctOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#distributed_aggregation_memory_efficient MdbClickhouseCluster#distributed_aggregation_memory_efficient}
  */
  readonly distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#distributed_ddl_task_timeout MdbClickhouseCluster#distributed_ddl_task_timeout}
  */
  readonly distributedDdlTaskTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#distributed_product_mode MdbClickhouseCluster#distributed_product_mode}
  */
  readonly distributedProductMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#empty_result_for_aggregation_by_empty_set MdbClickhouseCluster#empty_result_for_aggregation_by_empty_set}
  */
  readonly emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#enable_http_compression MdbClickhouseCluster#enable_http_compression}
  */
  readonly enableHttpCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#fallback_to_stale_replicas_for_distributed_queries MdbClickhouseCluster#fallback_to_stale_replicas_for_distributed_queries}
  */
  readonly fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#force_index_by_date MdbClickhouseCluster#force_index_by_date}
  */
  readonly forceIndexByDate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#force_primary_key MdbClickhouseCluster#force_primary_key}
  */
  readonly forcePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#group_by_overflow_mode MdbClickhouseCluster#group_by_overflow_mode}
  */
  readonly groupByOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#group_by_two_level_threshold MdbClickhouseCluster#group_by_two_level_threshold}
  */
  readonly groupByTwoLevelThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#group_by_two_level_threshold_bytes MdbClickhouseCluster#group_by_two_level_threshold_bytes}
  */
  readonly groupByTwoLevelThresholdBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#http_connection_timeout MdbClickhouseCluster#http_connection_timeout}
  */
  readonly httpConnectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#http_headers_progress_interval MdbClickhouseCluster#http_headers_progress_interval}
  */
  readonly httpHeadersProgressInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#http_receive_timeout MdbClickhouseCluster#http_receive_timeout}
  */
  readonly httpReceiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#http_send_timeout MdbClickhouseCluster#http_send_timeout}
  */
  readonly httpSendTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#input_format_defaults_for_omitted_fields MdbClickhouseCluster#input_format_defaults_for_omitted_fields}
  */
  readonly inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#input_format_values_interpret_expressions MdbClickhouseCluster#input_format_values_interpret_expressions}
  */
  readonly inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#insert_quorum MdbClickhouseCluster#insert_quorum}
  */
  readonly insertQuorum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#insert_quorum_timeout MdbClickhouseCluster#insert_quorum_timeout}
  */
  readonly insertQuorumTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#join_overflow_mode MdbClickhouseCluster#join_overflow_mode}
  */
  readonly joinOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#join_use_nulls MdbClickhouseCluster#join_use_nulls}
  */
  readonly joinUseNulls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#joined_subquery_requires_alias MdbClickhouseCluster#joined_subquery_requires_alias}
  */
  readonly joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#low_cardinality_allow_in_native_format MdbClickhouseCluster#low_cardinality_allow_in_native_format}
  */
  readonly lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_ast_depth MdbClickhouseCluster#max_ast_depth}
  */
  readonly maxAstDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_ast_elements MdbClickhouseCluster#max_ast_elements}
  */
  readonly maxAstElements?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_block_size MdbClickhouseCluster#max_block_size}
  */
  readonly maxBlockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_before_external_group_by MdbClickhouseCluster#max_bytes_before_external_group_by}
  */
  readonly maxBytesBeforeExternalGroupBy?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_before_external_sort MdbClickhouseCluster#max_bytes_before_external_sort}
  */
  readonly maxBytesBeforeExternalSort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_in_distinct MdbClickhouseCluster#max_bytes_in_distinct}
  */
  readonly maxBytesInDistinct?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_in_join MdbClickhouseCluster#max_bytes_in_join}
  */
  readonly maxBytesInJoin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_in_set MdbClickhouseCluster#max_bytes_in_set}
  */
  readonly maxBytesInSet?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_to_read MdbClickhouseCluster#max_bytes_to_read}
  */
  readonly maxBytesToRead?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_to_sort MdbClickhouseCluster#max_bytes_to_sort}
  */
  readonly maxBytesToSort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_bytes_to_transfer MdbClickhouseCluster#max_bytes_to_transfer}
  */
  readonly maxBytesToTransfer?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_columns_to_read MdbClickhouseCluster#max_columns_to_read}
  */
  readonly maxColumnsToRead?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_execution_time MdbClickhouseCluster#max_execution_time}
  */
  readonly maxExecutionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_expanded_ast_elements MdbClickhouseCluster#max_expanded_ast_elements}
  */
  readonly maxExpandedAstElements?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_insert_block_size MdbClickhouseCluster#max_insert_block_size}
  */
  readonly maxInsertBlockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_memory_usage MdbClickhouseCluster#max_memory_usage}
  */
  readonly maxMemoryUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_memory_usage_for_user MdbClickhouseCluster#max_memory_usage_for_user}
  */
  readonly maxMemoryUsageForUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_network_bandwidth MdbClickhouseCluster#max_network_bandwidth}
  */
  readonly maxNetworkBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_network_bandwidth_for_user MdbClickhouseCluster#max_network_bandwidth_for_user}
  */
  readonly maxNetworkBandwidthForUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_query_size MdbClickhouseCluster#max_query_size}
  */
  readonly maxQuerySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_replica_delay_for_distributed_queries MdbClickhouseCluster#max_replica_delay_for_distributed_queries}
  */
  readonly maxReplicaDelayForDistributedQueries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_result_bytes MdbClickhouseCluster#max_result_bytes}
  */
  readonly maxResultBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_result_rows MdbClickhouseCluster#max_result_rows}
  */
  readonly maxResultRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_in_distinct MdbClickhouseCluster#max_rows_in_distinct}
  */
  readonly maxRowsInDistinct?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_in_join MdbClickhouseCluster#max_rows_in_join}
  */
  readonly maxRowsInJoin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_in_set MdbClickhouseCluster#max_rows_in_set}
  */
  readonly maxRowsInSet?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_to_group_by MdbClickhouseCluster#max_rows_to_group_by}
  */
  readonly maxRowsToGroupBy?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_to_read MdbClickhouseCluster#max_rows_to_read}
  */
  readonly maxRowsToRead?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_to_sort MdbClickhouseCluster#max_rows_to_sort}
  */
  readonly maxRowsToSort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_rows_to_transfer MdbClickhouseCluster#max_rows_to_transfer}
  */
  readonly maxRowsToTransfer?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_temporary_columns MdbClickhouseCluster#max_temporary_columns}
  */
  readonly maxTemporaryColumns?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_temporary_non_const_columns MdbClickhouseCluster#max_temporary_non_const_columns}
  */
  readonly maxTemporaryNonConstColumns?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#max_threads MdbClickhouseCluster#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#merge_tree_max_bytes_to_use_cache MdbClickhouseCluster#merge_tree_max_bytes_to_use_cache}
  */
  readonly mergeTreeMaxBytesToUseCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#merge_tree_max_rows_to_use_cache MdbClickhouseCluster#merge_tree_max_rows_to_use_cache}
  */
  readonly mergeTreeMaxRowsToUseCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#merge_tree_min_bytes_for_concurrent_read MdbClickhouseCluster#merge_tree_min_bytes_for_concurrent_read}
  */
  readonly mergeTreeMinBytesForConcurrentRead?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#merge_tree_min_rows_for_concurrent_read MdbClickhouseCluster#merge_tree_min_rows_for_concurrent_read}
  */
  readonly mergeTreeMinRowsForConcurrentRead?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_bytes_to_use_direct_io MdbClickhouseCluster#min_bytes_to_use_direct_io}
  */
  readonly minBytesToUseDirectIo?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_count_to_compile MdbClickhouseCluster#min_count_to_compile}
  */
  readonly minCountToCompile?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_count_to_compile_expression MdbClickhouseCluster#min_count_to_compile_expression}
  */
  readonly minCountToCompileExpression?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_execution_speed MdbClickhouseCluster#min_execution_speed}
  */
  readonly minExecutionSpeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_execution_speed_bytes MdbClickhouseCluster#min_execution_speed_bytes}
  */
  readonly minExecutionSpeedBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_insert_block_size_bytes MdbClickhouseCluster#min_insert_block_size_bytes}
  */
  readonly minInsertBlockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#min_insert_block_size_rows MdbClickhouseCluster#min_insert_block_size_rows}
  */
  readonly minInsertBlockSizeRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#output_format_json_quote_64bit_integers MdbClickhouseCluster#output_format_json_quote_64bit_integers}
  */
  readonly outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#output_format_json_quote_denormals MdbClickhouseCluster#output_format_json_quote_denormals}
  */
  readonly outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#priority MdbClickhouseCluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#quota_mode MdbClickhouseCluster#quota_mode}
  */
  readonly quotaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#read_overflow_mode MdbClickhouseCluster#read_overflow_mode}
  */
  readonly readOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#readonly MdbClickhouseCluster#readonly}
  */
  readonly readonly?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#receive_timeout MdbClickhouseCluster#receive_timeout}
  */
  readonly receiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#replication_alter_partitions_sync MdbClickhouseCluster#replication_alter_partitions_sync}
  */
  readonly replicationAlterPartitionsSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#result_overflow_mode MdbClickhouseCluster#result_overflow_mode}
  */
  readonly resultOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#select_sequential_consistency MdbClickhouseCluster#select_sequential_consistency}
  */
  readonly selectSequentialConsistency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#send_progress_in_http_headers MdbClickhouseCluster#send_progress_in_http_headers}
  */
  readonly sendProgressInHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#send_timeout MdbClickhouseCluster#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#set_overflow_mode MdbClickhouseCluster#set_overflow_mode}
  */
  readonly setOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#skip_unavailable_shards MdbClickhouseCluster#skip_unavailable_shards}
  */
  readonly skipUnavailableShards?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#sort_overflow_mode MdbClickhouseCluster#sort_overflow_mode}
  */
  readonly sortOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#timeout_overflow_mode MdbClickhouseCluster#timeout_overflow_mode}
  */
  readonly timeoutOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#transfer_overflow_mode MdbClickhouseCluster#transfer_overflow_mode}
  */
  readonly transferOverflowMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#transform_null_in MdbClickhouseCluster#transform_null_in}
  */
  readonly transformNullIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#use_uncompressed_cache MdbClickhouseCluster#use_uncompressed_cache}
  */
  readonly useUncompressedCache?: boolean | cdktf.IResolvable;
}

export function mdbClickhouseClusterUserSettingsToTerraform(struct?: MdbClickhouseClusterUserSettingsOutputReference | MdbClickhouseClusterUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_http_cors_header: cdktf.booleanToTerraform(struct!.addHttpCorsHeader),
    allow_ddl: cdktf.booleanToTerraform(struct!.allowDdl),
    compile: cdktf.booleanToTerraform(struct!.compile),
    compile_expressions: cdktf.booleanToTerraform(struct!.compileExpressions),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    count_distinct_implementation: cdktf.stringToTerraform(struct!.countDistinctImplementation),
    distinct_overflow_mode: cdktf.stringToTerraform(struct!.distinctOverflowMode),
    distributed_aggregation_memory_efficient: cdktf.booleanToTerraform(struct!.distributedAggregationMemoryEfficient),
    distributed_ddl_task_timeout: cdktf.numberToTerraform(struct!.distributedDdlTaskTimeout),
    distributed_product_mode: cdktf.stringToTerraform(struct!.distributedProductMode),
    empty_result_for_aggregation_by_empty_set: cdktf.booleanToTerraform(struct!.emptyResultForAggregationByEmptySet),
    enable_http_compression: cdktf.booleanToTerraform(struct!.enableHttpCompression),
    fallback_to_stale_replicas_for_distributed_queries: cdktf.booleanToTerraform(struct!.fallbackToStaleReplicasForDistributedQueries),
    force_index_by_date: cdktf.booleanToTerraform(struct!.forceIndexByDate),
    force_primary_key: cdktf.booleanToTerraform(struct!.forcePrimaryKey),
    group_by_overflow_mode: cdktf.stringToTerraform(struct!.groupByOverflowMode),
    group_by_two_level_threshold: cdktf.numberToTerraform(struct!.groupByTwoLevelThreshold),
    group_by_two_level_threshold_bytes: cdktf.numberToTerraform(struct!.groupByTwoLevelThresholdBytes),
    http_connection_timeout: cdktf.numberToTerraform(struct!.httpConnectionTimeout),
    http_headers_progress_interval: cdktf.numberToTerraform(struct!.httpHeadersProgressInterval),
    http_receive_timeout: cdktf.numberToTerraform(struct!.httpReceiveTimeout),
    http_send_timeout: cdktf.numberToTerraform(struct!.httpSendTimeout),
    input_format_defaults_for_omitted_fields: cdktf.booleanToTerraform(struct!.inputFormatDefaultsForOmittedFields),
    input_format_values_interpret_expressions: cdktf.booleanToTerraform(struct!.inputFormatValuesInterpretExpressions),
    insert_quorum: cdktf.numberToTerraform(struct!.insertQuorum),
    insert_quorum_timeout: cdktf.numberToTerraform(struct!.insertQuorumTimeout),
    join_overflow_mode: cdktf.stringToTerraform(struct!.joinOverflowMode),
    join_use_nulls: cdktf.booleanToTerraform(struct!.joinUseNulls),
    joined_subquery_requires_alias: cdktf.booleanToTerraform(struct!.joinedSubqueryRequiresAlias),
    low_cardinality_allow_in_native_format: cdktf.booleanToTerraform(struct!.lowCardinalityAllowInNativeFormat),
    max_ast_depth: cdktf.numberToTerraform(struct!.maxAstDepth),
    max_ast_elements: cdktf.numberToTerraform(struct!.maxAstElements),
    max_block_size: cdktf.numberToTerraform(struct!.maxBlockSize),
    max_bytes_before_external_group_by: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalGroupBy),
    max_bytes_before_external_sort: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalSort),
    max_bytes_in_distinct: cdktf.numberToTerraform(struct!.maxBytesInDistinct),
    max_bytes_in_join: cdktf.numberToTerraform(struct!.maxBytesInJoin),
    max_bytes_in_set: cdktf.numberToTerraform(struct!.maxBytesInSet),
    max_bytes_to_read: cdktf.numberToTerraform(struct!.maxBytesToRead),
    max_bytes_to_sort: cdktf.numberToTerraform(struct!.maxBytesToSort),
    max_bytes_to_transfer: cdktf.numberToTerraform(struct!.maxBytesToTransfer),
    max_columns_to_read: cdktf.numberToTerraform(struct!.maxColumnsToRead),
    max_execution_time: cdktf.numberToTerraform(struct!.maxExecutionTime),
    max_expanded_ast_elements: cdktf.numberToTerraform(struct!.maxExpandedAstElements),
    max_insert_block_size: cdktf.numberToTerraform(struct!.maxInsertBlockSize),
    max_memory_usage: cdktf.numberToTerraform(struct!.maxMemoryUsage),
    max_memory_usage_for_user: cdktf.numberToTerraform(struct!.maxMemoryUsageForUser),
    max_network_bandwidth: cdktf.numberToTerraform(struct!.maxNetworkBandwidth),
    max_network_bandwidth_for_user: cdktf.numberToTerraform(struct!.maxNetworkBandwidthForUser),
    max_query_size: cdktf.numberToTerraform(struct!.maxQuerySize),
    max_replica_delay_for_distributed_queries: cdktf.numberToTerraform(struct!.maxReplicaDelayForDistributedQueries),
    max_result_bytes: cdktf.numberToTerraform(struct!.maxResultBytes),
    max_result_rows: cdktf.numberToTerraform(struct!.maxResultRows),
    max_rows_in_distinct: cdktf.numberToTerraform(struct!.maxRowsInDistinct),
    max_rows_in_join: cdktf.numberToTerraform(struct!.maxRowsInJoin),
    max_rows_in_set: cdktf.numberToTerraform(struct!.maxRowsInSet),
    max_rows_to_group_by: cdktf.numberToTerraform(struct!.maxRowsToGroupBy),
    max_rows_to_read: cdktf.numberToTerraform(struct!.maxRowsToRead),
    max_rows_to_sort: cdktf.numberToTerraform(struct!.maxRowsToSort),
    max_rows_to_transfer: cdktf.numberToTerraform(struct!.maxRowsToTransfer),
    max_temporary_columns: cdktf.numberToTerraform(struct!.maxTemporaryColumns),
    max_temporary_non_const_columns: cdktf.numberToTerraform(struct!.maxTemporaryNonConstColumns),
    max_threads: cdktf.numberToTerraform(struct!.maxThreads),
    merge_tree_max_bytes_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxBytesToUseCache),
    merge_tree_max_rows_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxRowsToUseCache),
    merge_tree_min_bytes_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinBytesForConcurrentRead),
    merge_tree_min_rows_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinRowsForConcurrentRead),
    min_bytes_to_use_direct_io: cdktf.numberToTerraform(struct!.minBytesToUseDirectIo),
    min_count_to_compile: cdktf.numberToTerraform(struct!.minCountToCompile),
    min_count_to_compile_expression: cdktf.numberToTerraform(struct!.minCountToCompileExpression),
    min_execution_speed: cdktf.numberToTerraform(struct!.minExecutionSpeed),
    min_execution_speed_bytes: cdktf.numberToTerraform(struct!.minExecutionSpeedBytes),
    min_insert_block_size_bytes: cdktf.numberToTerraform(struct!.minInsertBlockSizeBytes),
    min_insert_block_size_rows: cdktf.numberToTerraform(struct!.minInsertBlockSizeRows),
    output_format_json_quote_64bit_integers: cdktf.booleanToTerraform(struct!.outputFormatJsonQuote64BitIntegers),
    output_format_json_quote_denormals: cdktf.booleanToTerraform(struct!.outputFormatJsonQuoteDenormals),
    priority: cdktf.numberToTerraform(struct!.priority),
    quota_mode: cdktf.stringToTerraform(struct!.quotaMode),
    read_overflow_mode: cdktf.stringToTerraform(struct!.readOverflowMode),
    readonly: cdktf.numberToTerraform(struct!.readonly),
    receive_timeout: cdktf.numberToTerraform(struct!.receiveTimeout),
    replication_alter_partitions_sync: cdktf.numberToTerraform(struct!.replicationAlterPartitionsSync),
    result_overflow_mode: cdktf.stringToTerraform(struct!.resultOverflowMode),
    select_sequential_consistency: cdktf.booleanToTerraform(struct!.selectSequentialConsistency),
    send_progress_in_http_headers: cdktf.booleanToTerraform(struct!.sendProgressInHttpHeaders),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    set_overflow_mode: cdktf.stringToTerraform(struct!.setOverflowMode),
    skip_unavailable_shards: cdktf.booleanToTerraform(struct!.skipUnavailableShards),
    sort_overflow_mode: cdktf.stringToTerraform(struct!.sortOverflowMode),
    timeout_overflow_mode: cdktf.stringToTerraform(struct!.timeoutOverflowMode),
    transfer_overflow_mode: cdktf.stringToTerraform(struct!.transferOverflowMode),
    transform_null_in: cdktf.booleanToTerraform(struct!.transformNullIn),
    use_uncompressed_cache: cdktf.booleanToTerraform(struct!.useUncompressedCache),
  }
}

export class MdbClickhouseClusterUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttpCorsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttpCorsHeader = this._addHttpCorsHeader;
    }
    if (this._allowDdl !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDdl = this._allowDdl;
    }
    if (this._compile !== undefined) {
      hasAnyValues = true;
      internalValueResult.compile = this._compile;
    }
    if (this._compileExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.compileExpressions = this._compileExpressions;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._countDistinctImplementation !== undefined) {
      hasAnyValues = true;
      internalValueResult.countDistinctImplementation = this._countDistinctImplementation;
    }
    if (this._distinctOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctOverflowMode = this._distinctOverflowMode;
    }
    if (this._distributedAggregationMemoryEfficient !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedAggregationMemoryEfficient = this._distributedAggregationMemoryEfficient;
    }
    if (this._distributedDdlTaskTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedDdlTaskTimeout = this._distributedDdlTaskTimeout;
    }
    if (this._distributedProductMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedProductMode = this._distributedProductMode;
    }
    if (this._emptyResultForAggregationByEmptySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResultForAggregationByEmptySet = this._emptyResultForAggregationByEmptySet;
    }
    if (this._enableHttpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpCompression = this._enableHttpCompression;
    }
    if (this._fallbackToStaleReplicasForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToStaleReplicasForDistributedQueries = this._fallbackToStaleReplicasForDistributedQueries;
    }
    if (this._forceIndexByDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceIndexByDate = this._forceIndexByDate;
    }
    if (this._forcePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePrimaryKey = this._forcePrimaryKey;
    }
    if (this._groupByOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByOverflowMode = this._groupByOverflowMode;
    }
    if (this._groupByTwoLevelThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThreshold = this._groupByTwoLevelThreshold;
    }
    if (this._groupByTwoLevelThresholdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThresholdBytes = this._groupByTwoLevelThresholdBytes;
    }
    if (this._httpConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectionTimeout = this._httpConnectionTimeout;
    }
    if (this._httpHeadersProgressInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeadersProgressInterval = this._httpHeadersProgressInterval;
    }
    if (this._httpReceiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReceiveTimeout = this._httpReceiveTimeout;
    }
    if (this._httpSendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSendTimeout = this._httpSendTimeout;
    }
    if (this._inputFormatDefaultsForOmittedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatDefaultsForOmittedFields = this._inputFormatDefaultsForOmittedFields;
    }
    if (this._inputFormatValuesInterpretExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatValuesInterpretExpressions = this._inputFormatValuesInterpretExpressions;
    }
    if (this._insertQuorum !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorum = this._insertQuorum;
    }
    if (this._insertQuorumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorumTimeout = this._insertQuorumTimeout;
    }
    if (this._joinOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOverflowMode = this._joinOverflowMode;
    }
    if (this._joinUseNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinUseNulls = this._joinUseNulls;
    }
    if (this._joinedSubqueryRequiresAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinedSubqueryRequiresAlias = this._joinedSubqueryRequiresAlias;
    }
    if (this._lowCardinalityAllowInNativeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowCardinalityAllowInNativeFormat = this._lowCardinalityAllowInNativeFormat;
    }
    if (this._maxAstDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstDepth = this._maxAstDepth;
    }
    if (this._maxAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstElements = this._maxAstElements;
    }
    if (this._maxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockSize = this._maxBlockSize;
    }
    if (this._maxBytesBeforeExternalGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalGroupBy = this._maxBytesBeforeExternalGroupBy;
    }
    if (this._maxBytesBeforeExternalSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalSort = this._maxBytesBeforeExternalSort;
    }
    if (this._maxBytesInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInDistinct = this._maxBytesInDistinct;
    }
    if (this._maxBytesInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInJoin = this._maxBytesInJoin;
    }
    if (this._maxBytesInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInSet = this._maxBytesInSet;
    }
    if (this._maxBytesToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToRead = this._maxBytesToRead;
    }
    if (this._maxBytesToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToSort = this._maxBytesToSort;
    }
    if (this._maxBytesToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToTransfer = this._maxBytesToTransfer;
    }
    if (this._maxColumnsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxColumnsToRead = this._maxColumnsToRead;
    }
    if (this._maxExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionTime = this._maxExecutionTime;
    }
    if (this._maxExpandedAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpandedAstElements = this._maxExpandedAstElements;
    }
    if (this._maxInsertBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInsertBlockSize = this._maxInsertBlockSize;
    }
    if (this._maxMemoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsage = this._maxMemoryUsage;
    }
    if (this._maxMemoryUsageForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsageForUser = this._maxMemoryUsageForUser;
    }
    if (this._maxNetworkBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidth = this._maxNetworkBandwidth;
    }
    if (this._maxNetworkBandwidthForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidthForUser = this._maxNetworkBandwidthForUser;
    }
    if (this._maxQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySize = this._maxQuerySize;
    }
    if (this._maxReplicaDelayForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaDelayForDistributedQueries = this._maxReplicaDelayForDistributedQueries;
    }
    if (this._maxResultBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultBytes = this._maxResultBytes;
    }
    if (this._maxResultRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultRows = this._maxResultRows;
    }
    if (this._maxRowsInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInDistinct = this._maxRowsInDistinct;
    }
    if (this._maxRowsInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInJoin = this._maxRowsInJoin;
    }
    if (this._maxRowsInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInSet = this._maxRowsInSet;
    }
    if (this._maxRowsToGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToGroupBy = this._maxRowsToGroupBy;
    }
    if (this._maxRowsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToRead = this._maxRowsToRead;
    }
    if (this._maxRowsToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToSort = this._maxRowsToSort;
    }
    if (this._maxRowsToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToTransfer = this._maxRowsToTransfer;
    }
    if (this._maxTemporaryColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryColumns = this._maxTemporaryColumns;
    }
    if (this._maxTemporaryNonConstColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryNonConstColumns = this._maxTemporaryNonConstColumns;
    }
    if (this._maxThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreads = this._maxThreads;
    }
    if (this._mergeTreeMaxBytesToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxBytesToUseCache = this._mergeTreeMaxBytesToUseCache;
    }
    if (this._mergeTreeMaxRowsToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxRowsToUseCache = this._mergeTreeMaxRowsToUseCache;
    }
    if (this._mergeTreeMinBytesForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinBytesForConcurrentRead = this._mergeTreeMinBytesForConcurrentRead;
    }
    if (this._mergeTreeMinRowsForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinRowsForConcurrentRead = this._mergeTreeMinRowsForConcurrentRead;
    }
    if (this._minBytesToUseDirectIo !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBytesToUseDirectIo = this._minBytesToUseDirectIo;
    }
    if (this._minCountToCompile !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCountToCompile = this._minCountToCompile;
    }
    if (this._minCountToCompileExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCountToCompileExpression = this._minCountToCompileExpression;
    }
    if (this._minExecutionSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeed = this._minExecutionSpeed;
    }
    if (this._minExecutionSpeedBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeedBytes = this._minExecutionSpeedBytes;
    }
    if (this._minInsertBlockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeBytes = this._minInsertBlockSizeBytes;
    }
    if (this._minInsertBlockSizeRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeRows = this._minInsertBlockSizeRows;
    }
    if (this._outputFormatJsonQuote64BitIntegers !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuote64BitIntegers = this._outputFormatJsonQuote64BitIntegers;
    }
    if (this._outputFormatJsonQuoteDenormals !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuoteDenormals = this._outputFormatJsonQuoteDenormals;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._quotaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaMode = this._quotaMode;
    }
    if (this._readOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOverflowMode = this._readOverflowMode;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._receiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveTimeout = this._receiveTimeout;
    }
    if (this._replicationAlterPartitionsSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationAlterPartitionsSync = this._replicationAlterPartitionsSync;
    }
    if (this._resultOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultOverflowMode = this._resultOverflowMode;
    }
    if (this._selectSequentialConsistency !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectSequentialConsistency = this._selectSequentialConsistency;
    }
    if (this._sendProgressInHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendProgressInHttpHeaders = this._sendProgressInHttpHeaders;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._setOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOverflowMode = this._setOverflowMode;
    }
    if (this._skipUnavailableShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnavailableShards = this._skipUnavailableShards;
    }
    if (this._sortOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOverflowMode = this._sortOverflowMode;
    }
    if (this._timeoutOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutOverflowMode = this._timeoutOverflowMode;
    }
    if (this._transferOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOverflowMode = this._transferOverflowMode;
    }
    if (this._transformNullIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformNullIn = this._transformNullIn;
    }
    if (this._useUncompressedCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUncompressedCache = this._useUncompressedCache;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttpCorsHeader = undefined;
      this._allowDdl = undefined;
      this._compile = undefined;
      this._compileExpressions = undefined;
      this._connectTimeout = undefined;
      this._countDistinctImplementation = undefined;
      this._distinctOverflowMode = undefined;
      this._distributedAggregationMemoryEfficient = undefined;
      this._distributedDdlTaskTimeout = undefined;
      this._distributedProductMode = undefined;
      this._emptyResultForAggregationByEmptySet = undefined;
      this._enableHttpCompression = undefined;
      this._fallbackToStaleReplicasForDistributedQueries = undefined;
      this._forceIndexByDate = undefined;
      this._forcePrimaryKey = undefined;
      this._groupByOverflowMode = undefined;
      this._groupByTwoLevelThreshold = undefined;
      this._groupByTwoLevelThresholdBytes = undefined;
      this._httpConnectionTimeout = undefined;
      this._httpHeadersProgressInterval = undefined;
      this._httpReceiveTimeout = undefined;
      this._httpSendTimeout = undefined;
      this._inputFormatDefaultsForOmittedFields = undefined;
      this._inputFormatValuesInterpretExpressions = undefined;
      this._insertQuorum = undefined;
      this._insertQuorumTimeout = undefined;
      this._joinOverflowMode = undefined;
      this._joinUseNulls = undefined;
      this._joinedSubqueryRequiresAlias = undefined;
      this._lowCardinalityAllowInNativeFormat = undefined;
      this._maxAstDepth = undefined;
      this._maxAstElements = undefined;
      this._maxBlockSize = undefined;
      this._maxBytesBeforeExternalGroupBy = undefined;
      this._maxBytesBeforeExternalSort = undefined;
      this._maxBytesInDistinct = undefined;
      this._maxBytesInJoin = undefined;
      this._maxBytesInSet = undefined;
      this._maxBytesToRead = undefined;
      this._maxBytesToSort = undefined;
      this._maxBytesToTransfer = undefined;
      this._maxColumnsToRead = undefined;
      this._maxExecutionTime = undefined;
      this._maxExpandedAstElements = undefined;
      this._maxInsertBlockSize = undefined;
      this._maxMemoryUsage = undefined;
      this._maxMemoryUsageForUser = undefined;
      this._maxNetworkBandwidth = undefined;
      this._maxNetworkBandwidthForUser = undefined;
      this._maxQuerySize = undefined;
      this._maxReplicaDelayForDistributedQueries = undefined;
      this._maxResultBytes = undefined;
      this._maxResultRows = undefined;
      this._maxRowsInDistinct = undefined;
      this._maxRowsInJoin = undefined;
      this._maxRowsInSet = undefined;
      this._maxRowsToGroupBy = undefined;
      this._maxRowsToRead = undefined;
      this._maxRowsToSort = undefined;
      this._maxRowsToTransfer = undefined;
      this._maxTemporaryColumns = undefined;
      this._maxTemporaryNonConstColumns = undefined;
      this._maxThreads = undefined;
      this._mergeTreeMaxBytesToUseCache = undefined;
      this._mergeTreeMaxRowsToUseCache = undefined;
      this._mergeTreeMinBytesForConcurrentRead = undefined;
      this._mergeTreeMinRowsForConcurrentRead = undefined;
      this._minBytesToUseDirectIo = undefined;
      this._minCountToCompile = undefined;
      this._minCountToCompileExpression = undefined;
      this._minExecutionSpeed = undefined;
      this._minExecutionSpeedBytes = undefined;
      this._minInsertBlockSizeBytes = undefined;
      this._minInsertBlockSizeRows = undefined;
      this._outputFormatJsonQuote64BitIntegers = undefined;
      this._outputFormatJsonQuoteDenormals = undefined;
      this._priority = undefined;
      this._quotaMode = undefined;
      this._readOverflowMode = undefined;
      this._readonly = undefined;
      this._receiveTimeout = undefined;
      this._replicationAlterPartitionsSync = undefined;
      this._resultOverflowMode = undefined;
      this._selectSequentialConsistency = undefined;
      this._sendProgressInHttpHeaders = undefined;
      this._sendTimeout = undefined;
      this._setOverflowMode = undefined;
      this._skipUnavailableShards = undefined;
      this._sortOverflowMode = undefined;
      this._timeoutOverflowMode = undefined;
      this._transferOverflowMode = undefined;
      this._transformNullIn = undefined;
      this._useUncompressedCache = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttpCorsHeader = value.addHttpCorsHeader;
      this._allowDdl = value.allowDdl;
      this._compile = value.compile;
      this._compileExpressions = value.compileExpressions;
      this._connectTimeout = value.connectTimeout;
      this._countDistinctImplementation = value.countDistinctImplementation;
      this._distinctOverflowMode = value.distinctOverflowMode;
      this._distributedAggregationMemoryEfficient = value.distributedAggregationMemoryEfficient;
      this._distributedDdlTaskTimeout = value.distributedDdlTaskTimeout;
      this._distributedProductMode = value.distributedProductMode;
      this._emptyResultForAggregationByEmptySet = value.emptyResultForAggregationByEmptySet;
      this._enableHttpCompression = value.enableHttpCompression;
      this._fallbackToStaleReplicasForDistributedQueries = value.fallbackToStaleReplicasForDistributedQueries;
      this._forceIndexByDate = value.forceIndexByDate;
      this._forcePrimaryKey = value.forcePrimaryKey;
      this._groupByOverflowMode = value.groupByOverflowMode;
      this._groupByTwoLevelThreshold = value.groupByTwoLevelThreshold;
      this._groupByTwoLevelThresholdBytes = value.groupByTwoLevelThresholdBytes;
      this._httpConnectionTimeout = value.httpConnectionTimeout;
      this._httpHeadersProgressInterval = value.httpHeadersProgressInterval;
      this._httpReceiveTimeout = value.httpReceiveTimeout;
      this._httpSendTimeout = value.httpSendTimeout;
      this._inputFormatDefaultsForOmittedFields = value.inputFormatDefaultsForOmittedFields;
      this._inputFormatValuesInterpretExpressions = value.inputFormatValuesInterpretExpressions;
      this._insertQuorum = value.insertQuorum;
      this._insertQuorumTimeout = value.insertQuorumTimeout;
      this._joinOverflowMode = value.joinOverflowMode;
      this._joinUseNulls = value.joinUseNulls;
      this._joinedSubqueryRequiresAlias = value.joinedSubqueryRequiresAlias;
      this._lowCardinalityAllowInNativeFormat = value.lowCardinalityAllowInNativeFormat;
      this._maxAstDepth = value.maxAstDepth;
      this._maxAstElements = value.maxAstElements;
      this._maxBlockSize = value.maxBlockSize;
      this._maxBytesBeforeExternalGroupBy = value.maxBytesBeforeExternalGroupBy;
      this._maxBytesBeforeExternalSort = value.maxBytesBeforeExternalSort;
      this._maxBytesInDistinct = value.maxBytesInDistinct;
      this._maxBytesInJoin = value.maxBytesInJoin;
      this._maxBytesInSet = value.maxBytesInSet;
      this._maxBytesToRead = value.maxBytesToRead;
      this._maxBytesToSort = value.maxBytesToSort;
      this._maxBytesToTransfer = value.maxBytesToTransfer;
      this._maxColumnsToRead = value.maxColumnsToRead;
      this._maxExecutionTime = value.maxExecutionTime;
      this._maxExpandedAstElements = value.maxExpandedAstElements;
      this._maxInsertBlockSize = value.maxInsertBlockSize;
      this._maxMemoryUsage = value.maxMemoryUsage;
      this._maxMemoryUsageForUser = value.maxMemoryUsageForUser;
      this._maxNetworkBandwidth = value.maxNetworkBandwidth;
      this._maxNetworkBandwidthForUser = value.maxNetworkBandwidthForUser;
      this._maxQuerySize = value.maxQuerySize;
      this._maxReplicaDelayForDistributedQueries = value.maxReplicaDelayForDistributedQueries;
      this._maxResultBytes = value.maxResultBytes;
      this._maxResultRows = value.maxResultRows;
      this._maxRowsInDistinct = value.maxRowsInDistinct;
      this._maxRowsInJoin = value.maxRowsInJoin;
      this._maxRowsInSet = value.maxRowsInSet;
      this._maxRowsToGroupBy = value.maxRowsToGroupBy;
      this._maxRowsToRead = value.maxRowsToRead;
      this._maxRowsToSort = value.maxRowsToSort;
      this._maxRowsToTransfer = value.maxRowsToTransfer;
      this._maxTemporaryColumns = value.maxTemporaryColumns;
      this._maxTemporaryNonConstColumns = value.maxTemporaryNonConstColumns;
      this._maxThreads = value.maxThreads;
      this._mergeTreeMaxBytesToUseCache = value.mergeTreeMaxBytesToUseCache;
      this._mergeTreeMaxRowsToUseCache = value.mergeTreeMaxRowsToUseCache;
      this._mergeTreeMinBytesForConcurrentRead = value.mergeTreeMinBytesForConcurrentRead;
      this._mergeTreeMinRowsForConcurrentRead = value.mergeTreeMinRowsForConcurrentRead;
      this._minBytesToUseDirectIo = value.minBytesToUseDirectIo;
      this._minCountToCompile = value.minCountToCompile;
      this._minCountToCompileExpression = value.minCountToCompileExpression;
      this._minExecutionSpeed = value.minExecutionSpeed;
      this._minExecutionSpeedBytes = value.minExecutionSpeedBytes;
      this._minInsertBlockSizeBytes = value.minInsertBlockSizeBytes;
      this._minInsertBlockSizeRows = value.minInsertBlockSizeRows;
      this._outputFormatJsonQuote64BitIntegers = value.outputFormatJsonQuote64BitIntegers;
      this._outputFormatJsonQuoteDenormals = value.outputFormatJsonQuoteDenormals;
      this._priority = value.priority;
      this._quotaMode = value.quotaMode;
      this._readOverflowMode = value.readOverflowMode;
      this._readonly = value.readonly;
      this._receiveTimeout = value.receiveTimeout;
      this._replicationAlterPartitionsSync = value.replicationAlterPartitionsSync;
      this._resultOverflowMode = value.resultOverflowMode;
      this._selectSequentialConsistency = value.selectSequentialConsistency;
      this._sendProgressInHttpHeaders = value.sendProgressInHttpHeaders;
      this._sendTimeout = value.sendTimeout;
      this._setOverflowMode = value.setOverflowMode;
      this._skipUnavailableShards = value.skipUnavailableShards;
      this._sortOverflowMode = value.sortOverflowMode;
      this._timeoutOverflowMode = value.timeoutOverflowMode;
      this._transferOverflowMode = value.transferOverflowMode;
      this._transformNullIn = value.transformNullIn;
      this._useUncompressedCache = value.useUncompressedCache;
    }
  }

  // add_http_cors_header - computed: true, optional: true, required: false
  private _addHttpCorsHeader?: boolean | cdktf.IResolvable; 
  public get addHttpCorsHeader() {
    return this.getBooleanAttribute('add_http_cors_header');
  }
  public set addHttpCorsHeader(value: boolean | cdktf.IResolvable) {
    this._addHttpCorsHeader = value;
  }
  public resetAddHttpCorsHeader() {
    this._addHttpCorsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttpCorsHeaderInput() {
    return this._addHttpCorsHeader;
  }

  // allow_ddl - computed: true, optional: true, required: false
  private _allowDdl?: boolean | cdktf.IResolvable; 
  public get allowDdl() {
    return this.getBooleanAttribute('allow_ddl');
  }
  public set allowDdl(value: boolean | cdktf.IResolvable) {
    this._allowDdl = value;
  }
  public resetAllowDdl() {
    this._allowDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDdlInput() {
    return this._allowDdl;
  }

  // compile - computed: true, optional: true, required: false
  private _compile?: boolean | cdktf.IResolvable; 
  public get compile() {
    return this.getBooleanAttribute('compile');
  }
  public set compile(value: boolean | cdktf.IResolvable) {
    this._compile = value;
  }
  public resetCompile() {
    this._compile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compileInput() {
    return this._compile;
  }

  // compile_expressions - computed: true, optional: true, required: false
  private _compileExpressions?: boolean | cdktf.IResolvable; 
  public get compileExpressions() {
    return this.getBooleanAttribute('compile_expressions');
  }
  public set compileExpressions(value: boolean | cdktf.IResolvable) {
    this._compileExpressions = value;
  }
  public resetCompileExpressions() {
    this._compileExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compileExpressionsInput() {
    return this._compileExpressions;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // count_distinct_implementation - computed: true, optional: true, required: false
  private _countDistinctImplementation?: string; 
  public get countDistinctImplementation() {
    return this.getStringAttribute('count_distinct_implementation');
  }
  public set countDistinctImplementation(value: string) {
    this._countDistinctImplementation = value;
  }
  public resetCountDistinctImplementation() {
    this._countDistinctImplementation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countDistinctImplementationInput() {
    return this._countDistinctImplementation;
  }

  // distinct_overflow_mode - computed: true, optional: true, required: false
  private _distinctOverflowMode?: string; 
  public get distinctOverflowMode() {
    return this.getStringAttribute('distinct_overflow_mode');
  }
  public set distinctOverflowMode(value: string) {
    this._distinctOverflowMode = value;
  }
  public resetDistinctOverflowMode() {
    this._distinctOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctOverflowModeInput() {
    return this._distinctOverflowMode;
  }

  // distributed_aggregation_memory_efficient - computed: true, optional: true, required: false
  private _distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable; 
  public get distributedAggregationMemoryEfficient() {
    return this.getBooleanAttribute('distributed_aggregation_memory_efficient');
  }
  public set distributedAggregationMemoryEfficient(value: boolean | cdktf.IResolvable) {
    this._distributedAggregationMemoryEfficient = value;
  }
  public resetDistributedAggregationMemoryEfficient() {
    this._distributedAggregationMemoryEfficient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedAggregationMemoryEfficientInput() {
    return this._distributedAggregationMemoryEfficient;
  }

  // distributed_ddl_task_timeout - computed: true, optional: true, required: false
  private _distributedDdlTaskTimeout?: number; 
  public get distributedDdlTaskTimeout() {
    return this.getNumberAttribute('distributed_ddl_task_timeout');
  }
  public set distributedDdlTaskTimeout(value: number) {
    this._distributedDdlTaskTimeout = value;
  }
  public resetDistributedDdlTaskTimeout() {
    this._distributedDdlTaskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedDdlTaskTimeoutInput() {
    return this._distributedDdlTaskTimeout;
  }

  // distributed_product_mode - computed: true, optional: true, required: false
  private _distributedProductMode?: string; 
  public get distributedProductMode() {
    return this.getStringAttribute('distributed_product_mode');
  }
  public set distributedProductMode(value: string) {
    this._distributedProductMode = value;
  }
  public resetDistributedProductMode() {
    this._distributedProductMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedProductModeInput() {
    return this._distributedProductMode;
  }

  // empty_result_for_aggregation_by_empty_set - computed: true, optional: true, required: false
  private _emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable; 
  public get emptyResultForAggregationByEmptySet() {
    return this.getBooleanAttribute('empty_result_for_aggregation_by_empty_set');
  }
  public set emptyResultForAggregationByEmptySet(value: boolean | cdktf.IResolvable) {
    this._emptyResultForAggregationByEmptySet = value;
  }
  public resetEmptyResultForAggregationByEmptySet() {
    this._emptyResultForAggregationByEmptySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResultForAggregationByEmptySetInput() {
    return this._emptyResultForAggregationByEmptySet;
  }

  // enable_http_compression - computed: true, optional: true, required: false
  private _enableHttpCompression?: boolean | cdktf.IResolvable; 
  public get enableHttpCompression() {
    return this.getBooleanAttribute('enable_http_compression');
  }
  public set enableHttpCompression(value: boolean | cdktf.IResolvable) {
    this._enableHttpCompression = value;
  }
  public resetEnableHttpCompression() {
    this._enableHttpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpCompressionInput() {
    return this._enableHttpCompression;
  }

  // fallback_to_stale_replicas_for_distributed_queries - computed: true, optional: true, required: false
  private _fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable; 
  public get fallbackToStaleReplicasForDistributedQueries() {
    return this.getBooleanAttribute('fallback_to_stale_replicas_for_distributed_queries');
  }
  public set fallbackToStaleReplicasForDistributedQueries(value: boolean | cdktf.IResolvable) {
    this._fallbackToStaleReplicasForDistributedQueries = value;
  }
  public resetFallbackToStaleReplicasForDistributedQueries() {
    this._fallbackToStaleReplicasForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToStaleReplicasForDistributedQueriesInput() {
    return this._fallbackToStaleReplicasForDistributedQueries;
  }

  // force_index_by_date - computed: true, optional: true, required: false
  private _forceIndexByDate?: boolean | cdktf.IResolvable; 
  public get forceIndexByDate() {
    return this.getBooleanAttribute('force_index_by_date');
  }
  public set forceIndexByDate(value: boolean | cdktf.IResolvable) {
    this._forceIndexByDate = value;
  }
  public resetForceIndexByDate() {
    this._forceIndexByDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIndexByDateInput() {
    return this._forceIndexByDate;
  }

  // force_primary_key - computed: true, optional: true, required: false
  private _forcePrimaryKey?: boolean | cdktf.IResolvable; 
  public get forcePrimaryKey() {
    return this.getBooleanAttribute('force_primary_key');
  }
  public set forcePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._forcePrimaryKey = value;
  }
  public resetForcePrimaryKey() {
    this._forcePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePrimaryKeyInput() {
    return this._forcePrimaryKey;
  }

  // group_by_overflow_mode - computed: true, optional: true, required: false
  private _groupByOverflowMode?: string; 
  public get groupByOverflowMode() {
    return this.getStringAttribute('group_by_overflow_mode');
  }
  public set groupByOverflowMode(value: string) {
    this._groupByOverflowMode = value;
  }
  public resetGroupByOverflowMode() {
    this._groupByOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByOverflowModeInput() {
    return this._groupByOverflowMode;
  }

  // group_by_two_level_threshold - computed: true, optional: true, required: false
  private _groupByTwoLevelThreshold?: number; 
  public get groupByTwoLevelThreshold() {
    return this.getNumberAttribute('group_by_two_level_threshold');
  }
  public set groupByTwoLevelThreshold(value: number) {
    this._groupByTwoLevelThreshold = value;
  }
  public resetGroupByTwoLevelThreshold() {
    this._groupByTwoLevelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdInput() {
    return this._groupByTwoLevelThreshold;
  }

  // group_by_two_level_threshold_bytes - computed: true, optional: true, required: false
  private _groupByTwoLevelThresholdBytes?: number; 
  public get groupByTwoLevelThresholdBytes() {
    return this.getNumberAttribute('group_by_two_level_threshold_bytes');
  }
  public set groupByTwoLevelThresholdBytes(value: number) {
    this._groupByTwoLevelThresholdBytes = value;
  }
  public resetGroupByTwoLevelThresholdBytes() {
    this._groupByTwoLevelThresholdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdBytesInput() {
    return this._groupByTwoLevelThresholdBytes;
  }

  // http_connection_timeout - computed: true, optional: true, required: false
  private _httpConnectionTimeout?: number; 
  public get httpConnectionTimeout() {
    return this.getNumberAttribute('http_connection_timeout');
  }
  public set httpConnectionTimeout(value: number) {
    this._httpConnectionTimeout = value;
  }
  public resetHttpConnectionTimeout() {
    this._httpConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectionTimeoutInput() {
    return this._httpConnectionTimeout;
  }

  // http_headers_progress_interval - computed: true, optional: true, required: false
  private _httpHeadersProgressInterval?: number; 
  public get httpHeadersProgressInterval() {
    return this.getNumberAttribute('http_headers_progress_interval');
  }
  public set httpHeadersProgressInterval(value: number) {
    this._httpHeadersProgressInterval = value;
  }
  public resetHttpHeadersProgressInterval() {
    this._httpHeadersProgressInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersProgressIntervalInput() {
    return this._httpHeadersProgressInterval;
  }

  // http_receive_timeout - computed: true, optional: true, required: false
  private _httpReceiveTimeout?: number; 
  public get httpReceiveTimeout() {
    return this.getNumberAttribute('http_receive_timeout');
  }
  public set httpReceiveTimeout(value: number) {
    this._httpReceiveTimeout = value;
  }
  public resetHttpReceiveTimeout() {
    this._httpReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReceiveTimeoutInput() {
    return this._httpReceiveTimeout;
  }

  // http_send_timeout - computed: true, optional: true, required: false
  private _httpSendTimeout?: number; 
  public get httpSendTimeout() {
    return this.getNumberAttribute('http_send_timeout');
  }
  public set httpSendTimeout(value: number) {
    this._httpSendTimeout = value;
  }
  public resetHttpSendTimeout() {
    this._httpSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSendTimeoutInput() {
    return this._httpSendTimeout;
  }

  // input_format_defaults_for_omitted_fields - computed: true, optional: true, required: false
  private _inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable; 
  public get inputFormatDefaultsForOmittedFields() {
    return this.getBooleanAttribute('input_format_defaults_for_omitted_fields');
  }
  public set inputFormatDefaultsForOmittedFields(value: boolean | cdktf.IResolvable) {
    this._inputFormatDefaultsForOmittedFields = value;
  }
  public resetInputFormatDefaultsForOmittedFields() {
    this._inputFormatDefaultsForOmittedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatDefaultsForOmittedFieldsInput() {
    return this._inputFormatDefaultsForOmittedFields;
  }

  // input_format_values_interpret_expressions - computed: true, optional: true, required: false
  private _inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable; 
  public get inputFormatValuesInterpretExpressions() {
    return this.getBooleanAttribute('input_format_values_interpret_expressions');
  }
  public set inputFormatValuesInterpretExpressions(value: boolean | cdktf.IResolvable) {
    this._inputFormatValuesInterpretExpressions = value;
  }
  public resetInputFormatValuesInterpretExpressions() {
    this._inputFormatValuesInterpretExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatValuesInterpretExpressionsInput() {
    return this._inputFormatValuesInterpretExpressions;
  }

  // insert_quorum - computed: true, optional: true, required: false
  private _insertQuorum?: number; 
  public get insertQuorum() {
    return this.getNumberAttribute('insert_quorum');
  }
  public set insertQuorum(value: number) {
    this._insertQuorum = value;
  }
  public resetInsertQuorum() {
    this._insertQuorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumInput() {
    return this._insertQuorum;
  }

  // insert_quorum_timeout - computed: true, optional: true, required: false
  private _insertQuorumTimeout?: number; 
  public get insertQuorumTimeout() {
    return this.getNumberAttribute('insert_quorum_timeout');
  }
  public set insertQuorumTimeout(value: number) {
    this._insertQuorumTimeout = value;
  }
  public resetInsertQuorumTimeout() {
    this._insertQuorumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumTimeoutInput() {
    return this._insertQuorumTimeout;
  }

  // join_overflow_mode - computed: true, optional: true, required: false
  private _joinOverflowMode?: string; 
  public get joinOverflowMode() {
    return this.getStringAttribute('join_overflow_mode');
  }
  public set joinOverflowMode(value: string) {
    this._joinOverflowMode = value;
  }
  public resetJoinOverflowMode() {
    this._joinOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOverflowModeInput() {
    return this._joinOverflowMode;
  }

  // join_use_nulls - computed: true, optional: true, required: false
  private _joinUseNulls?: boolean | cdktf.IResolvable; 
  public get joinUseNulls() {
    return this.getBooleanAttribute('join_use_nulls');
  }
  public set joinUseNulls(value: boolean | cdktf.IResolvable) {
    this._joinUseNulls = value;
  }
  public resetJoinUseNulls() {
    this._joinUseNulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinUseNullsInput() {
    return this._joinUseNulls;
  }

  // joined_subquery_requires_alias - computed: true, optional: true, required: false
  private _joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable; 
  public get joinedSubqueryRequiresAlias() {
    return this.getBooleanAttribute('joined_subquery_requires_alias');
  }
  public set joinedSubqueryRequiresAlias(value: boolean | cdktf.IResolvable) {
    this._joinedSubqueryRequiresAlias = value;
  }
  public resetJoinedSubqueryRequiresAlias() {
    this._joinedSubqueryRequiresAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinedSubqueryRequiresAliasInput() {
    return this._joinedSubqueryRequiresAlias;
  }

  // low_cardinality_allow_in_native_format - computed: true, optional: true, required: false
  private _lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable; 
  public get lowCardinalityAllowInNativeFormat() {
    return this.getBooleanAttribute('low_cardinality_allow_in_native_format');
  }
  public set lowCardinalityAllowInNativeFormat(value: boolean | cdktf.IResolvable) {
    this._lowCardinalityAllowInNativeFormat = value;
  }
  public resetLowCardinalityAllowInNativeFormat() {
    this._lowCardinalityAllowInNativeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowCardinalityAllowInNativeFormatInput() {
    return this._lowCardinalityAllowInNativeFormat;
  }

  // max_ast_depth - computed: true, optional: true, required: false
  private _maxAstDepth?: number; 
  public get maxAstDepth() {
    return this.getNumberAttribute('max_ast_depth');
  }
  public set maxAstDepth(value: number) {
    this._maxAstDepth = value;
  }
  public resetMaxAstDepth() {
    this._maxAstDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstDepthInput() {
    return this._maxAstDepth;
  }

  // max_ast_elements - computed: true, optional: true, required: false
  private _maxAstElements?: number; 
  public get maxAstElements() {
    return this.getNumberAttribute('max_ast_elements');
  }
  public set maxAstElements(value: number) {
    this._maxAstElements = value;
  }
  public resetMaxAstElements() {
    this._maxAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstElementsInput() {
    return this._maxAstElements;
  }

  // max_block_size - computed: true, optional: true, required: false
  private _maxBlockSize?: number; 
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }
  public set maxBlockSize(value: number) {
    this._maxBlockSize = value;
  }
  public resetMaxBlockSize() {
    this._maxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockSizeInput() {
    return this._maxBlockSize;
  }

  // max_bytes_before_external_group_by - computed: true, optional: true, required: false
  private _maxBytesBeforeExternalGroupBy?: number; 
  public get maxBytesBeforeExternalGroupBy() {
    return this.getNumberAttribute('max_bytes_before_external_group_by');
  }
  public set maxBytesBeforeExternalGroupBy(value: number) {
    this._maxBytesBeforeExternalGroupBy = value;
  }
  public resetMaxBytesBeforeExternalGroupBy() {
    this._maxBytesBeforeExternalGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalGroupByInput() {
    return this._maxBytesBeforeExternalGroupBy;
  }

  // max_bytes_before_external_sort - computed: true, optional: true, required: false
  private _maxBytesBeforeExternalSort?: number; 
  public get maxBytesBeforeExternalSort() {
    return this.getNumberAttribute('max_bytes_before_external_sort');
  }
  public set maxBytesBeforeExternalSort(value: number) {
    this._maxBytesBeforeExternalSort = value;
  }
  public resetMaxBytesBeforeExternalSort() {
    this._maxBytesBeforeExternalSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalSortInput() {
    return this._maxBytesBeforeExternalSort;
  }

  // max_bytes_in_distinct - computed: true, optional: true, required: false
  private _maxBytesInDistinct?: number; 
  public get maxBytesInDistinct() {
    return this.getNumberAttribute('max_bytes_in_distinct');
  }
  public set maxBytesInDistinct(value: number) {
    this._maxBytesInDistinct = value;
  }
  public resetMaxBytesInDistinct() {
    this._maxBytesInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInDistinctInput() {
    return this._maxBytesInDistinct;
  }

  // max_bytes_in_join - computed: true, optional: true, required: false
  private _maxBytesInJoin?: number; 
  public get maxBytesInJoin() {
    return this.getNumberAttribute('max_bytes_in_join');
  }
  public set maxBytesInJoin(value: number) {
    this._maxBytesInJoin = value;
  }
  public resetMaxBytesInJoin() {
    this._maxBytesInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInJoinInput() {
    return this._maxBytesInJoin;
  }

  // max_bytes_in_set - computed: true, optional: true, required: false
  private _maxBytesInSet?: number; 
  public get maxBytesInSet() {
    return this.getNumberAttribute('max_bytes_in_set');
  }
  public set maxBytesInSet(value: number) {
    this._maxBytesInSet = value;
  }
  public resetMaxBytesInSet() {
    this._maxBytesInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInSetInput() {
    return this._maxBytesInSet;
  }

  // max_bytes_to_read - computed: true, optional: true, required: false
  private _maxBytesToRead?: number; 
  public get maxBytesToRead() {
    return this.getNumberAttribute('max_bytes_to_read');
  }
  public set maxBytesToRead(value: number) {
    this._maxBytesToRead = value;
  }
  public resetMaxBytesToRead() {
    this._maxBytesToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToReadInput() {
    return this._maxBytesToRead;
  }

  // max_bytes_to_sort - computed: true, optional: true, required: false
  private _maxBytesToSort?: number; 
  public get maxBytesToSort() {
    return this.getNumberAttribute('max_bytes_to_sort');
  }
  public set maxBytesToSort(value: number) {
    this._maxBytesToSort = value;
  }
  public resetMaxBytesToSort() {
    this._maxBytesToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToSortInput() {
    return this._maxBytesToSort;
  }

  // max_bytes_to_transfer - computed: true, optional: true, required: false
  private _maxBytesToTransfer?: number; 
  public get maxBytesToTransfer() {
    return this.getNumberAttribute('max_bytes_to_transfer');
  }
  public set maxBytesToTransfer(value: number) {
    this._maxBytesToTransfer = value;
  }
  public resetMaxBytesToTransfer() {
    this._maxBytesToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToTransferInput() {
    return this._maxBytesToTransfer;
  }

  // max_columns_to_read - computed: true, optional: true, required: false
  private _maxColumnsToRead?: number; 
  public get maxColumnsToRead() {
    return this.getNumberAttribute('max_columns_to_read');
  }
  public set maxColumnsToRead(value: number) {
    this._maxColumnsToRead = value;
  }
  public resetMaxColumnsToRead() {
    this._maxColumnsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxColumnsToReadInput() {
    return this._maxColumnsToRead;
  }

  // max_execution_time - computed: true, optional: true, required: false
  private _maxExecutionTime?: number; 
  public get maxExecutionTime() {
    return this.getNumberAttribute('max_execution_time');
  }
  public set maxExecutionTime(value: number) {
    this._maxExecutionTime = value;
  }
  public resetMaxExecutionTime() {
    this._maxExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionTimeInput() {
    return this._maxExecutionTime;
  }

  // max_expanded_ast_elements - computed: true, optional: true, required: false
  private _maxExpandedAstElements?: number; 
  public get maxExpandedAstElements() {
    return this.getNumberAttribute('max_expanded_ast_elements');
  }
  public set maxExpandedAstElements(value: number) {
    this._maxExpandedAstElements = value;
  }
  public resetMaxExpandedAstElements() {
    this._maxExpandedAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpandedAstElementsInput() {
    return this._maxExpandedAstElements;
  }

  // max_insert_block_size - computed: true, optional: true, required: false
  private _maxInsertBlockSize?: number; 
  public get maxInsertBlockSize() {
    return this.getNumberAttribute('max_insert_block_size');
  }
  public set maxInsertBlockSize(value: number) {
    this._maxInsertBlockSize = value;
  }
  public resetMaxInsertBlockSize() {
    this._maxInsertBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInsertBlockSizeInput() {
    return this._maxInsertBlockSize;
  }

  // max_memory_usage - computed: true, optional: true, required: false
  private _maxMemoryUsage?: number; 
  public get maxMemoryUsage() {
    return this.getNumberAttribute('max_memory_usage');
  }
  public set maxMemoryUsage(value: number) {
    this._maxMemoryUsage = value;
  }
  public resetMaxMemoryUsage() {
    this._maxMemoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageInput() {
    return this._maxMemoryUsage;
  }

  // max_memory_usage_for_user - computed: true, optional: true, required: false
  private _maxMemoryUsageForUser?: number; 
  public get maxMemoryUsageForUser() {
    return this.getNumberAttribute('max_memory_usage_for_user');
  }
  public set maxMemoryUsageForUser(value: number) {
    this._maxMemoryUsageForUser = value;
  }
  public resetMaxMemoryUsageForUser() {
    this._maxMemoryUsageForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageForUserInput() {
    return this._maxMemoryUsageForUser;
  }

  // max_network_bandwidth - computed: true, optional: true, required: false
  private _maxNetworkBandwidth?: number; 
  public get maxNetworkBandwidth() {
    return this.getNumberAttribute('max_network_bandwidth');
  }
  public set maxNetworkBandwidth(value: number) {
    this._maxNetworkBandwidth = value;
  }
  public resetMaxNetworkBandwidth() {
    this._maxNetworkBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthInput() {
    return this._maxNetworkBandwidth;
  }

  // max_network_bandwidth_for_user - computed: true, optional: true, required: false
  private _maxNetworkBandwidthForUser?: number; 
  public get maxNetworkBandwidthForUser() {
    return this.getNumberAttribute('max_network_bandwidth_for_user');
  }
  public set maxNetworkBandwidthForUser(value: number) {
    this._maxNetworkBandwidthForUser = value;
  }
  public resetMaxNetworkBandwidthForUser() {
    this._maxNetworkBandwidthForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthForUserInput() {
    return this._maxNetworkBandwidthForUser;
  }

  // max_query_size - computed: true, optional: true, required: false
  private _maxQuerySize?: number; 
  public get maxQuerySize() {
    return this.getNumberAttribute('max_query_size');
  }
  public set maxQuerySize(value: number) {
    this._maxQuerySize = value;
  }
  public resetMaxQuerySize() {
    this._maxQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeInput() {
    return this._maxQuerySize;
  }

  // max_replica_delay_for_distributed_queries - computed: true, optional: true, required: false
  private _maxReplicaDelayForDistributedQueries?: number; 
  public get maxReplicaDelayForDistributedQueries() {
    return this.getNumberAttribute('max_replica_delay_for_distributed_queries');
  }
  public set maxReplicaDelayForDistributedQueries(value: number) {
    this._maxReplicaDelayForDistributedQueries = value;
  }
  public resetMaxReplicaDelayForDistributedQueries() {
    this._maxReplicaDelayForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaDelayForDistributedQueriesInput() {
    return this._maxReplicaDelayForDistributedQueries;
  }

  // max_result_bytes - computed: true, optional: true, required: false
  private _maxResultBytes?: number; 
  public get maxResultBytes() {
    return this.getNumberAttribute('max_result_bytes');
  }
  public set maxResultBytes(value: number) {
    this._maxResultBytes = value;
  }
  public resetMaxResultBytes() {
    this._maxResultBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultBytesInput() {
    return this._maxResultBytes;
  }

  // max_result_rows - computed: true, optional: true, required: false
  private _maxResultRows?: number; 
  public get maxResultRows() {
    return this.getNumberAttribute('max_result_rows');
  }
  public set maxResultRows(value: number) {
    this._maxResultRows = value;
  }
  public resetMaxResultRows() {
    this._maxResultRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultRowsInput() {
    return this._maxResultRows;
  }

  // max_rows_in_distinct - computed: true, optional: true, required: false
  private _maxRowsInDistinct?: number; 
  public get maxRowsInDistinct() {
    return this.getNumberAttribute('max_rows_in_distinct');
  }
  public set maxRowsInDistinct(value: number) {
    this._maxRowsInDistinct = value;
  }
  public resetMaxRowsInDistinct() {
    this._maxRowsInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInDistinctInput() {
    return this._maxRowsInDistinct;
  }

  // max_rows_in_join - computed: true, optional: true, required: false
  private _maxRowsInJoin?: number; 
  public get maxRowsInJoin() {
    return this.getNumberAttribute('max_rows_in_join');
  }
  public set maxRowsInJoin(value: number) {
    this._maxRowsInJoin = value;
  }
  public resetMaxRowsInJoin() {
    this._maxRowsInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInJoinInput() {
    return this._maxRowsInJoin;
  }

  // max_rows_in_set - computed: true, optional: true, required: false
  private _maxRowsInSet?: number; 
  public get maxRowsInSet() {
    return this.getNumberAttribute('max_rows_in_set');
  }
  public set maxRowsInSet(value: number) {
    this._maxRowsInSet = value;
  }
  public resetMaxRowsInSet() {
    this._maxRowsInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInSetInput() {
    return this._maxRowsInSet;
  }

  // max_rows_to_group_by - computed: true, optional: true, required: false
  private _maxRowsToGroupBy?: number; 
  public get maxRowsToGroupBy() {
    return this.getNumberAttribute('max_rows_to_group_by');
  }
  public set maxRowsToGroupBy(value: number) {
    this._maxRowsToGroupBy = value;
  }
  public resetMaxRowsToGroupBy() {
    this._maxRowsToGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToGroupByInput() {
    return this._maxRowsToGroupBy;
  }

  // max_rows_to_read - computed: true, optional: true, required: false
  private _maxRowsToRead?: number; 
  public get maxRowsToRead() {
    return this.getNumberAttribute('max_rows_to_read');
  }
  public set maxRowsToRead(value: number) {
    this._maxRowsToRead = value;
  }
  public resetMaxRowsToRead() {
    this._maxRowsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToReadInput() {
    return this._maxRowsToRead;
  }

  // max_rows_to_sort - computed: true, optional: true, required: false
  private _maxRowsToSort?: number; 
  public get maxRowsToSort() {
    return this.getNumberAttribute('max_rows_to_sort');
  }
  public set maxRowsToSort(value: number) {
    this._maxRowsToSort = value;
  }
  public resetMaxRowsToSort() {
    this._maxRowsToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToSortInput() {
    return this._maxRowsToSort;
  }

  // max_rows_to_transfer - computed: true, optional: true, required: false
  private _maxRowsToTransfer?: number; 
  public get maxRowsToTransfer() {
    return this.getNumberAttribute('max_rows_to_transfer');
  }
  public set maxRowsToTransfer(value: number) {
    this._maxRowsToTransfer = value;
  }
  public resetMaxRowsToTransfer() {
    this._maxRowsToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToTransferInput() {
    return this._maxRowsToTransfer;
  }

  // max_temporary_columns - computed: true, optional: true, required: false
  private _maxTemporaryColumns?: number; 
  public get maxTemporaryColumns() {
    return this.getNumberAttribute('max_temporary_columns');
  }
  public set maxTemporaryColumns(value: number) {
    this._maxTemporaryColumns = value;
  }
  public resetMaxTemporaryColumns() {
    this._maxTemporaryColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryColumnsInput() {
    return this._maxTemporaryColumns;
  }

  // max_temporary_non_const_columns - computed: true, optional: true, required: false
  private _maxTemporaryNonConstColumns?: number; 
  public get maxTemporaryNonConstColumns() {
    return this.getNumberAttribute('max_temporary_non_const_columns');
  }
  public set maxTemporaryNonConstColumns(value: number) {
    this._maxTemporaryNonConstColumns = value;
  }
  public resetMaxTemporaryNonConstColumns() {
    this._maxTemporaryNonConstColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryNonConstColumnsInput() {
    return this._maxTemporaryNonConstColumns;
  }

  // max_threads - computed: true, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
  }

  // merge_tree_max_bytes_to_use_cache - computed: true, optional: true, required: false
  private _mergeTreeMaxBytesToUseCache?: number; 
  public get mergeTreeMaxBytesToUseCache() {
    return this.getNumberAttribute('merge_tree_max_bytes_to_use_cache');
  }
  public set mergeTreeMaxBytesToUseCache(value: number) {
    this._mergeTreeMaxBytesToUseCache = value;
  }
  public resetMergeTreeMaxBytesToUseCache() {
    this._mergeTreeMaxBytesToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxBytesToUseCacheInput() {
    return this._mergeTreeMaxBytesToUseCache;
  }

  // merge_tree_max_rows_to_use_cache - computed: true, optional: true, required: false
  private _mergeTreeMaxRowsToUseCache?: number; 
  public get mergeTreeMaxRowsToUseCache() {
    return this.getNumberAttribute('merge_tree_max_rows_to_use_cache');
  }
  public set mergeTreeMaxRowsToUseCache(value: number) {
    this._mergeTreeMaxRowsToUseCache = value;
  }
  public resetMergeTreeMaxRowsToUseCache() {
    this._mergeTreeMaxRowsToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxRowsToUseCacheInput() {
    return this._mergeTreeMaxRowsToUseCache;
  }

  // merge_tree_min_bytes_for_concurrent_read - computed: true, optional: true, required: false
  private _mergeTreeMinBytesForConcurrentRead?: number; 
  public get mergeTreeMinBytesForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_bytes_for_concurrent_read');
  }
  public set mergeTreeMinBytesForConcurrentRead(value: number) {
    this._mergeTreeMinBytesForConcurrentRead = value;
  }
  public resetMergeTreeMinBytesForConcurrentRead() {
    this._mergeTreeMinBytesForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinBytesForConcurrentReadInput() {
    return this._mergeTreeMinBytesForConcurrentRead;
  }

  // merge_tree_min_rows_for_concurrent_read - computed: true, optional: true, required: false
  private _mergeTreeMinRowsForConcurrentRead?: number; 
  public get mergeTreeMinRowsForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_rows_for_concurrent_read');
  }
  public set mergeTreeMinRowsForConcurrentRead(value: number) {
    this._mergeTreeMinRowsForConcurrentRead = value;
  }
  public resetMergeTreeMinRowsForConcurrentRead() {
    this._mergeTreeMinRowsForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinRowsForConcurrentReadInput() {
    return this._mergeTreeMinRowsForConcurrentRead;
  }

  // min_bytes_to_use_direct_io - computed: true, optional: true, required: false
  private _minBytesToUseDirectIo?: number; 
  public get minBytesToUseDirectIo() {
    return this.getNumberAttribute('min_bytes_to_use_direct_io');
  }
  public set minBytesToUseDirectIo(value: number) {
    this._minBytesToUseDirectIo = value;
  }
  public resetMinBytesToUseDirectIo() {
    this._minBytesToUseDirectIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBytesToUseDirectIoInput() {
    return this._minBytesToUseDirectIo;
  }

  // min_count_to_compile - computed: true, optional: true, required: false
  private _minCountToCompile?: number; 
  public get minCountToCompile() {
    return this.getNumberAttribute('min_count_to_compile');
  }
  public set minCountToCompile(value: number) {
    this._minCountToCompile = value;
  }
  public resetMinCountToCompile() {
    this._minCountToCompile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountToCompileInput() {
    return this._minCountToCompile;
  }

  // min_count_to_compile_expression - computed: true, optional: true, required: false
  private _minCountToCompileExpression?: number; 
  public get minCountToCompileExpression() {
    return this.getNumberAttribute('min_count_to_compile_expression');
  }
  public set minCountToCompileExpression(value: number) {
    this._minCountToCompileExpression = value;
  }
  public resetMinCountToCompileExpression() {
    this._minCountToCompileExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountToCompileExpressionInput() {
    return this._minCountToCompileExpression;
  }

  // min_execution_speed - computed: true, optional: true, required: false
  private _minExecutionSpeed?: number; 
  public get minExecutionSpeed() {
    return this.getNumberAttribute('min_execution_speed');
  }
  public set minExecutionSpeed(value: number) {
    this._minExecutionSpeed = value;
  }
  public resetMinExecutionSpeed() {
    this._minExecutionSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedInput() {
    return this._minExecutionSpeed;
  }

  // min_execution_speed_bytes - computed: true, optional: true, required: false
  private _minExecutionSpeedBytes?: number; 
  public get minExecutionSpeedBytes() {
    return this.getNumberAttribute('min_execution_speed_bytes');
  }
  public set minExecutionSpeedBytes(value: number) {
    this._minExecutionSpeedBytes = value;
  }
  public resetMinExecutionSpeedBytes() {
    this._minExecutionSpeedBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedBytesInput() {
    return this._minExecutionSpeedBytes;
  }

  // min_insert_block_size_bytes - computed: true, optional: true, required: false
  private _minInsertBlockSizeBytes?: number; 
  public get minInsertBlockSizeBytes() {
    return this.getNumberAttribute('min_insert_block_size_bytes');
  }
  public set minInsertBlockSizeBytes(value: number) {
    this._minInsertBlockSizeBytes = value;
  }
  public resetMinInsertBlockSizeBytes() {
    this._minInsertBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeBytesInput() {
    return this._minInsertBlockSizeBytes;
  }

  // min_insert_block_size_rows - computed: true, optional: true, required: false
  private _minInsertBlockSizeRows?: number; 
  public get minInsertBlockSizeRows() {
    return this.getNumberAttribute('min_insert_block_size_rows');
  }
  public set minInsertBlockSizeRows(value: number) {
    this._minInsertBlockSizeRows = value;
  }
  public resetMinInsertBlockSizeRows() {
    this._minInsertBlockSizeRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeRowsInput() {
    return this._minInsertBlockSizeRows;
  }

  // output_format_json_quote_64bit_integers - computed: true, optional: true, required: false
  private _outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuote64BitIntegers() {
    return this.getBooleanAttribute('output_format_json_quote_64bit_integers');
  }
  public set outputFormatJsonQuote64BitIntegers(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuote64BitIntegers = value;
  }
  public resetOutputFormatJsonQuote64BitIntegers() {
    this._outputFormatJsonQuote64BitIntegers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuote64BitIntegersInput() {
    return this._outputFormatJsonQuote64BitIntegers;
  }

  // output_format_json_quote_denormals - computed: true, optional: true, required: false
  private _outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuoteDenormals() {
    return this.getBooleanAttribute('output_format_json_quote_denormals');
  }
  public set outputFormatJsonQuoteDenormals(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuoteDenormals = value;
  }
  public resetOutputFormatJsonQuoteDenormals() {
    this._outputFormatJsonQuoteDenormals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuoteDenormalsInput() {
    return this._outputFormatJsonQuoteDenormals;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // quota_mode - computed: true, optional: true, required: false
  private _quotaMode?: string; 
  public get quotaMode() {
    return this.getStringAttribute('quota_mode');
  }
  public set quotaMode(value: string) {
    this._quotaMode = value;
  }
  public resetQuotaMode() {
    this._quotaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaModeInput() {
    return this._quotaMode;
  }

  // read_overflow_mode - computed: true, optional: true, required: false
  private _readOverflowMode?: string; 
  public get readOverflowMode() {
    return this.getStringAttribute('read_overflow_mode');
  }
  public set readOverflowMode(value: string) {
    this._readOverflowMode = value;
  }
  public resetReadOverflowMode() {
    this._readOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOverflowModeInput() {
    return this._readOverflowMode;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: number; 
  public get readonly() {
    return this.getNumberAttribute('readonly');
  }
  public set readonly(value: number) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // receive_timeout - computed: true, optional: true, required: false
  private _receiveTimeout?: number; 
  public get receiveTimeout() {
    return this.getNumberAttribute('receive_timeout');
  }
  public set receiveTimeout(value: number) {
    this._receiveTimeout = value;
  }
  public resetReceiveTimeout() {
    this._receiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveTimeoutInput() {
    return this._receiveTimeout;
  }

  // replication_alter_partitions_sync - computed: true, optional: true, required: false
  private _replicationAlterPartitionsSync?: number; 
  public get replicationAlterPartitionsSync() {
    return this.getNumberAttribute('replication_alter_partitions_sync');
  }
  public set replicationAlterPartitionsSync(value: number) {
    this._replicationAlterPartitionsSync = value;
  }
  public resetReplicationAlterPartitionsSync() {
    this._replicationAlterPartitionsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAlterPartitionsSyncInput() {
    return this._replicationAlterPartitionsSync;
  }

  // result_overflow_mode - computed: true, optional: true, required: false
  private _resultOverflowMode?: string; 
  public get resultOverflowMode() {
    return this.getStringAttribute('result_overflow_mode');
  }
  public set resultOverflowMode(value: string) {
    this._resultOverflowMode = value;
  }
  public resetResultOverflowMode() {
    this._resultOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOverflowModeInput() {
    return this._resultOverflowMode;
  }

  // select_sequential_consistency - computed: true, optional: true, required: false
  private _selectSequentialConsistency?: boolean | cdktf.IResolvable; 
  public get selectSequentialConsistency() {
    return this.getBooleanAttribute('select_sequential_consistency');
  }
  public set selectSequentialConsistency(value: boolean | cdktf.IResolvable) {
    this._selectSequentialConsistency = value;
  }
  public resetSelectSequentialConsistency() {
    this._selectSequentialConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectSequentialConsistencyInput() {
    return this._selectSequentialConsistency;
  }

  // send_progress_in_http_headers - computed: true, optional: true, required: false
  private _sendProgressInHttpHeaders?: boolean | cdktf.IResolvable; 
  public get sendProgressInHttpHeaders() {
    return this.getBooleanAttribute('send_progress_in_http_headers');
  }
  public set sendProgressInHttpHeaders(value: boolean | cdktf.IResolvable) {
    this._sendProgressInHttpHeaders = value;
  }
  public resetSendProgressInHttpHeaders() {
    this._sendProgressInHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendProgressInHttpHeadersInput() {
    return this._sendProgressInHttpHeaders;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // set_overflow_mode - computed: true, optional: true, required: false
  private _setOverflowMode?: string; 
  public get setOverflowMode() {
    return this.getStringAttribute('set_overflow_mode');
  }
  public set setOverflowMode(value: string) {
    this._setOverflowMode = value;
  }
  public resetSetOverflowMode() {
    this._setOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverflowModeInput() {
    return this._setOverflowMode;
  }

  // skip_unavailable_shards - computed: true, optional: true, required: false
  private _skipUnavailableShards?: boolean | cdktf.IResolvable; 
  public get skipUnavailableShards() {
    return this.getBooleanAttribute('skip_unavailable_shards');
  }
  public set skipUnavailableShards(value: boolean | cdktf.IResolvable) {
    this._skipUnavailableShards = value;
  }
  public resetSkipUnavailableShards() {
    this._skipUnavailableShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnavailableShardsInput() {
    return this._skipUnavailableShards;
  }

  // sort_overflow_mode - computed: true, optional: true, required: false
  private _sortOverflowMode?: string; 
  public get sortOverflowMode() {
    return this.getStringAttribute('sort_overflow_mode');
  }
  public set sortOverflowMode(value: string) {
    this._sortOverflowMode = value;
  }
  public resetSortOverflowMode() {
    this._sortOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOverflowModeInput() {
    return this._sortOverflowMode;
  }

  // timeout_overflow_mode - computed: true, optional: true, required: false
  private _timeoutOverflowMode?: string; 
  public get timeoutOverflowMode() {
    return this.getStringAttribute('timeout_overflow_mode');
  }
  public set timeoutOverflowMode(value: string) {
    this._timeoutOverflowMode = value;
  }
  public resetTimeoutOverflowMode() {
    this._timeoutOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutOverflowModeInput() {
    return this._timeoutOverflowMode;
  }

  // transfer_overflow_mode - computed: true, optional: true, required: false
  private _transferOverflowMode?: string; 
  public get transferOverflowMode() {
    return this.getStringAttribute('transfer_overflow_mode');
  }
  public set transferOverflowMode(value: string) {
    this._transferOverflowMode = value;
  }
  public resetTransferOverflowMode() {
    this._transferOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOverflowModeInput() {
    return this._transferOverflowMode;
  }

  // transform_null_in - computed: true, optional: true, required: false
  private _transformNullIn?: boolean | cdktf.IResolvable; 
  public get transformNullIn() {
    return this.getBooleanAttribute('transform_null_in');
  }
  public set transformNullIn(value: boolean | cdktf.IResolvable) {
    this._transformNullIn = value;
  }
  public resetTransformNullIn() {
    this._transformNullIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNullInInput() {
    return this._transformNullIn;
  }

  // use_uncompressed_cache - computed: true, optional: true, required: false
  private _useUncompressedCache?: boolean | cdktf.IResolvable; 
  public get useUncompressedCache() {
    return this.getBooleanAttribute('use_uncompressed_cache');
  }
  public set useUncompressedCache(value: boolean | cdktf.IResolvable) {
    this._useUncompressedCache = value;
  }
  public resetUseUncompressedCache() {
    this._useUncompressedCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUncompressedCacheInput() {
    return this._useUncompressedCache;
  }
}
export interface MdbClickhouseClusterUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#name MdbClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#password MdbClickhouseCluster#password}
  */
  readonly password: string;
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#permission MdbClickhouseCluster#permission}
  */
  readonly permission?: MdbClickhouseClusterUserPermission[] | cdktf.IResolvable;
  /**
  * quota block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#quota MdbClickhouseCluster#quota}
  */
  readonly quota?: MdbClickhouseClusterUserQuota[] | cdktf.IResolvable;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#settings MdbClickhouseCluster#settings}
  */
  readonly settings?: MdbClickhouseClusterUserSettings;
}

export function mdbClickhouseClusterUserToTerraform(struct?: MdbClickhouseClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.listMapper(mdbClickhouseClusterUserPermissionToTerraform)(struct!.permission),
    quota: cdktf.listMapper(mdbClickhouseClusterUserQuotaToTerraform)(struct!.quota),
    settings: mdbClickhouseClusterUserSettingsToTerraform(struct!.settings),
  }
}

export interface MdbClickhouseClusterZookeeperResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#disk_size MdbClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#disk_type_id MdbClickhouseCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#resource_preset_id MdbClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function mdbClickhouseClusterZookeeperResourcesToTerraform(struct?: MdbClickhouseClusterZookeeperResourcesOutputReference | MdbClickhouseClusterZookeeperResources): any {
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

export class MdbClickhouseClusterZookeeperResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterZookeeperResources | undefined {
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

  public set internalValue(value: MdbClickhouseClusterZookeeperResources | undefined) {
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

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbClickhouseClusterZookeeper {
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster#resources MdbClickhouseCluster#resources}
  */
  readonly resources?: MdbClickhouseClusterZookeeperResources;
}

export function mdbClickhouseClusterZookeeperToTerraform(struct?: MdbClickhouseClusterZookeeperOutputReference | MdbClickhouseClusterZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbClickhouseClusterZookeeperResourcesToTerraform(struct!.resources),
  }
}

export class MdbClickhouseClusterZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbClickhouseClusterZookeeper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseClusterZookeeper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new MdbClickhouseClusterZookeeperResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbClickhouseClusterZookeeperResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster}
*/
export class MdbClickhouseCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_clickhouse_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbClickhouseClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbClickhouseClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_clickhouse_cluster',
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
    this._adminPassword = config.adminPassword;
    this._copySchemaOnNewHosts = config.copySchemaOnNewHosts;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._embeddedKeeper = config.embeddedKeeper;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._sqlDatabaseManagement = config.sqlDatabaseManagement;
    this._sqlUserManagement = config.sqlUserManagement;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._clickhouse.internalValue = config.clickhouse;
    this._cloudStorage.internalValue = config.cloudStorage;
    this._database = config.database;
    this._formatSchema = config.formatSchema;
    this._host = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._mlModel = config.mlModel;
    this._shardGroup = config.shardGroup;
    this._timeouts.internalValue = config.timeouts;
    this._user = config.user;
    this._zookeeper.internalValue = config.zookeeper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // copy_schema_on_new_hosts - computed: false, optional: true, required: false
  private _copySchemaOnNewHosts?: boolean | cdktf.IResolvable; 
  public get copySchemaOnNewHosts() {
    return this.getBooleanAttribute('copy_schema_on_new_hosts');
  }
  public set copySchemaOnNewHosts(value: boolean | cdktf.IResolvable) {
    this._copySchemaOnNewHosts = value;
  }
  public resetCopySchemaOnNewHosts() {
    this._copySchemaOnNewHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySchemaOnNewHostsInput() {
    return this._copySchemaOnNewHosts;
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

  // embedded_keeper - computed: true, optional: true, required: false
  private _embeddedKeeper?: boolean | cdktf.IResolvable; 
  public get embeddedKeeper() {
    return this.getBooleanAttribute('embedded_keeper');
  }
  public set embeddedKeeper(value: boolean | cdktf.IResolvable) {
    this._embeddedKeeper = value;
  }
  public resetEmbeddedKeeper() {
    this._embeddedKeeper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedKeeperInput() {
    return this._embeddedKeeper;
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

  // security_group_ids - computed: true, optional: true, required: false
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

  // sql_database_management - computed: true, optional: true, required: false
  private _sqlDatabaseManagement?: boolean | cdktf.IResolvable; 
  public get sqlDatabaseManagement() {
    return this.getBooleanAttribute('sql_database_management');
  }
  public set sqlDatabaseManagement(value: boolean | cdktf.IResolvable) {
    this._sqlDatabaseManagement = value;
  }
  public resetSqlDatabaseManagement() {
    this._sqlDatabaseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDatabaseManagementInput() {
    return this._sqlDatabaseManagement;
  }

  // sql_user_management - computed: true, optional: true, required: false
  private _sqlUserManagement?: boolean | cdktf.IResolvable; 
  public get sqlUserManagement() {
    return this.getBooleanAttribute('sql_user_management');
  }
  public set sqlUserManagement(value: boolean | cdktf.IResolvable) {
    this._sqlUserManagement = value;
  }
  public resetSqlUserManagement() {
    this._sqlUserManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlUserManagementInput() {
    return this._sqlUserManagement;
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

  // access - computed: false, optional: true, required: false
  private _access = new MdbClickhouseClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbClickhouseClusterAccess) {
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
  private _backupWindowStart = new MdbClickhouseClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbClickhouseClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // clickhouse - computed: false, optional: false, required: true
  private _clickhouse = new MdbClickhouseClusterClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: MdbClickhouseClusterClickhouse) {
    this._clickhouse.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new MdbClickhouseClusterCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: MdbClickhouseClusterCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database?: MdbClickhouseClusterDatabase[] | cdktf.IResolvable; 
  public get database() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('database')));
  }
  public set database(value: MdbClickhouseClusterDatabase[] | cdktf.IResolvable) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // format_schema - computed: false, optional: true, required: false
  private _formatSchema?: MdbClickhouseClusterFormatSchema[] | cdktf.IResolvable; 
  public get formatSchema() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('format_schema')));
  }
  public set formatSchema(value: MdbClickhouseClusterFormatSchema[] | cdktf.IResolvable) {
    this._formatSchema = value;
  }
  public resetFormatSchema() {
    this._formatSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatSchemaInput() {
    return this._formatSchema;
  }

  // host - computed: false, optional: false, required: true
  private _host?: MdbClickhouseClusterHost[] | cdktf.IResolvable; 
  public get host() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host');
  }
  public set host(value: MdbClickhouseClusterHost[] | cdktf.IResolvable) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbClickhouseClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbClickhouseClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // ml_model - computed: false, optional: true, required: false
  private _mlModel?: MdbClickhouseClusterMlModel[] | cdktf.IResolvable; 
  public get mlModel() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ml_model')));
  }
  public set mlModel(value: MdbClickhouseClusterMlModel[] | cdktf.IResolvable) {
    this._mlModel = value;
  }
  public resetMlModel() {
    this._mlModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlModelInput() {
    return this._mlModel;
  }

  // shard_group - computed: false, optional: true, required: false
  private _shardGroup?: MdbClickhouseClusterShardGroup[] | cdktf.IResolvable; 
  public get shardGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('shard_group');
  }
  public set shardGroup(value: MdbClickhouseClusterShardGroup[] | cdktf.IResolvable) {
    this._shardGroup = value;
  }
  public resetShardGroup() {
    this._shardGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardGroupInput() {
    return this._shardGroup;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbClickhouseClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbClickhouseClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: MdbClickhouseClusterUser[] | cdktf.IResolvable; 
  public get user() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('user')));
  }
  public set user(value: MdbClickhouseClusterUser[] | cdktf.IResolvable) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // zookeeper - computed: false, optional: true, required: false
  private _zookeeper = new MdbClickhouseClusterZookeeperOutputReference(this, "zookeeper");
  public get zookeeper() {
    return this._zookeeper;
  }
  public putZookeeper(value: MdbClickhouseClusterZookeeper) {
    this._zookeeper.internalValue = value;
  }
  public resetZookeeper() {
    this._zookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperInput() {
    return this._zookeeper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      copy_schema_on_new_hosts: cdktf.booleanToTerraform(this._copySchemaOnNewHosts),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      embedded_keeper: cdktf.booleanToTerraform(this._embeddedKeeper),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      sql_database_management: cdktf.booleanToTerraform(this._sqlDatabaseManagement),
      sql_user_management: cdktf.booleanToTerraform(this._sqlUserManagement),
      version: cdktf.stringToTerraform(this._version),
      access: mdbClickhouseClusterAccessToTerraform(this._access.internalValue),
      backup_window_start: mdbClickhouseClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      clickhouse: mdbClickhouseClusterClickhouseToTerraform(this._clickhouse.internalValue),
      cloud_storage: mdbClickhouseClusterCloudStorageToTerraform(this._cloudStorage.internalValue),
      database: cdktf.listMapper(mdbClickhouseClusterDatabaseToTerraform)(this._database),
      format_schema: cdktf.listMapper(mdbClickhouseClusterFormatSchemaToTerraform)(this._formatSchema),
      host: cdktf.listMapper(mdbClickhouseClusterHostToTerraform)(this._host),
      maintenance_window: mdbClickhouseClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      ml_model: cdktf.listMapper(mdbClickhouseClusterMlModelToTerraform)(this._mlModel),
      shard_group: cdktf.listMapper(mdbClickhouseClusterShardGroupToTerraform)(this._shardGroup),
      timeouts: mdbClickhouseClusterTimeoutsToTerraform(this._timeouts.internalValue),
      user: cdktf.listMapper(mdbClickhouseClusterUserToTerraform)(this._user),
      zookeeper: mdbClickhouseClusterZookeeperToTerraform(this._zookeeper.internalValue),
    };
  }
}
