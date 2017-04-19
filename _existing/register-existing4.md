---
title: My business
layout: default
---
<style>
	.result-cell h3 {
		margin: 1em 0 0 0;
	}
	
	h3 em, td em {
		font-weight: normal;
		font-size: 70%;
	}
	
	.cell-icon {
		text-align: center;
	}
	
	.cell-icon img {
		padding: inherit;
	}
	
	.orange {
		color: #ef5a28;
	}
	.red {
		color: #ef0000;
	}
	.green {
		color: #009900;
	}
	.blue {
		color: #3c86c4
	}
	.cell-icon span.fa {
		font-size: 1.5em;
		vertical-align: middle;
	}
	
	.cell-icon span.fa-check-circle {
		font-size: 1.8em;
	}
	
	ul.reg-list > li {
		list-style: none;
	}
	
	table tr td span.fa,
	ul > li span.fa {
	}
	
	table tr td.top {
		vertical-align: top;
	}
	
	td ul {
		margin: 0;
		margin-left: -40px;
	}
	
	ul.reg-list > li span.fa-plus {
		vertical-align: middle;
	}
	
	.bold {
		font-weight: bold;
	}

	button.ico-edit {
		margin-left: 3px;
	}
	
	.input-percent {
		width: 60px !important;
	}
	
	.dashboard-container caption .app-status {
		font-size: 80%;
		margin-top: .5em;
		width: 80%;
	}
	.retrieve {
		display: none;
	}
	
	table tbody:nth-child(n+1) tr:first-child td {
		border-top: 4px solid #e7e7e7;
	}
	
	button span.fa-user {
		margin-right: 10px;
		font-size: 125%;
	}
