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
	
	#ass1 tr th,
	#ass3 tr th {
		border-bottom: 3px solid #fff;
	}

</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<div class="confirmation">
	<div id="main">
		<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
		<p>Here you can apply for additional AUSkeys for your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
		<div id="validationSummary" class="validation-summary-errors validation-container clearfix" data-valmsg-summary="true">
    <div class="grid-row">
        <div class="validation-summary-icon">
            <img src="/img/ico-alert-red.png" alt="Error">
        </div>
        <div class="validation-message">
            <h2><a id="validationSummaryAnchor" tabindex="-1">Some of your registrations were unsuccessful:</a>
            </h2>
            <ul class="validation-message-errors">
                        <li><a href="javascript:scrollToAndFocus('#ass2');">Simon Arthur Bourke: invalid Tax File Number</a></li>
            </ul>
            <p><span class="validation-red">*</span> indicates areas that need to be checked.</p>
        </div>
    </div>
</div>
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
					<td class="input-value">Really Awesome Business Pty Ltd</td>
				</tr>
				<tr>
					<td class="field-name bold">Email address</td>
					<td class="input-value">
						<p style="margin: 0">mike.ross@business.com</p>
					</td>
				</tr>
			</tbody>
		</table>
		<div id="authorisations">
			<h3>Authorisations</h3>
			<div>
				<p id="none-added" style="display: none;">None added</p>
				<div id="auth-display" class="margin-top-075">
					<table class="margin-bottom-075">
						<thead class="visuallyhidden">
							<tr>
								<th>Field item</th>
								<th>Input value</th>
							</tr>
						</thead>
						<tbody id="ass1">
							<tr>
								<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Fred Albert Nerk</th>
								<th>
									<span class="fa fa-check green"></span> Submitted successfully
								</th>
							</tr>
						</tbody>
						<tbody id="ass3">
							<tr>
								<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Bryan Jeremy Cartright</th>
								<th>
									<span class="fa fa-check green"></span> Submitted successfully
								</th>
							</tr>
						</tbody>
						<tbody id="ass2">
							<tr>
								<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Simon Arthur Bourke</th>
								<th>
									<span class="fa fa-times red"></span> Unsuccessful - edit to correct errors and re-submit <button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button>
								</th>
							</tr>
							<tr>
								<td class="field-name">Associate type</td>
								<td class="input-value">Public officer</td>
							</tr>
							<tr>
								<td class="field-name">Tax File Number (TFN)</td>
								<td class="input-value">987654321<span class="validation-red">*</span></td>
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
		<div id="declaration">
			<h3 class="larger">Declaration</h3>
			<p>Please complete the declaration below to submit your changes.</p>
			<div id="ajax-container-for-declaration">
				<div class="declaration-wrapper margin-top-075">
					<div id="declaration-text" class="grid-row">
						<fieldset id="auskey-declaration" class="custom-controls">
							<legend class="larger no-padding">AUSkey</legend>
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
		</div>
		<div class="controls-container margin-top-075">
			<div class="controls-content">
				<button class="btn btn-default next" id="next-cd-btn" type="button" onclick="location.href='dashboard?type=auskey'" disabled>Re-submit application</button>
				<button class="btn" type="button" onclick="location.href='dashboard?action=save&type=auskey'">Save for later</button>
			</div>
		</div>
	</div>
</div>
<div id="associate-form" style="display: none;">
	<fieldset id="Associates_PersonAssociate_Roles">
		<legend class="has-help larger">Associate details</legend>
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
	<div class="controls-content margin-bottom">
		<button class="btn btn-default ajax-button" id="add-person" type="button">Add</button>
		<button class="btn cancel ajax-button" type="button" id="cancel-assoc">Cancel</button>
	</div>
</div>
<script src="{{ site.baseurl }}/scripts/vadialog.js"></script> 

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
		
		$("footer").hide();
		
		
		$("#rego-select").change(function(){
			if ($(this).val() == "")
				$("#btn-apply").attr("disabled", true);
			else
				$("#btn-apply").removeAttr("disabled");
		});
		
		$("#btn-apply").click(function() {
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

		$("#btn-add-auth, #edit-auth").click(function() {
			$("#main").hide();
			$("#associate-form").show('fast');
		});
		

		$("#AUSKeyCheckBox").click(function() {
			if ($(this).is(":checked")) {
				$("#next-cd-btn").removeAttr("disabled");
			} else {
				$("#next-cd-btn").attr("disabled", true);
			}
		});
		
		$("#add-person, #cancel-assoc").click(function() {
			$("#associate-form").hide();
			$("#none-added").hide();
			$("#auth-display").show();
			$("#contacts").show();
			$("#declaration").show();
			$("#auskey-declaration").show();
			$("#main").show();
			$("#auth-display table tbody:hidden").first().show();
			scrollToAndFocus("#authorisations");
		});
		
		$("#remove-ass1").click(function() {
			visionaustralia.closeDialog("dialogThree");
			$("#ass1").hide();
			if (!$("#ass2").is(":visible")) {
				$("#none-added").show();
				$("#contacts").hide();
				$("#auth-display").hide();
				if ($("#no-regos-added").is(":visible")) {
					$("#declaration").hide();
				}
				$("#auskey-declaration").hide();
				$("#main").show();
			}
		});
		
		$("#remove-ass2").click(function() {
			visionaustralia.closeDialog("dialogFour");
			$("#ass2").hide();
			if (!$("#ass1").is(":visible")) {
				$("#none-added").show();
				$("#contacts").hide();
				$("#auth-display").hide();
				if ($("#no-regos-added").is(":visible")) {
					$("#declaration").hide();
				}
				$("#auskey-declaration").hide();
				$("#main").show();
			}
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

