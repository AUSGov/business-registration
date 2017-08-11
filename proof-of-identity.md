---
title: Business details
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 3 of 5 steps" style="width:48.25%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="register"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 25.3%"><a href="entitlement"><span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started <span class="visually-hidden"> (completed)</span></a></li>
		<li class="active" style="width: 25.3%"><span class="visually-hidden">Step </span><span>2</span><br>Business<br> details <span class="visually-hidden"> (current step)</span></li>
		<li style="width: 25.3%"><span class="visually-hidden">Step </span><span>3</span><br>Confirm<br> application <span class="visually-hidden"> (not completed)</span></li>
		<li class="bookend right"><a href="dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>
<h1 id="heading" tabindex="-1">2. Business details <span>(Step 2 of 3)</span></h1>
<p>Please complete the details below. All fields are required unless marked as (optional).</p>

<div id="validationSummary" class="validation-summary-errors validation-container clearfix" data-valmsg-summary="true">
    <div class="grid-row">
        <div class="validation-summary-icon">
            <img src="img/ico-alert-red.png" alt="Error">
        </div>
        <div class="validation-message">
            <h2><a id="validationSummaryAnchor" tabindex="-1">Just <span id="validation-error-count">1</span> thing(s) to check and you're on your way:</a>
            </h2>
            <ul class="validation-message-errors">
                

                        <li><a href="javascript:scrollToAndFocus('[id$=individual1-given]');">Your details do not match what we have on record. Please check the fields indicated and correct any errors.</a></li>
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
<!-- START SECTION 1 -->
<div id="section1" class="sub-section-container sub-section-open">
	<h2>Proof of identity</h2>
	
	<div id="section-div" class="sub-section-content">
	<div id="edit-details">
		<div class="margin4">The details below are used to confirm your identity.</div>
		<fieldset class="no-margin">
			<legend class="margin4 larger">Your details</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-given" class="input-right validation-inline">Given name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-given" type="text" value="Martin">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-other" class="input-right validation-inline">Other given name <span class="field-note">(optional)</span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-other" type="text" value="Albert">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-family" class="input-right validation-inline">Family name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-family" type="text" value="Jones">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row clearfix">
				<div class="col4">
					<label for="dateofbirth" class="input-right validation-inline">Date of birth</label>
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
					<label class="input-right validation-inline" for="PersonDetails_TaxFileNumber">Tax File Number <span class="field-note optional">(optional)</span></label>
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
						<label class="input-right validation-inline" for="ContactDetails_BusinessAddress_AddressDetails_CountryId">Country</label>
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
						<label class="input-right validation-inline" for="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText">Address</label>
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
				<div class="grid-row">
					<div class="col4">
						&nbsp;
					</div>
					<div class="col8 last custom-controls">
						<p>

							<input id="postal-cb" type="checkbox"><input name="postal-cb1" type="hidden" value="false">
							<label for="postal-cb">My postal address is different</label>
						</p> 
						
					</div>
				</div>
		</div>
				<div id="postal-address" class="address-lookup" style="display: none;">
					<fieldset>
						<legend class="margin4 larger">Postal address</legend>
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
					</fieldset>
				</div>
			
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
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn">Previous</button><button id="bad-next" class="btn btn-default">Save and continue</button><button id="nextbtn" type="button" class="btn btn-default" style="display: none;">Save and continue</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div id="section2" class="sub-section-container">
	<h2>ABN details</h2>
	<div class="sub-section-content">
 

<fieldset class="no-margin">
    <legend class="margin4 larger"></legend>
    
    
