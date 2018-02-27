---
title: Company name
layout: default-no-footer
---

<style>
	input[disabled] {
		text-transform: none;
		font-style: italic;
		font-weight: 300;
	}
</style>
<div class="progress-container" style="padding-bottom: 85px">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 3 of 5 steps" style="width:32%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="register"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="entitlement"><span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started <span class="visually-hidden"> (completed)</span></a></li>
		<li class="active" style="width: 15.3%"><a href="business-names"><span class="visually-hidden">Step </span><span>2</span><br>Business<br> name <span class="visually-hidden"> (completed)</span></a></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>3</span><br>Business<br> details <span class="visually-hidden"> (current step)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application <span class="visually-hidden"> (not completed)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit <span class="visually-hidden"> (not completed)</span></li>
		<li class="bookend right"><a href="dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>
<main class="wrapper">
    


<h1 id="heading" tabindex="-1">2. Business name <span role="progressbar">(Step 2 of 5 steps)</span></h1>

<form action="/registration/businessname?appId=10303" enctype="multipart/form-data" id="sobrsform" method="post">    <div style="display: none">
        <input name="__RequestVerificationToken" type="hidden" value="MdUPkRfXBebtP91fAs71E8aL3URVNP9KJU5eCmeQLQpEVU0Bh4-8sXTdH0wM3W6hrn9MkPXdCQxyH7RX9Nd1vt3kFtQKI8biF6Gt2t7yQNfT46r9Imz30Tm2XyUyBnhFv5VNC9HRHJxRinBlO0_I0Q2">
        <input id="__c__ApplicationId" name="__c__ApplicationId" type="hidden" value="r8grSNNEkpDh8zxz17LriQ==">
        <input id="__c__isDisplayContentKey" name="__c__isDisplayContentKey" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">

<input id="__c__Sections_0__View" name="__c__Sections[0].View" type="hidden" value="7DJ8Wdyn+gLGFC6m0H01Jw=="><input id="__c__Sections_0__Title" name="__c__Sections[0].Title" type="hidden" value="ngMmc2IPLQ7DOlkNK1YXNQ=="><input id="__c__Sections_1__View" name="__c__Sections[1].View" type="hidden" value="gVKItIenoyTgG8sPddX+rQ=="><input id="__c__Sections_1__Title" name="__c__Sections[1].Title" type="hidden" value="ULCTZSZXjtsrNwDqwSi+Xg==">
<input id="__c__Registrations_0_" name="__c__Registrations[0]" type="hidden" value="/4pu/HURh44V1/ejVGQIEQ=="><input id="__c__Registrations_1_" name="__c__Registrations[1]" type="hidden" value="Ku6Gy+Kjj+YP2qPJPHJzxQ=="><input id="__c__Registrations_2_" name="__c__Registrations[2]" type="hidden" value="z5GyAIlGkn4RLFR84HSFHg==">    </div>
    <div id="ajax-container-for-businessname">
        <input id="__c__SectionIndexId" name="__c__SectionIndexId" type="hidden" value="BfNQIa39YHWRsVvADavFng==">


