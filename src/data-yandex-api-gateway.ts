// https://www.terraform.io/docs/providers/yandex/d/api_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexApiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/api_gateway#api_gateway_id DataYandexApiGateway#api_gateway_id}
  */
  readonly apiGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/api_gateway#folder_id DataYandexApiGateway#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/api_gateway#name DataYandexApiGateway#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/api_gateway yandex_api_gateway}
*/
export class DataYandexApiGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_api_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/api_gateway yandex_api_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexApiGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexApiGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_api_gateway',
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
    this._apiGatewayId = config.apiGatewayId;
    this._folderId = config.folderId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_gateway_id - computed: false, optional: true, required: false
  private _apiGatewayId?: string; 
  public get apiGatewayId() {
    return this.getStringAttribute('api_gateway_id');
  }
  public set apiGatewayId(value: string) {
    this._apiGatewayId = value;
  }
  public resetApiGatewayId() {
    this._apiGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayIdInput() {
    return this._apiGatewayId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // folder_id - computed: false, optional: true, required: false
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_domains - computed: true, optional: false, required: false
  public get userDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('user_domains'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_gateway_id: cdktf.stringToTerraform(this._apiGatewayId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