</fieldset>

    <fieldset class="no-margin">
    <legend class="visuallyhidden">ABN registration date</legend>

    <div class="grid-row">
        <div class="col4">

            <label class="input-right" for="BusinessActivityDetails_StartDate">ABN <strong>start</strong> date <br><span class="field-note">(dd/mm/yyyy)</span><br><span class="field-note">The date can't be more than 6 months into the future.</span></label>
        </div>
        <div class="col7 last">
            <input class="abnstartdate hasDatepicker" data-val="true" data-val-date="The field StartDate must be a date." data-val-required="{0} is required." id="BusinessActivityDetails_StartDate" name="BusinessActivityDetails.StartDate" type="text" value="08/08/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-businessactivitystartdate"><span>Help - ABN start date</span></a>
        </div>
    </div>

        <div id="divAbnEnddate">
            <div class="grid-row">
                <div class="col4">
                    &nbsp;
                </div>
                <div class="col7 last custom-controls">
                    <p>
                        <input id="BusinessActivityDetails_IsActivityWillCeaseWithin3Months" name="BusinessActivityDetails.IsActivityWillCeaseWithin3Months" type="checkbox" value="true"><input name="BusinessActivityDetails.IsActivityWillCeaseWithin3Months" type="hidden" value="false">
                        <label for="BusinessActivityDetails_IsActivityWillCeaseWithin3Months">All business activity will end within 3 months of the start date</label> 
                    </p>
                    
                </div>
            </div>

            <div id="BusinessActivityDetails_EndDate_Container" class="grid-row grid-row-reveal clearfix" style="display:none">
                <div class="col4">

                    <label class="input-right" for="BusinessActivityDetails_EndDate">ABN <strong>end</strong> date <br><span class="field-note">(dd/mm/yyyy)</span><br><span class="field-note">Businesses registered for GST will be required to complete monthly activity statements.</span></label>
                </div>
                <div class="col7 last">
                    <input class="abnenddate hasDatepicker" data-val="true" data-val-date="The field EndDate must be a date." id="BusinessActivityDetails_EndDate" name="BusinessActivityDetails.EndDate" type="text" value=""><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-businessactivityenddate"><span>Help - ABN end date</span></a>
                </div>
            </div>
        </div>
</fieldset>

<fieldset>
    <legend class="visuallyhidden">Tax agent details</legend>
    <div class="grid-row margin-top-075">
        <div class="col4">
            <label class="input-right" for="BusinessActivityDetails_TaxAgentRegistrationNumber">Tax agent registration number <span class="field-note optional">(optional)</span></label>
        </div>
        <div class="col7 last">
            <input id="BusinessActivityDetails_TaxAgentRegistrationNumber" name="BusinessActivityDetails.TaxAgentRegistrationNumber" type="text" value=""> <a class="cd-btn help" href="#help-businessactivitytaxagentregistrationnumber"><span>Help - Tax agent registration number</span></a>
            
        </div>
    </div>
</fieldset>

<fieldset>
    <legend class="visuallyhidden">Industry type</legend>

        <div class="grid-row clearfix">
            <div class="col4">
                <p>&nbsp;</p>
            </div>
            <div class="col7 last">
                <fieldset id="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo" class="margin-bottom-075" tabindex="-1">
                    <legend class="no-padding ">Do you operate an agricultural property?</legend>
                    <div class="radio-toggle">
                        <label class="on label-left" for="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_Yes">
                            <input id="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_Yes" name="BusinessActivityDetails.OperateAnAgriculturalPropertyYesNo" type="radio" value="Yes">

                            <span id="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_Yes_span">Yes</span>
                        </label>
                        <label class="off label-right" for="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_No">
                            <input id="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_No" name="BusinessActivityDetails.OperateAnAgriculturalPropertyYesNo" type="radio" value="No">

                            <span id="BusinessActivityDetails_OperateAnAgriculturalPropertyYesNo_No_span">No</span>
                        </label>
                    </div> <a class="cd-btn help" href="#help-businessactivityoperateanagriculturalpropertyyesno"><span>Help - Agricultural property</span></a>
                    
                </fieldset>
            </div>
        </div>



</fieldset>

    <fieldset id="fieldsetBusinessAddressActivity">
        <legend class="margin4 larger">
            Main business activity <a class="cd-btn help" href="#help-businessbusinessactivitylegend"><span>Help - Main business activity</span></a>
        </legend>

