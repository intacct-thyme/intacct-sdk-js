/**
 * @module Intacct/SDK/Functions/Company
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
import AbstractDepartment from "./AbstractDepartment";

export default class DepartmentCreate extends AbstractDepartment {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("create");
        xml.writeStartElement("DEPARTMENT");

        xml.writeElement("DEPARTMENTID", this.departmentId, true);
        xml.writeElement("TITLE", this.departmentName, true);

        xml.writeElement("PARENTID", this.parentDepartmentId);
        xml.writeElement("SUPERVISORID", this.managerEmployeeId);

        xml.writeElement("CUSTTITLE", this.departmentTitle);

        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        } else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }

        xml.writeCustomFieldsImplicit(this.customFields);

        xml.writeEndElement(); // DEPARTMENT
        xml.writeEndElement(); // create

        xml.writeEndElement(); // function
    }
}
