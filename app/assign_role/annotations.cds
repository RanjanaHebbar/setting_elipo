
using settingService as service from '../../srv/service';


annotate service.User_role with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Value: user_role,
        Label: 'USER ROLE',
    },
    {
        $Type: 'UI.DataField',
        Value: user_name,
        Label: 'USER NAME',
    },
    {
        $Type: 'UI.DataField',
        Value: email_id,
        Label: 'EMAIL ID',
    },
]);

annotate service.User_role with @(UI.SelectionFields: []);

annotate service.User_role with {
    user_role @Common.Label: 'assign role'
};

annotate service.User_role with {
    user_role @Common.FieldControl: #Mandatory
};

annotate service.User_role with @(
    UI.Facets                : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Assign Role',
        ID    : 'AssignRole',
        Target: '@UI.FieldGroup#AssignRole',
    }, ],
    UI.FieldGroup #AssignRole: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: user_role,
                Label: 'USER ROLE*',
            },
            {
                $Type: 'UI.DataField',
                Value: user_name,
                Label: 'USER NAME',
            },
            {
                $Type: 'UI.DataField',
                Value: email_id,
                Label: 'EMAIL ID',
            },
            {
                $Type : 'UI.DataField',
                Value : vendor_code,
                Label : 'VENDER ID',
                ![@UI.Hidden] : {$edmJson: {$Ne: [{$Path: 'user_role'},'Supplier']}}
            },
        ],
    }
);

annotate service.User_role with {
    user_role @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: '_searchh',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: user_role,
                ValueListProperty: 'user_type',
            }, ],
            Label         : 'roless',
        },
        Common.ValueListWithFixedValues: true
    )
};

annotate service.User_role with @(UI.CreateHidden: true);
annotate service.User_role with @(
    UI.HeaderInfo : {
        TypeName : 'Assign Role',
        TypeNamePlural : 'Assign Role',
        Title : {
            $Type : 'UI.DataField',
            Value : id,
        },
    }
);
annotate service.User_role with {
    vendor_code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : '_searchh1',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : vendor_code,
                    ValueListProperty : 'supplier_code',
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'supplier_description',
                    LocalDataProperty : vendor_name,
                },
            ],
            Label : 'VENDOR',
        },
        Common.ValueListWithFixedValues : true
)};
// annotate service.User_role with @(UI.DeleteHidden: true);