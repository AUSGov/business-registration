---
title: Confirmation
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" style="width: 75%"></span>
	</div><!-- meter -->
	<ul class="section-nav">
		<li class="done"><a href="entitlement.html"><span>1</span><br>Getting<br> started</a></li>
		<li class="done"><a href="business-names-05.html"><span>2</span><br>Business<br> name</a></li>
		<li class="done"><a href="business-details.html"><span>3</span><br>Business<br> details</a></li>
		<li class="done"><a href="taxation-details.html"><span>4</span><br>Taxation<br> details</a></li>
		<li class="active"><span>5</span><br>Confirm<br> application</li>
		<li><span>6</span><br>Payment<br> &amp; submit</li>
	</ul>
</div><!-- progress-container -->
<h1 id="heading" tabindex="-1">5. Confirm application <span>(Step 5 of 6)</span></h1>
<div class="print">
	<p><a href="" onclick="window.print();">Print</a></p>
</div><!-- print -->
<div id="fee-summary">
	<div class="confirmation-heading">
		<h2>Fee Summary</h2>
	</div>
	<div class="cart-container">
		<h3>Company Name</h3>
		<div class="cart-container">
			<div class="result-row" data-business-name-id="">
				
				<div class="result-cell cell-detail">
					<p>FIZZLE PTY LTD</p>

				</div>
				<div class="result-cell cell-action no-padding">
					<span class="subtotal">AU $530</span>
				</div>
			</div>
		</div>
	</div>
	<div class="cart-container">
		<div class="result-row">
			<div class="result-cell cell-total">
				<p>Total payment required: <strong>AU $530</strong></p>
			</div>
		</div><!-- result-row -->
	</div><!-- cart-container -->
</div>
<div id="selected-registrations">
	<div class="confirmation-heading">
		<h2>
			Selected Registrations
				<button type="button" class="btn btn-default ico-edit" data-changepath="/registration/type?appId=87&amp;s=0">Edit</button>
		</h2>
	</div>
	<ul>
		<li><a href="#australianbusinessnumber">Australian Business Number (ABN)</a></li>
		<li><a href="#australiancompany">Australian company</a></li>
    </ul>
