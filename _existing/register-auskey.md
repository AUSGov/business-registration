---
title: My access
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
	
	.ui-dialog .ui-widget-header {
		background-color: #3c86c4;
		border-color: #3c86c4;
	}
	
	.hidden {
		display: none;
	}
	
	.highlight .hidden {
		display: inline;
		font-size: 120%;
	}
	
</style>
<div id="vanguard" style="width: 1185px; margin: 40px auto; display: none;">
	<img src="../img/aba-login.png" style="cursor: pointer" onclick="linkRegistrations()" />
</div>
<div id="body-content">
	<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
	<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
	<p>Here you can apply for an AUSkey for yourself or others associated with your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
	<div id="access-details" class="sub-section-container sub-section-open">
		<h2>Access required</h2>
		<div class="sub-section-content">
			<h3>Applying for an AUSkey</h3>
			<p>You can either apply for a new AUSkey for yourself, if your business has not been issued with an AUSkey before, or you can use your AUSkey credentials to apply for additional AUSkeys on behalf of other business associates.</p>
			<p>Make your selection then click &apos;Continue&apos; and you will be redirected to the appropriate login screen to validate your identity if required.</p>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="auskey-type">Are you applying for a new AUSkey for yourself or on behalf of other business associate(s)?</label>
				</div>
				<div class="col8 last">
					<div class="radio-toggle stacked">
						<label class="on label-left" for="yourself">
							<input id="yourself" name="auskey-type" onclick="$('#individual').show(); $('#additional-auskeys').hide();" type="radio" value="Yes">
							<span>Yourself</span>
						</label>
						<label class="off label-right" for="other-assoc">
							<input id="other-assoc" name="auskey-type" onclick="$('#individual').hide(); $('#additional-auskeys').show()" type="radio" value="No">
							<span>Other associates</span>
						</label>
					</div> 
					
				</div>
			</div>
			<div class="controls-container">
				<div class="controls-content">
					<button class="btn cancel" type="submit" onclick="location.href='index'">Previous</button>
					<button class="btn btn-default" id="next-btn" type="button" disabled>Continue</button>
				</div>
			</div>
		</div>
	</div>
	<div id="abn-section" class="sub-section-container">
		<h2 id="auskey-heading">AUSkey details</h2>
		<div id="abn-content" class="sub-section-content">
			<div id="individual" style="display: none;">
				<h3>Business details</h3>
				<div class="grid-row">
					<div class="col4">
						<label class="input-right" for="abn">Australian Business Number (ABN)</label>
					</div>
					<div class="col8 last">
						<input id="abn" type="text" value=""> <button id="select-abn" type="button">...</button><br />
						<div id="abn-details" style="display: none">
							<p><strong>The Business Pty Ltd<br />mike.ross@business.com</strong></p>
						</div>
					</div>
				</div>
				<fieldset id="Associates_PersonAssociate_Roles">
					<legend class="larger">Your details</legend>
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
				<div id="declaration">
					<h3 class="larger">Declaration</h3>
					<p>Please complete the declaration below to submit your application.</p>
					<div id="ajax-container-for-declaration">
						<div class="declaration-wrapper margin-top-075">
							<div id="declaration-text" class="grid-row">
								<fieldset id="auskey-declaration" class="custom-controls">
									<legend class="larger no-padding">AUSkey</legend>
									<p>
										<input id="AUSKeyCheckBox" name="AUSKeyCheckBox" type="checkbox" value="true">
										<label id="ato-auskey-check" for="AUSKeyCheckBox">I am eligible for an AUSKey and I declare that:<br>
										<span class="dot-point">I am authorised to make this application on behalf of the Business.</span><br>
										<span class="dot-point">This application is for an AUSKey to be held for that business.</span><br>
										<span class="dot-point">I understand the terms and conditions associated with that AUSkey.</span><br>
										<span class="dot-point">Notices about this AUSkey application and that AUSkey may be sent to the email address recorded for the business on the ABR.</span> </label>
									</p>
								</fieldset>
							</div>
							<div class="grid-row">
								<h3>Privacy</h3>
								<p>The information provided to the ABR and the ATO in this form may include personal information. Please refer to the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="additional-auskeys" style="display: none;">
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
							<td class="field-name bold top">Contact email</td>
							<td class="input-value">
								<p style="margin: 0">mike.ross@business.com</p>
								<!-- <ul class="reg-list retrieve">
									<li><span class="fa fa-check green"></span> Goods and Services Tax (GST)</li>
									<li><span class="fa fa-check green"></span> Pay As You Go (PAYG) withholding</li>
								</ul> -->
							</td>
						</tr>
					</tbody>
				</table>
				<h3>Authorisations</h3>
				<div>
					<p id="none-added">None added</p>
					<div id="auth-display" class="confirmation margin-top-075" style="display: none;">
						<table class="margin-bottom-075">
							<thead class="visuallyhidden">
								<tr>
									<th>Field item</th>
									<th>Input value</th>
								</tr>
							</thead>
							<tbody id="ass1" style="display: none;">
								<tr>
									<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Fred Albert Nerk</th>
									<th>
										<button type="button" id="delete-ass1" class="btn btn-default ico-remove">Remove</button>
										<button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button>
									</th>
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
							<tbody id="ass2" style="display: none;">
								<tr>
									<th style="vertical-align: middle"><span class="fa fa-user blue"></span> Simon Arthur Bourke</th>
									<th>
										<button type="button" id="delete-ass2" class="btn btn-default ico-remove">Remove</button>
										<button type="button" id="edit-auth" class="btn btn-default ico-edit">Edit</button>
									</th>
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
					<div class="margin-top-075">
						<button id="btn-add-auth" class="btn btn-inline margin-bottom-075" type="button">Add authorisation</button>
					</div>
				</div>
				<div id="declaration2">
					<h3 class="larger">Declaration</h3>
					<p>Please complete the declaration below to submit your application.</p>
					<div id="ajax-container-for-declaration">
						<div class="declaration-wrapper margin-top-075">
							<div id="declaration-text" class="grid-row">
								<fieldset id="auskey-declaration" class="custom-controls">
									<legend class="larger no-padding">AUSkey</legend>
									<p>
										<input id="AUSKeyCheckBox" name="AUSKeyCheckBox" type="checkbox" value="true">
										<label id="ato-auskey-check" for="AUSKeyCheckBox">The person(s) identified as associate(s) are eligible for an AUSKey and I declare that:<br>
										<span class="dot-point">I am authorised to make this application on behalf of the Business.</span><br>
										<span class="dot-point">This application is for an AUSKey to be held for that business.</span><br>
										<span class="dot-point">I understand the terms and conditions associated with that AUSkey.</span><br>
										<span class="dot-point">Notices about this AUSkey application and that AUSkey may be sent to the email address recorded for the business on the ABR.</span> </label>
									</p>
								</fieldset>
							</div>
							<div class="grid-row">
								<h3>Privacy</h3>
								<p>The information provided to the ABR and the ATO in this form may include personal information. Please refer to the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="controls-container">
				<div class="controls-content">
					<button class="btn cancel previous" type="submit">Previous</button>
					<button class="btn btn-default" id="next-cd-btn" type="button">Confirm and submit</button>
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
			<div class="controls-container">
				<button class="btn btn-default ajax-button" id="add-person" type="button">Add</button>
				<button class="btn cancel ajax-button" type="button" id="cancel-assoc">Cancel</button>
			</div>
		</div>
	</div>
