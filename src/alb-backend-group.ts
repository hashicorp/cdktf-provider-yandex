// https://www.terraform.io/docs/providers/yandex/r/alb_backend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbBackendGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#description AlbBackendGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#folder_id AlbBackendGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#id AlbBackendGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#labels AlbBackendGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#name AlbBackendGroup#name}
  */
  readonly name?: string;
  /**
  * grpc_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#grpc_backend AlbBackendGroup#grpc_backend}
  */
  readonly grpcBackend?: AlbBackendGroupGrpcBackend[] | cdktf.IResolvable;
  /**
  * http_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http_backend AlbBackendGroup#http_backend}
  */
  readonly httpBackend?: AlbBackendGroupHttpBackend[] | cdktf.IResolvable;
  /**
  * session_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#session_affinity AlbBackendGroup#session_affinity}
  */
  readonly sessionAffinity?: AlbBackendGroupSessionAffinity;
  /**
  * stream_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#stream_backend AlbBackendGroup#stream_backend}
  */
  readonly streamBackend?: AlbBackendGroupStreamBackend[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#timeouts AlbBackendGroup#timeouts}
  */
  readonly timeouts?: AlbBackendGroupTimeouts;
}
export interface AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#service_name AlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function albBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct?: AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference | AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: true, required: false
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
export interface AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#host AlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http2 AlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#path AlbBackendGroup#path}
  */
  readonly path: string;
}

export function albBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct?: AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference | AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
      this._path = value.path;
    }
  }

  // host - computed: false, optional: true, required: false
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

  // http2 - computed: false, optional: true, required: false
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#receive AlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#send AlbBackendGroup#send}
  */
  readonly send?: string;
}

