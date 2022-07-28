// https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbMysqlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#allow_regeneration_host MdbMysqlCluster#allow_regeneration_host}
  */
  readonly allowRegenerationHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#deletion_protection MdbMysqlCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#description MdbMysqlCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#environment MdbMysqlCluster#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#folder_id MdbMysqlCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#host_group_ids MdbMysqlCluster#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#id MdbMysqlCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#labels MdbMysqlCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#mysql_config MdbMysqlCluster#mysql_config}
  */
  readonly mysqlConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#network_id MdbMysqlCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#security_group_ids MdbMysqlCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#version MdbMysqlCluster#version}
  */
  readonly version: string;
  /**
  * access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#access MdbMysqlCluster#access}
  */
  readonly access?: MdbMysqlClusterAccess;
  /**
  * backup_window_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#backup_window_start MdbMysqlCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbMysqlClusterBackupWindowStart;
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#database MdbMysqlCluster#database}
  */
  readonly database?: MdbMysqlClusterDatabase[] | cdktf.IResolvable;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#host MdbMysqlCluster#host}
  */
  readonly host: MdbMysqlClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#maintenance_window MdbMysqlCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbMysqlClusterMaintenanceWindow;
  /**
  * performance_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#performance_diagnostics MdbMysqlCluster#performance_diagnostics}
  */
  readonly performanceDiagnostics?: MdbMysqlClusterPerformanceDiagnostics;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#resources MdbMysqlCluster#resources}
  */
  readonly resources: MdbMysqlClusterResources;
  /**
  * restore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#restore MdbMysqlCluster#restore}
  */
  readonly restore?: MdbMysqlClusterRestore;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#timeouts MdbMysqlCluster#timeouts}
  */
  readonly timeouts?: MdbMysqlClusterTimeouts;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#user MdbMysqlCluster#user}
  */
  readonly user?: MdbMysqlClusterUser[] | cdktf.IResolvable;
}
export interface MdbMysqlClusterAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#data_lens MdbMysqlCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#web_sql MdbMysqlCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbMysqlClusterAccessToTerraform(struct?: MdbMysqlClusterAccessOutputReference | MdbMysqlClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}

export class MdbMysqlClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterAccess | undefined {
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

