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

import ExpenseReportLineCreate from "../../../src/Functions/EmployeeExpense/ExpenseReportLineCreate";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("ExpenseReportLineCreate", () => {
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
    it("should build ExpenseReportLineCreate object", () => {
        const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <expense>
        <glaccountno />
    </expense>
</test>`;

        const record = new ExpenseReportLineCreate();

        XmlObjectTestHelper.CompareXml(expected, record);
    });
    it("should build ExpenseReportLineCreate object with all fields", () => {
        const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <expense>
        <glaccountno>7000</glaccountno>
        <amount>1025.99</amount>
        <currency>USD</currency>
        <trx_amount>76343.43</trx_amount>
        <exchratedate>
            <year>2016</year>
            <month>06</month>
            <day>30</day>
        </exchratedate>
        <exchratetype>Intacct Daily Rate</exchratetype>
        <expensedate>
            <year>2016</year>
            <month>06</month>
            <day>30</day>
        </expensedate>
        <memo>Marriott</memo>
        <form1099>true</form1099>
        <paidfor>Hotel</paidfor>
        <locationid>Location1</locationid>
        <departmentid>Department1</departmentid>
        <customfields>
            <customfield>
                <customfieldname>customfield1</customfieldname>
                <customfieldvalue>customvalue1</customfieldvalue>
            </customfield>
        </customfields>
        <projectid>Project1</projectid>
        <customerid>Customer1</customerid>
        <vendorid>Vendor1</vendorid>
        <employeeid>Employee1</employeeid>
        <itemid>Item1</itemid>
        <classid>Class1</classid>
        <contractid>Contract1</contractid>
        <warehouseid>Warehouse1</warehouseid>
        <billable>true</billable>
        <exppmttype>AMEX</exppmttype>
        <quantity>10</quantity>
        <rate>12.34</rate>
    </expense>
</test>`;

        const record = new ExpenseReportLineCreate();
        record.glAccountNumber = "7000";
        record.reimbursementAmount = 1025.99;
        record.transactionCurrency = "USD";
        record.transactionAmount = 76343.43;
        record.exchangeRateDate = new Date(2016, 5, 30);
        record.exchangeRateType = "Intacct Daily Rate";
        record.expenseDate = new Date(2016, 5, 30);
        record.paidTo = "Marriott";
        record.paidFor = "Hotel";
        record.form1099 = true;
        record.billable = true;
        record.paymentTypeName = "AMEX";
        record.quantity = 10;
        record.unitRate = 12.34;
        record.locationId = "Location1";
        record.departmentId = "Department1";
        record.projectId = "Project1";
        record.customerId = "Customer1";
        record.vendorId = "Vendor1";
        record.employeeId = "Employee1";
        record.itemId = "Item1";
        record.classId = "Class1";
        record.contractId = "Contract1";
        record.warehouseId = "Warehouse1";
        record.customFields = [
            [ "customfield1", "customvalue1" ],
        ];

        XmlObjectTestHelper.CompareXml(expected, record);
    });
});
