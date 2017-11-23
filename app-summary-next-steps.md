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
	.app-status p {
		font-size: 80%;
		margin-top: 0.5em;
	}
	
	.dashboard-container table tfoot tr td {
		background-color: #f7f7e7;
		border-bottom: none;
	}
</style>

<h1 id="heading" tabindex="-1">{{ page.title }} <a class="cd-btn help" href="#help-dashboarddescription"><span>Help - Application summary</span></a></h1>
<div class="grid-row clearfix">
    <p>Welcome to the application summary! Here you can:</p>
<ul><li><strong>resume</strong> unfinished applications</li>
<li><strong>track</strong> the status of applications</li>
<li><strong>search</strong> for specific applications.</li></ul>
<p>Need help starting your business? See the business.gov.au <a href="https://www.business.gov.au/Info/Plan-and-Start/Templates-and-tools/Checklists/Starting-your-business-checklist" target="_blank">Starting your business checklist <span class="visuallyhidden">(opens in new window)</span></a>, download a <a href="https://www.business.gov.au/info/plan-and-start/templates-and-tools/business-plan-template-and-guide" target="_blank">business plan template <span class="visuallyhidden">(opens in new window)</span></a> and find the <a href="https://www.business.gov.au/info/plan-and-start/start-your-business/business-and-company-registration/registration-and-licences" target="_blank"> licences and permits <span class="visuallyhidden">(opens in new window)</span></a> you need to run your business. </p>
</div>

<div id="dashboard-page">
    <p>You have <strong><span id="application-count">2</span> application(s)</strong>.</p>
    <div class="card clearfix">
<form action="/registration/dashboard/search" id="search-form" method="post">
	<input name="__RequestVerificationToken" type="hidden" value="Tqw1DaorP99AhmEbZj9EAuDpLKex3vyDEukVbOw-uuXoYDE22ECHPnyN9rF0eWpkt6qN8z7x5JSidyCRAgoDn3pVwVXoSks6uJbENk0ao6Sp3OFrQW4X6WiH9bP1GAIaeDv64gX2Obgip8iv3rmvyA2">            <fieldset id="filterContainer" class="no-margin">
                <div class="filter-container">
                        <div class="grid-row">
                            <div class="col4">
                                <label for="search-term" class="input-right">Search for</label>
                            </div>
                            <div class="col7">
                                <input id="SearchOptions_SearchString" name="SearchOptions.SearchString" placeholder="Reference, ABN/ACN, Company/Business name" style="max-width: 23em" type="text" value="">
                                <button id="find-btn" type="submit" class="btn btn-default btn-inline" name="submitAction" value="stringSearch">Find applications</button><br>
                                <a href="javascript:void(0)" id="show-adv">Show advanced options</a>
                            </div>
                            <div class="col1 last"><a class="cd-btn help" href="#help-dashboardsearchhelp"><span>Help - Search help</span></a></div>
                        </div>
                    <div id="advanced-search" style="display: none;">
                            <div class="grid-row">
                                <div class="col4">
                                    <label for="SearchOptions_DateFrom" class="input-right">Date created from<br><span class="field-note">(DD/MM/YYYY)</span></label>
                                </div>
                                <div class="col8 last">
                                    <input class="search-date hasDatepicker" id="SearchOptions_DateFrom" name="SearchOptions.DateFrom" type="text" value=""><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
                                    &nbsp;&nbsp;
                                    <label for="SearchOptions_DateTo" class="input-right label-inline">Date to <span class="field-note">(DD/MM/YYYY)</span></label>
                                    <input class="search-date hasDatepicker" id="SearchOptions_DateTo" name="SearchOptions.DateTo" type="text" value=""><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
                                </div>
                            </div>
                            <div class="grid-row">
                                <div class="col4">
                                    <label for="field5" class="input-right">Status of application</label>
                                </div>
                                <div class="col8 last">
                                    <select id="SearchOptions_SelectedApplicationStatus" name="SearchOptions.SelectedApplicationStatus"><option value="">Show all</option>
