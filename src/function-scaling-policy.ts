// https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy#function_id FunctionScalingPolicy#function_id}
  */
  readonly functionId: string;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy#policy FunctionScalingPolicy#policy}
  */
  readonly policy?: FunctionScalingPolicyPolicy[] | cdktf.IResolvable;
}
export interface FunctionScalingPolicyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy#tag FunctionScalingPolicy#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy#zone_instances_limit FunctionScalingPolicy#zone_instances_limit}
  */
  readonly zoneInstancesLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy#zone_requests_limit FunctionScalingPolicy#zone_requests_limit}
  */
  readonly zoneRequestsLimit?: number;
}

export function functionScalingPolicyPolicyToTerraform(struct?: FunctionScalingPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    zone_instances_limit: cdktf.numberToTerraform(struct!.zoneInstancesLimit),
    zone_requests_limit: cdktf.numberToTerraform(struct!.zoneRequestsLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy yandex_function_scaling_policy}
*/
export class FunctionScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_scaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/function_scaling_policy yandex_function_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionScalingPolicyConfig) {
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
  private _policy?: FunctionScalingPolicyPolicy[] | cdktf.IResolvable; 
  public get policy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('policy')));
  }
  public set policy(value: FunctionScalingPolicyPolicy[] | cdktf.IResolvable) {
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
      policy: cdktf.listMapper(functionScalingPolicyPolicyToTerraform)(this._policy),
    };
  }
}
