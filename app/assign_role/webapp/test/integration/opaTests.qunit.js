sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'assignrole/test/integration/FirstJourney',
		'assignrole/test/integration/pages/User_roleList',
		'assignrole/test/integration/pages/User_roleObjectPage'
    ],
    function(JourneyRunner, opaJourney, User_roleList, User_roleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('assignrole') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUser_roleList: User_roleList,
					onTheUser_roleObjectPage: User_roleObjectPage
                }
            },
            opaJourney.run
        );
    }
);