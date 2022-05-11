// https://www.terraform.io/docs/providers/yandex/d/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#folder_id DataYandexComputeInstance#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#instance_id DataYandexComputeInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#name DataYandexComputeInstance#name}
  */
  readonly name?: string;
  /**
  * placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#placement_policy DataYandexComputeInstance#placement_policy}
  */
  readonly placementPolicy?: DataYandexComputeInstancePlacementPolicy;
}
export interface DataYandexComputeInstanceBootDiskInitializeParams {
}

export function dataYandexComputeInstanceBootDiskInitializeParamsToTerraform(struct?: DataYandexComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexComputeInstanceBootDiskInitializeParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceBootDiskInitializeParamsOutputReference {
    return new DataYandexComputeInstanceBootDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceBootDisk {
}

export function dataYandexComputeInstanceBootDiskToTerraform(struct?: DataYandexComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // initialize_params - computed: true, optional: false, required: false
  private _initializeParams = new DataYandexComputeInstanceBootDiskInitializeParamsList(this, "initialize_params", false);
  public get initializeParams() {
    return this._initializeParams;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataYandexComputeInstanceBootDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceBootDiskOutputReference {
    return new DataYandexComputeInstanceBootDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceNetworkInterfaceDnsRecord {
}

export function dataYandexComputeInstanceNetworkInterfaceDnsRecordToTerraform(struct?: DataYandexComputeInstanceNetworkInterfaceDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceNetworkInterfaceDnsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceNetworkInterfaceDnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceNetworkInterfaceDnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceNetworkInterfaceDnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceNetworkInterfaceDnsRecordOutputReference {
    return new DataYandexComputeInstanceNetworkInterfaceDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecord {
}

export function dataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordToTerraform(struct?: DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference {
    return new DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceNetworkInterfaceNatDnsRecord {
}

export function dataYandexComputeInstanceNetworkInterfaceNatDnsRecordToTerraform(struct?: DataYandexComputeInstanceNetworkInterfaceNatDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceNetworkInterfaceNatDnsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceNetworkInterfaceNatDnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceNetworkInterfaceNatDnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_zone_id - computed: true, optional: false, required: false
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataYandexComputeInstanceNetworkInterfaceNatDnsRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceNetworkInterfaceNatDnsRecordOutputReference {
    return new DataYandexComputeInstanceNetworkInterfaceNatDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceNetworkInterface {
}

export function dataYandexComputeInstanceNetworkInterfaceToTerraform(struct?: DataYandexComputeInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_record - computed: true, optional: false, required: false
  private _dnsRecord = new DataYandexComputeInstanceNetworkInterfaceDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_dns_record - computed: true, optional: false, required: false
  private _ipv6DnsRecord = new DataYandexComputeInstanceNetworkInterfaceIpv6DnsRecordList(this, "ipv6_dns_record", false);
  public get ipv6DnsRecord() {
    return this._ipv6DnsRecord;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_dns_record - computed: true, optional: false, required: false
  private _natDnsRecord = new DataYandexComputeInstanceNetworkInterfaceNatDnsRecordList(this, "nat_dns_record", false);
  public get natDnsRecord() {
    return this._natDnsRecord;
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataYandexComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceNetworkInterfaceOutputReference {
    return new DataYandexComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceResources {
}

export function dataYandexComputeInstanceResourcesToTerraform(struct?: DataYandexComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_fraction - computed: true, optional: false, required: false
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}

export class DataYandexComputeInstanceResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceResourcesOutputReference {
    return new DataYandexComputeInstanceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceSchedulingPolicy {
}

export function dataYandexComputeInstanceSchedulingPolicyToTerraform(struct?: DataYandexComputeInstanceSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
}

export class DataYandexComputeInstanceSchedulingPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceSchedulingPolicyOutputReference {
    return new DataYandexComputeInstanceSchedulingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstanceSecondaryDisk {
}

export function dataYandexComputeInstanceSecondaryDiskToTerraform(struct?: DataYandexComputeInstanceSecondaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexComputeInstanceSecondaryDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeInstanceSecondaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstanceSecondaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataYandexComputeInstanceSecondaryDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeInstanceSecondaryDiskOutputReference {
    return new DataYandexComputeInstanceSecondaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeInstancePlacementPolicyHostAffinityRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#key DataYandexComputeInstance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#op DataYandexComputeInstance#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#values DataYandexComputeInstance#values}
  */
  readonly values?: string[];
}

export function dataYandexComputeInstancePlacementPolicyHostAffinityRulesToTerraform(struct?: DataYandexComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    op: cdktf.stringToTerraform(struct!.op),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataYandexComputeInstancePlacementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#host_affinity_rules DataYandexComputeInstance#host_affinity_rules}
  */
  readonly hostAffinityRules?: DataYandexComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance#placement_group_id DataYandexComputeInstance#placement_group_id}
  */
  readonly placementGroupId?: string;
}

export function dataYandexComputeInstancePlacementPolicyToTerraform(struct?: DataYandexComputeInstancePlacementPolicyOutputReference | DataYandexComputeInstancePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_affinity_rules: cdktf.listMapper(dataYandexComputeInstancePlacementPolicyHostAffinityRulesToTerraform)(struct!.hostAffinityRules),
    placement_group_id: cdktf.stringToTerraform(struct!.placementGroupId),
  }
}

export class DataYandexComputeInstancePlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexComputeInstancePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostAffinityRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAffinityRules = this._hostAffinityRules;
    }
    if (this._placementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupId = this._placementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeInstancePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostAffinityRules = undefined;
      this._placementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostAffinityRules = value.hostAffinityRules;
      this._placementGroupId = value.placementGroupId;
    }
  }

  // host_affinity_rules - computed: true, optional: true, required: false
  private _hostAffinityRules?: DataYandexComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable; 
  public get hostAffinityRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_affinity_rules');
  }
  public set hostAffinityRules(value: DataYandexComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable) {
    this._hostAffinityRules = value;
  }
  public resetHostAffinityRules() {
    this._hostAffinityRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAffinityRulesInput() {
    return this._hostAffinityRules;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance yandex_compute_instance}
*/
export class DataYandexComputeInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/compute_instance yandex_compute_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexComputeInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexComputeInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_instance',
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
    this._folderId = config.folderId;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._placementPolicy.internalValue = config.placementPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk - computed: true, optional: false, required: false
  private _bootDisk = new DataYandexComputeInstanceBootDiskList(this, "boot_disk", false);
  public get bootDisk() {
    return this._bootDisk;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
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

  // network_acceleration_type - computed: true, optional: false, required: false
  public get networkAccelerationType() {
    return this.getStringAttribute('network_acceleration_type');
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataYandexComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexComputeInstanceResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // scheduling_policy - computed: true, optional: false, required: false
  private _schedulingPolicy = new DataYandexComputeInstanceSchedulingPolicyList(this, "scheduling_policy", false);
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }

  // secondary_disk - computed: true, optional: false, required: false
  private _secondaryDisk = new DataYandexComputeInstanceSecondaryDiskList(this, "secondary_disk", false);
  public get secondaryDisk() {
    return this._secondaryDisk;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new DataYandexComputeInstancePlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: DataYandexComputeInstancePlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      placement_policy: dataYandexComputeInstancePlacementPolicyToTerraform(this._placementPolicy.internalValue),
    };
  }
}
