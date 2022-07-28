// https://www.terraform.io/docs/providers/yandex/r/function_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding#function_id FunctionIamBinding#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding#id FunctionIamBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding#members FunctionIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding#role FunctionIamBinding#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding#sleep_after FunctionIamBinding#sleep_after}
  */
  readonly sleepAfter?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding yandex_function_iam_binding}
*/
export class FunctionIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/function_iam_binding yandex_function_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function_iam_binding',
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
    this._functionId = config.functionId;
    this._id = config.id;
    this._members = config.members;
    this._role = config.role;
    this._sleepAfter = config.sleepAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      role: cdktf.stringToTerraform(this._role),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
    };
  }
}
