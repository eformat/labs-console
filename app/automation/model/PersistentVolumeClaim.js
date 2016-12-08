/**
 * Red Hat Open Innovation Labs API
 * A generic model to support automation at all levels of the application and infrastructure lifecycle.
 *
 * OpenAPI spec version: 0.3.0-alpha
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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LabelSelector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LabelSelector'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsApi) {
      root.RedHatOpenInnovationLabsApi = {};
    }
    root.RedHatOpenInnovationLabsApi.PersistentVolumeClaim = factory(root.RedHatOpenInnovationLabsApi.ApiClient, root.RedHatOpenInnovationLabsApi.LabelSelector);
  }
}(this, function(ApiClient, LabelSelector) {
  'use strict';




  /**
   * The PersistentVolumeClaim model module.
   * @module model/PersistentVolumeClaim
   * @version 0.3.0-alpha
   */

  /**
   * Constructs a new <code>PersistentVolumeClaim</code>.
   * @alias module:model/PersistentVolumeClaim
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PersistentVolumeClaim</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersistentVolumeClaim} obj Optional instance to populate.
   * @return {module:model/PersistentVolumeClaim} The populated <code>PersistentVolumeClaim</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('access_modes')) {
        obj['access_modes'] = ApiClient.convertToType(data['access_modes'], ['String']);
      }
      if (data.hasOwnProperty('storage')) {
        obj['storage'] = ApiClient.convertToType(data['storage'], 'Number');
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = LabelSelector.constructFromObject(data['selector']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/PersistentVolumeClaim.AccessModesEnum>} access_modes
   */
  exports.prototype['access_modes'] = undefined;
  /**
   * @member {Number} storage
   */
  exports.prototype['storage'] = undefined;
  /**
   * @member {module:model/LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;


  /**
   * Allowed values for the <code>accessModes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessModesEnum = {
    /**
     * value: "ReadWriteOnce"
     * @const
     */
    "ReadWriteOnce": "ReadWriteOnce",
    /**
     * value: "ReadOnlyMany"
     * @const
     */
    "ReadOnlyMany": "ReadOnlyMany",
    /**
     * value: "ReadWriteMany"
     * @const
     */
    "ReadWriteMany": "ReadWriteMany"  };


  return exports;
}));


