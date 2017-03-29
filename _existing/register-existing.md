---
title: Business registration
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
	
	table tr td span.fa {
		font-size: 150%;
	}
	
	.bold {
		font-weight: bold;
	}
	
</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for additional registrations and authorisations for your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div id="business-details" class="sub-section-container sub-section-open">
	<h2>Business details</h2>
	<div class="sub-section-content">
		<h3 class="larger">ABN details</h3>
		<table id="abn-details">
			<thead class="visuallyhidden">
				<tr>
					<th colspan="2">Field item</th>
					<th>Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width="5%">&nbsp;</td>
					<td width="30%" class="field-name bold">Australian Business Number (ABN)</td>
					<td width="65%" class="input-value">44 123 456 789</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td class="field-name bold">Organisation name</td>
					<td class="input-value">Business Pty Ltd</td>
				</tr>
			</tbody>
		</table>
		<h3 class="larger">Contact details</h3>
		<table id="contact-details">
			<thead class="visuallyhidden">
				<tr>
					<th colspan="2">Field item</th>
					<th colspan="2">Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width="5%">&nbsp;</td>
					<td width="30%" class="field-name bold">Business address</td>
					<td width="55%" class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
					<td width="10%"><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=1029&amp;s=1">Edit</button></td>
				</tr>
				<tr>
					<td><span class="fa fa-pencil orange"></span></td>
					<td class="field-name bold">Postal address <em>(modified)</em></td>
					<td class="input-value">PO Box 9999 Scarborough, WA, 6019</td>
					<td><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=1029&amp;s=1">Edit</button></td>
				</tr>
			</tbody>
		</table>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and continue</button>
			</div>
		</div>
	</div>
</div>
<div id="business-details" class="sub-section-container">
	<h2>Authorised contacts</h2>
	<div class="sub-section-content">
		<div class="sub-section-content">
			<h3 class="larger">Authorised contact details</h3>
			<p>You can modify or remove your existing contacts, or add further contacts below.</p>
			<div id="AuthorisedContacts_AuthorisedContacts">
				<div class="cart-container" id="AuthorisedContacts_AuthorisedContacts_0__Container">
					<div class="result-row">
						<div class="result-cell cell-icon">
							<span class="fa fa-check-circle green"></span>
						</div>
						<div class="result-cell cell-detail">
							<h3>Fred Nerk</h3>
							<p>Director</p>
						</div>
						<div class="result-cell cell-action">
							<a class="edit ajax-link" href="" data-ajax-action="1V6ogZACle0wGoDNhVJWgZ8DgBDPnl4XK2GoXebBTaI="><span>Edit</span></a>
							<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="AuthorisedContacts_AuthorisedContacts_0__IsEdit" name="AuthorisedContacts.AuthorisedContacts[0].IsEdit" type="hidden">
							&nbsp;
							<a id="AuthorisedContacts_AuthorisedContacts_0__RemoveAuthorisedContact" class="remove" href="javascript:void(0);" data-ajax-id="0"><span>Remove</span></a>
						</div>
					</div>
				</div>
				<div class="cart-container" id="AuthorisedContacts_AuthorisedContacts_1__Container">
					<div class="result-row">
						<div class="result-cell cell-icon">
							<span class="fa fa-pencil orange"></span>
						</div>
						<div class="result-cell cell-detail">
							<h3>John Smith <em>(modified)</em></h3>
							<p>Secretary</p>
						</div>
						<div class="result-cell cell-action">

							<a class="edit ajax-link" href="" data-ajax-action="1V6ogZACle0wGoDNhVJWgZ8DgBDPnl4XK2GoXebBTaI="><span>Edit</span></a>
							<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="AuthorisedContacts_AuthorisedContacts_1__IsEdit" name="AuthorisedContacts.AuthorisedContacts[1].IsEdit" type="hidden">
							&nbsp;
							<a id="AuthorisedContacts_AuthorisedContacts_1__RemoveAuthorisedContact" class="remove" href="javascript:void(0);" data-ajax-id="1"><span>Remove</span></a>
						</div>
					</div>
				</div>
				<div class="cart-container" id="AuthorisedContacts_AuthorisedContacts_1__Container">
					<div class="result-row">
						<div class="result-cell cell-icon">
							<span class="fa fa-minus red"></span>
						</div>
						<div class="result-cell cell-detail">
							<h3>Charles Windsor <em>(removed)</em></h3>
							<p>Secretary</p>
						</div>
						<div class="result-cell cell-action">

							<a class="edit ajax-link" href="" data-ajax-action="1V6ogZACle0wGoDNhVJWgZ8DgBDPnl4XK2GoXebBTaI="><span>Edit</span></a>
							<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="AuthorisedContacts_AuthorisedContacts_1__IsEdit" name="AuthorisedContacts.AuthorisedContacts[1].IsEdit" type="hidden">
							&nbsp;
							<a id="AuthorisedContacts_AuthorisedContacts_1__RemoveAuthorisedContact" class="remove" href="javascript:void(0);" data-ajax-id="1"><span>Remove</span></a>
						</div>
					</div>
				</div>
				<p>
					<button class="btn btn-inline ajax-button" name="siK7g1V63Y7Ocf8CW33zhMWDHiJMq4jQTs6iCiAoHSA=" type="button" value="__cvg__SzM0Ch6cIAEU6k0Xke772IPiCB/02C3kcwsv8QysvjLFh1IY25HF+2mH5Y2atCnz">Add another contact</button>
				</p>
			</div>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn previous" type="button">Previous</button>
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and continue</button>
			</div>
		</div>
	</div>
