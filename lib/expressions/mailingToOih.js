/* eslint "max-len":  ["error", { "code": 170 }] */

/**
 * Copyright 2019 Dropscan GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports.getExpression = msg => {
  if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
    return msg.body;
  }

  return {
    meta: {
      recordUid: msg.body.meta.recordUid,
      operation: msg.body.operation,
      applicationUid:
        msg.body.meta.applicationUid !== undefined &&
        msg.body.meta.applicationUid !== null
          ? msg.body.meta.applicationUid
          : "appUid not set yet",
      iamToken:
        msg.body.meta.iamToken !== undefined && msg.body.meta.iamToken !== null
          ? msg.body.meta.iamToken
          : undefined,
      schemaUri: "document"
    },
    data: {
      uid: msg.body.data.uuid,
      label: "Sendung " + msg.body.data.lastName,
      description: "Sendung " + msg.body.data.lastName
    }
  };
};
