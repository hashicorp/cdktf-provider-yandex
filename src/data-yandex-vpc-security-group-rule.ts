// https://www.terraform.io/docs/providers/yandex/d/vpc_security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexVpcSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/vpc_security_group_rule#rule_id DataYandexVpcSecurityGroupRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/vpc_security_group_rule#security_group_binding DataYandexVpcSecurityGroupRule#security_group_binding}
  */
  readonly securityGroupBinding: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/vpc_security_group_rule yandex_vpc_security_group_rule}
*/
export class DataYandexVpcSecurityGroupRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_security_group_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/vpc_security_group_rule yandex_vpc_security_group_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexVpcSecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexVpcSecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_security_group_rule',
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
    this._ruleId = config.ruleId;
    this._securityGroupBinding = config.securityGroupBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // predefined_target - computed: true, optional: false, required: false
  public get predefinedTarget() {
    return this.getStringAttribute('predefined_target');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // security_group_binding - computed: false, optional: false, required: true
  private _securityGroupBinding?: string; 
  public get securityGroupBinding() {
    return this.getStringAttribute('security_group_binding');
  }
  public set securityGroupBinding(value: string) {
    this._securityGroupBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupBindingInput() {
    return this._securityGroupBinding;
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }

  // v4_cidr_blocks - computed: true, optional: false, required: false
  public get v4CidrBlocks() {
    return this.getListAttribute('v4_cidr_blocks');
  }

  // v6_cidr_blocks - computed: true, optional: false, required: false
  public get v6CidrBlocks() {
    return this.getListAttribute('v6_cidr_blocks');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_id: cdktf.stringToTerraform(this._ruleId),
      security_group_binding: cdktf.stringToTerraform(this._securityGroupBinding),
    };
  }
}
