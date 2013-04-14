var docCookies = document.cookie.split(';');
var origRefer = null;
for(var i=0;i < docCookies.length;i++) {
	var c = docCookies[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf("original_referrer=") == 0) {
		origRefer = c.substring("original_referrer=".length,c.length);
	}
}
if(origRefer == null){
	document.cookie = "original_referrer=" + document.referrer + "; path=/";
}

var pageAdsParams = {"site_prefix":"newyorker","position_list":"AMS_NYR_CONTENTPAGE_TEXTOFFER,AMS_NYR_POPUP_FLOATINGAD,AMS_NYR_GLOBAL_NAVBAR_ROLLOVER,AMS_NYR_GLOBAL_RIGHTRAIL_A,AMS_NYR_GLOBAL_EMBEDDEDFORM,AMS_NYR_GLOBAL_RIGHTRAIL_C,AMS_NYR_GLOBAL_RIGHTRAIL_B,AMS_NYR_GLOBAL_HEADER,AMS_NYR_GLOBAL_NAVBAR,AMS_NYR_GLOBAL_HEADERCALLOUT","subdomain":"www","url_name":"120924crat_atlarge_gladwell","ajax":1,"keywords":"JerrySandusky,ChildMolesters,Pedophiles,Pedophilia,&#8220;Paterno&#8221;,JoePosnanski,JoePaterno,PennStateUniversity,ChildAbuse,&#8220;IdentifyingChildMolesters&#8221;,CarlavanDam,FootballCoaches,Teachers,Children,Students,E.J.Sandusky,&#8220;Touched&#8221;,SecondMile,DonaldSilva,JackMcCallum,BillLyon,Philadelphia<i>Inquirer</i>,(Pres.)GeorgeW.Bush,Wrestling,LouisFreeh,RonaldSchreffler,Showers,AlyciaChambers,JohnSeasock,NBCNews,GarySchultz,GrahamSpanier,TimCurley,JomO&#8217;Hara,MikeMcQueary,Envelopes,JohnSurma,U.S.Steel","browser_path":"/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell","ad_category_prefix":"arts","cat_prefixes":",arts,critics,atlarge,2012,09,24,120924crat_atlarge_gladwell"};
var pageAds = {"":null,"AMS_NYR_GLOBAL_RIGHTRAIL_C":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2832&campaign_id=13268&creative_id=16592&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+1800000;var by_sync = 0;var init_time = 1365834688395;\nexp.setTime(exp_time);var value = 13268 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2832_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script>\r\n<img src=\"https://subscribe.newyorker.com/circulation/shared/ads/coverprint_right_rail_tny.jpg\">\r\n</a>","AMS_NYR_GLOBAL_NAVBAR_ROLLOVER":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947218;\nexp.setTime(exp_time);var value = 12942 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2689_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><img src=\"//subscribe.newyorker.com/circulation/shared/ads/NYR_OW_CONTROL_navBarRollover_v3.jpg\"width=\"300\" height=\"135\" border=\"0\" usemap=\"#MapNYRRoll\" />\r\n\r\n<map name=\"MapNYRRoll\">\r\n\r\n<area shape=\"rect\" coords=\"0,1,298,108\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2689&campaign_id=12942&creative_id=16265&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\" target=\"_blank\" />\r\n\r\n<area shape=\"rect\" coords=\"1,112,82,137\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2689&campaign_id=12942&creative_id=16265&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=1\" target=\"_blank\" />\r\n\r\n<area shape=\"rect\" coords=\"85,114,208,133\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2689&campaign_id=12942&creative_id=16265&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=2\" target=\"_blank\" />\r\n\r\n<area shape=\"rect\" coords=\"212,113,298,134\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2689&campaign_id=12942&creative_id=16265&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell target=\"_blank\" />\r\n","AMS_NYR_GLOBAL_RIGHTRAIL_A":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2693&campaign_id=12946&creative_id=16269&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947223;\nexp.setTime(exp_time);var value = 12946 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2693_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><img src=\"//subscribe.newyorker.com/circulation/shared/ads/NYR_OW_CONTROL_RRA_v2.jpg\">\r\n</a>","AMS_NYR_GLOBAL_HEADER":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947221;\nexp.setTime(exp_time);var value = 12943 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2690_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><h3 id=\"hdrsubs\"><a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\" target=\"_blank\" rel=\"nofollow\" title=\"Subscribe to The New Yorker\">Subscribe to The New Yorker</a></h3>\r\n\r\n<img src=\"https://subscribe.newyorker.com/circulation/shared/ads/NYR_global_header.gif\" width=\"110\" height=\"90\" border=\"0\" usemap=\"#global-header-map-update\"/>\r\n<map name=\"global-header-map-update\" id=\"global-header-map\">\r\n<area shape=\"rect\" coords=\"0,1,109,15\" alt=\"Subscribe Now\" target=\"_blank\" rel=\"nofollow\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"/>\r\n<area shape=\"rect\" coords=\"0,16,109,30\" alt=\"Renew your Subscription to The New Yorker magazine\" rel=\"nofollow\" target=\"_blank\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=1\"/>\r\n<area shape=\"rect\" coords=\"0,31,109,45\" alt=\"Give a Subscription to The New Yorker as a Gift\" rel=\"nofollow\" target=\"_blank\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=2\"/>\r\n<area shape=\"rect\" coords=\"0,46,109,71\" alt=\"Subscribe to The New Yorker outside the USA\" rel=\"nofollow\" target=\"_blank\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=3\"/>\r\n<area shape=\"rect\" coords=\"0,72,109,86\" alt=\"The New Yorker Digital Edition\" target=\"_blank\" rel=\"nofollow\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=12943&creative_id=16266&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell&target_url_index=4\" />\r\n</map>","AMS_NYR_GLOBAL_RIGHTRAIL_B":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2694&campaign_id=6563&creative_id=9968&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+1800000;var by_sync = 0;var init_time = 1365834688395;\nexp.setTime(exp_time);var value = 9968 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"c_6563_cr=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><img src=\"https://subscribe.newyorker.com/circulation/shared/ads/TabletOLD.300x75_v3.jpg\">\r\n</a>","AMS_NYR_GLOBAL_HEADERCALLOUT":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=12944&creative_id=16267&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947220;\nexp.setTime(exp_time);var value = 12944 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2691_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><img src=\"//subscribe.newyorker.com/circulation/shared/ads/NYR_HeaderCallout_Unit_100x91_V1.gif\">\r\n</a>","AMS_NYR_CONTENTPAGE_TEXTOFFER":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2695&campaign_id=12844&creative_id=16180&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"  target=\"_blank\" ><span class=\"articlesText\"><strong>Subscribe now</strong> to get more of <em>The New Yorker's</em> signature mix of politics, culture, and the arts.\r\n</span></a>","AMS_NYR_POPUP_FLOATINGAD":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2697&campaign_id=12948&creative_id=16271&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947215;\nexp.setTime(exp_time);var value = 12948 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2697_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><img src=\"//subscribe.condenastdigital.com/circulation/shared/ads/NYR_OW_CONTROL_FLOATINGAD_v3-1.jpeg\">\r\n</a>","AMS_NYR_GLOBAL_EMBEDDEDFORM":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947227;\nexp.setTime(exp_time);var value = 12941 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2722_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script>\r\n<script language=\"javascript\" src=\"http://subscribe.newyorker.com/circulation/shared/scripts/validate-functions.js\" /></script>\r\n<script language=\"javascript\" src=\"http://subscribe.newyorker.com/circulation/shared/scripts/validate-generic-conde.js\" /></script>\r\n<div class=\"autosubs\" style=\"margin:auto; padding:2px; clear:both;\">\r\n<form method=\"post\" target=\"_blank\" action=\"https://subscribe.newyorker.com/subscribe/processSubscription\"\r\nonsubmit=\"return validateFrm(this);\" class=\"frm_regsub\" name=\"frm_regsub\" id=\"frm_regsub\" style=\"position:relative; margin:0px;padding:7px;\">\r\n<input type=\"hidden\" name=\"offer_id\" value=\"78536\" />\r\n<input type=\"hidden\" name=\"host_offer_id\" value=\"78536\" />\r\n<input type=\"hidden\" name=\"source_code\" value=\"\" />\r\n<input type=\"hidden\" name=\"parent_trans_id\" value=\"\" />\r\n<input type=\"hidden\" name=\"trans_id\" value=\"\" />\r\n<input type=\"hidden\" name=\"trans_key\" value=\"\" />\r\n            \t\r\n                <input type=\"hidden\" name=\"offer_term\" value=\"106484_0\"/>\r\n                \r\n                \r\n\r\n\r\n\r\n<input type=\"hidden\" name=\"country_code\" value=\"US\" />\r\n<input type=\"hidden\" name=\"pt_id\" value=\"6\" />\r\n<input type=\"hidden\" name=\"general_optin\" value=\"Y\" />\r\n<input type=\"hidden\" name=\"pos_name\" value=\"AMS_NYR_GLOBAL_EMBEDDEDFORM\">\r\n<input type=\"hidden\" name=\"segment_name\" value=\"\"> \r\n<input type=\"hidden\" name=\"referral_source\" value=\"\" />\r\n\r\n<input type=\"hidden\" name=\"premium_id\" value=\"52\">\r\n\r\n\r\n<div style=\"position:relative; width:100%;\">\r\n<div style=\"background: #dedede; width:80px; height:108px;\">\r\n\r\n<img style=\"position:relative; top:0px; left:-3px; width:80px; height:108px;\" src=\"http://subscribe.condenet.com/images_covers/cover_newyorker_80.jpg\" />\r\n</div>\r\n<img src=\"http://subscribe.condenastdigital.com/circulation/newyorker/images/NYR_Embed_198x108_v1.jpeg\" style=\"position:absolute; right:0px; top:0px; width:198px; height:108px;\">\r\n</div>\r\n<div class=\"frm_offer\" style=\"position:relative;padding-left:65px;\">\r\n<b style=\"color:#000\"><b style=\"color: rgb(0, 0, 0);\"><b style=\"color: rgb(0, 0, 0);\"><b style=\"color: rgb(0, 0, 0);\"><b style=\"color: rgb(0, 0, 0);\"><b style=\"color: rgb(0, 0, 0);\"><b>47 issues of The New Yorker for just $69.99*</b></b></b></b></b></b> \r\n<br></b><br>\r\n<span>*Plus applicable sales tax. </span>\r\n</div>\r\n<div id=\"frm_error_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;text-align:center;\"></div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>First Name</label>\r\n</h4>\r\n<fieldset style=\"border:0; padding:0; margin:0\">\r\n<input name=\"first_name\" value=\"\" title=\"First Name\" class=\"required txt_name\" style=\"float:right;margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p id=\"firstName_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>Last Name</label>\r\n</h4>\r\n<fieldset style=\"border:0; padding:0; margin:0\" class=\"mod-billing\">\r\n<input name=\"last_name\" value=\"\" title=\"Last Name\" class=\"row addressRow rqrd lastname\" style=\"float:right;margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p class=\"errmsg\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>Address 1</label>\r\n</h4>\r\n<fieldset style=\"border:0;padding:0; margin:0\">\r\n<input name=\"address\" value=\"\" title=\"Address\" class=\"required txt_address1\" style=\"float:right;margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p id=\"address1_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>Address 2</label>\r\n</h4>\r\n<fieldset style=\"border:0;padding:0; margin:0\">\r\n<input name=\"address2\" value=\"\" title=\"Address Line 2\" class=\"txt_address2\" style=\"float:right; margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p id=\"address2_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>City</label>\r\n</h4>\r\n<fieldset style=\"border:0;padding:0; margin:0\">\r\n<input name=\"city\" value=\"\" title=\"City\" class=\"required txt_city\" style=\"float:right;margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p id=\"city_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>State</label>\r\n</h4>\r\n<fieldset style=\"border:0;padding:0; margin:0;position:relative;\">\r\n<select name=\"state\" title=\"State\" class=\"required sel_state\" style=\"position:absolute; right:66px; top:0px;height:21px; padding:0;width:142px;\">\r\n\t<option value=\"\" >choose</option>\r\n\t<option value=\"\">-----------</option>\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AL\">Alabama</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AK\">Alaska</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AZ\">Arizona</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AR\">Arkansas</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"CA\">California</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"CO\">Colorado</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"CT\">Connecticut</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"DE\">Delaware</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"DC\">Dist. of Columbia</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"FL\">Florida</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"GA\">Georgia</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"HI\">Hawaii</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"ID\">Idaho</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"IL\">Illinois</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"IN\">Indiana</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"IA\">Iowa</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"KS\">Kansas</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"KY\">Kentucky</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"LA\">Louisiana</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"ME\">Maine</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MD\">Maryland</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MA\">Massachusetts</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MI\">Michigan</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MN\">Minnesota</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MS\">Mississippi</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MO\">Missouri</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"MT\">Montana</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NE\">Nebraska</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NV\">Nevada</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NH\">New Hampshire</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NJ\">New Jersey</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NM\">New Mexico</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NY\">New York</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"NC\">North Carolina</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"ND\">North Dakota</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"OH\">Ohio</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"OK\">Oklahoma</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"OR\">Oregon</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"PA\">Pennsylvania</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"RI\">Rhode Island</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"SC\">South Carolina</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"SD\">South Dakota</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"TN\">Tennessee</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"TX\">Texas</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"UT\">Utah</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"VT\">Vermont</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"VA\">Virginia</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"WA\">Washington</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"WV\">West Virginia</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"WI\">Wisconsin</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"WY\">Wyoming</option>\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AA\">APO/FPO AA</option>\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AE\">APO/FPO AE</option>\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<option value=\"AP\">APO/FPO AP</option>\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"AS\">American Samoa</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"GU\">Guam</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"MP\">Northern Mariana Isls</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"PW\">Palau</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"PR\">Puerto Rico</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t<option value=\"VI\">US Virgin Islands</option>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n</select>\r\n<input name=\"postal_code\" value=\"\" title=\"Zip Code\" class=\"required zipcode txt_postalCode\" style=\"float:right;margin:0 0 3px 0;width:41px;\">\r\n<label style=\"float:right;line-height:18px;margin:0 4px 3px 0;font-size:11px\">Zip</label>\r\n</fieldset>\r\n<p id=\"state_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n<p id=\"zip_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\">\r\n<h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\">\r\n<label>E-mail</label>\r\n</h4>\r\n<fieldset style=\"border:0;padding:0; margin:0\">\r\n<input name=\"email\" value=\"\" title=\"Email Address\" class=\"required email txt_email\" style=\"float:right;margin-bottom:3px;width:208px;\">\r\n</fieldset>\r\n<p id=\"email_err_8\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p>\r\n</div>\r\n<div style=\"position:relative; height:48px; padding: 0 3px 10px 6px;\">\r\n<a href=\"http://www.condenast.com/services/privacy/#privacypolicy\" class=\"privacy\" target=\"_blank\" style=\"height:33px;line-height:3em;display:block;position:absolute;top:0;right:30px\" onclick=\"s_objectID=&quot;http://www.condenast.com/services/privacy/#privacypolicy_2&quot;;return this.s_oc?this.s_oc(e):true\">\r\nPrivacy Policy\r\n</a>\r\n<a href=\"https://subscribe.newyorker.com/subscribe/newyorker/78383\" class=\"nonusa\" target=\"_blank\" style=\"height:33px;line-height:3em;display:block\" onclick=\"s_objectID=&quot;https://subscribe.newyorker.com/subscribe/newyorker/78383&amp;&quot;;return this.s_oc?this.s_oc(e):true\">\r\nOrders Outside the USA\r\n</a>\r\n<input class=\"submit\" style=\"position:absolute; right:0px; bottom:0px\" type=\"submit\" name=\"submit\" value=\"Submit\" alt=\"Submit\">\r\n</div>\r\n</form>\r\n</div>\n\n","AMS_NYR_GLOBAL_NAVBAR":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = 1680004947221;\nexp.setTime(exp_time);var value = 12945 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2692_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script><a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2692&campaign_id=12945&creative_id=16268&site_id=796&top_level_section_prefix=arts&full_url=/arts/critics/atlarge/2012/09/24/120924crat_atlarge_gladwell\" target=\"_blank\">Subscribe</a>"};

