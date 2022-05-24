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

  // ca_certificate - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
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
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
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
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
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
      this._caCertificate = undefined;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: true, required: false
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

  // routine - computed: false, optional: true, required: false
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

  // trigger - computed: false, optional: true, required: false
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

  // view - computed: false, optional: true, required: false
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

  // raw - computed: false, optional: true, required: false
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
    exclude_tables_regex: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeTablesRegex),
    include_tables_regex: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeTablesRegex),
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
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: false, optional: true, required: false
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

  // user - computed: false, optional: true, required: false
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

  // ca_certificate - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
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
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
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
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
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
      this._caCertificate = undefined;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: true, required: false
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

  // raw - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#service_schema DatatransferEndpoint#service_schema}
  */
  readonly serviceSchema?: string;
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
    service_schema: cdktf.stringToTerraform(struct!.serviceSchema),
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
    if (this._serviceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSchema = this._serviceSchema;
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
      this._serviceSchema = undefined;
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
      this._serviceSchema = value.serviceSchema;
      this._skipConstraintChecks = value.skipConstraintChecks;
      this._sqlMode = value.sqlMode;
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: false, optional: true, required: false
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

  // service_schema - computed: false, optional: true, required: false
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

  // skip_constraint_checks - computed: false, optional: true, required: false
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

  // sql_mode - computed: false, optional: true, required: false
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

  // timezone - computed: false, optional: true, required: false
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

  // user - computed: false, optional: true, required: false
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

  // ca_certificate - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
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
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
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
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
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
      this._caCertificate = undefined;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: true, required: false
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

  // cast - computed: false, optional: true, required: false
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

  // collation - computed: false, optional: true, required: false
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

  // constraint - computed: false, optional: true, required: false
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

  // default_values - computed: false, optional: true, required: false
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

  // fk_constraint - computed: false, optional: true, required: false
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

  // function - computed: false, optional: true, required: false
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

  // index - computed: false, optional: true, required: false
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

  // policy - computed: false, optional: true, required: false
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

  // primary_key - computed: false, optional: true, required: false
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

  // rule - computed: false, optional: true, required: false
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

  // sequence - computed: false, optional: true, required: false
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

  // sequence_owned_by - computed: false, optional: true, required: false
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

  // table - computed: false, optional: true, required: false
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

  // trigger - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

  // view - computed: false, optional: true, required: false
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

  // raw - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#collapse_inherit_table DatatransferEndpoint#collapse_inherit_table}
  */
  readonly collapseInheritTable?: boolean | cdktf.IResolvable;
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
    collapse_inherit_table: cdktf.booleanToTerraform(struct!.collapseInheritTable),
    database: cdktf.stringToTerraform(struct!.database),
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeTables),
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
    if (this._collapseInheritTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.collapseInheritTable = this._collapseInheritTable;
    }
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
      this._collapseInheritTable = undefined;
      this._database = undefined;
      this._excludeTables = undefined;
      this._includeTables = undefined;
      this._serviceSchema = undefined;
      this._slotGigabyteLagLimit = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._objectTransferSettings.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collapseInheritTable = value.collapseInheritTable;
      this._database = value.database;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
      this._serviceSchema = value.serviceSchema;
      this._slotGigabyteLagLimit = value.slotGigabyteLagLimit;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // collapse_inherit_table - computed: false, optional: true, required: false
  private _collapseInheritTable?: boolean | cdktf.IResolvable; 
  public get collapseInheritTable() {
    return this.getBooleanAttribute('collapse_inherit_table');
  }
  public set collapseInheritTable(value: boolean | cdktf.IResolvable) {
    this._collapseInheritTable = value;
  }
  public resetCollapseInheritTable() {
    this._collapseInheritTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapseInheritTableInput() {
    return this._collapseInheritTable;
  }

  // database - computed: false, optional: true, required: false
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

  // exclude_tables - computed: false, optional: true, required: false
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

  // include_tables - computed: false, optional: true, required: false
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

  // user - computed: false, optional: true, required: false
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

  // ca_certificate - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
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
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
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
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
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
      this._caCertificate = undefined;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: true, required: false
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

  // raw - computed: false, optional: true, required: false
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
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: false, optional: true, required: false
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

  // user - computed: false, optional: true, required: false
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
      this._mysqlSource.internalValue = undefined;
      this._mysqlTarget.internalValue = undefined;
      this._postgresSource.internalValue = undefined;
      this._postgresTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlSource.internalValue = value.mysqlSource;
      this._mysqlTarget.internalValue = value.mysqlTarget;
      this._postgresSource.internalValue = value.postgresSource;
      this._postgresTarget.internalValue = value.postgresTarget;
    }
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
        providerVersion: '0.73.0',
        providerVersionConstraint: '~> 0.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
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
