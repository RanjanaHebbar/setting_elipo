using settingService as service from '../../srv/service';

annotate service.Table1 with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : PARAMETERS,
            Label : 'PARAMETERS',
        },
    ]
);
annotate service.Table1 with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : do_you_want,
                Label : 'DO YOU WANT TO USE SAP AS YOUR ERP BACK END OR ZOHO?',
            },
            {
                $Type : 'UI.DataField',
                Value : url_to_post,
                Label : 'URL TO POST INVOICE',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'do_you_want'},'ZOHO']}}
            },
            {
                $Type : 'UI.DataField',
                Value : url_to_fetch,
                Label : 'URL TO FETCH PO DETAIL',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'do_you_want'},'ZOHO']}}
            },
            {
                $Type : 'UI.DataField',
                Value : url_to_fetch_payment,
                Label : 'URL TO FETCH PAYMENT STATUS',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'do_you_want'},'ZOHO']}}
            },
            {
                $Type : 'UI.DataField',
                Value : login_id,
                Label : 'LOGIN ID',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'do_you_want'},'ZOHO']}}
            },
            {
                $Type : 'UI.DataField',
                Value : login_password,
                Label : 'LOGIN PASSWORD',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'do_you_want'},'ZOHO']}}
            },
            {
                $Type : 'UI.DataField',
                Value : enable_integration,
                Label : 'DO YOU WANT TO ENABLE INTEGRATION FOR INVOICE POSTING ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_integration_validation,
                Label : 'DO YOU WANT TO ENABLE INTEGRATION FOR PO VALIDATION ?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'enable_integration'},false]}}
                 
            },
            {
                $Type : 'UI.DataField',
                Value : po_validation_against_3way_match,
                Label : 'DO YOU WANT TO ENABLE PO VALIDATION AGAINST ERP FOR 3-WAY MATCH ?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'enable_integration'},false]}}
            },
            { 
                $Type : 'UI.DataField',
                Value : send_attachments,
                Label : 'DO YOU WANT TO SEND ATTACHMENTS TO ERP ?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'enable_integration'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : post_invoice,
                Label : 'WHERE DO YOU WANT TO POST NPO INVOICE ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_assignment_rules,
                Label : 'DO YOU WANT TO ENABLE ASSIGNMENT RULES ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_supplier_enquiries,
                Label : 'DO YOU WANT TO ENABLE SUPPLIER ENQUIRIES ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_version_control,
                Label : 'DO YOU WANT TO ENABLE VERSION CONTROL FOR REVISED INVOICES?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_approval_rules,
                Label : 'DO YOU WANT ENABLE APPROVAL RULES ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_manual_qc_check,
                Label : 'ENABLE MANUAL QC CHECK ?',
            },
            {
                $Type : 'UI.DataField',
                Value : set_tolerance_limit,
                Label : 'DO YOU WANT TO SET TOLERANCE LIMIT FOR DEPARTMENTAL BUDGETS VALIDATION ?',
            },
            {
                $Type : 'UI.DataField',
                Value : auto_schedule_ocr,
                Label : 'DO YOU WANT TO AUTO SCHEDULE OCR ?',
            },
            {
                $Type : 'UI.DataField',
                Value : set_the_duration,
                Label : 'SET THE DURATION OF INTERVAL BETWEEN WHICH THAT OCR SHOULD BE TRIGGERED',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'auto_schedule_ocr'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : set_the_duration1,
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'auto_schedule_ocr'},false]}}
            },{
                $Type : 'UI.DataField',
                Value : ocr,
                Label : 'DO YOU WANT TO USE AWS TEXTRAXT OR PAPER-AI AS YOUR OCR ?',
            },
            {
                $Type : 'UI.DataField',
                Value : postprocessor,
                Label : 'SELECT POSTPROCESSOR TO BE USED',
                ![@UI.Hidden]: {$edmJson: {$Ne: [{$Path: 'ocr'},'OCR 2']}}
            },
            {
                $Type : 'UI.DataField',
                Value : process,
                Label : 'DO YOU WANT TO PROCESS INVOICE OR PO',
            },
            {
                $Type : 'UI.DataField',
                Value : get_payment_status,
                Label : 'DO YOU WANT TO GET PAYMENT STATUS FROM ERP ?',
            },
            {
                $Type : 'UI.DataField',
                Value : set_the_duration_paymentInfo,
                Label : 'HOW FREQUENT DO YOU WANT EPILO TO CHECK PAYMENT STATUS WITH ERP ?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'get_payment_status'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : set_the_duration_paymentInfo1,
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'get_payment_status'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : sync_master_data,
                Label : 'DO YOU WANT TO SYNC MASTER DATA ?',
            },
            {
                $Type : 'UI.DataField',
                Value : sync_for_material,
                Label : 'DO YOU WANT TO SYNC MASTER DATA FOR MATERIAL ?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'sync_master_data'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : sync_for_vendor,
                Label : 'DO YOU WANT TO SYNC MASTER DATA FOR VENDOR?',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'sync_master_data'},false]}}

            },
            {
                $Type : 'UI.DataField',
                Value : sync_duration,
                Label : 'SYNC DURATION',
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'sync_master_data'},false]}}
            },
            {
                $Type : 'UI.DataField',
                Value : sync_duration1,
                ![@UI.Hidden]: {$edmJson: {$Eq: [{$Path: 'sync_master_data'},false]}}

            },
            {
                $Type : 'UI.DataField',
                Value : days,
                Label : 'IF INV IS DUE,HOW MANY DAYS PRIOR YOU WANT TO BE NOTIFIED BEFORE DUE DATE?',
            },
            {
                $Type : 'UI.DataField',
                Value : auto_trigger_approval,
                Label : 'DO YOU WANT TO AUTO TRIGGER APPROVAL FLOW IF THE INCOMING INVOICE IS ERROR FREE ?',
            },
            {
                $Type : 'UI.DataField',
                Value : enable_accuracy_parameters,
                Label : 'DO YOU WANT TO ENABLE ACCURACY PARAMETERS ?',
            },
            {
                $Type : 'UI.DataField',
                Value : country,
                Label : 'SELECT COUNTRY',
            },
            {
                $Type : 'UI.DataField',
                Value : notification_gmail,
                Label : 'SET NOTIFICATION EMAIL ID',
            },{
                $Type : 'UI.DataField',
                Value : gstn,
                Label : 'ENTER COMPANY GSTIN',
            },{
                $Type : 'UI.DataField',
                Value : ocr_email,
                Label : 'SET OCR CENTRALIZED EMAIL ID',
            },
            {
                $Type : 'UI.DataField',
                Value : PARAMETERS,
                ![@UI.Hidden]:true,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Customise Parameters',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);

annotate service.Table1 with {
    process @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : process,
                    ValueListProperty : 'f3',
                },
            ],
            Label : 'process',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    country @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_1search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : country,
                    ValueListProperty : 'c',
                },
            ],
            Label : 'country',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    ocr @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_2search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : ocr,
                    ValueListProperty : 'o',
                },
            ],
            Label : 'ocr',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    postprocessor @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_3search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : postprocessor,
                    ValueListProperty : 'p',
                },
            ],
            Label : 'postprocessor',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    post_invoice @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : post_invoice,
                    ValueListProperty : 'f2',
                },
            ],
            Label : 'invoice',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    days @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_4search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : days,
                    ValueListProperty : 'day',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    do_you_want @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : do_you_want,
                    ValueListProperty : 'f1',
                },
            ],
            Label : 'search',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    set_the_duration @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_5search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : set_the_duration,
                    ValueListProperty : 'durationn',
                },
            ],
            Label : 'duration',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    set_the_duration1 @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_6search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : set_the_duration1,
                    ValueListProperty : 'durationn1',
                },
            ],
            Label : 'duration1',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    sync_duration @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_7search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : sync_duration,
                    ValueListProperty : 'sync_durationn',
                },
            ],
            Label : 'sync',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with @(UI.DeleteHidden: true);
annotate service.Table1 with @(UI.CreateHidden: true);
annotate service.Table1 with @(
    UI.HeaderInfo : {
        TypeNamePlural : 'SETTING',
        TypeName : '',
    }
);
annotate service.Table1 with {
    set_the_duration_paymentInfo @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_5search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : set_the_duration_paymentInfo,
                    ValueListProperty : 'durationn',
                },
            ],
            Label : 'frequency',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    sync_duration1 @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_8search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : sync_duration1,
                    ValueListProperty : 'sync_durationn1',
                },
            ],
            Label : 'sync',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Table1 with {
    set_the_duration_paymentInfo1 @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_6search',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : set_the_duration_paymentInfo1,
                    ValueListProperty : 'durationn1',
                },
            ],
            Label : 'frequency1',
        },
        Common.ValueListWithFixedValues : true
)};

