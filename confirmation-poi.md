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

<div class="grid-row">
    <div>
        Here&apos;s your chance to check that you&apos;ve entered all the details correctly. If you find an error on this page, select the Edit button next to a section to return to that part of the form. <a class="cd-btn help" href="#help-confirmationnotes"><span>Help - Confirmation</span></a>
    </div>
</div>
<form action="/registration/confirmation?appid=2118" id="sobrsform" method="post">
<input name="__RequestVerificationToken" type="hidden" value="itmZqTVpE9huqUqD4pABZFeXU1kNf31EvJdkyDFdb-c8cYEeaRzPbY_BANbLHfcHcFyzkSfw81bVBzI2UwU_9DREO05g6-cnBprKEp1sySq4DLd9VF5hHYu4-BIRKt3jvIiK0RpSiuo-cA3BBxZC7w2" />
<input id="__c__ApplicationId" name="__c__ApplicationId" type="hidden" value="dN5hC9T2vnBNExPpgqmqsQ==" />
<input id="__c__HasNameStatusChanged" name="__c__HasNameStatusChanged" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
<input id="__c__isDisplayContentKey" name="__c__isDisplayContentKey" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
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
    <div class="confirmation">
<div id="selectedregistrations" class="section-container" data-section-name="Registrations">
                    <div class="confirmation-heading">
                        <h2>
                            Selected Registrations
                                <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/type?appId=2133&amp;s=0">Edit</button>
                        </h2>
                    </div>
                        <ul>
<li><a href="#businessactivity">Australian Business Number (ABN)</a></li>
    </ul>
                <div id="gettingstarted" class="section-container" data-section-name="GettingStarted">
                    <div class="confirmation-heading">
                        <h2>
                            Getting Started
                        </h2>
                    </div>
                                                                                            <table id="abndetails">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">ABN details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/gettingstarted?appId=2133&amp;s=0">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Entity Type</td>
           

            <td class="input-value">Individual</td>
        </tr>
        <tr>
            <td class="field-name">Entity Subtype</td>
           

            <td class="input-value">Individual/Sole Trader</td>
        </tr>
                                    
                                </tbody></table>
                </div>
                <div id="businessdetails" class="section-container" data-section-name="AbnRegistrationDetails">
                    <div class="confirmation-heading">
                        <h2>
                            Business Details
                        </h2>
                    </div>
					<div id="divEntitlementMessage" class="result-container validation col12 outcome" style="background-color: #efe8ce;">
						<div class="grid-row">
							<div class="col1">
									<img id="imgEntitle" alt="Entitled" src="{{ site.baseurl }}/img/ico-exclamation-orange.png" style="margin-top: 0;">
							</div>
							<div class="col11 last">
								<h3 id="hEntitledTitle" style="margin-top: 0; margin-left: 0;">Your identity has not been confirmed</h3>
								<div id="divEntitledMessage"><p>The details you have entered do not match our records. Check the fields in the &apos;Proof of identity&apos; section below and select &apos;Edit&apos; to correct any errors. You have <strong>2 attempts</strong> left to verify your identity.</p></div>
									<div>You may submit your application without confirming your identity, but this may result in your application being rejected. You will then need to contact the ATO to progress your application.
								</div>
							</div>
						</div>
					</div>
					<table id="proofofidentity">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Proof of Identity</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2133&amp;s=0">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Roles</td>
           

            <td class="input-value">Sole Trader, Authorised Contact</td>
        </tr>
        <tr>
            <td class="field-name">Name</td>
           

            <td class="input-value">Fred Nerk</td>
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
            <td class="field-name">Are you an Australian resident for taxation purposes?</td>
           

            <td class="input-value">Yes</td>
        </tr>
        <tr>
            <td class="field-name">Main Business Address</td>
           

            <td class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
        </tr>
        <tr>
            <td class="field-name">Postal Address</td>
           

            <td class="input-value">200 Anthony Rd, Anthony, QLD, Australia, 4310</td>
        </tr>

                                </tbody></table>
                                <table id="businessactivity">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">ABN details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2133&amp;s=1">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">ABN start date</td>
           

            <td class="input-value">7/09/2017</td>
        </tr>
        <tr>
            <td class="field-name">All business activity will end within 3 months of the start date</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Do you operate an agricultural property?</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Main business activity</td>
           

            <td class="input-value">Lake or river fishing</td>
        </tr>
        <tr>
            <td class="field-name">Business activity at main address</td>
           

            <td class="input-value">Same as the main business activity</td>
        </tr>
		<tr>
            <td class="field-name">Contact Email</td>
           

            <td class="input-value">test@test.com</td>
        </tr>
        <tr>
            <td class="field-name">Business Hours Phone</td>
           

            <td class="input-value">0243218765</td>
        </tr>
                                </tbody></table>
                                <table id="additionalbusinesslocations">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Additional business locations</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2133&amp;s=3">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name"></td>
           

            <td class="input-value">Not Provided</td>
        </tr>
                                    
                                </tbody></table>
                                <table id="authorisedcontacts">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Authorised contacts</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2133&amp;s=4">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Tax file number</td>
           

            <td class="input-value">123456782</td>
        </tr>
        <tr>
            <td class="field-name">Name</td>
           

            <td class="input-value">Fred Nerk</td>
        </tr>
        <tr>
            <td class="field-name">Position</td>
           

            <td class="input-value">Individual/Sole Trader</td>
        </tr>
        <tr>
            <td class="field-name">Email</td>
           

            <td class="input-value">test@test.com</td>
        </tr>
        <tr>
            <td class="field-name">Business Hours Phone</td>
           

            <td class="input-value">0243218765</td>
        </tr>
                                    
                                </tbody></table>
                                <table id="reasonforabnapplication">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Reason for ABN application</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2133&amp;s=5">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Reason</td>
           

            <td class="input-value">New business in Australia</td>
        </tr>
        <tr>
            <td class="field-name">Is this your first time in business in Australia?</td>
           

            <td class="input-value">Yes</td>
        </tr>
                                    
                                </tbody></table>
                </div>

        <div id="ajax-container-for-declaration">
            
