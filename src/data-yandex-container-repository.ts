// https://www.terraform.io/docs/providers/yandex/d/container_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexContainerRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/container_repository#name DataYandexContainerRepository#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/yandex/d/container_repository#repository_id DataYandexContainerRepository#repository_id}
  */
  readonly repositoryId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/yandex/d/container_repository yandex_container_repository}
*/
export class DataYandexContainerRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_container_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/yandex/d/container_repository yandex_container_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexContainerRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexContainerRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_container_repository',
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
    this._name = config.name;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // repository_id - computed: true, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }
}
