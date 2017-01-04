---
title: Business names
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" style="width: 23%"></span>
	</div><!-- meter -->
	<ul class="section-nav">
		<li class="done"><a href="entitlement.html"><span>1</span><br>Getting<br> started</a></li>
		<li class="active"><span>2</span><br>Business<br> name</li>
		<li><span>3</span><br>Business<br> details</li>
		<li><span>4</span><br>Taxation<br>details</li>
		<li><span>5</span><br>Confirm<br> application</li>
		<li><span>6</span><br>Payment<br> &amp; submit</li>
	</ul>
</div><!-- progress-container -->
<h1 id="heading" tabindex="-1">2. Business name <span>(Step 2 of 6)</span></h1>

<div class="result-container">
	<div class="result-row">
		<div class="result-cell cell-icon">
			<img src="img/ico-tick-green.png" alt="Success" />
		</div>
		<div class="result-cell cell-detail">
			<h2>Bob's Plumbing</h2>
			<p>This business name is currently available.</p>
		</div>
		<div class="result-cell cell-action">
			<label class="visuallyhidden" for="registration-duration">Select duration:</label>
			<select class="registration-duration" id="registration-duration">
				<option value="1" selected="selected">1 year $33</option>
				<option value="2">3 years $78</option>
			</select>
			<button type="button" class="btn btn-default btn-inline" onclick="location.href='business-names-02.html'">Add this name</button> <br /><a href="business-names.html" class="smaller">Search for something else</a>
		</div>
	</div><!-- result-row -->
</div><!-- result-container -->

<div id="similar-names" class="tip">
	<div id="small-list">
		<h3>Is your name unique?</h3>
		<p>There may be names already registered that are similar to yours.</p>
		<ul>
			<li>Bob's Gasfitting</li>
			<li>Bob's Plumbing Services</li>
			<li>Bob's Mobile Plumbing</li>
		</ul>
		<p><button type="button" id="trigger" class="btn btn-small hide-me">Show me more</button></p>
		<!-- p class="hide-me">Show me <a id="trigger" href="#" onclick="return false;">the rest</a>.</p -->
		<div id="the-rest" style="margin-top: -1em; display: none;">
			<ul>
				<li>Bob's Gasfitting</li>
				<li>Bob's Plumbing Services</li>
				<li>Bob's Mobile Plumbing</li>
				<li>Bob's Gasfitting</li>
				<li>Bob's Plumbing Services</li>
				<li>Bob's Mobile Plumbing</li>
				<li>Bob's Gasfitting</li>
				<li>Bob's Plumbing Services</li>
				<li>Bob's Mobile Plumbing</li>
				<li>Bob's Gasfitting</li>
				<li>Bob's Plumbing Services</li>
				<li>Bob's Mobile Plumbing</li>
			</ul>
			<p><button id="hide-names" class="btn btn-small" type="button">Hide similar names</button></p>
			<!-- p><a id="hide-names" href="#">Hide</a> similar names</p -->
		</div>
	</div>
</div><!-- tip -->

<div class="controls-container">
	<div class="controls-content">
		<button type="button" class="btn previous" onclick="location.href = 'business-names.html'">Previous</button>
		<button type="button" id="btnContinue" class="btn btn-default" onclick="location.href='business-details.html'">Continue to step 3</button>
	</div><!-- controls-content -->
</div><!-- controls-container -->
   
<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>

<script type="text/javascript">
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
	$(document).ready(function () {
		initSaveForLater();
		initApplicationOptions();
	});

	$('#trigger').click(function () {
		$('.hide-me').fadeOut('fast', function () { $('#the-rest').fadeIn('fast'); });
		return false;
	});

	$('#hide-names').click(function () {
		$('#similar-names').hide('fast');
		return false;
	});
</script>
