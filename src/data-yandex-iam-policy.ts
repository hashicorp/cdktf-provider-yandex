// https://www.terraform.io/docs/providers/yandex/d/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_policy#binding DataYandexIamPolicy#binding}
  */
  readonly binding: DataYandexIamPolicyBinding[] | cdktf.IResolvable;
}
export interface DataYandexIamPolicyBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_policy#members DataYandexIamPolicy#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/iam_policy#role DataYandexIamPolicy#role}
  */
  readonly role: string;
}

export function dataYandexIamPolicyBindingToTerraform(struct?: DataYandexIamPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.members),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/iam_policy yandex_iam_policy}
*/
export class DataYandexIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/iam_policy yandex_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_policy',
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
    this._binding = config.binding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // binding - computed: false, optional: false, required: true
  private _binding?: DataYandexIamPolicyBinding[] | cdktf.IResolvable; 
  public get binding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('binding')));
  }
  public set binding(value: DataYandexIamPolicyBinding[] | cdktf.IResolvable) {
    this._binding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding: cdktf.listMapper(dataYandexIamPolicyBindingToTerraform)(this._binding),
    };
  }
}
