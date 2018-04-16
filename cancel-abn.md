---
title: Business name registration
layout: default-no-footer
---
<!-- <div class="wrapper">
    <div class="progress-container">
        <div class="progress-bar">
            <span id="progress-percent" role="progressbar" aria-valuetext="step 1 of 5 steps" style="width:17.65%"></span>
        </div>

        <ul class="section-nav">
            <li class="bookend" style="background-position-y: -996px;"><a href="register-menu-2"><span>‹</span><br>Back</a></li>
                <li class="active" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started                        <span class="visually-hidden"> (current step)</span>
                </li>
                <li class="" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>2</span><br>Business<br> name                        <span class="visually-hidden"> (not completed)</span>
                </li>
                <li class="" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>3</span><br>Business<br> details                        <span class="visually-hidden"> (not completed)</span>
                </li>
                <li class="" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application                        <span class="visually-hidden"> (not completed)</span>
                </li>
                <li class="" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit                        <span class="visually-hidden"> (not completed)</span>
                </li>
            <li class="bookend right"><a href="/registration/dashboard"><span>›</span><br>Application<br> summary</a></li>
        </ul>
    </div>

</div> -->
<style>
	.sub-section-container .sub-section-content {
		display: none;
	}
	.sub-section-open .sub-section-content {
		display: block;
	}
	.btn-list tr td {
		vertical-align: middle;
	}
</style>
<main class="wrapper">
    


<h1 id="heading" tabindex="-1">Cancel your ABN</h1>


<form action="/" id="sobrsform" method="post"><input id="__c__isDisplayContentKey" name="__c__isDisplayContentKey" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">



<div id="BusinessNameDetails_BusinessNameEntitlement">

    <div class="confirmation">
		<p>The details of your ABN are listed in the following table:</p>
		<table>
			<tbody>
				<tr>
					<th colspan="2">Australian Business Number (ABN)</th>
				</tr>
				<tr>
					<td class="field-name">ABN</td>
					<td class="input-value">48123456789</td>
				</tr>
				<tr>
					<td class="field-name">ABN Status</td>
					<td class="input-value">Active since 01/11/1999</td>
				</tr>
				<tr>
					<td class="field-name">Name</td>
					<td class="input-value">Smith, John Albert</td>
				</tr>
				<tr>
					<td class="field-name">Entity type</td>
					<td class="input-value">Individual/Sole trader</td>
				</tr>
			</tbody>
		</table>
		<div class="content">
			<p>If your business circumstances have changed, you should think about whether your Australian business number (ABN) needs to be <a href="/For-Business,-Super-funds---Charities/Updating-or-cancelling-your-ABN">updated or cancelled</a>.</p>
			<p>You should cancel your ABN if your business:</p>
			<ul>
			<li>has been sold</li>
			<li>has closed down</li>
			<li>is no longer operating in Australia or making supplies connected with Australia.</li>
			</ul>
			<p>You may also need to cancel your ABN if your <a href="/For-Business,-Super-funds---Charities/Updating-or-cancelling-your-ABN/Changing-your-business-structure">business structure</a> has changed.</p>
			<p>Before you cancel your ABN, make sure you have met any lodgment, reporting and payment obligations with any government agencies you deal with.</p>
			<p>This could include:</p>
			<ul>
			<li>lodging activity statements and pay as you go (PAYG) withholding reports</li>
			<li><a class="external" href="https://www.ato.gov.au/Business/GST/In-detail/Managing-GST-in-your-business/Ceasing-business/Adjusting-for-assets-retained-after-cancelling-GST-registration/">repaying a proportion of GST credits<span>External Link</span></a> you have previously claimed on any business assets/stock you retain</li>
			<li>paying outstanding tax debts.</li>
			</ul>
			<p><strong>Cancelling your ABN will</strong>:</p>
			<ul>
			<li>cancel your registrations for goods and services tax (GST), luxury car tax, wine equalisation tax and fuel tax credits</li>
			<li>cancel any AUSkeys linked to your ABN.</li>
			</ul>
			<p>If you want to cancel your PAYG withholding, you must cancel it before you cancel your ABN. Cancelling your GST, fuel tax credits or PAYG withholding registrations does not mean you are cancelling your ABN.</p>
			<div class="grid-row">
				<div class="col11 last">
					<h3>Are you sure you want to cancel your ABN</h3>
					<div class="radio-toggle">
						<label class="label-left" for="CancelABN_Yes">
							<input id="CancelABN_Yes" name="CancelABN" type="radio" value="Yes">
							<span>Yes</span>
						</label>
						<label class="label-right" for="CancelABN_No">
							<input id="CancelABN_No" name="CancelABN" type="radio" value="No">
							<span>No</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="controls-container">
		<div class="controls-content">
			<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" onclick="location.href = '{{ site.baseurl }}/register-menu-2'" type="button">Cancel</button><button class="btn btn-default next" id="next-cancelABN" type="button" onclick="location.href='existing/dashboard'" disabled="disabled">Submit cancel request</button>
		</div>
	</div>
</div>

</form>
 
</main>
<script type="text/javascript" src="{{ site.baseurl }}/scripts/functions.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$("#CancelABN_Yes").click(function() {
			$("#next-cancelABN").removeAttr("disabled");
		});
		$("#CancelABN_No").click(function() { $("#next-cancelABN").attr("disabled", true); });
	});
</script>