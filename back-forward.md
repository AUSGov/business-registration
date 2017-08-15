---
title: Business details
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 3 of 5 steps" style="width:48.25%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="register"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="entitlement"><span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started <span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="business-names"><span class="visually-hidden">Step </span><span>2</span><br>Business<br> name <span class="visually-hidden"> (completed)</span></a></li>
		<li class="active" style="width: 15.3%"><span class="visually-hidden">Step </span><span>3</span><br>Business<br> details <span class="visually-hidden"> (current step)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application <span class="visually-hidden"> (not completed)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit <span class="visually-hidden"> (not completed)</span></li>
		<li class="bookend right"><a href="dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>
<h1 id="heading" tabindex="-1">3. Business details <span>(Step 3 of 6)</span></h1>
<p>All fields are required unless marked as optional.</p>


<!-- START SECTION 1 -->
<div id="section1" class="sub-section-container sub-section-open">
	<h2>Sole trader details</h2>
	<div class="sub-section-content">
		<fieldset>
			<legend class="margin4 larger">Sole trader name</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-given" class="input-right">Given name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-given" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-other" class="input-right">Other given name <span class="field-note">(optional)</span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-other" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-family" class="input-right">Family name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-family" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row clearfix">
				<div class="col4">
					<label for="email" class="input-right">Email address</label>
				</div><!-- col -->
				<div class="col8 last">
					<input type="email" id="email" value="rjohnson@emailprovider.com.au" />
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="margin4 custom-controls">
				<p>
					<input type="checkbox" id="email-notify" checked />
					<label for="email-notify">Send registration status updates to this address</label>
				</p>
			</div>
		<div id="authFieldset">
			<div class="grid-row">
				<div class="col4">
					&nbsp;
				</div><!-- col -->
				<div class="col7 custom-controls">
					<p>
						<input type="checkbox" id="auth" checked class="showhide-trigger" />
						<label for="auth">This person is also the authorised contact</label>
					</p>
					<p><button type="button" class="btn btn-default">Add another contact</button></p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->
			<div class="showhide-target col12" style="display: none">
				<legend class="margin4 larger">Authorised contact details</legend>
				<div class="grid-row">
					<div class="col4">
						<label for="accountant" class="input-right">Tax agent number <span class="field-note">(optional)</span></label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="accountant" type="number">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="name1" class="input-right">Given name</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="name1" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="othername" class="input-right">Other given name <span class="field-note">(optional)</span></label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="othername" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="name2" class="input-right">Family name</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="name2" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
			</div>
		</div>

		</fieldset>

		<fieldset id="fieldsetPOIAddress">
			<legend class="margin4 larger">
				Proof of identity<br />
				<span class="field-note">We require either the person's tax file number (TFN) or home address. Providing a TFN is the quickest way to prove identity, but you can <a href="#" id="useHomeAddress" class="showhide-trigger">enter a home address</a> if you prefer.</span>
			</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="tfn" class="input-right">
						Tax File Number<br />
					</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="tfn" type="number">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="dob" class="input-right">Date of birth<br /><span class="field-note">(DD/MM/YYYY)</span></label>
				</div>
				<div class="col8 last">
					<input id="dob" type="date">
				</div>
			</div>

			<!--
			<div class="grid-row">
				<div class="col4">
					<label for="dob" class="input-right">Date of birth<br />
					<span class="field-note">(DD/MM/YYYY)</span></label>
				</div>
				<div class="col8 last">
					<input id="dob" type="date">
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label for="country" class="input-right">Country of birth</label>
				</div>
				<div class="col8 last">
					<select id="country">
						<option selected="selected">Australia</option>
						<option></option>
					</select>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label for="town" class="input-right">Town or city of birth</label>
				</div>
				<div class="col8 last">
					<input id="town" type="text">
				</div>
			</div>
			-->
		</fieldset>

		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" onclick="location.href='business-names-05.html'">Previous</button><button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<!-- START SECTION 2 -->
