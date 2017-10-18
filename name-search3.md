---
title: Name search
layout: default-no-nav-no-footer
---
<h1>{{ page.title }}</h1>
<div id="search-container" class="compare-wrapper">
	<div class="grid-row clearfix">
		<div class="col4">
			<label for="name" class="input-right">Enter proposed name</label>
		</div>
		<div class="col8 last">
			<input type="text" id="name" value="Connections" style="max-width: 26em" /><br />
			<input type="checkbox" id="busname" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="busname">Business name</label>
			<input type="checkbox" id="domname" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="domname">Domain name</label>
			<input type="checkbox" id="trademark" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="trademark">Trademark</label>
			<input type="checkbox" id="social" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="social">Social media</label><br />
			<button id="search" class="btn btn-default" style="margin-top: 0.5em;">Check my name</button>
		</div>
	</div>
</div>
<ul id="results" class="block-menu clearfix" style="display: none;">
	<li id="busname-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Business name</h2>
				</div>
			</div>
			<p style="margin-bottom: 1em; font-size: 100%;"><strong>CONNECTIONS</strong> is not available</p>
			<p style="margin-bottom: 0.5em;">CONNECTIONS is identical or nearly identical to a name already registered, or currently under application or review.</p>
			<p>Identical or nearly identical name match:</p>
			<ul>
				<li>CONNECTIONS INC</li>
			</ul>
		</span>
	</li>
	<li id="domname-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Domain names</h2>
				</div>
			</div>
			<p style="margin-bottom: 1em; font-size: 100%;"><strong>connections.com.au</strong> is unavailable</p>
			<p>Other domain names:</p>
			<ul>
				<li>connections.com <strong>UNAVAILABLE</strong></li>
				<li>connections.com.au <strong>UNAVAILABLE</strong></li>
				<li>connections.net.au <strong>UNAVAILABLE</strong></li>
				<li>connections.org.au <strong>UNAVAILABLE</strong></li>
			</ul>
		</span>
	</li>
	<li id="trademark-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Trade marks</h2>
				</div>
			</div>
			<p style="margin-bottom: 0.5em;">Searching for registered Trade marks related to <strong>&apos;Connections&apos;</strong> returned <strong>1003 results</strong>. You can view and refine your results with the IP-Australia <a href="https://search.ipaustralia.gov.au/trademarks/search/quick/result?q=connections">Trade Mark Search</a> tool.</p>
			<p>For further information about Trade marks visit the <a href="https://www.ipaustralia.gov.au">IP-Australia</a> website.</p>
		</span>
	</li>
	<li id="social-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Social media</h2>
				</div>
			</div>
			<p style="margin-bottom: 0.5em;">See below for the status of your name on popular social media sites:</p>
			<ul style="list-style-type: none; margin-left: -20px;">
				<li><span class="fa fa-facebook-official" style="width: 22px; font-size: 150%; color: #3B5B9C"></span> @Connections is UNAVAILABLE</li>
				<li><span class="fa fa-twitter" style="width: 22px; font-size: 150%; color: #55acee"></span> @Connections is UNAVAILABLE</li>
				<li><span class="fa fa-instagram" style="width: 22px; font-size: 150%;color: #c13584"></span> @Connections is UNAVAILABLE</li>
				<li><span class="fa fa-linkedin-square" style="width: 22px; font-size: 150%;color: #0077b5"></span> @Connections is UNAVAILABLE</li>
			</ul>
		</span>
	</li>
</ul>
<script>
	$(document).ready(function() {
		$("#search").click(function() {
			$(this).blur();
			$("[id$=-results]").hide();
			var isChecked = false;
			$("#search-container :checked").each(function() {
				$("#" + $(this).attr('id') + '-results').show();
				isChecked = true;
			});
			if (isChecked) {
				$("#results").show();
			}
		});
	});
</script>

