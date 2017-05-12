---
title: Application summary
layout: default
---
<main class="wrapper">
    

<style>
    a.dismiss span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    p:hover a.dismiss span, a.dismiss:focus span {
        background: url(/Content/img/ico-close.png);
        background-size: cover;
    }

    a.dismiss:hover, a.dismiss:focus {
        background-color: transparent;
    }

    .inline p {
        margin: 0;
    }

    .inline {
        display: inline-block;
        margin-right: 20px;
    }	

	tr.extra {
		background-color: #eee;
		display: none;
	}
	
	tr.extra td {
		background-color: transparent;
	}
	
	.dashboard-container caption .app-status {
		font-size: 80%;
		margin-top: .5em;
		width: 80%;
	}
</style>


<h1 id="heading" tabindex="-1">Application summary</h1>
<div class="grid-row clearfix">
<div class="col11">
    <p class="intro"></p><p>Thank you for submitting your application. You can now track the progress of each of your registrations below. </p>
<p>Need help starting your business? See the business.gov.au <a href="https://www.business.gov.au/Info/Plan-and-Start/Templates-and-tools/Checklists/Starting-your-business-checklist" target="_blank">Starting your business checklist <span class="visuallyhidden">(opens in new window)</span></a>, download a <a href="https://www.business.gov.au/info/plan-and-start/templates-and-tools/business-plan-template-and-guide" target="_blank">business plan template <span class="visuallyhidden">(opens in new window)</span></a> or find the <a href="https://www.business.gov.au/info/plan-and-start/start-your-business/business-and-company-registration/registration-and-licences" target="_blank"> licences and permits <span class="visuallyhidden">(opens in new window)</span></a> you need to run your business. </p><p></p>
    </div>
<div class="col1 last">
    <a class="cd-btn help" href="#help-dashboarddescription"><span>Help - Application summary</span></a>
</div>
</div>

<div id="dashboard-page">
    <p>You have <strong><span id="application-count">15</span> application(s)</strong>.</p>
    <div class="card clearfix">
		<form action="/registration/dashboard/search" id="search-form" method="post" novalidate="novalidate"><input name="__RequestVerificationToken" type="hidden" value="mA_am-4qK4c6czA9j5dY8TrILKMUAqjf3qILAugkNBM6eaYyAu-7ApmFUKe3A8Qzr4MjDE6z5A2yEdX9bxlHCQepOwIgN89FZuGeetvefIj374QZaliBoD8XfbZz3GSYY1FODjXdwitL2EGWHUOhdA2">            <fieldset id="filterContainer" class="no-margin">
                <div class="filter-container">
                        <div class="grid-row">
                            <div class="col4">
                                <label for="search-term" class="input-right">Search for</label>
                            </div>
                            <div class="col8 last">
                                <input id="SearchOptions_SearchString" name="SearchOptions.SearchString" placeholder="Reference, ABN/ACN, Company/Business name" type="text" value="">
                                <button id="find-btn" type="submit" class="btn btn-default btn-inline" name="submitAction" value="stringSearch">Find applications</button><br>
                                <a href="javascript:void(0)" id="show-adv">Show advanced options</a>
                            </div>
                        </div>
                    <div id="advanced-search" style="display: none;">
                            <div class="grid-row">
                                <div class="col4">
                                    <label for="SearchOptions_DateFrom" class="input-right">Date from <span class="field-note">(DD/MM/YYYY)</span></label>
                                </div>
                                <div class="col8 last">
                                    <input class="search-date hasDatepicker" data-val="true" data-val-date="The field DateFrom must be a date." id="SearchOptions_DateFrom" name="SearchOptions.DateFrom" style="width: 6em" type="text" value="">
                                    &nbsp;&nbsp;
                                    <label for="SearchOptions_DateTo" class="input-right label-inline">Date to <span class="field-note">(DD/MM/YYYY)</span></label>
                                    <input class="search-date hasDatepicker" data-val="true" data-val-date="The field DateTo must be a date." id="SearchOptions_DateTo" name="SearchOptions.DateTo" style="width: 6em" type="text" value="">
                                </div>
                            </div>
                            <div class="grid-row">
                                <div class="col4">
                                    <label for="field5" class="input-right">Status of application</label>
                                </div>
                                <div class="col8 last">
                                    <select id="SearchOptions_SelectedApplicationStatus" name="SearchOptions.SelectedApplicationStatus"><option value="">Please select...</option>
