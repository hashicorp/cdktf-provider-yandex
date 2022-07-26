// https://www.terraform.io/docs/providers/yandex/r/function_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#description FunctionTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#folder_id FunctionTrigger#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#id FunctionTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#labels FunctionTrigger#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#name FunctionTrigger#name}
  */
  readonly name: string;
  /**
  * dlq block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#dlq FunctionTrigger#dlq}
  */
  readonly dlq?: FunctionTriggerDlq;
  /**
  * function block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#function FunctionTrigger#function}
  */
  readonly function: FunctionTriggerFunction;
  /**
  * iot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#iot FunctionTrigger#iot}
  */
  readonly iot?: FunctionTriggerIot;
  /**
  * log_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#log_group FunctionTrigger#log_group}
  */
  readonly logGroup?: FunctionTriggerLogGroup;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#logging FunctionTrigger#logging}
  */
  readonly logging?: FunctionTriggerLogging;
  /**
  * message_queue block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#message_queue FunctionTrigger#message_queue}
  */
  readonly messageQueue?: FunctionTriggerMessageQueue;
  /**
  * object_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#object_storage FunctionTrigger#object_storage}
  */
  readonly objectStorage?: FunctionTriggerObjectStorage;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#timeouts FunctionTrigger#timeouts}
  */
  readonly timeouts?: FunctionTriggerTimeouts;
  /**
  * timer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#timer FunctionTrigger#timer}
  */
  readonly timer?: FunctionTriggerTimer;
}
export interface FunctionTriggerDlq {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#queue_id FunctionTrigger#queue_id}
  */
  readonly queueId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function functionTriggerDlqToTerraform(struct?: FunctionTriggerDlqOutputReference | FunctionTriggerDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}

export class FunctionTriggerDlqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerDlq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerDlq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueId = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueId = value.queueId;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionTriggerFunction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#id FunctionTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#retry_attempts FunctionTrigger#retry_attempts}
  */
  readonly retryAttempts?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#retry_interval FunctionTrigger#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#tag FunctionTrigger#tag}
  */
  readonly tag?: string;
}

export function functionTriggerFunctionToTerraform(struct?: FunctionTriggerFunctionOutputReference | FunctionTriggerFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    retry_attempts: cdktf.stringToTerraform(struct!.retryAttempts),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class FunctionTriggerFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._retryAttempts = undefined;
      this._retryInterval = undefined;
      this._serviceAccountId = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._retryAttempts = value.retryAttempts;
      this._retryInterval = value.retryInterval;
      this._serviceAccountId = value.serviceAccountId;
      this._tag = value.tag;
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

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: string; 
  public get retryAttempts() {
    return this.getStringAttribute('retry_attempts');
  }
  public set retryAttempts(value: string) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // service_account_id - computed: false, optional: true, required: false
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface FunctionTriggerIot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#device_id FunctionTrigger#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#registry_id FunctionTrigger#registry_id}
  */
  readonly registryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#topic FunctionTrigger#topic}
  */
  readonly topic?: string;
}

export function functionTriggerIotToTerraform(struct?: FunctionTriggerIotOutputReference | FunctionTriggerIot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class FunctionTriggerIotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerIot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerIot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceId = undefined;
      this._registryId = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceId = value.deviceId;
      this._registryId = value.registryId;
      this._topic = value.topic;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface FunctionTriggerLogGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#log_group_ids FunctionTrigger#log_group_ids}
  */
  readonly logGroupIds: string[];
}

export function functionTriggerLogGroupToTerraform(struct?: FunctionTriggerLogGroupOutputReference | FunctionTriggerLogGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    log_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logGroupIds),
  }
}

export class FunctionTriggerLogGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerLogGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._logGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupIds = this._logGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerLogGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._logGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._logGroupIds = value.logGroupIds;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // log_group_ids - computed: false, optional: false, required: true
  private _logGroupIds?: string[]; 
  public get logGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('log_group_ids'));
  }
  public set logGroupIds(value: string[]) {
    this._logGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdsInput() {
    return this._logGroupIds;
  }
}
export interface FunctionTriggerLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#group_id FunctionTrigger#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#levels FunctionTrigger#levels}
  */
  readonly levels: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#resource_ids FunctionTrigger#resource_ids}
  */
  readonly resourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#resource_types FunctionTrigger#resource_types}
  */
  readonly resourceTypes: string[];
}

export function functionTriggerLoggingToTerraform(struct?: FunctionTriggerLoggingOutputReference | FunctionTriggerLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.levels),
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}

export class FunctionTriggerLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._levels !== undefined) {
      hasAnyValues = true;
      internalValueResult.levels = this._levels;
    }
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._groupId = undefined;
      this._levels = undefined;
      this._resourceIds = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._groupId = value.groupId;
      this._levels = value.levels;
      this._resourceIds = value.resourceIds;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // levels - computed: false, optional: false, required: true
  private _levels?: string[]; 
  public get levels() {
    return cdktf.Fn.tolist(this.getListAttribute('levels'));
  }
  public set levels(value: string[]) {
    this._levels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels;
  }

  // resource_ids - computed: false, optional: false, required: true
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface FunctionTriggerMessageQueue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#queue_id FunctionTrigger#queue_id}
  */
  readonly queueId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#visibility_timeout FunctionTrigger#visibility_timeout}
  */
  readonly visibilityTimeout?: string;
}

