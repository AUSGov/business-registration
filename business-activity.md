---
title: Business details
layout: default
---
<style>
	a.feedback {
		position: fixed;
		right: 5px;
		bottom: 5px;
		background-color: #6f6f6f;
		border: 1px solid #fff;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 500;
		text-decoration: none;
		width: 140px;
		height: 45px;
		padding-left: 1rem;
		padding-top: .5rem;
		z-index: 10;
		background-image: none;
		padding-right: 0;
	}
	
	.ui-menu-item {
		padding: 10px;
		font-size: 90%;
	}
	
	#business-activity {
		resize: none;
	}
</style>
<div class="progress-container" style="padding-bottom: 85px">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 3 of 5 steps" style="width:48.25%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="register"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="entitlement"><span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started <span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="business-names"><span class="visually-hidden">Step </span><span>2</span><br>Business<br> name <span class="visually-hidden"> (completed)</span></a></li>
		<li class="active" style="width: 15.3%"><span class="visually-hidden">Step </span><span>3</span><br>Business<br> details <span class="visually-hidden"> (current step)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application <span class="visually-hidden"> (not completed)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit <span class="visually-hidden"> (not completed)</span></li>
		<li class="bookend right"><a href="dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>
<h1 id="heading" tabindex="-1">3. Business details <span>(Step 3 of 6)</span></h1>
<p>All fields are required unless marked as optional.</p>


<!-- START SECTION 1 -->
<div id="section1" class="sub-section-container sub-section-done">
	<h2>Proof of identity</h2>
	<div class="sub-section-content"></div>
</div>

<!-- START SECTION 3 -->
<div id="section3" class="sub-section-container sub-section-open">
	<h2>Business activity details</h2>
<div class="sub-section-content sub-section-open" style="">
    


<div style="display: none">
    <input id="__c__BusinessActivityDetails_IsSoleTrader" name="__c__BusinessActivityDetails.IsSoleTrader" type="hidden" value="5uR1c+nYSyEWkNRZa73mcg==">
    <input id="__c__BusinessActivityDetails_IsSuperannuation" name="__c__BusinessActivityDetails.IsSuperannuation" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__BusinessActivityDetails_IsApraRegulatedSuperannuation" name="__c__BusinessActivityDetails.IsApraRegulatedSuperannuation" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    
    <input id="__c__BusinessActivityDetails_IsDisplayAsicNumber" name="__c__BusinessActivityDetails.IsDisplayAsicNumber" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__BusinessActivityDetails_IsDisplayOrganisationSubType" name="__c__BusinessActivityDetails.IsDisplayOrganisationSubType" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__BusinessActivityDetails_IsBusinessAddressActivityRequired" name="__c__BusinessActivityDetails.IsBusinessAddressActivityRequired" type="hidden" value="5uR1c+nYSyEWkNRZa73mcg==">
    <input id="__c__BusinessActivityDetails_HasBusinessAddressActivity" name="__c__BusinessActivityDetails.HasBusinessAddressActivity" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__BusinessActivityDetails_ApplicationId" name="__c__BusinessActivityDetails.ApplicationId" type="hidden" value="6hkqQj7VXsODlxrZQsxm7A==">
    <input id="__c__BusinessActivityDetails_EntitySubType" name="__c__BusinessActivityDetails.EntitySubType" type="hidden" value="6GS8kNW6fYLQrd2dzjhTHA==">
</div>

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
            <input class="abnstartdate hasDatepicker" id="BusinessActivityDetails_StartDate" name="BusinessActivityDetails.StartDate" type="text" value="28/09/2017"><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-businessactivitystartdate"><span>Help - ABN start date</span></a>
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
                    <input class="abnenddate hasDatepicker" id="BusinessActivityDetails_EndDate" name="BusinessActivityDetails.EndDate" type="text" value=""><button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button> <a class="cd-btn help" href="#help-businessactivityenddate"><span>Help - ABN end date</span></a>
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
                        <input id="BusinessActivityDetails_IsResidentOfAustralia_Yes" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="Yes">

                        <span id="BusinessActivityDetails_IsResidentOfAustralia_Yes_span">Yes</span>
                    </label>
                    <label class="off label-right" for="BusinessActivityDetails_IsResidentOfAustralia_No">
                        <input id="BusinessActivityDetails_IsResidentOfAustralia_No" name="BusinessActivityDetails.IsResidentOfAustralia" type="radio" value="No">

                        <span id="BusinessActivityDetails_IsResidentOfAustralia_No_span">No</span>
                    </label>
                </div> <a class="cd-btn help" href="#help-businessactivityisresidentofaustralia"><span>Help - Resident for tax purposes</span></a>
                
            </fieldset>
            <p id="BusinessActivityDetails_IsResidentOfAustralia_No_Content" style="display: none">
                </p><p>Are you registered for <a href="https://www.ato.gov.au/business/international-tax-for-business/in-detail/doing-business-in-australia/australian-gst-registration-for-non-residents/?page=1#Types_of_registration" target="_blank">Simplified Goods &amp; Services Tax (GST) <span class="visuallyhidden">(opens in new window)</span></a>? </p>
<span><strong>Please note:</strong> If you register for an ABN, you will lose this GST status and will be moved to standard GST registration.</span>
            <p></p>
        </div>
    </div>

</fieldset>

    <fieldset id="fieldsetBusinessAddressActivity">
        <legend class="margin4 larger">Main business activity <a class="cd-btn help" href="#help-businessbusinessactivitylegend"><span>Help - Main business activity</span></a></legend>
		<div id="BusinessActivityDetails_BusinessAddressActivity">
			<div class="showhide-target" style="display: block">
				<div style="display: none">
					<input id="__c__BusinessActivityDetails_BusinessAddressActivity_BusinessActivityId" name="__c__BusinessActivityDetails.BusinessAddressActivity.BusinessActivityId" type="hidden" value="BfNQIa39YHWRsVvADavFng==">
				</div>
				
				<div class="grid-row">
					<div class="col4">
						<label for="business-activity" class="input-right">
							Choose your main business activity<br>
							<span class="field-note">(Start typing and choose from the options presented)</span>
						</label>
					</div>
					<div class="col8 last">
						<textarea id="business-activity" rows="1"></textarea>
						<p id="typed-text" style="display: inline-block; vertical-align: bottom; color: #aaa"></p>
					</div>
				</div>
			</div>
		</div>
	</fieldset>


    <div class="controls-container">
		<div class="controls-content">
			<button class="btn cancel ajax-button" data-ajax-target="ajax-container-for-businessdetails" name="SpXgWJEhm3PSafAhEI+gzT+yguW7i2eeMRDxomnlXkU=" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button><button class="btn btn-default ajax-button next" data-ajax-target="ajax-container-for-businessdetails" id="next-businessactivity-btn" name="EO84rvVS4xgqD9zHxz4Exg==" type="button" value="__cvg__tY59JnGJfVXqfDa5D37xIQ==">Save and continue</button>
		</div>
	</div>
</div>
</div><!-- sub-section-container -->

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>
<a class="feedback" href="https://business.gov.au/Forms/Feedback" target="_blank"><span class="fa fa-commenting"></span>&nbsp;Feedback <span class="visuallyhidden">(opens in new window)</span></a>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/business-activity.js"></script>