</div>
<div id="gettingstarted" class="section-container" data-section-name="GettingStarted">
	<div class="confirmation-heading">
		<h2>
			Getting Started
		</h2>
	</div>
	<table id="companystructure">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Company structure</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/gettingstarted?appId=87&amp;s=0">Edit</button></th>
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
		</tbody>
	</table>
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
            <tbody><tr>
                <th>Company Name</th>
                <th>Status
                    <button type="button" class="btn btn-default ico-edit" data-changepath="/registration/businessname?appId=87&amp;s=0">Edit</button>
                </th>
            </tr>
                <tr>
                    <td style="width:65%">FIZZLE PTY LTD</td>
                    <td style="width:35%">
                            <img style="width: 22px; margin-right: 5px; float: left" src="img/ico-tick-green.png" alt="Success">
                        <strong>Available</strong>
                        <p></p>
                    </td>
                </tr>
			</tbody>
		</table>
	</div>
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
		<tbody>
			<tr>
				<th style="vertical-align: middle">Business activity</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=0">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name">ABN start date</td>
				<td class="input-value">1/3/2017</td>
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
				<td class="input-value">Bungy jumping operation</td>
			</tr>
		</tbody>
	</table>
	<table id="addressandlocation">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Address and location</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=1">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name">Email</td>
				<td class="input-value">email@email.com</td>
			</tr>
			<tr>
				<td class="field-name">Business Address</td>
				<td class="input-value">100 Abbett St, Scarborough, NSW, Australia, 2019</td>
			</tr>
		</tbody>
	</table>
	<table id="additionalbusinesslocations">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Additional business locations</th>
					<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=2">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name"></td>
				<td class="input-value">Not Provided</td>
			</tr>
		</tbody>
	</table>
	<table id="companystructure">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Company structure</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=3">Edit</button></th>
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
		</tbody>
	</table>
	<table id="businessassociates">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Business associates</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=4">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name">Name</td>
				<td class="input-value">Nerk, Fred</td>
			</tr>
			<tr>
				<td class="field-name">Place of Birth</td>
				<td class="input-value">Turnpike, ACT, Australia</td>
			</tr>
			<tr>
				<td class="field-name">Date of birth</td>
				<td class="input-value">12/6/1966</td>
			</tr>
			<tr>
				<td class="field-name">Home Address</td>
				<td class="input-value">100 Abbett St, Scarborough, NSW, Australia, 2019</td>
			</tr>
		</tbody>
	</table>
	<table id="shareallocations">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Share allocations</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=5">Edit</button></th>
			</tr>
		</tbody>
	</table>
	<table>
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
					<td class="no-border-bottom">Nerk, Fred</td>
					<td class="no-border-bottom">(ORD) ordinary</td>
					<td class="no-border-bottom">1000</td>
					<td class="no-border-bottom">4.00</td>
					<td class="no-border-bottom">1.00</td>
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
		<tbody>
			<tr>
				<th style="vertical-align: middle">Reason for ABN application</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=6">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name">Reason</td>
				<td class="input-value">New business in Australia</td>
			</tr>
			<tr>
				<td class="field-name">Is this your first time in business in Australia?</td>
				<td class="input-value">Yes</td>
			</tr>
		</tbody>
	</table>
	<table id="authorisedcontacts">
		<thead class="visuallyhidden">
			<tr>
				<th>Field item</th>
				<th>Input value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="vertical-align: middle">Authorised contacts</th>
				<th><button type="button" class="btn btn-default ico-edit" data-changepath="/registration/companydetails?appId=87&amp;s=7">Edit</button></th>
			</tr>
			<tr>
				<td class="field-name">Name</td>
				<td class="input-value">William, Nerk</td>
			</tr>
			<tr>
				<td class="field-name">Position</td>
				<td class="input-value">Agent</td>
			</tr>
			<tr>
				<td class="field-name">Email</td>
				<td class="input-value">email@email.com</td>
			</tr>
			<tr>
				<td class="field-name">Business Hours Phone</td>
				<td class="input-value">12123434</td>
			</tr>                            
		</tbody>
	</table>
</div>
<div id="information-sharing">
	<div class="confirmation-heading">
		<h2>Information sharing</h2>
	</div>
	<div class="grid-row custom-controls clearfix">
		<div>
			<p><strong>Service NSW</strong> is conducting a trial with businesses in your area. From the information you have provided, you may be eligible to participate. By sharing the data you enter here, you will be able to monitor the progress of your applications and assist Service NSW to provide additional services from the their website.</p>
			<fieldset>
				<legend>Will you allow Service NSW to access your data?</legend>
				<div class="radio-toggle">
					<label class="on label-left" for="yes">
						<input id="yes" name="access" type="radio" value="Yes">
						<span>Yes</span>
					</label>
					<label class="off label-right" for="no">
						<input id="no" name="access" type="radio" value="No">
						<span id="tfn_no">No</span>
					</label>
				</div>
			</fieldset>
		</div>
	</div>
