// https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexFunctionScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy#function_id DataYandexFunctionScalingPolicy#function_id}
  */
  readonly functionId: string;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy#policy DataYandexFunctionScalingPolicy#policy}
  */
  readonly policy?: DataYandexFunctionScalingPolicyPolicy[] | cdktf.IResolvable;
}
export interface DataYandexFunctionScalingPolicyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy#zone_instances_limit DataYandexFunctionScalingPolicy#zone_instances_limit}
  */
  readonly zoneInstancesLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy#zone_requests_limit DataYandexFunctionScalingPolicy#zone_requests_limit}
  */
  readonly zoneRequestsLimit?: number;
}

export function dataYandexFunctionScalingPolicyPolicyToTerraform(struct?: DataYandexFunctionScalingPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_instances_limit: cdktf.numberToTerraform(struct!.zoneInstancesLimit),
    zone_requests_limit: cdktf.numberToTerraform(struct!.zoneRequestsLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy yandex_function_scaling_policy}
*/
export class DataYandexFunctionScalingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_scaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy yandex_function_scaling_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexFunctionScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexFunctionScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function_scaling_policy',
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
    this._functionId = config.functionId;
    this._policy = config.policy;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: DataYandexFunctionScalingPolicyPolicy[] | cdktf.IResolvable; 
  public get policy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy');
  }
  public set policy(value: DataYandexFunctionScalingPolicyPolicy[] | cdktf.IResolvable) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
      policy: cdktf.listMapper(dataYandexFunctionScalingPolicyPolicyToTerraform)(this._policy),
    };
  }
}
