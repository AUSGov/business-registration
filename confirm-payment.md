---
title: Confirmation page
layout: default-no-footer
---
<div class="wrapper">
    <div class="progress-container">
        <div class="progress-bar">
            <span id="progress-percent" role="progressbar" aria-valuetext="step 4 of 5 steps" style="width:63.55%"></span>
        </div><!-- meter -->

        <ul class="section-nav">
            <li class="bookend"><a href="/registration/type?appid=7270"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
                <li class="done" style="width: 15.3%">
                        <a href="/registration/gettingstarted?appid=7270">
                            <span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started
                            <span class="visually-hidden"> (completed)</span>
                        </a>
                </li>
                <li class="done" style="width: 15.3%">
                        <a href="/registration/businessname?appid=7270">
                            <span class="visually-hidden">Step </span><span>2</span><br>Business<br> name
                            <span class="visually-hidden"> (completed)</span>
                        </a>
                </li>
                <li class="done" style="width: 15.3%">
                        <a href="/registration/companydetails?appid=7270">
                            <span class="visually-hidden">Step </span><span>3</span><br>Company<br> details
                            <span class="visually-hidden"> (completed)</span>
                        </a>
                </li>
                <li class="active" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application                        <span class="visually-hidden"> (current step)</span>
                </li>
                <li class="" style="width: 15.3%">
                        <span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit                        <span class="visually-hidden"> (not completed)</span>
                </li>
            <!-- TODO: link to dashboard of logged in user -->
            <li class="bookend right"><a href="/registration/dashboard"><span>›</span><br>Application<br> summary</a></li>
        </ul>
    </div>
</div>

<h1 id="heading" tabindex="-1">4. Confirm application <span role="progressbar">(Step 4 of 5 steps)</span></h1>

<div class="grid-row">
    <div>
        Here's your chance to check that you've entered all the details correctly. If you find an error on this page, select the Edit button next to a section to return to that part of the form. <a class="cd-btn help" href="#help-confirmationnotes"><span>Help - Confirmation</span></a>
    </div>
</div>
<div class="confirmation">
	<div id="feesummary" class="section-container" data-section-name="FeeSummary">
		<div class="confirmation-heading">
			<h2>Fee Summary</h2>
		</div>
		<div class="cart-container">
			<h3>Company Name</h3>
			<div class="cart-container">
				<div class="result-row" data-business-name-id="">
					
					<div class="result-cell cell-detail">
						<p>COSTLY PRODUCTIONS PTY LTD</p>

					</div>
					<div class="result-cell cell-action no-padding">
						<span class="subtotal">AU $999</span>
					</div>
				</div>
			</div>
				<h3>Business Name</h3>
			<div class="cart-container">
				<div class="result-row" data-business-name-id="2034">
					
					<div class="result-cell cell-detail">
						<p>COSTIFY</p>

					</div>
					<div class="result-cell cell-action no-padding">
						<span class="subtotal">AU $999</span>
					</div>
				</div>
			</div>
		</div>
		<div class="cart-container">
            <div class="result-row">
                <div class="result-cell cell-total">
                    <p>Total payment required: AU<span id="totalPayment">$1998</span></p>
                </div>
            </div>
        </div>
	</div>
		<div id="selectedregistrations" class="section-container" data-section-name="Registrations">
			<div class="confirmation-heading">
				<h2>Selected Registrations <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/type?appId=7270&amp;s=0">Edit</button></h2>
			</div>
			<ul>
				<li><a href="#businessactivity">Australian Business Number (ABN)</a></li>
				<li><a href="#businessname">Business name</a></li>
				<li><a href="#companyname">Australian company</a></li>
			</ul>
			<div id="gettingstarted" class="section-container" data-section-name="GettingStarted">
				<div class="confirmation-heading">
					<h2>Getting Started</h2>
				</div>
																						<table id="companystructure">
								<thead class="visuallyhidden">
									<tr>
										<th>Field item</th>
										<th>Input value</th>
									</tr>
								</thead>
								<tbody><tr>
									<th style="vertical-align: middle">Company structure</th>
										<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/gettingstarted?appId=7270&amp;s=0">Edit</button></th>
								</tr>
	<tr>
		<td class="field-name">Company Type</td>
	   

		<td class="input-value">Proprietary (private) company</td>
	</tr>
	<tr>
		<td class="field-name">Company Class</td>
	   

		<td class="input-value">Limited by shares</td>
	</tr>
	<tr>
		<td class="field-name">Company Sub Class</td>
	   

		<td class="input-value">Proprietary limited</td>
	</tr>
								
							</tbody></table>
			</div>
                <div id="companyname" class="section-container" data-section-name="CompanyRegistration">
                    <div class="confirmation-heading">
                        <h2>
                            Company Name
                        </h2>
                    </div>
