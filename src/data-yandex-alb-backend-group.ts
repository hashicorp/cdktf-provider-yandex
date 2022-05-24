// https://www.terraform.io/docs/providers/yandex/d/alb_backend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbBackendGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#backend_group_id DataYandexAlbBackendGroup#backend_group_id}
  */
  readonly backendGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#description DataYandexAlbBackendGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#folder_id DataYandexAlbBackendGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#id DataYandexAlbBackendGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#labels DataYandexAlbBackendGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#name DataYandexAlbBackendGroup#name}
  */
  readonly name?: string;
  /**
  * grpc_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#grpc_backend DataYandexAlbBackendGroup#grpc_backend}
  */
  readonly grpcBackend?: DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable;
  /**
  * http_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http_backend DataYandexAlbBackendGroup#http_backend}
  */
  readonly httpBackend?: DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable;
  /**
  * stream_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#stream_backend DataYandexAlbBackendGroup#stream_backend}
  */
  readonly streamBackend?: DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable;
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupGrpcBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupGrpcBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsOutputReference | DataYandexAlbBackendGroupGrpcBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupGrpcBackendTls;
}

export function dataYandexAlbBackendGroupGrpcBackendToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupGrpcBackendTlsToTerraform(struct!.tls),
  }
}

export class DataYandexAlbBackendGroupGrpcBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_ids - computed: true, optional: false, required: false
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupGrpcBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupGrpcBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupGrpcBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupGrpcBackendOutputReference {
    return new DataYandexAlbBackendGroupGrpcBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupHttpBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupHttpBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupHttpBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupHttpBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsOutputReference | DataYandexAlbBackendGroupHttpBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupHttpBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class DataYandexAlbBackendGroupHttpBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupHttpBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupHttpBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#storage_bucket DataYandexAlbBackendGroup#storage_bucket}
  */
  readonly storageBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#target_group_ids DataYandexAlbBackendGroup#target_group_ids}
  */
  readonly targetGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupHttpBackendTls;
}

export function dataYandexAlbBackendGroupHttpBackendToTerraform(struct?: DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2: cdktf.booleanToTerraform(struct!.http2),
    port: cdktf.numberToTerraform(struct!.port),
    storage_bucket: cdktf.stringToTerraform(struct!.storageBucket),
    target_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetGroupIds),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupHttpBackendTlsToTerraform(struct!.tls),
  }
}

export class DataYandexAlbBackendGroupHttpBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._storageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBucket = this._storageBucket;
    }
    if (this._targetGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupIds = this._targetGroupIds;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http2 = undefined;
      this._port = undefined;
      this._storageBucket = undefined;
      this._targetGroupIds = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http2 = value.http2;
      this._port = value.port;
      this._storageBucket = value.storageBucket;
      this._targetGroupIds = value.targetGroupIds;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // storage_bucket - computed: true, optional: true, required: false
  private _storageBucket?: string; 
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }
  public set storageBucket(value: string) {
    this._storageBucket = value;
  }
  public resetStorageBucket() {
    this._storageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketInput() {
    return this._storageBucket;
  }

  // target_group_ids - computed: true, optional: true, required: false
  private _targetGroupIds?: string[]; 
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }
  public set targetGroupIds(value: string[]) {
    this._targetGroupIds = value;
  }
  public resetTargetGroupIds() {
    this._targetGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdsInput() {
    return this._targetGroupIds;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupHttpBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupHttpBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupHttpBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupHttpBackendOutputReference {
    return new DataYandexAlbBackendGroupHttpBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupStreamBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupStreamBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupStreamBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupStreamBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsOutputReference | DataYandexAlbBackendGroupStreamBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupStreamBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class DataYandexAlbBackendGroupStreamBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupStreamBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupStreamBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupStreamBackendTls;
}

export function dataYandexAlbBackendGroupStreamBackendToTerraform(struct?: DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupStreamBackendTlsToTerraform(struct!.tls),
  }
}

export class DataYandexAlbBackendGroupStreamBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_ids - computed: true, optional: false, required: false
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupStreamBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupStreamBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupStreamBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupStreamBackendOutputReference {
    return new DataYandexAlbBackendGroupStreamBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group yandex_alb_backend_group}
*/
export class DataYandexAlbBackendGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_backend_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/alb_backend_group yandex_alb_backend_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbBackendGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbBackendGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_backend_group',
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
    this._backendGroupId = config.backendGroupId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._grpcBackend.internalValue = config.grpcBackend;
    this._httpBackend.internalValue = config.httpBackend;
    this._streamBackend.internalValue = config.streamBackend;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_group_id - computed: true, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // grpc_backend - computed: false, optional: true, required: false
  private _grpcBackend = new DataYandexAlbBackendGroupGrpcBackendList(this, "grpc_backend", false);
  public get grpcBackend() {
    return this._grpcBackend;
  }
  public putGrpcBackend(value: DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable) {
    this._grpcBackend.internalValue = value;
  }
  public resetGrpcBackend() {
    this._grpcBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcBackendInput() {
    return this._grpcBackend.internalValue;
  }

  // http_backend - computed: false, optional: true, required: false
  private _httpBackend = new DataYandexAlbBackendGroupHttpBackendList(this, "http_backend", false);
  public get httpBackend() {
    return this._httpBackend;
  }
  public putHttpBackend(value: DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable) {
    this._httpBackend.internalValue = value;
  }
  public resetHttpBackend() {
    this._httpBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBackendInput() {
    return this._httpBackend.internalValue;
  }

  // stream_backend - computed: false, optional: true, required: false
  private _streamBackend = new DataYandexAlbBackendGroupStreamBackendList(this, "stream_backend", false);
  public get streamBackend() {
    return this._streamBackend;
  }
  public putStreamBackend(value: DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable) {
    this._streamBackend.internalValue = value;
  }
  public resetStreamBackend() {
    this._streamBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBackendInput() {
    return this._streamBackend.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_group_id: cdktf.stringToTerraform(this._backendGroupId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      grpc_backend: cdktf.listMapper(dataYandexAlbBackendGroupGrpcBackendToTerraform)(this._grpcBackend.internalValue),
      http_backend: cdktf.listMapper(dataYandexAlbBackendGroupHttpBackendToTerraform)(this._httpBackend.internalValue),
      stream_backend: cdktf.listMapper(dataYandexAlbBackendGroupStreamBackendToTerraform)(this._streamBackend.internalValue),
    };
  }
}