<div style="display: none">
    <input id="__c__Declaration_IsDeclarantDetailsRequired" name="__c__Declaration.IsDeclarantDetailsRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsDeclarantNameRequired" name="__c__Declaration.IsDeclarantNameRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsDeclarantAddressRequired" name="__c__Declaration.IsDeclarantAddressRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsDeclarantPositionRequired" name="__c__Declaration.IsDeclarantPositionRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsDeclarantContactDetailsRequired" name="__c__Declaration.IsDeclarantContactDetailsRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsAusKeyRegistrationPresent" name="__c__Declaration.IsAusKeyRegistrationPresent" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    <input id="__c__Declaration_IsDeclarantACompany" name="__c__Declaration.IsDeclarantACompany" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">
    ;
    <input id="__c__Declaration_ApplicationId" name="__c__Declaration.ApplicationId" type="hidden" value="k3YtThqY4AdBj6QjFJ/bxA==">;
    <input id="__c__Declaration_IsDeclarantApplicant" name="__c__Declaration.IsDeclarantApplicant" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;
    <input id="__c__Declaration_IsDisplayReferrerConsent" name="__c__Declaration.IsDisplayReferrerConsent" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;
    <input id="__c__Declaration_IsSmsf" name="__c__Declaration.IsSmsf" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;

<input id="__c__Declaration_Officeholders_0__Value" name="__c__Declaration.Officeholders[0].Value" type="hidden" value="44/3LrOQd/uKFIPiyT3jVQ=="><input id="__c__Declaration_Officeholders_0__Text" name="__c__Declaration.Officeholders[0].Text" type="hidden" value="yG7gIoTaU6iyeLcpVo5xlg=="><input id="__c__Declaration_Officeholders_1__Value" name="__c__Declaration.Officeholders[1].Value" type="hidden" value="Bl4QuLay3uQM/jutouihIw=="><input id="__c__Declaration_Officeholders_1__Text" name="__c__Declaration.Officeholders[1].Text" type="hidden" value="mNDAvZQCnDqRCgvXeGCfhQgX2Q414eYQJ7y4eS3DpGE=">
</div>


<fieldset id="declarationFieldset" class="showhide-target">
    <legend class="larger">
        Declaration <a class="cd-btn help" href="#help-confirmationdeclarationlegend"><span>Help - Declaration</span></a>
    </legend>
        <p>Please complete the details below. All fields are required unless marked as <em>(optional)</em>. </p>

        <div class="grid-row">
            <div class="col4">
                <label class="input-right" for="Declaration_OfficeholderId">Who is making the declaration?</label>
            </div>
            <div class="col8 last">
<select id="Declaration_OfficeholderId" name="Declaration.OfficeholderId"><option value="">Please select...</option>
<option value="1183">Fred Nerk</option>
<option value="AddAnother">Add another person</option>
</select> 
                
            </div>
        </div>


    <div id="AddDeclarant" style="display:none">


    </div>


</fieldset>






<a id="Declaration_DeclarationMustBeAccepted"></a>
<div class="declaration-wrapper margin-top-075">

    <div id="declaration-text" class="grid-row">
                            <fieldset class="custom-controls">
                <legend class="larger no-padding">Tax Registrations</legend>
                <p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
                <ul>
                        <li>Australian Business Number (ABN)</li>
                </ul>
                    <p>
                        <input id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true"><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
                        <label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">I declare that:<br>
<span class="dot-point">The information in this application is true and correct.</span><br>
<span class="dot-point">This document has been prepared in accordance with information supplied by the entity.</span><br>
<span class="dot-point">I have received a declaration in writing from the entity stating that the information is true and correct.</span><br>
<span class="dot-point">I am authorised by the entity to give this document to the Commissioner of Taxation and/or Registrar of the Australian Business Register.</span> </label>
                    </p>
                            </fieldset>
            </div>
    <div class="grid-row">
        <h3>Privacy</h3>
        <p>The information provided to ASIC, the ABR and the ATO in this form may include personal information. Please refer to the <a href="http://www.asic.gov.au/privacy" target="_blank">ASIC privacy policy <span class="visuallyhidden">(opens in new window)</span></a>, the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> and the <a href="https://www.ato.gov.au/About-ATO/Access,-accountability-and-reporting/In-detail/Privacy-notices/Privacy-policy/" target="_blank">ATO privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for information on how they handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
    </div>
</div>




        </div>
        
        <input id="Declaration_RegistrationDeclarationAccepted" name="Declaration.RegistrationDeclarationAccepted" type="hidden" value="False">
        <div class="grid-row custom-controls">
            <div>
                <strong>Almost done!</strong> You now have a chance to print a copy of the form by selecting <strong>File</strong> from the browser menu above, then <strong>Print</strong>. If payment is required, the next step will open our secure payment page. <a class="cd-btn help" href="#help-confirmationalmostdone"><span>Help - Almost Done</span></a>
            </div>
        </div>
        
        
    </div>
</div>
