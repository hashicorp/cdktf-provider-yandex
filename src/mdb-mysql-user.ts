// https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbMysqlUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#authentication_plugin MdbMysqlUser#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#cluster_id MdbMysqlUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#global_permissions MdbMysqlUser#global_permissions}
  */
  readonly globalPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#id MdbMysqlUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#name MdbMysqlUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#password MdbMysqlUser#password}
  */
  readonly password: string;
  /**
  * connection_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#connection_limits MdbMysqlUser#connection_limits}
  */
  readonly connectionLimits?: MdbMysqlUserConnectionLimits;
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#permission MdbMysqlUser#permission}
  */
  readonly permission?: MdbMysqlUserPermission[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#timeouts MdbMysqlUser#timeouts}
  */
  readonly timeouts?: MdbMysqlUserTimeouts;
}
export interface MdbMysqlUserConnectionLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#max_connections_per_hour MdbMysqlUser#max_connections_per_hour}
  */
  readonly maxConnectionsPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#max_questions_per_hour MdbMysqlUser#max_questions_per_hour}
  */
  readonly maxQuestionsPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#max_updates_per_hour MdbMysqlUser#max_updates_per_hour}
  */
  readonly maxUpdatesPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#max_user_connections MdbMysqlUser#max_user_connections}
  */
  readonly maxUserConnections?: number;
}

export function mdbMysqlUserConnectionLimitsToTerraform(struct?: MdbMysqlUserConnectionLimitsOutputReference | MdbMysqlUserConnectionLimits): any {
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

export class MdbMysqlUserConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlUserConnectionLimits | undefined {
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

  public set internalValue(value: MdbMysqlUserConnectionLimits | undefined) {
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
export interface MdbMysqlUserPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#database_name MdbMysqlUser#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#roles MdbMysqlUser#roles}
  */
  readonly roles?: string[];
}

export function mdbMysqlUserPermissionToTerraform(struct?: MdbMysqlUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}

export class MdbMysqlUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlUserPermission | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbMysqlUserPermission | cdktf.IResolvable | undefined) {
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

export class MdbMysqlUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlUserPermission[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlUserPermissionOutputReference {
    return new MdbMysqlUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#create MdbMysqlUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#delete MdbMysqlUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#read MdbMysqlUser#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user#update MdbMysqlUser#update}
  */
  readonly update?: string;
}

export function mdbMysqlUserTimeoutsToTerraform(struct?: MdbMysqlUserTimeoutsOutputReference | MdbMysqlUserTimeouts | cdktf.IResolvable): any {
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

export class MdbMysqlUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbMysqlUserTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user yandex_mdb_mysql_user}
*/
export class MdbMysqlUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_mysql_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/mdb_mysql_user yandex_mdb_mysql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbMysqlUserConfig
  */
  public constructor(scope: Construct, id: string, config: MdbMysqlUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_mysql_user',
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
    this._authenticationPlugin = config.authenticationPlugin;
    this._clusterId = config.clusterId;
    this._globalPermissions = config.globalPermissions;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._connectionLimits.internalValue = config.connectionLimits;
    this._permission.internalValue = config.permission;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _connectionLimits = new MdbMysqlUserConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: MdbMysqlUserConnectionLimits) {
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
  private _permission = new MdbMysqlUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbMysqlUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbMysqlUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbMysqlUserTimeouts) {
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
      authentication_plugin: cdktf.stringToTerraform(this._authenticationPlugin),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      global_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalPermissions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      connection_limits: mdbMysqlUserConnectionLimitsToTerraform(this._connectionLimits.internalValue),
      permission: cdktf.listMapper(mdbMysqlUserPermissionToTerraform, true)(this._permission.internalValue),
      timeouts: mdbMysqlUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
