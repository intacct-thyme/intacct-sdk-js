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

import AccountUpdate from "../../../src/Functions/GeneralLedger/AccountUpdate";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("AcccountUpdate", () => {
    before((done) => {
        return done();
    });
    beforeEach((done) => {
        return done();
    });
    afterEach((done) => {
        return done();
    });
    after((done) => {
        return done();
    });
    it("should update an Account object", () => {
        const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <update>
            <GLACCOUNT>
                <ACCOUNTNO>1010</ACCOUNTNO>
                <TITLE>hello world</TITLE>
            </GLACCOUNT>
        </update>
    </function>
</test>`;

        const record = new AccountUpdate();
        record.controlId = "unittest";
        record.accountNo = "1010";
        record.title = "hello world";

        XmlObjectTestHelper.CompareXml(expected, record);
    });
});
