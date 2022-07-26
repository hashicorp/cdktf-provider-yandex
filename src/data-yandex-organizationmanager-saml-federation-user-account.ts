// https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexOrganizationmanagerSamlFederationUserAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account#federation_id DataYandexOrganizationmanagerSamlFederationUserAccount#federation_id}
  */
  readonly federationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account#id DataYandexOrganizationmanagerSamlFederationUserAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account#name_id DataYandexOrganizationmanagerSamlFederationUserAccount#name_id}
  */
  readonly nameId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account yandex_organizationmanager_saml_federation_user_account}
*/
export class DataYandexOrganizationmanagerSamlFederationUserAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_saml_federation_user_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/organizationmanager_saml_federation_user_account yandex_organizationmanager_saml_federation_user_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexOrganizationmanagerSamlFederationUserAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexOrganizationmanagerSamlFederationUserAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_saml_federation_user_account',
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
    this._federationId = config.federationId;
    this._id = config.id;
    this._nameId = config.nameId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // federation_id - computed: false, optional: false, required: true
  private _federationId?: string; 
  public get federationId() {
    return this.getStringAttribute('federation_id');
  }
  public set federationId(value: string) {
    this._federationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationIdInput() {
    return this._federationId;
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

  // name_id - computed: false, optional: false, required: true
  private _nameId?: string; 
  public get nameId() {
    return this.getStringAttribute('name_id');
  }
  public set nameId(value: string) {
    this._nameId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdInput() {
    return this._nameId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      federation_id: cdktf.stringToTerraform(this._federationId),
      id: cdktf.stringToTerraform(this._id),
      name_id: cdktf.stringToTerraform(this._nameId),
    };
  }
}