<option value="0">None</option>
<option value="1">Payment In Progress</option>
<option value="2">Payment Declined</option>
<option value="3">Payment Successful</option>
<option value="4">Application Not Submitted</option>
<option value="5">Application Submitted</option>
<option value="6">Application Pending</option>
<option value="7">Application Rejected</option>
<option value="8">Application Successful</option>
<option value="9">Application Refused</option>
</select><br>
                                </div>
                            </div>
                            <div class="grid-row clearfix">
                                <div class="col4">
                                    <p class="label input-right">Registration types</p>
                                </div>

                                <div class="col8 last">

                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_0" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="ABN">
                                                <label for="RegistrationTypes_0" id="type-abn">ABN</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_1" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="BN">
                                                <label for="RegistrationTypes_1" id="type-bn">Business name</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_2" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="GST">
                                                <label for="RegistrationTypes_2" id="type-gst">GST</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_3" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="Company">
                                                <label for="RegistrationTypes_3" id="type-company">Company</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_4" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="PAYG">
                                                <label for="RegistrationTypes_4" id="type-payg">PAYG</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_5" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="FBT">
                                                <label for="RegistrationTypes_5" id="type-fbt">FBT</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_6" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="LCT">
                                                <label for="RegistrationTypes_6" id="type-lct">LCT</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_7" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="FTC">
                                                <label for="RegistrationTypes_7" id="type-ftc">FTC</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_8" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="WET">
                                                <label for="RegistrationTypes_8" id="type-wet">WET</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_9" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="AKEY">
                                                <label for="RegistrationTypes_9" id="type-akey">AUSKey</label>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        <div>
                            <p class="margin4">
                                <button type="submit" class="btn btn-default btn-inline" id="btnSearch" name="submitAction" value="advancedSearch">Find applications</button>
                            </p>
                        </div>
                    </div>
                </div><!-- filterContainer -->
            </fieldset>
</form>    </div>

    <div id="applicationResults">
	<div class="dashboard-container" id="299">
    <table>
        <caption>Application reference: <strong>#1702-AA-0299-L</strong><br>
			<div class="app-status"><p>Submitted on 09 May 2017 14:32</p></div>
            <span class="controls">
                <a href="javascript:void(0);" class="edit" style="display: none;">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
                &nbsp;
                <a href="javascript:void(0);" class="refresh"><span class="fa fa-refresh"></span>Status update</a>
            </span>
        </caption>
        <thead>
			<tr>
				<th class="status-item">Registration item</th>
				<th class="status-detail">Detail</th>
				<th class="status-information" colspan="2">Status</th>
			</tr>
        </thead>
        <tbody>
			<tr class="rego">
				<td class="waiting"><span class="visuallyhidden">Pending-</span>AUSkey</td>
				<td class="status-waiting">ABN: 123456789</td>
				<td class=""><a href="javascript:void(0)">Pending</a></td>
				<td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
			</tr>
		</tbody>
	</table>
</div>
<div class="dashboard-container" id="298">
    <table>
        <caption>
            Application reference: <strong>#1702-AA-0298-L</strong><br>
            <div class="app-status"><p>Completed on 05 May 2017 11:23</p></div>
            <span class="controls">
                <a href="javascript:void(0);" class="edit" style="display: none;">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
                &nbsp;
                <a href="javascript:void(0);" class="refresh" style="display: none;"><span class="fa fa-refresh"></span>Status update</a>
            </span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Status</th>
        </tr>
        </thead>
        <tbody><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Payment received</td>
    <td class="status-waiting">Receipt number 12345</td>
    <td class="">
        <a href="javascript:void(0)">Payment details</a>
        
    </td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr>
<tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Company</td>
    <td class="status-waiting">FRED PTY LTD</td>
    <td class=""><a href="javascript:void(0)">Registered</a></td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr>
<tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>ABN</td>
    <td class="status-waiting">Here is your ABN: 123456789 <button class="btn btn-copy" type="button">Copy</button></td>
    <td class=""><a href="javascript:void(0)">Successful</a></td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Business name</td>
    <td class="status-waiting">FAROUD</td>
    <td class=""><a href="javascript:void(0)">Registered</a></td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div><div class="dashboard-container" id="297">
    <table>
        <caption>
            Application reference: <strong>#1702-AA-0297-L</strong><br>
            <div class="app-status"><p>Completed on 02 May 2017 16:46</p></div>
            <span class="controls">
                <a href="javascript:void(0);" class="edit" style="display: none;">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
                &nbsp;
                <a href="javascript:void(0);" class="refresh" style="display: none;"><span class="fa fa-refresh"></span>Status update</a>
            </span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Status</th>
        </tr>
        </thead>
        <tbody>
		<tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Payment received</td>
    <td class="status-waiting">Receipt number 12345</td>
    <td class="">
        <a href="javascript:void(0)">Payment details</a>
        
    </td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr>
<tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>ABN</td>
    <td class="status-waiting">Here is your ABN: 987654321 <button class="btn btn-copy" type="button">Copy</button></td>
    <td class=""><a href="javascript:void(0)">Successful</a></td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Business name</td>
    <td class="status-waiting">BOOGIE</td>
    <td class=""><a href="javascript:void(0)">Registered</a></td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div></div>

    <div id="pager" class="card" style="">
        <div class="grid-row">
            <p>
                You have <span>12</span> more application(s)
                <button id="btnShowMore" type="button" class="btn btn-inline" style="margin-left: 10px">Show more...</button>
            </p>
        </div>
    </div>
</div>


<script type="text/html" id="application-template">
    <div class="dashboard-container" id="">
    <table>
        <caption>
            Application reference: <strong>#</strong><br />
            
            
            <span class="controls">
                <a href="javascript:void(0);" class="edit">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove">Delete</a>
                &nbsp;
                <a href="javascript:void(0);" class="refresh"><span class="fa fa-refresh"></span>Status update</a>
            </span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Status</th>
        </tr>
        </thead>
        <tbody></tbody>
    </table>
    <div class="referrer">
    </div>
</div>

</script>
<script type="text/html" id="application-payment-template">
    <tr class="rego">
    <td class=""><span class="visuallyhidden"></span></td>
    <td/>
    <td>
        <a class="more" href="#"></a>
        <a class="retry" href="javascript:void(0);"></a>
    </td>
    <td><span class="">&nbsp;</span></td>
</tr>
</script>
<script type="text/html" id="application-registration-template">
    <tr class="rego">
    <td class="no-border-bottom"><span class="visuallyhidden"></span></td>
    <td class="no-border-bottom status-waiting">
        <span class="abn2"></span> 
        <button class="btn btn-copy">Copy</button>
    </td>
    <td class="no-border-bottom">
        <span>
            <a class="more" href="#"></a>
        </span>
    </td>
    <td class="no-border-bottom"><span class="">&nbsp;</span></td>
</tr>
</script>
<script type="text/html" id="application-extra-template">
    <tr style="display: table-row;" class="extra">
    <td>&nbsp;</td>
    <td colspan="3">
        <p>
            <a href="#" target="_blank"> Download certificate (PDF)</a>
            <span id="ExtraContent" style="display: inline-block"></span>
        </p>
    </td>
</tr>

</script>

</main>

<script src="{{ site.baseurl }}/scripts/jquery.collapse.js"></script>
<script src="{{ site.baseurl }}/scripts/clipboard.min.js"></script>

<script>
	var clipboard = new Clipboard('.btn-copy');

	clipboard.on('success', function (e) {
		console.log(e);
	});

	clipboard.on('error', function (e) {
		console.log(e);
	});
	
	/* Drop down settings menu */
	$("nav").accessibleMegaMenu({
		/* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby */
		uuidPrefix: "accessible-megamenu",
		/* css class used to define the megamenu styling */
		menuClass: "nav-menu",
		/* css class for a top-level navigation item in the megamenu */
		topNavItemClass: "nav-item",
		/* css class for a megamenu panel */
		panelClass: "sub-nav",
		/* css class for a group of items within a megamenu panel */
		panelGroupClass: "sub-nav-group",
		/* css class for the hover state */
		hoverClass: "hover",
		/* css class for the focus state */
		focusClass: "focus",
		/* css class for the open state */
		openClass: "open"
	});
</script>
