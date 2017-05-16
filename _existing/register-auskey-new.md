---
title: AUSkey registration
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
	
	.spinner img {
		width: 24px;
	}
	
</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for an AUSkey for yourself or others associated with your business.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<h2 id="auskey-heading">AUSkey details</h2>
<h3>Business details</h3>
<div class="grid-row">
	<div class="col4">
		<label class="input-right" for="abn">Australian Business Number (ABN)</label>
	</div>
	<div class="col8 last" style="min-height: 140px;">
		<input id="abn" type="text" value=""> <button id="verify-abn" class="btn btn-inline" type="button">Verify</button><br />
		<div id="abn-details" style="display: none">
			<p class="spinner"><img src="{{ site.baseurl }}/img/ajax-loader.gif" alt="loading" /></p>
			<p id="entity-details" style="display: none;"><strong>The Business Pty Ltd<br />Private Company</strong></p>
		</div>
	</div>
</div>
<fieldset id="Associates_PersonAssociate_Roles">
	<h3 class="margin-top-075">Your details</h3>
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
			<label class="input-right" for="Associates_PersonAssociate_TaxFileNumber">Tax File Number</label>
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
<div class="controls-container">
	<div class="controls-content">
		<button class="btn btn-default" id="next-cd-btn" type="button" onclick="location.href='dashboard-b2c'">Submit application</button>
		<button class="btn" type="button" onclick="location.href='dashboard-b2c?action=save'">Save for later</button>
	</div>
</div>
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
		
		$("#verify-abn").click(function() {
			$(this).blur();
			$("#abn-details").show();
			window.setTimeout(function() {
				$("#abn-details .spinner").hide();
				$("#entity-details").fadeIn("fast");
			}, 1500);
		});
		
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