<option value="1">Not Submitted</option>
<option value="2">Payment In Progress</option>
<option value="3">Payment Declined</option>
<option value="4">Submitted</option>
<option value="5">Completed</option>
<option value="6">Review Required</option>
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

                                                <input id="RegistrationTypes_0" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="BN">
                                                <label for="RegistrationTypes_0" id="type-bn" style="width: 7.5em">Business name</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_1" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="Company">
                                                <label for="RegistrationTypes_1" id="type-company" style="width: 7.5em">Company</label>
                                            </p>
                                        </div>
                                                                        <br>
                                                                            <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_2" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="ABN">
                                                <label for="RegistrationTypes_2" id="type-abn" style="width: 3em">ABN</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_3" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="GST">
                                                <label for="RegistrationTypes_3" id="type-gst" style="width: 3em">GST</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_4" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="PAYG">
                                                <label for="RegistrationTypes_4" id="type-payg" style="width: 3em">PAYG</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_5" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="FBT">
                                                <label for="RegistrationTypes_5" id="type-fbt" style="width: 3em">FBT</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_6" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="LCT">
                                                <label for="RegistrationTypes_6" id="type-lct" style="width: 3em">LCT</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_7" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="FTC">
                                                <label for="RegistrationTypes_7" id="type-ftc" style="width: 3em">FTC</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_8" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="WET">
                                                <label for="RegistrationTypes_8" id="type-wet" style="width: 3em">WET</label>
                                            </p>
                                        </div>
                                        <div class="custom-controls inline">
                                            <p class="no-margin">

                                                <input id="RegistrationTypes_9" name="SearchOptions.SelectedRegistrationTypes" type="checkbox" value="AKEY">
                                                <label for="RegistrationTypes_9" id="type-akey" style="width: 3em">AUSKey</label>
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
	</form>
</div>

    <div id="applicationResults"><div class="dashboard-container" id="5263">
    <table>
        <caption>
            Application reference: <strong>#1710-AA-5263-L</strong><br>
            
            <div class="app-status"><p>Completed on 31 Oct 2017 08:03</p></div>
        </caption>
        <thead>
        <tr>
            <th class="status-item">Registration item</th>
            <th class="status-detail">Detail</th>
            <th class="status-information" colspan="2">Status</th>
        </tr>
        </thead>
        <tbody><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Payment received-</span>Payment received</td>
    <td class="status-waiting">Receipt number receiptNum</td>
    <td class="">
        <a class="more" href="#">Payment details</a>
        
    </td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>ABN</td>
    <td class="status-waiting"></td>
    <td class="">
        <span>
            <a class="more" href="#">Successful</a>
        </span>
    </td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="registered"><span class="visuallyhidden">Successful-</span>Business name</td>
    <td class="status-waiting">SASQUATCH CAFE &amp; CREDIT UNION</td>
    <td class="">
        <span>
            <a class="more" href="#">Registered</a>
        </span>
    </td>
    <td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
</tr></tbody>
	<tfoot>
		<tr>
			<td><span class="fa fa-arrow-circle-right" style="color: #4f8fe6; font-size: 175%; float: left; margin-right: 8px;"></span> <p><strong>Next steps</strong></p></td>
			<td>Other registrations you may need</td>
			<td><p><a href="#" onclick="expandRows(); return false;">Click to expand</a></p></td>
			<td><span id="next-steps-expand" onclick="expandRows()" class="fa fa-plus-square"></span></td>
		</tr>
		<tr class="hidden-row visuallyhidden">
			<td>&nbsp;</td>
			<td colspan="3"><p>Find out what <a href="https://ablis.business.gov.au/search/services?baId=3662&psId=7785&gpId=164&SourcePage=&aId=461&aId=476&aId=488&aId=604&aId=596&aId=459&aId=811&aId=465&aId=495&aId=601&aId=772&aId=462&aId=624&aId=494&aId=680&aId=784&aId=613&aId=798&aId=468&aId=482&aId=615&aId=881&aId=580&aId=483&aId=591&aId=592&aId=469" target="_blank">business licences</a> I may need.</p></td>
		</tr>
		<tr class="hidden-row visuallyhidden">
			<td>&nbsp;</td>
			<td colspan="3"><p>Do I need a <a href="https://www.ipaustralia.gov.au/" target="_blank">protect my intellectual property</a>?</p></td>
		</tr>
		<tr class="hidden-row visuallyhidden">
			<td>&nbsp;</td>
			<td colspan="3"><p>Your chosen Business Activity indicates you may need to be enrolled and/or registered with AUSTRAC. To find out more about these mandatory requirements, please visit the <a href="http://www.austrac.gov.au/businesses/enrolment-and-remitter-registration/enrolment-and-registration">AUSTRAC website</a>.</p></td>
		</tr>
	</tfoot>
    </table>
    <div class="referrer">
	</div>
