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
		margin-left: -40px;
	}
	
	ul.reg-list li span {
		margin-right: 10px;
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

	table tbody:nth-of-type(n+2) tr:first-child td {
		border-top: 4px solid #e7e7e7;
	}
	
	button span.fa-user {
		margin-right: 10px;
		font-size: 125%;
	}
	button.ico-remove {
		float: right;
		font-size: 1rem !important;
		color: #fff;
		padding: 7px !important;
		padding-left: 30px !important;
		margin-left: 2px;
		font-weight: normal !important;
		background: url(../img/sprite-trash.png) 2px 2px no-repeat #444;
		background-size: 25px;
		border-radius: 25px;
		border-color: #999;		
	}
	
	button.ico-remove:hover, button.ico-remove:focus {
		background: url(../img/sprite-trash.png) 2px 2px no-repeat #000;
		background-size: 25px;
	}
	
	#registrations {
		position: relative;
	}
	
	#rego-select {
		width:320px;
		background-color: #eee;
	}
	
	span.select-spinner:before {
		position: absolute;
		content: url('{{ site.baseurl }}/img/ajax-loader.gif');
		left: -25px;
		top: 18px;
	}
	
	div.disabled,
	div.disabled button,
	div.disabled a,
	div.disabled label {
		color: #aaa !important;
	}
	
	 div.disabled a:hover {
		background-color: #FFF;
		text-decoration: underline;
	 }
	 
	 ul.btn-list li {
		margin-left: -12px;
	 }
	 
	 ul.btn-list > li > button {
		border: 1px solid transparent;
		background-color: transparent;
	 }
	 
	 ul.btn-list > li > button:hover,
	 ul.btn-list > li > button:focus {
		border: 1px solid #aaa;
		background-color: #ddd;
		border-radius: 5px;
	 }
	 
	 ul.btn-list > li > button:hover > span,
	 ul.btn-list > li > button:focus > span	 {
		display: inline !important;
	 }

	 ul.btn-list > li > button:hover > span.fa {
		margin-left: 10px;
	}

