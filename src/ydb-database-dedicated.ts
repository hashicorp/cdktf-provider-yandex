// https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbDatabaseDedicatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#assign_public_ips YdbDatabaseDedicated#assign_public_ips}
  */
  readonly assignPublicIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#description YdbDatabaseDedicated#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#folder_id YdbDatabaseDedicated#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#id YdbDatabaseDedicated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#labels YdbDatabaseDedicated#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#location_id YdbDatabaseDedicated#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#name YdbDatabaseDedicated#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#network_id YdbDatabaseDedicated#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#resource_preset_id YdbDatabaseDedicated#resource_preset_id}
  */
  readonly resourcePresetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#subnet_ids YdbDatabaseDedicated#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#location YdbDatabaseDedicated#location}
  */
  readonly location?: YdbDatabaseDedicatedLocation;
  /**
  * scale_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#scale_policy YdbDatabaseDedicated#scale_policy}
  */
  readonly scalePolicy: YdbDatabaseDedicatedScalePolicy;
  /**
  * storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#storage_config YdbDatabaseDedicated#storage_config}
  */
  readonly storageConfig: YdbDatabaseDedicatedStorageConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#timeouts YdbDatabaseDedicated#timeouts}
  */
  readonly timeouts?: YdbDatabaseDedicatedTimeouts;
}
export interface YdbDatabaseDedicatedLocationRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#id YdbDatabaseDedicated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function ydbDatabaseDedicatedLocationRegionToTerraform(struct?: YdbDatabaseDedicatedLocationRegionOutputReference | YdbDatabaseDedicatedLocationRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class YdbDatabaseDedicatedLocationRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedLocationRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedLocationRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface YdbDatabaseDedicatedLocation {
  /**
  * region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#region YdbDatabaseDedicated#region}
  */
  readonly region?: YdbDatabaseDedicatedLocationRegion;
}

export function ydbDatabaseDedicatedLocationToTerraform(struct?: YdbDatabaseDedicatedLocationOutputReference | YdbDatabaseDedicatedLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: ydbDatabaseDedicatedLocationRegionToTerraform(struct!.region),
  }
}

export class YdbDatabaseDedicatedLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region.internalValue = value.region;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region = new YdbDatabaseDedicatedLocationRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: YdbDatabaseDedicatedLocationRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface YdbDatabaseDedicatedScalePolicyFixedScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#size YdbDatabaseDedicated#size}
  */
  readonly size: number;
}

export function ydbDatabaseDedicatedScalePolicyFixedScaleToTerraform(struct?: YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference | YdbDatabaseDedicatedScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicyFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicyFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface YdbDatabaseDedicatedScalePolicy {
  /**
  * fixed_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#fixed_scale YdbDatabaseDedicated#fixed_scale}
  */
  readonly fixedScale: YdbDatabaseDedicatedScalePolicyFixedScale;
}

export function ydbDatabaseDedicatedScalePolicyToTerraform(struct?: YdbDatabaseDedicatedScalePolicyOutputReference | YdbDatabaseDedicatedScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_scale: ydbDatabaseDedicatedScalePolicyFixedScaleToTerraform(struct!.fixedScale),
  }
}

export class YdbDatabaseDedicatedScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedScale = this._fixedScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedScale.internalValue = value.fixedScale;
    }
  }

  // fixed_scale - computed: false, optional: false, required: true
  private _fixedScale = new YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference(this, "fixed_scale");
  public get fixedScale() {
    return this._fixedScale;
  }
  public putFixedScale(value: YdbDatabaseDedicatedScalePolicyFixedScale) {
    this._fixedScale.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale.internalValue;
  }
}
export interface YdbDatabaseDedicatedStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#group_count YdbDatabaseDedicated#group_count}
  */
  readonly groupCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#storage_type_id YdbDatabaseDedicated#storage_type_id}
  */
  readonly storageTypeId: string;
}

