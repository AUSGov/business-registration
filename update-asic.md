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
    


<h1 id="heading" tabindex="-1">Update ASIC details</h1>


<form action="/" id="sobrsform" method="post"><input id="__c__isDisplayContentKey" name="__c__isDisplayContentKey" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">



<div id="BusinessNameDetails_BusinessNameEntitlement">

    <div class="confirmation">
		<p>Details of your ABN is listed in the following table. Choose from the options below to update your details with the Australian Business Register (ABR).</p>
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
					<td class="field-name">Company</td>
					<td class="input-value">Solid Gold Enterprises Pty Ltd</td>
				</tr>
				<tr>
					<td class="field-name">Entity type</td>
					<td class="input-value">Private Company</td>
				</tr>
				<tr>
					<td class="field-name">Business names</td>
					<td class="input-value">Digital Alchemy<br>Top Brass</td>
				</tr>
			</tbody>
		</table>

<h3>Details to be updated</h3>
<p>The following sections will be submitted to the ABR for updating once you accept the declaration below.</p>
<table>
							<thead class="visuallyhidden">
								<tr>
									<th>Field item</th>
									<th>Input value</th>
								</tr>
							</thead>
							<tbody id="payg-display" style="">
								<tr>
									<th style="vertical-align: middle">Contact details</th>
									<th>
										<button type="button" id="delete-payg" class="btn btn-default ico-remove">Remove</button>
										<button type="button" id="edit-payg" class="btn btn-default ico-edit">Edit</button>
									</th>
								</tr>
								<tr>
									<td class="field-name">Email</td>
									<td class="input-value">jasmith@email.com</td>
								</tr>
								<tr>
									<td class="field-name">Phone number</td>
									<td class="input-value">0404555555</td>
								</tr>
							</tbody>
							<tbody id="fbt-display" style="display: none;">
								<tr>
									<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Fringe Benefits Tax (FBT)</th>
									<th>
										<button type="button" id="delete-fbt" class="btn btn-default ico-remove">Remove</button>
										<button type="button" id="edit-fbt" class="btn btn-default ico-edit">Edit</button>
									</th>
								</tr>
								<tr>
									<td class="field-name">Registration start date</td>
									<td class="input-value">18/04/2017</td>
								</tr>
							</tbody>
							<tbody id="ftc-display" style="display: none;">
								<tr>
									<th style="vertical-align: middle"><span class="fa fa-plus orange"></span> Fuel Tax Credits (FTC)</th>
									<th>
										<button type="button" id="delete-ftc" class="btn btn-default ico-remove">Remove</button>
										<button type="button" id="edit-ftc" class="btn btn-default ico-edit">Edit</button>
									</th>
								</tr>
								<tr>
									<td class="field-name">Registration start date</td>
									<td class="input-value">5/04/2017</td>
								</tr>
								<tr>
									<td class="field-name">Heavy vehicles on public roads?</td>
									<td class="input-value">Yes</td>
								</tr>
								<tr>
									<td class="field-name">Fuel type(s)</td>
									<td class="input-value">Petrol</td>
								</tr>
							</tbody>
						</table>
<h3>Current information</h3>
<p>Select from the following sections to view what's recorded on the ABR record and update your details.</p>
<table class="btn-list" style="width: inherit">
						<tbody>
							<tr id="opt-gst" style="display: none;">
								<td>Contact details</td>
								<td><button type="button" id="apply-gst" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
							<tr id="opt-fbt">
								<td>Business address</td>
								<td><button type="button" id="apply-fbt" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
							<tr>
								<td>Postal address</td>
								<td><button type="button" id="apply-lct" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
							<tr id="opt-ftc">
								<td>Additional locations</td>
								<td><button type="button" id="apply-ftc" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
							<tr>
								<td>Authorised contacts</td>
								<td><button type="button" id="apply-wet" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
							<tr>
								<td>Associates</td>
								<td><button type="button" id="apply-wet" class="btn btn-default ico-edit" style="float: none;">Update</button></td>
							</tr>
						</tbody>
					</table>
		</div>
</div>
<div id="declaration" style="">
					<h3 class="larger">Declaration</h3>
					<div id="decl-types" style="display: none;">
						<p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
						<ul>
							<li id="gst-decl" style="display: none;">Goods &amp; Service Tax</li>
							<li id="payg-decl" style="display: none;">Pay As You Go (PAYG) Withholding</li>
						</ul>
					</div>
					<p>Please complete the declaration to submit your changes.</p>
					<div class="grid-row clearfix">
						<div class="col4">
							<label class="input-right">Person making the declaration</label>
						</div>
						<div class="col8 last">
							<p>John Albert Smith</p>
						</div>
					</div>
					<div class="grid-row clearfix">
						<div class="col4">
							<label class="input-right">Position held</label>
						</div>
						<div class="col8 last">
							<p>Director</p>
						</div>
					</div>
					<div id="ajax-container-for-declaration">
						<div class="declaration-wrapper margin-top-075">
							<div class="grid-row">
								<fieldset class="custom-controls">
									<!-- <legend class="larger no-padding">Tax Registrations</legend> -->
									<p>I declare that:</p>
									<p class="custom-controls">
										<input data-val="true" data-val-required="The ATOTrueAndCorrectCheckBox field is required." id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true"><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
										<label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">The information provided in this application is true and correct. </label>
									</p>
								</fieldset>
							</div>
							<div class="grid-row">
								<h4>Privacy</h4>
								<p>The information provided to the Australian Securities and Investments Commission in this form may include personal information. Please refer to the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
							</div>
						</div>
					</div>
				</div>
<div class="controls-container">
    <div class="controls-content">
		<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" onclick="location.href = '{{ site.baseurl }}/register-menu-2'" type="button">Previous</button><button class="btn btn-default next" id="next-businessnamedetails-btn" type="button" onclick="location.href='existing/dashboard'">Submit update request</button>
    </div>
</div>

</form>
 
</main>
<script type="text/javascript" src="{{ site.baseurl }}/scripts/functions.js"></script>
<script type="text/javascript">
	function scrollToAndFocus(id) {
		scrollToTargetElement(id);
		var target = $(id);
		if (target) {
			target.focus();
		}
	}
</script>