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
import Inspect from "../../../src/Functions/Common/Inspect";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("Inspect", () => {
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
  it("should run inpect with object name", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <inspect>
            <object>TEST</object>
        </inspect>
    </function>
</test>`;

    const record = new Inspect("unittest");
    record.objectName = "TEST";

    XmlObjectTestHelper.CompareXml(expected, record);
  });
  it("should run detailed inpect with object name", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <inspect detail="1">
            <object>TEST</object>
        </inspect>
    </function>
</test>`;

    const record = new Inspect("unittest");
    record.objectName = "TEST";
    record.detail = true;

    XmlObjectTestHelper.CompareXml(expected, record);
  });
  it("should run inpect for all object", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <inspect>
            <object>*</object>
        </inspect>
    </function>
</test>`;

    const record = new Inspect("unittest");

    XmlObjectTestHelper.CompareXml(expected, record);
  });
});
