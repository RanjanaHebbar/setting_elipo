sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'assignrole',
            componentId: 'User_roleList',
            contextPath: '/User_role'
        },
        CustomPageDefinitions
    );
});