</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<div class="confirmation">
	<div id="main">
		<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
		<p>Here you can apply for additional registrations and authorisations for your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
		<h3>Business details</h3>
		<table id="business-details">
			<thead class="visuallyhidden">
				<tr>
					<th>Field item</th>
					<th>Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width="25%" class="field-name bold">ABN</td>
					<td width="75%" class="input-value">44 123 456 789</td>
				</tr>
				<tr>
					<td class="field-name bold">Entity name</td>
					<td class="input-value"><span class="spinner"><img src="{{ site.baseurl }}/img/ajax-loader.gif" alt="loading" /> </span><span class="retrieve">Really Awesome Business Pty Ltd</span></td>
				</tr>
				<tr>
					<td class="field-name bold">Email address</td>
					<td class="input-value">
						<p style="margin: 0"><span class="spinner"><img src="{{ site.baseurl }}/img/ajax-loader.gif" alt="loading" /> </span><span class="retrieve">mike.ross@business.com</span></p>
						<!-- <ul class="reg-list retrieve">
							<li><span class="fa fa-check green"></span> Goods and Services Tax (GST)</li>
							<li><span class="fa fa-check green"></span> Pay As You Go (PAYG) withholding</li>
						</ul> -->
					</td>
				</tr>
			</tbody>
		</table>
		<h3 id="taxreg-heading">Tax registrations</h3>
		<h4>Current registrations</h4>
		<p>The following roles have already been registered with the Australian Taxation Office (ATO):</p>
		<ul class="reg-list">
			<li><span class="fa fa-check green"></span> Goods &amp; Services Tax</li>
		</ul>
		<div id="rego-display" style="display: none;">
			<h4>Registrations added</h4>
			<p>You have provided details to apply for the following tax roles:</p>
			<table>
				<thead class="visuallyhidden">
					<tr>
						<th>Field item</th>
						<th>Input value</th>
					</tr>
				</thead>
				<tbody id="gst-display" style="display: none;">
					<tr>
						<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Goods &amp; Services Tax (GST)</th>
						<th>
							<button type="button" id="delete-gst" class="btn btn-default ico-remove">Remove</button>
							<button type="button" id="edit-gst" class="btn btn-default ico-edit">Edit</button>
						</th>
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
				<tbody id="payg-display" style="display: none;">
					<tr>
						<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Pay As You Go (PAYG) Withholding</th>
						<th>
							<button type="button" id="delete-payg" class="btn btn-default ico-remove">Remove</button>
							<button type="button" id="edit-payg" class="btn btn-default ico-edit">Edit</button>
						</th>
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
				<tbody id="fbt-display" style="display: none;">
					<tr>
						<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Fringe Benefits Tax (FBT)</th>
						<th>
							<button type="button" id="delete-fbt" class="btn btn-default ico-remove">Remove</button>
							<button type="button" id="edit-fbt" class="btn btn-default ico-edit">Edit</button>
						</th>
					</tr>
					<tr>
						<td class="field-name">Registration start date</td>
						<td class="input-value">18/04/2017</td>
					</tr>
                </tbody>
				<tbody id="ftc-display" style="display: none;">
					<tr>
						<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Fuel Tax Credits (FTC)</th>
						<th>
							<button type="button" id="delete-ftc" class="btn btn-default ico-remove">Remove</button>
							<button type="button" id="edit-ftc" class="btn btn-default ico-edit">Edit</button>
						</th>
					</tr>
					<tr>
						<td class="field-name">Registration start date</td>
						<td class="input-value">5/04/2017</td>
					</tr>
					<tr>
						<td class="field-name">Heavy vehicles on public roads?</td>
						<td class="input-value">Yes</td>
					</tr>
					<tr>
						<td class="field-name">Fuel type(s)</td>
						<td class="input-value">Petrol</td>
					</tr>
                </tbody>
			</table>
		</div>
		<h4>Available registrations</h4>
		<p>Select from the following to apply for the associated tax registration:</p>
		<ul class="btn-list">
			<li id="opt-payg"><button id="apply-payg">Pay As You Go (PAYG) Withholding <span class="fa fa-plus orange" style="display: none"></span><span class="orange" style="display: none;"><strong> add</strong></span></button></li>
			<li id="opt-fbt"><button id="apply-fbt">Fringe Benefits Tax (FBT)  <span class="fa fa-plus orange" style="display: none"></span><span class="orange" style="display: none;"><strong> add</strong></span></button></li>
			<li><button>Luxury Car Tax (LCT)  <span class="fa fa-plus orange" style="display: none"></span><span class="orange" style="display: none;"><strong> add</strong></span></button></li>
			<li id="opt-ftc"><button id="apply-ftc">Fuel Tax Credits (FTC)  <span class="fa fa-plus orange" style="display: none"></span><span class="orange" style="display: none;"><strong> add</strong></span></button></li>
			<li><button>Wine Equalisation Tax (WET)  <span class="fa fa-plus orange" style="display: none"></span><span class="orange" style="display: none;"><strong> add</strong></span></button></li>
		</ul>
		<!-- <div id="registrations" class="grid-row clearfix">
			<div class="col12 last">
				<span class="select-spinner"></span>
				<select id="rego-select" disabled>
					<option id="opt-noopt" value="">loading details</option>
					<option id="opt-gst" value="gst">Goods and Services Tax (GST)</option>
					<option id="opt-payg" value="payg">Pay As You Go (PAYG) Withholding</option>
					<option>Fringe Benefits Tax (FBT)</option>
					<option>Luxury Car Tax (LCT)</option>
					<option>Fuel Tax Credits (FTC)</option>
					<option>Wine Equalisation Tax (WET)</option>
				</select>
				<button id="btn-apply" class="btn btn-inline ajax-button" type="button" disabled>Apply</button>
			</div>
		</div> -->
		<div id="contacts">
			<h3>Authorised contacts</h3>
			<div>
				<p id="none-added">You may enter details here of persons authorised to be contacted by the Autralian Taxation Office (ATO) regarding your application.</p>
				<div id="auth-display" class="margin-top-075" style="display: none;">
					<table class="margin-bottom-075">
						<thead class="visuallyhidden">
							<tr>
								<th>Field item</th>
								<th>Input value</th>
							</tr>
						</thead>
						<tbody id="ass1" style="display: none;">
							<tr>
								<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Fred Nerk</th>
								<th>
									<button type="button" id="delete-ass1" class="btn btn-default ico-remove">Remove</button>
									<button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button>
								</th>
							</tr>
							<tr>
								<td class="field-name">Position</td>
								<td class="input-value">Accountant</td>
							</tr>
							<tr>
								<td class="field-name">Email</td>
								<td class="input-value">fred@email.com</td>
							</tr>
							<tr>
								<td class="field-name">Business hours phone</td>
								<td class="input-value">55555555</td>
							</tr>
							<tr>
								<td class="field-name">Mobile</td>
								<td class="input-value">66666666</td>
							</tr>
							<tr>
								<td class="field-name">After hours phone</td>
								<td class="input-value">0455555555</td>
							</tr>
						</tbody>
						<tbody id="ass2" style="display: none;">
							<tr>
								<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Simon Bourke</th>
								<th>
									<button type="button" id="delete-ass2" class="btn btn-default ico-remove">Remove</button>
									<button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button>
								</th>
							</tr>
							<tr>
								<td class="field-name">Position</td>
								<td class="input-value">Secretary</td>
							</tr>
							<tr>
								<td class="field-name">Email</td>
								<td class="input-value">simon@email.com</td>
							</tr>
							<tr>
								<td class="field-name">Business hours phone</td>
								<td class="input-value">11111111</td>
							</tr>
							<tr>
								<td class="field-name">Mobile</td>
								<td class="input-value">22222222</td>
							</tr>
							<tr>
								<td class="field-name">After hours phone</td>
								<td class="input-value">0433333333</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="margin-top-075">
					<button id="btn-add-contact" class="btn btn-inline ajax-button" type="button">Add contact</button>
				</div>
			</div>
		</div>

		<div id="declaration" class="disabled">
			<h3 class="larger">Declaration</h3>
			<div id="decl-types" style="display: none;">
				<p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
				<ul>
					<li id="gst-decl" style="display: none;">Goods &amp; Service Tax</li>
					<li id="payg-decl" style="display: none;">Pay As You Go (PAYG) Withholding</li>
				</ul>
			</div>
			<p>Please complete the declaration to submit your changes.</p>
			<div id="ajax-container-for-declaration">
				<div class="declaration-wrapper margin-top-075">
					<div class="grid-row">
						<fieldset class="custom-controls">
							<!-- <legend class="larger no-padding">Tax Registrations</legend> -->
							<p>I, <strong>Michael Anthony Ross</strong>, declare that:</p>
							<p class="custom-controls">
								<input data-val="true" data-val-required="The ATOTrueAndCorrectCheckBox field is required." id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true" disabled><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
								<label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">The information provided in this application is true and correct. </label>
							</p>
						</fieldset>
					</div>
					<div class="grid-row">
						<h4>Privacy</h4>
						<p>The information provided to the ABR and the ATO in this form may include personal information. Please refer to the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
					</div>
				</div>
			</div>
			<div>
				<button class="btn btn-default next" id="next-cd-btn" type="button" disabled>Confirm and submit</button>
			</div>
		</div>
	</div>