<div id="validationSummary" class="validation-summary-valid validation-container clearfix" data-valmsg-summary="true">
    <div class="grid-row">
        <div class="validation-summary-icon">
            <img src="/content/img/ico-alert-red.png" alt="Error">
        </div>
        <div class="validation-message">
            <h2><a id="validationSummaryAnchor" tabindex="-1">Just <span id="validation-error-count">0</span> thing(s) to check and you're on your way:</a>
            </h2>
            <ul class="validation-message-errors">
                

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


    <div id="alloc-section" class="sub-section-container sub-section-open" role="region" aria-labelledby="section-heading-1">
        <h2 id="section-heading-1">Name allocation<span class="visuallyhidden"> (current section)</span></h2>
		<div class="sub-section-content">
			<fieldset id="fieldsetBusinessEntityTypes" class="col12 required margin-bottom-075">
				<legend class="larger">
					What name will you use for your company? <a class="cd-btn help" href="#help-companyname"><span>Help - Company name</span></a>
				</legend>
				<div class="grid-row">
					<p>Choose <strong>one</strong> of the buttons below to either use:</p>
				</div>
				<div class="grid-row">
					<div class="col12 custom-controls">
						<p>
							<input class="ajax-radio" id="have-name" name="name-type" type="radio" value="1">
							<label for="have-name" id="entitytype_ind_lbl">
								Create a new name <a class="cd-btn help" href="#help-entitlemententitytypeind"><span>Help - Create a new name</span></a>
								<br><span class="field-note">If you choose a new name we'll first check to see whether the name is available. A name may be unavailable because it is already registered or reserved by another company, the same as a registered business name, or unacceptable under the <em>Corporations Act 2001</em>.</span>
							</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col12 custom-controls">
						<p>
							<input class="ajax-radio" id="use-reserved" name="name-type" type="radio" value="2">
							<label for="use-reserved" id="entitytype_ptr_lbl">
								Use a reserved name <a class="cd-btn help" href="#help-entitlemententitytypeptr"><span>Help - Partnership</span></a>
								<br><span class="field-note">Choose this option if you've already reserved your company name with the Australian Securities & Investments Commission (ASIC) and have received a Reservation Notice. You will be prompted for the name and reservation number included on the notice.</span>
							</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col12 custom-controls">
						<p>
							<input class="ajax-radio" id="use-acn" name="name-type" type="radio" value="3">
							<label for="use-acn" id="entitytype_trt_lbl">
								Use the ACN <a class="cd-btn help" href="#help-entitlemententitytypetrt"><span>Help - Trust</span></a>
								<br><span class="field-note">If you don't want to create a name, you can simply use your Australian Company Number (ACN) as the company name. Your ACN will be issued when your company is successfully registered.</span>
							</label>
						</p>
					</div>
				</div>
			</fieldset>
			<div class="controls-container">
				<div class="controls-content">
					<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" id="prev-btn-1" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button>
					<button class="btn btn-default next" disabled="disabled" id="next-btn-1" type="button" value="">Save and continue</button>
				</div>
			</div>
		</div>
	</div>
    <div id="co-name-section" class="sub-section-container" role="region" aria-labelledby="section-heading-1">
        <h2 id="section-heading-1">Company name<span class="visuallyhidden"> (current section)</span></h2>
		<div class="sub-section-content">			
			<div id="create-name" class="grid-row clearfix" style="display: none;">
				<fieldset style="margin-bottom: 0;">
				<legend class="larger">Proposed name</legend>
				<div id="enter-co-name" class="col11 last">
					<p>Enter your proposed name to check if it's available to register as a business name.</p>
					<div class="card clearfix">
						<div class="form-row">
							<div>
								<label for="name-input">Company name<span class="visuallyhidden"> - text will convert to uppercase</span></label><a class="cd-btn help" href="#help-companynamehelp"><span>Help - Company name format</span></a><br>
								<input class="uppercase normaliseOrganisationName" id="name-input" name="CompanyName.ProposedCompanyName" type="text" value="BIRD PERSON">

<label class="visuallyhidden" for="legal-element">Legal element</label><select id="legal-element" name="CompanyName.NewNameLegalElementId" style="max-width:12em;"><option value="">Select legal element...</option>
<option selected="selected" value="1" selected>PTY LTD</option>
<option value="2">PTY LTD.</option>
<option value="3">PTY LIMITED</option>
<option value="4">PTY. LTD</option>
<option value="5">PTY. LTD.</option>
<option value="6">PTY. LIMITED</option>
<option value="7">PROPRIETARY LTD</option>
<option value="8">PROPRIETARY LTD.</option>
<option value="9">PROPRIETARY LIMITED</option>
</select>
								<button class="btn btn-inline btn-default ajax-button" data-ajax-target="ajax-container-for-businessname" data-busy-message="Searching for Company name" id="search-co-name" name="UBe3XYnW0cDfkvNrWSTsgZ66UPRQnvBd5cx4eevWmyk=" type="button" value="__cvg__EQclQ8ujmkGcz0q1StEHYaZMdR2rve8VVE4QqMcsKwU=">Check</button><br>
								<span  class="field-note">Text entered here will convert to uppercase letters.</span>
							</div>
						</div>
					</div>
				</div>
					<div id="co-search-results" class="col11 last" style="display: none;">
