sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ocrkeywords/test/integration/FirstJourney',
		'ocrkeywords/test/integration/pages/Table2List',
		'ocrkeywords/test/integration/pages/Table2ObjectPage',
		'ocrkeywords/test/integration/pages/TablechildObjectPage'
    ],
    function(JourneyRunner, opaJourney, Table2List, Table2ObjectPage, TablechildObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ocrkeywords') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTable2List: Table2List,
					onTheTable2ObjectPage: Table2ObjectPage,
					onTheTablechildObjectPage: TablechildObjectPage
                }
            },
            opaJourney.run
        );
    }
);