</div>
<div id="gst-form" style="display: none">
	<fieldset class="margin-top-075">
		<legend class="larger">Goods &amp; Services Tax (GST)</legend>
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
				<div class="col8 last custom-controls">
					<p>
						<input id="GstDetails_GstTurnoverTypes_0_" name="GstDetails.GstTurnover" type="radio" value="Item074999">
						<label for="GstDetails_GstTurnoverTypes_0_" id="gst_turnover_label_0">$0 - $74,999</label>
					</p>
					<p>
						<input id="GstDetails_GstTurnoverTypes_1_" name="GstDetails.GstTurnover" type="radio" value="Item75000149999">
						<label for="GstDetails_GstTurnoverTypes_1_" id="gst_turnover_label_1">$75,000 - $149,999</label>
					</p>
					<p>
						<input id="GstDetails_GstTurnoverTypes_2_" name="GstDetails.GstTurnover" type="radio" value="Item1500001999999">
						<label for="GstDetails_GstTurnoverTypes_2_" id="gst_turnover_label_2">$150,000 - $1,999,999</label>
					</p>
					<p>
						<input id="GstDetails_GstTurnoverTypes_3_" name="GstDetails.GstTurnover" type="radio" value="Item200000019999999">
						<label for="GstDetails_GstTurnoverTypes_3_" id="gst_turnover_label_3">$2,000,000 - $19,999,999</label>
					</p>
					<p>
						<input id="GstDetails_GstTurnoverTypes_4_" name="GstDetails.GstTurnover" type="radio" value="Item20MillionAndover">
						<label for="GstDetails_GstTurnoverTypes_4_" id="gst_turnover_label_4">$20 million and over</label>
					</p>
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
	<div class="controls-container">
		<button id="gst-save" class="btn btn-default ajax-button" type="button">Save</button>
		<button id="gst-cancel" class="btn ajax-button" type="button">Cancel</button>
	</div>