<div class="cart-container">
	<table id="CompanyRegistration">
		<thead class="visuallyhidden">
			<tr>
				<th style="width:65%">Field item</th>
				<th style="width:35%">Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Company Name</th>
				<th>Status
					<button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessname?appId=7270&amp;s=0">Edit</button>
				</th>
			</tr>
			<tr>
				<td style="width:65%">COSTLY PRODUCTIONS PTY LTD</td>
				<td style="width:35%">
						<img style="width: 22px; margin-right: 5px; float: left" src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success">
					<strong>Available</strong>
					<p></p>
				</td>
			</tr>
		</tbody>
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
            <tbody><tr>
                <th>Business Name</th>
                <th>Status
                    <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessname?appId=7270&amp;s=1">Edit</button>
                </th>
            </tr>
                <tr>
                    <td style="width:65%">COSTIFY</td>
                    <td style="width:35%">
                            <img style="width: 22px; margin-right: 5px; float: left" src="{{ site.baseurl }}/img/ico-tick-green.png" alt="Success">
                        <strong>Available</strong>
                        <p></p>
                    </td>
                </tr>
        </tbody></table>
</div>
                <div id="companydetails" class="section-container" data-section-name="AustralianCompany">
                    <div class="confirmation-heading">
                        <h2>
                            Company Details
                        </h2>
                    </div>
                                                                                            <table id="businessactivity">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">ABN details</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=0">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">ABN start date</td>
           

            <td class="input-value">4/01/2018</td>
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
            <td class="field-name">Is it Income Tax exempt?</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Is it a Non Profit Organisation?</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Is the entity owned or controlled by Commonwealth, State, Territory or Local Government?</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Main business activity</td>
           

            <td class="input-value">Accountant - own account</td>
        </tr>
                                    
                                </tbody></table>
                                <table id="addressandlocation">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Address and location</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=1">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Email</td>
           

            <td class="input-value">test@test.com</td>
        </tr>
        <tr>
            <td class="field-name">Business Address</td>
           

            <td class="input-value">100 Abbett St, Scarborough, WA, Australia, 6019</td>
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
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=2">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name"></td>
           

            <td class="input-value">Not Provided</td>
        </tr>
                                    
                                </tbody></table>
                                <table id="companystructure">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Company structure</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=3">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">State/Territory Of Business</td>
           

            <td class="input-value">Australian Capital Territory</td>
        </tr>
        <tr>
            <td class="field-name">Is Under Ultimate Holding Company</td>
           

            <td class="input-value">No</td>
        </tr>
        <tr>
            <td class="field-name">Is Principle Place Of Business</td>
           

            <td class="input-value">Yes</td>
        </tr>
        <tr>
            <td class="field-name">Is Occupied Address</td>
           

            <td class="input-value">Yes</td>
        </tr>
        <tr>
            <td class="field-name">Is Identical Business Name</td>
           

            <td class="input-value">No</td>
        </tr>
                                    
                                </tbody></table>
                                <table id="businessassociates">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Business associates</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=4">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Roles</td>
           

            <td class="input-value">Director, Secretary, Public Officer, Shareholder</td>
        </tr>
        <tr>
            <td class="field-name">Name</td>
           

            <td class="input-value">Golden Goose</td>
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
                                    
                                </tbody></table>
                                <table id="shareallocations">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Share allocations</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=5">Edit</button></th>
                                    </tr>
    </tbody></table><table>
        <tbody>
            <tr>
                    <th style="width:25%">Shareholders</th>
                    <th style="width:15%">Share class/type</th>
                    <th style="width:15%">No. of shares</th>
                    <th style="width:15%">$ paid per share</th>
                    <th style="width:15%">$ unpaid per share</th>
                    <th style="width:15%">Beneficially held?</th>
            </tr>
                <tr>
                        <td class="no-border-bottom">Golden Goose</td>
                        <td class="no-border-bottom">(ORD) ordinary</td>
                        <td class="no-border-bottom">500</td>
                        <td class="no-border-bottom">5.00</td>
                        <td class="no-border-bottom">2.00</td>
                        <td class="no-border-bottom">No</td>
                </tr>
        </tbody>
    </table>
                                    
                                
                                <table id="reasonforabnapplication">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Reason for ABN application</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=6">Edit</button></th>
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
                                <table id="authorisedcontacts">
                                    <thead class="visuallyhidden">
                                        <tr>
                                            <th>Field item</th>
                                            <th>Input value</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <th style="vertical-align: middle">Authorised contacts</th>
                                            <th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=7270&amp;s=7">Edit</button></th>
                                    </tr>
        <tr>
            <td class="field-name">Name</td>
           

            <td class="input-value">John Smith</td>
        </tr>
        <tr>
            <td class="field-name">Position</td>
           

            <td class="input-value">agent</td>
        </tr>
        <tr>
            <td class="field-name">Email</td>
           

            <td class="input-value">john@test.com</td>
        </tr>
        <tr>
            <td class="field-name">Business Hours Phone</td>
           

            <td class="input-value">0261616161</td>
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
    <input id="__c__Declaration_ApplicationId" name="__c__Declaration.ApplicationId" type="hidden" value="OTBlGExcLbibl8nOMU6X5g==">;
    <input id="__c__Declaration_IsDeclarantApplicant" name="__c__Declaration.IsDeclarantApplicant" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;
    <input id="__c__Declaration_IsDisplayReferrerConsent" name="__c__Declaration.IsDisplayReferrerConsent" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;
    <input id="__c__Declaration_IsSmsf" name="__c__Declaration.IsSmsf" type="hidden" value="YRBk3UFuGeCu5zo+Lao/Qw==">;

