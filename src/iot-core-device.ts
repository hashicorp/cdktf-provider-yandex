// https://www.terraform.io/docs/providers/yandex/r/iot_core_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotCoreDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#aliases IotCoreDevice#aliases}
  */
  readonly aliases?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#certificates IotCoreDevice#certificates}
  */
  readonly certificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#description IotCoreDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#id IotCoreDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#name IotCoreDevice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#passwords IotCoreDevice#passwords}
  */
  readonly passwords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#registry_id IotCoreDevice#registry_id}
  */
  readonly registryId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#timeouts IotCoreDevice#timeouts}
  */
  readonly timeouts?: IotCoreDeviceTimeouts;
}
export interface IotCoreDeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#create IotCoreDevice#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#delete IotCoreDevice#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device#update IotCoreDevice#update}
  */
  readonly update?: string;
}

export function iotCoreDeviceTimeoutsToTerraform(struct?: IotCoreDeviceTimeoutsOutputReference | IotCoreDeviceTimeouts | cdktf.IResolvable): any {
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

export class IotCoreDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotCoreDeviceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: IotCoreDeviceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device yandex_iot_core_device}
*/
export class IotCoreDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iot_core_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/iot_core_device yandex_iot_core_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotCoreDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IotCoreDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iot_core_device',
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
    this._aliases = config.aliases;
    this._certificates = config.certificates;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._passwords = config.passwords;
    this._registryId = config.registryId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: { [key: string]: string }; 
  public get aliases() {
    return this.getStringMapAttribute('aliases');
  }
  public set aliases(value: { [key: string]: string }) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return cdktf.Fn.tolist(this.getListAttribute('certificates'));
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passwords - computed: false, optional: true, required: false
  private _passwords?: string[]; 
  public get passwords() {
    return cdktf.Fn.tolist(this.getListAttribute('passwords'));
  }
  public set passwords(value: string[]) {
    this._passwords = value;
  }
  public resetPasswords() {
    this._passwords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotCoreDeviceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotCoreDeviceTimeouts) {
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
      aliases: cdktf.hashMapper(cdktf.stringToTerraform)(this._aliases),
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passwords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwords),
      registry_id: cdktf.stringToTerraform(this._registryId),
      timeouts: iotCoreDeviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
