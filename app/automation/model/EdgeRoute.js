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
    define(['ApiClient', 'model/Route', 'model/Service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Route'), require('./Service'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsApi) {
      root.RedHatOpenInnovationLabsApi = {};
    }
    root.RedHatOpenInnovationLabsApi.EdgeRoute = factory(root.RedHatOpenInnovationLabsApi.ApiClient, root.RedHatOpenInnovationLabsApi.Route, root.RedHatOpenInnovationLabsApi.Service);
  }
}(this, function(ApiClient, Route, Service) {
  'use strict';




  /**
   * The EdgeRoute model module.
   * @module model/EdgeRoute
   * @version 0.3.0-alpha
   */

  /**
   * Constructs a new <code>EdgeRoute</code>.
   * @alias module:model/EdgeRoute
   * @class
   * @extends module:model/Route
   * @param routeType {module:model/Route.RouteTypeEnum} 
   */
  var exports = function(routeType) {
    var _this = this;
    Route.call(_this, routeType);





  };

  /**
   * Constructs a <code>EdgeRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdgeRoute} obj Optional instance to populate.
   * @return {module:model/EdgeRoute} The populated <code>EdgeRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Route.constructFromObject(data, obj);
      if (data.hasOwnProperty('ca_cert')) {
        obj['ca_cert'] = ApiClient.convertToType(data['ca_cert'], 'String');
      }
      if (data.hasOwnProperty('cert')) {
        obj['cert'] = ApiClient.convertToType(data['cert'], 'String');
      }
      if (data.hasOwnProperty('insecure_policy')) {
        obj['insecure_policy'] = ApiClient.convertToType(data['insecure_policy'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Route.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {String} ca_cert
   */
  exports.prototype['ca_cert'] = undefined;
  /**
   * @member {String} cert
   */
  exports.prototype['cert'] = undefined;
  /**
   * @member {String} insecure_policy
   */
  exports.prototype['insecure_policy'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;



  return exports;
}));

