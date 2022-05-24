// https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerSamlFederationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#auto_create_account_on_login OrganizationmanagerSamlFederation#auto_create_account_on_login}
  */
  readonly autoCreateAccountOnLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#case_insensitive_name_ids OrganizationmanagerSamlFederation#case_insensitive_name_ids}
  */
  readonly caseInsensitiveNameIds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#cookie_max_age OrganizationmanagerSamlFederation#cookie_max_age}
  */
  readonly cookieMaxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#description OrganizationmanagerSamlFederation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#id OrganizationmanagerSamlFederation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#issuer OrganizationmanagerSamlFederation#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#labels OrganizationmanagerSamlFederation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#name OrganizationmanagerSamlFederation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#organization_id OrganizationmanagerSamlFederation#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#sso_binding OrganizationmanagerSamlFederation#sso_binding}
  */
  readonly ssoBinding: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#sso_url OrganizationmanagerSamlFederation#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * security_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#security_settings OrganizationmanagerSamlFederation#security_settings}
  */
  readonly securitySettings?: OrganizationmanagerSamlFederationSecuritySettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#timeouts OrganizationmanagerSamlFederation#timeouts}
  */
  readonly timeouts?: OrganizationmanagerSamlFederationTimeouts;
}
export interface OrganizationmanagerSamlFederationSecuritySettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#encrypted_assertions OrganizationmanagerSamlFederation#encrypted_assertions}
  */
  readonly encryptedAssertions: boolean | cdktf.IResolvable;
}

export function organizationmanagerSamlFederationSecuritySettingsToTerraform(struct?: OrganizationmanagerSamlFederationSecuritySettingsOutputReference | OrganizationmanagerSamlFederationSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_assertions: cdktf.booleanToTerraform(struct!.encryptedAssertions),
  }
}

export class OrganizationmanagerSamlFederationSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationmanagerSamlFederationSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedAssertions !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedAssertions = this._encryptedAssertions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerSamlFederationSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptedAssertions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptedAssertions = value.encryptedAssertions;
    }
  }

  // encrypted_assertions - computed: false, optional: false, required: true
  private _encryptedAssertions?: boolean | cdktf.IResolvable; 
  public get encryptedAssertions() {
    return this.getBooleanAttribute('encrypted_assertions');
  }
  public set encryptedAssertions(value: boolean | cdktf.IResolvable) {
    this._encryptedAssertions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedAssertionsInput() {
    return this._encryptedAssertions;
  }
}
export interface OrganizationmanagerSamlFederationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#create OrganizationmanagerSamlFederation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#delete OrganizationmanagerSamlFederation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#read OrganizationmanagerSamlFederation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation#update OrganizationmanagerSamlFederation#update}
  */
  readonly update?: string;
}

export function organizationmanagerSamlFederationTimeoutsToTerraform(struct?: OrganizationmanagerSamlFederationTimeoutsOutputReference | OrganizationmanagerSamlFederationTimeouts | cdktf.IResolvable): any {
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

export class OrganizationmanagerSamlFederationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationmanagerSamlFederationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationmanagerSamlFederationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation yandex_organizationmanager_saml_federation}
*/
export class OrganizationmanagerSamlFederation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_saml_federation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/organizationmanager_saml_federation yandex_organizationmanager_saml_federation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerSamlFederationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerSamlFederationConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_saml_federation',
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
    this._autoCreateAccountOnLogin = config.autoCreateAccountOnLogin;
    this._caseInsensitiveNameIds = config.caseInsensitiveNameIds;
    this._cookieMaxAge = config.cookieMaxAge;
    this._description = config.description;
    this._id = config.id;
    this._issuer = config.issuer;
    this._labels = config.labels;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._ssoBinding = config.ssoBinding;
    this._ssoUrl = config.ssoUrl;
    this._securitySettings.internalValue = config.securitySettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_account_on_login - computed: true, optional: true, required: false
  private _autoCreateAccountOnLogin?: boolean | cdktf.IResolvable; 
  public get autoCreateAccountOnLogin() {
    return this.getBooleanAttribute('auto_create_account_on_login');
  }
  public set autoCreateAccountOnLogin(value: boolean | cdktf.IResolvable) {
    this._autoCreateAccountOnLogin = value;
  }
  public resetAutoCreateAccountOnLogin() {
    this._autoCreateAccountOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateAccountOnLoginInput() {
    return this._autoCreateAccountOnLogin;
  }

  // case_insensitive_name_ids - computed: true, optional: true, required: false
  private _caseInsensitiveNameIds?: boolean | cdktf.IResolvable; 
  public get caseInsensitiveNameIds() {
    return this.getBooleanAttribute('case_insensitive_name_ids');
  }
  public set caseInsensitiveNameIds(value: boolean | cdktf.IResolvable) {
    this._caseInsensitiveNameIds = value;
  }
  public resetCaseInsensitiveNameIds() {
    this._caseInsensitiveNameIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveNameIdsInput() {
    return this._caseInsensitiveNameIds;
  }

  // cookie_max_age - computed: true, optional: true, required: false
  private _cookieMaxAge?: string; 
  public get cookieMaxAge() {
    return this.getStringAttribute('cookie_max_age');
  }
  public set cookieMaxAge(value: string) {
    this._cookieMaxAge = value;
  }
  public resetCookieMaxAge() {
    this._cookieMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMaxAgeInput() {
    return this._cookieMaxAge;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // sso_binding - computed: false, optional: false, required: true
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings = new OrganizationmanagerSamlFederationSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: OrganizationmanagerSamlFederationSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerSamlFederationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerSamlFederationTimeouts) {
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
      auto_create_account_on_login: cdktf.booleanToTerraform(this._autoCreateAccountOnLogin),
      case_insensitive_name_ids: cdktf.booleanToTerraform(this._caseInsensitiveNameIds),
      cookie_max_age: cdktf.stringToTerraform(this._cookieMaxAge),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      sso_binding: cdktf.stringToTerraform(this._ssoBinding),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      security_settings: organizationmanagerSamlFederationSecuritySettingsToTerraform(this._securitySettings.internalValue),
      timeouts: organizationmanagerSamlFederationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
