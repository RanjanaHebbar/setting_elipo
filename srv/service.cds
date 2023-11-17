using setting from '../db/schema';

service settingService
{
    @odata.draft.enabled
    entity Table1 as
        projection on setting.Table1 actions{ 
    
        } ;


    entity _search as
        projection on setting.do_you_want_tab;

    entity _1search as
        projection on setting.country_tab;

    entity _2search as
        projection on setting.ocr_tab;

    entity _3search as
        projection on setting.postprocessor_tab;

    entity _4search as
        projection on setting.days_tab;

    entity _5search as
        projection on setting.duration_tab;

    entity _6search as
        projection on setting.duration1_tab;

    entity _7search as
        projection on setting.sync_duration_tab;

    entity _8search as
        projection on setting.sync_duration1_tab;

    @odata.draft.enabled
    entity Table2 as
        projection on setting.Table2;

    entity Tablechild as
        projection on setting.Tablechild;

    @odata.draft.enabled
    entity User_role as
        projection on setting.Roles;

    entity _searchh as
        projection on setting.search_help;

    entity _searchh1 as
        projection on setting.search_help1;

}
