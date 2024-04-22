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

export default class InstallApplication extends AbstractFunction {
    public xmlData: string;

    public writeXml(xml: IaXmlWriter): void {
        if (this.xmlData == null) {
            throw new Error("XML data is required for install application");
        }
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("installApp");

        xml.writeStartElement("appxml");

        // Example XML data:
        // <![CDATA[<application id="10032" origId="100227@10006" orderNo="16"
        // isSystem="F" version="1" companyNo="34466622" ></application>]]>
        xml.writeCDATA(this.xmlData);

        xml.writeEndElement(); // appxml

        xml.writeEndElement(); // getDimensions

        xml.writeEndElement(); // function
    }
}