<div class="result-container" style=" margin-bottom: 2em;">
    <div class="result-row">
        <div class="result-cell cell-icon">

                <img src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success" style="width: 50px !important;">
        </div>
        <div class="result-cell cell-detail">
            <h2>BIRD PERSON PTY LTD</h2>

<blockquote>The name is available to be used as a business name.</blockquote>        </div>
        <div class="result-cell cell-action">
<button class="btn btn-inline btn-default ajax-button no-margin-right" data-ajax-target="ajax-container-for-businessname" id="add-companyname-btn" name="cFN+dlHznQVVGUMNxtPTq/Y85v9g6fnieQ2Dpcc3VU0=" type="button" value="__cvg__PZZycx0H44zNydgxWXBc/ofxZVfvuRgl7EwctEL3ljY=">Add this name</button>                <br>


            <a href="javascript:void(0);" class="smaller ajax-link" data-ajax-action="zDBJ5TQEw7wSW4gqWFMXmzQHd0wECRAw1MksApvCtgU=" data-ajax-value="__cvg__yd03VqC6NwNCvyWyDUnJeLIE1WqDiUSPhQETihmksIBZf/Dc2HHPM6IabROhJ7tN" data-ajax-target="ajax-container-for-businessname">Search for something else</a>
        </div>

    </div>
</div>



<p><strong>Registering a company name doesn't give you exclusive rights over the use of a name. </strong>It's also a good idea to check that the name isn't already a website name or trade mark. </p>

<p>Expand the links below to see available domain names and information on trade marks.</p>


<div style="display: none">
    <input id="ApplicationId" name="ApplicationId" type="hidden" value="10303">
    <input id="DomainSearchName" name="DomainSearchName" type="hidden" value="BIRD PERSON">
</div>
<div class="grid-row clearfix">
    <script type="text/javascript" src="/scripts/pages/shared/domainname.js?v=636463591900468037"></script>
    <div class="col12 last">
        <h3 id="domain-names" style="margin: .5em">
            <a href="javascript:void(0);" style="text-decoration: none !important;"><span class="fa fa-plus"></span> Domain names</a>
        </h3>

    </div>
</div>
<div class="grid-row clearfix">
    <script type="text/javascript" src="/scripts/pages/shared/trademarksearch.js?v=636505673429134240"></script>
    <div class="col12 last">
        <h3 id="trade-marks" style="margin: .5em">
            <a href="javascript:void(0);" style="text-decoration: none !important;"><span class="fa fa-plus"></span> Trade marks</a>
        </h3>
    </div>
</div>

                    </div>
					<div id="co-name-added" class="col11 last padding-bottom-1" style="display: none;">
<div class="cart-container">
    <div class="result-row result-row fade-in fade-in-inherit">
        <div class="result-cell cell-icon">
                <img src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success" style="width: 50px !important;">
        </div>
        <div class="result-cell cell-detail">
            <h2 id="added-co-name">BIRD PERSON PTY LTD</h2>

<blockquote id="tagline">The name is available to be used as a business name.</blockquote>


        </div>

        <div class="result-cell cell-action">
            
            <a id="deleteCompanyNameLink" class="remove margin-left-075" href="javascript:void(0);">
                <span>Remove</span>
            </a>
        </div>
    </div>

</div>
<div class="result-row">
</div>

<div id="dialogRemoveCompanyName" style="display: none;">
    <h1>Confirm remove</h1>
    <p>Are you sure you want to remove this company name?</p>
    <button class="btn btn-default ajax-button" data-ajax-target="ajax-container-for-businessname" name="z1tOU6MUt9J3vy/3fwHt2wwvV73Fo4UlDX6wNX6HAXs=" type="button" value="__cvg__7SbV06TrfnuMGDUNWKUx0n0EpUAWgFc6FP+D+8N9mnM=">Yes, remove</button>
    <a href="javascript:void(0);" class="margin-left-075" onclick="javascript: $('.vaCloseButton').trigger('click');">Cancel</a>