</div>
<div id="business-details" class="sub-section-container">
	<h2>Tax registrations</h2>
	<div class="sub-section-content">
		<h3>Currently registered for</h3>
		<ul style="list-style: none; margin-left: -40px">
			<li><span class="fa fa-check green" style="font-size:150%; margin-right: 5px"></span> Goods and Services Tax (GST)</li>
			<li><span class="fa fa-check green" style="font-size:150%; margin-right: 5px"></span> Pay As You Go (PAYG) withholding</li>
		</ul>
		<h3>Registrations added</h3>
		<ul style="list-style: none; margin-left: -40px">
			<li><span class="fa fa-plus orange" style="font-size:150%; margin-right: 5px"></span> Fringe Benefts Tax (FBT)</li>
			<li><span class="fa fa-plus orange" style="font-size:150%; margin-right: 5px"></span> Wine Equalisation Tax (WET)</li>
		</ul>
		<p>
			<button class="btn btn-inline ajax-button" name="siK7g1V63Y7Ocf8CW33zhMWDHiJMq4jQTs6iCiAoHSA=" type="button" value="__cvg__SzM0Ch6cIAEU6k0Xke772IPiCB/02C3kcwsv8QysvjLFh1IY25HF+2mH5Y2atCnz">Add registration</button>
			<select>
				<option>--- select registration ---</option>
				<option>Luxury Car Tax (LCT)</option>
				<option>Fuel Tax Credits (FTC)</option>
			</select>
		</p>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn previous" type="button">Previous</button>
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and continue</button>
			</div>
		</div>
	</div>
