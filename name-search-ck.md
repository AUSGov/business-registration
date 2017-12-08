---
title: Name search
layout: default-no-nav-no-footer
---
<h1>{{ page.title }}</h1>
<p class="intro"><strong>Welcome to the Business Registration Name Search Service.</strong></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam libero, feugiat sit amet risus sit amet, gravida pellentesque dui. Donec sit amet aliquam enim.</p>
<div id="search-container" class="card">
	<div class="grid-row clearfix">
		<div class="col4">
			<label for="name" class="input-right">Enter proposed name</label>
		</div>
		<div class="col8 last">
			<input type="text" id="name" value="Carpool Karaoke" style="max-width: 26em" /><br />
			<button id="search" class="btn btn-default" style="margin-top: 0.5em;">Check my name</button>
		</div>
	</div>
</div>
<div id="results" style="display: none;">
	<div class="grid-row clearfix">
		<div class="col6">
			<h2 id="business-name">Business name</h2>
			<table class="domain-table">
				<tr>
					<td><span class="fa fa-check" style="font-size: 150%; color: green"></span>&nbsp;&nbsp;<strong>CARPOOL KARAOKE</strong> is currently available</td>
				</tr>
				<tr>
					<td>
						<p>Similar registered names:</p>
						<p id="similar-busy" style="height: 158px"><img src="img/ajax-loader.gif" alt="loading" style="margin-left: 5px"></p>
						<ul id="similar-names" style="display: none; font-size: 90%">
							<li>COO-EE KARAOKE</li>
							<li>A. KARAOKE CO</li>
							<li>STARSTRUCK KARAOKE</li>
							<li>YEAR 2000 KARAOKE</li>
							<li>YOU'RE THE STAR KARAOKE</li>
							<li>ZERO KARAOKE BAR</li>
						</ul>
						<!-- <p><button type="button" class="btn btn-default next">Register a business name</button></p> -->
					</td>
				</tr>
				<tfoot>
					<tr>
						<td class="grey" colspan="2">
							<label for="bn-field" style="display: none;">Business name</label>
							<input id="bn-field" value="carpoolkaraoke" disabled />
							<button id="bn-button" class="btn btn-small" disabled>search</button>
						</td>
					</tr>
					<tr>
						<td class="grey" colspan="2">
							<p>Proin dictum metus purus, vel pretium ex lobortis a. Etiam iaculis nunc quis massa cursus tincidunt. In pretium nec erat eu feugiat. Donec rutrum sodales nisi.</p>
							<button type="button" class="btn btn-default next">Register business name</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		<div class="col6 last">
			<h2>Domain names</h2>
			<style>
				.domain-table {
					margin-bottom: 0;
					box-shadow: 3px 3px 10px #888;
				}
				.domain-table td {
					padding: 5px;
				}
				.domain-table tr td:last-child {
					height: 40px;
					min-width: 160px;
				}
				img {
					width: auto !important;
				}
				.domain-table tfoot tr td {
					background-color: #eee;
				}
				.domain-table tr.no-border-bottom td {
					border-bottom: none;
					padding-bottom: 0;
				}
				.no-height tr td:last-child {
					height: auto;
				}
				.no-height tr td:nth-child(2) {
					text-align: center;
				}
			</style>
			<table class="domain-table">
				<tr>
					<td><span id="com-domain">carpoolkaraoke.com</span></td>
					<td><img id="com-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="com-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red;"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span id="comau-domain">carpoolkaraoke.com.au</span></td>
					<td><img id="comau-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="comau-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span id="net-domain">carpoolkaraoke.net</span></td>
					<td><img id="net-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="net-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span id="netau-domain">carpoolkaraoke.net.au</span></td>
					<td><img id="netau-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="netau-result" style="display: none;"><span class="fa fa-exclamation" style="width: 21px; text-align: center; font-size: 150%; color: orange"></span> Check failed!</span></td>
				</tr>
				<tr>
					<td><span id="org-domain">carpoolkaraoke.org</span></td>
					<td><img id="org-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="org-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span id="orgau-domain">carpoolkaraoke.org.au</span></td>
					<td><img id="orgau-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="orgau-result" style="display: none;"><span class="fa fa-check" style="font-size: 150%; color: green"></span> Available</span></td>
				</tr>
				<tr>
					<td><span id="io-domain">carpoolkaraoke.io</span></td>
					<td><img id="io-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="io-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red"></span> Unvailable</span></td>
				</tr>
				<tfoot>
					<tr>
						<td class="grey" colspan="2">
							<label for="domain-field" style="display: none;">Domain</label>
							<input id="domain-field" value="carpoolkaraoke" disabled />
							<button id="domain-button" class="btn btn-small" disabled>search</button></td>
					</tr>
					<tr>
						<td class="grey" colspan="2">
							<p>Mauris non finibus tortor. Integer aliquam placerat ex non vulputate. Donec placerat luctus convallis. Nullam et eros ac libero eleifend dapibus nec vestibulum magna.</p>
							<button type="button" class="btn btn-default next">Register domain name</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<div class="grid-row" style="margin-top: 1em;">
		<div class="col6">
			<h2>Trade marks</h2>
			<!-- <p id="tm-first">Searching for trade marks<span id="tm-busy">... <img src="img/ajax-loader.gif" alt="loading" style="display: inline;"></span><span id="tm-found" style="display: none;">. Found 25 results.</span></p> -->
			<div id="tm-results">
				<div id="tm-retrieving" style="font-size: 90%">
					<!-- <p>Searching for '<strong>CARPOOL KARAOKE</strong>' returned 25 results.</p> -->
					<div style="padding: 5px; margin-top: 23px; border: 1px solid #ddd; box-shadow: 3px 3px 10px #888;">
						<h3 style="margin-top: 0.5em">Want to find out more?</h3>
						<p>If you're thinking about applying for a trade mark, you might want to consider using IP-Australia's <a href="https://www.ipaustralia.gov.au/trade-marks/applying-for-a-trade-mark/how-to-apply-for-a-trade-mark/tm-headstart" target="_blank">TM Headstart</a> service.</p>
						<p><button type="button" class="btn btn-default next">Apply for a trade mark</button></p>
						<p>Using TM Headstart is a good way to apply for a trade mark if you are unsure of the process. The service is confidential and no one will see your trade mark until you are ready to file.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col6 last">
			<h2>Social media</h2>
			<p>Your name on social media:</p>
			<table class="domain-table" style="margin-bottom: 50px;">
				<tr>
					<td><span class="fa fa-facebook-official" style="width: 22px; font-size: 150%; color: #3B5B9C"></span></td>
					<td><span id="fb-user">facebook/carpoolkaraoke</span></td>
					<td><img id="fb-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="fb-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red;"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span class="fa fa-twitter" style="width: 22px; font-size: 150%; color: #55acee"></span></td>
					<td><span id="twt-user">@carpoolkaraoke</span></td>
					<td><img id="twt-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="twt-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red;"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span class="fa fa-instagram" style="width: 22px; font-size: 150%;color: #c13584"></span></td>
					<td><span id="inst-user">instagram/carpoolkaraoke</span></td>
					<td><img id="inst-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;"><span id="inst-result" style="display: none;"><span class="fa fa-times" style="font-size: 150%; color: red;"></span> Unavailable</span></td>
				</tr>
				<tr>
					<td><span class="fa fa-linkedin-square" style="width: 22px; font-size: 150%;color: #0077b5"></span></td>
					<td><span id="lnk-user">linkedin/karpoolkaraoke</span></td>
					<td>
						<img id="lnk-busy" src="img/ajax-loader.gif" alt="loading" style="display: inline;">
						<span id="lnk-result" style="display: none;">
							<button type="button" class="btn btn-small btn-default next">
								<span class="fa fa-check" style="color: white"></span> 
								Available
							</button>
						</span>
					</td>
				</tr>
				<tfoot>
					<tr>
						<td class="grey" colspan="3">
							<label for="social-field" style="display: none;">Social media username</label>
							<input id="social-field" value="carpoolkaraoke" disabled />
							<button id="social-button" class="btn btn-small" disabled>search</button></td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
