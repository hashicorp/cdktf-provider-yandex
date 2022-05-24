// https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#cluster_id DataYandexMdbKafkaCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#deletion_protection DataYandexMdbKafkaCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#folder_id DataYandexMdbKafkaCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#id DataYandexMdbKafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#subnet_ids DataYandexMdbKafkaCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#config DataYandexMdbKafkaCluster#config}
  */
  readonly config?: DataYandexMdbKafkaClusterConfigA;
  /**
  * topic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#topic DataYandexMdbKafkaCluster#topic}
  */
  readonly topic?: DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#user DataYandexMdbKafkaCluster#user}
  */
  readonly user?: DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable;
}
export interface DataYandexMdbKafkaClusterHost {
}

export function dataYandexMdbKafkaClusterHostToTerraform(struct?: DataYandexMdbKafkaClusterHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataYandexMdbKafkaClusterHostList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaClusterHostOutputReference {
    return new DataYandexMdbKafkaClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterMaintenanceWindow {
}

export function dataYandexMdbKafkaClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbKafkaClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexMdbKafkaClusterMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaClusterMaintenanceWindowOutputReference {
    return new DataYandexMdbKafkaClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterConfigKafkaKafkaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#auto_create_topics_enable DataYandexMdbKafkaCluster#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#compression_type DataYandexMdbKafkaCluster#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#default_replication_factor DataYandexMdbKafkaCluster#default_replication_factor}
  */
  readonly defaultReplicationFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_flush_interval_messages DataYandexMdbKafkaCluster#log_flush_interval_messages}
  */
  readonly logFlushIntervalMessages?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_flush_interval_ms DataYandexMdbKafkaCluster#log_flush_interval_ms}
  */
  readonly logFlushIntervalMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_flush_scheduler_interval_ms DataYandexMdbKafkaCluster#log_flush_scheduler_interval_ms}
  */
  readonly logFlushSchedulerIntervalMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_preallocate DataYandexMdbKafkaCluster#log_preallocate}
  */
  readonly logPreallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_retention_bytes DataYandexMdbKafkaCluster#log_retention_bytes}
  */
  readonly logRetentionBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_retention_hours DataYandexMdbKafkaCluster#log_retention_hours}
  */
  readonly logRetentionHours?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_retention_minutes DataYandexMdbKafkaCluster#log_retention_minutes}
  */
  readonly logRetentionMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_retention_ms DataYandexMdbKafkaCluster#log_retention_ms}
  */
  readonly logRetentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#log_segment_bytes DataYandexMdbKafkaCluster#log_segment_bytes}
  */
  readonly logSegmentBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#num_partitions DataYandexMdbKafkaCluster#num_partitions}
  */
  readonly numPartitions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#socket_receive_buffer_bytes DataYandexMdbKafkaCluster#socket_receive_buffer_bytes}
  */
  readonly socketReceiveBufferBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#socket_send_buffer_bytes DataYandexMdbKafkaCluster#socket_send_buffer_bytes}
  */
  readonly socketSendBufferBytes?: string;
}

export function dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference | DataYandexMdbKafkaClusterConfigKafkaKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topics_enable: cdktf.booleanToTerraform(struct!.autoCreateTopicsEnable),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    default_replication_factor: cdktf.stringToTerraform(struct!.defaultReplicationFactor),
    log_flush_interval_messages: cdktf.stringToTerraform(struct!.logFlushIntervalMessages),
    log_flush_interval_ms: cdktf.stringToTerraform(struct!.logFlushIntervalMs),
    log_flush_scheduler_interval_ms: cdktf.stringToTerraform(struct!.logFlushSchedulerIntervalMs),
    log_preallocate: cdktf.booleanToTerraform(struct!.logPreallocate),
    log_retention_bytes: cdktf.stringToTerraform(struct!.logRetentionBytes),
    log_retention_hours: cdktf.stringToTerraform(struct!.logRetentionHours),
    log_retention_minutes: cdktf.stringToTerraform(struct!.logRetentionMinutes),
    log_retention_ms: cdktf.stringToTerraform(struct!.logRetentionMs),
    log_segment_bytes: cdktf.stringToTerraform(struct!.logSegmentBytes),
    num_partitions: cdktf.stringToTerraform(struct!.numPartitions),
    socket_receive_buffer_bytes: cdktf.stringToTerraform(struct!.socketReceiveBufferBytes),
    socket_send_buffer_bytes: cdktf.stringToTerraform(struct!.socketSendBufferBytes),
  }
}