</div>
<div id="payg-form" style="display: none;">
	<fieldset>
		<legend class="larger">Pay As You Go (PAYG) Withholding</legend>
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
		<button id="payg-save" class="btn btn-default ajax-button" type="button">Save</button>
		<button id="payg-cancel" class="btn ajax-button" type="button">Cancel</button>
	</div>
</div>
<div id="fbt-form" style="display: none">
	<h2>Fringe Benefits Tax (FBT)</h2>
	<fieldset>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="FbtDetails_RegistrationDate">What is the start date of your FBT registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
			</div>
			<div class="col8 last">
				<input class="taxdate hasDatepicker" data-val="true" data-val-date="The field RegistrationDate must be a date." id="fbt_start_date" name="FbtDetails.RegistrationDate" type="text" value="05/04/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-taxationfbtdetailsregistrationdate"><span>Help - Fringe Benefits Tax (FBT)</span></a>
				<br><div>Can't be before your ABN start date.</div>
			</div>
		</div>
		<div class="grid-row grid-row-reveal">
			<div class="col4">
				<p class="label input-right">Do you want to enter bank account details?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="FbtDetails_CaptureBankDetails_Yes">
						<input data-ajax-action="UpdateFbtBankDetails" data-ajax-target="ajax-container-for-taxationdetails" data-val="true" data-val-required="The CaptureBankDetails field is required." id="FbtDetails_CaptureBankDetails_Yes" name="FbtDetails.CaptureBankDetails" type="radio" value="Yes">
						<span id="fbt_enterbankdetails_yes">Yes</span>
					</label>
					<label class="off label-right" for="FbtDetails_CaptureBankDetails_No">
						<input checked="checked" data-ajax-action="UpdateFbtBankDetails" data-ajax-target="ajax-container-for-taxationdetails" id="FbtDetails_CaptureBankDetails_No" name="FbtDetails.CaptureBankDetails" type="radio" value="No">
						<span id="fbt_enterbankdetails_no">No</span>
					</label>
				</div> 
				<br><p>If you've already entered financial account details for refunds on this form, and would like to use that account for FBT refunds, select no to continue.</p>
			</div>
		</div>
	</fieldset>
	<div class="controls-container">
		<div class="controls-content">
			<button class="btn btn-default" id="fbt-save" type="button">Save</button>
			<button class="btn cancel" id="fbt-cancel" type="button">Cancel</button>
		</div>
	</div>
