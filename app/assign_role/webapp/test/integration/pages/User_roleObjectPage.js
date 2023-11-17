sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'assignrole',
            componentId: 'User_roleObjectPage',
            contextPath: '/User_role'
        },
        CustomPageDefinitions
    );
});