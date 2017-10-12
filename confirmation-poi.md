---
title: Confirm application
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
<div id="divEntitlementMessage-top" class="result-container validation col12 outcome" style="background-color: #efe8ce; display: none;">
        <div class="grid-row">
            <div class="col1">
                    <img id="imgEntitle" alt="Entitled" src="{{ site.baseurl }}/img/ico-exclamation-orange.png" style="margin-top: 0;">
            </div>
            <div class="col11 last">
                <h3 id="hEntitledTitle" style="margin-top: 0; margin-left: 0;">Unable to verify your identity</h3>
                <div id="divEntitledMessage"><p>The identity details you have entered have not been verified by the Australian Taxation Office (ATO). You can check your details on the <a href="confirmation-eoi?lastfailed=true">Proof of identity</a> page.</p></div>
            </div>
        </div>
    </div>
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
                <div id="feesummary" class="section-container" data-section-name="FeeSummary">
                    <div class="confirmation-heading">
                        <h2>
                            Fee Summary
                        </h2>
                    </div>
    <div class="cart-container">
                <h3>Business Name</h3>
            <div class="cart-container">
                <div class="result-row" data-business-name-id="1010">
                    
                    <div class="result-cell cell-detail">
                        <p>CHARLETON</p>

                    </div>
                    <div class="result-cell cell-action no-padding">
                        <span class="subtotal">AU $999</span>
                    </div>
                </div>
            </div>
            </div>
    <!-- cart-container -->
        <div class="cart-container">
            <div class="result-row">
                <div class="result-cell cell-total">
                    <p>Total payment required: AU<span id="totalPayment">$999</span></p>
                </div>
            </div><!-- result-row -->
        </div>
    <!-- cart-container -->
                <div id="selectedregistrations" class="section-container" data-section-name="Registrations">
                    <div class="confirmation-heading">
                        <h2>
                            Selected Registrations
                                <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/type?appId=2118&amp;s=0">Edit</button>
                        </h2>
                    </div>
                        <ul>
<li><a href="#businessactivity">Australian Business Number (ABN)</a></li>
<li><a href="#businessname">Business name</a></li>
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
                                    <tr>
                                        <th style="vertical-align: middle">ABN details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/gettingstarted?appId=2118&amp;s=0">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Entity Type</td>
           

            <td class="input-value">Individual</td>
        </tr>
        <tr>
            <td class="field-name">Entity Subtype</td>
           

            <td class="input-value">Individual/Sole Trader</td>
        </tr>
                                    
                                </table>
                </div>
                <div id="businessname" class="section-container" data-section-name="BusinessNames">
                    <div class="confirmation-heading">
                        <h2>
                            Business Name
                        </h2>
                    </div>
                                            <div class="cart-container">
        <table id="BusinessNames">
            <thead class="visuallyhidden">
            <tr>
                <th style="width:65%">Field item</th>
                <th style="width:35%">Input value</th>
            </tr>
            </thead>
            <tr>
                <th>Business Name</th>
                <th>Status
                    <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessname?appId=2118&amp;s=0">Edit</button>
                </th>
            </tr>
                <tr>
                    <td style="width:65%">CHARLETON</td>
                    <td style="width:35%">
                            <img style="width: 22px; margin-right: 5px; float: left" src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success"/>
                        <strong>Available</strong>
                        <p></p>
                    </td>
                </tr>
        </table>
</div>
                <div id="businessdetails" class="section-container" data-section-name="AbnRegistrationDetails">
                    <div class="confirmation-heading">
                        <h2>
                            Business Details
                        </h2>
                    </div>
