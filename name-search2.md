---
title: Name search
layout: default-no-nav-no-footer
---
<h1>{{ page.title }}</h1>
<div class="grid-row">
	<div id="search-container">
		<label for="name">Enter proposed name</label><br />
		<input type="text" id="name" value="Carpool Karaoke" /><br />
		<input type="checkbox" id="busname" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="busname">Business name</label>
		<input type="checkbox" id="domname" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="domname">Domain name</label>
		<input type="checkbox" id="trademark" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="trademark">Trademark</label>
		<input type="checkbox" id="social" style="width: 20px; height: 20px; margin: 0 10px 0 0:" checked /><label style="font-size: 75%" for="social">Social media</label><br />
		<button id="search" class="btn btn-default" style="margin-top: 0.5em;">Check my name</button>
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
			<p style="margin-bottom: 0.5em;"><strong>CARPOOL KARAOKE</strong> is currently available</p>
			<p>Similar registered names:</p>
			<ul>
				<li>COO-EE KARAOKE</li>
				<li>A. KARAOKE CO</li>
				<li>STARSTRUCK KARAOKE</li>
				<li>YEAR 2000 KARAOKE</li>
				<li>YOU'RE THE STAR KARAOKE</li>
				<li>ZERO KARAOKE BAR</li>
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
			<p style="margin-bottom: 0.5em;"><strong>carpoolkaraoke.com.au</strong> is unavailable</p>
			<p>Other domain names:</p>
			<ul>
				<li>carpoolkaraoke.com <strong>UNAVAILABLE</strong></li>
				<li>carpoolkaraoke.com.au <strong>UNAVAILABLE</strong></li>
				<li>carpoolkaraoke.net.au <strong>UNAVAILABLE</strong></li>
				<li>carpoolkaraoke.org.au <strong>AVAILABLE</strong></li>
			</ul>
		</span>
	</li>
	<li id="trademark-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Trademarks</h2>
				</div>
			</div>
			<p>The following registrations were returned:</p>
			<ul>
				<li><a href="#">CARPOOL KARAOKE (Class 41)</a> PENDING<br>Owners: CBS Broadcasting inc</li>
				<li><a href="#">CARPOOL KARAOKE (Class 38)</a> PENDING<br>Owners: CBS Broadcasting inc</li>
			</ul>
			<p style="margin-top: 0.5em;"><strong>Note:</strong> this search may not provide an exhaustive list.</p>
			<p>Visit the <a href="#">IP-Australia website</a> to perform more detailed tradmark searches.</p>
		</span>
	</li>
	<li id="social-results" class="run" style="display: none;">
		<span>
			<div class="flag">
				<div class="body">
					<h2>Social media</h2>
				</div>
			</div>
			<p style="margin-bottom: 0.5em;">See below for the status of your name on various popular social media sites:</p>
			<ul style="list-style-type: none; margin-left: -40px;">
				<li><span class="fa fa-facebook-official" style="width: 22px; font-size: 150%; color: #3B5B9C"></span> @CarpoolKaraoke is UNAVAILABLE</li>
				<li><span class="fa fa-twitter" style="width: 22px; font-size: 150%; color: #55acee"></span> @CarpoolKaraoke is UNAVAILABLE</li>
				<li><span class="fa fa-instagram" style="width: 22px; font-size: 150%;color: #c13584"></span> @CarpoolKaraoke is UNAVAILABLE</li>
				<li><span class="fa fa-linkedin-square" style="width: 22px; font-size: 150%;color: #0077b5"></span> @CarpoolKaraoke is UNAVAILABLE</li>
			</ul>
		</span>
	</li>
</ul>
<script>
	$(document).ready(function() {
		$("#search").click(function() {
			
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

