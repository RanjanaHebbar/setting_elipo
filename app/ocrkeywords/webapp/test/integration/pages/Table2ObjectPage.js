sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ocrkeywords',
            componentId: 'Table2ObjectPage',
            contextPath: '/Table2'
        },
        CustomPageDefinitions
    );
});