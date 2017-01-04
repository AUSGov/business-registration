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
<p class="intro">Enter a name to check its availability. Some names may require manual assessment based on <a href="">business naming rules</a>.</p>
<div class="card clearfix">
	<div class="form-row">
		<label for="name-search">Search for name</label><br />
		<input id="name-search" class="larger" type="text" value="Bob's Plumbing"> <button type="button" class="btn btn-default btn-inline" onclick="location.href='business-names-01.html'">Check</button><br />
	</div><!-- form-row -->
</div><!-- card -->
			
<div class="controls-container">
	<div class="controls-content">
		<button type="button" class="btn previous" onclick="location.href = 'entitlement.html'">Previous</button><button type="button" id="btnContinue" class="btn btn-default" onclick="location.href='business-details.html'">Continue to step 3</button>
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
</script>

