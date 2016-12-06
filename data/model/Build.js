/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end. Additionally, this API will be used to experiment with new concepts in order to allow the Automation API (https://github.com/rht-labs/automation-api) to remain stable.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationTopology'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.Build = factory(root.RedHatOpenInnovationLabsConsoleApi.ApiClient, root.RedHatOpenInnovationLabsConsoleApi.ApplicationTopology);
  }
}(this, function(ApiClient, ApplicationTopology) {
  'use strict';




  /**
   * The Build model module.
   * @module model/Build
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Build</code>.
   * @alias module:model/Build
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Build</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Build} obj Optional instance to populate.
   * @return {module:model/Build} The populated <code>Build</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('topology')) {
        obj['topology'] = ApplicationTopology.constructFromObject(data['topology']);
      }
      if (data.hasOwnProperty('topology_version')) {
        obj['topology_version'] = ApiClient.convertToType(data['topology_version'], 'Integer');
      }
      if (data.hasOwnProperty('number_of_projects')) {
        obj['number_of_projects'] = ApiClient.convertToType(data['number_of_projects'], 'Integer');
      }
      if (data.hasOwnProperty('number_of_stages')) {
        obj['number_of_stages'] = ApiClient.convertToType(data['number_of_stages'], 'Integer');
      }
      if (data.hasOwnProperty('ansible_tower_link')) {
        obj['ansible_tower_link'] = ApiClient.convertToType(data['ansible_tower_link'], 'String');
      }
      if (data.hasOwnProperty('datetime_started')) {
        obj['datetime_started'] = ApiClient.convertToType(data['datetime_started'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/ApplicationTopology} topology
   */
  exports.prototype['topology'] = undefined;
  /**
   * @member {Integer} topology_version
   */
  exports.prototype['topology_version'] = undefined;
  /**
   * @member {Integer} number_of_projects
   */
  exports.prototype['number_of_projects'] = undefined;
  /**
   * @member {Integer} number_of_stages
   */
  exports.prototype['number_of_stages'] = undefined;
  /**
   * @member {String} ansible_tower_link
   */
  exports.prototype['ansible_tower_link'] = undefined;
  /**
   * @member {Date} datetime_started
   */
  exports.prototype['datetime_started'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));