<input id="__c__Declaration_Officeholders_0__Value" name="__c__Declaration.Officeholders[0].Value" type="hidden" value="abPDlWqBI23OWuHpYuTQ1A=="><input id="__c__Declaration_Officeholders_0__Text" name="__c__Declaration.Officeholders[0].Text" type="hidden" value="8dN4OqBf+eqj1WJb5oUFqQJhEebl/i+ECrR1NLIvv8Y/5uX7FKBLKPuLJ/87FbRr"><input id="__c__Declaration_Officeholders_1__Value" name="__c__Declaration.Officeholders[1].Value" type="hidden" value="GoB2slVcjdtTy7IN9co4yr+fznMrgeXdO4+t5PwHN1M="><input id="__c__Declaration_Officeholders_1__Text" name="__c__Declaration.Officeholders[1].Text" type="hidden" value="mNDAvZQCnDqRCgvXeGCfhQgX2Q414eYQJ7y4eS3DpGE="><input id="__c__Declaration_Officeholders_2__Value" name="__c__Declaration.Officeholders[2].Value" type="hidden" value="getV0dalpUC4C7p7G31C6A=="><input id="__c__Declaration_Officeholders_2__Text" name="__c__Declaration.Officeholders[2].Text" type="hidden" value="GwNP8tk7ELrfexQXik4R3b9mxwQOGdfFYtt1vYeZSYg=">
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
<option value="6309">Golden Goose (Director, Secretary)</option>
<option value="AddCompanyPerson">Add another person</option>
<option value="AddCompany">Add another company</option>
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
                <legend class="larger no-padding">Business Names</legend>
                <p>I declare that:</p>
                    <p>
                        <input id="ApplicantCheckBox" name="ApplicantCheckBox" type="checkbox" value="true" checked><input name="ApplicantCheckBox" type="hidden" value="false">
                        <label id="bn-applicant-check" for="ApplicantCheckBox">I am lodging this application on behalf of the applicant (the proposed business name holder). </label>
                    </p>
                    <p>
                        <input id="NotDisqualifiedCheckBox" name="NotDisqualifiedCheckBox" type="checkbox" value="true" checked><input name="NotDisqualifiedCheckBox" type="hidden" value="false">
                        <label id="bn-notdisqualified-check" for="NotDisqualifiedCheckBox">The applicant is not disqualified from managing corporations under section 206B(1) of the <a href="http://www.austlii.edu.au/au/legis/cth/consol_act/ca2001172/" target="_blank"><em>Corporations Act</em> 2001 <span class="visuallyhidden">(opens in new window)</span></a>. </label>
                    </p>
                    <p>
                        <input id="NoConvictionCheckBox" name="NoConvictionCheckBox" type="checkbox" value="true" checked><input name="NoConvictionCheckBox" type="hidden" value="false">
                        <label id="bn-conviction-check" for="NoConvictionCheckBox">Within the last 5 years the applicant has not been:<br>
