// https://www.terraform.io/docs/providers/yandex/d/compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk#disk_id DataYandexComputeDisk#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk#folder_id DataYandexComputeDisk#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk#name DataYandexComputeDisk#name}
  */
  readonly name?: string;
  /**
  * disk_placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk#disk_placement_policy DataYandexComputeDisk#disk_placement_policy}
  */
  readonly diskPlacementPolicy?: DataYandexComputeDiskDiskPlacementPolicy;
}
export interface DataYandexComputeDiskDiskPlacementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk#disk_placement_group_id DataYandexComputeDisk#disk_placement_group_id}
  */
  readonly diskPlacementGroupId: string;
}

export function dataYandexComputeDiskDiskPlacementPolicyToTerraform(struct?: DataYandexComputeDiskDiskPlacementPolicyOutputReference | DataYandexComputeDiskDiskPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_placement_group_id: cdktf.stringToTerraform(struct!.diskPlacementGroupId),
  }
}

export class DataYandexComputeDiskDiskPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexComputeDiskDiskPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPlacementGroupId = this._diskPlacementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeDiskDiskPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskPlacementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskPlacementGroupId = value.diskPlacementGroupId;
    }
  }

  // disk_placement_group_id - computed: false, optional: false, required: true
  private _diskPlacementGroupId?: string; 
  public get diskPlacementGroupId() {
    return this.getStringAttribute('disk_placement_group_id');
  }
  public set diskPlacementGroupId(value: string) {
    this._diskPlacementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPlacementGroupIdInput() {
    return this._diskPlacementGroupId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk yandex_compute_disk}
*/
export class DataYandexComputeDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/compute_disk yandex_compute_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexComputeDiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexComputeDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_disk',
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
    this._diskId = config.diskId;
    this._folderId = config.folderId;
    this._name = config.name;
    this._diskPlacementPolicy.internalValue = config.diskPlacementPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // name - computed: true, optional: true, required: false
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

  // product_ids - computed: true, optional: false, required: false
  public get productIds() {
    return this.getListAttribute('product_ids');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // disk_placement_policy - computed: false, optional: true, required: false
  private _diskPlacementPolicy = new DataYandexComputeDiskDiskPlacementPolicyOutputReference(this, "disk_placement_policy");
  public get diskPlacementPolicy() {
    return this._diskPlacementPolicy;
  }
  public putDiskPlacementPolicy(value: DataYandexComputeDiskDiskPlacementPolicy) {
    this._diskPlacementPolicy.internalValue = value;
  }
  public resetDiskPlacementPolicy() {
    this._diskPlacementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPlacementPolicyInput() {
    return this._diskPlacementPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      name: cdktf.stringToTerraform(this._name),
      disk_placement_policy: dataYandexComputeDiskDiskPlacementPolicyToTerraform(this._diskPlacementPolicy.internalValue),
    };
  }
}
