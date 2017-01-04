---
title: Business registration
layout: default
---
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for your key business and tax registrations in one place.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div id="validation" class="validation-summary-errors validation-container clearfix"  style="display: none;">
	<div class="grid-row">
		<div class="validation-summary-icon">
			<img src="img/ico-alert-red.png" alt="Error">
		</div>
		<div class="validation-message">
			<h2><a id="validationSummaryAnchor" tabindex="-1">Just <span id="validation-error-count">2</span> thing(s) to check and you're on your way:</a>
			</h2>
			<ul class="validation-message-errors">
				<li id="error-regs"><a href="javascript:scrollToAndFocus('#RegistrationTypesViewModel_select-registrations');">Please select at least one business registration.</a></li>
				<li id="error-refer"><a href="#">Will you allow Service NSW to access your data? is required.</a></li>
				<li id="error-share" style="display: none;"><a href="#">Please indicate whether or not you wish to share your data.</a></li>
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
		<p id="inline-validation" class="validation-red" style="display: none;"><span class="validation-red">*</span> Please check your selections.</p>
		<div id="reg-cbs" class="grid-row custom-controls clearfix">
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
				<p>
					<input id="tfn" type="checkbox" value="tfn">
					<label class="has-help" for="tfn">Business Tax File Number (TFN)&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
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
					<label for="auskey">Business login&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
			</div><!-- col -->
		</div><!-- grid-row -->
		<div class="grid-row">
		<h3>Information sharing</h3>
			<p>You were referred here from the <strong>Service NSW</strong> website.</p>
			<p><strong>Service NSW</strong> has requested access to the information you enter into this website. This will enable you to monitor the progress of your applications from their website, and use the information you enter here to complete other applications.</p>
		</div>
		<div class="grid-row custom-controls clearfix">
			<div>
				<p id="refer-label" class="label">Will you allow Service NSW to access your data?</p>
				<div class="radio-toggle">
					<label class="on label-left" for="yes">
						<input id="yes" name="access" type="radio" value="Yes">
						<span>Yes</span>
					</label>
					<label class="off label-right" for="no">
						<input id="no" name="access" type="radio" value="No">
						<span id="tfn_no">No</span>
					</label>
				</div>
			</div>
		</div>
		<div class="registration-tip">
			<h3>Not sure?</h3>
			<p>Not sure what registrations you need for your business? We can help you work it out.</p>
			<p><a href="help-me-decide/eligibility.html">Help me decide</a>.</p>
		</div><!-- big-help-box -->
		<div class="controls-content">
			<button type="button" id="start-applying" class="btn btn-default next">Next</button>
		</div><!-- controls-content -->
	</div>
</div>
<div class="sub-section-container" role="region" aria-labelledby="section-heading-2">
	<h2 id="section-heading-2">Information you'll need<span class="visuallyhidden"> (current section)</span></h2>
	<div class="sub-section-content no-margin">
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
					</ul>
					<h3>Don't have all the information handy?</h3>
					<p>No problem! You can start the form now, save what you've done, and come back later once you have all the information.</p>
					<h2>Signing in</h2>
					<p>To get started, please sign in on the next screen. This allows you to save your progress through the form and check if your application is successful after you've submitted it.</p>
					<p>To sign in, you can:</p>
					<ul>
						<li>create a new business.gov.au account, <strong>or</strong></li>
						<li>use your existing Facebook, Google, Microsoft or LinkedIn account.</li>
					</ul>
					<blockquote><hr><strong>Tip:</strong> To return to your saved application, select the <strong>Sign in</strong> link in the top right of the screen. Make sure you use the same account!<hr></blockquote>
					<div class="custom-controls">
						<h3>Your privacy</h3>
						<p>We take your privacy seriously and your information will remain secure. We'll <strong>only</strong> use your email to sign you in and provide you with important information about your application. Please read our <a href="https://www.business.gov.au/">privacy statement</a> for more detail.</p>
						<!-- <h3>Data sharing</h3>
						<p>You were referred here from the <strong>Service NSW</strong> website.</p>
						<p><strong>Service NSW</strong> has requested access to the information you enter into this website. This will enable you to monitor the progress of your applications from their website, and use the information you enter here to complete other applications.</p>
						<p style="display: inline-block">
							<input id="share-info" type="checkbox" value="share">
							<label class="has-help" for="share-info">Share your information with Service NSW.</label>
						</p>
						<p style="display: inline-block">
							<input id="hide-info" type="checkbox" value="dontshare">
							<label class="has-help" for="hide-info">Do not share your information.</label>
						</p> -->
					</div>
				</div>
		   </div>
			<div class="controls-container">
				<div class="controls-content">
					<button id="prev" class="btn previous" type="button">Previous</button>
					<button id="next" type="button" class="btn btn-default previous">Start applying</button>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>

<script type="text/javascript">
	$(document).ready(function () {
	
		// initSaveForLater();

	
		var qryStr = getUrlVars();
		if (qryStr.type !== undefined) {
			$(qryStr.type.split(',')).each(function(i, str) {
				$('#' + str).prop('checked', true);
			});
		}
		
		$("#start-applying").click(function(event) {
			
			var errors = 0;
			if ($("#reg-cbs input[type=checkbox]:checked").length == 0) {
				$("#error-regs, #inline-validation").show();
				errors++;
			}
			else
			{
				$("#error-regs, #inline-validation").hide();
			}
			if ($("[name=access]:checked").length == 0)
			{
				$("#error-refer").show();
				$("#refer-label").addClass("validation-inline");
				errors++;
			}
			else
			{
				$("#error-refer").hide();
				$("#refer-label").removeClass("validation-inline");
			}
			if (errors > 0) {
				$("#validation-error-count").html(errors);
				$("#validation").show();
				event.preventDefault();
				scrollToAndFocus('#validation');
				return false;
			}
			else
				$("#validation").hide();
		});
	
		$("#next").click(function (e) {
			e.preventDefault();
			// var errors = 0;
			// if ($("#share-info:checked, #hide-info:checked").length == 0)
			// {
			// 	$("#error-share").show();
			// 	errors++;
			// }
			// else
			// {
			// 	$("#error-refer").hide();
			// 	$("#refer-label").removeClass("validation-inline");
			// }
			// if (errors > 0) {
			// 	$("#validation-error-count").html(errors);
			// 	$("#validation").show();
			// 	scrollToAndFocus('#validation');
			// 	return false;
			// }
			// else
			// 	$("#validation").hide();
			
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
		
		$("#share-info, #hide-info").click(function() {
			if ($(this).is(":checked")) {
				if ($(this)[0].id == "share-info") {
					$("#hide-info").removeAttr("checked");
				}
				else {
					$("#share-info").removeAttr("checked");
				}
			}
		});
		
		navigationWithinPage();
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
	
		
	function scrollToTargetElement(element, event) {
		if (event != undefined) {
			event.preventDefault();
		}
		var target = $(element);
		if (target) {
			if (target.offset()) {
				var pos = target.offset().top > 0 ? target.offset().top : target.position().top;
				jQuery('html, body').animate({ scrollTop: pos }, 150);
			}
		}
	}
</script>
