---
title: Help me decide
layout: default
---

<h1 id="heading" tabindex="-1">Business structure</h1>
<p class="meter-description"><strong>Step <span id="stepNo">1</span>:</strong> <span id="percentCompleted">5</span>% complete</p>
<div class="meter">
	<span id="percentMeter" style="width: 5%"></span>
</div><!-- meter -->

<div id="questions"></div>

<div class="controls-container">
	<div class="controls-content">
		<button type="button" id="previous" class="btn">Previous</button>
		<button type="button" id="next" class="btn btn-default">Next</button>
	</div><!-- controls-content -->
</div>
		
<div class="help" id="help">
	<div class="cd-panel from-right">
		<div class="cd-panel-header">
			<a href="#gst-form" class="cd-panel-close">Close</a>
			<h2 id="helpTopic">Help topics</h2>
			<p class="cd-panel-print"><a href="#" id="aPrint" onclick="printHelp(); return false;">Print</a></p>
		</div>
		<div class="cd-panel-container">
			<div class="tmp-wrapper" style="padding: 120px 0 65px 0; height: 100%; box-sizing: border-box;">
				<div class="tmp-hdr" style="margin-top:-120px; height: 120px;"></div>
				<div class="" style="height: 100%; overflow-y:scroll; position: relative; padding: 0 5%">
					<div id="helpFile" class="showhide">
					</div>
				</div>
				<div class="tmp-ftr" style="margin-bottom:-65px; margin-top: 5px; height: 60px; width: 100%; text-align: center; background-color: #eee; padding-top: 1px;">
					<p><strong>Need more help? <a href="https://www.business.gov.au/contact" target="_blank">Contact business.gov.au <span class="visuallyhidden">(opens in new window)</span></a> on 13&nbsp;28&nbsp;46</strong></p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="help" id="help">
	<div class="cd-panel from-right">
		<div class="cd-panel-header">
			<a href="#gst-form" class="cd-panel-close">Close</a>
			<h2 id="helpTopic">Help topics</h2>
			<p class="cd-panel-print"><a href="#" id="aPrint" onclick="printHelp(); return false;">Print</a></p>
		</div>
		<div class="cd-panel-container">
			<div class="cd-panel-content">
				<div id="helpFile" class="showhide">
				</div>
			</div>
		</div>
	</div>
</div> -->

<script src="../scripts/jquery-2.1.1.js"></script>
<script src="../scripts/jquery.collapse-help-me-decide.js"></script>
<script src="../scripts/PrintThis.js"></script>
<script src="../scripts/HelpMeDecideBusinessStructure.js"></script>
<script src="../scripts/main-b.js?v=1"></script>
<script src="../scripts/functions.js"></script>

<script>
	jQuery(document).ready(function ($) {
		initDiscoveryPage();
	});

	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date(); a = s.createElement(o),
		m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	ga('create', 'UA-66346016-1', 'auto');
	ga('send', 'pageview');
</script>