export function functionTriggerMessageQueueToTerraform(struct?: FunctionTriggerMessageQueueOutputReference | FunctionTriggerMessageQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    visibility_timeout: cdktf.stringToTerraform(struct!.visibilityTimeout),
  }
}

export class FunctionTriggerMessageQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerMessageQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._visibilityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeout = this._visibilityTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerMessageQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._queueId = undefined;
      this._serviceAccountId = undefined;
      this._visibilityTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._queueId = value.queueId;
      this._serviceAccountId = value.serviceAccountId;
      this._visibilityTimeout = value.visibilityTimeout;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // visibility_timeout - computed: false, optional: true, required: false
  private _visibilityTimeout?: string; 
  public get visibilityTimeout() {
    return this.getStringAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: string) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }
}
export interface FunctionTriggerObjectStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#bucket_id FunctionTrigger#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#create FunctionTrigger#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#delete FunctionTrigger#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#prefix FunctionTrigger#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#suffix FunctionTrigger#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#update FunctionTrigger#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

export function functionTriggerObjectStorageToTerraform(struct?: FunctionTriggerObjectStorageOutputReference | FunctionTriggerObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_id: cdktf.stringToTerraform(struct!.bucketId),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    update: cdktf.booleanToTerraform(struct!.update),
  }
}

export class FunctionTriggerObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketId = this._bucketId;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketId = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketId = value.bucketId;
      this._create = value.create;
      this._delete = value.delete;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._update = value.update;
    }
  }

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
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
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
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
export interface FunctionTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#create FunctionTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#delete FunctionTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#update FunctionTrigger#update}
  */
  readonly update?: string;
}

export function functionTriggerTimeoutsToTerraform(struct?: FunctionTriggerTimeoutsOutputReference | FunctionTriggerTimeouts | cdktf.IResolvable): any {
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

export class FunctionTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FunctionTriggerTimeouts | cdktf.IResolvable | undefined) {
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
export interface FunctionTriggerTimer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger#cron_expression FunctionTrigger#cron_expression}
  */
  readonly cronExpression: string;
}

export function functionTriggerTimerToTerraform(struct?: FunctionTriggerTimerOutputReference | FunctionTriggerTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
  }
}

export class FunctionTriggerTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger yandex_function_trigger}
*/
export class FunctionTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/function_trigger yandex_function_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function_trigger',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.76.0',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._dlq.internalValue = config.dlq;
    this._function.internalValue = config.function;
    this._iot.internalValue = config.iot;
    this._logGroup.internalValue = config.logGroup;
    this._logging.internalValue = config.logging;
    this._messageQueue.internalValue = config.messageQueue;
    this._objectStorage.internalValue = config.objectStorage;
    this._timeouts.internalValue = config.timeouts;
    this._timer.internalValue = config.timer;
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

  // dlq - computed: false, optional: true, required: false
  private _dlq = new FunctionTriggerDlqOutputReference(this, "dlq");
  public get dlq() {
    return this._dlq;
  }
  public putDlq(value: FunctionTriggerDlq) {
    this._dlq.internalValue = value;
  }
  public resetDlq() {
    this._dlq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqInput() {
    return this._dlq.internalValue;
  }

  // function - computed: false, optional: false, required: true
  private _function = new FunctionTriggerFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: FunctionTriggerFunction) {
    this._function.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // iot - computed: false, optional: true, required: false
  private _iot = new FunctionTriggerIotOutputReference(this, "iot");
  public get iot() {
    return this._iot;
  }
  public putIot(value: FunctionTriggerIot) {
    this._iot.internalValue = value;
  }
  public resetIot() {
    this._iot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot.internalValue;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup = new FunctionTriggerLogGroupOutputReference(this, "log_group");
  public get logGroup() {
    return this._logGroup;
  }
  public putLogGroup(value: FunctionTriggerLogGroup) {
    this._logGroup.internalValue = value;
  }
  public resetLogGroup() {
    this._logGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new FunctionTriggerLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: FunctionTriggerLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // message_queue - computed: false, optional: true, required: false
  private _messageQueue = new FunctionTriggerMessageQueueOutputReference(this, "message_queue");
  public get messageQueue() {
    return this._messageQueue;
  }
  public putMessageQueue(value: FunctionTriggerMessageQueue) {
    this._messageQueue.internalValue = value;
  }
  public resetMessageQueue() {
    this._messageQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageQueueInput() {
    return this._messageQueue.internalValue;
  }

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new FunctionTriggerObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: FunctionTriggerObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FunctionTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FunctionTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer = new FunctionTriggerTimerOutputReference(this, "timer");
  public get timer() {
    return this._timer;
  }
  public putTimer(value: FunctionTriggerTimer) {
    this._timer.internalValue = value;
  }
  public resetTimer() {
    this._timer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      dlq: functionTriggerDlqToTerraform(this._dlq.internalValue),
      function: functionTriggerFunctionToTerraform(this._function.internalValue),
      iot: functionTriggerIotToTerraform(this._iot.internalValue),
      log_group: functionTriggerLogGroupToTerraform(this._logGroup.internalValue),
      logging: functionTriggerLoggingToTerraform(this._logging.internalValue),
      message_queue: functionTriggerMessageQueueToTerraform(this._messageQueue.internalValue),
      object_storage: functionTriggerObjectStorageToTerraform(this._objectStorage.internalValue),
      timeouts: functionTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      timer: functionTriggerTimerToTerraform(this._timer.internalValue),
    };
  }
}
