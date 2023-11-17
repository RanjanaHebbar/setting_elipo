const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    //SERVICE ENTITIES 
    let {
        Table1,
        Table2,
        _search,
        _1search,
        _2search,
        _3search,
        _4search,
        _5search,
        _6search,
        _7search,
        _8search,
        Tablechild,
        User_role,
        _searchh,
        _searchh1
    } = this.entities;


    const c4re = await cds.connect.to('iflow');
    var firstRead = true;
    /* SERVICE HANDLERS */
    this.before('READ', [_search, _1search, _2search, _3search, _4search, _5search, _6search, _7search, _8search], async (req) => {
        firstRead = true;
        try {
            if (firstRead) {
              
                const resp1 = await c4re.get('/dev/dropdown?drop_key=user_erp');
                const resp2 = await c4re.get('/dev/dropdown?drop_key=country');
                const resp3 = await c4re.get('/dev/dropdown?drop_key=elipo_ocr');
                const resp4 = await c4re.get('/dev/dropdown?drop_key=paper_ai_postprocessor');
                cds.tx(req).run(DELETE(_search));
                cds.tx(req).run(DELETE(_1search));
                cds.tx(req).run(DELETE(_2search));
                cds.tx(req).run(DELETE(_3search));
                cds.tx(req).run(DELETE(_4search));
                cds.tx(req).run(DELETE(_5search));
                cds.tx(req).run(DELETE(_6search));
                cds.tx(req).run(DELETE(_7search));
                cds.tx(req).run(DELETE(_8search));
                // const spaces = resp.content;
                const spaces1 = resp1.body;
                const spaces2 = resp2.body;
                const spaces3 = resp3.body;
                const spaces4 = resp4.body;
               
                const entries1 = [];
                const entries2 = [];
                const entries3 = [];
                const entries4 = [];
                const entries = [];
                const entry = [];
                const npo_invoice = ['FB60', 'MIRO'];
                const invoice_po = ['Invoice', 'PO'];
                const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                const duration1 = ['Days', 'Hours', 'Mins'];
                const sync_duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
                const sync_duration1 = ['Hours']
                var i = 0;
                var j = 0;
                var k = 0;
                var l = 0;
                var m = 0;
                const ent1 = [];
                const ent2 = [];
                const ent3 = [];
                const ent4 = [];
                const ent5 = [];
                // ent1.push()

                for (let i = 0; i < days.length; i++) {
                    ent1.push({ day: days[i] })

                }
                for (let j = 0; j < duration.length; j++) {
                    ent2.push({ durationn: duration[j] })

                }
                for (let k = 0; k < duration1.length; k++) {
                    ent3.push({ durationn1: duration1[k] })

                }
                for (let l = 0; l < sync_duration.length; l++) {
                    ent4.push({ sync_durationn: sync_duration[l] })

                }
                for (let m = 0; m < sync_duration1.length; m++) {
                    ent5.push({ sync_durationn1: sync_duration1[m] })

                }


                spaces1.forEach(space => {
                    entries1.push({

                        f1: space.value2,
                        f2: npo_invoice[i],
                        f3: invoice_po[i]
                        // do_you_want:space.value2,

                    });
                    i++;
                    j++;
                    k++;
                    l++;
                    m++;
                });
                spaces2.forEach(space => {
                    entries2.push({

                        c: space.value2,

                    });
                });
                spaces3.forEach(space => {
                    entries3.push({

                        o: space.value2,
                        // do_you_want:space.value2,

                    });
                });
                spaces4.forEach(space => {
                    entries4.push({

                        p: space.value2,
                        // do_you_want:space.value2,

                    });
                });
            
                entry.push(entries)
                await cds.tx(req).run(INSERT.into(_search).entries(entries1));
                await cds.tx(req).run(INSERT.into(_1search).entries(entries2));
                await cds.tx(req).run(INSERT.into(_2search).entries(entries3));
                await cds.tx(req).run(INSERT.into(_3search).entries(entries4));
                await cds.tx(req).run(INSERT.into(_4search).entries(ent1));
                await cds.tx(req).run(INSERT.into(_5search).entries(ent2));
                await cds.tx(req).run(INSERT.into(_6search).entries(ent3));
                await cds.tx(req).run(INSERT.into(_7search).entries(ent4));
                await cds.tx(req).run(INSERT.into(_8search).entries(ent5));

                // return spaces;
                firstRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

     firstRead = true;
    this.before('READ', Table1, async (req) => {
        firstRead = true;
        try {
            if (firstRead) {
                const resp = await c4re.get('/dev/setting');
                cds.tx(req).run(DELETE(Table1));
                const spaces = resp.body;
                const entries = [];
                const entry = [];
            
                spaces.forEach(space => {
                    if (space.key_name == 'user_erp') {
                        entries.do_you_want = space.value1;
                        if (entries.do_you_want == 'sap') {
                            entries.do_you_want = 'SAP';                          
                        }
                        else{
                            entries.do_you_want = 'ZOHO';
                        }
                    }
                    if (space.key_name == 'sap_posting_url') {
                        entries.url_to_post = space.value1;
                    }
                    if (space.key_name == 'sap_po_fetch_url') {
                        entries.url_to_fetch = space.value1;
                    }
                    if (space.key_name == 'sap_payment_status_url') {
                        entries.url_to_fetch_payment = space.value1;
                    }
                    if (space.key_name == 'sap_userid') {
                        entries.login_id = space.value1;
                    }
                    if (space.key_name == 'sap_password') {
                        entries.login_password = space.value1;
                    }
                    if (space.key_name == 'invoice_posting') {
                        entries.enable_integration = space.value1;
                        if (entries.enable_integration == 'on') {
                            entries.enable_integration = true;                          
                        }
                        else{
                            entries.enable_integration = false;
                        }
                    }
                    if (space.key_name == 'po_validation') {
                        entries.enable_integration_validation = space.value1;
                        if (entries.enable_integration_validation == 'on') {
                            entries.enable_integration_validation = true;                          
                        }
                        else{
                            entries.enable_integration_validation = false;
                        }
                    }
                    if (space.key_name == '3_way_match') {
                        entries.po_validation_against_3way_match = space.value1;
                        if (entries.po_validation_against_3way_match == 'on') {
                            entries.po_validation_against_3way_match = true;                          
                        }
                        else{
                            entries.po_validation_against_3way_match = false;
                        }
                    }


                   
                    if (space.key_name == 'attach_to_erp') {
                        entries.send_attachments = space.value1;
                        if (entries.send_attachments == 'on') {
                            entries.send_attachments = true;                          
                        }
                        else{
                            entries.send_attachments = false;
                        }
                    }
                    if (space.key_name == 'npo_tcode') {
                        entries.post_invoice = space.value1;
                    }
                    if (space.key_name == 'supplier_enquiry') {
                        entries.enable_supplier_enquiries = space.value1;
                        if (entries.enable_supplier_enquiries == 'on') {
                            entries.enable_supplier_enquiries = true;                          
                        }
                        else{
                            entries.enable_supplier_enquiries = false;
                        }
                    }
                    if (space.key_name == 'app_assignment') {
                        entries.enable_assignment_rules = space.value1;
                        if (entries.enable_assignment_rules == 'on') {
                            entries.enable_assignment_rules = true;                          
                        }
                        else{
                            entries.enable_assignment_rules = false;
                        }
                    }
                    if (space.key_name == 'resent_invoice') {
                        entries.enable_version_control = space.value1;
                        if (entries.enable_version_control == 'on') {
                            entries.enable_version_control = true;                          
                        }
                        else{
                            entries.enable_version_control = false;
                        }
                    }
                    if (space.key_name == 'approval_rules') {
                        entries.enable_approval_rules = space.value1;
                        if (entries.enable_approval_rules == 'on') {
                            entries.enable_approval_rules = true;                          
                        }
                        else{
                            entries.enable_approval_rules = false;
                        }
                    }
                    if (space.key_name == 'qc_check') {
                        entries.enable_manual_qc_check = space.value1;
                        if (entries.enable_manual_qc_check == 'on') {
                            entries.enable_manual_qc_check = true;                          
                        }
                        else{
                            entries.enable_manual_qc_check = false;
                        }
                    }
                    if (space.key_name == 'tolerance_limit') {
                        entries.set_tolerance_limit = space.value1;
                        if (entries.set_tolerance_limit == 'on') {
                            entries.set_tolerance_limit = true;                          
                        }
                        else{
                            entries.set_tolerance_limit = false;
                        }
                    }
                    if (space.key_name == 'ocr_auto_schedule') {
                        entries.auto_schedule_ocr = space.value1;
                        if (entries.auto_schedule_ocr == 'on') {
                            entries.auto_schedule_ocr = true;                          
                        }
                        else{
                            entries.auto_schedule_ocr = false;
                        }
                    }
                    if (space.key_name == 'auto_schedule_rate_value') {
                        entries.set_the_duration = space.value1;
                    }
                    if (space.key_name == 'auto_schedule_rate_unit') {
                        entries.set_the_duration1 = space.value1;
                        if (entries.set_the_duration1 == 'hour') {
                            entries.set_the_duration1 = 'Hours';                          
                        }
                        if (entries.set_the_duration1 == 'day') {
                            entries.set_the_duration1 = 'Days';                          
                        }
                        if (entries.set_the_duration1 == 'minute') {
                            entries.set_the_duration1 = 'Mins';                          
                        }   
                    }
                    if (space.key_name == 'elipo_ocr') {
                        entries.ocr = space.value1;
                        if (entries.ocr == 'textract') {
                            entries.ocr = 'OCR 1';                          
                        }
                        else{
                            entries.ocr = 'OCR 2';
                        }
                    }
                    if (space.key_name == 'paper_ai_postprocessor') {
                        entries.postprocessor = space.value1;
                        if (entries.postprocessor == 'fifth') {
                            entries.postprocessor = 'Fifth';                          
                        }
                        if (entries.postprocessor == 'ninth') {
                            entries.postprocessor = 'Ninth';                          
                        }
                        if (entries.postprocessor == 'sixth') {
                            entries.postprocessor = 'Sixth';                          
                        }
                    }
                    if (space.key_name == 'process') {
                        entries.process = space.value1;
                        if (entries.process == 'PO') {
                            entries.process = 'PO';                          
                        }
                        else{
                            entries.process = 'Invoice';
                        }
                    }
                    if (space.key_name == 'payment_status') {
                        entries.get_payment_status = space.value1;
                        if (entries.get_payment_status == 'on') {
                            entries.get_payment_status = true;                          
                        }
                        else{
                            entries.get_payment_status = false;
                        }
                    }
                    if (space.key_name == 'auto_schedule_rate_value_paymentInfo') {
                        entries.set_the_duration_paymentInfo = space.value1;
                    }
                    if (space.key_name == 'auto_schedule_rate_unit_paymentInfo') {
                        entries.set_the_duration_paymentInfo1 = space.value1;
                        if (entries.set_the_duration_paymentInfo1 == 'hour') {
                            entries.set_the_duration_paymentInfo1 = 'Hours';                          
                        }
                        if (entries.set_the_duration_paymentInfo1 == 'day') {
                            entries.set_the_duration_paymentInfo1 = 'Days';                          
                        }
                        if (entries.set_the_duration_paymentInfo1 == 'minute') {
                            entries.set_the_duration_paymentInfo1 = 'Mins';                          
                        }   
                    }



                    if (space.key_name == 'master_sync') {
                        entries.sync_master_data = space.value1;
                        if (entries.sync_master_data == 'on') {
                            entries.sync_master_data = true;                          
                        }
                        else{
                            entries.sync_master_data = false;
                        }
                    }
                    if (space.key_name == 'master_sync_material') {
                        entries.sync_for_material = space.value1;
                        if (entries.sync_for_material == 'on') {
                            entries.sync_for_material = true;                          
                        }
                        else{
                            entries.sync_for_material = false;
                        }
                    }
                    if (space.key_name == 'master_sync_vendor') {
                        entries.sync_for_vendor = space.value1;
                        if (entries.sync_for_vendor == 'on') {
                            entries.sync_for_vendor = true;                          
                        }
                        else{
                            entries.sync_for_vendor = false;
                        }
                    }
                    if (space.key_name == 'sync_master_hour') {
                        entries.sync_duration = space.value1;
                    }
                    if (space.key_name == 'auto_schedule_rate_unit') {
                        entries.sync_duration1 = space.value1;
                    }
                    if (space.key_name == 'noti_invoice_due') {
                        entries.days = space.value1;
                    }
                    if (space.key_name == 'approval_auto_trigger') {
                        entries.auto_trigger_approval = space.value1;
                        if (entries.auto_trigger_approval == 'on') {
                            entries.auto_trigger_approval = true;                          
                        }
                        else{
                            entries.auto_trigger_approval = false;
                        }
                    }
                    if (space.key_name == 'accuracy_parameter') {
                        entries.enable_accuracy_parameters = space.value1;
                        if (entries.enable_accuracy_parameters == 'on') {
                            entries.enable_accuracy_parameters = true;                          
                        }
                        else{
                            entries.enable_accuracy_parameters = false;
                        }
                    }
                    if (space.key_name == 'country') {
                        entries.country = space.value1;
                        if (entries.country == 'india') {
                            entries.country = 'India';                          
                        }
                        if (entries.country == 'kuwait') {
                            entries.country = 'Kuwait';                          
                        }
                        if (entries.country == 'gulf') {
                            entries.country = 'Saudi';                          
                        }
                        if (entries.country == 'uae') {
                            entries.country = 'UAE';                          
                        }
                        if (entries.country == 'usa') {
                            entries.country = 'USA';                          
                        }
                    }
                    if (space.key_name == 'notification-mail') {
                        entries.notification_gmail = space.value1;
                    }
                    if (space.key_name == 'my_gstin') {
                        entries.gstn = space.value1;
                    }
                    if (space.key_name == 'ocr_central_email') {
                        entries.ocr_email = space.value1;
                    }
                   

                });
                entry.push(entries)
                await cds.tx(req).run(INSERT.into(Table1).entries(entry));

                // return spaces;
                firstRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    // READ For ocr-labels
    firstRead = true;
    this.before('READ', Table2, async (req) => {
        firstRead = true;
        try {
            if (firstRead) {
                const resp = await c4re.get('/dev/dropdown?drop_key=ocr-labels');
                await cds.tx(req).run(DELETE(Table2));
                const spaces = resp.body;
                const entries1 = [];
                spaces.forEach(space => {
                    entries1.push({
                        table_key: space.table_key,
                        ocr: space.value2,
                    })
                });
                await cds.tx(req).run(INSERT.into(Table2).entries(entries1));

                firstRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });
    firstRead = true;
    this.before('READ', Tablechild, async (req) => {
        firstRead = true;
        try {
            if (firstRead) {
                const res1 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=lineitem-amount');
                const res2 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=header-gstin');
                const res3 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=header-invoice_date');
                const res4 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=lineitem-material');
                const res5 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=lineitem-quantity');
                const res6 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=header-pan');
                const res7 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=header-po_no');
                const res8 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=lineitem-rate');
                const res9 = await c4re.get('/dev/ocr-lable?userid=einvoiceportal@gmail.com&label_name=header-invoice_no');
                const spaces1 = res1.body;
                const spaces2 = res2.body;
                const spaces3 = res3.body;
                const spaces4 = res4.body;
                const spaces5 = res5.body;
                const spaces6 = res6.body;
                const spaces7 = res7.body;
                const spaces8 = res8.body;
                const spaces9 = res9.body;
                const entries2 = [];
                cds.tx(req).run(DELETE(Tablechild));
                spaces1.forEach(space => {
                    entries2.push({
                        table_key: `lineitem-amount`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces2.forEach(space => {
                    entries2.push({
                        table_key: `header-gstin`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces3.forEach(space => {
                    entries2.push({
                        table_key: `header-invoice_date`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces4.forEach(space => {
                    entries2.push({
                        table_key: `lineitem-material`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces5.forEach(space => {
                    entries2.push({
                        table_key: `lineitem-quantity`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces6.forEach(space => {
                    entries2.push({
                        table_key: `header-pan`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces7.forEach(space => {
                    entries2.push({
                        table_key: `header-po_no`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces8.forEach(space => {
                    entries2.push({
                        table_key: `lineitem-rate`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                spaces9.forEach(space => {
                    entries2.push({
                        table_key: `header-invoice_no`,
                        label_id: space.label_id,
                        label: space.label
                    })
                });
                await cds.tx(req).run(INSERT.into(Tablechild).entries(entries2));

                firstRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    //read for roles
    var firstRead = true;
    this.before('READ', [User_role, _searchh, _searchh1], async (req) => {
        try {
            if (firstRead) {
                const resp = await c4re.get('/dev/users-role');
                const resp1 = await c4re.get('/dev/dropdown?drop_key=user_type');
                const drop_supplier = await c4re.get('/dev/list?refponumber=null&vendorcode=null');
                cds.tx(req).run(DELETE(User_role));
                let cnt = 1;
                await cds.tx(req).run(DELETE(_searchh));
                await cds.tx(req).run(DELETE(_searchh1));
                // const spaces = resp.content;
                const spaces = resp.body.Member;
                const entries = [];
                const spaces1 = resp1.body;
                const entries1 = [];
                const spaces2 = drop_supplier.body;
                const entries2 = [];
                spaces.forEach(space => {
                    entries.push({
                        id: cnt,
                        email_id: space.email,
                        user_name: space.name,
                        user_role: space.user_type_description,
                        department_id: space.department_id,
                        member_id: space.member_id,
                        user_type: space.user_type,

                    });
                    cnt++;
                });
                spaces1.forEach(space => {
                    entries1.push({

                        user_type: space.value2,

                    });
                });
                spaces2.forEach(space => {
                    entries2.push({

                        supplier_code: space.code,
                        supplier_description: space.description,

                    });
                });
                await cds.tx(req).run(INSERT.into(User_role).entries(entries));
                await cds.tx(req).run(INSERT.into(_searchh).entries(entries1));
                await cds.tx(req).run(INSERT.into(_searchh1).entries(entries2));
                firstRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // update
    this.on('UPDATE', Table1, async (req) => {
        let temp6 = req.data.set_the_duration1;
        if (req.data.set_the_duration1 == 'Hours') {
            temp6 = 'hour';
        }
        if (req.data.set_the_duration1 == 'Days') {
            temp6 = 'day';
        }
        if (req.data.set_the_duration1 == 'Mins') {
            temp6 = 'minute';
        }
        let check_frequency = req.data.set_the_duration_paymentInfo1;
        if (req.data.set_the_duration_paymentInfo1 == 'Hours') {
            check_frequency = 'hour';
        }
        if (req.data.set_the_duration_paymentInfo1 == 'Days') {
            check_frequency = 'day';
        }
        if (req.data.set_the_duration_paymentInfo1 == 'Mins') {
            check_frequency = 'minute';
        }
        const body = {
            setting: {
                Noti_email: req.data.notification_gmail,
                auto_schedule_rate_unit: temp6,
                auto_schedule_rate_unit_paymentInfo: check_frequency,
                auto_schedule_rate_value: req.data.set_the_duration,
                auto_schedule_rate_value_paymentInfo:req.data.set_the_duration_paymentInfo,
                my_gstin: req.data.gstn,
                noti_invoice_due: req.data.days,
                npo_tcode: req.data.post_invoice,
                ocr_central_email: req.data.ocr_email,
                sap_password: req.data.login_password,
                sap_payment_status_url: req.data.url_to_fetch_payment,
                sap_po_fetch_url: req.data.url_to_fetch,
                sap_posting_url: req.data.url_to_post,
                sap_userid: req.data.login_id,
                sync_master_hour: req.data.sync_duration


            }
        }
        const body1 = {
            drop_key: req.data.do_you_want,
        }
        const body2 = {
            drop_key: req.data.country,
        }
        const body3 = {
            drop_key: req.data.ocr,
        }
        const body4 = {
            drop_key: req.data.postprocessor,
        }
        const body5 = {
            drop_key: req.data.process,
        }




        const body6 = {
            key_name: req.data.enable_integration,
        }
        // const body7 = {
        //     key_name: req.data.process,
        // }
        const body8 = {
            key_name: req.data.enable_integration_validation,
        }
        const body9 = {
            key_name: req.data.po_validation_against_3way_match,
        }
        const body10 = {
            key_name: req.data.send_attachments,
        }
        const body11 = {
            key_name: req.data.enable_supplier_enquiries,
        }
        const body12 = {
            key_name: req.data.enable_assignment_rules,
        }
        const body13 = {
            key_name: req.data.enable_version_control,
        }
        const body14 = {
            key_name: req.data.enable_approval_rules,
        }
        const body15 = {
            key_name: req.data.enable_manual_qc_check,
        }
        const body16 = {
            key_name: req.data.set_tolerance_limit,
        }
        const body17 = {
            key_name: req.data.auto_schedule_ocr,
        }
        const body18 = {
            key_name: req.data.get_payment_status,
        }
        const body19 = {
            key_name: req.data.sync_master_data,
        }
        const body20 = {
            key_name: req.data.sync_for_material,
        }
        const body21 = {
            key_name: req.data.sync_for_vendor,
        }
        const body22 = {
            key_name: req.data.auto_trigger_approval,
        }
        const body23 = {
            key_name: req.data.enable_user_activity_tracking,
        }




        let temp1 = req.data.do_you_want;
        if (req.data.do_you_want == 'SAP') {
            temp1 = 'sap';
        }
        else {
            temp1 = 'zoho';
        };

        let temp2 = req.data.country;
        if (req.data.country == 'India') {
            temp2 = 'india';
        }
        if (req.data.country == 'Kuwait') {
            temp2 = 'kuwait';
        }
        if (req.data.country == 'Saudi') {
            temp2 = 'gulf';
        }
        if (req.data.country == 'UAE') {
            temp2 = 'uae';
        }
        if (req.data.country == 'USA') {
            temp2 = 'usa';
        }
        let temp3 = req.data.ocr;
        if (req.data.ocr == 'OCR 1') {
            temp3 = 'textract';
        }
        else {
            temp3 = 'paper-ai';
        }
        let temp4 = req.data.postprocessor;
        if (req.data.postprocessor == 'Fifth') {
            temp4 = 'fifth';
        }
        if (req.data.postprocessor == 'Ninth') {
            temp4 = 'ninth';
        }
        if (req.data.postprocessor == 'Sixth') {
            temp4 = 'sixth';
        }
        let temp5 = req.data.process;
        if (req.data.process == 'PO') {
            temp5 = 'PO';
        }
        else {
            temp5 = 'Invoice';
        }
        // let temp6 = req.data.set_the_duration1;
        if (req.data.set_the_duration1 == 'Hours') {
            temp6 = 'hour';
        }
        if (req.data.set_the_duration1 == 'Days') {
            temp6 = 'day';
        }
        if (req.data.set_the_duration1 == 'Mins') {
            temp6 = 'minute';
        }

        let temp7 = req.data.enable_integration;
        if (req.data.enable_integration == true) {
            temp7 = 'on';
        }
        else {
            temp7 = 'off';
        }
        let temp8 = req.data.enable_integration_validation;
        if (req.data.enable_integration_validation == true) {
            temp8 = 'on';
        }
        else {
            temp8 = 'off';
        }
        let temp9 = req.data.po_validation_against_3way_match;
        if (req.data.po_validation_against_3way_match == true) {
            temp9 = 'on';
        }
        else {
            temp9 = 'off';
        }
        let temp10 = req.data.send_attachments;
        if (req.data.send_attachments == true) {
            temp10 = 'on';
        }
        else {
            temp10 = 'off';
        }
        let temp11 = req.data.enable_supplier_enquiries;
        if (req.data.enable_supplier_enquiries == true) {
            temp11 = 'on';
        }
        else {
            temp11 = 'off';
        }
        let temp12 = req.data.enable_assignment_rules;
        if (req.data.enable_assignment_rules == true) {
            temp12 = 'on';
        }
        else {
            temp12 = 'off';
        }
        let temp13 = req.data.enable_version_control;
        if (req.data.enable_version_control == true) {
            temp13 = 'on';
        }
        else {
            temp13 = 'off';
        }
        let temp14 = req.data.enable_approval_rules;
        if (req.data.enable_approval_rules == true) {
            temp14 = 'on';
        }
        else {
            temp14 = 'off';
        }
        let temp15 = req.data.enable_manual_qc_check;
        if (req.data.enable_manual_qc_check == true) {
            temp15 = 'on';
        }
        else {
            temp15 = 'off';
        }
        let temp16 = req.data.set_tolerance_limit;
        if (req.data.set_tolerance_limit == true) {
            temp16 = 'on';
        }
        else {
            temp16 = 'off';
        }
        let temp17 = req.data.auto_schedule_ocr;
        if (req.data.auto_schedule_ocr == true) {
            temp17 = 'on';
        }
        else {
            temp17 = 'off';
        }
        let temp18 = req.data.get_payment_status;
        if (req.data.get_payment_status == true) {
            temp18 = 'on';
        }
        else {
            temp18 = 'off';
        }
        let temp19 = req.data.sync_master_data;
        if (req.data.sync_master_data == true) {
            temp19 = 'on';
        }
        else {
            temp19 = 'off';
        }
        let temp20 = req.data.sync_for_material;
        if (req.data.sync_for_material == true) {
            temp20 = 'on';
        }
        else {
            temp20 = 'off';
        }
        let temp21 = req.data.sync_for_vendor;
        if (req.data.sync_for_vendor == true) {
            temp21 = 'on';
        }
        else {
            temp21 = 'off';
        }
        let temp22 = req.data.auto_trigger_approval;
        if (req.data.auto_trigger_approval == true) {
            temp22 = 'on';
        }
        else {
            temp22 = 'off';
        }
        let temp23 = req.dataenable_accuracy_parameters;
        if (req.data.enable_accuracy_parameters == true) {
            temp23 = 'on';
        }
        else {
            temp23 = 'off';
        }



        try {
            debugger

            resp = await c4re.patch('/dev/setting', body);
            resp1 = await c4re.patch('/dev/setting?key_name=user_erp&key_value=' + temp1, body1);
            resp2 = await c4re.patch('/dev/setting?key_name=country&key_value=' + temp2, body2);
            resp3 = await c4re.patch('/dev/setting?key_name=elipo_ocr&key_value=' + temp3, body3);
            resp4 = await c4re.patch('/dev/setting?key_name=paper_ai_postprocessor&key_value=' + temp4, body4);
            resp5 = await c4re.patch('/dev/setting?key_name=process&key_value=' + temp5, body5);
            resp6 = await c4re.patch('/dev/setting?key_name=invoice_posting&key_value=' + temp7, body6);
            resp8 = await c4re.patch('/dev/setting?key_name=po_validation&key_value=' + temp8, body8);
            resp9 = await c4re.patch('/dev/setting?key_name=3_way_match&key_value=' + temp9, body9);
            resp10 = await c4re.patch('/dev/setting?key_name=attach_to_erp&key_value=' + temp10, body10);
            resp11 = await c4re.patch('/dev/setting?key_name=supplier_enquiry&key_value=' + temp11, body11);
            resp12 = await c4re.patch('/dev/setting?key_name=app_assignment&key_value=' + temp12, body12);
            resp13 = await c4re.patch('/dev/setting?key_name=resent_invoice&key_value=' + temp13, body13);
            resp14 = await c4re.patch('/dev/setting?key_name=approval_rules&key_value=' + temp14, body14);
            resp15 = await c4re.patch('/dev/setting?key_name=qc_check&key_value=' + temp15, body15);
            resp16 = await c4re.patch('/dev/setting?key_name=tolerance_limit&key_value=' + temp16, body16);
            resp17 = await c4re.patch('/dev/setting?key_name=ocr_auto_schedule&key_value=' + temp17, body17);
            resp18 = await c4re.patch('/dev/setting?key_name=payment_status&key_value=' + temp18, body18);
            resp19 = await c4re.patch('/dev/setting?key_name=master_sync&key_value=' + temp19, body19);
            resp20 = await c4re.patch('/dev/setting?key_name=master_sync_material&key_value=' + temp20, body20);
            resp21 = await c4re.patch('/dev/setting?key_name=master_sync_vendor&key_value=' + temp21, body21);
            resp22 = await c4re.patch('/dev/setting?key_name=approval_auto_trigger&key_value=' + temp22, body22);
            resp23 = await c4re.patch('/dev/setting?key_name=accuracy_parameter&key_value=' + temp23, body23);
            firstRead = true;
            const updatedEntity = await UPDATE(Table1).set(req.data).where({ PARAMETERS: req.data.PARAMETERS });
            return req.data;

            // return resp, resp1, resp2, resp3, resp4, resp5, resp6, resp8, resp9, resp10, resp11, resp12,
            //     resp13, resp14, resp15, resp16, resp17, resp18, resp19, resp20, resp21, resp22, resp23;

        }

        catch (err) {
            req.error(500, err.message);
        }
    });

    // update for role

    this.on('UPDATE', User_role, async (req) => {
        const drop_down = await c4re.get('/dev/dropdown?drop_key=user_type');
        const drop_supplier = await c4re.get('/dev/list?refponumber=null&vendorcode=null');
        const body = {
            email_id: req.data.email_id,
            user_name: req.data.user_name,
            user_role: req.data.user_role,

        }
        const body1 = {
            supplier_code: req.data.supplier_code,
            supplier_description: req.data.supplier_description

        }
        const mem = req.data.member_id;
        let role;
        const dept = req.data.department_id;
        const vend = req.data.supplier_code;

        let length = drop_down.body.length;
        for (let i = 0; i < length; i++) {
            if (drop_down.body[i].value2 == req.data.user_role) {
                role = drop_down.body[i].table_key;

            }
        };
        try {
            if (req.data.user_role == 'Supplier') {
                resp1 = await c4re.patch(`/dev/users-role?userid=${mem}&role=${role}&department_id=${dept}&vendor_no=${vend}`, body, body1);
                if (resp1.body == '\"Member already exists for Vendor SAP LABS\"') {
                    req.error({
                        message: '"Member already exists for Vendor SAP LABS\"',
                    });
                    let userrole1 = await SELECT`user_role`.from(User_role).where({ member_id: req.data.member_id });
                    req.data.user_role = userrole1[0].user_role;
                }

            }
            else {
                resp = await c4re.patch(`/dev/users-role?userid=${mem}&role=${role}&department_id=${dept}`, body);

            }
            const updatedEntity = await UPDATE(User_role).set(req.data).where({ member_id: req.data.member_id, id: req.data.id });
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    // delete User_role
    this.on('DELETE', User_role, async (req) => {
        const mem = req.data.member_id;
        try {
             resp = await c4re.delete('/dev/member?member_id='+mem);
            firstRead = true;
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });
});