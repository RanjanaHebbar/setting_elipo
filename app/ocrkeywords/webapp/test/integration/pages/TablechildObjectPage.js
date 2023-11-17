sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ocrkeywords',
            componentId: 'TablechildObjectPage',
            contextPath: '/Table2/relation'
        },
        CustomPageDefinitions
    );
});