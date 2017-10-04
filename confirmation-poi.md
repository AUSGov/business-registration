---
title: Business details
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 4 of 5 steps" style="width:63.55%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="/registration/type?appid=2118"><span>&lsaquo;</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
			<li class="done" style="width: 15.3%">
					<a href="/registration/gettingstarted?appid=2118">
						<span class="visually-hidden">Step </span><span>1</span><br />Getting<br> started
						<span class="visually-hidden"> (completed)</span>
					</a>
			</li>
			<li class="done" style="width: 15.3%">
					<a href="/registration/businessname?appid=2118">
						<span class="visually-hidden">Step </span><span>2</span><br />Business<br> name
						<span class="visually-hidden"> (completed)</span>
					</a>
			</li>
			<li class="done" style="width: 15.3%">
					<a href="/registration/businessdetails?appid=2118">
						<span class="visually-hidden">Step </span><span>3</span><br />Business<br> details
						<span class="visually-hidden"> (completed)</span>
					</a>
			</li>
			<li class="active" style="width: 15.3%">
					<span class="visually-hidden">Step </span><span>4</span><br />Confirm<br> application                        <span class="visually-hidden"> (current step)</span>
			</li>
			<li class="" style="width: 15.3%">
					<span class="visually-hidden">Step </span><span>5</span><br />Pay<br> &amp; submit                        <span class="visually-hidden"> (not completed)</span>
			</li>
		<!-- TODO: link to dashboard of logged in user -->
		<li class="bookend right"><a href="/registration/dashboard"><span>&rsaquo;</span><br>Application<br> summary</a></li>
	</ul>
</div>

<h1 id="heading" tabindex="-1">4. Confirm application <span role="progressbar">(Step 4 of 5 steps)</span></h1>

<form action="/registration/confirmation?appid=2118" id="sobrsform" method="post">
<div id="validationSummary" class="validation-container clearfix" data-valmsg-summary="true">
    <div class="grid-row">
        <div class="validation-summary-icon">
            <img src="/img/ico-alert-red.png" alt="Error">
        </div>
        <div class="validation-message">
            <h2><a id="validationSummaryAnchor" tabindex="-1">Just <span id="validation-error-count">1</span> thing(s) to check and you're on your way:</a>
            </h2>
            <ul class="validation-message-errors">
                <li>We have not been able to verify your identity using the details you have provided. Please check the details below and correct any errors.</li>

            </ul>
            <p><span class="validation-red">*</span> indicates areas that need to be checked.</p>
            <script type="text/javascript">
                $(document).ready(function() {
                    if ($("#validationSummary").hasClass("validation-summary-errors")) {
                        scrollToAndFocus('#validationSummaryAnchor');
                    }
                });

                function scrollToAndFocus(id) {
                    scrollToTargetElement(id);
                    var target = $(id);
                    if (target) {
                        target.focus();
                    }
                }
            </script>
        </div>
    </div>
