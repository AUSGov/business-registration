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
		font-size: 150%;
		margin-right: 10px;
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
	
</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for additional registrations and authorisations for your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div id="business-details">
	<div id="main-content">
		<h3>Business details</h3>
		<p><strong>Really Awesome Business Pty Ltd</strong> (ABN: 44 123 456 789)</p>
		<h3>Tax registrations</h3>
		<p>Content about tax registrations here.<a class="cd-btn help" href="#"><span>more information</span></a></p>
		<div class="grid-row clearfix">
			<div class="col6">
				<h4>Currently registered for</h4>
				<ul class="reg-list">
					<li><span class="fa fa-check green"></span> Goods and Services Tax (GST)</li>
					<li><span class="fa fa-check green"></span> Pay As You Go (PAYG) withholding</li>
				</ul>
			</div>
			<div class="col6 last">
				<h4>Registrations to be added</h4>
				<ul id="rego-list" class="reg-list">
					<li><span class="fa fa-plus orange"></span> Fringe Benefits Tax (FBT)</li>
					<li><span class="fa fa-plus orange"></span> Wine Equalisation Tax (WET)</li>
				</ul>
			</div>
		</div>
		<p>
			<button id="btn-add-rego" class="btn btn-inline ajax-button" type="button">Add registration</button>
			<select id="tax-select" style="width: 240px">
				<option>--- select registration ---</option>
				<option id="opt-lct" value="lct">Luxury Car Tax (LCT)</option>
				<option id="opt-ftc" value="ftc">Fuel Tax Credits (FTC)</option>
			</select>
		</p>
		<h3>Government credentials</h3>
		<p>Content about Government credentials here. <a class="cd-btn help" href="#"><span>more information</span></a></p>
		<h4>Users to be authorised</h4>
		<ul class="reg-list">
			<li><span class="fa fa-plus orange"></span> John Smith</li>
		</ul>
		<button class="btn btn-inline ajax-button" type="button">Add user</button>
		<h3>Contact details</h3>
		<p>Content about contact details are what the changes will affect. <a class="cd-btn help" href="#"><span>more information</span></a></p>
		<table id="contact-details">
			<thead class="visuallyhidden">
				<tr>
					<th>Field item</th>
					<th>Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th colspan="2">Business addresses <button id="edit-contact-details" type="button" class="btn btn-default ico-edit">Edit</button></th>
				</tr>
				<tr>
					<td width="30%" class="field-name bold">Main address</td>
					<td width="70%" class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
				</tr>
				<tr>
					<td class="field-name bold">Postal address</td>
					<td class="input-value">PO Box 9999 Scarborough, WA, 6019</td>
				</tr>
			</tbody>
		</table>
		<table id="contact-details">
			<thead class="visuallyhidden">
				<tr>
					<th colspan="2">Field item</th>
					<th colspan="2">Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th colspan="2">Authorised contacts <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=1029&amp;s=1">Edit</button></th>
				</tr>
				<tr>
					<td width="30%" class="field-name bold">Fred Nerk</td>
					<td width="70%" class="input-value">Director</td>
				</tr>
				<tr>
					<td class="field-name bold">John Smith</td>
					<td class="input-value">Secretary</td>
				</tr>
			</tbody>
		</table>
		<h3 class="larger">Declaration</h3>
		<p>Please complete the declaration below to submit your changes.</p>
		<div id="ajax-container-for-declaration">
			<div class="declaration-wrapper margin-top-075">
				<div id="declaration-text" class="grid-row">
                    <fieldset class="custom-controls">
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
                    <fieldset class="custom-controls">
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
					<p>The information provided to the ATO in this form may include personal information. Please refer to the <a href="https://www.ato.gov.au/About-ATO/Access,-accountability-and-reporting/In-detail/Privacy-notices/Privacy-policy/" target="_blank">ATO privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
				</div>
			</div>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and submit</button>
			</div>
		</div>
	</div>