</div><div id="new-name-warning" class="card clearfix"><p><strong>Please note:</strong> The availability of a proposed name may change before you lodge the form. Check the confirmation and payment pages for changes.</p></div>

				</div>
				</fieldset>
			</div>
			<div id="co-name-reserved" class="grid-row">
				<h3>Reserved name</h3>
				<p>Enter the details of your reserved name, including the reservation number included on the Reservation Notice.</p>
                    <div class="col11 last padding-bottom-1">
                        <div class="grid-row">
                            <div>
                                <label for="CompanyName_ReservationNumber">Reservation number</label>
                            </div>
                            <div>
                                <input id="CompanyName_ReservationNumber" name="CompanyName.ReservationNumber" type="text" value=""><br>
                                <span class="field-note">Must have 9 digits.</span>
                            </div>
                        </div>
                        <div class="grid-row">
                            <div>
                                <label for="CompanyName_ReservedCompanyName">Company name<span class="visuallyhidden"> - text will convert to uppercase</span></label><a class="cd-btn help" href="#help-companynamehelp"><span>Help - Company name format</span></a><br>
                                <input class="uppercase" id="CompanyName_ReservedCompanyName" name="CompanyName.ReservedCompanyName" type="text" value="">
<label class="visuallyhidden" for="CompanyName_ReservedLegalElementId">Legal element</label><select id="CompanyName_ReservedLegalElementId" name="CompanyName.ReservedLegalElementId" style="max-width:12em;"><option value="">Select legal element...</option>
<option value="1">PTY LTD</option>
<option value="2">PTY LTD.</option>
<option value="3">PTY LIMITED</option>
<option value="4">PTY. LTD</option>
<option value="5">PTY. LTD.</option>
<option value="6">PTY. LIMITED</option>
<option value="7">PROPRIETARY LTD</option>
<option value="8">PROPRIETARY LTD.</option>
<option value="9">PROPRIETARY LIMITED</option>
</select><br>
                            <span class="field-note">Text entered here will convert to uppercase letters.</span>
                         </div>
                     </div>
                 </div>
             </div>
			<div id="co-use-acn">
				<h3>Legal element</h3>
				<p>You will use the ACN we issue you with as your Company name. Select the legal element details to be included with your name.</p>
				<div class="grid-row">
					 <div class="col11 last padding-bottom-1">
							<div class="grid-row">
								<div>
									<label for="CompanyName_UseAcnLegalElementId">Legal element</label>
								</div>
								<div>
										<select id="CompanyName_UseAcnLegalElementId" name="CompanyName.UseAcnLegalElementId" style="max-width:12em;"><option value="">Please select...</option>
	<option value="1">PTY LTD</option>
	<option value="2">PTY LTD.</option>
	<option value="3">PTY LIMITED</option>
	<option value="4">PTY. LTD</option>
	<option value="5">PTY. LTD.</option>
	<option value="6">PTY. LIMITED</option>
	<option value="7">PROPRIETARY LTD</option>
	<option value="8">PROPRIETARY LTD.</option>
	<option value="9">PROPRIETARY LIMITED</option>
	</select>
								</div>
							</div>
					 </div>
				 </div>
             </div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" id="prev-btn-2" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button>
				<button class="btn btn-default next" disabled="disabled" id="next-btn-2" type="button" value="">Save and continue</button>
			</div>
		</div>

	</div>
