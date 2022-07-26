// https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatatransferEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#description DatatransferEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#folder_id DatatransferEndpoint#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#id DatatransferEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#labels DatatransferEndpoint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#settings DatatransferEndpoint#settings}
  */
  readonly settings?: DatatransferEndpointSettings;
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._name = value.name;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference {
    return new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#http_port DatatransferEndpoint#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#native_port DatatransferEndpoint#native_port}
  */
  readonly nativePort?: number;
  /**
  * shards block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#shards DatatransferEndpoint#shards}
  */
  readonly shards?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    native_port: cdktf.numberToTerraform(struct!.nativePort),
    shards: cdktf.listMapper(datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToTerraform, true)(struct!.shards),
    tls_mode: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._nativePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativePort = this._nativePort;
    }
    if (this._shards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards?.internalValue;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._nativePort = undefined;
      this._shards.internalValue = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._nativePort = value.nativePort;
      this._shards.internalValue = value.shards;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // native_port - computed: true, optional: true, required: false
  private _nativePort?: number; 
  public get nativePort() {
    return this.getNumberAttribute('native_port');
  }
  public set nativePort(value: number) {
    this._nativePort = value;
  }
  public resetNativePort() {
    this._nativePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativePortInput() {
    return this._nativePort;
  }

  // shards - computed: false, optional: true, required: false
  private _shards = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }
  public putShards(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable) {
    this._shards.internalValue = value;
  }
  public resetShards() {
    this._shards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards.internalValue;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnection {
  /**
  * connection_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference | DatatransferEndpointSettingsClickhouseSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#exclude_tables DatatransferEndpoint#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#include_tables DatatransferEndpoint#include_tables}
  */
  readonly includeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsClickhouseSourceConnection;
}

export function datatransferEndpointSettingsClickhouseSourceToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceOutputReference | DatatransferEndpointSettingsClickhouseSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connection: datatransferEndpointSettingsClickhouseSourceConnectionToTerraform(struct!.connection),
  }
}

export class DatatransferEndpointSettingsClickhouseSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._connection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._connection.internalValue = value.connection;
    }
  }

  // exclude_tables - computed: true, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: true, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsClickhouseSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetAltNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#from_name DatatransferEndpoint#from_name}
  */
  readonly fromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#to_name DatatransferEndpoint#to_name}
  */
  readonly toName?: string;
}

