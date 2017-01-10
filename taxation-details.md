---
title: Taxation details
layout: default
---

<style>
	div.slider {
		display: inline-block;
		vertical-align: middle;
		width: 50%;
		margin-left:20px;
	}
</style>
	
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" style="width: 58%"></span>
	</div><!-- meter -->
	<ul class="section-nav">
		<li class="done"><a href="entitlement.html"><span>1</span><br>Getting<br> started</a></li>
		<li class="done"><a href="business-names-05.html"><span>2</span><br>Business<br> name</a></li>
		<li class="alert"><a href="business-details.html"><span>3</span><br>Business<br> details</a></li>
		<li class="active"><span>4</span><br>Taxation<br>details</li>
		<li><span>5</span><br>Confirm<br> application</li>
		<li><span>6</span><br>Payment<br> &amp; submit</li>
	</ul>
</div><!-- progress-container -->
<h1 id="heading" tabindex="-1">4. Taxation details <span>(Step 4 of 6)</span></h1>
<p>All fields are required unless marked as optional.</p>

<div id="section1" class="sub-section-container sub-section-open">
	<h2>Goods and services tax (GST)</h2>
	<div class="sub-section-content">
		<div id="gst-section">
			<fieldset>
				<div class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="start-date" class="input-right">What is your date of registration for GST? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
					</div><!-- col -->
					<div class="col6 last">
						<input id="start-date" type="date"/>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row">
					<div class="col6">
						<label for="required" class="input-right">Are you required to register for GST?</label>
					</div><!-- col -->
					<div class="col5">
						<div class="radio-toggle">
							<label class="on label-left" for="required-no"><input id="required-no" type="radio" name="required" value="no"><span>No</span></label>
							<label class="off label-right" for="required-yes"><input id="required-yes" type="radio" name="required" value="yes"><span>Yes</span></label>
						</div>
					</div><!-- col -->
					<div class="col1 last">
						<a href="#help" class="cd-btn"><img class="help-icon " src="img/ico-help-form.png" alt="Help with question" /></a>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div id="turnover-section" class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="turnover" class="input-right">What is your GST turnover?</label>
					</div><!-- col -->
					<div class="col6 last custom-controls">
						<p><input type="radio" name="turnover" id="radio_1" /><label for="radio_1">$0 to $74,999</label></p>
						<p><input type="radio" name="turnover" id="radio_2"/><label for="radio_2">$75,000 to $149,999</label></p>
						<p><input type="radio" name="turnover" id="radio_3" /><label for="radio_3">$150,000 to $1,999,999</label></p>
						<p><input type="radio" name="turnover" id="radio_4" /><label for="radio_4">$2 million to $19,999,999</label></p>
						<p><input type="radio" name="turnover" id="radio_5" /><label for="radio_5">$20 million and over</label></p>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div id="activity-statement" class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="statements" class="input-right">How often will you lodge your activity statements?</label>
					</div><!-- col -->
					<div id="activity-statement-frequency" class="col6 last">
						<div class="radio-toggle" id="activity-statement-frequency-1">
							<label id="asf-monthly" class="label-left" for="freq_1"><input type="radio" name="statements" id="freq_1" /> <span>Monthly</span></label>
							<label id="asf-quarterly" class="label-middle" for="freq_2"><input type="radio" name="statements" id="freq_2" /> <span>Quarterly</span></label>
							<label id="asf-annually" class="label-right" for="freq_3"><input type="radio" name="statements" id="freq_3" /> <span>Annually</span></label>
						</div>
						<div id="activity-statement-frequency-2">
							<p>For a GST turnover of $20 million and over your activity statements must be lodged monthly.</p>
						</div>

					</div><!-- col -->

				</div><!-- grid-row -->

				<div class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="gst-account" class="input-right">Do you intend to account for GST on a cash or non-cash (accruals) basis?</label>
					</div><!-- col -->
					<div class="col6 last">
						<div class="radio-toggle">
							<label class="label-left" for="gst-account-cash"><input id="gst-account-cash" type="radio" name="gst-account"><span>Cash</span></label>
							<label class="label-right" for="gst-account-non-cash"><input id="gst-account-non-cash" type="radio" name="gst-account"><span>Non-cash</span></label>
						</div>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="import" class="input-right">Do you import goods into Australia?</label>
					</div><!-- col -->
					<div class="col5">
						<div class="radio-toggle">
							<label class="on label-left" for="import-no"><input id="import-no" type="radio" name="import"><span>No</span></label>
							<label class="off label-right" for="import-yes"><input id="import-yes" type="radio" name="import"><span>Yes</span></label>
						</div>
					</div><!-- col -->
					<div class="col1 last">
						<a href="#help" class="cd-btn"><img class="help-icon" src="img/ico-help-form.png" alt="Help with question" /></a>
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>
		</div>
				
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" onclick="location.href='business-details.html'">Previous</button>
				<button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div id="section2" class="sub-section-container">
	<h2>Pay as you go (PAYG) withholding</h2>
	<div class="sub-section-content">
		<div id="payg-container">
			<fieldset>

				<div class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="payg-start-date" class="input-right">When will withholding commence? <span class="field-note">(dd/mm/yyyy)</span></label>
					</div><!-- col -->
					<div class="col6 last">
						<input id="payg-start-date" type="date" />
					</div><!-- col -->
				</div><!-- grid-row -->

				<div id="payg-how" class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="payg-how" class="input-right">How will you provide your PAYG withholding payment summary annual report to the ATO?</label>
					</div><!-- col -->
					<div class="col6 last custom-controls">
						<p><input id="payg-how-1" type="radio" class="radio" name="payg-how" value="radio_1" /><label for="payg-how-1">Electronically</label></p>
						<p><input id="payg-how-2" type="radio" class="radio" name="payg-how" value="radio_2" /><label for="payg-how-2">Paper form supplied by the ATO</label></p>
					</div><!-- col -->                                
				</div><!-- grid-row -->

				<div id="payees-how" class="grid-row grid-row-reveal clearfix" style="display: none">
					<div class="col6">
						<label for="payees-how" class="input-right">How will you provide payment summaries to your payees?</label>
					</div><!-- col -->
					<div class="custom-controls col6 last">
						<p>
							<input id="payees-how-1" type="radio" class="radio" name="payees-how" value="radio_1" />
							<label for="payees-how-1">Print your own payment summaries</label>
						</p>
						<p>
							<input id="payees-how-2" type="radio" class="radio" name="payees-how" value="radio_2" />
							<label for="payees-how-2">Use payment summaries supplied by the ATO</label>
						</p>
					</div><!-- col -->  
				</div><!-- grid-row -->

				<div id="employee-number" class="grid-row grid-row-reveal" style="display: none">
					<div class="col6">
						<label for="no-of-employees" class="input-right">How many employees do you estimate you will pay? <span class="field-note">(enter a number)</span></label>
					</div><!-- col -->
					<div class="col6 last">
						<input id="no-of-employees" type="number" />
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row grid-row-reveal">
					<div class="col6">
						<label for="expected-amount" class="input-right">What amount do you expect to withhold from payments to your payees each year? <span class="field-note">(enter a number)</span></label>
					</div><!-- col -->
					<div class="col6 last">
						<input id="expected-amount" type="number" />
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row clearfix">
					<div class="col6">
						<label for="residents" class="input-right">Will you pay royalties, dividends or interest to non-residents, or are you an investment body that will pay investment income to Australian residents?</label>
					</div><!-- col -->
					<div class="col6 last">
						<div class="radio-toggle">
							<label class="on label-left" for="residents-no"><input id="residents-no" type="radio" name="residents"><span>No</span></label>
							<label class="off label-right" for="residents-yes"><input id="residents-yes" type="radio" name="residents"><span>Yes</span></label>
						</div>
					</div><!-- col -->
				</div><!-- grid-row -->

			</fieldset>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button>
				<button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div class="sub-section-container">
	<h2>Luxury Car Tax (LCT)</h2>
	<div class="sub-section-content">
		<fieldset>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_RegistrationDate">What is the start date of your LCT registration? <span class="field-note nowrap">(dd/mm/yyyy)</span></label>
				</div>
				<div class="col6 last">
					<input class="date hasDatepicker" id="RegistrationDate" type="text" value="24/05/2016">
				</div>
			</div>
			
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="LctDetails_AnnualLiability">What is annual LCT liability?</label>
				</div>
				<div class="col6 last custom-controls">
					<p>
						<input name="LctDetails.AnnualLiability" id="LctDetails_AnnualLiabilities_0_" type="radio" value="$0 to $49,999">
						<label for="LctDetails_AnnualLiabilities_0_">$0 to $49,999</label>
					</p>
					<p>
						<input name="LctDetails.AnnualLiability" id="LctDetails_AnnualLiabilities_1_" type="radio" value="$50,000 to $99,999">
						<label for="LctDetails_AnnualLiabilities_1_">$50,000 to $99,999</label>
					</p>
					<p>
						<input name="LctDetails.AnnualLiability" id="LctDetails_AnnualLiabilities_2_" type="radio" value="$100,000 to $499,999">
						<label for="LctDetails_AnnualLiabilities_2_">$100,000 to $499,999</label>
					</p>
					<p>
						<input name="LctDetails.AnnualLiability" id="LctDetails_AnnualLiabilities_3_" type="radio" value="$500,000 to $5 million">
						<label for="LctDetails_AnnualLiabilities_3_">$500,000 to $5 million</label>
					</p>
					<p>
						<input name="LctDetails.AnnualLiability" id="LctDetails_AnnualLiabilities_4_" type="radio" value="More than $5 million">
						<label for="LctDetails_AnnualLiabilities_4_">More than $5 million</label>
					</p>
				</div>
			</div>
									
			<div class="grid-row clearfix">
				<p class="margin4"><strong>What is the distribution of your business activities?</strong></p>
			</div>
			
			<div class="grid-row no-padding">
				<div class="col4">
					<label class="input-right" for="importpercentage">Importing</label>
				</div>
				<div class="col8 last">
					<input class="percentage input-percent" name="importpercentage" id="importpercentage" type="number" value="10">
					<div class="slider"></div>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="manufacturingpercentage">Manufacturing</label>
				</div>
				<div class="col8 last">
					<input class="percentage input-percent" name="manufacturingpercentage" id="manufacturingpercentage" type="number" value="20">
					<div class="slider"></div>
				</div>
			</div>
			<div class="grid-row no-padding">
				<div class="col4">
					<label class="input-right" for="retailingpercentage">Retailing</label>
				</div>
				<div class="col8 last">
					<input class="percentage input-percent" name="retailingpercentage" id="retailingpercentage" type="number" value="30">
					<div class="slider"></div>
				</div>
			</div>
			<div class="grid-row no-padding">
				<div class="col4">
					<label class="input-right" for="wholesalingpercentage">Wholesaling</label>
				</div>
				<div class="col8 last">
					<input class="percentage input-percent" name="wholesalingpercentage" id="wholesalingpercentage" type="number">
					<div class="slider"></div>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="wholesalingpercentage">Total</label>
				</div>
				<div class="col1">
					<p style="text-align: right; padding-right: 6px;"><strong><span id="totalpercentage">0%</span></strong></p>
				</div>
				<div class="col4 last">
					<p><span class="field-note">Cannot exceed 100%</span></p>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label class="input-right" for="mainactivity">Which best describes your business as your Main activity? <span class="field-note nowrap">(select any that apply)</span></label>
				</div>
				<div class="col6 last custom-controls">
					<select name="mainactivity" class="valid" id="mainactivity" aria-invalid="false"><option value="">Please select...</option>
						<option>Importing</option>
						<option>Manufacturing</option>
						<option>Retailing</option>
						<option>Wholesaling</option>
					</select>
				</div>
			</div>
		</fieldset>
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button>
				<button type="button" class="btn btn-default" onclick="location.href='confirm.html'">Continue to step 5</button>
			</div>
		</div>
	</div>
