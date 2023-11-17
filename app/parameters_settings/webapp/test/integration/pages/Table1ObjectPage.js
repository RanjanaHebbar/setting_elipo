sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'parameterssettings',
            componentId: 'Table1ObjectPage',
            contextPath: '/Table1'
        },
        CustomPageDefinitions
    );
});