</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for additional registrations and authorisations for your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div class="confirmation">
	<div id="main">
		<table id="business-details">
			<thead class="visuallyhidden">
				<tr>
					<th>Field item</th>
					<th>Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th colspan="2">Business details</th>
				</tr>
				<tr>
					<td width="25%" class="field-name bold">ABN</td>
					<td width="75%" class="input-value">44 123 456 789</td>
				</tr>
				<tr>
					<td class="field-name bold">Entity name</td>
					<td class="input-value"><span class="retrieve">Really Awesome Business Pty Ltd</span></td>
				</tr>
				<tr>
					<td class="field-name bold top">Current tax registrations</td>
					<td class="input-value">
						<p class="retrieve" style="margin: 0">None currently registered.</p>
						<!-- <ul class="reg-list retrieve">
							<li><span class="fa fa-check green"></span> Goods and Services Tax (GST)</li>
							<li><span class="fa fa-check green"></span> Pay As You Go (PAYG) withholding</li>
						</ul> -->
					</td>
				</tr>
			</tbody>
		</table>
		<div id="available-regos" class="margin-bottom">
			<h3>Available registrations</h3>
			<div class="grid-row">
				<div class="col6">
					<ul>
						<li>Goods and Services Tax (GST)</li>
						<li>Pay As You Go (PAYG) Withholding</li>
						<li>Fringe Benefits Tax (FBT)</li>
					</ul>
				</div>
				<div class="col6 last">
					<ul>
						<li>Luxury Car Tax (LCT)</li>
						<li>Fuel Tax Credits (FTC)</li>
						<li>Wine Equalisation Tax (WET)</li>
					</ul>
				</div>
			</div>
			<div class="margin-top-075">
				<button id="btn-apply" class="btn btn-inline ajax-button" type="button">Apply</button>
			</div>
		</div>
		<div id="rego-display" style="display: none;">
			<table>
				<thead class="visuallyhidden">
					<tr>
						<th>Field item</th>
						<th>Input value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th style="vertical-align: middle">Tax registrations</th>
						<th><button type="button" id="edit-rego" class="btn btn-default ico-edit">Edit</button></th>
					</tr>
					<tr>
						<td class="field-name bold">Goods &amp; Services Tax (GST)</td>
						<td><span class="fa fa-check green"></span> Added</td>
					</tr>
					<tr>
						<td class="field-name">Registration start date</td>
						<td class="input-value">18/04/2017</td>
					</tr>
					<tr>
						<td class="field-name">Turnover</td>
						<td class="input-value">$0 - $74,999</td>
					</tr>
					<tr>
						<td class="field-name">Lodgement frequency</td>
						<td class="input-value">Annually</td>
					</tr>
					<tr>
						<td class="field-name">Accounting method</td>
						<td class="input-value">Accrual</td>
					</tr>
					<tr>
						<td class="field-name">Import goods?</td>
						<td class="input-value">No</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td class="field-name bold">Pay As You Go (PAYG) Withholding</td>
						<td><span class="fa fa-check green"></span> Added</td>
					</tr>
					<tr>
						<td class="field-name">Registration start date</td>
						<td class="input-value">18/04/2017</td>
					</tr>
					<tr>
						<td class="field-name">Number of employees</td>
						<td class="input-value">12</td>
					</tr>
					<tr>
						<td class="field-name">Annual witholding amount</td>
						<td class="input-value">$2,000,000</td>
					</tr>
					<tr>
						<td class="field-name">Payment summary report method</td>
						<td class="input-value">Electronic</td>
					</tr>
					<tr>
						<td class="field-name">Royalties, dividends, interest or investment body</td>
						<td class="input-value">No</td>
					</tr>
                </tbody>
			</table>
		</div>
		<div id="authorisations">
			<div>
				<div id="none-added">
					<h3>Authorisations</h3>
					<p>None added</p>
					<div class="margin-top-075">
						<button id="btn-add-auth" class="btn btn-inline ajax-button" type="button">Add authorisations</button>
					</div>
				</div>
				<div id="auth-display" class="margin-top-075" style="display: none;">
					<table>
						<thead class="visuallyhidden">
							<tr>
								<th>Field item</th>
								<th>Input value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th style="vertical-align: middle">Authorisations</th>
								<th><button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button></th>
							</tr>
							<tr>
								<td class="field-name"><span class="fa fa-user blue"></span> <strong>Fred Albert Nerk</strong></td>
								<td class="input-value"><span class="fa fa-check green"></span> Added</td>
							</tr>
							<tr>
								<td class="field-name">Associate type</td>
								<td class="input-value">Director</td>
							</tr>
							<tr>
								<td class="field-name">Tax File Number (TFN)</td>
								<td class="input-value">123456789</td>
							</tr>
							<tr>
								<td class="field-name">Date of birth</td>
								<td class="input-value">16/05/1996</td>
							</tr>
							<tr>
								<td class="field-name">Email</td>
								<td class="input-value">fred@email.com</td>
							</tr>
							<tr>
								<td class="field-name">Phone number</td>
								<td class="input-value">55555555</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td class="field-name"><span class="fa fa-user blue"></span> <strong>Simon Arthur Bourke</strong></td>
								<td class="input-value"><span class="fa fa-check green"></span> Added</td>
							</tr>
							<tr>
								<td class="field-name">Associate type</td>
								<td class="input-value">Public officer</td>
							</tr>
							<tr>
								<td class="field-name">Tax File Number (TFN)</td>
								<td class="input-value">987654321</td>
							</tr>
							<tr>
								<td class="field-name">Date of birth</td>
								<td class="input-value">27/09/1976</td>
							</tr>
							<tr>
								<td class="field-name">Email</td>
								<td class="input-value">simon@email.com</td>
							</tr>
							<tr>
								<td class="field-name">Phone number</td>
								<td class="input-value">66666666</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div id="declaration" style="display: none;">
			<h3 class="larger">Declaration</h3>
			<p>Please complete the declaration below to submit your changes.</p>
			<div id="ajax-container-for-declaration">
				<div class="declaration-wrapper margin-top-075">
					<div id="declaration-text" class="grid-row">
						<fieldset id="tax-declaration" class="custom-controls" style="display: none;">
							<legend class="larger no-padding">Tax Registrations</legend>
							<p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
							<ul>
								<li>Fringe Benefits Tax (FBT)</li>
								<li>Wine Equalisation Tax (WET)</li>
							</ul>
							<p>
								<input data-val="true" data-val-required="The ATOTrueAndCorrectCheckBox field is required." id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true"><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
								<label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">The information provided in this application is true and correct. </label>
							</p>
						</fieldset>
						<fieldset id="auskey-declaration" class="custom-controls" style="display: none;">
							<legend class="larger no-padding">Government Credentials</legend>
							<p>
								<input data-val="true" data-val-required="The AUSKeyCheckBox field is required." id="AUSKeyCheckBox" name="AUSKeyCheckBox" type="checkbox" value="true"><input name="AUSKeyCheckBox" type="hidden" value="false">
								<label id="ato-auskey-check" for="AUSKeyCheckBox">The person identified as an associate is eligible for an AUSKey and I declare that:
								<span class="dot-point">I am authorised to make this application on behalf of the Business.</span><br>
								<span class="dot-point">This application is for an AUSKey to be held for that business.</span><br>
								<span class="dot-point">I understand the terms and conditions associated with that AUSkey.</span><br>
								<span class="dot-point">Notices about this AUSkey application and that AUSkey may be sent to the email address recorded for the business on the ABR.</span> </label>
							</p>
						</fieldset>
					</div>
					<div class="grid-row">
						<h3>Privacy</h3>
						<p>The information provided to ASIC <span class="addition">, the ABR and the ATO</span> in this form may include personal information. Please refer to the <a href="http://www.asic.gov.au/privacy" target="_blank">ASIC privacy policy <span class="visuallyhidden">(opens in new window)</span></a>, the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
					</div>
				</div>
			</div>
			<div class="controls-container">
				<div class="controls-content">
					<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and submit</button>
				</div>
			</div>
		</div>
		<div>
			<div class="dashboard-container" style="display: none;">
				<table>
				<caption>
					Recent applications<br>
					
					<div class="app-status"><p>Submitted on 12 Apr 2017 09:16</p></div>
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
						<td class="waiting"><span class="visuallyhidden">In progress-</span>FBT</td>
						<td class="status-waiting"></td>
						<td class="">
							<span>
								<a class="more" href="#">In progress</a>
							</span>
						</td>
						<td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
					</tr>
					<tr class="rego">
						<td class="waiting"><span class="visuallyhidden">In progress-</span>WET</td>
						<td class="status-waiting"></td>
						<td class="">
							<span>
								<a class="more" href="#">In progress</a>
							</span>
						</td>
						<td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
					</tr>
					<tr class="rego">
						<td class="waiting"><span class="visuallyhidden">In progress-</span>AUSKey</td>
						<td class="status-waiting">John Smith</td>
						<td class="">
							<span>
								<a class="more" href="#">In progress</a>
							</span>
						</td>
						<td class=""><span class="fa fa-plus-square">&nbsp;</span></td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="tax-form" style="display: none">
	<fieldset class="">
		<legend class="larger">Tax registrations</legend>
		<div class="grid-row custom-controls clearfix">
			<div class="col6">
				<p>
					<input id="gst-cb" name="gst-cb" type="checkbox" value="true">
					<label class="has-help" for="gst-cb" id="type-gst">Goods and Services Tax (GST)<a class="cd-btn help" href="#help-gst"><span>Help - Goods &amp; Services Tax (GST) </span></a></label>
				</p>
				<p>
					<input id="payg-cb" name="payg-cb" type="checkbox" value="true">
					<label class="has-help" for="payg-cb" id="type-payg">Pay As You Go (PAYG) Withholding<a class="cd-btn help" href="#help-payg"><span>Help - Pay As You Go (PAYG) Withholding </span></a></label>
				</p>
				<p>
					<input id="fbt-cb" name="fbt-cb" type="checkbox" value="true"><input name="RegistrationTypesViewModel.SelectedRegistrationTypes[5].Selected" type="hidden" value="false">
					<label class="has-help" for="fbt-cb" id="type-fbt">Fringe Benefits Tax (FBT)<a class="cd-btn help" href="#help-selectregistrationsfbt"><span>Help - Fringe Benefits Tax (FBT)</span></a></label>
				</p>
			</div>
			<div class="col6 last">
				<p>
					<input id="lct-cb" name="lct-cb" type="checkbox" value="true">
					<label class="has-help" for="lct-cb" id="type-gst">Luxury Car Tax (LCT)<a class="cd-btn help" href="#help-gst"><span>Help - Goods &amp; Services Tax (GST) </span></a></label>
				</p>
				<p>
					<input id="ftc-cb" name="ftc-cb" type="checkbox" value="true">
					<label class="has-help" for="ftc-cb" id="type-payg">Fuel Tax Credits (FTC)<a class="cd-btn help" href="#help-payg"><span>Help - Pay As You Go (PAYG) Withholding </span></a></label>
				</p>
				<p>
					<input id="wet-cb" name="wet-cb" type="checkbox" value="true">
					<label class="has-help" for="wet-cb" id="type-wet">Wine Equalisation Tax (WET)<a class="cd-btn help" href="#help-selectregistrationsfbt"><span>Help - Fringe Benefits Tax (FBT)</span></a></label>
				</p>
			</div>
		</div>
	</fieldset>
	<fieldset id="gst-form" class="margin-top-075" style="display: none;">
		<legend class="margin4 larger">Goods &amp; Services Tax (GST)</legend>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="GstDetails_RegistrationDate">What is the start date of your GST registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
			</div>
			<div class="col8 last">
				<input class="date hasDatepicker" data-val="true" data-val-date="The field RegistrationDate must be a date." id="GstDetails_RegistrationDate" name="GstDetails.RegistrationDate" type="text" value="18/04/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-taxationgstdetailsregistrationdate"><span>Help - GST start date</span></a>
				<br>Must be your ABN start date or later.
			</div>
		</div>

		<fieldset class="grid-row" id="GstDetails_GstTurnover" tabindex="-1">
			<div class="col4">
				<label for="gst-turnover" class="input-right">What is your annual GST turnover? <a class="cd-btn help" href="#help-taxationgstdetailsgstturnover"><span>Help - GST turnover</span></a></label>
			</div>
			<div class="col8 last">
				<select id="gst-turnover">
					<option value="">--- select turnover ---</option>
					<option>$0 - $74,999</option>
					<option>$75,000 - $149,999</option>
					<option>$150,000 - $1,999,999</option>
					<option>$2,000,000 - $19,999,999</option>
					<option>$20 million and over</option>
				</select>
			</div>
		</fieldset>

		<fieldset class="grid-row" id="GstDetails_RequiredToRegisterYesNo" tabindex="-1" style="display: none;">
			<div class="col4">
				
				<p class="label input-right" id="GstDetails_RequiredToRegisterYesNo_lbl">Are you required by law to register for GST?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="GstDetails_RequiredToRegisterYesNo_Yes">
						<input id="GstDetails_RequiredToRegisterYesNo_Yes" name="GstDetails.RequiredToRegisterYesNo" type="radio" value="Yes">
						<span id="gst_required_yes">Yes</span>
					</label>
					<label class="off label-right" for="GstDetails_RequiredToRegisterYesNo_No">
						<input id="GstDetails_RequiredToRegisterYesNo_No" name="GstDetails.RequiredToRegisterYesNo" type="radio" value="No">
						<span id="gst_required_no">No</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationgstdetailsrequiredtoregisteryesno"><span>Help - Goods and Services Tax (GST) registration</span></a>
				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="GstDetails_LodgementLookupCode" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="GstDetails_LodgementLookupCode_lbl">How often will you lodge your activity statements?</p>
				
			</div>
			<div class="col7">
				<div class="radio-toggle" id="GstDetails_LodgementLookupCode_Radio">
					<label class="on label-left" for="GstDetails_LodgementLookupCode_Monthly" id="GstDetails_LodgementLookupCode_Monthly_Label">
						<input id="GstDetails_LodgementLookupCode_Monthly" name="GstDetails.LodgementLookupCode" type="radio" value="Monthly">
						<span id="lodge_monthly">Monthly</span>
					</label>
					<label class="off label-right" for="GstDetails_LodgementLookupCode_Quarterly" id="GstDetails_LodgementLookupCode_Quarterly_Label">
						<input id="GstDetails_LodgementLookupCode_Quarterly" name="GstDetails.LodgementLookupCode" type="radio" value="Quarterly">
						<span id="lodge_quarterly">Quarterly</span>
					</label>
					<label class="off label-right" for="GstDetails_LodgementLookupCode_Annually" id="GstDetails_LodgementLookupCode_Annually_Label" style="display: none;">
						<input id="GstDetails_LodgementLookupCode_Annually" name="GstDetails.LodgementLookupCode" type="radio" value="Annually">
						<span id="lodge_annually">Annually</span>
					</label>
				</div>
				<div id="GstDetails_LodgementLookupCode_Text" style="display: none;">
					<p>For a GST turnover of $20 million and over your activity statements must be lodged monthly.</p>
				</div>
				
			</div>
			<div class="col1 last">
				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="GstDetails_AccountingMethodCashYesNo" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="GstDetails_AccountingMethodCashYesNo_lbl"> Do you plan to account for GST on a cash basis?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="GstDetails_AccountingMethodCashYesNo_Yes">
						<input id="GstDetails_AccountingMethodCashYesNo_Yes" name="GstDetails.AccountingMethodCashYesNo" type="radio" value="Yes"> 
						<span id="account_cash_yes">Yes</span>
					</label>
					<label class="off label-right" for="GstDetails_AccountingMethodCashYesNo_No">
						<input id="GstDetails_AccountingMethodCashYesNo_No" name="GstDetails.AccountingMethodCashYesNo" type="radio" value="No"> 
						<span id="account_cash_no">No</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationgstdetailsaccountingmethodcashyesno"><span>Help - Cash versus Accrual accounting method</span></a>
				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="GstDetails_ImportingGoodsYesNo" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="GstDetails_ImportingGoodsYesNo_lbl">Do you import goods into Australia?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="GstDetails_ImportingGoodsYesNo_Yes">
						<input id="GstDetails_ImportingGoodsYesNo_Yes" name="GstDetails.ImportingGoodsYesNo" type="radio" value="Yes">
						<span id="import_yes">Yes</span>
					</label>
					<label class="off label-right" for="GstDetails_ImportingGoodsYesNo_No">
						<input id="GstDetails_ImportingGoodsYesNo_No" name="GstDetails.ImportingGoodsYesNo" type="radio" value="No">
						<span id="import_no">No</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationgstdetailsimportinggoodsyesno"><span>Help - Importing goods into Australia</span></a>
				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="GstDetails_IsEnterBankDetailsYesNo" tabindex="-1">
			<div class="grid-row">
				<div class="col4">
					
					<p class="label input-right" id="GstDetails_IsEnterBankDetailsYesNo_lbl">Do you want to enter bank account details?</p>
				</div>
				<div class="col8 last">
					<div class="radio-toggle">
						<label class="on label-left" for="GstDetails_IsEnterBankDetailsYesNo_Yes">
							<input data-ajax-action="UpdateBankDetails" data-ajax-target="ajax-container-for-taxationdetails" id="GstDetails_IsEnterBankDetailsYesNo_Yes" name="GstDetails.IsEnterBankDetailsYesNo" type="radio" value="Yes">
							<span id="enter_bank_details_yes">Yes</span>
						</label>
						<label class="off label-right" for="GstDetails_IsEnterBankDetailsYesNo_No">
							<input data-ajax-action="UpdateBankDetails" data-ajax-target="ajax-container-for-taxationdetails" id="GstDetails_IsEnterBankDetailsYesNo_No" name="GstDetails.IsEnterBankDetailsYesNo" type="radio" value="No">
							<span id="enter_bank_details_no">No</span>
						</label>
					</div> 
					
				</div>
			</div>
		</fieldset>
	</fieldset>
	<fieldset id="payg-form" style="display: none;">
		<legend class="margin4 larger">Pay As You Go (PAYG) Withholding</legend>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="PaygDetails_RegistrationDate">What is the start date of your PAYG registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
			</div>
			<div class="col8 last">
				<input class="gstpaygdate hasDatepicker" data-val="true" data-val-date="The field RegistrationDate must be a date." id="PaygDetails_RegistrationDate" name="PaygDetails.RegistrationDate" type="text" value="18/04/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-taxationpaygdetailsregistrationdate"><span>Help - Pay As You Go (PAYG) withholding</span></a>
				<br><div>Can't be before your ABN start date.</div>
			</div>
		</div>

		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="PaygDetails_EstimatedNumberOfPayees">How many employees do you estimate you will pay? <span class="field-note nowrap">(enter a number)</span></label>
			</div>
			<div class="col8 last">
				<input data-val="true" data-val-number="The field EstimatedNumberOfPayees must be a number." id="payg_no_empl" name="PaygDetails.EstimatedNumberOfPayees" type="number" value="12"> <a class="cd-btn help" href="#help-taxationpaygdetailsestimatednumberofpayees"><span>Help - Employees</span></a>
				
			</div>
		</div>

		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="PaygDetails_EstimatedTaxWithheldAmount">What amount do you expect to withhold from payments to your payees each year? <span class="field-note nowrap">(enter a number)</span></label>
			</div>
			<div class="col8 last">
				<input data-val="true" data-val-number="The field EstimatedTaxWithheldAmount must be a number." id="payg_withhold_amt" name="PaygDetails.EstimatedTaxWithheldAmount" type="number" value="2000000"> <a class="cd-btn help" href="#help-taxationpaygdetailsestimatedtaxwithheldamount"><span>Help - Expected amount of withholding</span></a>
				
			</div>
		</div>

		<fieldset class="grid-row" id="PaygDetails_ReportingMethod" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="payg_report_period">How will you provide your PAYG withholding payment summary annual report to the ATO?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle stacked">
					<label class="on label-left" for="PaygDetails_ReportingMethod_Form">
						<input id="PaygDetails_ReportingMethod_Form" name="PaygDetails.ReportingMethod" type="radio" value="P">
						<span id="payg_paysummary_paper">Paper form supplied by the ATO</span>
					</label>
					<label class="off label-right" for="PaygDetails_ReportingMethod_Electronic">
						<input checked="checked" id="PaygDetails_ReportingMethod_Electronic" name="PaygDetails.ReportingMethod" type="radio" value="E">
						<span id="payg_paysummary_electronically">Electronically</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationpaygdetailsreportingmethod"><span>Help - Payment summary annual report</span></a>
				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="PaygDetails_InvestmentBodyYesNo" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="PaygDetails_InvestmentBodyYesNo_lbl">Will you pay royalties, dividends or interest to non-residents, or are you an investment body that will pay investment income to Australian residents?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="PaygDetails_InvestmentBodyYesNo_Yes">
						<input id="PaygDetails_InvestmentBodyYesNo_Yes" name="PaygDetails.InvestmentBodyYesNo" type="radio" value="Yes">
						<span id="payg_investmentbody_yes">Yes</span>
					</label>
					<label class="off label-right" for="PaygDetails_InvestmentBodyYesNo_No">
						<input checked="checked" id="PaygDetails_InvestmentBodyYesNo_No" name="PaygDetails.InvestmentBodyYesNo" type="radio" value="No">
						<span id="payg_investmentbody_no">No</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationpaygdetailsinvestmentbodyyesno"><span>Help - Royalties, dividends, interest or investment body</span></a>
				
			</div>
		</fieldset>
	</fieldset>
	<div class="controls-container">
		<button id="btn-save" class="btn btn-default ajax-button" type="button">Save</button>
		<button id="btn-cancel" class="btn ajax-button" type="button">Cancel</button>
	</div>