<div id="section2" class="sub-section-container">
	<h2>Reason for application</h2>
	<div class="sub-section-content">
		<fieldset id="fieldsetReasonForApplication">
			<legend class="larger">Australian Business Number (ABN)</legend>
			<p class="no-margin-top">Select <strong>one</strong> option that best describes why you need an ABN.</p>

			<div class="grid-row grid-row-block clearfix custom-controls">
				<div class="col11">
					<p>
						<input id="new-business" name="radiogroup1" class="showhide-trigger" type="radio">
						<label for="new-business">
							<span class="push-right">
								<strong>New business in Australia</strong><br />
								You have set up, or are about to set up, a new business and have never had an ABN using the same business structure in Australia.
							</span>
						</label>
					</p>
				</div>                       
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row padding-bottom-1 clearfix showhide-target" id="new-business-check" style="display:none">
				<div class="col1">&nbsp;</div>
				<div class="col11 last">
					<p class="no-margin-top"><label for="australia">Is this your first time in business in Australia?</label></p>
					<div class="radio-toggle">
						<label class="on label-left" for="australia-yes"><input id="australia-yes" type="radio" name="australia"><span>Yes</span></label>
						<label class="off label-right" for="australia-no"><input id="australia-no" type="radio" name="australia"><span>No</span></label>
					</div>
				</div><!-- col -->
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio02" class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio02">
							<span class="push-right">
								<strong>Investment purposes</strong><br>
								For example, if you earn income as a result of an investment.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-reveal clearfix showhide-target" id="new-investment-check" style="display:none">
				<div class="col1">
					<p>&nbsp;</p>
				</div><!-- col -->
				<div class="col10 last">
					<p class="no-margin-top"><label for="australia2">Is this your first time in business in Australia?</label></p>
					<div class="radio-toggle">
						<label class="on label-left" for="investment-yes"><input id="investment-yes" type="radio" name="australia2"><span>Yes</span></label>
						<label class="off label-right" for="investment-no"><input id="investment-no" type="radio" name="australia2"><span>No</span></label>
					</div>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio03"  class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio03">
							<span class="push-right">
								<strong>Bought existing business</strong><br>
								You have bought or taken over an existing business.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio04" class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio04">
							<span class="push-right">
								<strong>Contractor or subcontractor</strong><br>
								You are contracting or subcontracting your services.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio05"  class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio05">
							<span class="push-right">
								<strong>To receive payment for services</strong><br>
								You need an ABN to receive payment for services.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio06"  class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio06">
							<span class="push-right">
								<strong>Recommended business</strong><br>
								You have recommended a business as a sole trader.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio07"  class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio07">
							<span class="push-right">
								<strong>Change in business structure</strong><br>
								The legal structure of your business has changed. For example, from a partership to a sole trader.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->

			<div class="grid-row grid-row-block grid-row-last custom-controls clearfix">
				<div class="col11">
					<p>
						<input id="radio08"  class="showhide-trigger" name="radiogroup1" type="radio">
						<label for="radio08">
							<span class="push-right">
								<strong>Other circumstances</strong><br>
								Only select this option of none of the above apply.
							</span>
						</label>
					</p>
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->
		</fieldset>

		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button><button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->


