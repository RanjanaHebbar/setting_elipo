namespace setting;


entity do_you_want_tab {
    f1 : String;
    f2 : String;
    f3 : String;
}

entity country_tab {
    c : String;
}

entity ocr_tab {
    o : String;
}

entity postprocessor_tab {
    p : String;
}

entity days_tab {
    day : Integer;
}

entity duration_tab {
    durationn : Integer;
}

entity duration1_tab {
    durationn1 : String;
}

entity sync_duration_tab {
    sync_durationn : Integer;
}

entity sync_duration1_tab {
    sync_durationn1 : String;
}

entity Table1 {
    // key id : UUID;
    key PARAMETERS                   : String default 'Customise Parameters?';
    do_you_want                      : String ; // default 'SAP ';
    url_to_post                      : String @readonly ;// default 'http://182.72.219.94:8000/zinvoiceno1/InvoicePost' ;
    url_to_fetch                     : String @readonly ;//default 'http://182.72.219.94:8000/zgetpo/GetPo'            ;
    url_to_fetch_payment             : String @readonly;// default 'http://182.72.219.94:8000/zget_payment/Getpayment' ;
    login_id                         : String @readonly ;//default 'developer31'                                       ;
    login_password                   : String @readonly @Common.MaskedValue ;// default '********' ;
   
    enable_integration               : Boolean;
    enable_integration_validation    : Boolean;
    po_validation_against_3way_match : Boolean;
    send_attachments                 : Boolean;
    post_invoice                     : String;
    enable_supplier_enquiries        : Boolean;
    enable_assignment_rules          : Boolean;
    enable_version_control           : Boolean;
    enable_approval_rules            : Boolean;
    enable_manual_qc_check           : Boolean;
    set_tolerance_limit              : Boolean;
    auto_schedule_ocr                : Boolean;

    set_the_duration                 : Integer ;
    set_the_duration1                : String  ;

    ocr                              : String;
    postprocessor                    : String;
    process                          : String;
    get_payment_status               : Boolean;
    set_the_duration_paymentInfo     : Integer ;
    set_the_duration_paymentInfo1    : String  ;


    sync_master_data                 : Boolean;
    sync_for_material                : Boolean;
    sync_for_vendor                  : Boolean;
    sync_duration                    : Integer;
    sync_duration1                   : String;

    days                             : Integer;
    auto_trigger_approval            : Boolean;

    enable_accuracy_parameters       : Boolean;
   
    country                          : String;
    notification_gmail               : String;   // default 'elipotest@gmail.com';
    gstn                             : String;  // default '29AAHCP5201G1ZJ';
    ocr_email                        : String;  //default 'einvoiceportal@gmail.com';
    // logo                             : String;

}


entity Table2 {
    key table_key : String;
        ocr       : String;
        relation  : Composition of many Tablechild
                        on relation.table_key = table_key; //table_key;
}
entity Tablechild {
    key id:UUID;
     label_id  : Integer;
        label     : String;
    key table_key : String;
        parent :Association to one Table2;

}



entity Roles {
    key id            : Integer;
        user_role     : String;
        user_name     : String @readonly;
        email_id      : String @readonly;
        department_id : Integer;
    key member_id     : Integer;
        user_type     : String;
        vendor_code   : Integer;
        vendor_name: String;
   
}
entity search_help {
    user_type : String;

}
entity search_help1 {
    supplier_code : Integer;
    supplier_description: String;

}