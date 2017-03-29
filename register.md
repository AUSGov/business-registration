---
title: Business registration
layout: default
---
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Australian Government Business Registration Service.</strong></p>
<p>Here you can apply for your key business and tax registrations in one place.<a class="cd-btn help" href="#"><span>more information</span></a></p>
<div id="select-registrations" class="sub-section-container sub-section-open">
	<h2>Select registrations</h2>
	<div class="sub-section-content">
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
<div class="sub-section-container">
	<h2>Information you should have already</h2>
	<div class="sub-section-content">
		<p>You've selected:</p>
		<ul style="list-style: none">
			<li><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 5px; float: left" alt="selected"> Australian Business Number (ABN)</li>
			<li><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 5px; float: left" alt="selected"> Business Name</li>
			<li><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 5px; float: left" alt="selected"> Goods and Services Tax (GST)</li>
			<li><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 5px; float: left" alt="selected"> Pay as you go withholding (PAYG)</li>
			<li><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 5px; float: left" alt="selected"> Fringe Benefits Tax (FBT)</li>
		</ul>
		<p>To apply for these registrations, you should have the following information ready:</p>
		<ul>
			<li>Your proposed business name</li>
			<li>Names and addresses of all business associates</li>
			<li>Your individual Tax File Number (TFN) to confirm your identity</li>
		</ul>
		<div class="registration-tip">
			<h3>Don't have all the information handy?</h3>
			<p>Don't worry, you can start filling in the form and finish it later once you have all the information. To return to your saved application, select "login" from the profile menu on the top right hand of the screen.</p>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button id="prev" class="btn previous" type="button">Previous</button>
				<button id="next" type="button" onclick="location.href='confirm-company.html'" class="btn btn-default previous">Start applying</button>
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