</div>
<div id="lct-form" style="display: none;">
	<h3 class="margin4">Luxury Car Tax (LCT)</h3>
	<fieldset>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="LctDetails_RegistrationDate">What is the start date of your LCT registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
			</div>
			<div class="col8 last">
				<input class="taxdate hasDatepicker" data-val="true" data-val-date="The field RegistrationDate must be a date." id="LctDetails_RegistrationDate" name="LctDetails.RegistrationDate" type="text" value="05/04/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-taxationlctdetailsregistrationdate"><span>Help - LCT start date</span></a>
				<br>Must be your GST start date or later.
			</div>
		</div>

		<fieldset class="grid-row" id="LctDetails_AnnualLiability" tabindex="-1">
			<div class="col4">
				<p class="label input-right ">Estimate how much LCT you will pay in the next 12 months. <a class="cd-btn help" href="#help-taxationlctdetailsannualliability"><span>Help - Estimate of LCT you will pay in the next 12 months</span></a></p>
			</div>
			<div class="col8 last custom-controls">
				<p>
					<input id="LctDetails_AnnualLiabilities_0_" name="LctDetails.AnnualLiability" type="radio" value="$0 to $49,999">
					<label for="LctDetails_AnnualLiabilities_0_">$0 to $49,999</label>
				</p>
				<p>
					<input id="LctDetails_AnnualLiabilities_1_" name="LctDetails.AnnualLiability" type="radio" value="$50,000 to $99,999">
					<label for="LctDetails_AnnualLiabilities_1_">$50,000 to $99,999</label>
				</p>
				<p>
					<input id="LctDetails_AnnualLiabilities_2_" name="LctDetails.AnnualLiability" type="radio" value="$100,000 to $499,999">
					<label for="LctDetails_AnnualLiabilities_2_">$100,000 to $499,999</label>
				</p>
				<p>
					<input id="LctDetails_AnnualLiabilities_3_" name="LctDetails.AnnualLiability" type="radio" value="$500,000 to $5 million">
					<label for="LctDetails_AnnualLiabilities_3_">$500,000 to $5 million</label>
				</p>
				<p>
					<input id="LctDetails_AnnualLiabilities_4_" name="LctDetails.AnnualLiability" type="radio" value="More than $5 million">
					<label for="LctDetails_AnnualLiabilities_4_">More than $5 million</label>
				</p>
			</div>
		</fieldset>

		<fieldset class="grid-row" id="LctDetails_TurnoverPercentage" tabindex="-1">
			<legend class="margin4">
				What percentage of your luxury car turnover is from the following? <a class="cd-btn help" href="#help-taxationlctdetailsmainactivitypercentage"><span>Help - Percentage of luxury car turnover</span></a>
				
			</legend>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_ImportingPercentage">Importing</label>
				</div>
				<div class="col8 last custom-controls">
					<input class="input-percent" data-val="true" data-val-number="The field ImportingPercentage must be a number." id="LctDetails_ImportingPercentage" name="LctDetails.ImportingPercentage" type="number" value=""> 
					<div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-controls="LctDetails_ImportingPercentage" style="left: 0%;"></span></div>
					
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_ManufacturingPercentage">Manufacturing</label>
				</div>
				<div class="col8 last custom-controls">
					<input class="input-percent" data-val="true" data-val-number="The field ManufacturingPercentage must be a number." id="LctDetails_ManufacturingPercentage" name="LctDetails.ManufacturingPercentage" type="number" value=""> 
					<div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-controls="LctDetails_ManufacturingPercentage" style="left: 0%;"></span></div>
					
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_RetailingPercentage">Retailing</label>
				</div>
				<div class="col8 last custom-controls">
					<input class="input-percent" data-val="true" data-val-number="The field RetailingPercentage must be a number." id="LctDetails_RetailingPercentage" name="LctDetails.RetailingPercentage" type="number" value=""> 
					<div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-controls="LctDetails_RetailingPercentage" style="left: 0%;"></span></div>
					
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_WholesalingPercentage">Wholesaling</label>
				</div>
				<div class="col8 last custom-controls">
					<input class="input-percent" data-val="true" data-val-number="The field WholesalingPercentage must be a number." id="LctDetails_WholesalingPercentage" name="LctDetails.WholesalingPercentage" type="number" value=""> 
					<div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-controls="LctDetails_WholesalingPercentage" style="left: 0%;"></span></div>
					
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<p class="input-right "><strong>Total</strong></p>
				</div>
				<div class="col1">
					<p style="text-align: right; padding-right: 6px;"><strong><span id="totalpercentage">0%</span></strong></p>
				</div>
				<div class="col4 last">
					<p><span class="field-note">Cannot exceed 100%</span></p>
				</div>
			</div>
		</fieldset>

		<fieldset class="grid-row" tabindex="-1">
			<div class="col4">
				<label class="input-right" for="LctDetails_MainActivity">Which of the following best describes your activity in the luxury car industry?</label>
			</div>
			<div class="col8 last custom-controls">
				<select id="LctDetails_MainActivity" name="LctDetails.MainActivity">
					<option value="">Please select...</option>
					<option value="Importer">Importing</option>
					<option value="Manufacturer">Manufacturing</option>
					<option value="Retailer">Retailing</option>
					<option value="Wholesaler">Wholesaling</option>
				</select> 				
			</div>
		</fieldset>

		<fieldset class="grid-row" id="LctDetails_OnEveryActivityStatementYesNo" tabindex="-1">
			<div class="col4">
				
				<p class="label input-right" id="LctDetails_OnEveryActivityStatementYesNo_lbl">Will you need to report LCT on every activity statement?</p>
			</div>
			<div class="col8 last">
				<div class="radio-toggle">
					<label class="on label-left" for="LctDetails_OnEveryActivityStatementYesNo_Yes">
						<input id="LctDetails_OnEveryActivityStatementYesNo_Yes" name="LctDetails.OnEveryActivityStatementYesNo" type="radio" value="Yes">
						<span>Yes</span>
					</label>
					<label class="off label-right" for="LctDetails_OnEveryActivityStatementYesNo_No">
						<input id="LctDetails_OnEveryActivityStatementYesNo_No" name="LctDetails.OnEveryActivityStatementYesNo" type="radio" value="No">
						<span>No</span>
					</label>
				</div> <a class="cd-btn help" href="#help-taxationlctdetailsoneveryactivitystatementyesno"><span>Help - Reporting LCT on your BAS</span></a>
				
			</div>
		</fieldset>

	
		<script src="{{ site.baseurl }}/scripts/jquery-ui.min.js"></script>
		<script src="{{ site.baseurl }}/scripts/percentageslider.js"></script>
	</fieldset>
		
		<div class="grid-row">
			<div class="margin4">
				<button id="btn-lct-cancel" class="btn cancel ajax-button" type="button">Cancel</button>
				<button id="btn-lct-save" class="btn btn-default ajax-button next" type="button">Save</button>
			</div>
		</div>
