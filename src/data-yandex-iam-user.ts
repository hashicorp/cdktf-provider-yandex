// https://www.terraform.io/docs/providers/yandex/d/iam_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexIamUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_user#id DataYandexIamUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_user#login DataYandexIamUser#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_user#user_id DataYandexIamUser#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/iam_user yandex_iam_user}
*/
export class DataYandexIamUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/iam_user yandex_iam_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexIamUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexIamUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_user',
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
    this._id = config.id;
    this._login = config.login;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_email - computed: true, optional: false, required: false
  public get defaultEmail() {
    return this.getStringAttribute('default_email');
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

  // login - computed: true, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