</div>
<div id="auth-form" style="display: none;">
	<div id="associate-form" style="display: none;">
		<fieldset id="Associates_PersonAssociate_Roles">
			<legend class="margin4 has-help larger">Associate details</legend>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="associate-type">Associate type</label>
				</div>
				<div class="col7">
					<select id="associate-type">
						<option value="">--- please select ---</option>
						<option>Trustee</option>
						<option>Public officer</option>
						<option>Director</option>
						<option>Partner</option>
						<option>Office bearer of a club / association</option>
					</select>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="Associates_PersonAssociate_GivenName">Given name</label>
				</div>
				<div class="col8 last">
					<input id="Associates_PersonAssociate_GivenName" name="Associates.PersonAssociate.GivenName" type="text" value=""> 
					
				</div>
			</div>

			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="Associates_PersonAssociate_OtherName">Other given name <span class="field-note optional">(optional)</span></label>
				</div>
				<div class="col8 last">
					<input id="Associates_PersonAssociate_OtherName" name="Associates.PersonAssociate.OtherName" type="text" value=""> 
					
				</div>
			</div>

			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="Associates_PersonAssociate_FamilyName">Family name</label>
				</div>
				<div class="col8 last">
					<input id="Associates_PersonAssociate_FamilyName" name="Associates.PersonAssociate.FamilyName" type="text" value=""> 
					
				</div>
			</div>

			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="Associates_PersonAssociate_TaxFileNumber">Tax File Number <span class="field-note optional">(optional)</span></label>
				</div>
				<div class="col8 last">
					<input id="Associates_PersonAssociate_TaxFileNumber" name="Associates.PersonAssociate.TaxFileNumber" type="number" value=""> <a class="cd-btn help" href="#help-businessdetailspersondetailstaxfilenumber"><span>Help - Tax File Number (TFN)</span></a>
					
				</div>
			</div>

			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="Associates_PersonAssociate_DateOfBirth">Date of birth</label>
				</div>
				<div class="col8 last">
					<input class="date hasDatepicker" data-val="true" data-val-date="The field DateOfBirth must be a date." id="Associates_PersonAssociate_DateOfBirth" name="Associates.PersonAssociate.DateOfBirth" type="text" value=""><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>                    
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="ContactDetails_Email">Email</label>
				</div>
				<div class="col8 last">
					<input id="ContactDetails_Email" name="ContactDetails.Email" type="email" value="email@email.com"> <a class="cd-btn help" href="#help-companydetailscontactdetailsemail"><span>Help - Email address</span></a>
					
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone">Phone number</label>
				</div>
				<div class="col8 last">
					<input id="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone" name="AuthorisedContacts.AuthorisedContact.BusinessHoursPhone" type="text" value=""> 
					
				</div>
			</div>
			
		</fieldset>
		<div class="margin4 controls-content margin-bottom">
			<button class="btn btn-default ajax-button" id="add-person" type="button">Add</button>
			<button class="btn cancel ajax-button" type="button" id="cancel-assoc">Cancel</button>
		</div>
	</div>
	<div id="assoc-summary">
		<div class="cart-container" id="added-associates" style="display: none;">
			<div class="result-row ">
				<div class="result-cell cell-icon">
					<span class="fa fa-user blue"></span>
				</div>
				<div class="result-cell cell-detail">
					<h3>Fred Albert Nerk</h3>
					<p>Director</p>
				</div>
				<div class="result-cell cell-action">
					<a class="edit ajax-link" href="" data-ajax-action="LHX3HqVtY2Ci74OFTbxWNMuoaDvhnBmczk2RHNqtI8A="><span>Edit</span></a>
					<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="Associates_Associates_0__IsEdit" name="Associates.Associates[0].IsEdit" type="hidden">
					&nbsp;
					<a id="LinkRemoveAssociate0" class="remove" href="" onclick="javascript:void(0);" data-ajax-action="RemoveAssociate" data-ajax-id="wQ1U7sFMOpq0RPiqsBiFdQ=="><span>Remove</span></a>
				</div>
			</div>
			<div class="result-row ">
				<div class="result-cell cell-icon">
					<span class="fa fa-user blue"></span>
				</div>
				<div class="result-cell cell-detail">
					<h3>Simon Arthur Bourke</h3>
					<p>Public Officer</p>
				</div>
				<div class="result-cell cell-action">
					<a class="edit ajax-link" href="" data-ajax-action="LHX3HqVtY2Ci74OFTbxWNMuoaDvhnBmczk2RHNqtI8A="><span>Edit</span></a>
					<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="Associates_Associates_0__IsEdit" name="Associates.Associates[0].IsEdit" type="hidden">
					&nbsp;
					<a id="LinkRemoveAssociate0" class="remove" href="" onclick="javascript:void(0);" data-ajax-action="RemoveAssociate" data-ajax-id="wQ1U7sFMOpq0RPiqsBiFdQ=="><span>Remove</span></a>
				</div>
			</div>
		</div>
		<div class="margin-top-075 margin-bottom">
			<button id="add-assoc" class="btn"><span class="fa fa-user blue"></span> Add associate</button>
		</div>
	</div>
	<div class="controls-container">
        <button class="btn btn-default ajax-button" id="save-persons" type="button">Save</button>
        <button class="btn cancel ajax-button" type="button" id="cancel-persons">Cancel</button>
    </div>
