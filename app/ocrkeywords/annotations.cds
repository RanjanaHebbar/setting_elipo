using settingService as service from '../../srv/service';

annotate service.Table2 with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'OCR KEYWORD',
            Value : ocr,
        },
    ]
);
annotate service.Table2 with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ocr',
                Value : ocr,
            },
        ],
    },
);
annotate service.Table2 with @(
    UI.SelectionFields : []
);
annotate service.Table2 with {
    ocr @Common.Label : 'ocr'
};

annotate service.Tablechild with @(
    UI.LineItem #table : [
        {
            $Type : 'UI.DataField',
            Value : label,
            Label : 'label',
        },]
);
annotate service.Table2 with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'OCR KEYWORD',
            ID : 'KEYWORD',
            Target : 'relation/@UI.LineItem#KEYWORD',
        },
    ]
);
annotate service.Tablechild with @(
    UI.LineItem #KEYWORD : [
        {
            $Type : 'UI.DataField',
            Value : label,
            Label : 'KEYWORD',
        },]
);
 annotate service.Table2 with @(
    UI.HeaderInfo : {
        TypeName : ' ',
        TypeNamePlural : '',
    }
);

annotate service.Table2 with @(UI.CreateHidden: true);
annotate service.Table2 with @(UI.DeleteHidden: true);

annotate service.Tablechild with @(
    UI.HeaderInfo : {
        TypeNamePlural : ' ',
        TypeName : '',
    }
);