<div id="divEntitlementMessage" class="result-container validation col12 outcome" style="background-color: #efe8ce; display: none;">
        <div class="grid-row">
            <div class="col1">
                    <img id="imgEntitle" alt="Entitled" src="{{ site.baseurl }}/img/ico-exclamation-orange.png" style="margin-top: 0;">
            </div>
            <div class="col11 last">
                <h3 id="hEntitledTitle" style="margin-top: 0; margin-left: 0;">Unable to verify your identity</h3>
                <div id="divEntitledMessage"><p>The identity details you have entered have not been verified by the Australian Taxation Office (ATO). You can check your details on the <a href="confirmation-eoi?lastfailed=true">Proof of identity</a> page.</p></div>
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
                                    <tr>
                                        <th style="vertical-align: middle">Proof of Identity</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=0">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Roles</td>
           

            <td class="input-value">Sole Trader, Authorised Contact</td>
        </tr>
        <tr>
            <td class="field-name">Name</td>
           

            <td class="input-value">Martin Albert Jones</td>
        </tr>
        <tr>
            <td class="field-name">Tax File Number</td>
           

            <td class="input-value">123456782</td>
        </tr>
        <tr>
            <td class="field-name">Place of Birth</td>
           

            <td class="input-value">Canberra, ACT, Australia</td>
        </tr>
        <tr>
            <td class="field-name">Date of birth</td>
           

            <td class="input-value">1/01/1981</td>
        </tr>
        <tr>
            <td class="field-name">Residential address</td>
           

            <td class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
        </tr>
                                    
                                </table>
                                <table id="businessactivity">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th style="vertical-align: middle">ABN details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=1">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">ABN start date</td>
           

            <td class="input-value">16/08/2017</td>
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
            <td class="field-name">Are you an Australian resident for taxation purposes?</td>
           

            <td class="input-value">Yes</td>
        </tr>
        <tr>
            <td class="field-name">Main business activity</td>
           

            <td class="input-value">Quick frozen fruit or vegetables wholesaling</td>
        </tr>
                                    
                                </table>
                                <table id="yourcontactdetails">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th style="vertical-align: middle">Your contact details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=2">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Business Address</td>
           

            <td class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
        </tr>
        <tr>
            <td class="field-name">Main business activity @ this address</td>
           

            <td class="input-value">Same as the main business activity</td>
        </tr>
        <tr>
            <td class="field-name">Postal Address</td>
           

            <td class="input-value">200 Anthony Rd, Anthony, QLD, Australia, 4310</td>
        </tr>
        <tr>
            <td class="field-name">Email</td>
           

            <td class="input-value">test@test.com</td>
        </tr>
        <tr>
            <td class="field-name">Business Hours Phone</td>
           

            <td class="input-value">0261616161</td>
        </tr>
                                    
                                </table>
                                <table id="additionalbusinesslocations">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th style="vertical-align: middle">Additional business locations</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=3">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name"></td>
           

            <td class="input-value">Not Provided</td>
        </tr>
                                    
                                </table>
                                <table id="authorisedcontacts">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th style="vertical-align: middle">Authorised contacts</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=4">Edit</button></th>
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
           

            <td class="input-value">0261616161</td>
        </tr>
                                    
                                </table>
                                <table id="reasonforabnapplication">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th style="vertical-align: middle">Reason for ABN application</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessdetails?appId=2118&amp;s=5">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Reason</td>
           

            <td class="input-value">New business in Australia</td>
        </tr>
        <tr>
            <td class="field-name">Is this your first time in business in Australia?</td>
           

            <td class="input-value">Yes</td>
        </tr>
                                    
                                </table>
                </div>

        <div id="ajax-container-for-declaration">
            