export function ydbDatabaseDedicatedStorageConfigToTerraform(struct?: YdbDatabaseDedicatedStorageConfigOutputReference | YdbDatabaseDedicatedStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_count: cdktf.numberToTerraform(struct!.groupCount),
    storage_type_id: cdktf.stringToTerraform(struct!.storageTypeId),
  }
}

export class YdbDatabaseDedicatedStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupCount = this._groupCount;
    }
    if (this._storageTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTypeId = this._storageTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupCount = undefined;
      this._storageTypeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupCount = value.groupCount;
      this._storageTypeId = value.storageTypeId;
    }
  }

  // group_count - computed: false, optional: false, required: true
  private _groupCount?: number; 
  public get groupCount() {
    return this.getNumberAttribute('group_count');
  }
  public set groupCount(value: number) {
    this._groupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCountInput() {
    return this._groupCount;
  }

  // storage_type_id - computed: false, optional: false, required: true
  private _storageTypeId?: string; 
  public get storageTypeId() {
    return this.getStringAttribute('storage_type_id');
  }
  public set storageTypeId(value: string) {
    this._storageTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeIdInput() {
    return this._storageTypeId;
  }
}
export interface YdbDatabaseDedicatedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated#default YdbDatabaseDedicated#default}
  */
  readonly default?: string;
}

export function ydbDatabaseDedicatedTimeoutsToTerraform(struct?: YdbDatabaseDedicatedTimeoutsOutputReference | YdbDatabaseDedicatedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class YdbDatabaseDedicatedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated yandex_ydb_database_dedicated}
*/
export class YdbDatabaseDedicated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_database_dedicated";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/ydb_database_dedicated yandex_ydb_database_dedicated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbDatabaseDedicatedConfig
  */
  public constructor(scope: Construct, id: string, config: YdbDatabaseDedicatedConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_database_dedicated',
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
    this._assignPublicIps = config.assignPublicIps;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._locationId = config.locationId;
    this._name = config.name;
    this._networkId = config.networkId;
    this._resourcePresetId = config.resourcePresetId;
    this._subnetIds = config.subnetIds;
    this._location.internalValue = config.location;
    this._scalePolicy.internalValue = config.scalePolicy;
    this._storageConfig.internalValue = config.storageConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_public_ips - computed: false, optional: true, required: false
  private _assignPublicIps?: boolean | cdktf.IResolvable; 
  public get assignPublicIps() {
    return this.getBooleanAttribute('assign_public_ips');
  }
  public set assignPublicIps(value: boolean | cdktf.IResolvable) {
    this._assignPublicIps = value;
  }
  public resetAssignPublicIps() {
    this._assignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpsInput() {
    return this._assignPublicIps;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_path - computed: true, optional: false, required: false
  public get databasePath() {
    return this.getStringAttribute('database_path');
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

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // ydb_api_endpoint - computed: true, optional: false, required: false
  public get ydbApiEndpoint() {
    return this.getStringAttribute('ydb_api_endpoint');
  }

  // ydb_full_endpoint - computed: true, optional: false, required: false
  public get ydbFullEndpoint() {
    return this.getStringAttribute('ydb_full_endpoint');
  }

  // location - computed: false, optional: true, required: false
  private _location = new YdbDatabaseDedicatedLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: YdbDatabaseDedicatedLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // scale_policy - computed: false, optional: false, required: true
  private _scalePolicy = new YdbDatabaseDedicatedScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: YdbDatabaseDedicatedScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new YdbDatabaseDedicatedStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: YdbDatabaseDedicatedStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YdbDatabaseDedicatedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbDatabaseDedicatedTimeouts) {
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
      assign_public_ips: cdktf.booleanToTerraform(this._assignPublicIps),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      resource_preset_id: cdktf.stringToTerraform(this._resourcePresetId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      location: ydbDatabaseDedicatedLocationToTerraform(this._location.internalValue),
      scale_policy: ydbDatabaseDedicatedScalePolicyToTerraform(this._scalePolicy.internalValue),
      storage_config: ydbDatabaseDedicatedStorageConfigToTerraform(this._storageConfig.internalValue),
      timeouts: ydbDatabaseDedicatedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
