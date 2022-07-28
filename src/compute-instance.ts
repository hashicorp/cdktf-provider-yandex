// https://www.terraform.io/docs/providers/yandex/r/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#allow_recreate ComputeInstance#allow_recreate}
  */
  readonly allowRecreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#allow_stopping_for_update ComputeInstance#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#description ComputeInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#folder_id ComputeInstance#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#hostname ComputeInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#labels ComputeInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#metadata ComputeInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#name ComputeInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#network_acceleration_type ComputeInstance#network_acceleration_type}
  */
  readonly networkAccelerationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#platform_id ComputeInstance#platform_id}
  */
  readonly platformId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#service_account_id ComputeInstance#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#zone ComputeInstance#zone}
  */
  readonly zone?: string;
  /**
  * boot_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#boot_disk ComputeInstance#boot_disk}
  */
  readonly bootDisk: ComputeInstanceBootDisk;
  /**
  * local_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#local_disk ComputeInstance#local_disk}
  */
  readonly localDisk?: ComputeInstanceLocalDisk[] | cdktf.IResolvable;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#network_interface ComputeInstance#network_interface}
  */
  readonly networkInterface: ComputeInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#placement_policy ComputeInstance#placement_policy}
  */
  readonly placementPolicy?: ComputeInstancePlacementPolicy;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#resources ComputeInstance#resources}
  */
  readonly resources: ComputeInstanceResources;
  /**
  * scheduling_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#scheduling_policy ComputeInstance#scheduling_policy}
  */
  readonly schedulingPolicy?: ComputeInstanceSchedulingPolicy;
  /**
  * secondary_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#secondary_disk ComputeInstance#secondary_disk}
  */
  readonly secondaryDisk?: ComputeInstanceSecondaryDisk[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceBootDiskInitializeParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#block_size ComputeInstance#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#description ComputeInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#image_id ComputeInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#name ComputeInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#size ComputeInstance#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#snapshot_id ComputeInstance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#type ComputeInstance#type}
  */
  readonly type?: string;
}

export function computeInstanceBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceBootDiskInitializeParamsOutputReference | ComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size: cdktf.numberToTerraform(struct!.blockSize),
    description: cdktf.stringToTerraform(struct!.description),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSize = undefined;
      this._description = undefined;
      this._imageId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSize = value.blockSize;
      this._description = value.description;
      this._imageId = value.imageId;
      this._name = value.name;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
      this._type = value.type;
    }
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // description - computed: true, optional: true, required: false
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeInstanceBootDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#auto_delete ComputeInstance#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#disk_id ComputeInstance#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#initialize_params ComputeInstance#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceBootDiskInitializeParams;
}

export function computeInstanceBootDiskToTerraform(struct?: ComputeInstanceBootDiskOutputReference | ComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
    initialize_params: computeInstanceBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}

export class ComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ComputeInstanceBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ComputeInstanceBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface ComputeInstanceLocalDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#size_bytes ComputeInstance#size_bytes}
  */
  readonly sizeBytes: number;
}

export function computeInstanceLocalDiskToTerraform(struct?: ComputeInstanceLocalDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}

export class ComputeInstanceLocalDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceLocalDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceLocalDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sizeBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sizeBytes = value.sizeBytes;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // size_bytes - computed: false, optional: false, required: true
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }
}

export class ComputeInstanceLocalDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceLocalDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceLocalDiskOutputReference {
    return new ComputeInstanceLocalDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceDnsRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceDnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class ComputeInstanceNetworkInterfaceDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceDnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceIpv6DnsRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceIpv6DnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceIpv6DnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceNatDnsRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceNatDnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceNatDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ip_address ComputeInstance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ipv4 ComputeInstance#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ipv6 ComputeInstance#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ipv6_address ComputeInstance#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#nat ComputeInstance#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#nat_ip_address ComputeInstance#nat_ip_address}
  */
  readonly natIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#security_group_ids ComputeInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#subnet_id ComputeInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * dns_record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#dns_record ComputeInstance#dns_record}
  */
  readonly dnsRecord?: ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable;
  /**
  * ipv6_dns_record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#ipv6_dns_record ComputeInstance#ipv6_dns_record}
  */
  readonly ipv6DnsRecord?: ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable;
  /**
  * nat_dns_record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#nat_dns_record ComputeInstance#nat_dns_record}
  */
  readonly natDnsRecord?: ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable;
}

export function computeInstanceNetworkInterfaceToTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    nat: cdktf.booleanToTerraform(struct!.nat),
    nat_ip_address: cdktf.stringToTerraform(struct!.natIpAddress),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceDnsRecordToTerraform, true)(struct!.dnsRecord),
    ipv6_dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceIpv6DnsRecordToTerraform, true)(struct!.ipv6DnsRecord),
    nat_dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceNatDnsRecordToTerraform, true)(struct!.natDnsRecord),
  }
}

