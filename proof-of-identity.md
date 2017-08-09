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
<p>All fields are required unless marked as optional.</p>


<!-- START SECTION 1 -->
<div id="section1" class="sub-section-container sub-section-open">
	<h2><p id="verified" style="display: none; position: absolute; padding:0; margin:0; right: 4%; color: green; font-size: 0.8em"><span class="fa fa-check green"></span> verified</p>Proof of identity</h2>
	
	<div id="section-div" class="sub-section-content">
		<div class="margin4">The details below are used to confirm your identity.</div>
		<fieldset>
			<legend class="margin4 larger">Your details</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-given" class="input-right">Given name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-given" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-other" class="input-right">Other given name <span class="field-note">(optional)</span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-other" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="individual1-family" class="input-right">Family name</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="individual1-family" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row clearfix">
				<div class="col4">
					<label for="dateofbirth" class="input-right">Date of birth</label>
				</div><!-- col -->
				<div class="col8 last">
					<input type="date" id="dateofbirth" />
				</div><!-- col -->
			</div>
		</fieldset>
		<div class="address-lookup" style="">
			<fieldset>
				<legend class="margin4 larger">Residential address</legend>
				<div class="grid-row clearfix">
					<div class="col4">
						<label class="input-right" for="ContactDetails_BusinessAddress_AddressDetails_CountryId">Country</label>
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
				<p class="margin4">Start typing the address in the field below and select the correct one from the drop-down list that appears. </p>						
				<div class="grid-row">
					<div class="col4">
						<label class="input-right" for="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText">Address</label>
					</div>
					<div class="col8 last">
						<input class="address-lookup-text ui-autocomplete-input" id="ContactDetails_BusinessAddress_AddressDetails_AddressLookupText" name="ContactDetails.BusinessAddress.AddressDetails.AddressLookupText" type="text" value="" autocomplete="off"> <a class="cd-btn help" href="#help-addressdetailsaddress"><span>Help - Address</span></a>
						
					</div>
				</div>
				<p class="margin4">or you can:<input type="button" id="addr-enter-manually-btn" class="btn btn-default address-enter-manually" value="Enter it manually"></p>
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
			</fieldset>
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
			<div class="grid-row clearfix">
				<div class="col4">
					<p>&nbsp;</p>
				</div>
				<div class="col7 last">
					<fieldset class="margin-bottom-075">
						<legend class="no-padding">Are you an Australian resident for taxation purposes?</legend>
						<div class="radio-toggle">
							<label class="on label-left" for="BusinessActivityDetails_IsResidentOfAustralia_Yes">
								<input id="BusinessActivityDetails_IsResidentOfAustralia_Yes" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="Yes">

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
			<div class="grid-row">
				<div class="col4">
					<label for="tfn" class="input-right">
						Tax File Number<br />
					</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="tfn" type="number">
					<p>Providing your TFN is the quickest way to prove your identity.</p>
				</div><!-- col -->
			</div><!-- grid-row -->
			<!--
			<div class="grid-row">
				<div class="col4">
					<label for="dob" class="input-right">Date of birth<br />
					<span class="field-note">(DD/MM/YYYY)</span></label>
				</div>
				<div class="col8 last">
					<input id="dob" type="date">
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label for="country" class="input-right">Country of birth</label>
				</div>
				<div class="col8 last">
					<select id="country">
						<option selected="selected">Australia</option>
						<option></option>
					</select>
				</div>
			</div>
			<div class="grid-row">
				<div class="col4">
					<label for="town" class="input-right">Town or city of birth</label>
				</div>
				<div class="col8 last">
					<input id="town" type="text">
				</div>
			</div>
			-->

		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" onclick="location.href='business-names-05.html'">Previous</button><button id="nextbtn" type="button" class="btn btn-default">Next</button>
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

    <div class="grid-row clearfix">
        <div class="col4">
            <p>&nbsp;</p>
        </div>
        <div class="col7 last">
            <fieldset id="BusinessActivityDetails_IsResidentOfAustralia" class="margin-bottom-075" tabindex="-1">
                <legend class="no-padding ">Are you an Australian resident for taxation purposes?</legend>
                <div class="radio-toggle">
                    <label class="on label-left" for="BusinessActivityDetails_IsResidentOfAustralia_Yes">
                        <input data-val="true" data-val-required="{0} is required." id="BusinessActivityDetails_IsResidentOfAustralia_Yes" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="Yes">

                        <span id="BusinessActivityDetails_IsResidentOfAustralia_Yes_span">Yes</span>
                    </label>
                    <label class="off label-right" for="BusinessActivityDetails_IsResidentOfAustralia_No">
                        <input id="BusinessActivityDetails_IsResidentOfAustralia_No" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="No">

                        <span id="BusinessActivityDetails_IsResidentOfAustralia_No_span">No</span>
                    </label>
                </div> <a class="cd-btn help" href="#help-businessactivityisresidentofaustralia"><span>Help - Resident for tax purposes</span></a>
                
            </fieldset>
            <p id="BusinessActivityDetails_IsResidentOfAustralia_No_Content" style="display: none">
                </p><p>Are you registered for <a href="https://www.ato.gov.au/business/international-tax-for-business/in-detail/doing-business-in-australia/gst-registration-information-for-a-non-resident/?page=1#Types_of_registration" target="_blank">Simplified Goods &amp; Services Tax (GST) <span class="visuallyhidden">(opens in new window)</span></a>? </p>
<p><strong>Please note:</strong> If you register for an ABN, you will lose this GST status and will be moved to full GST registration.</p>
            <p></p>
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



    <div class="controls-container">
    <div class="controls-content">
<button class="btn cancel ajax-button" data-ajax-target="ajax-container-for-businessdetails" name="SpXgWJEhm3PSafAhEI+gzT+yguW7i2eeMRDxomnlXkU=" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button><button class="btn btn-default ajax-button next" data-ajax-target="ajax-container-for-businessdetails" id="next-businessactivity-btn" name="EO84rvVS4xgqD9zHxz4Exg==" type="button" value="__cvg__tY59JnGJfVXqfDa5D37xIQ==">Save and continue</button>    </div>
</div>
</div>
</div>

<div id="section3" class="sub-section-container">
	<h2>Contact details</h2>
	<div class="sub-section-content">
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

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/jquery.blockUI.js"></script>
<script>
	$(document).ready(function () {
		/* Expand collapse headings config */
		navigationWithinPage();
		initSaveForLater();
		initApplicationOptions();

		$("#postal-cb").click(function() {
			$("#postal-address").toggle();
		});
		
		$("#nextbtn").click(function() {
			$.blockUI({
                    message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">verifying identity <img class="loading-ellipsis" src="img/ellipsis.gif" /></p>',
                    css: {
                        padding: "10px"
                    },
                    overlayCSS: {
                        backgroundColor: '#bbb',
                        borderRadius: '10px'
                    }
			});
			window.setTimeout(function() {
				$.unblockUI();
				$("html, body").animate({ scrollTop: $('#section1 h2').offset().top }, "fast", function() {
					$("#section-div").hide("fast"); //, function() {
						$("#verified").fadeIn("slow"); //, function() {
							$("#section2 div.sub-section-content").show("fast");
					//	});
				//	});
				});
				//$("#section2").addClass("sub-section-open");
			}, 2000);
		});
	});


</script>