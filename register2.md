---
title: Ready to register
layout: default
---

<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<div class="grid-row">
	<div class="col9 select-registrations">
		<p class="intro">This is the start page to register for an Australian business. To get started, choose the items relevant to your business then click <strong>start applying</strong>.</p>
		<fieldset id="select-registrations" class="custom-controls">
			<legend class="larger">Select registrations</legend>
			<div class="grid-row clearfix">
				<div class="col7">
					<p>
						<input id="abn" type="checkbox" value="abn">
						<label for="abn">Australian Business Number (ABN) <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="bn" type="checkbox" value="bn">
						<label for="bn">Business Name <a class="cd-btn inline help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="gst" type="checkbox" value="gst">
						<label for="gst">Goods and Services Tax (GST)</label>
					</p>
					<p>
						<input id="co" type="checkbox" value="co">
						<label for="co">Australian Company</label>
					</p>
					<p>
						<input id="payg" type="checkbox" value="payg">
						<label for="payg">Pay as you go withholding (PAYG) <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="tfn" type="checkbox" value="tfn">
						<label for="tfn">Business Tax File Number <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
				</div><!-- col -->
				<div class="col5 last">
					<p>
						<input id="fbt" type="checkbox" value="fbt">
						<label for="fbt">Fringe Benefits Tax <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="lct" type="checkbox" value="lct">
						<label for="lct">Luxury Car Tax <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="ftc" type="checkbox" value="ftc">
						<label for="ftc">Fuel Tax Credits <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="wet" type="checkbox" value="wet">
						<label for="wet">Wine Equalisation Tax <a class="cd-btn help" href="#"><span>help</span></a></label>
					</p>
					<p>
						<input id="auskey" type="checkbox" value="auskey">
						<label for="auskey">AUSkey</label>
					</p>
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>
		<div class="controls-content">
			<button type="button" id="next" class="btn btn-default">Start applying</button>
		</div><!-- controls-content -->
	</div><!-- col -->
	<div class="col3 last">
		<div class="big-help-box">
			<h2>Not sure?</h2>
			<p>Not sure if you're a hobbyist, or which registrations you may need? We can help you decide, and help create a list of suggested registrations and potential costs.</p>
			<p><button type="button" class="btn btn-default" onclick="location.href = 'help-me-decide/eligibility.html'">Help me decide tool</button></p>
		</div><!-- big-help-box -->
		<div class="sign-in-box">
			<h2>Previous registrations</h2>
			<p>Return to an open application or check status.</p>
			<p>
				<label for="un">Email:</label><br />
				<input type="text" id="un" />
			</p>
			<p>
				<label for="pw">Password:</label><br />
				<input type="text" id="pw" />
			</p>
			<p style="margin-bottom: 2em"><button type="button" class="btn btn-default" style="margin: 0; vertical-align: middle">Sign in</button>&nbsp; <a href="" class="smallest">Forgotten password?</a></p>
		</div><!-- sign-in-box -->
	</div><!-- col -->
</div><!-- grid-row -->

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>

<script type="text/javascript">
	$(document).ready(function () {
	
		var qryStr = getUrlVars();
		if (qryStr.type !== undefined) {
			$(qryStr.type.split(',')).each(function(i, str) {
				$('#' + str).prop('checked', true);
			});
		}
	
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