<div style="display: none">
    <input id="__c__Declaration_IsDeclarantDetailsRequired" name="__c__Declaration.IsDeclarantDetailsRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsDeclarantNameRequired" name="__c__Declaration.IsDeclarantNameRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsDeclarantAddressRequired" name="__c__Declaration.IsDeclarantAddressRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsDeclarantPositionRequired" name="__c__Declaration.IsDeclarantPositionRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsDeclarantContactDetailsRequired" name="__c__Declaration.IsDeclarantContactDetailsRequired" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsAusKeyRegistrationPresent" name="__c__Declaration.IsAusKeyRegistrationPresent" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    <input id="__c__Declaration_IsDeclarantACompany" name="__c__Declaration.IsDeclarantACompany" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />
    ;
    <input id="__c__Declaration_ApplicationId" name="__c__Declaration.ApplicationId" type="hidden" value="dN5hC9T2vnBNExPpgqmqsQ==" />;
    <input id="__c__Declaration_IsDeclarantApplicant" name="__c__Declaration.IsDeclarantApplicant" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />;
    <input id="__c__Declaration_IsDisplayReferrerConsent" name="__c__Declaration.IsDisplayReferrerConsent" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />;
    <input id="__c__Declaration_IsSmsf" name="__c__Declaration.IsSmsf" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==" />;

<input id="__c__Declaration_Officeholders_0__Value" name="__c__Declaration.Officeholders[0].Value" type="hidden" value="oIgrcwEMuT2AgEl+YQZTXg==" /><input id="__c__Declaration_Officeholders_0__Text" name="__c__Declaration.Officeholders[0].Text" type="hidden" value="yG7gIoTaU6iyeLcpVo5xlg==" /><input id="__c__Declaration_Officeholders_1__Value" name="__c__Declaration.Officeholders[1].Value" type="hidden" value="Bl4QuLay3uQM/jutouihIw==" /><input id="__c__Declaration_Officeholders_1__Text" name="__c__Declaration.Officeholders[1].Text" type="hidden" value="mNDAvZQCnDqRCgvXeGCfhQgX2Q414eYQJ7y4eS3DpGE=" />
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
<option value="1170">Fred Nerk</option>
<option value="AddAnother">Add another person</option>
</select> 
                
            </div>
        </div>


    <div id="AddDeclarant" style="display:none">


    </div>


</fieldset>






<div class="declaration-wrapper margin-top-075">

    <div id="declaration-text" class="grid-row">
            <fieldset class="custom-controls">
                <legend class="larger no-padding">Business Names</legend>
                <p>I declare that:</p>
                    <p>
                        <input id="ApplicantCheckBox" name="ApplicantCheckBox" type="checkbox" value="true" /><input name="ApplicantCheckBox" type="hidden" value="false" />
                        <label id="bn-applicant-check" for="ApplicantCheckBox">I am lodging this application on behalf of the applicant (the proposed business name holder). </label>
                    </p>
                    <p>
                        <input id="NotDisqualifiedCheckBox" name="NotDisqualifiedCheckBox" type="checkbox" value="true" /><input name="NotDisqualifiedCheckBox" type="hidden" value="false" />
                        <label id="bn-notdisqualified-check" for="NotDisqualifiedCheckBox">The applicant is not disqualified from managing corporations under section 206B(1) of the <a href="http://www.austlii.edu.au/au/legis/cth/consol_act/ca2001172/" target="_blank"><em>Corporations Act</em> 2001</a>. </label>
                    </p>
                    <p>
                        <input id="NoConvictionCheckBox" name="NoConvictionCheckBox" type="checkbox" value="true" /><input name="NoConvictionCheckBox" type="hidden" value="false" />
                        <label id="bn-conviction-check" for="NoConvictionCheckBox">Within the last 5 years the applicant has not been:<br />