</div>
<div id="ftc-form" style="display: none;">
	<h2>Fuel Tax Credits (FTC)</h2>
	<div class="grid-row">
		<div class="col4">
			<label class="input-right" for="FtcDetails_RegistrationDate">What is the start date of your FTC registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
		</div>
		<div class="col8 last">
			<input class="taxdate hasDatepicker" data-val="true" data-val-date="The field RegistrationDate must be a date." id="FtcDetails_RegistrationDate" name="FtcDetails.RegistrationDate" type="text" value="05/04/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-taxationfctdetailsregistrationdate"><span>Help - FTC start date</span></a>
			<br>Must be your GST start date or later.
		</div>
	</div>
	<fieldset class="grid-row" id="FtcDetails_HeavyVehicleYesNo" tabindex="-1">
		<div class="col4">
			
			<p class="label input-right" id="FtcDetails_HeavyVehicleYesNo_lbl">Will your business use fuel in a vehicle greater than 4.5 tonnes Gross Vehicle Mass (GVM) to travel on public roads?</p>
		</div>
		<div class="col8 last">
			<div class="radio-toggle">
				<label class="on label-left" for="FtcDetails_HeavyVehicleYesNo_Yes">
					<input id="FtcDetails_HeavyVehicleYesNo_Yes" name="FtcDetails.HeavyVehicleYesNo" type="radio" value="Yes">
					<span>Yes</span>
				</label>
				<label class="off label-right" for="FtcDetails_HeavyVehicleYesNo_No">
					<input id="FtcDetails_HeavyVehicleYesNo_No" name="FtcDetails.HeavyVehicleYesNo" type="radio" value="No">
					<span>No</span>
				</label>
			</div> <a class="cd-btn help" href="#help-taxationfctdetailsheavyvehicleyesno"><span>Help - Fuel used in vehicles to travel on public roads</span></a>
			
		</div>
	</fieldset>
	<fieldset class="grid-row" id="FtcDetails_IsFuelProvided" tabindex="-1">
		<div class="col4">
			<p class="label input-right ">What type of fuel will your business use? <a class="cd-btn help" href="#help-taxationfctdetailsfueltype"><span>Help - Types of fuel</span></a></p>
		</div>
		<div class="col8 last custom-controls">
			<p>
				<input data-val="true" data-val-required="The IsPetrolFuel field is required." id="FtcDetails_IsPetrolFuel" name="FtcDetails.IsPetrolFuel" type="checkbox" value="true"><input name="FtcDetails.IsPetrolFuel" type="hidden" value="false">
				<label for="FtcDetails_IsPetrolFuel">Petrol</label>
			</p>
			<p>
				<input data-val="true" data-val-required="The IsDieselFuel field is required." id="FtcDetails_IsDieselFuel" name="FtcDetails.IsDieselFuel" type="checkbox" value="true"><input name="FtcDetails.IsDieselFuel" type="hidden" value="false">
				<label for="FtcDetails_IsDieselFuel">Diesel</label>
			</p>
			<p>
				<input data-val="true" data-val-required="The IsOtherFuel field is required." id="FtcDetails_IsOtherFuel" name="FtcDetails.IsOtherFuel" type="checkbox" value="true"><input name="FtcDetails.IsOtherFuel" type="hidden" value="false">
				<label for="FtcDetails_IsOtherFuel">Other</label>
			</p>
		</div>
	</fieldset>
	<div class="controls-container">
		<div class="controls-content">
			<button id="ftc-save" class="btn btn-default" type="button">Save</button>
			<button id="ftc-cancel" class="btn cancel" type="button">Cancel</button>
		</div>
	</div>
