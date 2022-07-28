// https://www.terraform.io/docs/providers/yandex/r/serverless_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#concurrency ServerlessContainer#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#core_fraction ServerlessContainer#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#cores ServerlessContainer#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#description ServerlessContainer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#execution_timeout ServerlessContainer#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#folder_id ServerlessContainer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#id ServerlessContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#labels ServerlessContainer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Container memory in megabytes, should be aligned to 128
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#memory ServerlessContainer#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#name ServerlessContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#service_account_id ServerlessContainer#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#image ServerlessContainer#image}
  */
  readonly image: ServerlessContainerImage;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#timeouts ServerlessContainer#timeouts}
  */
  readonly timeouts?: ServerlessContainerTimeouts;
}
export interface ServerlessContainerImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#args ServerlessContainer#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#command ServerlessContainer#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#digest ServerlessContainer#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#environment ServerlessContainer#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#url ServerlessContainer#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#work_dir ServerlessContainer#work_dir}
  */
  readonly workDir?: string;
}

export function serverlessContainerImageToTerraform(struct?: ServerlessContainerImageOutputReference | ServerlessContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    digest: cdktf.stringToTerraform(struct!.digest),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    url: cdktf.stringToTerraform(struct!.url),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}

export class ServerlessContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._digest = undefined;
      this._environment = undefined;
      this._url = undefined;
      this._workDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._digest = value.digest;
      this._environment = value.environment;
      this._url = value.url;
      this._workDir = value.workDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}
export interface ServerlessContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#create ServerlessContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#delete ServerlessContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container#update ServerlessContainer#update}
  */
  readonly update?: string;
}

export function serverlessContainerTimeoutsToTerraform(struct?: ServerlessContainerTimeoutsOutputReference | ServerlessContainerTimeouts | cdktf.IResolvable): any {
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

export class ServerlessContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessContainerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServerlessContainerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container yandex_serverless_container}
*/
export class ServerlessContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/r/serverless_container yandex_serverless_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessContainerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_container',
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
    this._concurrency = config.concurrency;
    this._coreFraction = config.coreFraction;
    this._cores = config.cores;
    this._description = config.description;
    this._executionTimeout = config.executionTimeout;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._memory = config.memory;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
    this._image.internalValue = config.image;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // core_fraction - computed: true, optional: true, required: false
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

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
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

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
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

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // image - computed: false, optional: false, required: true
  private _image = new ServerlessContainerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: ServerlessContainerImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerlessContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerlessContainerTimeouts) {
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
      concurrency: cdktf.numberToTerraform(this._concurrency),
      core_fraction: cdktf.numberToTerraform(this._coreFraction),
      cores: cdktf.numberToTerraform(this._cores),
      description: cdktf.stringToTerraform(this._description),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      image: serverlessContainerImageToTerraform(this._image.internalValue),
      timeouts: serverlessContainerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