<div id="BusinessActivityDetails_BusinessAddressActivity">
    <div class="showhide-target" style="display: block">
        <div style="display: none">
            <input id="__c__BusinessActivityDetails_BusinessAddressActivity_BusinessActivityId" name="__c__BusinessActivityDetails.BusinessAddressActivity.BusinessActivityId" type="hidden" value="BfNQIa39YHWRsVvADavFng==">
        </div>
        
        <div class="grid-row">
            <div class="col4">
                <label for="BusinessActivityDetails_BusinessAddressActivity_SearchTerm" class="input-right">
                    Choose your main business activity<br>
                    <span class="field-note">(Start typing and choose from the options presented)</span>
                </label>
            </div>
            <div class="col8 last">
                <input data-val="true" data-val-length="Search term must be a maximum of 200 characters long. You entered {TotalLength} characters." data-val-length-max="200" id="BusinessActivityDetails_BusinessAddressActivity_SearchTerm" name="BusinessActivityDetails.BusinessAddressActivity.SearchTerm" type="text" value="" spellcheck="true"> 
                
                <div id="BusinessActivityDetails_BusinessAddressActivity_Debug" style="display: none;"></div>
            </div>
        </div>
        <div class="grid-row">
            <div class="col4">
                <label for="BusinessActivityDetails_BusinessAddressActivity_Name" class="input-right">
                    Selected activity<br>
                    <span class="field-note">(Choose your activity above)</span>
                </label>
            </div>
            <div class="col8 last">
                <textarea cols="20" data-val="true" data-val-length="Selected activity must be a maximum of 250 characters long. You entered {TotalLength} characters." data-val-length-max="250" id="BusinessActivityDetails_BusinessAddressActivity_Name" name="BusinessActivityDetails.BusinessAddressActivity.Name" readonly="readonly" rows="2" style="background: #f9f9f9" aria-owns="businessActivitySuggestions1" aria-autocomplete="both" aria-required="true" aria-describedby="businessActivitySuggestionsMessage1"></textarea> <br>
                <button type="button" class="btn" id="anzsic-clear">Clear activity</button>

                <input data-val="true" data-val-number="The field ActivityId must be a number." id="BusinessActivityDetails_BusinessAddressActivity_ActivityId" name="BusinessActivityDetails.BusinessAddressActivity.ActivityId" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_History" name="BusinessActivityDetails.BusinessAddressActivity.History" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_Index" name="BusinessActivityDetails.BusinessAddressActivity.Index" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_ShouldValidate" name="BusinessActivityDetails.BusinessAddressActivity.ShouldValidate" type="hidden" value="True">

                
            </div>
        </div>
    </div>
</div>



    </fieldset>
<div class="grid-row margin-bottom-075 clearfix">
<div class="col4">&nbsp;</div>
<div class="col7 last custom-controls">
                    <p>
                        <input id="BusinessActivityDifferent" name="BusinessActivityDetails.BusinessActivityDifferent" type="checkbox" value="true"><input name="BusinessActivityDifferent" type="hidden" value="false">
                        <label for="BusinessActivityDifferent">Business activity is different at the main address</label> 
                    </p>
                    
                </div>
			</div>
    <fieldset id="fieldsetBusinessAddressActivity1" style="display: none;">
        <legend class="margin4 larger">
            Business activity at main address<a class="cd-btn help" href="#help-businessbusinessactivitylegend"><span>Help - Main business activity</span></a>
        </legend>

<div id="BusinessActivityDetails_BusinessAddressActivity1">
    <div class="showhide-target" style="display: block">
        <div style="display: none">
            <input id="__c__BusinessActivityDetails_BusinessAddressActivity_BusinessActivityId1" name="__c__BusinessActivityDetails.BusinessAddressActivity.BusinessActivityId1" type="hidden" value="BfNQIa39YHWRsVvADavFng==">
        </div>
        
        <div class="grid-row">
            <div class="col4">
                <label for="BusinessActivityDetails_BusinessAddressActivity_SearchTerm1" class="input-right">
                    Choose business activity<br>
                    <span class="field-note">(Start typing and choose from the options presented)</span>
                </label>
            </div>
            <div class="col8 last">
                <input data-val="true" data-val-length="Search term must be a maximum of 200 characters long. You entered {TotalLength} characters." data-val-length-max="200" id="BusinessActivityDetails_BusinessAddressActivity_SearchTerm1" name="BusinessActivityDetails.BusinessAddressActivity.SearchTerm1" type="text" value="" spellcheck="true"> 
                
                <div id="BusinessActivityDetails_BusinessAddressActivity_Debug1" style="display: none;"></div>
            </div>
        </div>
        <div class="grid-row">
            <div class="col4">
                <label for="BusinessActivityDetails_BusinessAddressActivity_Name1" class="input-right">
                    Selected activity<br>
                    <span class="field-note">(Choose your activity above)</span>
                </label>
            </div>
            <div class="col8 last">
                <textarea cols="20" data-val="true" data-val-length="Selected activity must be a maximum of 250 characters long. You entered {TotalLength} characters." data-val-length-max="250" id="BusinessActivityDetails_BusinessAddressActivity_Name1" name="BusinessActivityDetails.BusinessAddressActivity.Name1" readonly="readonly" rows="2" style="background: #f9f9f9" aria-owns="businessActivitySuggestions1" aria-autocomplete="both" aria-required="true" aria-describedby="businessActivitySuggestionsMessage1"></textarea> <br>
                <button type="button" class="btn" id="anzsic-clear">Clear activity</button>

                <input data-val="true" data-val-number="The field ActivityId must be a number." id="BusinessActivityDetails_BusinessAddressActivity_ActivityId1" name="BusinessActivityDetails.BusinessAddressActivity.ActivityId1" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_History1" name="BusinessActivityDetails.BusinessAddressActivity.History1" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_Index1" name="BusinessActivityDetails.BusinessAddressActivity.Index1" type="hidden" value="">
                <input id="BusinessActivityDetails_BusinessAddressActivity_ShouldValidate1" name="BusinessActivityDetails.BusinessAddressActivity.ShouldValidate1" type="hidden" value="True">

                
            </div>
        </div>
    </div>