</div>

<div id="ftc-form">
	<h2 class="margin4">Fuel Tax Credits (FTC)</h2>
	<div>
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
	</div>

	<div class="grid-row margin-top-075">
		<div class="margin4">
			<button id="btn-ftc-cancel" class="btn cancel ajax-button" type="button">Cancel</button>
			<button id="btn-ftc-save" class="btn btn-default ajax-button next" type="button">Save</button>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function () {
	
		navigationWithinPage();
		
		$("#btn-add-rego").click(function() {
			if ($("#tax-select").val() == "lct") {
				$("#business-details").hide("fast", function() {
					$("#lct-form").show("fast");
				});
			} else if ($("#tax-select").val() == "ftc") {
				$("#business-details").hide("fast", function() {
					$("#ftc-form").show("fast");
				});
			}
		});
		
		$("#btn-lct-save, #btn-lct-cancel").click(function() {
			if (this.id == "btn-lct-save") {
				$("#rego-list").append($("<li><span class=\"fa fa-plus orange\"></span> Luxury Car Tax (LCT)</li>"));
				$("#opt-lct").remove();
				if ($("#tax-select option").length == 1) {
					$("#btn-add-rego").attr("disabled", "true");
				}
			}
			$("#lct-form").hide("fast", function() {
				$("#business-details").show("fast");
			});
		});

		$("#btn-ftc-save, #btn-ftc-cancel").click(function() {
			if (this.id == "btn-ftc-save") {
				$("#rego-list").append($("<li><span class=\"fa fa-plus orange\"></span> Fuel Tax Credits (FTC)</li>"));
				$("#opt-ftc").remove();
				if ($("#tax-select option").length == 1) {
					$("#btn-add-rego").attr("disabled", "true");
				}
			}
			$("#ftc-form").hide("fast", function() {
				$("#business-details").show("fast");
			});
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