</div>
<img id="b2c-login" src="B2Clogin.png" style="display: none;" />
<div id="abn-popup" class="confirmation" style="display: none">
	<p>Select an ABN:</p>
	<table>
		<thead>
			<tr>
				<th>&nbsp;</th>
				<th>ABN</th>
				<th>Entity name</th>
			</tr>
		</thead>
		<tbody>
			<tr class="selectable">
				<td width="12%"><span class="fa fa-check hidden"></span></td>
				<td>123456789</td>
				<td>Qwertable Resources Pty Ltd</td>
			</tr>
			<tr class="selectable">
				<td><span class="fa fa-check hidden"></span></td>
				<td>555444333</td>
				<td>Hungry Hippos Pty Ltd</td>
			</tr>
			<tr class="selectable">
				<td><span class="fa fa-check hidden"></span></td>
				<td>987654321</td>
				<td>Achellisus Pty Ltd</td>
			</tr>
		</tbody>
	</table>
	<button type="button" class="btn btn-small" onclick="$('#abn-popup').dialog('close')">Cancel</button>
	<button id="abn-selected" type="button" class="btn btn-small btn-default">Select</button>
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
<script src="{{ site.baseurl }}/scripts/vadialog.js"></script> 
<script type="text/javascript">
	visionaustralia.addDialog("delete-ass1", "dialogThree");
	visionaustralia.addDialog("delete-ass2", "dialogFour");