</div>



    </fieldset>
    <div class="controls-container">
    <div class="controls-content">
<button id="abn-prev" class="btn cancel ajax-button" data-ajax-target="ajax-container-for-businessdetails" name="SpXgWJEhm3PSafAhEI+gzT+yguW7i2eeMRDxomnlXkU=" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button><button class="btn btn-default ajax-button" data-ajax-target="ajax-container-for-businessdetails" id="abn-next" name="EO84rvVS4xgqD9zHxz4Exg==" type="button" value="__cvg__tY59JnGJfVXqfDa5D37xIQ==">Save and continue</button>    </div>
</div>
</div>
</div>

<div id="section3" class="sub-section-container">
	<h2>Contact details</h2>
	<div class="sub-section-content">
	<div class="grid-row">
		<div class="col4">&nbsp;</div>
		<div class="col7 last">
			<p>Enter your main business contact details below. This is how you will receive notices and correspondence related to your business.</p>
		</div>
    </div>
    <div class="grid-row">
        <div class="col4">
            <label class="input-right" for="ContactDetails_BusinessAddress_BusinessAddressContactDetails_Email">Email</label>
        </div>
        <div class="col8 last">
            <input data-val="true" data-val-email="Please enter a valid email address in the format e.g. name@emailprovider.com." data-val-length="Email must be a maximum of 200 characters long. You entered {TotalLength} characters." data-val-length-max="200" data-val-required="{0} is required." id="ContactDetails_BusinessAddress_BusinessAddressContactDetails_Email" name="ContactDetails.BusinessAddress.BusinessAddressContactDetails.Email" type="email" value="test@test.com"> <a class="cd-btn help" href="#help-businessdetailsbusinessaddresscontactdetailsemail"><span>Help - Email address</span></a>
            
        </div>
    </div>
    <div class="grid-row">
        <div class="col4">
            <label class="input-right" for="ContactDetails_BusinessAddress_BusinessAddressContactDetails_Phone">Phone <span class="field-note optional">(optional)</span></label>
        </div>
        <div class="col8 last">
            <input id="ContactDetails_BusinessAddress_BusinessAddressContactDetails_Phone" name="ContactDetails.BusinessAddress.BusinessAddressContactDetails.Phone" type="text" value="43214321"> <a class="cd-btn help" href="#help-businessdetailsbusinessaddresscontactdetailsphone"><span>Help - Phone number</span></a>
            
        </div>
    </div>
    <div class="controls-container">
    <div class="controls-content">
<button id="contact-prev" class="btn cancel ajax-button" data-ajax-target="ajax-container-for-businessdetails" name="SpXgWJEhm3PSafAhEI+gzT+yguW7i2eeMRDxomnlXkU=" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button><button class="btn btn-default ajax-button" data-ajax-target="ajax-container-for-businessdetails" id="contact-next" name="EO84rvVS4xgqD9zHxz4Exg==" type="button" value="__cvg__tY59JnGJfVXqfDa5D37xIQ==">Save and continue</button>    </div>
</div>
	</div>
</div>

<div id="section4" class="sub-section-container">
	<h2>Additional business locations</h2>
	<div class="sub-section-content">
	</div>
</div>

<div id="section5" class="sub-section-container">
	<h2>Authorised contacts</h2>
	<div class="sub-section-content">
	</div>
</div>

<div id="section6" class="sub-section-container">
	<h2>Reason for ABN application</h2>
	<div class="sub-section-content">
	</div>
