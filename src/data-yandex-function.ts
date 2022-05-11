// https://www.terraform.io/docs/providers/yandex/d/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function#folder_id DataYandexFunction#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function#function_id DataYandexFunction#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function#name DataYandexFunction#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/function yandex_function}
*/
export class DataYandexFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/function yandex_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexFunctionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexFunctionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_function',
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
    this._folderId = config.folderId;
    this._functionId = config.functionId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  public environment(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'environment').lookup(key);
  }

  // execution_timeout - computed: true, optional: false, required: false
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
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

  // function_id - computed: false, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getNumberAttribute('image_size');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // loggroup_id - computed: true, optional: false, required: false
  public get loggroupId() {
    return this.getStringAttribute('loggroup_id');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      function_id: cdktf.stringToTerraform(this._functionId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
