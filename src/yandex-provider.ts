// https://www.terraform.io/docs/providers/yandex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YandexProviderConfig {
  /**
  * ID of Yandex.Cloud tenant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#cloud_id YandexProvider#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The API endpoint for Yandex.Cloud SDK client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#endpoint YandexProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The default folder ID where resources will be placed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#folder_id YandexProvider#folder_id}
  */
  readonly folderId?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#insecure YandexProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times an API request is being executed. 
If the API request still fails, an error is thrown.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#max_retries YandexProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#organization_id YandexProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Disable use of TLS. Default value is `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#plaintext YandexProvider#plaintext}
  */
  readonly plaintext?: boolean | cdktf.IResolvable;
  /**
  * Either the path to or the contents of a Service Account key file in JSON format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#service_account_key_file YandexProvider#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * Yandex.Cloud storage service access key. 
Used when a storage data/resource doesn't have an access key explicitly specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#storage_access_key YandexProvider#storage_access_key}
  */
  readonly storageAccessKey?: string;
  /**
  * Yandex.Cloud storage service endpoint. Default is 
storage.yandexcloud.net
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#storage_endpoint YandexProvider#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * Yandex.Cloud storage service secret key. 
Used when a storage data/resource doesn't have a secret key explicitly specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#storage_secret_key YandexProvider#storage_secret_key}
  */
  readonly storageSecretKey?: string;
  /**
  * The access token for API operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#token YandexProvider#token}
  */
  readonly token?: string;
  /**
  * Yandex.Cloud Message Queue service access key. 
Used when a message queue resource doesn't have an access key explicitly specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#ymq_access_key YandexProvider#ymq_access_key}
  */
  readonly ymqAccessKey?: string;
  /**
  * Yandex.Cloud Message Queue service endpoint. Default is 
message-queue.api.cloud.yandex.net
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#ymq_endpoint YandexProvider#ymq_endpoint}
  */
  readonly ymqEndpoint?: string;
  /**
  * Yandex.Cloud Message Queue service secret key. 
Used when a message queue resource doesn't have a secret key explicitly specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#ymq_secret_key YandexProvider#ymq_secret_key}
  */
  readonly ymqSecretKey?: string;
  /**
  * The zone where operations will take place. Examples
are ru-central1-a, ru-central2-c, etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#zone YandexProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex#alias YandexProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex yandex}
*/
export class YandexProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex yandex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YandexProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: YandexProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.73.0',
        providerVersionConstraint: '~> 0.73.0'
      },
      terraformProviderSource: 'yandex-cloud/yandex'
    });
    this._cloudId = config.cloudId;
    this._endpoint = config.endpoint;
    this._folderId = config.folderId;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._organizationId = config.organizationId;
    this._plaintext = config.plaintext;
    this._serviceAccountKeyFile = config.serviceAccountKeyFile;
    this._storageAccessKey = config.storageAccessKey;
    this._storageEndpoint = config.storageEndpoint;
    this._storageSecretKey = config.storageSecretKey;
    this._token = config.token;
    this._ymqAccessKey = config.ymqAccessKey;
    this._ymqEndpoint = config.ymqEndpoint;
    this._ymqSecretKey = config.ymqSecretKey;
    this._zone = config.zone;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_id - computed: false, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this._cloudId;
  }
  public set cloudId(value: string | undefined) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this._folderId;
  }
  public set folderId(value: string | undefined) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // plaintext - computed: false, optional: true, required: false
  private _plaintext?: boolean | cdktf.IResolvable; 
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: boolean | cdktf.IResolvable | undefined) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this._serviceAccountKeyFile;
  }
  public set serviceAccountKeyFile(value: string | undefined) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // storage_access_key - computed: false, optional: true, required: false
  private _storageAccessKey?: string; 
  public get storageAccessKey() {
    return this._storageAccessKey;
  }
  public set storageAccessKey(value: string | undefined) {
    this._storageAccessKey = value;
  }
  public resetStorageAccessKey() {
    this._storageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccessKeyInput() {
    return this._storageAccessKey;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this._storageEndpoint;
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // storage_secret_key - computed: false, optional: true, required: false
  private _storageSecretKey?: string; 
  public get storageSecretKey() {
    return this._storageSecretKey;
  }
  public set storageSecretKey(value: string | undefined) {
    this._storageSecretKey = value;
  }
  public resetStorageSecretKey() {
    this._storageSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSecretKeyInput() {
    return this._storageSecretKey;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // ymq_access_key - computed: false, optional: true, required: false
  private _ymqAccessKey?: string; 
  public get ymqAccessKey() {
    return this._ymqAccessKey;
  }
  public set ymqAccessKey(value: string | undefined) {
    this._ymqAccessKey = value;
  }
  public resetYmqAccessKey() {
    this._ymqAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqAccessKeyInput() {
    return this._ymqAccessKey;
  }

  // ymq_endpoint - computed: false, optional: true, required: false
  private _ymqEndpoint?: string; 
  public get ymqEndpoint() {
    return this._ymqEndpoint;
  }
  public set ymqEndpoint(value: string | undefined) {
    this._ymqEndpoint = value;
  }
  public resetYmqEndpoint() {
    this._ymqEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqEndpointInput() {
    return this._ymqEndpoint;
  }

  // ymq_secret_key - computed: false, optional: true, required: false
  private _ymqSecretKey?: string; 
  public get ymqSecretKey() {
    return this._ymqSecretKey;
  }
  public set ymqSecretKey(value: string | undefined) {
    this._ymqSecretKey = value;
  }
  public resetYmqSecretKey() {
    this._ymqSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqSecretKeyInput() {
    return this._ymqSecretKey;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      folder_id: cdktf.stringToTerraform(this._folderId),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      plaintext: cdktf.booleanToTerraform(this._plaintext),
      service_account_key_file: cdktf.stringToTerraform(this._serviceAccountKeyFile),
      storage_access_key: cdktf.stringToTerraform(this._storageAccessKey),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      storage_secret_key: cdktf.stringToTerraform(this._storageSecretKey),
      token: cdktf.stringToTerraform(this._token),
      ymq_access_key: cdktf.stringToTerraform(this._ymqAccessKey),
      ymq_endpoint: cdktf.stringToTerraform(this._ymqEndpoint),
      ymq_secret_key: cdktf.stringToTerraform(this._ymqSecretKey),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
