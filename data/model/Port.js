/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end.
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

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  }
  else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.Port = factory(
      root.RedHatOpenInnovationLabsConsoleApi.ApiClient
    );
  }
}(this, (ApiClient) => {
  /**
   * The Port model module.
   * @module model/Port
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Port</code>.
   * @alias module:model/Port
   * @class
   * @param port {Integer}
   * @param protocol {String}
   * @param targetPort {Integer}
   */
  const exports = function (port, protocol, targetPort) {
    const _this = this;

    _this.port = port;
    _this.protocol = protocol;
    _this.target_port = targetPort;
  };

  /**
   * Constructs a <code>Port</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Port} obj Optional instance to populate.
   * @return {module:model/Port} The populated <code>Port</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('port')) {
        obj.port = ApiClient.convertToType(data.port, 'Integer');
      }
      if (data.hasOwnProperty('protocol')) {
        obj.protocol = ApiClient.convertToType(data.protocol, 'String');
      }
      if (data.hasOwnProperty('target_port')) {
        obj.target_port = ApiClient.convertToType(data.target_port, 'Integer');
      }
    }
    return obj;
  };

  /**
   * @member {Integer} port
   */
  exports.prototype.port = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype.protocol = undefined;
  /**
   * @member {Integer} target_port
   */
  exports.prototype.target_port = undefined;

  return exports;
}));