export class ComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddress = this._natIpAddress;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._dnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecord = this._dnsRecord?.internalValue;
    }
    if (this._ipv6DnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsRecord = this._ipv6DnsRecord?.internalValue;
    }
    if (this._natDnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDnsRecord = this._natDnsRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._ipv6Address = undefined;
      this._nat = undefined;
      this._natIpAddress = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._dnsRecord.internalValue = undefined;
      this._ipv6DnsRecord.internalValue = undefined;
      this._natDnsRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._ipv6Address = value.ipv6Address;
      this._nat = value.nat;
      this._natIpAddress = value.natIpAddress;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._dnsRecord.internalValue = value.dnsRecord;
      this._ipv6DnsRecord.internalValue = value.ipv6DnsRecord;
      this._natDnsRecord.internalValue = value.natDnsRecord;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_ip_address - computed: true, optional: true, required: false
  private _natIpAddress?: string; 
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }
  public set natIpAddress(value: string) {
    this._natIpAddress = value;
  }
  public resetNatIpAddress() {
    this._natIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressInput() {
    return this._natIpAddress;
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // dns_record - computed: false, optional: true, required: false
  private _dnsRecord = new ComputeInstanceNetworkInterfaceDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }
  public putDnsRecord(value: ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable) {
    this._dnsRecord.internalValue = value;
  }
  public resetDnsRecord() {
    this._dnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordInput() {
    return this._dnsRecord.internalValue;
  }

  // ipv6_dns_record - computed: false, optional: true, required: false
  private _ipv6DnsRecord = new ComputeInstanceNetworkInterfaceIpv6DnsRecordList(this, "ipv6_dns_record", false);
  public get ipv6DnsRecord() {
    return this._ipv6DnsRecord;
  }
  public putIpv6DnsRecord(value: ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable) {
    this._ipv6DnsRecord.internalValue = value;
  }
  public resetIpv6DnsRecord() {
    this._ipv6DnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsRecordInput() {
    return this._ipv6DnsRecord.internalValue;
  }

  // nat_dns_record - computed: false, optional: true, required: false
  private _natDnsRecord = new ComputeInstanceNetworkInterfaceNatDnsRecordList(this, "nat_dns_record", false);
  public get natDnsRecord() {
    return this._natDnsRecord;
  }
  public putNatDnsRecord(value: ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable) {
    this._natDnsRecord.internalValue = value;
  }
  public resetNatDnsRecord() {
    this._natDnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDnsRecordInput() {
    return this._natDnsRecord.internalValue;
  }
}

export class ComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceOutputReference {
    return new ComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstancePlacementPolicyHostAffinityRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#key ComputeInstance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#op ComputeInstance#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#values ComputeInstance#values}
  */
  readonly values?: string[];
}

export function computeInstancePlacementPolicyHostAffinityRulesToTerraform(struct?: ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    op: cdktf.stringToTerraform(struct!.op),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ComputeInstancePlacementPolicyHostAffinityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._op = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._op = value.op;
      this._values = value.values;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // op - computed: true, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeInstancePlacementPolicyHostAffinityRulesList extends cdktf.ComplexList {
  public internalValue? : ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstancePlacementPolicyHostAffinityRulesOutputReference {
    return new ComputeInstancePlacementPolicyHostAffinityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstancePlacementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#host_affinity_rules ComputeInstance#host_affinity_rules}
  */
  readonly hostAffinityRules?: ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#placement_group_id ComputeInstance#placement_group_id}
  */
  readonly placementGroupId?: string;
}

export function computeInstancePlacementPolicyToTerraform(struct?: ComputeInstancePlacementPolicyOutputReference | ComputeInstancePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_affinity_rules: cdktf.listMapper(computeInstancePlacementPolicyHostAffinityRulesToTerraform, false)(struct!.hostAffinityRules),
    placement_group_id: cdktf.stringToTerraform(struct!.placementGroupId),
  }
}

export class ComputeInstancePlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstancePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostAffinityRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAffinityRules = this._hostAffinityRules?.internalValue;
    }
    if (this._placementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupId = this._placementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstancePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostAffinityRules.internalValue = undefined;
      this._placementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostAffinityRules.internalValue = value.hostAffinityRules;
      this._placementGroupId = value.placementGroupId;
    }
  }

  // host_affinity_rules - computed: true, optional: true, required: false
  private _hostAffinityRules = new ComputeInstancePlacementPolicyHostAffinityRulesList(this, "host_affinity_rules", false);
  public get hostAffinityRules() {
    return this._hostAffinityRules;
  }
  public putHostAffinityRules(value: ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable) {
    this._hostAffinityRules.internalValue = value;
  }
  public resetHostAffinityRules() {
    this._hostAffinityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAffinityRulesInput() {
    return this._hostAffinityRules.internalValue;
  }

  // placement_group_id - computed: false, optional: true, required: false
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  public resetPlacementGroupId() {
    this._placementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }
}
export interface ComputeInstanceResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#core_fraction ComputeInstance#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#cores ComputeInstance#cores}
  */
  readonly cores: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#gpus ComputeInstance#gpus}
  */
  readonly gpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#memory ComputeInstance#memory}
  */
  readonly memory: number;
}

