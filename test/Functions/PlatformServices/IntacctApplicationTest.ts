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

import * as chai from "chai";
import IntacctApplication from "../../../src/Functions/PlatformServices/IntacctApplication";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <installApp>
            <appxml>
                <![CDATA[<application id="10032" origId="100227@10006" orderNo="16" isSystem="F" version="1" companyNo="34466622"></application>]]>
            </appxml>
        </installApp>
    </function>
</test>`;

describe("IntacctApplication", () => {
    it("should write the application data, prepending omitted CDATA", () => {
        const record = new IntacctApplication("unittest");
        record.xmlData = `<application id="10032" origId="100227@10006" orderNo="16" isSystem="F" version="1" companyNo="34466622"></application>`;

        XmlObjectTestHelper.CompareXml(expected, record);
    });
    it("should write the application data, not prepending existing CDATA", () => {
        const record = new IntacctApplication("unittest");
        record.xmlData = `<![CDATA[<application id="10032" origId="100227@10006" orderNo="16" isSystem="F" version="1" companyNo="34466622"></application>]]>`;
        XmlObjectTestHelper.CompareXml(expected, record);
    });
});