</div>
<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<div id="dialogOne" style="display:none;">
	<h1>Proof of identity</h1> 
	<p>Your details have not been verified. You may continue to make further changes to correct any issues, but the changes will no longer be verified.</p>	
	<input type="button" class="btn btn-default" id="btnRemoveName1" value="Continue" onclick="visionaustralia.closeDialog('dialogOne'); nextSection();" /> 
	<input type="button" class="btn" onclick='visionaustralia.closeDialog("dialogOne"); clearErrors(); $("#individual1-given").focus();' value="Go back">
</div>

<div id="dialogTwo" style="display:none;">
	<h1>Proof of identity</h1> 
	<p><strong>This is your last attempt to have your details verified.</strong><br />You may want to contact the ATO to check your details are up to date, then return to your application and resubmit.</p>	
	<input type="button" class="btn" onclick="visionaustralia.closeDialog('dialogTwo');" value="Continue" />
	<input id="hidden-button" type="button" class="btn" style="display: none;" /></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/jquery.blockUI.js"></script>
<script type="text/javascript" src="scripts/vadialog.js"></script> 
<script>
	$(document).ready(function () {
		/* Expand collapse headings config */
		navigationWithinPage();
		initSaveForLater();
		initApplicationOptions();

		visionaustralia.addDialog("nextbtn", "dialogOne"); 
		visionaustralia.addDialog("hidden-button", "dialogTwo"); 

		$("#postal-cb").click(function() {
			$("#postal-address").toggle();
		});
		
		$("#BusinessActivityDifferent").click(function() {
			$("#fieldsetBusinessAddressActivity1").toggle();
		});
	
		//$("#nextbtn").click(function() {
			//if ($("#edit-details").is(":visible")) {
			//	$.blockUI({
			//			message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">verifying identity <img class="loading-ellipsis" src="img/ellipsis.gif" /></p>',
			//			css: {
			//				padding: "5px"
			//			},
			//			overlayCSS: {
			//				backgroundColor: '#bbb',
			//				borderRadius: '10px'
			//			}
			//	});
			//	window.setTimeout(function() {
			//		$.unblockUI();
			//		nextSection();
			//	}, 2000);
			//} else {
			//	clearErrors();
			//	nextSection();
			//}
		//});
	
		$("#bad-next").click(function() {
			$("#bad-next").hide();
			$("#nextbtn").show();
			$("html, body").animate({ scrollTop: $('#validationSummary').offset().top }, "fast", function() {
				$("#hidden-button").click();
			});
		});

		$("#abn-prev").click(function() {
			$("#section2 div.sub-section-content").hide("fast");
			$("#section-div").show("fast", function() {
				$("html, body").animate({ scrollTop: $('#section1 h2').offset().top }, "fast");
			});
		});
				
		$("#abn-next").click(function() {
			$("#section2 div.sub-section-content").hide("fast");
			$("#section3 > div").show("fast", function() {
				$("html, body").animate({ scrollTop: $('#section3 h2').offset().top }, "fast");
			});
		});

		$("#contact-prev").click(function() {
			$("#section3 > div").hide("fast");
			$("#section2 div.sub-section-content").show("fast", function() {
				$("html, body").animate({ scrollTop: $('#section2 h2').offset().top }, "fast");
			});
		});
		
	});
	
	function EditDetails() {
		$("#view-details").hide();
		$("#verified, #unverified").hide();
		$("#individual1-given").val("Martin");
		$("#individual1-other").val("");
		$("#individual1-family").val("Jones");
		$("#dateofbirth").val("01/01/1981");
		$("#PersonDetails_HasTaxFileNumber_Yes").attr("checked", true);
		$("#PersonDetails_TaxFileNumber").val("123456782");
		$("#BusinessActivityDetails_IsResidentOfAustralia_Yes_span").attr("checked", true);
		$("#edit-details").show("fast", function() {
			$("html, body").animate({ scrollTop: $('#section1 h2').offset().top }, "fast");
		});
	}
		
	function nextSection() {
		$("html, body").animate({ scrollTop: $('#section1 h2').offset().top }, "fast", function() {
			$("#section-div").hide("fast") //, function() {
			$("#section2 div.sub-section-content").show("fast");
		});
	}
	
	function clearErrors() {
		$("#validationSummary").hide();
		$(".validation-inline").removeClass("validation-inline");
	}

	function ContinueUnvalidated() {
		$("html, body").animate({ scrollTop: $('#section1 h2').offset().top }, "fast", function() {
			$("#section-div").hide("fast");
			$("#unverified").fadeIn("slow");
			$("#section2 div.sub-section-content").show("fast");
			$("#bad-next").hide();
			$("#nextbtn").show();
		});
	}

</script>