</div>
<script src="{{ site.baseurl }}/scripts/jquery.blockU.js"></script>
<script type="text/javascript">
	function scrollToAndFocus(id) {
		scrollToTargetElement(id);
		var target = $(id);
		if (target) {
			target.focus();
		}
	}
	
	$(document).ready(function () {
	
		$("#business-details").block({
			message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">Retrieving ABN details <img class="loading-ellipsis" src="{{ site.baseurl }}/img/ellipsis.gif" /></p>',
			css: {
				padding: "10px"
			},
			overlayCSS: {
				backgroundColor: '#bbb',
				borderRadius: '10px'
			}
		});
		window.setTimeout(function() {
			$("#business-details").unblock();
			$(".retrieve").show();
		}, 5000);
		
		$("#btn-apply, #edit-rego").click(function() {
			$("#main").hide();
			$("#tax-form").show('fast');
		});

		$("#btn-add-auth, #edit-auth").click(function() {
			$("#main").hide();
			$("#auth-form").show('fast');
		});
		
		$("#btn-cancel, #btn-save").click(function() {
			$("#tax-form").hide();
			$("#available-regos").hide();
			$("#rego-display").show();
			$("#declaration").show();
			$("#tax-declaration").show();
			$("#main").show();
			scrollToAndFocus("#rego-display");
		});
		
		$("#cancel-persons, #save-persons").click(function() {
			$("#auth-form").hide();
			$("#none-added").hide();
			$("#auth-display").show();
			$("#declaration").show();
			$("#auskey-declaration").show();
			$("#main").show();
			scrollToAndFocus("#auth-display");
		});

		$("#gst-cb").click(function() {
			if ($(this).is(":checked")) {
				$("#gst-form").show('fast');
			} else {
				$("#gst-form").hide('fast');
			}
		});
		
		$("#payg-cb").click(function() {
			if ($(this).is(":checked")) {
				$("#payg-form").show('fast');
			} else {
				$("#payg-form").hide('fast');
			}
		});
		
		$("#add-assoc").click(function() {
			$("#assoc-summary").hide();
			$("#save-persons, #cancel-persons").attr("disabled", true);
			$("#associate-form").show("fast");
		});
		
		$("#add-person, #cancel-assoc").click(function() {
			$("#associate-form").hide();
			$("#added-associates").show();
			$("#save-persons, #cancel-persons").removeAttr("disabled");
			$("#assoc-summary").show('fast');
		});
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