<!-- START SECTION 3 -->
<div id="section3" class="sub-section-container">
	<h2>Business activity details</h2>
	<div class="sub-section-content">
		<fieldset>
			<legend class="margin4 larger">ABN registration</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="start-date" class="input-right">Select ABN <strong>start</strong> date <span class="field-note">(dd/mm/yyyy)</span></label>
				</div><!-- col -->
				<div class="col7">
					<input id="start-date" type="date" />
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->
			<div id="divAbnEnddate">
				<div class="grid-row">
					<div class="col4">&nbsp;</div>
					<div class="col8 last custom-controls">
						<p>
							<input id="end-date-yes" type="checkbox" class="showhide-trigger" />
							<label for="end-date-yes">Business activity will cease within 3 months of start date</label>
						</p>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row grid-row-reveal clearfix showhide-target" style="display:none">
					<div class="col4">
						<label for="end-date" class="input-right">Select ABN <strong>end</strong> date <span class="field-note">(dd/mm/yyyy)</span></label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="end-date" type="date" />
					</div><!-- col -->
				</div><!-- grid-row -->
			</div>

			<div id="divManualActivity">
				<div class="grid-row">
					<div class="col4">
						<label for="business-activity" class="input-right">
							Choose your main business activity<br />
							<span class="field-note">(choose from the options presented)</span>
						</label>
					</div>
					<div class="col7">
						<input id="business-activity" type="text" placeholder="Start typing activity">
					</div>
					<div class="col1 last">
						 <a class="cd-btn help" href="#help"><span>Help information</span></a>
					</div>
				</div>
			</div>
		</fieldset>

		<div class="grid-row grid-row-padding-bottom">
			<fieldset id="validation-test-field3" class="no-margin">
				<legend class="col4 input-right"><span id="agricultural">Does the sole trader operate an agricultural property?<img class="visuallyhidden" src="img/ico-alert28.png" alt="Required field" /></span></legend>
				<div class="col8 last">
					<div class="col12 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on-agricultural"><input id="on-agricultural" type="radio" name="agricultural"><span>Yes</span></label>
							<label class="off label-right" for="off-agricultural"><input id="off-agricultural" type="radio" name="agricultural"><span>No</span></label>
						</div>
					</div>
				</div>
			</fieldset>
		</div><!-- grid-row -->

		<div class="grid-row grid-row-padding-bottom">
			<fieldset id="validation-test-field3" class="no-margin">
				<legend class="col4 input-right"><span id="agricultural">Is the applicant an Australian resident for taxation purposes?<img class="visuallyhidden" src="img/ico-alert28.png" alt="Required field" /></span></legend>
				<div class="col8 last">
					<div class="col12 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on-resident"><input id="on-resident" type="radio" name="resident"><span>Yes</span></label>
							<label class="off label-right" for="off-resident"><input id="off-resident" type="radio" name="resident"><span>No</span></label>
						</div>
					</div>
				</div>
			</fieldset>
		</div><!-- grid-row -->

		<fieldset id="fieldsetAddress">
			<legend class="margin4 larger">Business address</legend>
			<div class="grid-row no-margin">
				<div class="col4">
					<label for="address-suggest" class="input-right">Business address<br /><span class="field-note">(choose from the options presented)</span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="address-suggest" type="text">
					<p><a href="" id="manual" class="showhide-trigger">Can't find address</a></p>
					<p><a href="" id="addressSearch" class="showhide-trigger" style="display: none">Back to address search</a></p>
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-container showhide-target" id="manualAddress" style="display: none">
				<div class="grid-row">
					<div class="col4">
						<label for="address-line1" class="input-right">Address line 1</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="address-line1" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="address-line2" class="input-right">Address line 2</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="address-line2" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="suburb" class="input-right">Suburb</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="suburb" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="postcode" class="input-right">Postcode</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="postcode" type="number">
					</div><!-- col -->
				</div><!-- grid-row -->
			</div><!-- manualAddress -->
			<div class="grid-row custom-controls">
				<div class="margin4">
					<p>
						<input type="checkbox" id="address-same" />
						<label for="address-same">My postal address is different</label>
					</p>
				</div>
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					&nbsp;
				</div><!-- col -->
				<div class="col8 last">
					<p><button type="button" class="btn btn-default">Add another address</button></p>
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="office-phone" class="input-right">Office phone</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="office-phone" type="phone">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="mobile-phone" class="input-right">Mobile</label>
				</div><!-- col -->
				<div class="col7">
					<input id="mobile-phone" type="phone">
				</div><!-- col -->
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->
			<input id="cache-check" type="text" value="false" />
		</fieldset>

		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button>
				<button type="button" class="btn btn-default" onclick="location.href='taxation-details.html'">Continue to step 4</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/jquery.blockUI.js"></script>
<script>
	$(document).ready(function () {
		/* Expand collapse headings config */
		navigationWithinPage();
		initSaveForLater();
		initApplicationOptions();
		// the following code is to register the slide up/down effect. this is
		// a customized jQuery plugin, the element that registered registerToggleSlide is
		// actually the scope of the effect.
		$("#authFieldset").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false
		});

		$("#fieldsetReasonForApplication").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: true
		});

		$("#divContact").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false
		});

		$("#divAbnEnddate").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false
		});

		$("#fieldsetAddress").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false,
			toggleIds: "address-suggest;manual;addressSearch",
			toggleSlideSameElement: true
		});

		$("#divIndustryType").registerToggleSlide({
			event: "change",
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false,
			matchValue: "industry01"
		});

		$("#divManualActivity").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false,
			toggleIds: "business-activity;manaulBusinessActivity;autoBusinessActivity",
			toggleSlideSameElement: true
		});
		
		$(window).on("pageshow", function (event) {
			if ($("#cache-check").val() == "true") {
				$.blockUI({ message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">loading <img class="loading-ellipsis" src="/content/img/ellipsis.gif" /></p>' });
				window.location.reload(true);
			}
			$("#cache-check").val("true");
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