</div>

<div class="help" id="help">
	<div class="cd-panel from-right">
		<div class="cd-panel-header">
			<a href="#" class="cd-panel-close">Close</a>
			<h2 id="helpTopic">Help topics</h2>
			<p class="cd-panel-print">
				<a href="#" id="aPrint" onclick="printHelp(); return false;">Print</a>
			</p>
		</div>
		<div class="cd-panel-container">
			<div class="cd-panel-content">
				<div id="helpFile" class="showhide">

				</div><!-- showhide -->
			</div><!-- cd-panel-content -->
		</div><!-- cd-panel-container -->
	</div><!-- cd-panel -->
</div>

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery-ui.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>

<script>
	$(document).ready(function() {
		$( ".slider" ).slider({
			create: function(event, ui) {
						if ($(this).prev().val() == "")
							$(this).prev().val(0);
					},
			change: function(event, ui) {
						var sum = 0;
						$(".slider").each(function() {
							sum += Number($(this).slider("option", "value"));
						});
						var val = ui.value;
						if (sum > 100) {
							var others = sum - val;
							val = 100 - others;
							sum = 100;
							reset = true;
							$(this).slider("option", "value", val);
						}
						// alert("Val: " + val + ", tot: " + sum);
						$(this).prev().val(val);
						$("#totalpercentage").html(sum + "%");
						setOptions();
					},
			slide: function(event, ui) {
				$(this).prev().val(ui.value);
			}
		}).promise().done(function() {
			$(".slider").each(function(){
				$(this).slider("option", "value", $(this).prev().val());
			});
		});
		
		$(".percentage").on("blur", function() {
			if ($(this).val() > 100)
				$(this).val(100);
			if ($(this).val() < 0)
				$(this).val(0);
			var slider = $(this).next();
			$(slider).slider("option", "value", $(this).val());
		});
	});
	
	function setOptions() {
		var max = 0;
		$(".slider").each(function() {
			if ($(this).slider("option", "value") > max)
				max = $(this).slider("option", "value");
		});
		var count = 0;
		var last = 0;
		var selected = $("#mainactivity").selectedIndex;
		$(".slider").each(function(ind, obj) {
			if ($(obj).slider("option", "value") == max) {
				count++;
				$("#mainactivity option").eq(ind + 1).css("display", "block");
				last = ind + 1;
			} else {
				if (ind + 1 == selected)
					selected = -1;
				$("#mainactivity option").eq(ind + 1).css("display", "none");
			}
		});
		if (count == 1)
			selected = last;
		$("#mainactivity").prop("selectedIndex", selected);
	}
