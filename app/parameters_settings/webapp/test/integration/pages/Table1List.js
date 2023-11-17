sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'parameterssettings',
            componentId: 'Table1List',
            contextPath: '/Table1'
        },
        CustomPageDefinitions
    );
});