</script>
<script src="{{ site.baseurl }}/scripts/jquery-ui.min.js"></script>
<link rel="stylesheet" href="{{ site.baseurl }}/css/jquery-ui.min.css">


<script type="text/javascript">
	function scrollToAndFocus(id) {
		scrollToTargetElement(id);
		var target = $(id);
		if (target) {
			target.focus();
		}
	}
	
	$(document).ready(function () {
	
		navigationWithinPage();
		initSaveForLater();
		
		$(".nav-item > a > span").html("Sign in");
		
		$("input[name=auskey-type]").click(function() { $("#next-btn").removeAttr("disabled"); });
		
		$(".selectable").click(function() {
			$(".selectable").removeClass("highlight");
			$(this).addClass("highlight");
		});

		$("#abn-popup").dialog({
			modal: true,
			autoOpen: false,
			width: '550px',
			title: "Select ABN"
		});
	
		var qryStr = getUrlVars();
		if (qryStr.type !== undefined) {
			$(qryStr.type.split(',')).each(function(i, str) {
				$('#' + str).prop('checked', true);
			});
		}
		
		$("#start-applying").click(function() {
			
		});
	
		$("#next-btn").click(function () {
			if ($("#yourself").is(":checked")) {
				$("#body-content").hide();
				$("#b2c-login").show();
			} else {
				$("header, footer, .top-banner, .environment, #body-content").hide();
				$("#vanguard").show();
				$(document.body).scrollTop(0);
			}
		});
		
		$("#b2c-login, #vanguard").click(function() {
			$(this).hide();
			$(".nav-item > a > span").html('mike.ross@business.com <span class="fa fa-bars"></span>');
			$("header, footer, .top-banner, .environment, #body-content").show();
			$("#body-content").show();
			$("#access-details").removeClass("sub-section-open");
			$("#abn-section").addClass("sub-section-open");
			scrollToAndFocus("#auskey-heading");
		});
		
		$("#select-abn").click(function() {
			$("#abn-popup").dialog("open");
		});
		
		$("#abn-selected").click(function() {
			$("#abn").val("123456789");
			$("#abn-details").show();
			$('#abn-popup').dialog('close');
		});
		
		$("#btn-add-auth, #edit-auth").click(function() {
			$("#abn-content").hide();
			$("#associate-form").show('fast');
			scrollToAndFocus("#associate-form");
		});
		
		$("#cancel-assoc").click(function() {
			$("#associate-form").hide();
			$("#abn-content").show('fast');
		});
		
		$("#add-person").click(function() {
			$("#associate-form").hide();
			$("#none-added").hide();
			$("#auth-display").show();
			$("#abn-content").show();
			$("#auth-display table tbody:hidden").first().show();
			scrollToAndFocus("#auth-display");
		});
				
		$("#remove-ass1").click(function() {
			visionaustralia.closeDialog("dialogThree");
			$("#ass1").hide();
			if (!$("#ass2").is(":visible")) {
				$("#none-added").show();
				$("#auth-display").hide();
				$("#abn-content").show();
			}
		});
		
		$("#remove-ass2").click(function() {
			visionaustralia.closeDialog("dialogFour");
			$("#ass2").hide();
			if (!$("#ass1").is(":visible")) {
				$("#none-added").show();
				$("#auth-display").hide();
				$("#abn-content").show();
			}
		});
	});
</script>