</div>
<div id="contact-form" class="confirmation" style="display: none;">
	<fieldset id="Associates_PersonAssociate_Roles">
		<legend class="has-help larger">Authorised contact</legend>
		<p>You can enter a new contact or copy and modify the details from an existing contact.</p>
		<table>
			<tbody>
				<tr>
					<td>Fred Nerk</td>
					<td>Accountant</td>
					<td><button type="button" id="copy-contact1" class="btn btn-default ico-edit">Copy</button></td>
				</tr>
				<tr>
					<td>Simon Bourke</td>
					<td>Secretary</td>
					<td><button type="button" id="copy-contact2" class="btn btn-default ico-edit">Copy</button></td>
				</tr>
			</tbody>
		</table>
		<h3 class="margin4">Authorised contact details</h3>
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
				<label class="input-right" for="Associates_PersonAssociate_FamilyName">Family name</label>
			</div>
			<div class="col8 last">
				<input id="Associates_PersonAssociate_FamilyName" name="Associates.PersonAssociate.FamilyName" type="text" value=""> 
				
			</div>
		</div>

		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="Associates_PersonAssociate_TaxFileNumber">Position</label>
			</div>
			<div class="col8 last">
				<input id="Associates_PersonAssociate_TaxFileNumber" name="Associates.PersonAssociate.TaxFileNumber" type="text" value=""> <a class="cd-btn help" href="#help-businessdetailspersondetailstaxfilenumber"><span>Help - Tax File Number (TFN)</span></a>
				
			</div>
		</div>
		
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone">Business hours phone</label>
			</div>
			<div class="col8 last">
				<input id="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone" name="AuthorisedContacts.AuthorisedContact.BusinessHoursPhone" type="text" value=""> 
				
			</div>
		</div>
		
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone1">After hours phone</label>
			</div>
			<div class="col8 last">
				<input id="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone1" name="AuthorisedContacts.AuthorisedContact.BusinessHoursPhone1" type="text" value=""> 
				
			</div>
		</div>
		
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone2">Mobile</label>
			</div>
			<div class="col8 last">
				<input id="AuthorisedContacts_AuthorisedContact_BusinessHoursPhone2" name="AuthorisedContacts.AuthorisedContact.BusinessHoursPhone2" type="text" value=""> 
				
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
		
	</fieldset>
	<div class="controls-content margin-bottom">
		<button class="btn btn-default ajax-button" id="add-contact" type="button">Add</button>
		<button class="btn cancel ajax-button" type="button" id="cancel-contact">Cancel</button>
	</div>
</div>
<div id="dialogOne" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the application?</p> 
	<input id="remove-gst" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogOne");'>Cancel</a>
</div>
<div id="dialogTwo" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the application?</p> 
	<input id="remove-payg" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogTwo");'>Cancel</a>
</div>
<div id="dialogThree" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the associate?</p> 
	<input id="remove-ass1" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogThree");'>Cancel</a>
</div>
<div id="dialogFour" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the associate?</p> 
	<input id="remove-ass2" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogFour");'>Cancel</a>
</div>
<div id="dialogFive" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the application?</p> 
	<input id="remove-fbt" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogFive");'>Cancel</a>
</div>
<div id="dialogSix" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want remove the application?</p> 
	<input id="remove-ftc" type="button" class="btn btn-default" value="Yes, remove"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogSix");'>Cancel</a>
</div>

<script src="{{ site.baseurl }}/scripts/vadialog.js"></script> 
<script type="text/javascript">
	visionaustralia.addDialog("delete-gst", "dialogOne");
	visionaustralia.addDialog("delete-payg", "dialogTwo");
	visionaustralia.addDialog("delete-ass1", "dialogThree");
	visionaustralia.addDialog("delete-ass2", "dialogFour");
	visionaustralia.addDialog("delete-fbt", "dialogFive");
	visionaustralia.addDialog("delete-ftc", "dialogSix");
