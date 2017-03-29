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
		<div class="grid-row clearfix">
			<div class="col6">
				<h3>Add registrations</h3>
				<div class="custom-controls">
					<p>
						<input id="bn" type="checkbox" value="bn">
						<label class="has-help" for="bn">Business Name</label>
					</p>
					<p>
						<input id="payg" type="checkbox" value="payg">
						<label class="has-help" for="payg">Pay as you go (PAYG) withholding&nbsp;<a class="cd-btn help" href="#"><span>more information</span></a></label>
					</p>
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
				</div>
			</div>
			<div class="col6 last">
				<!-- <div class="grid-row">
				<h3>Registration details</h3>
					<p><strong>CORPORATION PTY LTD</strong><br />
					<strong>ACN:</strong> 48123456789<br />
					<strong>ABN:</strong> 123456789</p>
				</div> -->
				<div class="grid-row">
					<div class="col10 last">
						<div class="">
							<h3>Previously registered</h3>
							<p><strong>CORPORATION PTY LTD</strong><br />
							<strong>ACN:</strong> 48123456789<br />
							<strong>ABN:</strong> 123456789</p>
							<ul style="list-style: none; margin-left: -40px">
								<li><span class="fa fa-check" style="color: green; font-size:150%; margin-right: 5px"></span> Australian Business Number (ABN)</li>
								<li><span class="fa fa-check" style="color: green; font-size:150%; margin-right: 5px"></span> Australian Company</li>
								<li><span class="fa fa-check" style="color: green; font-size:150%; margin-right: 5px"></span> Business Name</li>
								<li><span class="fa fa-check" style="color: green; font-size:150%; margin-right: 5px"></span> Goods and Services Tax (GST)</li>
								<li><span class="fa fa-check" style="color: green; font-size:150%; margin-right: 5px"></span> AUSKey</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!-- grid-row -->
		<div class="controls-content">
			<button type="button" id="start-applying" class="btn btn-default next">Next</button>
		</div><!-- controls-content -->
	</div>
</div>
<div class="sub-section-container" role="region" aria-labelledby="section-heading-2">
	<h2 id="section-heading-2">Information you'll need<span class="visuallyhidden"> (current section)</span></h2>
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

