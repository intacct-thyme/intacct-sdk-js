/**
 * @module Intacct/SDK/Functions/Common
 */

/**
 * Copyright 2019 Sage Intacct, Inc.
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

export default class GetDimensionRestrictedData extends AbstractFunction {
    public dimension: string;
    public value: string;

    constructor(controlId?: string) {
        super(controlId);
    }

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("getDimensionRestrictedData");
        xml.writeStartElement("DimensionValue");

        xml.writeElement("dimension", this.dimension);
        xml.writeElement("value", this.value);

        xml.writeEndElement(); // DimensionValue
        xml.writeEndElement(); // getDimensionRestrictedData
        xml.writeEndElement(); // function
    }
}