</script>
<script src="{{ site.baseurl }}/scripts/jquery.blockUI.js"></script>
<script type="text/javascript">
	function scrollToAndFocus(id) {
		scrollToTargetElement(id);
		var target = $(id);
		if (target) {
			target.focus();
		}
	}
	
	$(document).ready(function () {
	
		//$("#business-details").block({
		//	message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">Retrieving ABN details <img class="loading-ellipsis" src="{{ site.baseurl }}/img/ellipsis.gif" /></p>',
		//	css: {
		//		padding: "10px"
		//	},
		//	overlayCSS: {
		//		backgroundColor: '#bbb',
		//		borderRadius: '10px'
		//	}
		//});
		window.setTimeout(function() {
			// $("#business-details").unblock();
			$(".retrieve").fadeIn('slow');
			$(".spinner, .select-spinner").hide();
			$("#opt-noopt").html("--- select registration ---");
			$("#rego-select").removeAttr("disabled").css("background-color", "#fff");
		}, 4000);
		
		$("#rego-select").change(function(){
			if ($(this).val() == "")
				$("#btn-apply").attr("disabled", true);
			else
				$("#btn-apply").removeAttr("disabled");
		});
		
		$("#btn-apply").click(function() {
			$(this).blur();
			switch ($("#rego-select").val()) {
				case "gst":
					$("#main").hide();
					$("#gst-form").show('fast');
					break;
				case "payg":
					$("#main").hide();
					$("#payg-form").show('fast');
					break;
			}
		});
		
		$("#apply-payg, #edit-payg").click(function() {
			$("#main").hide();
			$("#payg-form").show('fast');
		});

		$("#apply-fbt, #edit-fbt").click(function() {
			$("#main").hide();
			$("#fbt-form").show('fast');
		});
		
		$("#apply-ftc, #edit-ftc").click(function() {
			$("#main").hide();
			$("#ftc-form").show('fast');
		});
		
		$("#edit-gst").click(function(){
			$("#main").hide();
			$("#gst-form").show('fast');
		});
		
		$("#gst-save").click(function() {
			$("#gst-form").hide();
			$("#no-regos-added").hide();
			$("#rego-display").show();
			$("#contacts").show();
			// $("#gst-decl").show();
			// $("#decl-types").show();
			// $("#next-cd-btn").removeAttr("disabled");
			$("#ATOTrueAndCorrectCheckBox").removeAttr("disabled");
			$("#declaration").removeClass("disabled");
			$("#gst-display").show();
			$("#opt-gst").hide();
			$("#rego-select").val("");
			$("#main").show();
			scrollToAndFocus("#taxreg-heading");
		});
		
		$("#gst-cancel").click(function() {
			$("#gst-form").hide();
			$("#main").show();
		});
				
		$("#fbt-save").click(function() {
			$("#fbt-form").hide();
			$("#no-regos-added").hide();
			$("#rego-display").show();
			// $("#contacts").show();
			// $("#gst-decl").show();
			// $("#decl-types").show();
			// $("#next-cd-btn").removeAttr("disabled");
			$("#ATOTrueAndCorrectCheckBox").removeAttr("disabled");
			$("#declaration").removeClass("disabled");
			$("#fbt-display").show();
			$("#opt-fbt").hide();
			$("#rego-select").val("");
			$("#main").show();
			scrollToAndFocus("#taxreg-heading");
		});
		
		$("#fbt-cancel").click(function() {
			$("#fbt-form").hide();
			$("#main").show();
		});
		
		$("#edit-payg").click(function(){
			$("#main").hide();
			$("#payg-form").show('fast');
		});
				
		$("#payg-save").click(function() {
			$("#payg-form").hide();
			$("#no-regos-added").hide();
			$("#rego-display").show();
			$("#contacts").show();
			$("#ATOTrueAndCorrectCheckBox").removeAttr("disabled");
			$("#declaration").removeClass("disabled");
			$("#payg-display").show();
			$("#tax-declaration").show();
			$("#opt-payg").hide();
			$("#rego-select").val("");
			$("#main").show();
			scrollToAndFocus("#taxreg-heading");
		});
		
		$("#payg-cancel").click(function() {
			$("#payg-form").hide();
			$("#main").show();
		});
		
		$("#ftc-save").click(function() {
			$("#ftc-form").hide();
			$("#no-regos-added").hide();
			$("#rego-display").show();
			$("#ATOTrueAndCorrectCheckBox").removeAttr("disabled");
			$("#declaration").removeClass("disabled");
			$("#ftc-display").show();
			$("#tax-declaration").show();
			$("#opt-ftc").hide();
			$("#rego-select").val("");
			$("#main").show();
			scrollToAndFocus("#taxreg-heading");
		});
		
		$("#ftc-cancel").click(function() {
			$("#ftc-form").hide();
			$("#main").show();
		});
		
		$("#add-contact").click(function() {
			$("#associate-form").hide();
			$("#none-added").hide();
			$("#auth-display").show();
			$("#contacts").show();
			$("#declaration").show();
			$("#auskey-declaration").show();
			$("#main").show();
			$("#auth-display table tbody:hidden").first().show();
			scrollToAndFocus("#contacts");
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
		
		$("#remove-gst").click(function() {
			visionaustralia.closeDialog("dialogOne");
			$("#gst-display").hide();
			$("#opt-gst").show();
			$("#gst-decl").hide();
			if ($("#rego-display table tbody:visible").length == 0) {
				$("#declaration").addClass("disabled");
				$("#no-regos-added").show();
				$("#rego-display").hide();
				$("#main").show();
			}
		});
		
		$("#remove-payg").click(function() {
			visionaustralia.closeDialog("dialogTwo");
			$("#payg-display").hide();
			$("#opt-payg").show();
			$("#payg-decl").hide();
			if ($("#rego-display table tbody:visible").length == 0) {
				$("#declaration").addClass("disabled");
				$("#no-regos-added").show();
				$("#rego-display").hide();
				$("#main").show();
			}
		});
		
		$("#remove-fbt").click(function() {
			visionaustralia.closeDialog("dialogFive");
			$("#fbt-display").hide();
			$("#opt-fbt").show();
			$("#fbt-decl").hide();
			if ($("#rego-display table tbody:visible").length == 0) {
				$("#declaration").addClass("disabled");
				$("#no-regos-added").show();
				$("#rego-display").hide();
				$("#main").show();
			}
		});
		
		$("#remove-ftc").click(function() {
			visionaustralia.closeDialog("dialogSix");
			$("#ftc-display").hide();
			$("#opt-ftc").show();
			$("#ftc-decl").hide();
			if ($("#rego-display table tbody:visible").length == 0) {
				$("#declaration").addClass("disabled");
				$("#no-regos-added").show();
				$("#rego-display").hide();
				$("#main").show();
			}
		});
		
		$("#btn-add-contact, #edit-auth").click(function() {
			$(this).blur();
			$("#main").hide();
			$("#contact-form").show('fast');
		});
		
		$("#add-contact, #cancel-contact").click(function() {
			$(this).blur();
			$("#contact-form").hide();
			$("#main").show();
		});

		$("#ATOTrueAndCorrectCheckBox").click(function() {
			if ($(this).is(":checked")) {
				$("#next-cd-btn").removeAttr("disabled");
			} else {
				$("#next-cd-btn").attr("disabled", true);
			}
		});
		
		$("#remove-ass1").click(function() {
			visionaustralia.closeDialog("dialogThree");
			$("#ass1").hide();
			if (!$("#ass2").is(":visible")) {
				$("#none-added").show();
				$("#auth-display").hide();
				$("#main").show();
			}
		});
		
		$("#remove-ass2").click(function() {
			visionaustralia.closeDialog("dialogFour");
			$("#ass2").hide();
			if (!$("#ass1").is(":visible")) {
				$("#none-added").show();
				$("#auth-display").hide();
				$("#main").show();
			}
		});
		
		$("#copy-contact1").click(function() {
			$("#Associates_PersonAssociate_GivenName").val("Fred");
			$("#Associates_PersonAssociate_FamilyName").val("Nerk");
			$("#Associates_PersonAssociate_TaxFileNumber").val("Accountant");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone").val("55555555");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone1").val("66666666");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone2").val("0455555555");
			$("#ContactDetails_Email").val("fred@email.com");
		});
		
		$("#copy-contact2").click(function() {
			$("#Associates_PersonAssociate_GivenName").val("Simon");
			$("#Associates_PersonAssociate_FamilyName").val("Bourke");
			$("#Associates_PersonAssociate_TaxFileNumber").val("Secretary");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone").val("11111111");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone1").val("22222222");
			$("#AuthorisedContacts_AuthorisedContact_BusinessHoursPhone2").val("0433333333");
			$("#ContactDetails_Email").val("simon@email.com");
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