</div>
    <div id="bn-name-section" class="sub-section-container" role="region" aria-labelledby="section-heading-1">
        <h2 id="section-heading-1">Business name<span class="visuallyhidden"> (current section)</span></h2>
		<div class="sub-section-content">
			<p><strong>You don't need to register a business name if it's the same as your company name.</strong> For example, if your company name is Digital Exports Pty Ltd and you want to carry on a business under this name, you don't need to register it as a business name.</p>
			<p>If you want to operate under a different name, then you'll need to register it as a business name.</p>
			<p>Read more about <a href="https://www.business.gov.au/info/plan-and-start/start-your-business/business-and-company-registration/business-name-registration/business-name-trading-names-legal-names" target="_blank">business names, trading names and legal names <span class="visuallyhidden">(opens in new window)</span></a> on business.gov.au.</p>
		<div id="add-bn-question" class="clearfix margin-bottom-075" style="display: none;">
			<div class="grid-row">
				<div class="col11 last">
					<p class="label">Do you need to register any additional business names?</p>
					<div class="radio-toggle">
						<label class="label-left" for="bn-yes"><input id="bn-yes" type="radio" name="bn-question" ><span>Yes</span></label>
						<label class="label-right" for="bn-no"><input id="bn-no" type="radio" name="bn-question"><span>No</span></label>
					</div>
				</div>
			</div>
		</div>
			<div id="names-added" style="display: none;">
				<div class="cart-container">
					<div id="reg-bird" class="result-row fade-in fade-in-inherit" style="display: none;">
						<div class="result-cell cell-icon">
							<img src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success" style="width: 50px !important">
						</div>
						<div class="result-cell cell-detail">
							<h2>BIRD PERSON <a class="cd-btn help" href="#help-businessnameaddedavailable"><span>Help - Name available</span></a></h2>
							
				Business name added. <blockquote><strong>Note:</strong> The name is the same as your company name.</blockquote>
						</div>
						<div class="result-cell cell-action">
							<label class="visuallyhidden" for="BusinessNames_AddedBusinessNames_0__SelectedPrice">Select duration:</label><select class="registration-duration ajax-option" data-ajax-action="BR63RJhxzvKG6WBEQi/6UXSq76QhlrIJyG4EV/hKiUI=" data-ajax-value="__cvg__sAQJDPSEzYUU1JuBOGCum/9UVKlpOi6njWJMpK/RdotEzs4IamAxF7P7f5J03hHI" id="BusinessNames_AddedBusinessNames_0__SelectedPrice" name="BusinessNames.AddedBusinessNames[0].SelectedPrice"><option selected="selected" value="35">1 year $35</option>
							<option value="82" selected>3 years $82</option>
							</select>                <span class="subtotal">AU $82.00</span>         
							&nbsp;
							<a id="BusinessNames_AddedBusinessNames_0__Remove" class="remove" href="javascript:void(0);" data-ajax-id="2E1yyffxbM77cMN+d3Wu7Q=="><span>Remove</span></a>
						</div>
					</div>
					<div id="reg-phoenix" class="result-row fade-in fade-in-inherit" style="display: none;">
						<div class="result-cell cell-icon">
							<img src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success" style="width: 50px !important">
						</div>
						<div class="result-cell cell-detail">
							<h2>PHOENIX PERSON <a class="cd-btn help" href="#help-businessnameaddedavailable"><span>Help - Name available</span></a></h2>
							
				Business name added. <blockquote>The name is available to be used as a business name.</blockquote>
						</div>
						<div class="result-cell cell-action">
							<label class="visuallyhidden" for="BusinessNames_AddedBusinessNames_0__SelectedPrice">Select duration:</label><select class="registration-duration ajax-option" data-ajax-action="BR63RJhxzvKG6WBEQi/6UXSq76QhlrIJyG4EV/hKiUI=" data-ajax-value="__cvg__sAQJDPSEzYUU1JuBOGCum/9UVKlpOi6njWJMpK/RdotEzs4IamAxF7P7f5J03hHI" id="BusinessNames_AddedBusinessNames_0__SelectedPrice" name="BusinessNames.AddedBusinessNames[0].SelectedPrice"><option selected="selected" value="35">1 year $35</option>
							<option value="82" selected>3 years $82</option>
							</select>                <span class="subtotal">AU $82.00</span>         
							&nbsp;
							<a id="BusinessNames_AddedBusinessNames_0__Remove" class="remove" href="javascript:void(0);" data-ajax-id="2E1yyffxbM77cMN+d3Wu7Q=="><span>Remove</span></a>
						</div>
					</div> 
					<div id="dialogRemoveBusinessName" style="display: none;">
						<h1>Confirm remove</h1>
						<p>Are you sure you want to remove this business name?</p>
						<button class="btn btn-default ajax-button" data-ajax-target="ajax-container-for-businessname" name="abHW/fUQJkdQx4EOphA4DRhxupo0k+iDz8AzqnOpLts=" type="button" value="__cvg__sOvQZyQHohkAipsyLUjYGBe+6+uBFrvCo/IXriHuDtoU+lACEDnKe+775F/d1z4K">Yes, remove</button>
						<a href="javascript:void(0);" class="margin-left-075" onclick="javascript: $('.vaCloseButton').trigger('click');">Cancel</a>
					</div>
				</div>
				<div id="row-total" class="cart-container">
					<div class="result-row">
						<div class="result-cell cell-total">
							<p>Total: AU $<span id="reg-tot">82</span>.00</p>
						</div>
					</div>
				</div>
			</div>
			<div id="reg-tip" class="registration-tip margin-top-075" style="display: none;">
				<p><strong>Please note</strong>: The availability of a proposed name may change before you lodge the form. Check the confirmation and payment pages for changes.</p>
			</div>

		<div id="business-names" style="display: none;">
			<h3 id="add-bn-heading">Add Business name</h3>			
			<div id="input-bn" class="clearfix">
				<p>Enter your proposed name to check if it's available to register as a business name.</p>
				<div class="card clearfix">
					<div class="form-row">
						<p>
							<label for="bn-text-input">Search for a business name<span class="visuallyhidden"> - text will convert to uppercase</span></label><br>
							<input class="uppercase enter-click-button normaliseOrganisationName" id="bn-text-input" name="BusinessNames.BusinessNameSearchText" type="text" value="BIRD PERSON">
							<button class="btn btn-inline ajax-button" data-ajax-target="ajax-container-for-businessname" data-busy-message="Searching for business name" id="check-bn-btn" name="7KVIUXqyFVicyHfSkLCbUitSRob4nBqS5ycImFOd6Gg=" type="button" value="__cvg__sQN7pFoSVr1LCdQaudROkoWHh18VkNBHpFh0k1WgLcZJY57idkp+lIc3+zyqSGEJ">Check</button>
							<br>
							<span class="field-note">Text entered here will convert to uppercase letters.</span>
						</p>
					</div>
				</div>
			</div>
			<div id="bn-checked" style="display: none;">
				<div class="result-container">
					<div class="result-row">
						<div class="result-cell cell-icon">
							<img src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success" style="width: 50px !important">
						</div>
						<div class="result-cell cell-detail">
							<h2>PHOENIX PERSON</h2>

			<blockquote>The name is available to be used as a business name.</blockquote>            </div>
						<div class="result-cell cell-action">
			<label class="visuallyhidden" for="BusinessNames_SearchedBusinessName_SelectedPrice">Select duration:</label><select class="registration-duration" id="BusinessNames_SearchedBusinessName_SelectedPrice" name="BusinessNames.SearchedBusinessName.SelectedPrice"><option value="35">1 year $35</option>
			<option value="82" selected>3 year $82</option>
			</select><button class="btn btn-inline btn-default ajax-button no-margin-right" data-ajax-target="ajax-container-for-businessname" id="add-bn-btn" name="s0AM2cEcevWHLPREs3/kBrAQhWSAMvA6193n3FZxZ9Y=" type="button" value="__cvg__JX8ISNbDS8ZJka9hmOcBZzoxVXv0NWscTrKzHKoXBzQ=">Add this name</button>                        <br>
									<a  onclick="clearBNSearch();" href="javascript:void(0);" class="smaller ajax-link" data-ajax-action="dkjvG7xyk/YBGzt9LJvEjhkFvEHCjwx2NUdpoWS6f8w=" data-ajax-value="__cvg__mxiGP8cP8vxMW16f/IVUMho+Ny1/PKfOBzRbXWt6S0Ol4Tfgm4cT/Dc4AP0uuy4B" data-ajax-target="ajax-container-for-businessname">Search for something else</a>
						</div>
					</div>
				</div>
				<p><strong>Registering a business name doesn't give you exclusive rights over the use of a name. </strong>It's also a good idea to check that the name isn't already a website name or trade mark. </p>
				<p>Expand the links below to see available domain names and information on trade marks.</p>
				<div class="col12 last">
					<h3 id="domain-names" style="margin: .25em;">
						<a href="javascript:void(0);" style="text-decoration: none !important;"><span class="fa fa-plus"></span> Domain names</a>
					</h3>
				</div>
				<div class="col12 last">
					<h3 id="domain-names" style="margin: .25em;">
						<a href="javascript:void(0);" style="text-decoration: none !important;"><span class="fa fa-plus"></span> Trade marks</a>
					</h3>
				</div>
			</div>
			<div id="bn-name-clash" style="display: none;">
				<div  class="result-container">
					<div class="result-row">
						<div class="result-cell cell-icon">

								<img src="{{site.baseurl}}/img/ico-exclamation-orange.png" style="width: 50px !important;" alt="Alert">
						</div>
						<div class="result-cell cell-detail">
							<h3>BIRD PERSON</h3>
							<blockquote>You have already added BIRD PERSON PTY LTD as your Company Name.</blockquote>
							<p>You don't need to register a business name if it's the same as your company name.</p>
						</div>
						<div class="result-cell cell-action">
							<button class="btn btn-inline btn-default ajax-button no-margin-right" data-ajax-target="ajax-container-for-businessname" style="width: 220px; margin-bottom: 7px;" id="add-anyway-btn" type="button">Add this name anyway</button><br>
							<button class="btn btn-inline ajax-button no-margin-right" data-ajax-target="ajax-container-for-businessname" id="try-different-btn" style="width: 220px;" type="button">Try a different name</button><br>
							<a href="javascript:void(0);" onclick="cancelBNreg();" class="smaller ajax-link" data-ajax-action="zDBJ5TQEw7wSW4gqWFMXmzQHd0wECRAw1MksApvCtgU=" data-ajax-value="__cvg__yd03VqC6NwNCvyWyDUnJeLIE1WqDiUSPhQETihmksIBZf/Dc2HHPM6IabROhJ7tN" data-ajax-target="ajax-container-for-businessname">I don't need to register a business name</a>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="controls-container">
			<div class="controls-content">
				<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" id="prev-btn-3" type="button" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button>
				<button class="btn btn-default next" disabled="disabled" id="next-btn-3" type="button" value="">Save and continue</button>
			</div>
		</div>
	</div>