</script>
<script>

	$(document).ready(function () {
		navigationWithinPage();
		initSaveForLater();
		initApplicationOptions();
					
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

		// the following code is to register the slide up/down effect. this is
		// a customized jQuery plugin, the element that registered registerToggleSlide is
		// actually the scope of the effect.
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

		// Hook up GST turnover radio button event.
		$("input[name=turnover]:radio").change(function () {
			updateActivityLodgementFrequency();
		});

		// Hook up required to register for GST.
		$("input[name=required]:radio").change(function () {
			updateActivityLodgementFrequency();
		});

		// Default lodglement options.
		updateActivityLodgementFrequency();

		// Load help content
		loadHelpContent("tax-details/taxdetails-gst-help.html");

		// Hook PAYG change events
		$("input[name=payg-how]:radio").change(function () {
			var electronically = $("input[name=payg-how]:checked").val() === "radio_1";

			if (electronically) {
				$("#payees-how").hide();
				$("#employee-number").hide();
			} else {
				$("#payees-how").show();
			}                               
		});

		// Hook PAYG change events
		$("input[name=payees-how]:radio").change(function () {
			var print = $("input[name=payees-how]:checked").val() === "radio_1";

			if (print) {
				$("#employee-number").hide();
			} else {
				$("#employee-number").show();
			}
		});
	});

	function updateActivityLodgementFrequency() {
		var requiredToRegister = $("input[name=required]:checked").val() === "yes";
		var twentyMillionOrOver = $("input[name=turnover]:checked").val() === "radio_5";

		if (twentyMillionOrOver) {
			// Force monthly statements
			$("#activity-statement-frequency-1").hide();
			$("#activity-statement-frequency-2").show();
			return;
		}

		// Show frequency selector and hide 'only monthly' content.
		$("#activity-statement-frequency-1").show();
		$("#activity-statement-frequency-2").hide();

		if (requiredToRegister) {
			// Hide annual option
			$("#asf-annually").hide();
			$("#asf-quarterly").removeClass("label-middle");
			$("#asf-quarterly").addClass("label-right");
		} else {
			// Show annual option
			$("#asf-annually").show();
			$("#asf-quarterly").addClass("label-middle");
			$("#asf-quarterly").removeClass("label-right");
		}
	}
</script>
