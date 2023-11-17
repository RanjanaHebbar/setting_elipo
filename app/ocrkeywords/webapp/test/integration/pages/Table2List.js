sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ocrkeywords',
            componentId: 'Table2List',
            contextPath: '/Table2'
        },
        CustomPageDefinitions
    );
});