</div>


    </div>
</form>

</main>
<script>
	$(document).ready(function() {
		$("html, body").animate({
			scrollTop: $("#section-heading-1").offset().top
		}, 200);
		$("input[name=name-type]").click(function() {
			$("#next-btn-1").attr("disabled", false);
			var id = $(this)[0].id;
			$("#next-btn-2").attr("disabled", id==="have-name");
			$("#create-name").toggle(id==="have-name");
			$("#co-name-reserved").toggle(id==="use-reserved");
			$("#co-use-acn").toggle(id==="use-acn");
		});
		$("#next-btn-1").click(function() {
			$("#alloc-section").removeClass("sub-section-open").addClass("sub-section-done");
			$("#co-name-section").addClass("sub-section-open");
			$("html, body").animate({
				scrollTop: $("#co-name-section").offset().top
			}, 200);
		});
		$("#prev-btn-2").click(function() {
			$("#alloc-section").removeClass("sub-section-done").addClass("sub-section-open");
			$("#co-name-section").removeClass("sub-section-open");
			$("html, body").animate({
				scrollTop: $("#alloc-section").offset().top
			}, 200);
		});
		$("#next-btn-2").click(function() {
			$("#co-name-section").removeClass("sub-section-open").addClass("sub-section-done");
			$("#bn-name-section").addClass("sub-section-open");
			$("#add-bn-question").show();
		});
		$("#prev-btn-3").click(function() {
			$("#co-name-section").removeClass("sub-section-done").addClass("sub-section-open");
			$("#bn-name-section").removeClass("sub-section-open");
		});

		$("#search-co-name").click(function() {
			if ($(this).html() === "Check") {
				window.setTimeout(function() {
					$.blockUI({ message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">Searching for Company name <img class="loading-ellipsis" src="{{site.baseurl}}/img/ellipsis.gif" /></p>' });
				}, 1000);
				window.setTimeout(function() {
					$.unblockUI();
					$("#enter-co-name").hide();
					$("#co-search-results").show();
					$("html, body").animate({
						scrollTop: $("#create-name").offset().top
					}, 200);
				}, 3500);
			} else {
				$("#enter-co-name").hide();
				$("#new-name-warning").hide();
				$("#co-name-added").show();
				if ($("#use-reserved").is(":checked")) {
					$("#tagline").html("Reservation number: 555473221");
				} else {
					$("#added-co-name").html("<em>_ _ _&nbsp;&nbsp;_ _ _&nbsp;&nbsp;_ _ _</em>&nbsp;&nbsp;PTY LTD");
					$("#tagline").html("Your ACN will be used as your company name.");
				}
				$("#add-bn-question").show();
				$("html, body").animate({
					scrollTop: $("#add-bn-question").offset().top
				}, 200);
			}
		});
		$("#add-companyname-btn").click(function() {
			$("#co-search-results").hide();
			$("#co-name-added").show();
			$("#new-name-warning").show();
			$("#next-bn-btn").attr("disabled", false);
			$("#next-btn-2").attr("disabled", false);
		});
		$("input[name=bn-question]").click(function() {
			if ($(this)[0].id === "bn-yes") {
				$("#business-names").show();
				$("#bn-text-input").focus();
				$("#next-btn-3").attr("disabled", true);
				$("html, body").animate({
					scrollTop: $("#business-names").offset().top
				}, 200);
			} else {
				$("#business-names").hide();
				$("#next-btn-3").attr("disabled", false);
			}
		});
		$("#check-bn-btn").click(function() {
			window.setTimeout(function() {
				$.blockUI({ message: '<p id="loading-status" role="progressbar" aria-valuetext="loading">Searching for Business name <img class="loading-ellipsis" src="{{site.baseurl}}/img/ellipsis.gif" /></p>' });
			}, 1000);
			window.setTimeout(function() {
				$.unblockUI();
				if ($("#bn-text-input").val() === "BIRD PERSON") {
					$("#input-bn").hide();
					$("#bn-name-clash").show();
				} else {
					$("#input-bn").hide();
					$("#bn-checked").show();
				}
				$("html, body").animate({
					scrollTop: $("#business-names").offset().top
				}, 200);
			}, 3500);
		});
		$("#add-bn-btn").click(function() {
			$("#bn-checked").hide();
			if ($("#names-added").is(":visible")) {
				$("#reg-tot").html("164");
				$("#bn-text-input").val("");
			} else  {
				$("#bn-text-input").val("BIRD PERSON");
			}
			$("#names-added, #reg-phoenix").show();
			$("#reg-tip").show();
			$("#add-bn-heading").html("Add another business name");
			$("#input-bn").show();
			$("#next-btn-3").attr("disabled", false);
			$("#bn-text-input").focus();
			$("html, body").animate({
				scrollTop: $("#names-added").offset().top
			}, 200);
		});
		$("#add-anyway-btn").click(function() {
			$("#bn-name-clash").hide();
			if ($("#names-added").is(":visible")) {
				$("#reg-tot").html("164");
				$("#bn-text-input").val("");
			} else {
				$("#bn-text-input").val("PHOENIX PERSON");
			}
			$("#names-added").show();
			$("#reg-bird").show();
			$("#reg-tip").show();
			$("#add-bn-heading").html("Add another business name");
			$("#input-bn").show();
			$("#next-btn-3").attr("disabled", false);
			$("#bn-text-input").focus();
			$("html, body").animate({
				scrollTop: $("#names-added").offset().top
			}, 200);
		});
		$("#try-different-btn").click(clearBNSearch);
	});
	function clearBNSearch() {
		$("#bn-name-clash").hide();
		$("#bn-checked").hide();
		if (!$("#names-added").is(":visible")) {
			$("#bn-text-input").val($("#bn-text-input").val()==="PHOENIX PERSON"?"BIRD PERSON":"PHOENIX PERSON");
		}
		$("#input-bn").show();
		$("#bn-text-input").focus();
		$("html, body").animate({
			scrollTop: $("#names-added").offset().top
		}, 200);
	}
	
	function cancelBNreg() {
		$("#bn-name-clash").hide();
		$("#bn-text-input").val("PHOENIX PERSON");
		$("#input-bn").show();
		$("#bn-no").click();
	}

</script>