<span class="dot-point">convicted of, or</span><br />
<span class="dot-point">released from prison after being convicted of, and serving a term of imprisonment for, any of the criminal offences referred to in section 32(1) (c) or (d) of the <a href="http://www.austlii.edu.au/au/legis/cth/num_act/bnra2011311/"><em>Business Names Registration Act</em> 2011</a>.</span> </label>
                    </p>
                    <p>
                        <input id="ElectronicLodgementCheckBox" name="ElectronicLodgementCheckBox" type="checkbox" value="true" /><input name="ElectronicLodgementCheckBox" type="hidden" value="false" />
                        <label id="bn-electronic-check" for="ElectronicLodgementCheckBox">I am authorised to submit this application for lodgement on behalf of the applicant under the terms and conditions of the <a href="http://www.asic.gov.au/online-services/register-for-online-access/electronic-lodgement-protocol/" target="_blank">Australian Securities and Investments Commission (ASIC) Electronic Lodgement Protocol</a>. </label>
                    </p>
                    <p>
                        <input id="DueAndProperEnquiriesCheckBox" name="DueAndProperEnquiriesCheckBox" type="checkbox" value="true" /><input name="DueAndProperEnquiriesCheckBox" type="hidden" value="false" />
                        <label id="bn-enquiries-check" for="DueAndProperEnquiriesCheckBox">I am authorised to make each of the above declarations on behalf of the applicant after making all due and proper enquiries. </label>
                    </p>
                <p>
                    <input id="AsicTrueAndCorrectCheckBox" name="AsicTrueAndCorrectCheckBox" type="checkbox" value="true" /><input name="AsicTrueAndCorrectCheckBox" type="hidden" value="false" />
                    <label id="bn-trueandcorrect-check" for="AsicTrueAndCorrectCheckBox">To the best of my knowledge, the information supplied in this transaction is complete and accurate (it is an offence to provide false or misleading information to ASIC). </label>
                </p>
                <p>ASIC may contact the applicant or the lodging party (if any) if there are any questions regarding this application for registration of a business name.</p>
            </fieldset>
                            <fieldset class="custom-controls">
                <legend class="larger no-padding">Tax Registrations</legend>
                <p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
                <ul>
                        <li>Australian Business Number (ABN)</li>
                </ul>
                    <p>
                        <input id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true" /><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false" />
                        <label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">I declare that:<br />
<span class="dot-point">The information in this application is true and correct.</span><br />
<span class="dot-point">This document has been prepared in accordance with information supplied by the entity.</span><br />
<span class="dot-point">I have received a declaration in writing from the entity stating that the information is true and correct.</span><br />
<span class="dot-point">I am authorised by the entity to give this document to the Commissioner of Taxation and/or Registrar of the Australian Business Register.</span> </label>
                    </p>
                            </fieldset>
            </div>
    <div class="grid-row">
        <h3>Privacy</h3>
        <p>The information provided to ASIC, the ABR and the ATO in this form may include personal information. Please refer to the <a href="http://www.asic.gov.au/privacy">ASIC privacy policy</a>, the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website">ABR privacy policy</a> and the <a href="https://www.ato.gov.au/About-ATO/Access,-accountability-and-reporting/In-detail/Privacy-notices/Privacy-policy/">ATO privacy policy</a> for information on how they handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
    </div>
</div>






        </div>
        
        <input id="Declaration_RegistrationDeclarationAccepted" name="Declaration.RegistrationDeclarationAccepted" type="hidden" value="False" />
        <div class="grid-row custom-controls">
            <div>
                <strong>Almost done!</strong> You now have a chance to print a copy of the form by selecting <strong>File</strong> from the browser menu above, then <strong>Print</strong>. If payment is required, the next step will open our secure payment page. <a class="cd-btn help" href="#help-confirmationalmostdone"><span>Help - Almost Done</span></a>
            </div>
        </div>
        
        
    </div>
<div class="controls-container">
    <div class="controls-content">
		<button class="btn cancel" type="button">Previous</button><button class="btn btn-default next" id="submit" type="button">Submit</button>
    </div>
</div>
    <div class="help" id="help">
        <div class="cd-panel from-right">
            <div class="cd-panel-header">
                <a href="#" class="cd-panel-close">Close</a>
                <h2 id="helpTopic">Help topics</h2>
                <p class="cd-panel-print">
                    <a href="#" id="aPrint" onclick="printHelp(); return false;">Print</a>
                </p>
            </div>
            <div class="cd-panel-container">
                <div class="cd-panel-content">
                    <div id="helpFile" class="showhide">
                                <input type="hidden" class="help-anchor" id="help-confirmationnotes"/>
