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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/function_scaling_policy#id DataYandexFunctionScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class DataYandexFunctionScalingPolicyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexFunctionScalingPolicyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneInstancesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneInstancesLimit = this._zoneInstancesLimit;
    }
    if (this._zoneRequestsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneRequestsLimit = this._zoneRequestsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionScalingPolicyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zoneInstancesLimit = undefined;
      this._zoneRequestsLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zoneInstancesLimit = value.zoneInstancesLimit;
      this._zoneRequestsLimit = value.zoneRequestsLimit;
    }
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // zone_instances_limit - computed: false, optional: true, required: false
  private _zoneInstancesLimit?: number; 
  public get zoneInstancesLimit() {
    return this.getNumberAttribute('zone_instances_limit');
  }
  public set zoneInstancesLimit(value: number) {
    this._zoneInstancesLimit = value;
  }
  public resetZoneInstancesLimit() {
    this._zoneInstancesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInstancesLimitInput() {
    return this._zoneInstancesLimit;
  }

  // zone_requests_limit - computed: false, optional: true, required: false
  private _zoneRequestsLimit?: number; 
  public get zoneRequestsLimit() {
    return this.getNumberAttribute('zone_requests_limit');
  }
  public set zoneRequestsLimit(value: number) {
    this._zoneRequestsLimit = value;
  }
  public resetZoneRequestsLimit() {
    this._zoneRequestsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRequestsLimitInput() {
    return this._zoneRequestsLimit;
  }
}

export class DataYandexFunctionScalingPolicyPolicyList extends cdktf.ComplexList {
  public internalValue? : DataYandexFunctionScalingPolicyPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexFunctionScalingPolicyPolicyOutputReference {
    return new DataYandexFunctionScalingPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
        providerVersion: '0.76.0',
        providerVersionConstraint: '~> 0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionId = config.functionId;
    this._id = config.id;
    this._policy.internalValue = config.policy;
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

  // policy - computed: false, optional: true, required: false
  private _policy = new DataYandexFunctionScalingPolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataYandexFunctionScalingPolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.listMapper(dataYandexFunctionScalingPolicyPolicyToTerraform)(this._policy.internalValue),
    };
  }
}
