sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'parameterssettings/test/integration/FirstJourney',
		'parameterssettings/test/integration/pages/Table1List',
		'parameterssettings/test/integration/pages/Table1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Table1List, Table1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('parameterssettings') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTable1List: Table1List,
					onTheTable1ObjectPage: Table1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);