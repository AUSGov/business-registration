---
title: Business registration
layout: default
---
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p><strong>Welcome to the Australian Government Business Registration Service.</strong> <br>Here you can apply for your key business and tax registrations in one place.</p>
<p><strong>Are you new to business? </strong>To help you get started, see business.gov.au's <a href="https://www.business.gov.au/Info/Plan-and-Start/Templates-and-tools/Checklists/Starting-your-business-checklist" target="_blank">Starting your business checklist <span class="visuallyhidden">(opens in new window)</span></a> and download a <a href="https://www.business.gov.au/info/plan-and-start/templates-and-tools/business-plan-template-and-guide" target="_blank">business plan template <span class="visuallyhidden">(opens in new window)</span></a>.</p>
<a class="cd-btn help" href="#help-selectregistrationsdescription"><span>Help - Select registrations</span></a>
<p></p>
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
					<input id="co" type="checkbox" value="co">
					<label for="co">Australian Company and Company name&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
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
					<input id="payg" type="checkbox" value="payg">
					<label class="has-help" for="payg">Pay as you go (PAYG) withholding&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
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
					<label for="auskey">AUSkey&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
				</p>
			</div><!-- col -->
		</div><!-- grid-row -->
				<div class="registration-tip">
			<h3>Not sure?</h3>
			<p>If you <strong>already have an ABN</strong> and just want to apply for:</p>
			<ul><li>a tax registration, please visit the <a href="#" target="_blank">Apply for tax registrations</a> page.</li>
			<li>an AUSkey login, please visit the <a href="#" target="_blank">Apply for AUSkey login</a> page.</li></ul>
			<strong>Not sure what registrations you need?</strong> We can help you work it out.
			<p>
				<a href="help-me-decide/eligibility.html">Help me decide</a>
			</p>
		</div>

		<div class="controls-content">
			<button type="button" id="start-applying" class="btn btn-default next">Next</button>
		</div><!-- controls-content -->
	</div>
</div>
<div class="sub-section-container">
	<h2>Information you'll need</h2>
	<div class="sub-section-content">
		<div>
			<p>For the registrations you've selected above, you'll need to provide:</p> 
			<ul>
				<li>name and contact details of the applicant</li>
				<li>address and contact details of the business or organisation</li>
				<li>details of each person or organisation associated with the business (e.g. partner, director, secretary or shareholder)</li>
				<li>tax agent number (if you wish to use an agent)</li>

				<li>ABN reference number (if you have an unfinished application)</li>
				<li>details of business activities</li>
				<li>tax file number (optional for ABN)</li>                    <li>proof of identity information such as name, address and birth details</li>
				<li>business structure</li> 
			</ul>
			<h3>Don't have all the information handy?</h3>
			<p>No problem! You can start the form now, save what you've done, and come back later once you have all the information. You'll have up to <strong>28 days</strong> to submit your application before it's deleted.</p> 
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

