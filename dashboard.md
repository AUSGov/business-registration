---
title: Application summary
layout: default
---
<div id="application-16TL3306">
	<div class="dashboard-message clearfix">
		<div class="system-message-content">
			<h1>Payment successful</h1>
			<p><strong>What now?</strong> Track the progress of application #16TL3306 on this page. We'll email you when your application has finalised.</p>
		</div>
		<button type="button" class="closeSystemMessage">Dismiss</button>
	</div>

	<div class="dashboard-container">
		<table>
			<caption>Application status: <strong>#16TL3306</strong><br /><span>Submitted on 10 April 2016 &nbsp;<button class="btn btn-small">Refresh</button></span></caption>
			<thead>
				<tr>
					<th class="status-item">Registration item</th>
					<th class="status-detail">Detail</th>
					<th class="status-information">Information</th>
				</tr>
			</thead>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>
				<td>Receipt number 176920075</td>
				<td><a href="">Payment details</a></td>
			</tr>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>Company</td>
				<td>JOHNSON PLUMBERS PTY PTD</td>
				<td><a href="">Download certificate (PDF)</a></td>
			</tr>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
				<td>Bob's Plumbing</td>
				<td><a href="">Download certificate (PDF)</a></td>
			</tr>
			<tr>
				<td class="waiting"><span class="visuallyhidden">Waiting - </span>Business name</td>
				<td>Bob's Whitegoods Repairs</td>
				<td><a class="cd-btn" href="#help">Waiting</a></td>
			</tr>
			<tr>
				<td class="declined"><span class="visuallyhidden">Declined - </span>Business name</td>
				<td>Canberra plumbing</td>
				<td><a href="">Declined</a></td>
			</tr>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>
				<td><span class="abn">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn">Copy</button></td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>AUSKey</td>
				<td><span class="auskey">1f56ab3398aef76</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.auskey">Copy</button></td>
				<td>Copy the activation code and follow the link to <a href="#">activate your AUSKey</a>.</td>
			</tr>
			<tr>
				<td class="problem"><span class="visuallyhidden">Failure - </span>AUSKey</td>
				<td><span class="auskey">AUSKey registration process failed!</span></td>
				<td>Relodge AUSKey application.</td>
			</tr>
			<tr>
				<td class="registered"><span class="visuallyhidden">Success - </span>GST</td>
				<td>Done</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td class="no-border-bottom registered"><span class="visuallyhidden">Success - </span>PAYG</td>
				<td class="status-waiting no-border-bottom">Done</td>
				<td class="no-border-bottom">&nbsp;</td>
			</tr>
		</table>
	</div>    
</div><!-- application-16TL3306 -->

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>
<script src="scripts/clipboard.min.js"></script>

<script>
	var clipboard = new Clipboard('.btn-copy');

	clipboard.on('success', function (e) {
		console.log(e);
	});

	clipboard.on('error', function (e) {
		console.log(e);
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