export function albBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct?: AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference | AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined {
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

  public set internalValue(value: AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined) {
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

  // receive - computed: false, optional: true, required: false
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

  // send - computed: false, optional: true, required: false
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
export interface AlbBackendGroupGrpcBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck_port AlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthy_threshold AlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval AlbBackendGroup#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval_jitter_percent AlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#timeout AlbBackendGroup#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#unhealthy_threshold AlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#grpc_healthcheck AlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http_healthcheck AlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#stream_healthcheck AlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck;
}

export function albBackendGroupGrpcBackendHealthcheckToTerraform(struct?: AlbBackendGroupGrpcBackendHealthcheckOutputReference | AlbBackendGroupGrpcBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: albBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: albBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: albBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class AlbBackendGroupGrpcBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendHealthcheck | undefined {
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
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
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

  public set internalValue(value: AlbBackendGroupGrpcBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._intervalJitterPercent = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: false, optional: true, required: false
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

  // healthy_threshold - computed: false, optional: true, required: false
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

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_jitter_percent - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
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
  private _grpcHealthcheck = new AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: AlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck) {
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
  private _httpHealthcheck = new AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: AlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck) {
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
  private _streamHealthcheck = new AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: AlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck) {
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
export interface AlbBackendGroupGrpcBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#locality_aware_routing_percent AlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#mode AlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#panic_threshold AlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#strict_locality AlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function albBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct?: AlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference | AlbBackendGroupGrpcBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class AlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
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

  public set internalValue(value: AlbBackendGroupGrpcBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: false, optional: true, required: false
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

  // panic_threshold - computed: false, optional: true, required: false
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

  // strict_locality - computed: false, optional: true, required: false
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
export interface AlbBackendGroupGrpcBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_bytes AlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_id AlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function albBackendGroupGrpcBackendTlsValidationContextToTerraform(struct?: AlbBackendGroupGrpcBackendTlsValidationContextOutputReference | AlbBackendGroupGrpcBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class AlbBackendGroupGrpcBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendTlsValidationContext | undefined {
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

  public set internalValue(value: AlbBackendGroupGrpcBackendTlsValidationContext | undefined) {
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

  // trusted_ca_bytes - computed: false, optional: true, required: false
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

  // trusted_ca_id - computed: false, optional: true, required: false
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
export interface AlbBackendGroupGrpcBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#sni AlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#validation_context AlbBackendGroup#validation_context}
  */
  readonly validationContext?: AlbBackendGroupGrpcBackendTlsValidationContext;
}

export function albBackendGroupGrpcBackendTlsToTerraform(struct?: AlbBackendGroupGrpcBackendTlsOutputReference | AlbBackendGroupGrpcBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: albBackendGroupGrpcBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class AlbBackendGroupGrpcBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupGrpcBackendTls | undefined {
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

  public set internalValue(value: AlbBackendGroupGrpcBackendTls | undefined) {
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

  // sni - computed: false, optional: true, required: false
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
  private _validationContext = new AlbBackendGroupGrpcBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: AlbBackendGroupGrpcBackendTlsValidationContext) {
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
export interface AlbBackendGroupGrpcBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#name AlbBackendGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#port AlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#target_group_ids AlbBackendGroup#target_group_ids}
  */
  readonly targetGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#weight AlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck AlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: AlbBackendGroupGrpcBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#load_balancing_config AlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: AlbBackendGroupGrpcBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#tls AlbBackendGroup#tls}
  */
  readonly tls?: AlbBackendGroupGrpcBackendTls;
}

export function albBackendGroupGrpcBackendToTerraform(struct?: AlbBackendGroupGrpcBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    target_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupIds),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: albBackendGroupGrpcBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: albBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: albBackendGroupGrpcBackendTlsToTerraform(struct!.tls),
  }
}

export class AlbBackendGroupGrpcBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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

  public set internalValue(value: AlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
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
      this._name = value.name;
      this._port = value.port;
      this._targetGroupIds = value.targetGroupIds;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
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

  // port - computed: false, optional: true, required: false
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

  // target_group_ids - computed: false, optional: false, required: true
  private _targetGroupIds?: string[]; 
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }
  public set targetGroupIds(value: string[]) {
    this._targetGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdsInput() {
    return this._targetGroupIds;
  }

  // weight - computed: false, optional: true, required: false
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
  private _healthcheck = new AlbBackendGroupGrpcBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: AlbBackendGroupGrpcBackendHealthcheck) {
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
  private _loadBalancingConfig = new AlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: AlbBackendGroupGrpcBackendLoadBalancingConfig) {
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
  private _tls = new AlbBackendGroupGrpcBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AlbBackendGroupGrpcBackendTls) {
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

export class AlbBackendGroupGrpcBackendList extends cdktf.ComplexList {
  public internalValue? : AlbBackendGroupGrpcBackend[] | cdktf.IResolvable

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
  public get(index: number): AlbBackendGroupGrpcBackendOutputReference {
    return new AlbBackendGroupGrpcBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#service_name AlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function albBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct?: AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference | AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: true, required: false
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
export interface AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#host AlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http2 AlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#path AlbBackendGroup#path}
  */
  readonly path: string;
}

export function albBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct?: AlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference | AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class AlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
      this._path = value.path;
    }
  }

  // host - computed: false, optional: true, required: false
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

  // http2 - computed: false, optional: true, required: false
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#receive AlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#send AlbBackendGroup#send}
  */
  readonly send?: string;
}

export function albBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct?: AlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference | AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class AlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined {
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

  public set internalValue(value: AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined) {
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

  // receive - computed: false, optional: true, required: false
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

  // send - computed: false, optional: true, required: false
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
export interface AlbBackendGroupHttpBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck_port AlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthy_threshold AlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval AlbBackendGroup#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval_jitter_percent AlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#timeout AlbBackendGroup#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#unhealthy_threshold AlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#grpc_healthcheck AlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http_healthcheck AlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#stream_healthcheck AlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck;
}

export function albBackendGroupHttpBackendHealthcheckToTerraform(struct?: AlbBackendGroupHttpBackendHealthcheckOutputReference | AlbBackendGroupHttpBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: albBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: albBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: albBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class AlbBackendGroupHttpBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendHealthcheck | undefined {
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
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
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

  public set internalValue(value: AlbBackendGroupHttpBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._intervalJitterPercent = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: false, optional: true, required: false
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

  // healthy_threshold - computed: false, optional: true, required: false
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

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_jitter_percent - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
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
  private _grpcHealthcheck = new AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: AlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck) {
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
  private _httpHealthcheck = new AlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: AlbBackendGroupHttpBackendHealthcheckHttpHealthcheck) {
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
  private _streamHealthcheck = new AlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: AlbBackendGroupHttpBackendHealthcheckStreamHealthcheck) {
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
export interface AlbBackendGroupHttpBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#locality_aware_routing_percent AlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#mode AlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#panic_threshold AlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#strict_locality AlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function albBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct?: AlbBackendGroupHttpBackendLoadBalancingConfigOutputReference | AlbBackendGroupHttpBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class AlbBackendGroupHttpBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
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

  public set internalValue(value: AlbBackendGroupHttpBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: false, optional: true, required: false
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

  // panic_threshold - computed: false, optional: true, required: false
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

  // strict_locality - computed: false, optional: true, required: false
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
export interface AlbBackendGroupHttpBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_bytes AlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_id AlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function albBackendGroupHttpBackendTlsValidationContextToTerraform(struct?: AlbBackendGroupHttpBackendTlsValidationContextOutputReference | AlbBackendGroupHttpBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class AlbBackendGroupHttpBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendTlsValidationContext | undefined {
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

  public set internalValue(value: AlbBackendGroupHttpBackendTlsValidationContext | undefined) {
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

  // trusted_ca_bytes - computed: false, optional: true, required: false
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

  // trusted_ca_id - computed: false, optional: true, required: false
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
export interface AlbBackendGroupHttpBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#sni AlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#validation_context AlbBackendGroup#validation_context}
  */
  readonly validationContext?: AlbBackendGroupHttpBackendTlsValidationContext;
}

export function albBackendGroupHttpBackendTlsToTerraform(struct?: AlbBackendGroupHttpBackendTlsOutputReference | AlbBackendGroupHttpBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: albBackendGroupHttpBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class AlbBackendGroupHttpBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupHttpBackendTls | undefined {
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

  public set internalValue(value: AlbBackendGroupHttpBackendTls | undefined) {
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

  // sni - computed: false, optional: true, required: false
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
  private _validationContext = new AlbBackendGroupHttpBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: AlbBackendGroupHttpBackendTlsValidationContext) {
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
export interface AlbBackendGroupHttpBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http2 AlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#name AlbBackendGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#port AlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#storage_bucket AlbBackendGroup#storage_bucket}
  */
  readonly storageBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#target_group_ids AlbBackendGroup#target_group_ids}
  */
  readonly targetGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#weight AlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck AlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: AlbBackendGroupHttpBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#load_balancing_config AlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: AlbBackendGroupHttpBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#tls AlbBackendGroup#tls}
  */
  readonly tls?: AlbBackendGroupHttpBackendTls;
}

export function albBackendGroupHttpBackendToTerraform(struct?: AlbBackendGroupHttpBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2: cdktf.booleanToTerraform(struct!.http2),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    storage_bucket: cdktf.stringToTerraform(struct!.storageBucket),
    target_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupIds),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: albBackendGroupHttpBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: albBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: albBackendGroupHttpBackendTlsToTerraform(struct!.tls),
  }
}

export class AlbBackendGroupHttpBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbBackendGroupHttpBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AlbBackendGroupHttpBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http2 = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._port = value.port;
      this._storageBucket = value.storageBucket;
      this._targetGroupIds = value.targetGroupIds;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // http2 - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // storage_bucket - computed: false, optional: true, required: false
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

  // target_group_ids - computed: false, optional: true, required: false
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

  // weight - computed: false, optional: true, required: false
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
  private _healthcheck = new AlbBackendGroupHttpBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: AlbBackendGroupHttpBackendHealthcheck) {
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
  private _loadBalancingConfig = new AlbBackendGroupHttpBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: AlbBackendGroupHttpBackendLoadBalancingConfig) {
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
  private _tls = new AlbBackendGroupHttpBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AlbBackendGroupHttpBackendTls) {
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

export class AlbBackendGroupHttpBackendList extends cdktf.ComplexList {
  public internalValue? : AlbBackendGroupHttpBackend[] | cdktf.IResolvable

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
  public get(index: number): AlbBackendGroupHttpBackendOutputReference {
    return new AlbBackendGroupHttpBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbBackendGroupSessionAffinityConnection {
  /**
  * Use source IP address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#source_ip AlbBackendGroup#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
}

export function albBackendGroupSessionAffinityConnectionToTerraform(struct?: AlbBackendGroupSessionAffinityConnectionOutputReference | AlbBackendGroupSessionAffinityConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
  }
}

export class AlbBackendGroupSessionAffinityConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupSessionAffinityConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupSessionAffinityConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceIp = value.sourceIp;
    }
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface AlbBackendGroupSessionAffinityCookie {
  /**
  * Name of the HTTP cookie
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#name AlbBackendGroup#name}
  */
  readonly name: string;
  /**
  * TTL for the cookie (if not set, session cookie will be used)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#ttl AlbBackendGroup#ttl}
  */
  readonly ttl?: string;
}

export function albBackendGroupSessionAffinityCookieToTerraform(struct?: AlbBackendGroupSessionAffinityCookieOutputReference | AlbBackendGroupSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}

export class AlbBackendGroupSessionAffinityCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupSessionAffinityCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupSessionAffinityCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._ttl = value.ttl;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
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
export interface AlbBackendGroupSessionAffinityHeader {
  /**
  * The name of the request header that will be used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#header_name AlbBackendGroup#header_name}
  */
  readonly headerName: string;
}

export function albBackendGroupSessionAffinityHeaderToTerraform(struct?: AlbBackendGroupSessionAffinityHeaderOutputReference | AlbBackendGroupSessionAffinityHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export class AlbBackendGroupSessionAffinityHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupSessionAffinityHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupSessionAffinityHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface AlbBackendGroupSessionAffinity {
  /**
  * connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#connection AlbBackendGroup#connection}
  */
  readonly connection?: AlbBackendGroupSessionAffinityConnection;
  /**
  * cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#cookie AlbBackendGroup#cookie}
  */
  readonly cookie?: AlbBackendGroupSessionAffinityCookie;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#header AlbBackendGroup#header}
  */
  readonly header?: AlbBackendGroupSessionAffinityHeader;
}

export function albBackendGroupSessionAffinityToTerraform(struct?: AlbBackendGroupSessionAffinityOutputReference | AlbBackendGroupSessionAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: albBackendGroupSessionAffinityConnectionToTerraform(struct!.connection),
    cookie: albBackendGroupSessionAffinityCookieToTerraform(struct!.cookie),
    header: albBackendGroupSessionAffinityHeaderToTerraform(struct!.header),
  }
}

export class AlbBackendGroupSessionAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupSessionAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupSessionAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection.internalValue = value.connection;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new AlbBackendGroupSessionAffinityConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: AlbBackendGroupSessionAffinityConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new AlbBackendGroupSessionAffinityCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: AlbBackendGroupSessionAffinityCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AlbBackendGroupSessionAffinityHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: AlbBackendGroupSessionAffinityHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#service_name AlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function albBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct?: AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference | AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: true, required: false
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
export interface AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#host AlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http2 AlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#path AlbBackendGroup#path}
  */
  readonly path: string;
}

export function albBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct?: AlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference | AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class AlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
      this._path = value.path;
    }
  }

  // host - computed: false, optional: true, required: false
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

  // http2 - computed: false, optional: true, required: false
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#receive AlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#send AlbBackendGroup#send}
  */
  readonly send?: string;
}

export function albBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct?: AlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference | AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}

export class AlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined {
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

  public set internalValue(value: AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined) {
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

  // receive - computed: false, optional: true, required: false
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

  // send - computed: false, optional: true, required: false
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
export interface AlbBackendGroupStreamBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck_port AlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthy_threshold AlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval AlbBackendGroup#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#interval_jitter_percent AlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#timeout AlbBackendGroup#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#unhealthy_threshold AlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#grpc_healthcheck AlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#http_healthcheck AlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#stream_healthcheck AlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck;
}

export function albBackendGroupStreamBackendHealthcheckToTerraform(struct?: AlbBackendGroupStreamBackendHealthcheckOutputReference | AlbBackendGroupStreamBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: albBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: albBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: albBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}

export class AlbBackendGroupStreamBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendHealthcheck | undefined {
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
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
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

  public set internalValue(value: AlbBackendGroupStreamBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._intervalJitterPercent = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: false, optional: true, required: false
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

  // healthy_threshold - computed: false, optional: true, required: false
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

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_jitter_percent - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
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
  private _grpcHealthcheck = new AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: AlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck) {
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
  private _httpHealthcheck = new AlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: AlbBackendGroupStreamBackendHealthcheckHttpHealthcheck) {
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
  private _streamHealthcheck = new AlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: AlbBackendGroupStreamBackendHealthcheckStreamHealthcheck) {
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
export interface AlbBackendGroupStreamBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#locality_aware_routing_percent AlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#mode AlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#panic_threshold AlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#strict_locality AlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function albBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct?: AlbBackendGroupStreamBackendLoadBalancingConfigOutputReference | AlbBackendGroupStreamBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}

export class AlbBackendGroupStreamBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
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

  public set internalValue(value: AlbBackendGroupStreamBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: false, optional: true, required: false
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

  // panic_threshold - computed: false, optional: true, required: false
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

  // strict_locality - computed: false, optional: true, required: false
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
export interface AlbBackendGroupStreamBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_bytes AlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#trusted_ca_id AlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function albBackendGroupStreamBackendTlsValidationContextToTerraform(struct?: AlbBackendGroupStreamBackendTlsValidationContextOutputReference | AlbBackendGroupStreamBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}

export class AlbBackendGroupStreamBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendTlsValidationContext | undefined {
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

  public set internalValue(value: AlbBackendGroupStreamBackendTlsValidationContext | undefined) {
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

  // trusted_ca_bytes - computed: false, optional: true, required: false
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

  // trusted_ca_id - computed: false, optional: true, required: false
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
export interface AlbBackendGroupStreamBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#sni AlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#validation_context AlbBackendGroup#validation_context}
  */
  readonly validationContext?: AlbBackendGroupStreamBackendTlsValidationContext;
}

export function albBackendGroupStreamBackendTlsToTerraform(struct?: AlbBackendGroupStreamBackendTlsOutputReference | AlbBackendGroupStreamBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: albBackendGroupStreamBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}

export class AlbBackendGroupStreamBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupStreamBackendTls | undefined {
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

  public set internalValue(value: AlbBackendGroupStreamBackendTls | undefined) {
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

  // sni - computed: false, optional: true, required: false
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
  private _validationContext = new AlbBackendGroupStreamBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: AlbBackendGroupStreamBackendTlsValidationContext) {
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
export interface AlbBackendGroupStreamBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#enable_proxy_protocol AlbBackendGroup#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#name AlbBackendGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#port AlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#target_group_ids AlbBackendGroup#target_group_ids}
  */
  readonly targetGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#weight AlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#healthcheck AlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: AlbBackendGroupStreamBackendHealthcheck;
  /**
  * load_balancing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#load_balancing_config AlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: AlbBackendGroupStreamBackendLoadBalancingConfig;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#tls AlbBackendGroup#tls}
  */
  readonly tls?: AlbBackendGroupStreamBackendTls;
}

export function albBackendGroupStreamBackendToTerraform(struct?: AlbBackendGroupStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_proxy_protocol: cdktf.booleanToTerraform(struct!.enableProxyProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    target_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupIds),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: albBackendGroupStreamBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: albBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: albBackendGroupStreamBackendTlsToTerraform(struct!.tls),
  }
}

export class AlbBackendGroupStreamBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbBackendGroupStreamBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProxyProtocol = this._enableProxyProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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

  public set internalValue(value: AlbBackendGroupStreamBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableProxyProtocol = undefined;
      this._name = undefined;
      this._port = undefined;
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
      this._enableProxyProtocol = value.enableProxyProtocol;
      this._name = value.name;
      this._port = value.port;
      this._targetGroupIds = value.targetGroupIds;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
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

  // port - computed: false, optional: true, required: false
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

  // target_group_ids - computed: false, optional: false, required: true
  private _targetGroupIds?: string[]; 
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }
  public set targetGroupIds(value: string[]) {
    this._targetGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdsInput() {
    return this._targetGroupIds;
  }

  // weight - computed: false, optional: true, required: false
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
  private _healthcheck = new AlbBackendGroupStreamBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: AlbBackendGroupStreamBackendHealthcheck) {
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
  private _loadBalancingConfig = new AlbBackendGroupStreamBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: AlbBackendGroupStreamBackendLoadBalancingConfig) {
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
  private _tls = new AlbBackendGroupStreamBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AlbBackendGroupStreamBackendTls) {
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

export class AlbBackendGroupStreamBackendList extends cdktf.ComplexList {
  public internalValue? : AlbBackendGroupStreamBackend[] | cdktf.IResolvable

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
  public get(index: number): AlbBackendGroupStreamBackendOutputReference {
    return new AlbBackendGroupStreamBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbBackendGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#create AlbBackendGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#delete AlbBackendGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group#update AlbBackendGroup#update}
  */
  readonly update?: string;
}

export function albBackendGroupTimeoutsToTerraform(struct?: AlbBackendGroupTimeoutsOutputReference | AlbBackendGroupTimeouts | cdktf.IResolvable): any {
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

export class AlbBackendGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbBackendGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlbBackendGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group yandex_alb_backend_group}
*/
export class AlbBackendGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_backend_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/alb_backend_group yandex_alb_backend_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbBackendGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AlbBackendGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_backend_group',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._grpcBackend.internalValue = config.grpcBackend;
    this._httpBackend.internalValue = config.httpBackend;
    this._sessionAffinity.internalValue = config.sessionAffinity;
    this._streamBackend.internalValue = config.streamBackend;
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

  // grpc_backend - computed: false, optional: true, required: false
  private _grpcBackend = new AlbBackendGroupGrpcBackendList(this, "grpc_backend", false);
  public get grpcBackend() {
    return this._grpcBackend;
  }
  public putGrpcBackend(value: AlbBackendGroupGrpcBackend[] | cdktf.IResolvable) {
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
  private _httpBackend = new AlbBackendGroupHttpBackendList(this, "http_backend", false);
  public get httpBackend() {
    return this._httpBackend;
  }
  public putHttpBackend(value: AlbBackendGroupHttpBackend[] | cdktf.IResolvable) {
    this._httpBackend.internalValue = value;
  }
  public resetHttpBackend() {
    this._httpBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBackendInput() {
    return this._httpBackend.internalValue;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity = new AlbBackendGroupSessionAffinityOutputReference(this, "session_affinity");
  public get sessionAffinity() {
    return this._sessionAffinity;
  }
  public putSessionAffinity(value: AlbBackendGroupSessionAffinity) {
    this._sessionAffinity.internalValue = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity.internalValue;
  }

  // stream_backend - computed: false, optional: true, required: false
  private _streamBackend = new AlbBackendGroupStreamBackendList(this, "stream_backend", false);
  public get streamBackend() {
    return this._streamBackend;
  }
  public putStreamBackend(value: AlbBackendGroupStreamBackend[] | cdktf.IResolvable) {
    this._streamBackend.internalValue = value;
  }
  public resetStreamBackend() {
    this._streamBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBackendInput() {
    return this._streamBackend.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbBackendGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbBackendGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      grpc_backend: cdktf.listMapper(albBackendGroupGrpcBackendToTerraform, true)(this._grpcBackend.internalValue),
      http_backend: cdktf.listMapper(albBackendGroupHttpBackendToTerraform, true)(this._httpBackend.internalValue),
      session_affinity: albBackendGroupSessionAffinityToTerraform(this._sessionAffinity.internalValue),
      stream_backend: cdktf.listMapper(albBackendGroupStreamBackendToTerraform, true)(this._streamBackend.internalValue),
      timeouts: albBackendGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