export function computeInstanceResourcesToTerraform(struct?: ComputeInstanceResourcesOutputReference | ComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export class ComputeInstanceResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._gpus = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._gpus = value.gpus;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: false, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ComputeInstanceSchedulingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#preemptible ComputeInstance#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
}

export function computeInstanceSchedulingPolicyToTerraform(struct?: ComputeInstanceSchedulingPolicyOutputReference | ComputeInstanceSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}

export class ComputeInstanceSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
    }
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }
}
export interface ComputeInstanceSecondaryDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#auto_delete ComputeInstance#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#disk_id ComputeInstance#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
}

export function computeInstanceSecondaryDiskToTerraform(struct?: ComputeInstanceSecondaryDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ComputeInstanceSecondaryDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceSecondaryDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSecondaryDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ComputeInstanceSecondaryDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceSecondaryDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceSecondaryDiskOutputReference {
    return new ComputeInstanceSecondaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeoutsOutputReference | ComputeInstanceTimeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance yandex_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/compute_instance yandex_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_instance',
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
    this._allowRecreate = config.allowRecreate;
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._description = config.description;
    this._folderId = config.folderId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networkAccelerationType = config.networkAccelerationType;
    this._platformId = config.platformId;
    this._serviceAccountId = config.serviceAccountId;
    this._zone = config.zone;
    this._bootDisk.internalValue = config.bootDisk;
    this._localDisk.internalValue = config.localDisk;
    this._networkInterface.internalValue = config.networkInterface;
    this._placementPolicy.internalValue = config.placementPolicy;
    this._resources.internalValue = config.resources;
    this._schedulingPolicy.internalValue = config.schedulingPolicy;
    this._secondaryDisk.internalValue = config.secondaryDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_recreate - computed: false, optional: true, required: false
  private _allowRecreate?: boolean | cdktf.IResolvable; 
  public get allowRecreate() {
    return this.getBooleanAttribute('allow_recreate');
  }
  public set allowRecreate(value: boolean | cdktf.IResolvable) {
    this._allowRecreate = value;
  }
  public resetAllowRecreate() {
    this._allowRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecreateInput() {
    return this._allowRecreate;
  }

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // labels - computed: false, optional: true, required: false
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // network_acceleration_type - computed: false, optional: true, required: false
  private _networkAccelerationType?: string; 
  public get networkAccelerationType() {
    return this.getStringAttribute('network_acceleration_type');
  }
  public set networkAccelerationType(value: string) {
    this._networkAccelerationType = value;
  }
  public resetNetworkAccelerationType() {
    this._networkAccelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccelerationTypeInput() {
    return this._networkAccelerationType;
  }

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk = new ComputeInstanceBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ComputeInstanceBootDisk) {
    this._bootDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // local_disk - computed: false, optional: true, required: false
  private _localDisk = new ComputeInstanceLocalDiskList(this, "local_disk", false);
  public get localDisk() {
    return this._localDisk;
  }
  public putLocalDisk(value: ComputeInstanceLocalDisk[] | cdktf.IResolvable) {
    this._localDisk.internalValue = value;
  }
  public resetLocalDisk() {
    this._localDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskInput() {
    return this._localDisk.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new ComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new ComputeInstancePlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: ComputeInstancePlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new ComputeInstanceResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: ComputeInstanceResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new ComputeInstanceSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: ComputeInstanceSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }

  // secondary_disk - computed: false, optional: true, required: false
  private _secondaryDisk = new ComputeInstanceSecondaryDiskList(this, "secondary_disk", false);
  public get secondaryDisk() {
    return this._secondaryDisk;
  }
  public putSecondaryDisk(value: ComputeInstanceSecondaryDisk[] | cdktf.IResolvable) {
    this._secondaryDisk.internalValue = value;
  }
  public resetSecondaryDisk() {
    this._secondaryDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDiskInput() {
    return this._secondaryDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
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
      allow_recreate: cdktf.booleanToTerraform(this._allowRecreate),
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network_acceleration_type: cdktf.stringToTerraform(this._networkAccelerationType),
      platform_id: cdktf.stringToTerraform(this._platformId),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      zone: cdktf.stringToTerraform(this._zone),
      boot_disk: computeInstanceBootDiskToTerraform(this._bootDisk.internalValue),
      local_disk: cdktf.listMapper(computeInstanceLocalDiskToTerraform, true)(this._localDisk.internalValue),
      network_interface: cdktf.listMapper(computeInstanceNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      placement_policy: computeInstancePlacementPolicyToTerraform(this._placementPolicy.internalValue),
      resources: computeInstanceResourcesToTerraform(this._resources.internalValue),
      scheduling_policy: computeInstanceSchedulingPolicyToTerraform(this._schedulingPolicy.internalValue),
      secondary_disk: cdktf.listMapper(computeInstanceSecondaryDiskToTerraform, true)(this._secondaryDisk.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
