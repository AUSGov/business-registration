---
title: Payment
layout: default-no-footer
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" style="width: 90%"></span>
	</div><!-- meter -->
	<ul class="section-nav">
		<li class="done"><a target="_parent" href="entitlement.html"><span>1</span><br>Entitlement<br> check</a></li>
		<li class="done"><a target="_parent" href="business-names-05.html"><span>2</span><br>Business<br> name</a></li>
		<li class="done"><a target="_parent" href="business-details.html"><span>3</span><br>Business<br> details</a></li>
		<li class="done"><a target="_parent" href="taxation-details.html"><span>4</span><br>Taxation<br> details</a></li>
		<li class="done"><a target="_parent" href="confirm.html"><span>5</span><br>Confirm<br> application</a></li>
		<li class="active"><span>6</span><br>Payment<br> &amp; submit</li>
	</ul>
</div><!-- progress-container -->        
<h1 id="heading" tabindex="-1">6. Payment <span>(Step 6 of 6)</span></h1>
<div class="grid-row">
<p style="margin-bottom: 1em;"><strong class="validation-red">Warning:</strong> Your payment details may be locked for up to two hours if you navigate away from this page. Your application will still be saved, but you will not be able to update or submit your payment within the two-hour period.</p>
</div>
<div id="iframe-container" style="width: 100%; min-height:500px; margin-bottom: 20px;">
	<iframe id="payment-iframe" src="payment-asic.html" style="width: 100%; height:750px; display: none;" >
	</iframe>
<script>
	//window.beforeunload = "You have attempted to navigate away from the payment page without completing your payment. If you do not wish to complete the payment you need to use the Cancel button, otherwise your payment may be locked for up to two hours.";
	$(window).on("beforeunload", function() {
		return "You have attempted to navigate away from the payment page without completing your payment. If you do not wish to complete the payment you need to use the Cancel button, otherwise your payment may be locked for up to two hours.";
	});
	
	
	
	$(document).ready(function() {
	window.setTimeout(function() {$("body").click();}, 5000);
		
		window.addEventListener('message', function(e) {
			var key = e.message ? 'message' : 'data';
			var data = e[key];
			if (data === "paymentsuccessful")
				$(window).off("beforeunload");
		}, true);
		$("#iframe-container").block({
			message: "<p><img src=\"{{ site.baseurl }}/img/ajax-loader.gif\" alt=\"loading\" /> <strong>Loading</strong></p><p>Do not attempt to close the window or navigate away.</p>",
			css: {
				width: "95%",
				maxWidth: "550px"
			}
		});
		var left = (window.innerWidth - $(".blockMsg").offsetWidth) / 2;
		$(".blockMsg").css("left", left + "px");
		$("#payment-iframe").load(function() {
			window.setTimeout(
				function() {$('#payment-iframe').show();
				$('#iframe-container').unblock();
				//$.unblockUI();
			}, 3500);
		});
	});
</script>