</div>
<div class="confirmation">
<!-- 	<div id="selectedregistrations" class="sub-section-container sub-section-open" data-section-name="Registrations">
<div id="businessdetails" class="" data-section-name="AbnRegistrationDetails"> -->
	<div class="sub-section-container sub-section-open">
		<h2>
			Proof of identity
		</h2>
		<fieldset class="no-margin">
			<legend class="margin4 larger">Your details</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-given" class="input-right">Given name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-given" type="text" value="Martin">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-other" class="input-right">Other given name <span class="field-note">(optional)</span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-other" type="text" value="Albert">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-family" class="input-right ">Family name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-family" type="text" value="Jones">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row clearfix">
				<div class="col4">
					<label for="dateofbirth" class="input-right ">Date of birth</label>
				</div><!-- col -->
				<div class="col8 last">
					<input type="date" id="dateofbirth" value="1981-01-01">
				</div><!-- col -->
			</div>
		</fieldset>
		<fieldset id="fieldsetPOIAddress" class="no-margin">
			<div class="grid-row">
				<div class="col4">
					<p>&nbsp;</p>
				</div>
				<div class="col8 last">
					<p class="label" id="PersonDetails_HasTaxFileNumber_lbl">Do you have a Tax File Number (TFN)?</p>
					<p>Providing your TFN is the quickest way to prove your identity.</p>
				</div>
			</div>
			<fieldset id="PersonDetails_HasTaxFileNumber" tabindex="-1">
				<div class="grid-row">
					<div class="col4">
						&nbsp;
					</div>
					<div class="col8 last">
						<div class="radio-toggle">
							<label class="on label-left" for="PersonDetails_HasTaxFileNumber_Yes">
								<input checked id="PersonDetails_HasTaxFileNumber_Yes" name="PersonDetails.HasTaxFileNumber" onclick="$('#tfn-div').show();" type="radio" value="Yes">
								<span id="tfn_yes">Yes</span>
							</label>
							<label class="off label-right" for="PersonDetails_HasTaxFileNumber_No">
								<input id="PersonDetails_HasTaxFileNumber_No" name="PersonDetails.HasTaxFileNumber" onclick="$('#tfn-div').hide(); $('#PersonDetails_TaxFileNumber').val('');" type="radio" value="No">
								<span id="tfn_no">No</span>
							</label>
						</div> 
						
					</div>
				</div>
			</fieldset>
		
			<div id="tfn-div" class="grid-row" style="">
				<div class="col4">
					<label class="input-right " for="PersonDetails_TaxFileNumber">Tax File Number <span class="field-note optional">(optional)</span></label>
				</div>
				<div class="col8 last">
					<input id="PersonDetails_TaxFileNumber" name="PersonDetails.TaxFileNumber" type="number" value="123456782"> <a class="cd-btn help" href="#help-businessdetailspersondetailstaxfilenumber"><span>Help - Tax File Number (TFN)</span></a>
					
				</div>
			</div>
		</fieldset>
		<div class="grid-row clearfix">
			<div class="col4">
				<p>&nbsp;</p>
			</div>
			<div class="col7 last">
				<fieldset class="margin-bottom-075">
					<legend class="no-padding">Are you an Australian resident for taxation purposes?</legend>
					<div class="radio-toggle">
						<label class="on label-left" for="BusinessActivityDetails_IsResidentOfAustralia_Yes">
							<input checked id="BusinessActivityDetails_IsResidentOfAustralia_Yes" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="Yes">

							<span id="BusinessActivityDetails_IsResidentOfAustralia_Yes_span">Yes</span>
						</label>
						<label class="off label-right" for="BusinessActivityDetails_IsResidentOfAustralia_No">
							<input id="BusinessActivityDetails_IsResidentOfAustralia_No" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="No">

							<span id="BusinessActivityDetails_IsResidentOfAustralia_No_span">No</span>
						</label>
					</div> <a class="cd-btn help" href="#help-businessactivityisresidentofaustralia"><span>Help - Resident for tax purposes</span></a>
					
				</fieldset>
			</div>
		</div>
		<div class="address-lookup" style="">
			<fieldset>
				<legend class="margin4 larger">Main business address</legend>
				<div class="grid-row clearfix">
					<div class="col4">
						<label class="input-right " for="ContactDetails_BusinessAddress_AddressDetails_CountryId">Country</label>
					</div>
					<div class="col8 last">
						<select class="address-country-select" id="ContactDetails_BusinessAddress_AddressDetails_CountryId" name="ContactDetails.BusinessAddress.AddressDetails.CountryId">
							<option selected="selected" value="14">Australia</option>
							<option value="15">Austria</option>
							<option value="32">Brazil</option>
							<option value="41">Canada</option>
							<option value="46">China</option>
							<option value="47">Christmas Island</option>
							<option value="48">Cocos (Keeling) Islands</option>
							<option value="56">Croatia</option>
							<option value="61">Denmark</option>
							<option value="76">France</option>
							<option value="83">Germany</option>
							<option value="100">Hong Kong</option>
							<option value="103">India</option>
							<option value="104">Indonesia</option>
							<option value="110">Italy</option>
							<option value="112">Japan</option>
							<option value="135">Malaysia</option>
							<option value="159">New Zealand</option>
							<option value="183">Russian Federation</option>
							<option value="206">South Africa</option>
							<option value="220">Thailand</option>
							<option value="248">Zimbabwe</option>
						</select>
						<a class="cd-btn help" href="#help-addressdetailscountry"><span>Help - Country</span></a>
					</div>
				</div>					
				<div class="grid-row">
					<div class="col4">
						<label class="input-right " for="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText">Address</label>
					</div>
					<div class="col8 last">
						<p>Selected address:</p>
						<div>
							<p style="font-weight: bold" class="address-display-label">
								100 Abbett St<br>
								Scarborough WA 6019
							</p>
						</div>
						<p>If this is not your address you can:</p>
						<p>
							<input type="button" class="btn address-enter-lookup" value="Find a different address">
						</p>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend class="margin4 larger">Postal address</legend>
					<div class="grid-row">
						<div class="col4">
							&nbsp;
						</div>
						<div class="col8 last custom-controls">
							<p>

								<input id="postal-cb" type="checkbox"><input name="postal-cb1" type="hidden" value="false">
								<label for="postal-cb">My postal address is different to main business address</label>
							</p> 
							
						</div>
					</div>
				</fieldset>
			</div>
			<div id="postal-address" class="address-lookup" style="display: none;">
				<div class="grid-row clearfix">
					<div class="col4">
						<label class="input-right" for="ContactDetails_BusinessAddress_AddressDetails_CountryId1">Country</label>
					</div>
					<div class="col8 last">
						<select class="address-country-select" id="ContactDetails_BusinessAddress_AddressDetails_CountryId1" name="ContactDetails.BusinessAddress.AddressDetails.CountryId1">
							<option selected="selected" value="14">Australia</option>
							<option value="15">Austria</option>
							<option value="32">Brazil</option>
							<option value="41">Canada</option>
							<option value="46">China</option>
							<option value="47">Christmas Island</option>
							<option value="48">Cocos (Keeling) Islands</option>
							<option value="56">Croatia</option>
							<option value="61">Denmark</option>
							<option value="76">France</option>
							<option value="83">Germany</option>
							<option value="100">Hong Kong</option>
							<option value="103">India</option>
							<option value="104">Indonesia</option>
							<option value="110">Italy</option>
							<option value="112">Japan</option>
							<option value="135">Malaysia</option>
							<option value="159">New Zealand</option>
							<option value="183">Russian Federation</option>
							<option value="206">South Africa</option>
							<option value="220">Thailand</option>
							<option value="248">Zimbabwe</option>
						</select>
						<a class="cd-btn help" href="#help-addressdetailscountry"><span>Help - Country</span></a>
					</div>
				</div>
				<p class="margin4">Start typing the address in the field below and select the correct one from the drop-down list that appears. </p>						
				<div class="grid-row">
					<div class="col4">
						<label class="input-right" for="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText1">Address</label>
					</div>
					<div class="col8 last">
						<input class="address-lookup-text ui-autocomplete-input1" id="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText" name="ContactDetails.BusinessAddress.AddressDetails.AddressLookupText" type="text" value="" autocomplete="off"> <a class="cd-btn help" href="#help-addressdetailsaddress"><span>Help - Address</span></a>
						
					</div>
				</div>
				<p class="margin4">or you can:<input type="button" id="addr-enter-manually-btn1" class="btn btn-default address-enter-manually" value="Enter it manually"></p>
			</div>

			<div id="view-details" class="confirmation" style="display: none;">
				<table id="proofofidentity">
					<thead class="visuallyhidden">
						<tr>
							<th>Field item</th>
							<th>Input value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th style="vertical-align: middle">Your details</th>
							<th><button id="edit" type="button" class="btn btn-default ico-edit">Edit</button></th>
						</tr>
						<tr>
							<td class="field-name">Name</td>
							<td class="input-value">Martin Jones</td>
						</tr>
						<tr>
							<td class="field-name">Date of birth</td>
							<td class="input-value">1/01/1981</td>
						</tr>
						<tr>
							<td class="field-name">Tax File Number</td>
							<td class="input-value">123456782</td>
						</tr>
						<tr>
							<td class="field-name">Main business address</td>
							<td class="input-value">10 Binara St Canberra City ACT 2601</td>
						</tr>
								<tr>
							<td class="field-name">Postal address</td>
							<td class="input-value">PO Box 9999 Canberra City ACT 2600</td>
						</tr>                                    
					</tbody>
				</table>
			</div>
			<fieldset>
				<legend class="margin4 larger">Proof of identity</legend>
				<div class="custom-controls">
					<div class="col4">&nbsp;</div>
					<div class="col8 last">
						<p>Blurb about risks of not confirming your identity before submit.</p>
						<p>
							<input id="skip-cb" type="checkbox">
							<label for="skip-cb">Skip identity check</label>
						</p> 
					</div>
				</div>
			</fieldset>
			<div class="controls-container">
				<div class="controls-content custom-controls">
					<button type="button" class="btn" >Cancel</button> <button id="bad-next" class="btn btn-default">Save</button>
				</div><!-- controls-content -->
			</div>        
		</div>
	</div>
</form>