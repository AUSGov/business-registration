---
title: Application summary
layout: default
---

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
    <p>You have <strong><span id="application-count">17</span> application(s)</strong>.</p>
    <div class="card clearfix">
<form action="/registration/dashboard/search" id="search-form" method="post" novalidate="novalidate"><input name="__RequestVerificationToken" type="hidden" value="va0P2GyMiUW0Gz8ewhc9aifvtRXddb0kkIHVrLTexMtf_2n6yZa1LtPlOqFkbWVZvvvTOFABYJRe8lb9qFzWXSRVOI-nAtHJXzcN5j43cqZHAaxA_62MKcfOgXfseS6Fp6TEoeJ1_HtfPKFKLctAqA2">            <fieldset id="filterContainer" class="no-margin">
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
<option value="0">Show all</option>
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
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_10" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="BTFN">
                                                <label for="RegistrationTypes_10" id="type-btfn">Business TFN</label>
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

    <div id="applicationResults"><div class="dashboard-container" id="99">
    <table>
        <caption>
            Application reference: <strong>#1701-AA-0099-L</strong><br>
            <span id="app-status" class="app-status">Payment in progress since 11 Jan 2017 09:39</span>
            <span class="controls" style="display: none;">
                <a href="javascript:void(0);" class="edit" style="display: none;">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
            </span>
			<span id="app-update" style="display: none; float:right; margin-top: -8px; font-weight: bold">
				<span style="color: red; vertical-align: text-top">*</span> Status changed: <button class="btn btn-large refresh" type="button" onclick="refresh()">Refresh</button>
			</span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Information</th>
        </tr>
        </thead>
        <tbody id="body99"><tr class="rego">
    <td class="waiting"><span class="visuallyhidden">Payment in progress-</span>Payment in progress</td>
    <td class="status-waiting"></td>
    <td class="">
        <a class="more" href="#"></a>
        
    </td>
    <td class=""><span class="">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="waiting"><span class="visuallyhidden">Payment in progress-</span>ABN</td>
    <td class="status-waiting"></td>
    <td class="">Not submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="waiting"><span class="visuallyhidden">Payment in progress-</span>Business name</td>
    <td class="status-waiting">FRANK</td>
    <td class="">Payment in progress</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div><div class="dashboard-container" id="94">
    <table>
        <caption>
            Application reference: <strong>#1701-AA-0094-L</strong><br>
            <span class="app-status">
                <button class="btn btn-small refresh" type="button" style="display: none;">Refresh</button>
            Not submitted</span>
            <span class="controls">
                <a href="javascript:void(0);" class="edit">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
            </span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Information</th>
        </tr>
        </thead>
        <tbody><tr class="rego">
    <td class="editing"><span class="visuallyhidden">Not submitted-</span>ABN</td>
    <td class="status-waiting"></td>
    <td class="">Not submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="editing"><span class="visuallyhidden">Not submitted-</span>Business name</td>
    <td class="status-waiting"></td>
    <td class="">Not submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div><div class="dashboard-container" id="92">
    <table>
        <caption>
            Application reference: <strong>#1701-AA-0092-L</strong><br>
            <span class="app-status">
                <button class="btn btn-small refresh" type="button" style="display: none;">Refresh</button>
            Not submitted</span>
            <span class="controls">
                <a href="javascript:void(0);" class="edit">Resume</a>
                &nbsp;
                <a href="javascript:void(0);" class="remove" style="display: none;">Delete</a>
            </span>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Information</th>
        </tr>
        </thead>
        <tbody><tr class="rego">
    <td class="editing"><span class="visuallyhidden">Not submitted-</span>ABN</td>
    <td class="status-waiting"></td>
    <td class="">Not submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="editing"><span class="visuallyhidden">Not submitted-</span>Business name</td>
    <td class="status-waiting"></td>
    <td class="">Not submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div></div>

    <div id="pager" class="card" style="">
        <div class="grid-row">
            <p>
                You have <span>14</span> more application(s)
                <button id="btnShowMore" type="button" class="btn btn-inline" style="margin-left: 10px">Show more...</button>
            </p>
        </div>
    </div>
</div>
<script src="scripts/jquery.blockUI.js"></script>
<script>
	$(document).ready(function() {
		window.setTimeout(function() {
			$("#app-update").fadeIn("fast");
		}, 5000);
	});
	
	var count = 0;
	function refresh() {
		switch(++count) {
			case 1:
				$("#99").block({
					message: "Updating...",
					overlayCSS: {
                        backgroundColor: '#bbb',
                        borderRadius: '10px'
                    }
				});
				window.setTimeout(function() {
					$("#body99").html('<tr><td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>' +
						'<td>Receipt number 176920075</td><td><a href="">Payment details</a></td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr class="rego"><td class="waiting"><span class="visuallyhidden">In progress-</span>ABN</td><td class="status-waiting"></td>' +
						'<td class="">In progress</td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr><td class="waiting"><span class="visuallyhidden">Not submitted - </span>Business name</td><td>FRANK</td>' +
						'<td>Not submitted</td><td class=""><span class="">&nbsp;</span></td></tr>');
					$("#app-status").html("ABN in progress since 11 Jan 09:41");
					$("#99").unblock();
					$("#app-update").fadeOut("fast");
					window.setTimeout(function() {
						$("#app-update").fadeIn("fast");
					}, 10000);
				}, 2000);
				break;
			
			case 2:
				$("#99").block({
					message: "Updating...",
					overlayCSS: {
                        backgroundColor: '#bbb',
                        borderRadius: '10px'
                    }
				});
				window.setTimeout(function() {
					$("#body99").html('<tr><td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>' +
						'<td>Receipt number 176920075</td><td><a href="">Payment details</a></td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr class="rego"><td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>' +
						'<td><span class="abn">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn">Copy</button></td><td class=""><a href="#">Registered</a></td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr><td class="waiting"><span class="visuallyhidden">In progress - </span>Business name</td><td>FRANK</td>' +
						'<td>In progress</td><td class=""><span class="">&nbsp;</span></td></tr>');
					$("#app-status").html("Business name in progress since 11 Jan 09:46");
					$("#99").unblock();
					$("#app-update").fadeOut("fast");
					window.setTimeout(function() {
						$("#app-update").fadeIn("fast");
					}, 10000);
				}, 2000);
				break;
			
			case 3:
				$("#99").block({
					message: "Updating...",
					overlayCSS: {
                        backgroundColor: '#bbb',
                        borderRadius: '10px'
                    }
				});
				window.setTimeout(function() {
					$("#body99").html('<tr><td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>' +
						'<td>Receipt number 176920075</td><td><a href="">Payment details</a></td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr class="rego"><td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>' +
						'<td><span class="abn">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn">Copy</button></td><td class=""><a href="#">Registered</a></td><td class=""><span class="">&nbsp;</span></td></tr>' +
						'<tr><td class="registered"><span class="visuallyhidden">Success - </span>Business name</td><td>FRANK</td>' +
						'<td><a href="#">Download certificate (PDF)</a></td><td class=""><span class="">&nbsp;</span></td></tr>');
					$("#app-status").html("Application complete 11 Jan 09:53");
					$("#99").unblock();
					$("#app-update").fadeOut("fast");
				}, 2000);
				break;
		}
	}
</script>

