// https://www.terraform.io/docs/providers/yandex/r/vpc_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#folder_id VpcSecurityGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#name VpcSecurityGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#network_id VpcSecurityGroup#network_id}
  */
  readonly networkId: string;
  /**
  * egress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#egress VpcSecurityGroup#egress}
  */
  readonly egress?: VpcSecurityGroupEgress[] | cdktf.IResolvable;
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#ingress VpcSecurityGroup#ingress}
  */
  readonly ingress?: VpcSecurityGroupIngress[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#timeouts VpcSecurityGroup#timeouts}
  */
  readonly timeouts?: VpcSecurityGroupTimeouts;
}
export interface VpcSecurityGroupEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#from_port VpcSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#port VpcSecurityGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#predefined_target VpcSecurityGroup#predefined_target}
  */
  readonly predefinedTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#protocol VpcSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#security_group_id VpcSecurityGroup#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#to_port VpcSecurityGroup#to_port}
  */
  readonly toPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#v4_cidr_blocks VpcSecurityGroup#v4_cidr_blocks}
  */
  readonly v4CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#v6_cidr_blocks VpcSecurityGroup#v6_cidr_blocks}
  */
  readonly v6CidrBlocks?: string[];
}

export function vpcSecurityGroupEgressToTerraform(struct?: VpcSecurityGroupEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    port: cdktf.numberToTerraform(struct!.port),
    predefined_target: cdktf.stringToTerraform(struct!.predefinedTarget),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.v4CidrBlocks),
    v6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.v6CidrBlocks),
  }
}

export interface VpcSecurityGroupIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#from_port VpcSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#port VpcSecurityGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#predefined_target VpcSecurityGroup#predefined_target}
  */
  readonly predefinedTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#protocol VpcSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#security_group_id VpcSecurityGroup#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#to_port VpcSecurityGroup#to_port}
  */
  readonly toPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#v4_cidr_blocks VpcSecurityGroup#v4_cidr_blocks}
  */
  readonly v4CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#v6_cidr_blocks VpcSecurityGroup#v6_cidr_blocks}
  */
  readonly v6CidrBlocks?: string[];
}

export function vpcSecurityGroupIngressToTerraform(struct?: VpcSecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    port: cdktf.numberToTerraform(struct!.port),
    predefined_target: cdktf.stringToTerraform(struct!.predefinedTarget),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.v4CidrBlocks),
    v6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.v6CidrBlocks),
  }
}

export interface VpcSecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#create VpcSecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#delete VpcSecurityGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group#update VpcSecurityGroup#update}
  */
  readonly update?: string;
}

export function vpcSecurityGroupTimeoutsToTerraform(struct?: VpcSecurityGroupTimeoutsOutputReference | VpcSecurityGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpcSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSecurityGroupTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSecurityGroupTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group yandex_vpc_security_group}
*/
export class VpcSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/vpc_security_group yandex_vpc_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_security_group',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: VpcSecurityGroupEgress[] | cdktf.IResolvable; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('egress')));
  }
  public set egress(value: VpcSecurityGroupEgress[] | cdktf.IResolvable) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: VpcSecurityGroupIngress[] | cdktf.IResolvable; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ingress')));
  }
  public set ingress(value: VpcSecurityGroupIngress[] | cdktf.IResolvable) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcSecurityGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcSecurityGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      egress: cdktf.listMapper(vpcSecurityGroupEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(vpcSecurityGroupIngressToTerraform)(this._ingress),
      timeouts: vpcSecurityGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