  public set internalValue(value: MdbMysqlClusterAccess | undefined) {
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
export interface MdbMysqlClusterBackupWindowStart {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#hours MdbMysqlCluster#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#minutes MdbMysqlCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbMysqlClusterBackupWindowStartToTerraform(struct?: MdbMysqlClusterBackupWindowStartOutputReference | MdbMysqlClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}

export class MdbMysqlClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterBackupWindowStart | undefined {
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

  public set internalValue(value: MdbMysqlClusterBackupWindowStart | undefined) {
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
export interface MdbMysqlClusterDatabase {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
}

export function mdbMysqlClusterDatabaseToTerraform(struct?: MdbMysqlClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MdbMysqlClusterDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlClusterDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class MdbMysqlClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterDatabase[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlClusterDatabaseOutputReference {
    return new MdbMysqlClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterHost {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#assign_public_ip MdbMysqlCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#backup_priority MdbMysqlCluster#backup_priority}
  */
  readonly backupPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#priority MdbMysqlCluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#replication_source_name MdbMysqlCluster#replication_source_name}
  */
  readonly replicationSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#subnet_id MdbMysqlCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#zone MdbMysqlCluster#zone}
  */
  readonly zone: string;
}

export function mdbMysqlClusterHostToTerraform(struct?: MdbMysqlClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    backup_priority: cdktf.numberToTerraform(struct!.backupPriority),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    replication_source_name: cdktf.stringToTerraform(struct!.replicationSourceName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class MdbMysqlClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._backupPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPriority = this._backupPriority;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._replicationSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSourceName = this._replicationSourceName;
    }
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

  public set internalValue(value: MdbMysqlClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._backupPriority = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._replicationSourceName = undefined;
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
      this._assignPublicIp = value.assignPublicIp;
      this._backupPriority = value.backupPriority;
      this._name = value.name;
      this._priority = value.priority;
      this._replicationSourceName = value.replicationSourceName;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // backup_priority - computed: false, optional: true, required: false
  private _backupPriority?: number; 
  public get backupPriority() {
    return this.getNumberAttribute('backup_priority');
  }
  public set backupPriority(value: number) {
    this._backupPriority = value;
  }
  public resetBackupPriority() {
    this._backupPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPriorityInput() {
    return this._backupPriority;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // name - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
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

  // replication_source - computed: true, optional: false, required: false
  public get replicationSource() {
    return this.getStringAttribute('replication_source');
  }

  // replication_source_name - computed: false, optional: true, required: false
  private _replicationSourceName?: string; 
  public get replicationSourceName() {
    return this.getStringAttribute('replication_source_name');
  }
  public set replicationSourceName(value: string) {
    this._replicationSourceName = value;
  }
  public resetReplicationSourceName() {
    this._replicationSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceNameInput() {
    return this._replicationSourceName;
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
}

export class MdbMysqlClusterHostList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterHost[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlClusterHostOutputReference {
    return new MdbMysqlClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#day MdbMysqlCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#hour MdbMysqlCluster#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#type MdbMysqlCluster#type}
  */
  readonly type: string;
}

export function mdbMysqlClusterMaintenanceWindowToTerraform(struct?: MdbMysqlClusterMaintenanceWindowOutputReference | MdbMysqlClusterMaintenanceWindow): any {
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

export class MdbMysqlClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterMaintenanceWindow | undefined {
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

  public set internalValue(value: MdbMysqlClusterMaintenanceWindow | undefined) {
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
export interface MdbMysqlClusterPerformanceDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#enabled MdbMysqlCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#sessions_sampling_interval MdbMysqlCluster#sessions_sampling_interval}
  */
  readonly sessionsSamplingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#statements_sampling_interval MdbMysqlCluster#statements_sampling_interval}
  */
  readonly statementsSamplingInterval: number;
}

export function mdbMysqlClusterPerformanceDiagnosticsToTerraform(struct?: MdbMysqlClusterPerformanceDiagnosticsOutputReference | MdbMysqlClusterPerformanceDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sessions_sampling_interval: cdktf.numberToTerraform(struct!.sessionsSamplingInterval),
    statements_sampling_interval: cdktf.numberToTerraform(struct!.statementsSamplingInterval),
  }
}

export class MdbMysqlClusterPerformanceDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterPerformanceDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sessionsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsSamplingInterval = this._sessionsSamplingInterval;
    }
    if (this._statementsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementsSamplingInterval = this._statementsSamplingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterPerformanceDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._sessionsSamplingInterval = undefined;
      this._statementsSamplingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._sessionsSamplingInterval = value.sessionsSamplingInterval;
      this._statementsSamplingInterval = value.statementsSamplingInterval;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sessions_sampling_interval - computed: false, optional: false, required: true
  private _sessionsSamplingInterval?: number; 
  public get sessionsSamplingInterval() {
    return this.getNumberAttribute('sessions_sampling_interval');
  }
  public set sessionsSamplingInterval(value: number) {
    this._sessionsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsSamplingIntervalInput() {
    return this._sessionsSamplingInterval;
  }

  // statements_sampling_interval - computed: false, optional: false, required: true
  private _statementsSamplingInterval?: number; 
  public get statementsSamplingInterval() {
    return this.getNumberAttribute('statements_sampling_interval');
  }
  public set statementsSamplingInterval(value: number) {
    this._statementsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsSamplingIntervalInput() {
    return this._statementsSamplingInterval;
  }
}
export interface MdbMysqlClusterResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#disk_size MdbMysqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#disk_type_id MdbMysqlCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#resource_preset_id MdbMysqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbMysqlClusterResourcesToTerraform(struct?: MdbMysqlClusterResourcesOutputReference | MdbMysqlClusterResources): any {
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

export class MdbMysqlClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterResources | undefined {
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

  public set internalValue(value: MdbMysqlClusterResources | undefined) {
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
export interface MdbMysqlClusterRestore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#backup_id MdbMysqlCluster#backup_id}
  */
  readonly backupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#time MdbMysqlCluster#time}
  */
  readonly time?: string;
}

export function mdbMysqlClusterRestoreToTerraform(struct?: MdbMysqlClusterRestoreOutputReference | MdbMysqlClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export class MdbMysqlClusterRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._time = value.time;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface MdbMysqlClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#create MdbMysqlCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#delete MdbMysqlCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#update MdbMysqlCluster#update}
  */
  readonly update?: string;
}

export function mdbMysqlClusterTimeoutsToTerraform(struct?: MdbMysqlClusterTimeoutsOutputReference | MdbMysqlClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbMysqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbMysqlClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface MdbMysqlClusterUserConnectionLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#max_connections_per_hour MdbMysqlCluster#max_connections_per_hour}
  */
  readonly maxConnectionsPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#max_questions_per_hour MdbMysqlCluster#max_questions_per_hour}
  */
  readonly maxQuestionsPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#max_updates_per_hour MdbMysqlCluster#max_updates_per_hour}
  */
  readonly maxUpdatesPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#max_user_connections MdbMysqlCluster#max_user_connections}
  */
  readonly maxUserConnections?: number;
}

export function mdbMysqlClusterUserConnectionLimitsToTerraform(struct?: MdbMysqlClusterUserConnectionLimitsOutputReference | MdbMysqlClusterUserConnectionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections_per_hour: cdktf.numberToTerraform(struct!.maxConnectionsPerHour),
    max_questions_per_hour: cdktf.numberToTerraform(struct!.maxQuestionsPerHour),
    max_updates_per_hour: cdktf.numberToTerraform(struct!.maxUpdatesPerHour),
    max_user_connections: cdktf.numberToTerraform(struct!.maxUserConnections),
  }
}

export class MdbMysqlClusterUserConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterUserConnectionLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerHour = this._maxConnectionsPerHour;
    }
    if (this._maxQuestionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuestionsPerHour = this._maxQuestionsPerHour;
    }
    if (this._maxUpdatesPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpdatesPerHour = this._maxUpdatesPerHour;
    }
    if (this._maxUserConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserConnections = this._maxUserConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUserConnectionLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnectionsPerHour = undefined;
      this._maxQuestionsPerHour = undefined;
      this._maxUpdatesPerHour = undefined;
      this._maxUserConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConnectionsPerHour = value.maxConnectionsPerHour;
      this._maxQuestionsPerHour = value.maxQuestionsPerHour;
      this._maxUpdatesPerHour = value.maxUpdatesPerHour;
      this._maxUserConnections = value.maxUserConnections;
    }
  }

  // max_connections_per_hour - computed: false, optional: true, required: false
  private _maxConnectionsPerHour?: number; 
  public get maxConnectionsPerHour() {
    return this.getNumberAttribute('max_connections_per_hour');
  }
  public set maxConnectionsPerHour(value: number) {
    this._maxConnectionsPerHour = value;
  }
  public resetMaxConnectionsPerHour() {
    this._maxConnectionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerHourInput() {
    return this._maxConnectionsPerHour;
  }

  // max_questions_per_hour - computed: false, optional: true, required: false
  private _maxQuestionsPerHour?: number; 
  public get maxQuestionsPerHour() {
    return this.getNumberAttribute('max_questions_per_hour');
  }
  public set maxQuestionsPerHour(value: number) {
    this._maxQuestionsPerHour = value;
  }
  public resetMaxQuestionsPerHour() {
    this._maxQuestionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuestionsPerHourInput() {
    return this._maxQuestionsPerHour;
  }

  // max_updates_per_hour - computed: false, optional: true, required: false
  private _maxUpdatesPerHour?: number; 
  public get maxUpdatesPerHour() {
    return this.getNumberAttribute('max_updates_per_hour');
  }
  public set maxUpdatesPerHour(value: number) {
    this._maxUpdatesPerHour = value;
  }
  public resetMaxUpdatesPerHour() {
    this._maxUpdatesPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdatesPerHourInput() {
    return this._maxUpdatesPerHour;
  }

  // max_user_connections - computed: false, optional: true, required: false
  private _maxUserConnections?: number; 
  public get maxUserConnections() {
    return this.getNumberAttribute('max_user_connections');
  }
  public set maxUserConnections(value: number) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
  }
}
export interface MdbMysqlClusterUserPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#database_name MdbMysqlCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#roles MdbMysqlCluster#roles}
  */
  readonly roles?: string[];
}

export function mdbMysqlClusterUserPermissionToTerraform(struct?: MdbMysqlClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}

export class MdbMysqlClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roles = value.roles;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class MdbMysqlClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlClusterUserPermissionOutputReference {
    return new MdbMysqlClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#authentication_plugin MdbMysqlCluster#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#global_permissions MdbMysqlCluster#global_permissions}
  */
  readonly globalPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#password MdbMysqlCluster#password}
  */
  readonly password: string;
  /**
  * connection_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#connection_limits MdbMysqlCluster#connection_limits}
  */
  readonly connectionLimits?: MdbMysqlClusterUserConnectionLimits;
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster#permission MdbMysqlCluster#permission}
  */
  readonly permission?: MdbMysqlClusterUserPermission[] | cdktf.IResolvable;
}

export function mdbMysqlClusterUserToTerraform(struct?: MdbMysqlClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_plugin: cdktf.stringToTerraform(struct!.authenticationPlugin),
    global_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalPermissions),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    connection_limits: mdbMysqlClusterUserConnectionLimitsToTerraform(struct!.connectionLimits),
    permission: cdktf.listMapper(mdbMysqlClusterUserPermissionToTerraform, true)(struct!.permission),
  }
}

export class MdbMysqlClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPlugin = this._authenticationPlugin;
    }
    if (this._globalPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPermissions = this._globalPermissions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._connectionLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimits = this._connectionLimits?.internalValue;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationPlugin = undefined;
      this._globalPermissions = undefined;
      this._name = undefined;
      this._password = undefined;
      this._connectionLimits.internalValue = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationPlugin = value.authenticationPlugin;
      this._globalPermissions = value.globalPermissions;
      this._name = value.name;
      this._password = value.password;
      this._connectionLimits.internalValue = value.connectionLimits;
      this._permission.internalValue = value.permission;
    }
  }

  // authentication_plugin - computed: true, optional: true, required: false
  private _authenticationPlugin?: string; 
  public get authenticationPlugin() {
    return this.getStringAttribute('authentication_plugin');
  }
  public set authenticationPlugin(value: string) {
    this._authenticationPlugin = value;
  }
  public resetAuthenticationPlugin() {
    this._authenticationPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPluginInput() {
    return this._authenticationPlugin;
  }

  // global_permissions - computed: true, optional: true, required: false
  private _globalPermissions?: string[]; 
  public get globalPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('global_permissions'));
  }
  public set globalPermissions(value: string[]) {
    this._globalPermissions = value;
  }
  public resetGlobalPermissions() {
    this._globalPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPermissionsInput() {
    return this._globalPermissions;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // connection_limits - computed: false, optional: true, required: false
  private _connectionLimits = new MdbMysqlClusterUserConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: MdbMysqlClusterUserConnectionLimits) {
    this._connectionLimits.internalValue = value;
  }
  public resetConnectionLimits() {
    this._connectionLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitsInput() {
    return this._connectionLimits.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new MdbMysqlClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbMysqlClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}

export class MdbMysqlClusterUserList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterUser[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlClusterUserOutputReference {
    return new MdbMysqlClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster yandex_mdb_mysql_cluster}
*/
export class MdbMysqlCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_mysql_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_cluster yandex_mdb_mysql_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbMysqlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbMysqlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_mysql_cluster',
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
    this._allowRegenerationHost = config.allowRegenerationHost;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._labels = config.labels;
    this._mysqlConfig = config.mysqlConfig;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._database.internalValue = config.database;
    this._host.internalValue = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._performanceDiagnostics.internalValue = config.performanceDiagnostics;
    this._resources.internalValue = config.resources;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_regeneration_host - computed: false, optional: true, required: false
  private _allowRegenerationHost?: boolean | cdktf.IResolvable; 
  public get allowRegenerationHost() {
    return this.getBooleanAttribute('allow_regeneration_host');
  }
  public set allowRegenerationHost(value: boolean | cdktf.IResolvable) {
    this._allowRegenerationHost = value;
  }
  public resetAllowRegenerationHost() {
    this._allowRegenerationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRegenerationHostInput() {
    return this._allowRegenerationHost;
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

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host_group_ids - computed: true, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // mysql_config - computed: true, optional: true, required: false
  private _mysqlConfig?: { [key: string]: string }; 
  public get mysqlConfig() {
    return this.getStringMapAttribute('mysql_config');
  }
  public set mysqlConfig(value: { [key: string]: string }) {
    this._mysqlConfig = value;
  }
  public resetMysqlConfig() {
    this._mysqlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigInput() {
    return this._mysqlConfig;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // access - computed: false, optional: true, required: false
  private _access = new MdbMysqlClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbMysqlClusterAccess) {
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
  private _backupWindowStart = new MdbMysqlClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbMysqlClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new MdbMysqlClusterDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: MdbMysqlClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host = new MdbMysqlClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: MdbMysqlClusterHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbMysqlClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbMysqlClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // performance_diagnostics - computed: false, optional: true, required: false
  private _performanceDiagnostics = new MdbMysqlClusterPerformanceDiagnosticsOutputReference(this, "performance_diagnostics");
  public get performanceDiagnostics() {
    return this._performanceDiagnostics;
  }
  public putPerformanceDiagnostics(value: MdbMysqlClusterPerformanceDiagnostics) {
    this._performanceDiagnostics.internalValue = value;
  }
  public resetPerformanceDiagnostics() {
    this._performanceDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDiagnosticsInput() {
    return this._performanceDiagnostics.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbMysqlClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbMysqlClusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new MdbMysqlClusterRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: MdbMysqlClusterRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbMysqlClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbMysqlClusterTimeouts) {
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
  private _user = new MdbMysqlClusterUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: MdbMysqlClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_regeneration_host: cdktf.booleanToTerraform(this._allowRegenerationHost),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mysql_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._mysqlConfig),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      version: cdktf.stringToTerraform(this._version),
      access: mdbMysqlClusterAccessToTerraform(this._access.internalValue),
      backup_window_start: mdbMysqlClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      database: cdktf.listMapper(mdbMysqlClusterDatabaseToTerraform, true)(this._database.internalValue),
      host: cdktf.listMapper(mdbMysqlClusterHostToTerraform, true)(this._host.internalValue),
      maintenance_window: mdbMysqlClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      performance_diagnostics: mdbMysqlClusterPerformanceDiagnosticsToTerraform(this._performanceDiagnostics.internalValue),
      resources: mdbMysqlClusterResourcesToTerraform(this._resources.internalValue),
      restore: mdbMysqlClusterRestoreToTerraform(this._restore.internalValue),
      timeouts: mdbMysqlClusterTimeoutsToTerraform(this._timeouts.internalValue),
      user: cdktf.listMapper(mdbMysqlClusterUserToTerraform, true)(this._user.internalValue),
    };
  }
}
