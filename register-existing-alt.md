---
title: Business registration
layout: default
---
<style>
	div.vadialog {
		width: 500px;
	}
	
	div.vadialog h3 {
		margin-top: 0;
	}
</style>
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for your key business and tax registrations in one place.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div id="validationSummary" class="validation-container clearfix" style="display: none;">
    <div class="grid-row">
        <div class="validation-summary-icon">
            <img src="img/ico-alert-red.png" alt="Error">
        </div>
        <div class="validation-message">
            <h2><a id="validationSummaryAnchor" tabindex="-1">Just <span id="validation-error-count">1</span> thing(s) to check and you're on your way:</a>
            </h2>
            <ul class="validation-message-errors">
                <li id="err-none"><a href="#select-registrations">Please select at least one business registration.</a></li>
                <li id="err-abn"><a href="#select-registrations">Australian Business Number (ABN) registration is required.</a></li>
            </ul>
            <p><span class="validation-red">*</span> indicates areas that need to be checked.</p>
            <script type="text/javascript">
                $(document).ready(function() {
                    if ($("#validationSummary").hasClass("validation-summary-errors")) {
                        scrollToAndFocus('#validationSummaryAnchor');
                    }
                });

                function scrollToAndFocus(id) {
                    scrollToTargetElement(id);
                    var target = $(id);
                    if (target) {
                        target.focus();
                    }
                }
            </script>
        </div>
    </div>
</div>
<div id="select-registrations" class="sub-section-container sub-section-open">
	<h2>Select registrations</h2>
	<div class="sub-section-content">
		<p class="validation-red" style="display: none;"><span class="validation-red">*</span> Please check your selections.</p>
		<div class="grid-row custom-controls clearfix">
			<div class="col6">
				<p>
					<input id="abn" type="checkbox" value="abn">
					<label class="has-help" for="abn">Australian Business Number (ABN)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="bn" type="checkbox" value="bn">
					<label class="has-help" for="bn">Business Name</label>
				</p>
				<p>
					<input id="gst" type="checkbox" value="gst">
					<label for="gst">Goods and Services Tax (GST)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="co" type="checkbox" value="co">
					<label for="co">Australian Company&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="payg" type="checkbox" value="payg">
					<label class="has-help" for="payg">Pay as you go (PAYG) withholding&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<!-- p>
					<input id="tfn" type="checkbox" value="tfn">
					<label class="has-help" for="tfn">Business Tax File Number (TFN)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p -->
			</div><!-- col -->
			<div class="col6 last">
				<p>
					<input id="fbt" type="checkbox" value="fbt">
					<label class="has-help" for="fbt">Fringe Benefits Tax (FBT)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="lct" type="checkbox" value="lct">
					<label class="has-help" for="lct">Luxury Car Tax (LCT)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="ftc" type="checkbox" value="ftc">
					<label class="has-help" for="ftc">Fuel Tax Credits (FTC)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="wet" type="checkbox" value="wet">
					<label class="has-help" for="wet">Wine Equalisation Tax (WET)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
				<p>
					<input id="auskey" type="checkbox" value="auskey">
					<label for="auskey">AUSKey&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
			</div><!-- col -->
		</div><!-- grid-row -->
		<div class="registration-tip">
			<h3>Not sure?</h3>
			<p>Not sure what registrations you need for your business? We can help you work it out.</p>
			<p><a href="help-me-decide/eligibility.html">Help me decide</a>.</p>
		</div><!-- big-help-box -->
		<div class="controls-content">
			<button type="button" id="next0" class="btn btn-default">Next</button> <button type="button" id="next1" class="visuallyhidden btn btn-default">Next</button> <button type="button" class="visuallyhidden next" id="start-applying">Next</button>
		</div><!-- controls-content -->
	</div>
</div>
<div id="section-two" class="sub-section-container">
	<h2>Information you should have already</h2>
	<div class="sub-section-content">
		<fieldset class="sub-section-content no-margin">
			<div class="grid-row">
				<div class="col12">
					<div>
						<p>For the registrations you've selected above, you'll need to provide:</p> 
						<ul>
							<li>name and contact details of the applicant</li>
							<li>address and contact details of the business or organisation</li>
							<li>details of each person or organisation associated with the business (e.g. partner, director, secretary or shareholder)</li>
							<li>tax agent number (if you wish to use an agent)</li>
							<li>ABN reference number (if you have an unfinished application)</li>
							<li>details of business activities</li>
							<li>tax file number (optional for ABN)</li>
							<li>proof of identity information such as name, address and birth details</li>
							<li>business structure</li>
							<li>proposed business name</li>
							<li>business name transfer number (if buying an existing business)</li>
							<li>company name (if you want one)</li>
							<li>company reservation number (if you have a name reserved)</li>
							<li>company structure</li>
							<li>place and date of birth for directors and any secretaries</li>
							<li>details of shares issued</li>
							<li>credit card details</li>
							<li>current or projected annual turnover</li>
							<li>BSB &amp; account details for refunds</li>
						</ul>
						<h3>Don't have all the information handy?</h3>
						<p>No problem! You can start the form now, save what you've done, and come back later once you have all the information.</p>
					</div>
				</div>
		   </div>
		</fieldset>
		<div class="controls-container">
			<div class="controls-content">
				<button id="prev" class="btn previous" type="button">Previous</button>
				<button id="next" type="button" onclick="location.href='confirm-company.html'" class="btn btn-default previous">Start applying</button>
			</div>
		</div>
	</div>
</div>

<div id="modal-message" style="display: none;">
	<h3>Existing business</h3>
	<div class="content">
		<p>You have not elected to register for an Australian Business Number (ABN). If this is because you are applying for additional registrations for an existing business, you be redirected to authenticate with your AUSKey credentials.</p>
		<p>Are you applying for additional registrations for an existing business?</p>
		<button id="existing-yes" class="btn btn-default">Yes</button> <button class="btn" id="existing-no">No</button>
	</div>
</div>
	
<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>
<script src="scripts/vadialog.js"></script>
<script type="text/javascript">
	$(document).ready(function () {
	
		if (window.location.search == "?s=1") {
			$("#select-registrations").removeClass("sub-section-open");
			$("#section-two").addClass("sub-section-open");
			location.hash = "#select-registrations";
		}
	
		navigationWithinPage();
		initSaveForLater();

		visionaustralia.addDialog("next1", "modal-message", null, null);
	
		var qryStr = getUrlVars();
		if (qryStr.type !== undefined) {
			$(qryStr.type.split(',')).each(function(i, str) {
				$('#' + str).prop('checked', true);
			});
		}
		
		$("#next0").click(function() {
			if ($("#select-registrations [type=checkbox]:checked").length == 0) {
				$("#err-none").show();
				$("#err-abn").hide();
				$("#validationSummary").show();
				location.hash = "#validationSummary";
				return;
			}
			$("#validationSummary").hide();
			if ($("#abn").is(":checked"))
				$("#start-applying").click();
			else
				$("#next1").click();
		});
		
		$("#existing-yes, #existing-no").click(function() {
			visionaustralia.closeDialog("modal-message");
			if ($(this)[0].id == "existing-no") {
				if ($("#select-registrations [type=checkbox]:checked").length == 1 &&
					($("#bn").is(":checked") || $("#co").is(":checked"))) {
						$("#start-applying").click();
				}
				else {
					$("#err-none").hide();
					$("#err-abn").show();
					$("#validationSummary").show();
					location.hash = "#validationSummary";
				}
			} else {
				location.href = "aba-login";
			}
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

