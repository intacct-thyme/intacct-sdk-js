/**
 * @module Intacct/SDK/Functions/PlatformServices
 */

/**
 * Copyright 2022 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractFunction from "../AbstractFunction";

export default class ReadUserFormatting extends AbstractFunction {
  public key?: number;
  public userId?: string;

  public writeXml(xml: IaXmlWriter): void {
    xml.writeStartElement("function");
    xml.writeAttribute("controlid", this.controlId, true);

    xml.writeStartElement("readUserFormatting");

    if (this.key === undefined && this.userId === undefined) {
      throw new Error("Either key or userId must be set for ReadUserFormatting");
    }
    if (this.key !== undefined && this.userId !== undefined) {
      throw new Error("Only one of key or userId can be set for ReadUserFormatting");
    }
    if (this.key !== undefined) {
      xml.writeElement("key", this.key, true);
    }
    if (this.userId !== undefined) {
      xml.writeElement("userId", this.userId, true);
    }

    xml.writeEndElement(); // readUserFormatting

    xml.writeEndElement(); // function
  }
}
