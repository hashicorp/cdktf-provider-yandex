// https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_topic#cluster_id DataYandexMdbKafkaTopic#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_topic#name DataYandexMdbKafkaTopic#name}
  */
  readonly name: string;
}
export interface DataYandexMdbKafkaTopicTopicConfig {
}

export function dataYandexMdbKafkaTopicTopicConfigToTerraform(struct?: DataYandexMdbKafkaTopicTopicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataYandexMdbKafkaTopicTopicConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaTopicTopicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaTopicTopicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cleanup_policy - computed: true, optional: false, required: false
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // delete_retention_ms - computed: true, optional: false, required: false
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }

  // file_delete_delay_ms - computed: true, optional: false, required: false
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }

  // flush_messages - computed: true, optional: false, required: false
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }

  // flush_ms - computed: true, optional: false, required: false
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }

  // max_message_bytes - computed: true, optional: false, required: false
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }

  // min_compaction_lag_ms - computed: true, optional: false, required: false
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }

  // min_insync_replicas - computed: true, optional: false, required: false
  public get minInsyncReplicas() {
    return this.getStringAttribute('min_insync_replicas');
  }

  // preallocate - computed: true, optional: false, required: false
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }

  // retention_bytes - computed: true, optional: false, required: false
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }

  // retention_ms - computed: true, optional: false, required: false
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }

  // segment_bytes - computed: true, optional: false, required: false
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }
}

export class DataYandexMdbKafkaTopicTopicConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaTopicTopicConfigOutputReference {
    return new DataYandexMdbKafkaTopicTopicConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_topic yandex_mdb_kafka_topic}
*/
export class DataYandexMdbKafkaTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/mdb_kafka_topic yandex_mdb_kafka_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_topic',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // partitions - computed: true, optional: false, required: false
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // topic_config - computed: true, optional: false, required: false
  private _topicConfig = new DataYandexMdbKafkaTopicTopicConfigList(this, "topic_config", false);
  public get topicConfig() {
    return this._topicConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