</div><div class="dashboard-container" id="5262">
    <table>
        <caption>
            Application reference: <strong>#1710-AA-5262-L</strong><br>
            
            <div class="app-status"><p class="clickable"><a href="#" class="more">Not submitted</a>&nbsp;<span class="fa fa-plus-square"></span></p><div class="extra-content" style="display: none;"><p>You haven't submitted this application yet. To return to your application, select the <strong>Resume</strong> button.</p></div></div>
            <span class="controls">
                <a href="javascript:void(0);" class="edit">Resume</a>
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
    <td class="editing"><span class="visuallyhidden">Not Submitted-</span>ABN</td>
    <td class="status-waiting"></td>
    <td class="">Not Submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr><tr class="rego">
    <td class="editing"><span class="visuallyhidden">Not Submitted-</span>AUSKey</td>
    <td class="status-waiting"></td>
    <td class="">Not Submitted</td>
    <td class=""><span class="">&nbsp;</span></td>
</tr></tbody>
    </table>
    <div class="referrer"></div>
</div></div>

    <!-- div id="pager" class="card" style="">
        <div class="grid-row">
            <p>
                You have <span>136</span> more application(s)
                <button id="btnShowMore" type="button" class="btn btn-inline" style="margin-left: 10px">Show more...</button>
            </p>
        </div>
    </div -->
</div>
<script>
	function expandRows() {
		$(this).blur();
		$(".hidden-row").toggleClass("visuallyhidden");
		$("#next-steps-expand").toggleClass("fa-plus-square").toggleClass("fa-minus-square");
	}