var first = true;
		$("#search").click(function() {
			$(this).blur();
			$("#results").show();
			$('html, body').animate({ scrollTop: $("#business-name").offset().top }, 150);
			if (!first) return;
				first = false;
				
			/* similar names */
			window.setTimeout(function() {
				$("#similar-busy").hide();
				$("#similar-names").fadeIn('fast');
				$("#bn-field, #bn-button").prop("disabled", false);
			}, 2000);
			
			domainSearchReveal();
			
			/* trade mark */
			//window.setTimeout(function() {
			//	// $("#tm-first").hide();
			//	// $("#tm-found").show();
			//	$("#tm-results").show();
			//	//window.setTimeout(function() {
			//	//	$("#tm-retrieving").hide();
			//	//	$("#tm-table").show('fast');
			//	//}, 4000);
			//}, 2500);
			
			/* social */
			window.setTimeout(function() {
				$("#fb-busy").hide();
				$("#fb-result").show();
				$("#fb-user").wrap("<strike></strike>")
			}, 2200);
			window.setTimeout(function() {
				$("#twt-busy").hide();
				$("#twt-result").show();
				$("#twt-user").wrap("<strike></strike>")
			}, 3750);
			window.setTimeout(function() {
				$("#inst-busy").hide();
				$("#inst-result").show();
				$("#inst-user").wrap("<strike></strike>")
			}, 4300);
			window.setTimeout(function() {
				$("#lnk-busy").hide();
				$("#lnk-result").show();
				$("#social-field, #social-button").prop("disabled", false);
			}, 5000);
		});
		
		function domainSearchReveal() {
			/* domains */
			window.setTimeout(function() {
				$("#com-busy").hide();
				$("#com-result").show();
				$("#com-domain").wrap("<strike></strike>")
			}, 2500);
			window.setTimeout(function() {
				$("#comau-busy").hide();
				$("#comau-result").show();
				$("#comau-domain").wrap("<strike></strike>")
			}, 3800);
			window.setTimeout(function() {
				$("#net-busy").hide();
				$("#net-result").show();
				$("#net-domain").wrap("<strike></strike>")
			}, 4000);
			window.setTimeout(function() {
				$("#netau-busy").hide();
				$("#netau-result").show();
				$("#netau-domain").wrap('<em style="opacity: .5"></em>');
				$("#domain-field, #domain-button").prop("disabled", false);
			}, 10000);
			window.setTimeout(function() {
				$("#org-busy").hide();
				$("#org-result").show();
				$("#org-domain").wrap("<strike></strike>")
			}, 6200);
			window.setTimeout(function() {
				$("#orgau-busy").hide();
				$("#orgau-result").show();
				$("#orgau-domain").wrap("<strong></strong>")
			}, 7000);
			window.setTimeout(function() {
				$("#io-busy").hide();
				$("#io-result").show();
				$("#io-domain").wrap("<strong></strong>")
			}, 7500);
			
		}
	});
</script>