</div>
<div id="declaration">
	<div class="confirmation-heading">
		<h2>Declaration <a class="cd-btn help" href="#help-confirmationdeclarationlegend"><span>Help - Declaration</span></a></h2>
	</div>
	<fieldset id="declarationFieldset" class="showhide-target">
		<legend class="larger visuallyhidden">Declaration</legend>
        <p>Please complete the details below. All fields are required unless marked as <em>(optional)</em>. </p>
        <div class="grid-row">
            <div class="col4">
				<label class="input-right" for="Declaration_OfficeholderId">Who is making the declaration?</label>
            </div>
            <div class="col8 last">
				<select id="Declaration_OfficeholderId" name="Declaration.OfficeholderId"><option value="">Please select...</option>
					<option value="19">Nerk, Fred (Director, Secretary)</option>
					<option value="AddCompanyPerson">Add another person</option>
					<option value="AddCompany">Add another company</option>
				</select>
            </div>
        </div>
		<div id="AddDeclarant" style="">
            <div class="grid-row">
                <div class="col4">
                    <label class="input-right" for="Declaration_RegistrationDeclarationPosition">Position held</label>
                </div>
                <div class="col8 last">
					<input id="Declaration_RegistrationDeclarationPosition" name="Declaration.RegistrationDeclarationPosition" type="text" value=""> 
                    <br>For example: tax agent.
                </div>
            </div>
		</div>
	</fieldset>
	<div class="declaration-wrapper margin-top-075">
		<div id="declaration-text" class="grid-row">
            <fieldset class="custom-controls">
                <legend class="larger no-padding">Australian Company</legend>
                <p>
                    <input data-val="true" data-val-required="The CompanyCheckBox field is required." id="CompanyCheckBox" name="CompanyCheckBox" type="checkbox" value="true"><input name="CompanyCheckBox" type="hidden" value="false">
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
                    <input data-val="true" data-val-required="The ATOTrueAndCorrectCheckBox field is required." id="ATOTrueAndCorrectCheckBox" name="ATOTrueAndCorrectCheckBox" type="checkbox" value="true"><input name="ATOTrueAndCorrectCheckBox" type="hidden" value="false">
                    <label id="ato-trueandcorrect-check" for="ATOTrueAndCorrectCheckBox">The information provided in this application (including attachments if applicable) is true and correct. </label>
                </p>
            </fieldset>
		</div>
		<div class="grid-row">
			<h3>Privacy</h3>
			<p>The information provided to ASIC <span class="addition">, the ABR and the ATO</span> in this form may include personal information. Please refer to the <a href="http://www.asic.gov.au/privacy" target="_blank">ASIC privacy policy <span class="visuallyhidden">(opens in new window)</span></a>, the <a href="https://abr.gov.au/General-information/Privacy/Privacy---abr-gov-au-website" target="_blank">ABR privacy policy <span class="visuallyhidden">(opens in new window)</span></a> for more information about how we handle your personal information, your rights to seek access to and correct personal information, and to complain about breaches of privacy.</p>
		</div>
	</div>
</div>
<div class="controls-container">
	<div class="controls-content">
		<button type="button" class="btn" onclick="location.href = 'taxation-details.html'">Previous</button>
		<button type="button" class="btn btn-default" onclick="location.href = 'payment.html'">Go to payment</button>
	</div><!-- controls-content -->
</div>

<div id="dialogOne" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want to remove this business name?</p> 
	<input type="button" class="btn btn-default" id="btnRemoveName1" value="Yes, remove" /> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogOne");'>Cancel</a>
</div>

<div id="dialogTwo" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want to remove this business name?</p>
	<p>At least one business name is required. If you remove this one you will be directed back to the business name search page.</p> 
	<input type="button" class="btn btn-default" id="btnRemoveName2" onclick="location.href='business-names.html'" value="Yes, remove" /> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogTwo");'>Cancel</a>
</div>

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>

<script type="text/javascript">
	/* Drop down settings menu */
	$("nav").accessibleMegaMenu({
		/* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby */
		uuidPrefix: "accessible-megamenu",
		/* css class used to define the megamenu styling */
		menuClass: "nav-menu",
		/* css class for a top-level navigation item in the megamenu */
		topNavItemClass: "nav-item",
		/* css class for a megamenu panel */
		panelClass: "sub-nav",
		/* css class for a group of items within a megamenu panel */
		panelGroupClass: "sub-nav-group",
		/* css class for the hover state */
		hoverClass: "hover",
		/* css class for the focus state */
		focusClass: "focus",
		/* css class for the open state */
		openClass: "open"
	});

	$(document).ready(function () {
		navigationWithinPage();
		initSaveForLater();
		initApplicationOptions();
	});

	$('#btnRemoveName1').click(function () {
		visionaustralia.closeDialog("dialogOne");
		$('#businessName1').toggle("fast");
	});

</script>
<script type="text/javascript" src="scripts/vadialog.js"></script> 
<script type="text/javascript">
		visionaustralia.addDialog("linkOne", "dialogOne"); 
		visionaustralia.addDialog("linkTwo", "dialogTwo"); 
</script>     