export function datatransferEndpointSettingsClickhouseTargetAltNamesToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromName = this._fromName;
    }
    if (this._toName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toName = this._toName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromName = undefined;
      this._toName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromName = value.fromName;
      this._toName = value.toName;
    }
  }

  // from_name - computed: true, optional: true, required: false
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  public resetFromName() {
    this._fromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // to_name - computed: true, optional: true, required: false
  private _toName?: string; 
  public get toName() {
    return this.getStringAttribute('to_name');
  }
  public set toName(value: string) {
    this._toName = value;
  }
  public resetToName() {
    this._toName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNameInput() {
    return this._toName;
  }
}

export class DatatransferEndpointSettingsClickhouseTargetAltNamesList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference {
    return new DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._name = value.name;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference {
    return new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#http_port DatatransferEndpoint#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#native_port DatatransferEndpoint#native_port}
  */
  readonly nativePort?: number;
  /**
  * shards block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#shards DatatransferEndpoint#shards}
  */
  readonly shards?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    native_port: cdktf.numberToTerraform(struct!.nativePort),
    shards: cdktf.listMapper(datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToTerraform, true)(struct!.shards),
    tls_mode: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._nativePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativePort = this._nativePort;
    }
    if (this._shards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards?.internalValue;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._nativePort = undefined;
      this._shards.internalValue = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._nativePort = value.nativePort;
      this._shards.internalValue = value.shards;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // native_port - computed: true, optional: true, required: false
  private _nativePort?: number; 
  public get nativePort() {
    return this.getNumberAttribute('native_port');
  }
  public set nativePort(value: number) {
    this._nativePort = value;
  }
  public resetNativePort() {
    this._nativePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativePortInput() {
    return this._nativePort;
  }

  // shards - computed: false, optional: true, required: false
  private _shards = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }
  public putShards(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable) {
    this._shards.internalValue = value;
  }
  public resetShards() {
    this._shards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards.internalValue;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnection {
  /**
  * connection_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference | DatatransferEndpointSettingsClickhouseTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#column_name DatatransferEndpoint#column_name}
  */
  readonly columnName?: string;
}

export function datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingTransferId {
}

export function datatransferEndpointSettingsClickhouseTargetShardingTransferIdToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingTransferId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingTransferId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingTransferId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetSharding {
  /**
  * column_value_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#column_value_hash DatatransferEndpoint#column_value_hash}
  */
  readonly columnValueHash?: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash;
  /**
  * transfer_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#transfer_id DatatransferEndpoint#transfer_id}
  */
  readonly transferId?: DatatransferEndpointSettingsClickhouseTargetShardingTransferId;
}

export function datatransferEndpointSettingsClickhouseTargetShardingToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingOutputReference | DatatransferEndpointSettingsClickhouseTargetSharding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_value_hash: datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToTerraform(struct!.columnValueHash),
    transfer_id: datatransferEndpointSettingsClickhouseTargetShardingTransferIdToTerraform(struct!.transferId),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetShardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetSharding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnValueHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnValueHash = this._columnValueHash?.internalValue;
    }
    if (this._transferId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferId = this._transferId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetSharding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnValueHash.internalValue = undefined;
      this._transferId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnValueHash.internalValue = value.columnValueHash;
      this._transferId.internalValue = value.transferId;
    }
  }

  // column_value_hash - computed: false, optional: true, required: false
  private _columnValueHash = new DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference(this, "column_value_hash");
  public get columnValueHash() {
    return this._columnValueHash;
  }
  public putColumnValueHash(value: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash) {
    this._columnValueHash.internalValue = value;
  }
  public resetColumnValueHash() {
    this._columnValueHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnValueHashInput() {
    return this._columnValueHash.internalValue;
  }

  // transfer_id - computed: false, optional: true, required: false
  private _transferId = new DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference(this, "transfer_id");
  public get transferId() {
    return this._transferId;
  }
  public putTransferId(value: DatatransferEndpointSettingsClickhouseTargetShardingTransferId) {
    this._transferId.internalValue = value;
  }
  public resetTransferId() {
    this._transferId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferIdInput() {
    return this._transferId.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#clickhouse_cluster_name DatatransferEndpoint#clickhouse_cluster_name}
  */
  readonly clickhouseClusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * alt_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#alt_names DatatransferEndpoint#alt_names}
  */
  readonly altNames?: DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsClickhouseTargetConnection;
  /**
  * sharding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#sharding DatatransferEndpoint#sharding}
  */
  readonly sharding?: DatatransferEndpointSettingsClickhouseTargetSharding;
}

export function datatransferEndpointSettingsClickhouseTargetToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetOutputReference | DatatransferEndpointSettingsClickhouseTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    clickhouse_cluster_name: cdktf.stringToTerraform(struct!.clickhouseClusterName),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    alt_names: cdktf.listMapper(datatransferEndpointSettingsClickhouseTargetAltNamesToTerraform, true)(struct!.altNames),
    connection: datatransferEndpointSettingsClickhouseTargetConnectionToTerraform(struct!.connection),
    sharding: datatransferEndpointSettingsClickhouseTargetShardingToTerraform(struct!.sharding),
  }
}

export class DatatransferEndpointSettingsClickhouseTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._clickhouseClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseClusterName = this._clickhouseClusterName;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._altNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.altNames = this._altNames?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._sharding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharding = this._sharding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._clickhouseClusterName = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._altNames.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._sharding.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._clickhouseClusterName = value.clickhouseClusterName;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._altNames.internalValue = value.altNames;
      this._connection.internalValue = value.connection;
      this._sharding.internalValue = value.sharding;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // clickhouse_cluster_name - computed: true, optional: true, required: false
  private _clickhouseClusterName?: string; 
  public get clickhouseClusterName() {
    return this.getStringAttribute('clickhouse_cluster_name');
  }
  public set clickhouseClusterName(value: string) {
    this._clickhouseClusterName = value;
  }
  public resetClickhouseClusterName() {
    this._clickhouseClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseClusterNameInput() {
    return this._clickhouseClusterName;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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

  // alt_names - computed: false, optional: true, required: false
  private _altNames = new DatatransferEndpointSettingsClickhouseTargetAltNamesList(this, "alt_names", false);
  public get altNames() {
    return this._altNames;
  }
  public putAltNames(value: DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable) {
    this._altNames.internalValue = value;
  }
  public resetAltNames() {
    this._altNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsClickhouseTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // sharding - computed: false, optional: true, required: false
  private _sharding = new DatatransferEndpointSettingsClickhouseTargetShardingOutputReference(this, "sharding");
  public get sharding() {
    return this._sharding;
  }
  public putSharding(value: DatatransferEndpointSettingsClickhouseTargetSharding) {
    this._sharding.internalValue = value;
  }
  public resetSharding() {
    this._sharding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingInput() {
    return this._sharding.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceCollections {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#collection_name DatatransferEndpoint#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database_name DatatransferEndpoint#database_name}
  */
  readonly databaseName?: string;
}

export function datatransferEndpointSettingsMongoSourceCollectionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}

export class DatatransferEndpointSettingsMongoSourceCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
    }
  }

  // collection_name - computed: true, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class DatatransferEndpointSettingsMongoSourceCollectionsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsMongoSourceCollectionsOutputReference {
    return new DatatransferEndpointSettingsMongoSourceCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#replica_set DatatransferEndpoint#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    tls_mode: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._replicaSet = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._replicaSet = value.replicaSet;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // replica_set - computed: true, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#auth_source DatatransferEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authSource = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authSource = value.authSource;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnection {
  /**
  * connection_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions;
}

export function datatransferEndpointSettingsMongoSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionOutputReference | DatatransferEndpointSettingsMongoSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}

export class DatatransferEndpointSettingsMongoSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceExcludedCollections {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#collection_name DatatransferEndpoint#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database_name DatatransferEndpoint#database_name}
  */
  readonly databaseName?: string;
}

export function datatransferEndpointSettingsMongoSourceExcludedCollectionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}

export class DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
    }
  }

  // collection_name - computed: true, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class DatatransferEndpointSettingsMongoSourceExcludedCollectionsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference {
    return new DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsMongoSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#secondary_preferred_mode DatatransferEndpoint#secondary_preferred_mode}
  */
  readonly secondaryPreferredMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * collections block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#collections DatatransferEndpoint#collections}
  */
  readonly collections?: DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMongoSourceConnection;
  /**
  * excluded_collections block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#excluded_collections DatatransferEndpoint#excluded_collections}
  */
  readonly excludedCollections?: DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsMongoSourceToTerraform(struct?: DatatransferEndpointSettingsMongoSourceOutputReference | DatatransferEndpointSettingsMongoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secondary_preferred_mode: cdktf.booleanToTerraform(struct!.secondaryPreferredMode),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    collections: cdktf.listMapper(datatransferEndpointSettingsMongoSourceCollectionsToTerraform, true)(struct!.collections),
    connection: datatransferEndpointSettingsMongoSourceConnectionToTerraform(struct!.connection),
    excluded_collections: cdktf.listMapper(datatransferEndpointSettingsMongoSourceExcludedCollectionsToTerraform, true)(struct!.excludedCollections),
  }
}

export class DatatransferEndpointSettingsMongoSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secondaryPreferredMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPreferredMode = this._secondaryPreferredMode;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._excludedCollections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCollections = this._excludedCollections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secondaryPreferredMode = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._collections.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._excludedCollections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secondaryPreferredMode = value.secondaryPreferredMode;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._collections.internalValue = value.collections;
      this._connection.internalValue = value.connection;
      this._excludedCollections.internalValue = value.excludedCollections;
    }
  }

  // secondary_preferred_mode - computed: true, optional: true, required: false
  private _secondaryPreferredMode?: boolean | cdktf.IResolvable; 
  public get secondaryPreferredMode() {
    return this.getBooleanAttribute('secondary_preferred_mode');
  }
  public set secondaryPreferredMode(value: boolean | cdktf.IResolvable) {
    this._secondaryPreferredMode = value;
  }
  public resetSecondaryPreferredMode() {
    this._secondaryPreferredMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPreferredModeInput() {
    return this._secondaryPreferredMode;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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

  // collections - computed: false, optional: true, required: false
  private _collections = new DatatransferEndpointSettingsMongoSourceCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMongoSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMongoSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // excluded_collections - computed: false, optional: true, required: false
  private _excludedCollections = new DatatransferEndpointSettingsMongoSourceExcludedCollectionsList(this, "excluded_collections", false);
  public get excludedCollections() {
    return this._excludedCollections;
  }
  public putExcludedCollections(value: DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable) {
    this._excludedCollections.internalValue = value;
  }
  public resetExcludedCollections() {
    this._excludedCollections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCollectionsInput() {
    return this._excludedCollections.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#replica_set DatatransferEndpoint#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    tls_mode: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._replicaSet = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._replicaSet = value.replicaSet;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // replica_set - computed: true, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#auth_source DatatransferEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authSource = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authSource = value.authSource;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnection {
  /**
  * connection_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions;
}

export function datatransferEndpointSettingsMongoTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionOutputReference | DatatransferEndpointSettingsMongoTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}

export class DatatransferEndpointSettingsMongoTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMongoTargetConnection;
}

export function datatransferEndpointSettingsMongoTargetToTerraform(struct?: DatatransferEndpointSettingsMongoTargetOutputReference | DatatransferEndpointSettingsMongoTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connection: datatransferEndpointSettingsMongoTargetConnectionToTerraform(struct!.connection),
  }
}

export class DatatransferEndpointSettingsMongoTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._connection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._connection.internalValue = value.connection;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMongoTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMongoTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise;
}

export function datatransferEndpointSettingsMysqlSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOutputReference | DatatransferEndpointSettingsMysqlSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceObjectTransferSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#routine DatatransferEndpoint#routine}
  */
  readonly routine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#trigger DatatransferEndpoint#trigger}
  */
  readonly trigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#view DatatransferEndpoint#view}
  */
  readonly view?: string;
}

export function datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsMysqlSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routine: cdktf.stringToTerraform(struct!.routine),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    view: cdktf.stringToTerraform(struct!.view),
  }
}

export class DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceObjectTransferSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routine !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routine = undefined;
      this._trigger = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routine = value.routine;
      this._trigger = value.trigger;
      this._view = value.view;
    }
  }

  // routine - computed: true, optional: true, required: false
  private _routine?: string; 
  public get routine() {
    return this.getStringAttribute('routine');
  }
  public set routine(value: string) {
    this._routine = value;
  }
  public resetRoutine() {
    this._routine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface DatatransferEndpointSettingsMysqlSourcePassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMysqlSourcePasswordToTerraform(struct?: DatatransferEndpointSettingsMysqlSourcePasswordOutputReference | DatatransferEndpointSettingsMysqlSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsMysqlSourcePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourcePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourcePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMysqlSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#exclude_tables_regex DatatransferEndpoint#exclude_tables_regex}
  */
  readonly excludeTablesRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#include_tables_regex DatatransferEndpoint#include_tables_regex}
  */
  readonly includeTablesRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#service_database DatatransferEndpoint#service_database}
  */
  readonly serviceDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#timezone DatatransferEndpoint#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMysqlSourceConnection;
  /**
  * object_transfer_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#object_transfer_settings DatatransferEndpoint#object_transfer_settings}
  */
  readonly objectTransferSettings?: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMysqlSourcePassword;
}

export function datatransferEndpointSettingsMysqlSourceToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceOutputReference | DatatransferEndpointSettingsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    exclude_tables_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTablesRegex),
    include_tables_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTablesRegex),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_database: cdktf.stringToTerraform(struct!.serviceDatabase),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsMysqlSourceConnectionToTerraform(struct!.connection),
    object_transfer_settings: datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToTerraform(struct!.objectTransferSettings),
    password: datatransferEndpointSettingsMysqlSourcePasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsMysqlSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._excludeTablesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTablesRegex = this._excludeTablesRegex;
    }
    if (this._includeTablesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTablesRegex = this._includeTablesRegex;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDatabase = this._serviceDatabase;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._objectTransferSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTransferSettings = this._objectTransferSettings?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._excludeTablesRegex = undefined;
      this._includeTablesRegex = undefined;
      this._securityGroups = undefined;
      this._serviceDatabase = undefined;
      this._timezone = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._objectTransferSettings.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._excludeTablesRegex = value.excludeTablesRegex;
      this._includeTablesRegex = value.includeTablesRegex;
      this._securityGroups = value.securityGroups;
      this._serviceDatabase = value.serviceDatabase;
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // exclude_tables_regex - computed: true, optional: true, required: false
  private _excludeTablesRegex?: string[]; 
  public get excludeTablesRegex() {
    return this.getListAttribute('exclude_tables_regex');
  }
  public set excludeTablesRegex(value: string[]) {
    this._excludeTablesRegex = value;
  }
  public resetExcludeTablesRegex() {
    this._excludeTablesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesRegexInput() {
    return this._excludeTablesRegex;
  }

  // include_tables_regex - computed: true, optional: true, required: false
  private _includeTablesRegex?: string[]; 
  public get includeTablesRegex() {
    return this.getListAttribute('include_tables_regex');
  }
  public set includeTablesRegex(value: string[]) {
    this._includeTablesRegex = value;
  }
  public resetIncludeTablesRegex() {
    this._includeTablesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesRegexInput() {
    return this._includeTablesRegex;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_database - computed: true, optional: true, required: false
  private _serviceDatabase?: string; 
  public get serviceDatabase() {
    return this.getStringAttribute('service_database');
  }
  public set serviceDatabase(value: string) {
    this._serviceDatabase = value;
  }
  public resetServiceDatabase() {
    this._serviceDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDatabaseInput() {
    return this._serviceDatabase;
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

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMysqlSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMysqlSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // object_transfer_settings - computed: false, optional: true, required: false
  private _objectTransferSettings = new DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference(this, "object_transfer_settings");
  public get objectTransferSettings() {
    return this._objectTransferSettings;
  }
  public putObjectTransferSettings(value: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings) {
    this._objectTransferSettings.internalValue = value;
  }
  public resetObjectTransferSettings() {
    this._objectTransferSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTransferSettingsInput() {
    return this._objectTransferSettings.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMysqlSourcePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMysqlSourcePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise;
}

export function datatransferEndpointSettingsMysqlTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOutputReference | DatatransferEndpointSettingsMysqlTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMysqlTargetPasswordToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetPasswordOutputReference | DatatransferEndpointSettingsMysqlTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsMysqlTargetPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMysqlTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#skip_constraint_checks DatatransferEndpoint#skip_constraint_checks}
  */
  readonly skipConstraintChecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#sql_mode DatatransferEndpoint#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#timezone DatatransferEndpoint#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMysqlTargetConnection;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMysqlTargetPassword;
}

export function datatransferEndpointSettingsMysqlTargetToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetOutputReference | DatatransferEndpointSettingsMysqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    skip_constraint_checks: cdktf.booleanToTerraform(struct!.skipConstraintChecks),
    sql_mode: cdktf.stringToTerraform(struct!.sqlMode),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsMysqlTargetConnectionToTerraform(struct!.connection),
    password: datatransferEndpointSettingsMysqlTargetPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsMysqlTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._skipConstraintChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConstraintChecks = this._skipConstraintChecks;
    }
    if (this._sqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMode = this._sqlMode;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._securityGroups = undefined;
      this._skipConstraintChecks = undefined;
      this._sqlMode = undefined;
      this._timezone = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._skipConstraintChecks = value.skipConstraintChecks;
      this._sqlMode = value.sqlMode;
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // skip_constraint_checks - computed: true, optional: true, required: false
  private _skipConstraintChecks?: boolean | cdktf.IResolvable; 
  public get skipConstraintChecks() {
    return this.getBooleanAttribute('skip_constraint_checks');
  }
  public set skipConstraintChecks(value: boolean | cdktf.IResolvable) {
    this._skipConstraintChecks = value;
  }
  public resetSkipConstraintChecks() {
    this._skipConstraintChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConstraintChecksInput() {
    return this._skipConstraintChecks;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
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

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMysqlTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMysqlTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMysqlTargetPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMysqlTargetPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise;
}

export function datatransferEndpointSettingsPostgresSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOutputReference | DatatransferEndpointSettingsPostgresSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceObjectTransferSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#cast DatatransferEndpoint#cast}
  */
  readonly cast?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#collation DatatransferEndpoint#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#constraint DatatransferEndpoint#constraint}
  */
  readonly constraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#default_values DatatransferEndpoint#default_values}
  */
  readonly defaultValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#fk_constraint DatatransferEndpoint#fk_constraint}
  */
  readonly fkConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#function DatatransferEndpoint#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#index DatatransferEndpoint#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#materialized_view DatatransferEndpoint#materialized_view}
  */
  readonly materializedView?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#policy DatatransferEndpoint#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#primary_key DatatransferEndpoint#primary_key}
  */
  readonly primaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#rule DatatransferEndpoint#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#sequence DatatransferEndpoint#sequence}
  */
  readonly sequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#sequence_owned_by DatatransferEndpoint#sequence_owned_by}
  */
  readonly sequenceOwnedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#table DatatransferEndpoint#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#trigger DatatransferEndpoint#trigger}
  */
  readonly trigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#view DatatransferEndpoint#view}
  */
  readonly view?: string;
}

export function datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsPostgresSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cast: cdktf.stringToTerraform(struct!.cast),
    collation: cdktf.stringToTerraform(struct!.collation),
    constraint: cdktf.stringToTerraform(struct!.constraint),
    default_values: cdktf.stringToTerraform(struct!.defaultValues),
    fk_constraint: cdktf.stringToTerraform(struct!.fkConstraint),
    function: cdktf.stringToTerraform(struct!.function),
    index: cdktf.stringToTerraform(struct!.index),
    materialized_view: cdktf.stringToTerraform(struct!.materializedView),
    policy: cdktf.stringToTerraform(struct!.policy),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
    rule: cdktf.stringToTerraform(struct!.rule),
    sequence: cdktf.stringToTerraform(struct!.sequence),
    sequence_owned_by: cdktf.stringToTerraform(struct!.sequenceOwnedBy),
    table: cdktf.stringToTerraform(struct!.table),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    type: cdktf.stringToTerraform(struct!.type),
    view: cdktf.stringToTerraform(struct!.view),
  }
}

export class DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceObjectTransferSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cast !== undefined) {
      hasAnyValues = true;
      internalValueResult.cast = this._cast;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._fkConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fkConstraint = this._fkConstraint;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._materializedView !== undefined) {
      hasAnyValues = true;
      internalValueResult.materializedView = this._materializedView;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    if (this._sequenceOwnedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceOwnedBy = this._sequenceOwnedBy;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cast = undefined;
      this._collation = undefined;
      this._constraint = undefined;
      this._defaultValues = undefined;
      this._fkConstraint = undefined;
      this._function = undefined;
      this._index = undefined;
      this._materializedView = undefined;
      this._policy = undefined;
      this._primaryKey = undefined;
      this._rule = undefined;
      this._sequence = undefined;
      this._sequenceOwnedBy = undefined;
      this._table = undefined;
      this._trigger = undefined;
      this._type = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cast = value.cast;
      this._collation = value.collation;
      this._constraint = value.constraint;
      this._defaultValues = value.defaultValues;
      this._fkConstraint = value.fkConstraint;
      this._function = value.function;
      this._index = value.index;
      this._materializedView = value.materializedView;
      this._policy = value.policy;
      this._primaryKey = value.primaryKey;
      this._rule = value.rule;
      this._sequence = value.sequence;
      this._sequenceOwnedBy = value.sequenceOwnedBy;
      this._table = value.table;
      this._trigger = value.trigger;
      this._type = value.type;
      this._view = value.view;
    }
  }

  // cast - computed: true, optional: true, required: false
  private _cast?: string; 
  public get cast() {
    return this.getStringAttribute('cast');
  }
  public set cast(value: string) {
    this._cast = value;
  }
  public resetCast() {
    this._cast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castInput() {
    return this._cast;
  }

  // collation - computed: true, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // default_values - computed: true, optional: true, required: false
  private _defaultValues?: string; 
  public get defaultValues() {
    return this.getStringAttribute('default_values');
  }
  public set defaultValues(value: string) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // fk_constraint - computed: true, optional: true, required: false
  private _fkConstraint?: string; 
  public get fkConstraint() {
    return this.getStringAttribute('fk_constraint');
  }
  public set fkConstraint(value: string) {
    this._fkConstraint = value;
  }
  public resetFkConstraint() {
    this._fkConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fkConstraintInput() {
    return this._fkConstraint;
  }

  // function - computed: true, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // materialized_view - computed: true, optional: true, required: false
  private _materializedView?: string; 
  public get materializedView() {
    return this.getStringAttribute('materialized_view');
  }
  public set materializedView(value: string) {
    this._materializedView = value;
  }
  public resetMaterializedView() {
    this._materializedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // sequence_owned_by - computed: true, optional: true, required: false
  private _sequenceOwnedBy?: string; 
  public get sequenceOwnedBy() {
    return this.getStringAttribute('sequence_owned_by');
  }
  public set sequenceOwnedBy(value: string) {
    this._sequenceOwnedBy = value;
  }
  public resetSequenceOwnedBy() {
    this._sequenceOwnedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceOwnedByInput() {
    return this._sequenceOwnedBy;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface DatatransferEndpointSettingsPostgresSourcePassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsPostgresSourcePasswordToTerraform(struct?: DatatransferEndpointSettingsPostgresSourcePasswordOutputReference | DatatransferEndpointSettingsPostgresSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsPostgresSourcePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourcePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourcePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsPostgresSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#exclude_tables DatatransferEndpoint#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#include_tables DatatransferEndpoint#include_tables}
  */
  readonly includeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#service_schema DatatransferEndpoint#service_schema}
  */
  readonly serviceSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#slot_gigabyte_lag_limit DatatransferEndpoint#slot_gigabyte_lag_limit}
  */
  readonly slotGigabyteLagLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsPostgresSourceConnection;
  /**
  * object_transfer_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#object_transfer_settings DatatransferEndpoint#object_transfer_settings}
  */
  readonly objectTransferSettings?: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsPostgresSourcePassword;
}

export function datatransferEndpointSettingsPostgresSourceToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceOutputReference | DatatransferEndpointSettingsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_schema: cdktf.stringToTerraform(struct!.serviceSchema),
    slot_gigabyte_lag_limit: cdktf.numberToTerraform(struct!.slotGigabyteLagLimit),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsPostgresSourceConnectionToTerraform(struct!.connection),
    object_transfer_settings: datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToTerraform(struct!.objectTransferSettings),
    password: datatransferEndpointSettingsPostgresSourcePasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsPostgresSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSchema = this._serviceSchema;
    }
    if (this._slotGigabyteLagLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotGigabyteLagLimit = this._slotGigabyteLagLimit;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._objectTransferSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTransferSettings = this._objectTransferSettings?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._excludeTables = undefined;
      this._includeTables = undefined;
      this._securityGroups = undefined;
      this._serviceSchema = undefined;
      this._slotGigabyteLagLimit = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._objectTransferSettings.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
      this._securityGroups = value.securityGroups;
      this._serviceSchema = value.serviceSchema;
      this._slotGigabyteLagLimit = value.slotGigabyteLagLimit;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // exclude_tables - computed: true, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: true, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_schema - computed: true, optional: true, required: false
  private _serviceSchema?: string; 
  public get serviceSchema() {
    return this.getStringAttribute('service_schema');
  }
  public set serviceSchema(value: string) {
    this._serviceSchema = value;
  }
  public resetServiceSchema() {
    this._serviceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSchemaInput() {
    return this._serviceSchema;
  }

  // slot_gigabyte_lag_limit - computed: true, optional: true, required: false
  private _slotGigabyteLagLimit?: number; 
  public get slotGigabyteLagLimit() {
    return this.getNumberAttribute('slot_gigabyte_lag_limit');
  }
  public set slotGigabyteLagLimit(value: number) {
    this._slotGigabyteLagLimit = value;
  }
  public resetSlotGigabyteLagLimit() {
    this._slotGigabyteLagLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGigabyteLagLimitInput() {
    return this._slotGigabyteLagLimit;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsPostgresSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsPostgresSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // object_transfer_settings - computed: false, optional: true, required: false
  private _objectTransferSettings = new DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference(this, "object_transfer_settings");
  public get objectTransferSettings() {
    return this._objectTransferSettings;
  }
  public putObjectTransferSettings(value: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings) {
    this._objectTransferSettings.internalValue = value;
  }
  public resetObjectTransferSettings() {
    this._objectTransferSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTransferSettingsInput() {
    return this._objectTransferSettings.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsPostgresSourcePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsPostgresSourcePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode {
  /**
  * disabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise;
}

export function datatransferEndpointSettingsPostgresTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOutputReference | DatatransferEndpointSettingsPostgresTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsPostgresTargetPasswordToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetPasswordOutputReference | DatatransferEndpointSettingsPostgresTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}

export class DatatransferEndpointSettingsPostgresTargetPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsPostgresTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsPostgresTargetConnection;
  /**
  * password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsPostgresTargetPassword;
}

export function datatransferEndpointSettingsPostgresTargetToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetOutputReference | DatatransferEndpointSettingsPostgresTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsPostgresTargetConnectionToTerraform(struct!.connection),
    password: datatransferEndpointSettingsPostgresTargetPasswordToTerraform(struct!.password),
  }
}

export class DatatransferEndpointSettingsPostgresTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._securityGroups = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsPostgresTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsPostgresTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsPostgresTargetPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsPostgresTargetPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettings {
  /**
  * clickhouse_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#clickhouse_source DatatransferEndpoint#clickhouse_source}
  */
  readonly clickhouseSource?: DatatransferEndpointSettingsClickhouseSource;
  /**
  * clickhouse_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#clickhouse_target DatatransferEndpoint#clickhouse_target}
  */
  readonly clickhouseTarget?: DatatransferEndpointSettingsClickhouseTarget;
  /**
  * mongo_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mongo_source DatatransferEndpoint#mongo_source}
  */
  readonly mongoSource?: DatatransferEndpointSettingsMongoSource;
  /**
  * mongo_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mongo_target DatatransferEndpoint#mongo_target}
  */
  readonly mongoTarget?: DatatransferEndpointSettingsMongoTarget;
  /**
  * mysql_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mysql_source DatatransferEndpoint#mysql_source}
  */
  readonly mysqlSource?: DatatransferEndpointSettingsMysqlSource;
  /**
  * mysql_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#mysql_target DatatransferEndpoint#mysql_target}
  */
  readonly mysqlTarget?: DatatransferEndpointSettingsMysqlTarget;
  /**
  * postgres_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#postgres_source DatatransferEndpoint#postgres_source}
  */
  readonly postgresSource?: DatatransferEndpointSettingsPostgresSource;
  /**
  * postgres_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#postgres_target DatatransferEndpoint#postgres_target}
  */
  readonly postgresTarget?: DatatransferEndpointSettingsPostgresTarget;
}

export function datatransferEndpointSettingsToTerraform(struct?: DatatransferEndpointSettingsOutputReference | DatatransferEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse_source: datatransferEndpointSettingsClickhouseSourceToTerraform(struct!.clickhouseSource),
    clickhouse_target: datatransferEndpointSettingsClickhouseTargetToTerraform(struct!.clickhouseTarget),
    mongo_source: datatransferEndpointSettingsMongoSourceToTerraform(struct!.mongoSource),
    mongo_target: datatransferEndpointSettingsMongoTargetToTerraform(struct!.mongoTarget),
    mysql_source: datatransferEndpointSettingsMysqlSourceToTerraform(struct!.mysqlSource),
    mysql_target: datatransferEndpointSettingsMysqlTargetToTerraform(struct!.mysqlTarget),
    postgres_source: datatransferEndpointSettingsPostgresSourceToTerraform(struct!.postgresSource),
    postgres_target: datatransferEndpointSettingsPostgresTargetToTerraform(struct!.postgresTarget),
  }
}

export class DatatransferEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouseSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseSource = this._clickhouseSource?.internalValue;
    }
    if (this._clickhouseTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseTarget = this._clickhouseTarget?.internalValue;
    }
    if (this._mongoSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoSource = this._mongoSource?.internalValue;
    }
    if (this._mongoTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoTarget = this._mongoTarget?.internalValue;
    }
    if (this._mysqlSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSource = this._mysqlSource?.internalValue;
    }
    if (this._mysqlTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTarget = this._mysqlTarget?.internalValue;
    }
    if (this._postgresSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresSource = this._postgresSource?.internalValue;
    }
    if (this._postgresTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresTarget = this._postgresTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouseSource.internalValue = undefined;
      this._clickhouseTarget.internalValue = undefined;
      this._mongoSource.internalValue = undefined;
      this._mongoTarget.internalValue = undefined;
      this._mysqlSource.internalValue = undefined;
      this._mysqlTarget.internalValue = undefined;
      this._postgresSource.internalValue = undefined;
      this._postgresTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouseSource.internalValue = value.clickhouseSource;
      this._clickhouseTarget.internalValue = value.clickhouseTarget;
      this._mongoSource.internalValue = value.mongoSource;
      this._mongoTarget.internalValue = value.mongoTarget;
      this._mysqlSource.internalValue = value.mysqlSource;
      this._mysqlTarget.internalValue = value.mysqlTarget;
      this._postgresSource.internalValue = value.postgresSource;
      this._postgresTarget.internalValue = value.postgresTarget;
    }
  }

  // clickhouse_source - computed: false, optional: true, required: false
  private _clickhouseSource = new DatatransferEndpointSettingsClickhouseSourceOutputReference(this, "clickhouse_source");
  public get clickhouseSource() {
    return this._clickhouseSource;
  }
  public putClickhouseSource(value: DatatransferEndpointSettingsClickhouseSource) {
    this._clickhouseSource.internalValue = value;
  }
  public resetClickhouseSource() {
    this._clickhouseSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseSourceInput() {
    return this._clickhouseSource.internalValue;
  }

  // clickhouse_target - computed: false, optional: true, required: false
  private _clickhouseTarget = new DatatransferEndpointSettingsClickhouseTargetOutputReference(this, "clickhouse_target");
  public get clickhouseTarget() {
    return this._clickhouseTarget;
  }
  public putClickhouseTarget(value: DatatransferEndpointSettingsClickhouseTarget) {
    this._clickhouseTarget.internalValue = value;
  }
  public resetClickhouseTarget() {
    this._clickhouseTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseTargetInput() {
    return this._clickhouseTarget.internalValue;
  }

  // mongo_source - computed: false, optional: true, required: false
  private _mongoSource = new DatatransferEndpointSettingsMongoSourceOutputReference(this, "mongo_source");
  public get mongoSource() {
    return this._mongoSource;
  }
  public putMongoSource(value: DatatransferEndpointSettingsMongoSource) {
    this._mongoSource.internalValue = value;
  }
  public resetMongoSource() {
    this._mongoSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoSourceInput() {
    return this._mongoSource.internalValue;
  }

  // mongo_target - computed: false, optional: true, required: false
  private _mongoTarget = new DatatransferEndpointSettingsMongoTargetOutputReference(this, "mongo_target");
  public get mongoTarget() {
    return this._mongoTarget;
  }
  public putMongoTarget(value: DatatransferEndpointSettingsMongoTarget) {
    this._mongoTarget.internalValue = value;
  }
  public resetMongoTarget() {
    this._mongoTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoTargetInput() {
    return this._mongoTarget.internalValue;
  }

  // mysql_source - computed: false, optional: true, required: false
  private _mysqlSource = new DatatransferEndpointSettingsMysqlSourceOutputReference(this, "mysql_source");
  public get mysqlSource() {
    return this._mysqlSource;
  }
  public putMysqlSource(value: DatatransferEndpointSettingsMysqlSource) {
    this._mysqlSource.internalValue = value;
  }
  public resetMysqlSource() {
    this._mysqlSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceInput() {
    return this._mysqlSource.internalValue;
  }

  // mysql_target - computed: false, optional: true, required: false
  private _mysqlTarget = new DatatransferEndpointSettingsMysqlTargetOutputReference(this, "mysql_target");
  public get mysqlTarget() {
    return this._mysqlTarget;
  }
  public putMysqlTarget(value: DatatransferEndpointSettingsMysqlTarget) {
    this._mysqlTarget.internalValue = value;
  }
  public resetMysqlTarget() {
    this._mysqlTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTargetInput() {
    return this._mysqlTarget.internalValue;
  }

  // postgres_source - computed: false, optional: true, required: false
  private _postgresSource = new DatatransferEndpointSettingsPostgresSourceOutputReference(this, "postgres_source");
  public get postgresSource() {
    return this._postgresSource;
  }
  public putPostgresSource(value: DatatransferEndpointSettingsPostgresSource) {
    this._postgresSource.internalValue = value;
  }
  public resetPostgresSource() {
    this._postgresSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSourceInput() {
    return this._postgresSource.internalValue;
  }

  // postgres_target - computed: false, optional: true, required: false
  private _postgresTarget = new DatatransferEndpointSettingsPostgresTargetOutputReference(this, "postgres_target");
  public get postgresTarget() {
    return this._postgresTarget;
  }
  public putPostgresTarget(value: DatatransferEndpointSettingsPostgresTarget) {
    this._postgresTarget.internalValue = value;
  }
  public resetPostgresTarget() {
    this._postgresTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresTargetInput() {
    return this._postgresTarget.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint yandex_datatransfer_endpoint}
*/
export class DatatransferEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_datatransfer_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint yandex_datatransfer_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatatransferEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatatransferEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_datatransfer_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.76.0',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // settings - computed: false, optional: true, required: false
  private _settings = new DatatransferEndpointSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatatransferEndpointSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      settings: datatransferEndpointSettingsToTerraform(this._settings.internalValue),
    };
  }
}