export class DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafkaKafkaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateTopicsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateTopicsEnable = this._autoCreateTopicsEnable;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._defaultReplicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReplicationFactor = this._defaultReplicationFactor;
    }
    if (this._logFlushIntervalMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMessages = this._logFlushIntervalMessages;
    }
    if (this._logFlushIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMs = this._logFlushIntervalMs;
    }
    if (this._logFlushSchedulerIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushSchedulerIntervalMs = this._logFlushSchedulerIntervalMs;
    }
    if (this._logPreallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPreallocate = this._logPreallocate;
    }
    if (this._logRetentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionBytes = this._logRetentionBytes;
    }
    if (this._logRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionHours = this._logRetentionHours;
    }
    if (this._logRetentionMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMinutes = this._logRetentionMinutes;
    }
    if (this._logRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMs = this._logRetentionMs;
    }
    if (this._logSegmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSegmentBytes = this._logSegmentBytes;
    }
    if (this._numPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartitions = this._numPartitions;
    }
    if (this._socketReceiveBufferBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketReceiveBufferBytes = this._socketReceiveBufferBytes;
    }
    if (this._socketSendBufferBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketSendBufferBytes = this._socketSendBufferBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateTopicsEnable = undefined;
      this._compressionType = undefined;
      this._defaultReplicationFactor = undefined;
      this._logFlushIntervalMessages = undefined;
      this._logFlushIntervalMs = undefined;
      this._logFlushSchedulerIntervalMs = undefined;
      this._logPreallocate = undefined;
      this._logRetentionBytes = undefined;
      this._logRetentionHours = undefined;
      this._logRetentionMinutes = undefined;
      this._logRetentionMs = undefined;
      this._logSegmentBytes = undefined;
      this._numPartitions = undefined;
      this._socketReceiveBufferBytes = undefined;
      this._socketSendBufferBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateTopicsEnable = value.autoCreateTopicsEnable;
      this._compressionType = value.compressionType;
      this._defaultReplicationFactor = value.defaultReplicationFactor;
      this._logFlushIntervalMessages = value.logFlushIntervalMessages;
      this._logFlushIntervalMs = value.logFlushIntervalMs;
      this._logFlushSchedulerIntervalMs = value.logFlushSchedulerIntervalMs;
      this._logPreallocate = value.logPreallocate;
      this._logRetentionBytes = value.logRetentionBytes;
      this._logRetentionHours = value.logRetentionHours;
      this._logRetentionMinutes = value.logRetentionMinutes;
      this._logRetentionMs = value.logRetentionMs;
      this._logSegmentBytes = value.logSegmentBytes;
      this._numPartitions = value.numPartitions;
      this._socketReceiveBufferBytes = value.socketReceiveBufferBytes;
      this._socketSendBufferBytes = value.socketSendBufferBytes;
    }
  }

  // auto_create_topics_enable - computed: false, optional: true, required: false
  private _autoCreateTopicsEnable?: boolean | cdktf.IResolvable; 
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }
  public set autoCreateTopicsEnable(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopicsEnable = value;
  }
  public resetAutoCreateTopicsEnable() {
    this._autoCreateTopicsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsEnableInput() {
    return this._autoCreateTopicsEnable;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // default_replication_factor - computed: false, optional: true, required: false
  private _defaultReplicationFactor?: string; 
  public get defaultReplicationFactor() {
    return this.getStringAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: string) {
    this._defaultReplicationFactor = value;
  }
  public resetDefaultReplicationFactor() {
    this._defaultReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }

  // log_flush_interval_messages - computed: false, optional: true, required: false
  private _logFlushIntervalMessages?: string; 
  public get logFlushIntervalMessages() {
    return this.getStringAttribute('log_flush_interval_messages');
  }
  public set logFlushIntervalMessages(value: string) {
    this._logFlushIntervalMessages = value;
  }
  public resetLogFlushIntervalMessages() {
    this._logFlushIntervalMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMessagesInput() {
    return this._logFlushIntervalMessages;
  }

  // log_flush_interval_ms - computed: false, optional: true, required: false
  private _logFlushIntervalMs?: string; 
  public get logFlushIntervalMs() {
    return this.getStringAttribute('log_flush_interval_ms');
  }
  public set logFlushIntervalMs(value: string) {
    this._logFlushIntervalMs = value;
  }
  public resetLogFlushIntervalMs() {
    this._logFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMsInput() {
    return this._logFlushIntervalMs;
  }

  // log_flush_scheduler_interval_ms - computed: false, optional: true, required: false
  private _logFlushSchedulerIntervalMs?: string; 
  public get logFlushSchedulerIntervalMs() {
    return this.getStringAttribute('log_flush_scheduler_interval_ms');
  }
  public set logFlushSchedulerIntervalMs(value: string) {
    this._logFlushSchedulerIntervalMs = value;
  }
  public resetLogFlushSchedulerIntervalMs() {
    this._logFlushSchedulerIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushSchedulerIntervalMsInput() {
    return this._logFlushSchedulerIntervalMs;
  }

  // log_preallocate - computed: false, optional: true, required: false
  private _logPreallocate?: boolean | cdktf.IResolvable; 
  public get logPreallocate() {
    return this.getBooleanAttribute('log_preallocate');
  }
  public set logPreallocate(value: boolean | cdktf.IResolvable) {
    this._logPreallocate = value;
  }
  public resetLogPreallocate() {
    this._logPreallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPreallocateInput() {
    return this._logPreallocate;
  }

  // log_retention_bytes - computed: false, optional: true, required: false
  private _logRetentionBytes?: string; 
  public get logRetentionBytes() {
    return this.getStringAttribute('log_retention_bytes');
  }
  public set logRetentionBytes(value: string) {
    this._logRetentionBytes = value;
  }
  public resetLogRetentionBytes() {
    this._logRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionBytesInput() {
    return this._logRetentionBytes;
  }

  // log_retention_hours - computed: false, optional: true, required: false
  private _logRetentionHours?: string; 
  public get logRetentionHours() {
    return this.getStringAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: string) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // log_retention_minutes - computed: false, optional: true, required: false
  private _logRetentionMinutes?: string; 
  public get logRetentionMinutes() {
    return this.getStringAttribute('log_retention_minutes');
  }
  public set logRetentionMinutes(value: string) {
    this._logRetentionMinutes = value;
  }
  public resetLogRetentionMinutes() {
    this._logRetentionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMinutesInput() {
    return this._logRetentionMinutes;
  }

  // log_retention_ms - computed: false, optional: true, required: false
  private _logRetentionMs?: string; 
  public get logRetentionMs() {
    return this.getStringAttribute('log_retention_ms');
  }
  public set logRetentionMs(value: string) {
    this._logRetentionMs = value;
  }
  public resetLogRetentionMs() {
    this._logRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMsInput() {
    return this._logRetentionMs;
  }

  // log_segment_bytes - computed: false, optional: true, required: false
  private _logSegmentBytes?: string; 
  public get logSegmentBytes() {
    return this.getStringAttribute('log_segment_bytes');
  }
  public set logSegmentBytes(value: string) {
    this._logSegmentBytes = value;
  }
  public resetLogSegmentBytes() {
    this._logSegmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSegmentBytesInput() {
    return this._logSegmentBytes;
  }

  // num_partitions - computed: false, optional: true, required: false
  private _numPartitions?: string; 
  public get numPartitions() {
    return this.getStringAttribute('num_partitions');
  }
  public set numPartitions(value: string) {
    this._numPartitions = value;
  }
  public resetNumPartitions() {
    this._numPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartitionsInput() {
    return this._numPartitions;
  }

  // socket_receive_buffer_bytes - computed: false, optional: true, required: false
  private _socketReceiveBufferBytes?: string; 
  public get socketReceiveBufferBytes() {
    return this.getStringAttribute('socket_receive_buffer_bytes');
  }
  public set socketReceiveBufferBytes(value: string) {
    this._socketReceiveBufferBytes = value;
  }
  public resetSocketReceiveBufferBytes() {
    this._socketReceiveBufferBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketReceiveBufferBytesInput() {
    return this._socketReceiveBufferBytes;
  }

  // socket_send_buffer_bytes - computed: false, optional: true, required: false
  private _socketSendBufferBytes?: string; 
  public get socketSendBufferBytes() {
    return this.getStringAttribute('socket_send_buffer_bytes');
  }
  public set socketSendBufferBytes(value: string) {
    this._socketSendBufferBytes = value;
  }
  public resetSocketSendBufferBytes() {
    this._socketSendBufferBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketSendBufferBytesInput() {
    return this._socketSendBufferBytes;
  }
}
export interface DataYandexMdbKafkaClusterConfigKafkaResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#disk_size DataYandexMdbKafkaCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#disk_type_id DataYandexMdbKafkaCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#resource_preset_id DataYandexMdbKafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function dataYandexMdbKafkaClusterConfigKafkaResourcesToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference | DataYandexMdbKafkaClusterConfigKafkaResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}

export class DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafkaResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafkaResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
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
}
export interface DataYandexMdbKafkaClusterConfigKafka {
  /**
  * kafka_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#kafka_config DataYandexMdbKafkaCluster#kafka_config}
  */
  readonly kafkaConfig?: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#resources DataYandexMdbKafkaCluster#resources}
  */
  readonly resources: DataYandexMdbKafkaClusterConfigKafkaResources;
}

export function dataYandexMdbKafkaClusterConfigKafkaToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaOutputReference | DataYandexMdbKafkaClusterConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_config: dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToTerraform(struct!.kafkaConfig),
    resources: dataYandexMdbKafkaClusterConfigKafkaResourcesToTerraform(struct!.resources),
  }
}

export class DataYandexMdbKafkaClusterConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConfig = this._kafkaConfig?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaConfig.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaConfig.internalValue = value.kafkaConfig;
      this._resources.internalValue = value.resources;
    }
  }

  // kafka_config - computed: false, optional: true, required: false
  private _kafkaConfig = new DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference(this, "kafka_config");
  public get kafkaConfig() {
    return this._kafkaConfig;
  }
  public putKafkaConfig(value: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig) {
    this._kafkaConfig.internalValue = value;
  }
  public resetKafkaConfig() {
    this._kafkaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConfigInput() {
    return this._kafkaConfig.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbKafkaClusterConfigKafkaResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterConfigZookeeperResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#disk_size DataYandexMdbKafkaCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#disk_type_id DataYandexMdbKafkaCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#resource_preset_id DataYandexMdbKafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbKafkaClusterConfigZookeeperResourcesToTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference | DataYandexMdbKafkaClusterConfigZookeeperResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}

export class DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigZookeeperResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigZookeeperResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbKafkaClusterConfigZookeeper {
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#resources DataYandexMdbKafkaCluster#resources}
  */
  readonly resources?: DataYandexMdbKafkaClusterConfigZookeeperResources;
}

export function dataYandexMdbKafkaClusterConfigZookeeperToTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperOutputReference | DataYandexMdbKafkaClusterConfigZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataYandexMdbKafkaClusterConfigZookeeperResourcesToTerraform(struct!.resources),
  }
}

export class DataYandexMdbKafkaClusterConfigZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigZookeeper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigZookeeper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbKafkaClusterConfigZookeeperResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterConfigA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#assign_public_ip DataYandexMdbKafkaCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#brokers_count DataYandexMdbKafkaCluster#brokers_count}
  */
  readonly brokersCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#schema_registry DataYandexMdbKafkaCluster#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#unmanaged_topics DataYandexMdbKafkaCluster#unmanaged_topics}
  */
  readonly unmanagedTopics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#version DataYandexMdbKafkaCluster#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#zones DataYandexMdbKafkaCluster#zones}
  */
  readonly zones: string[];
  /**
  * kafka block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#kafka DataYandexMdbKafkaCluster#kafka}
  */
  readonly kafka: DataYandexMdbKafkaClusterConfigKafka;
  /**
  * zookeeper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#zookeeper DataYandexMdbKafkaCluster#zookeeper}
  */
  readonly zookeeper?: DataYandexMdbKafkaClusterConfigZookeeper;
}

export function dataYandexMdbKafkaClusterConfigAToTerraform(struct?: DataYandexMdbKafkaClusterConfigAOutputReference | DataYandexMdbKafkaClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    brokers_count: cdktf.numberToTerraform(struct!.brokersCount),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
    unmanaged_topics: cdktf.booleanToTerraform(struct!.unmanagedTopics),
    version: cdktf.stringToTerraform(struct!.version),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
    kafka: dataYandexMdbKafkaClusterConfigKafkaToTerraform(struct!.kafka),
    zookeeper: dataYandexMdbKafkaClusterConfigZookeeperToTerraform(struct!.zookeeper),
  }
}

export class DataYandexMdbKafkaClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._brokersCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokersCount = this._brokersCount;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    if (this._unmanagedTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanagedTopics = this._unmanagedTopics;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._zookeeper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeper = this._zookeeper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._brokersCount = undefined;
      this._schemaRegistry = undefined;
      this._unmanagedTopics = undefined;
      this._version = undefined;
      this._zones = undefined;
      this._kafka.internalValue = undefined;
      this._zookeeper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._brokersCount = value.brokersCount;
      this._schemaRegistry = value.schemaRegistry;
      this._unmanagedTopics = value.unmanagedTopics;
      this._version = value.version;
      this._zones = value.zones;
      this._kafka.internalValue = value.kafka;
      this._zookeeper.internalValue = value.zookeeper;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // brokers_count - computed: false, optional: true, required: false
  private _brokersCount?: number; 
  public get brokersCount() {
    return this.getNumberAttribute('brokers_count');
  }
  public set brokersCount(value: number) {
    this._brokersCount = value;
  }
  public resetBrokersCount() {
    this._brokersCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersCountInput() {
    return this._brokersCount;
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry?: boolean | cdktf.IResolvable; 
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }
  public set schemaRegistry(value: boolean | cdktf.IResolvable) {
    this._schemaRegistry = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry;
  }

  // unmanaged_topics - computed: false, optional: true, required: false
  private _unmanagedTopics?: boolean | cdktf.IResolvable; 
  public get unmanagedTopics() {
    return this.getBooleanAttribute('unmanaged_topics');
  }
  public set unmanagedTopics(value: boolean | cdktf.IResolvable) {
    this._unmanagedTopics = value;
  }
  public resetUnmanagedTopics() {
    this._unmanagedTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedTopicsInput() {
    return this._unmanagedTopics;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // kafka - computed: false, optional: false, required: true
  private _kafka = new DataYandexMdbKafkaClusterConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataYandexMdbKafkaClusterConfigKafka) {
    this._kafka.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // zookeeper - computed: false, optional: true, required: false
  private _zookeeper = new DataYandexMdbKafkaClusterConfigZookeeperOutputReference(this, "zookeeper");
  public get zookeeper() {
    return this._zookeeper;
  }
  public putZookeeper(value: DataYandexMdbKafkaClusterConfigZookeeper) {
    this._zookeeper.internalValue = value;
  }
  public resetZookeeper() {
    this._zookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperInput() {
    return this._zookeeper.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterTopicTopicConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#cleanup_policy DataYandexMdbKafkaCluster#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#compression_type DataYandexMdbKafkaCluster#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#delete_retention_ms DataYandexMdbKafkaCluster#delete_retention_ms}
  */
  readonly deleteRetentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#file_delete_delay_ms DataYandexMdbKafkaCluster#file_delete_delay_ms}
  */
  readonly fileDeleteDelayMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#flush_messages DataYandexMdbKafkaCluster#flush_messages}
  */
  readonly flushMessages?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#flush_ms DataYandexMdbKafkaCluster#flush_ms}
  */
  readonly flushMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#max_message_bytes DataYandexMdbKafkaCluster#max_message_bytes}
  */
  readonly maxMessageBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#min_compaction_lag_ms DataYandexMdbKafkaCluster#min_compaction_lag_ms}
  */
  readonly minCompactionLagMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#min_insync_replicas DataYandexMdbKafkaCluster#min_insync_replicas}
  */
  readonly minInsyncReplicas?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#preallocate DataYandexMdbKafkaCluster#preallocate}
  */
  readonly preallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#retention_bytes DataYandexMdbKafkaCluster#retention_bytes}
  */
  readonly retentionBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#retention_ms DataYandexMdbKafkaCluster#retention_ms}
  */
  readonly retentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#segment_bytes DataYandexMdbKafkaCluster#segment_bytes}
  */
  readonly segmentBytes?: string;
}

export function dataYandexMdbKafkaClusterTopicTopicConfigToTerraform(struct?: DataYandexMdbKafkaClusterTopicTopicConfigOutputReference | DataYandexMdbKafkaClusterTopicTopicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    delete_retention_ms: cdktf.stringToTerraform(struct!.deleteRetentionMs),
    file_delete_delay_ms: cdktf.stringToTerraform(struct!.fileDeleteDelayMs),
    flush_messages: cdktf.stringToTerraform(struct!.flushMessages),
    flush_ms: cdktf.stringToTerraform(struct!.flushMs),
    max_message_bytes: cdktf.stringToTerraform(struct!.maxMessageBytes),
    min_compaction_lag_ms: cdktf.stringToTerraform(struct!.minCompactionLagMs),
    min_insync_replicas: cdktf.stringToTerraform(struct!.minInsyncReplicas),
    preallocate: cdktf.booleanToTerraform(struct!.preallocate),
    retention_bytes: cdktf.stringToTerraform(struct!.retentionBytes),
    retention_ms: cdktf.stringToTerraform(struct!.retentionMs),
    segment_bytes: cdktf.stringToTerraform(struct!.segmentBytes),
  }
}

export class DataYandexMdbKafkaClusterTopicTopicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterTopicTopicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._deleteRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionMs = this._deleteRetentionMs;
    }
    if (this._fileDeleteDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDeleteDelayMs = this._fileDeleteDelayMs;
    }
    if (this._flushMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMessages = this._flushMessages;
    }
    if (this._flushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMs = this._flushMs;
    }
    if (this._maxMessageBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageBytes = this._maxMessageBytes;
    }
    if (this._minCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCompactionLagMs = this._minCompactionLagMs;
    }
    if (this._minInsyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsyncReplicas = this._minInsyncReplicas;
    }
    if (this._preallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preallocate = this._preallocate;
    }
    if (this._retentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionBytes = this._retentionBytes;
    }
    if (this._retentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionMs = this._retentionMs;
    }
    if (this._segmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentBytes = this._segmentBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterTopicTopicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._compressionType = undefined;
      this._deleteRetentionMs = undefined;
      this._fileDeleteDelayMs = undefined;
      this._flushMessages = undefined;
      this._flushMs = undefined;
      this._maxMessageBytes = undefined;
      this._minCompactionLagMs = undefined;
      this._minInsyncReplicas = undefined;
      this._preallocate = undefined;
      this._retentionBytes = undefined;
      this._retentionMs = undefined;
      this._segmentBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._compressionType = value.compressionType;
      this._deleteRetentionMs = value.deleteRetentionMs;
      this._fileDeleteDelayMs = value.fileDeleteDelayMs;
      this._flushMessages = value.flushMessages;
      this._flushMs = value.flushMs;
      this._maxMessageBytes = value.maxMessageBytes;
      this._minCompactionLagMs = value.minCompactionLagMs;
      this._minInsyncReplicas = value.minInsyncReplicas;
      this._preallocate = value.preallocate;
      this._retentionBytes = value.retentionBytes;
      this._retentionMs = value.retentionMs;
      this._segmentBytes = value.segmentBytes;
    }
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // delete_retention_ms - computed: false, optional: true, required: false
  private _deleteRetentionMs?: string; 
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }
  public set deleteRetentionMs(value: string) {
    this._deleteRetentionMs = value;
  }
  public resetDeleteRetentionMs() {
    this._deleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionMsInput() {
    return this._deleteRetentionMs;
  }

  // file_delete_delay_ms - computed: false, optional: true, required: false
  private _fileDeleteDelayMs?: string; 
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }
  public set fileDeleteDelayMs(value: string) {
    this._fileDeleteDelayMs = value;
  }
  public resetFileDeleteDelayMs() {
    this._fileDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDeleteDelayMsInput() {
    return this._fileDeleteDelayMs;
  }

  // flush_messages - computed: false, optional: true, required: false
  private _flushMessages?: string; 
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }
  public set flushMessages(value: string) {
    this._flushMessages = value;
  }
  public resetFlushMessages() {
    this._flushMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMessagesInput() {
    return this._flushMessages;
  }

  // flush_ms - computed: false, optional: true, required: false
  private _flushMs?: string; 
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }
  public set flushMs(value: string) {
    this._flushMs = value;
  }
  public resetFlushMs() {
    this._flushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMsInput() {
    return this._flushMs;
  }

  // max_message_bytes - computed: false, optional: true, required: false
  private _maxMessageBytes?: string; 
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: string) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // min_compaction_lag_ms - computed: false, optional: true, required: false
  private _minCompactionLagMs?: string; 
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }
  public set minCompactionLagMs(value: string) {
    this._minCompactionLagMs = value;
  }
  public resetMinCompactionLagMs() {
    this._minCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCompactionLagMsInput() {
    return this._minCompactionLagMs;
  }

  // min_insync_replicas - computed: false, optional: true, required: false
  private _minInsyncReplicas?: string; 
  public get minInsyncReplicas() {
    return this.getStringAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: string) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
  }

  // preallocate - computed: false, optional: true, required: false
  private _preallocate?: boolean | cdktf.IResolvable; 
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }
  public set preallocate(value: boolean | cdktf.IResolvable) {
    this._preallocate = value;
  }
  public resetPreallocate() {
    this._preallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preallocateInput() {
    return this._preallocate;
  }

  // retention_bytes - computed: false, optional: true, required: false
  private _retentionBytes?: string; 
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }
  public set retentionBytes(value: string) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_ms - computed: false, optional: true, required: false
  private _retentionMs?: string; 
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }
  public set retentionMs(value: string) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // segment_bytes - computed: false, optional: true, required: false
  private _segmentBytes?: string; 
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }
  public set segmentBytes(value: string) {
    this._segmentBytes = value;
  }
  public resetSegmentBytes() {
    this._segmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentBytesInput() {
    return this._segmentBytes;
  }
}
export interface DataYandexMdbKafkaClusterTopic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#cluster_id DataYandexMdbKafkaCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#partitions DataYandexMdbKafkaCluster#partitions}
  */
  readonly partitions: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#replication_factor DataYandexMdbKafkaCluster#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * topic_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#topic_config DataYandexMdbKafkaCluster#topic_config}
  */
  readonly topicConfig?: DataYandexMdbKafkaClusterTopicTopicConfig;
}

export function dataYandexMdbKafkaClusterTopicToTerraform(struct?: DataYandexMdbKafkaClusterTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    name: cdktf.stringToTerraform(struct!.name),
    partitions: cdktf.numberToTerraform(struct!.partitions),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    topic_config: dataYandexMdbKafkaClusterTopicTopicConfigToTerraform(struct!.topicConfig),
  }
}

export class DataYandexMdbKafkaClusterTopicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterTopic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._topicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicConfig = this._topicConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterTopic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._name = undefined;
      this._partitions = undefined;
      this._replicationFactor = undefined;
      this._topicConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._name = value.name;
      this._partitions = value.partitions;
      this._replicationFactor = value.replicationFactor;
      this._topicConfig.internalValue = value.topicConfig;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // topic_config - computed: false, optional: true, required: false
  private _topicConfig = new DataYandexMdbKafkaClusterTopicTopicConfigOutputReference(this, "topic_config");
  public get topicConfig() {
    return this._topicConfig;
  }
  public putTopicConfig(value: DataYandexMdbKafkaClusterTopicTopicConfig) {
    this._topicConfig.internalValue = value;
  }
  public resetTopicConfig() {
    this._topicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigInput() {
    return this._topicConfig.internalValue;
  }
}

export class DataYandexMdbKafkaClusterTopicList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterTopicOutputReference {
    return new DataYandexMdbKafkaClusterTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterUserPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#role DataYandexMdbKafkaCluster#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#topic_name DataYandexMdbKafkaCluster#topic_name}
  */
  readonly topicName: string;
}

export function dataYandexMdbKafkaClusterUserPermissionToTerraform(struct?: DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}

export class DataYandexMdbKafkaClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._topicName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._topicName = value.topicName;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}

export class DataYandexMdbKafkaClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterUserPermissionOutputReference {
    return new DataYandexMdbKafkaClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#password DataYandexMdbKafkaCluster#password}
  */
  readonly password: string;
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster#permission DataYandexMdbKafkaCluster#permission}
  */
  readonly permission?: DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable;
}

export function dataYandexMdbKafkaClusterUserToTerraform(struct?: DataYandexMdbKafkaClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.listMapper(dataYandexMdbKafkaClusterUserPermissionToTerraform)(struct!.permission),
  }
}

export class DataYandexMdbKafkaClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._permission.internalValue = value.permission;
    }
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new DataYandexMdbKafkaClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}

export class DataYandexMdbKafkaClusterUserList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterUserOutputReference {
    return new DataYandexMdbKafkaClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster yandex_mdb_kafka_cluster}
*/
export class DataYandexMdbKafkaCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_cluster yandex_mdb_kafka_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbKafkaClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbKafkaClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_cluster',
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
    this._clusterId = config.clusterId;
    this._deletionProtection = config.deletionProtection;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._subnetIds = config.subnetIds;
    this._config.internalValue = config.config;
    this._topic.internalValue = config.topic;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataYandexMdbKafkaClusterHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // host_group_ids - computed: true, optional: false, required: false
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbKafkaClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataYandexMdbKafkaClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataYandexMdbKafkaClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new DataYandexMdbKafkaClusterTopicList(this, "topic", false);
  public get topic() {
    return this._topic;
  }
  public putTopic(value: DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataYandexMdbKafkaClusterUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      config: dataYandexMdbKafkaClusterConfigAToTerraform(this._config.internalValue),
      topic: cdktf.listMapper(dataYandexMdbKafkaClusterTopicToTerraform)(this._topic.internalValue),
      user: cdktf.listMapper(dataYandexMdbKafkaClusterUserToTerraform)(this._user.internalValue),
    };
  }
}