</script>
<!-- script type="text/javascript">
    var json = {"totalCount":139,"lastSearch":{"searchString":null,"dateFrom":null,"dateTo":null,"selectedApplicationStatus":null,"selectedRegistrationTypes":null,"userEmail":null,"transactionId":null,"findAll":false,"page":0,"submitAction":null},"applications":[{"applicationId":5263,"transactionId":"1710-AA-5263-L","submittedDate":"2017-10-31T08:03:00.333","updatedDate":"2017-10-31T08:03:00.333","completedDate":null,"status":2,"applicationStatus":"ApplicationSubmitted","statusDescription":"Submitted on 31 Oct 2017 08:03","extraHtml":null,"payment":{"paymentDate":"2017-10-31T08:02:22.55","receiptNumber":"receiptNum","declinedReason":null,"status":"PAID","statusDescription":"Payment received","details":"Receipt number receiptNum","information":"Payment details","canRetry":false,"cssClass":"registered","extraHtml":"<p>Thank you. Your payment has been received for the following registration(s):</p>\n<ul>\n     <li>SASQUATCH</li>\n</ul>\n<p>You can find the receipt number for this payment in the detail column above.</p>\n<p>Please allow up to one business day for Australian Securities &amp; Investments Commission (ASIC) to process your application. If you haven&apos;t received an update within that time, please contact <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">ASIC online</a>. </p>\n<h4>Can I get a refund?</h4>\n<p>If you paid for a business name or company registration but your application is unsuccessful, ASIC will refund your payment. If you don&apos;t receive a refund, please contact <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">ASIC online</a> or you can <a href=\"http://www.asic.gov.au/for-business/payments-fees-and-invoices/payment-options/business-name-fees-and-payment-methods/#refunds\" target=\"_blank\">request a refund from ASIC</a>. </p>"},"applicationItems":[{"registrationType":"ABN","registrationStatus":"Successful","statusDescription":"Successful","name":"ABN","details":null,"information":"Successful","dependentRegistration":null,"inProgress":false,"canCopyDetails":true,"cssClass":"registered","certificateLocationLink":null,"sort":2,"extraHtml":"<p><strong>Congratulations.</strong> This application to register an Australian Business Number (ABN) was successful. You can expect a letter of confirmation in the mail from the Australian Business Register (ABR) within 14 days. </p>\n<p>You can take a copy of your ABN number by clicking the <strong>Copy</strong> button beside your ABN above. </p>\n<h4>Which ABN details will be public?</h4>\n<p>Only certain information will become publicly available on the <a href=\"http://abn.business.gov.au/\" target=\"_blank\">ABN Lookup</a> website. </p>\n<p>For a full list of ABN details displayed on the website or if you wish to suppress certain details, go to the <a href=\"https://abr.gov.au/For-Business,-Super-funds---Charities/Applying-for-an-ABN/Your-business-information-on-the-ABR/\" target=\"_blank\">your business information on the ABR</a> web page.</p>\n<h4>Where do I display my ABN?</h4>\n<p>You must display your ABN on payment slips, receipts and tax invoices. You may also wish to display your ABN on your website, letterheads or other marketing material. Find details on these requirements below:</p>\n<ul><li>See details and examples of <a href=\"https://www.ato.gov.au/Business/GST/Issuing-tax-invoices/\" target=\"_blank\">tax invoices</a> on the Australian Taxation Office (ATO) website. </li>\n<li>Check out the information required on <a href=\"https://www.fairwork.gov.au/pay/pay-slips-and-record-keeping/pay-slips\" target=\"_blank\">payslips</a> on the Fair Work Ombudsman website. </li>\n<li>Find a list of information required on <a href=\"https://www.accc.gov.au/consumers/prices-surcharges-receipts/receipts\" target=\"_blank\">receipts</a> on the Australian Competition &amp; Consumer Commission website.</li> </ul>\n<h4>What else do I need to register?</h4>\n<p>There are a number of registrations you may still need before you can start trading. State and territories have various licences and permits that are often required prior to starting your business or company.</p>\n<p>See the <a href=\"https://ablis.business.gov.au/pages/home.aspx\" target=\"_blank\">Australian Business Licence and Information Service (ABLIS)</a> to find the licences and permits you need to run your business.</p>\n<h4>Where do I update my details?</h4>\n<p>The Business registration service does not currently process ABN updates. Find out how you can <a href=\"https://www.ato.gov.au/Business/Registration/Update-your-details/\" target=\"_blank\">update your ABN details</a> on the ATO website.</p>\n<h4>Who can I contact?</h4>\n<p>To find out more about your ABN registration, please <a href=\"https://abr.gov.au/Contact-us/Contact-the-ABR/\" target=\"_blank\">contact the ABR</a> on 13 92 26.</p>","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]},{"registrationType":"BN","registrationStatus":null,"statusDescription":"In Progress","name":"Business name","details":"SASQUATCH","information":"In Progress","dependentRegistration":null,"inProgress":true,"canCopyDetails":false,"cssClass":"waiting","certificateLocationLink":null,"sort":999,"extraHtml":"","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]}],"canRefresh":true,"canResume":false,"canRemove":false,"referrerViewModel":{"code":null,"reference":null,"dashboardHtml":"","isConsentGiven":null,"referrer":",","isViewModelValidated":false}},{"applicationId":5262,"transactionId":"1710-AA-5262-L","submittedDate":null,"updatedDate":"2017-10-24T16:43:19.937","completedDate":null,"status":1,"applicationStatus":"ApplicationNotSubmitted","statusDescription":"Not submitted","extraHtml":"<p>You haven&apos;t submitted this application yet. To return to your application, select the <strong>Resume</strong> button.</p>","payment":null,"applicationItems":[{"registrationType":"ABN","registrationStatus":null,"statusDescription":"Not Submitted","name":"ABN","details":null,"information":"Not Submitted","dependentRegistration":null,"inProgress":false,"canCopyDetails":true,"cssClass":"editing","certificateLocationLink":null,"sort":2,"extraHtml":"","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]},{"registrationType":"AKEY","registrationStatus":null,"statusDescription":"Not Submitted","name":"AUSKey","details":"Fred Nerk","information":"Not Submitted","dependentRegistration":null,"inProgress":false,"canCopyDetails":true,"cssClass":"editing","certificateLocationLink":null,"sort":100,"extraHtml":"","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":"","reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]}],"canRefresh":false,"canResume":true,"canRemove":false,"referrerViewModel":{"code":null,"reference":null,"dashboardHtml":"","isConsentGiven":null,"referrer":",","isViewModelValidated":false}},{"applicationId":5261,"transactionId":"1710-AA-5261-L","submittedDate":"2017-10-24T16:30:30.99","updatedDate":"2017-10-24T16:30:30.99","completedDate":null,"status":2,"applicationStatus":"ApplicationSubmitted","statusDescription":"Submitted on 24 Oct 2017 16:30","extraHtml":null,"payment":{"paymentDate":"2017-10-24T16:29:42.02","receiptNumber":"receiptNum","declinedReason":null,"status":"PAID","statusDescription":"Payment received","details":"Receipt number receiptNum","information":"Payment details","canRetry":false,"cssClass":"registered","extraHtml":"<p>Thank you. Your payment has been received for the following registration(s):</p>\n<ul>\n     <li>CRAGGY PTY LTD</li>\n     <li>DAGGY</li>\n</ul>\n<p>You can find the receipt number for this payment in the detail column above.</p>\n<p>Please allow up to one business day for Australian Securities &amp; Investments Commission (ASIC) to process your application. If you haven&apos;t received an update within that time, please contact <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">ASIC online</a>. </p>\n<h4>Can I get a refund?</h4>\n<p>If you paid for a business name or company registration but your application is unsuccessful, ASIC will refund your payment. If you don&apos;t receive a refund, please contact <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">ASIC online</a> or you can <a href=\"http://www.asic.gov.au/for-business/payments-fees-and-invoices/payment-options/business-name-fees-and-payment-methods/#refunds\" target=\"_blank\">request a refund from ASIC</a>. </p>"},"applicationItems":[{"registrationType":"Company","registrationStatus":"Successful","statusDescription":"Successful","name":"Company","details":"CRAGGY PTY LTD","information":"Registered","dependentRegistration":null,"inProgress":false,"canCopyDetails":true,"cssClass":"registered","certificateLocationLink":"https://sobrsmocks:8083/Asic/ASIC_BUSINESS_CERTIFICATE.pdf","sort":1,"extraHtml":"<p><strong>Congratulations.</strong> This application to register a company was successful. Please download the certificate of registration below for your files:</p>\n <blockquote><a href=\"https://sobrsmocks:8083/Asic/ASIC_BUSINESS_CERTIFICATE.pdf\"><strong>Certificate of registration for CRAGGY PTY LTD</strong></a></blockquote>\n<p>You can expect a letter of confirmation in the mail from the Australian Securities &amp; Investments Commission (ASIC) within 5 to 7 business days.</p>\n<h4>Who can I contact?</h4>\n<p>To find out more about your company registration please <a href=\"http://asic.gov.au/about-asic/contact-us/\">contact ASIC</a>. For detailed advice, you&apos;ll need to quote your ASIC reference number below.</p> \n     <blockquote> <strong>ASIC reference number:</strong> 933173a2-ca81-441f-81a2-db8bd43d15f8</blockquote>\n<h4>Where do I display my ACN?</h4>\n<p>Legally you <strong>must</strong> display your ACN on various public and official documents. Details on <a href=\"http://asic.gov.au/for-business/starting-a-company/how-to-start-a-company/australian-company-numbers/#where_the_acn \" target=\"_blank\">where the ACN must appear</a> can be found on the ASIC website.</p>\n<h4>Which details will be public?</h4>\n<p>Certain information will become publicly available on the ASIC <a href=\"https://connectonline.asic.gov.au/\" target=\"_blank\">Company name register</a></p>\n<p>Additional company details can also be accessed by the public for a fee. See which <a href=\"http://www.asic.gov.au/online-services/search-asics-registers/search-fees/\" target=\"_blank\">details are available for a fee</a> on the ASIC website. </p> \n<h4>Where do I update my details?</h4>\n<p>The Business registration service does not currently process company updates. You can <a href=\"http://www.asic.gov.au/changes\" target=\"_blank\">update your company details</a> on the ASIC website.</p>\n<h4>How do I renew my company?</h4>\n<p>ASIC will send you a company registration annual review each year. Find out more about the <a href=\"http://asic.gov.au/for-business/running-a-company/annual-statements/\" target=\"_blank\">company annual review and fees</a> on the ASIC website.</p>","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":"000021894","asicReferenceNumber":"933173a2-ca81-441f-81a2-db8bd43d15f8","ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]},{"registrationType":"ABN","registrationStatus":null,"statusDescription":"In Progress","name":"ABN","details":null,"information":"In Progress","dependentRegistration":null,"inProgress":true,"canCopyDetails":true,"cssClass":"waiting","certificateLocationLink":null,"sort":2,"extraHtml":"","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]},{"registrationType":"GST","registrationStatus":null,"statusDescription":"In Progress","name":"GST","details":null,"information":"Pending ABN Registration","dependentRegistration":"ABN","inProgress":false,"canCopyDetails":false,"cssClass":"waiting","certificateLocationLink":null,"sort":30,"extraHtml":"<p>A required registration is still in progress, so we can&apos;t lodge this application yet.</p>\n<blockquote><hr /><strong>For example:</strong> an application for Goods &amp; Services Tax (GST) will be marked as <strong>Pending</strong> until the required Australian Business Number (ABN) application is successful. <hr /></blockquote>\n<p>Use the <strong>Status update</strong> button on the <strong>Application summary</strong> screen to check the status of your applications.</p>  \n<p>To find out more on the progress of your business name or company application, <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">contact the Australian Securities &amp; Investments Commission</a>.</p>\n<p>To find out more on the progress of your ABN or other tax applications, <a href=\"https://www.ato.gov.au/about-ato/about-us/contact-us/phone-us/\" target=\"_blank\">contact the Australian Taxation Office</a>.  </p>","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]},{"registrationType":"BN","registrationStatus":null,"statusDescription":"In Progress","name":"Business name","details":"DAGGY","information":"Pending ABN Registration","dependentRegistration":"ABN","inProgress":false,"canCopyDetails":false,"cssClass":"waiting","certificateLocationLink":null,"sort":999,"extraHtml":"<p>A required registration is still in progress, so we can&apos;t lodge this application yet.</p>\n<blockquote><hr /><strong>For example:</strong> an application for Goods &amp; Services Tax (GST) will be marked as <strong>Pending</strong> until the required Australian Business Number (ABN) application is successful. <hr /></blockquote>\n<p>Use the <strong>Status update</strong> button on the <strong>Application summary</strong> screen to check the status of your applications.</p>  \n<p>To find out more on the progress of your business name or company application, <a href=\"http://asic.gov.au/about-asic/contact-us/\" target=\"_blank\">contact the Australian Securities &amp; Investments Commission</a>.</p>\n<p>To find out more on the progress of your ABN or other tax applications, <a href=\"https://www.ato.gov.au/about-ato/about-us/contact-us/phone-us/\" target=\"_blank\">contact the Australian Taxation Office</a>.  </p>","abn":null,"abnReferenceNumber":null,"abnRefusalId":null,"abnWorkItemId":null,"acn":null,"asicReferenceNumber":null,"ausKeyActivationCode":null,"reportingMethodCode":null,"reportingMethodEffectiveDate":null,"errors":[]}],"canRefresh":true,"canResume":false,"canRemove":false,"referrerViewModel":{"code":null,"reference":null,"dashboardHtml":"","isConsentGiven":null,"referrer":",","isViewModelValidated":false}}],"searchActionLink":"/registration/dashboard/search","showMoreActionLink":"/registration/dashboard/showmore","refreshActionLink":"/registration/dashboard/application","removeActionLink":"/registration/dashboard/delete","resumeActionLink":"/registration/dashboard/resume","retryPaymentActionLink":"/registration/dashboard/retrypayment","lastSearchActionLink":"/registration/dashboard/search","signInActionLink":"/account/signin","isAdmin":false,"isContactCentreUser":false};
    $(document).ready(DashboardPageScript.initPage);
</script -->