<h3>Confirmation</h3>
<div>
<h4>What if my details change?</h4>
<p>If your details change, you&apos;ll have 28 days from when you were aware of the change to:</p>
<ul><li><a href="https://www.ato.gov.au/Business/Registration/Update-your-details/">update your tax registration details</a></li>
<li><a href="http://www.asic.gov.au/bn-update">update your business name details</a></li>
<li><a href="http://www.asic.gov.au/changes">make changes to your company</a>.</li></ul> 
<h4>Are there penalties for incorrect information?</h4>
<p>There are penalties if the information entered is false or misleading. However, if you let the Australian Taxation Office (ATO) or the Australian Securities &amp; Investments Commission (ASIC) know as soon as you&apos;re aware of the error or if you update them before they contact you, you may not receive a penalty. </p><p>See the <a href="https://abr.gov.au/General-information/Making-a-false-or-misleading-statement/">Making a false or misleading statement</a> page on the Australian Business Register (ABR) website.</p> 
<p>For business name or company details, see the <a href="http://asic.gov.au/for-business/payments-fees-and-invoices/late-fees/">Late fees</a> section of the ASIC website.</p>
<h4>What happens to my form after I submit?</h4>
<p>Once you accept the declaration and submit the form, your application will be sent to the ABR and/or ASIC to be processed. </p>
<h4>Can I access my form details after I submit?</h4>
<p> No, once you submit the form, you&apos;ll no longer have access to the details in your form. </p>
<h4>How can I check on the progress of my application?</h4>
<p> The status of your application can be checked on the Application summary page. Here you&apos;ll see whether your application was successful. You&apos;ll also be able to see the reason if it was not successful.</p>
</div>                                <input type="hidden" class="help-anchor" id="help-confirmationdeclarationlegend"/>
<h3>Declaration</h3>
<div><p>This declaration can only be made by you the applicant, or an authorised person.</p>
<p>There are penalties if the information entered is false or misleading. However, if you let the Australian Taxation Office (ATO) or the Australian Securities &amp; Investments Commission (ASIC) know as soon as you&apos;re aware of the error or if you update them before they contact you, you may not receive a penalty. </p><p>See the <a href="https://abr.gov.au/General-information/Making-a-false-or-misleading-statement/">Making a false or misleading statement</a> page on the Australian Business Register (ABR) website.</p> 
<p>For business name or company details, see the <a href="http://www.asic.gov.au/late-fees">Late fees</a> section of the ASIC website.</p>
</div>                                <input type="hidden" class="help-anchor" id="help-confirmationalmostdone"/>
<h3>Almost Done</h3>
<div><h4>How do I get a copy of the form?</h4>
<p>Once you’ve confirmed all the details entered are correct, you can print a copy of the <strong>Confirm application</strong> page. To print the page, just:</p>
<ul><li>select <strong>File</strong> from the browser menu and then select <strong>Print</strong>, or  </li>
<li>use the keyboard shortcuts <strong>Ctrl</strong> and <strong>P</strong>.</li>
</ul>
<h4>What is the payment for?</h4>
<p>Payment will be required if you have registered one or more business names, or you&apos;ve registered a company.</p>
<h4>What payment methods are accepted?</h4>
<p>We only accept MasterCard or Visa credit cards.</p> 
<h4>Where is my receipt number?</h4>
<p>Once your payment is processed, our system will display the receipt number and whether the payment was successful on the <strong>Application summary</strong> page.</p></div>                    </div>
                    <div class="more-help">
                        <p><strong>Need more help? Contact us via <a href="https://www.business.gov.au/contact-us">business.gov.au</a> or call 13&nbsp;28&nbsp;46.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script>
	$("#submit").click(function() {
		location.href = "confirmation-eoi";
	});
	$(document).ready(function() {
		if (location.search.indexOf("failpoi")>=0) {
			$("#divEntitlementMessage, #divEntitlementMessage-top").show();
			// scrollToAndFocus("#businessdetails");
		}
	});
</script>