</div>
<div id="business-details" class="sub-section-container">
	<h2>Government credentials</h2>
	<div class="sub-section-content">
		<h3 class="larger">Authorised users</h3>
		<p>The following users are authorised with Government Credentials to make changes to your business details. You can autrhorise additional users below.</p> 
		<div id="AuthorisedContacts_AuthorisedContacts">
			<div class="cart-container" id="AuthorisedContacts_AuthorisedContacts_0__Container">
				<div class="result-row">
					<div class="result-cell cell-icon">
						<span class="fa fa-check-circle green"></span>
					</div>
					<div class="result-cell cell-detail">
						<h3>Fred Nerk</h3>
						<p></p>
					</div>
					<div class="result-cell cell-action">
					</div>
				</div>
			</div>
			<div class="cart-container" id="AuthorisedContacts_AuthorisedContacts_1__Container">
				<div class="result-row">
					<div class="result-cell cell-icon">
						<span class="fa fa-plus orange"></span>
					</div>
					<div class="result-cell cell-detail">
						<h3>John Smith</h3>
						<p></p>
					</div>
					<div class="result-cell cell-action">
						<a class="edit ajax-link" href="" data-ajax-action="1V6ogZACle0wGoDNhVJWgZ8DgBDPnl4XK2GoXebBTaI="><span>Edit</span></a>
						<input value="false" data-val="true" data-val-required="The IsEdit field is required." id="AuthorisedContacts_AuthorisedContacts_1__IsEdit" name="AuthorisedContacts.AuthorisedContacts[1].IsEdit" type="hidden">
							&nbsp;
						<a id="AuthorisedContacts_AuthorisedContacts_1__RemoveAuthorisedContact" class="remove" href="javascript:void(0);" data-ajax-id="1"><span>Remove</span></a>
					</div>
				</div>
			</div>
			<p>
				<button class="btn btn-inline ajax-button" name="siK7g1V63Y7Ocf8CW33zhMWDHiJMq4jQTs6iCiAoHSA=" type="button" value="__cvg__SzM0Ch6cIAEU6k0Xke772IPiCB/02C3kcwsv8QysvjLFh1IY25HF+2mH5Y2atCnz">Add another authorisation</button>
			</p>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn previous" type="button">Previous</button>
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and continue</button>
			</div>
		</div>
	</div>
</div>
<div id="business-details" class="sub-section-container">
	<h2>Confirmation</h2>
	<div class="sub-section-content">
		<h3>Summary of changes</h3>
		<table id="abn-details">
			<thead class="visuallyhidden">
				<tr>
					<th colspan="2">Field item</th>
					<th>Input value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width="5%"><span class="fa fa-pencil orange"></span></td>
					<td width="90%" class="field-name">Postal address modified.</td>
				</tr>
				<tr>
					<td width="5%"><span class="fa fa-pencil orange"></span></td>
					<td width="90%" class="field-name">Authorised contact <strong>John Smith</strong> modified.</td>
				</tr>
				<tr>
					<td width="5%"><span class="fa fa-minus red"></span></td>
					<td width="90%" class="field-name">Authorised contact <strong>Charles Windsor</strong> removed.</td>
				</tr>
				<tr>
					<td width="5%"><span class="fa fa-plus orange"></span></td>
					<td width="90%" class="field-name">Tax registrations added: <strong>FBT, WET</strong></td>
				</tr>
				<tr>
					<td width="5%"><span class="fa fa-plus orange"></span></td>
					<td width="90%" class="field-name">Government credentials added for: <strong>John Smith</strong></td>
				</tr>
			</tbody>
		</table>
		<h3 class="larger">Declaration</h3>
		<p>Please complete the delclaration below to submit your changes.</p>
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
					<p>The information provided to ASIC <span class="addition">, the ABR and the ATO</span> in this form may include personal information. Please refer to the <a href="http://www.asic.gov.au/privacy" target="_blank">ASIC privacy policy <span class="visuallyhidden">(opens in new window)</span></a>, the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
				</div>
			</div>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn previous" type="button">Previous</button>
				<button class="btn btn-default next" id="next-cd-btn" type="button">Confirm and submit</button>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(document).ready(function () {
	
		navigationWithinPage();
		initSaveForLater();

	
		var qryStr = getUrlVars();
		if (qryStr.type !== undefined) {
			$(qryStr.type.split(',')).each(function(i, str) {
				$('#' + str).prop('checked', true);
			});
		}
		
		$("#start-applying").click(function() {
			
		});
	
		$("#next").click(function (e) {
			e.preventDefault();
			var queryString = "";

			if ($("#co").prop("checked") && $("#gst").prop("checked")) {
				queryString = "type=co,gst";
			} else if ($("#co").prop("checked")) {
				queryString = "type=co";
			} else if ($("#gst").prop("checked")) {
				queryString = "type=gst";
			}

			if ($("#abn").prop("checked")) {

				if (queryString.length == 0) {
					queryString = "type=abn";
				}
				else {
					queryString += ",abn";
				}
			}

			document.location = "entitlement.html?" + queryString;
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