<span class="dot-point">convicted of, or</span><br>
<span class="dot-point">released from prison after being convicted of, and serving a term of imprisonment for, any of the criminal offences referred to in section 32(1) (c) or (d) of the <a href="http://www.austlii.edu.au/au/legis/cth/num_act/bnra2011311/" target="_blank"><em>Business Names Registration Act</em> 2011 <span class="visuallyhidden">(opens in new window)</span></a>.</span> </label>
                    </p>
                    <p>
                        <input id="ElectronicLodgementCheckBox" name="ElectronicLodgementCheckBox" type="checkbox" value="true" checked><input name="ElectronicLodgementCheckBox" type="hidden" value="false">
                        <label id="bn-electronic-check" for="ElectronicLodgementCheckBox">I am authorised to submit this application for lodgement on behalf of the applicant under the terms and conditions of the <a href="http://www.asic.gov.au/online-services/register-for-online-access/electronic-lodgement-protocol/" target="_blank">Australian Securities and Investments Commission (ASIC) Electronic Lodgement Protocol <span class="visuallyhidden">(opens in new window)</span></a>. </label>
                    </p>
                    <p>
                        <input id="DueAndProperEnquiriesCheckBox" name="DueAndProperEnquiriesCheckBox" type="checkbox" value="true" checked><input name="DueAndProperEnquiriesCheckBox" type="hidden" value="false">
                        <label id="bn-enquiries-check" for="DueAndProperEnquiriesCheckBox">I am authorised to make each of the above declarations on behalf of the applicant after making all due and proper enquiries. </label>
                    </p>
                <p>
                    <input id="AsicTrueAndCorrectCheckBox" name="AsicTrueAndCorrectCheckBox" type="checkbox" value="true" checked><input name="AsicTrueAndCorrectCheckBox" type="hidden" value="false">
                    <label id="bn-trueandcorrect-check" for="AsicTrueAndCorrectCheckBox">To the best of my knowledge, the information supplied in this transaction is complete and accurate (it is an offence to provide false or misleading information to ASIC). </label>
                </p>
                <p>ASIC may contact the applicant or the lodging party (if any) if there are any questions regarding this application for registration of a business name.</p>
            </fieldset>
                    <fieldset class="custom-controls">
                <legend class="larger no-padding">Australian Company</legend>
                <p>
                    <input id="CompanyCheckBox" name="CompanyCheckBox" type="checkbox" value="true" checked><input name="CompanyCheckBox" type="hidden" value="false">
                    <label id="co-registration-check" for="CompanyCheckBox">I apply for the registration of a company on the basis of the information in this form and any attachments. I have the necessary written consents and agreements referred to in this application concerning the members and officeholders and I shall give the consents and agreements to the company after the company becomes registered. The information provided in this application and in any attachments is true and correct at the time of signing. </label>
                </p>
            </fieldset>
                    <fieldset class="custom-controls">
                <legend class="larger no-padding">Tax Registrations</legend>
                <p>The declaration below applies to your application for the following Australian Taxation Office (ATO) registrations:</p>
                <ul>
                        <li>Australian Business Number (ABN)</li>
                </ul>
                    <p>
                        <input id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true" checked><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
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
			<div class="controls-container">
				<div class="controls-content">
					<button class="btn cancel" type="button">Previous</button>
					<button class="btn btn-default next" id="next-submit-btn" type="button">Submit</button>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="payment-popup" style="max-width:800px; margin: 0 auto; display: none;">
	<button id="close-payment" type="button" style="position: absolute; visibility: hidden; top: 10px; right: 5px; border: none; background: transparent;" onload="this.blur();"><img src="{{ site.baseurl }}/img/ico-close.png" alt="close" /></button>
	<h2>Payment required</h2>
	<p>Your application requires the following payment:</p>
	<div id="feesummary" class="section-container" data-section-name="FeeSummary">
		<h3>Fee Summary</h3>
		<div class="cart-container">
			<h4 style="margin-top: 1em;">Company Name</h4>
			<div class="cart-container">
				<div class="result-row" data-business-name-id="">
					<div class="result-cell cell-detail">
						<p>COSTLY PRODUCTIONS PTY LTD</p>
					</div>
					<div class="result-cell cell-action no-padding">
						<span class="subtotal">AU $999</span>
					</div>
				</div>
			</div>
			<h4 style="margin-top: 1em;">Business Name</h4>
			<div class="cart-container">
				<div class="result-row">
					<div class="result-cell cell-detail">
						<p>COSTIFY</p>
					</div>
					<div class="result-cell cell-action no-padding">
						<span class="subtotal">AU $999</span>
					</div>
				</div>
			</div>
		</div>
		<div class="cart-container">
			<div class="result-row">
				<div class="result-cell cell-total">
					<p>Total payment required: AU<span id="totalPayment">$1998</span></p>
				</div>
			</div>
		</div>
	</div>
	<p>You can make this payment using a Visa or MasterCard. You&apos;ll receive receipt number on the application summary page once your application is submitted.</p>
	<p><strong>Note:</strong> Your application will not be submitted until your payment has been successfully processed.</p>
	<p>Select &apos;Pay now&apos; if you’re ready to complete your payment.</p>
<div class="controls-content">
		<button class="btn cancel" id="cancel-payment" type="button">Cancel</button>
		<button class="btn btn-default" id="pay-now" type="button" >Pay now</button>
	</div>
</div>
<script>
	$(document).ready(function() {
		$("#next-submit-btn").click(function() {
			var top = (window.innerHeight - 670) / 2;
			if (top < 0) {
				top = "2.5%";
			}
			$.blockUI({
				message: $("#payment-popup"),
				css: {
						padding:        '10px',
						width:          '80%',
						height: 		'95%',
						maxHeight:		'720px',
						top:            top,
						left:           '10%',
						textAlign:      'none',
						color:          '#000',
						border:         '3px solid #aaa',
						backgroundColor:'#fff',
						cursor:         'default'
					},
				overlayCSS: {
					cursor: 'default'
				}
			});
			if ($(".blockMsg")[0].offsetHeight < 720) {
				$(".blockMsg").css({
					overflowY: "scroll"
				});
			}
			$("#cancel-payment, #close-payment").click(function() {
				$.unblockUI();
			});
			$("#pay-now").click(function() {
				location.href = "payment-noback";
			});
		});
		
	});
</script>
