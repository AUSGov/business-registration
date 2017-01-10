---
title: Company details
layout: default
---
<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 3 of 5 steps" style="width:48.25%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="register"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="entitlement"><span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started <span class="visually-hidden"> (completed)</span></a></li>
		<li class="done" style="width: 15.3%"><a href="business-names"><span class="visually-hidden">Step </span><span>2</span><br>Business<br> name <span class="visually-hidden"> (completed)</span></a></li>
		<li class="active" style="width: 15.3%"><span class="visually-hidden">Step </span><span>3</span><br>Company<br> details <span class="visually-hidden"> (current step)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>4</span><br>Confirm<br> application <span class="visually-hidden"> (not completed)</span></li>
		<li style="width: 15.3%"><span class="visually-hidden">Step </span><span>5</span><br>Pay<br> &amp; submit <span class="visually-hidden"> (not completed)</span></li>
		<li class="bookend right"><a href="dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>

<h1 id="heading" tabindex="-1">3. Company details <span>(Step 3 of 6)</span></h1>
<p>All fields are required unless marked as optional.</p>

<div id="section1" class="sub-section-container sub-section-open">
	<h2>Company structure</h2>
	<div class="sub-section-content">
		<fieldset>
			<legend class="larger has-help margin4">
				Type of company <a class="cd-btn help" href="#help"><span>Help information</span></a><br />
				<span class="field-note">Short sentence providing some context.</span>
			</legend>
			<div class="grid-row">
				<div class="col3 margin4">
					<label for="company-type">Type of company</label><br />
					<select id="company-type">
						<option value="1" selected="selected">Proprietary</option>
						<option value="2">Public</option>
					</select>
				</div>
				<div class="col3 last">
					<label for="company-purpose">Purpose of company</label><br />
					<select id="company-purpose">
						<option value="1" selected="selected">Limited by shares</option>
					</select>
				</div>
			</div><!-- grid-row -->
		</fieldset>

		<fieldset>
			<legend class="margin4 larger">Industry type</legend>
			<div id="divIndustryType">
				<div class="grid-row">
					<div class="col4">
						<label for="industry" class="input-right">Select your main industry type</label>
					</div><!-- col -->
					<div class="col8 last">
						<select id="industry" class="showhide-trigger">
							<option value="industry00">Select industry type</option>
							<option value="industry01">Agriculture</option>
							<option value="industry02">Forestry</option>
							<option value="industry03">Fishing (including aquaculture)</option>
							<option value="industry04">Mining</option>
							<option value="industry05">Manufacturing</option>
							<option value="industry06">Electricity, gas, water and waste</option>
							<option value="industry07">Construction</option>
							<option value="industry08">Wholesale trade</option>
							<option value="industry09">Retail trade</option>
							<option value="industry10">Accomodation and food services</option>
							<option value="industry11">Transport, portal and warehousing</option>
							<option value="industry12">Information media and telecommunications</option>
							<option value="industry13">Financial and insurance services</option>
							<option value="industry14">Rental, hiring and real estate services</option>
							<option value="industry15">Administrative and support services</option>
							<option value="industry16">Public administration and safety</option>
							<option value="industry17">Education and training</option>
							<option value="industry18">Health care and social assistance</option>
							<option value="industry19">Arts and recreation services</option>
							<option value="industry20">Other services</option>
						</select>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row grid-row-reveal clearfix showhide-target" style="display: none">
					<div class="col4">
						<p>&nbsp;</p>
					</div><!-- col -->
					<div class="col8 last">
						<p class="no-margin-top"><label for="agricultural">Do you operate an agricultural property?</label></p>
						<div class="radio-toggle">
							<label class="on label-left" for="agricultural-yes"><input id="agricultural-yes" type="radio" name="agricultural"><span>Yes</span></label>
							<label class="off label-right" for="agricultural-no"><input id="agricultural-no" type="radio" name="agricultural"><span>No</span></label>
						</div>
					</div><!-- col -->
				</div><!-- grid-row -->
			</div>
			<div id="divManualActivity">
				<div class="grid-row">
					<div class="col4">
						<label for="business-activity" class="input-right">
							Choose your main business activity<br />
							<span class="field-note">(start typing and choose an option)</span>
						</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="business-activity" type="text" placeholder="Start typing activity">
						<p><a href="" id="manaulBusinessActivity" class="showhide-trigger">Can't find address</a></p>
						<p><a href="" id="autoBusinessActivity" class="showhide-trigger" style="display: none">Back to activity search</a></p>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-container showhide-target" style="display: none">
					<div class="grid-row">
						<div class="col4">
							<label for="manual-activity" class="input-right">Describe business activity</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="manual-activity" type="text">
						</div><!-- col -->
					</div><!-- grid-row -->
				</div><!-- manual-activity -->

			</div>
		</fieldset>

		<fieldset>
			<legend class="larger has-help margin4">
				Will the company have an ultimate holding company? <a class="cd-btn help" href="#help"><span>Help information</span></a><br />
				<span class="field-note">For example, a parent company that has control over the new company.</span>
			</legend>
			<div id="basic-toggle">
				<div class="grid-row margin4">
					<div class="col12 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on"><input id="on" type="radio" name="holding" class="showhide-trigger"><span>Yes</span></label>
							<label class="off label-right" for="off"><input id="off" type="radio" name="holding"><span>No</span></label>
						</div>
					</div>
				</div><!-- grid-row -->
				<div class="showhide-target" style="display:none">
					<div class="grid-row clearfix">
						<div class="col4">
							<label class="input-right" for="legal-name">Full legal name</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="legal-name" type="text">
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row clearfix">
						<div class="col4">
							<label class="input-right" for="abn">ACN or ARBN or ABN</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="abn" type="text">
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row clearfix">
						<div class="col4">
							<label class="input-right" for="incorporation">Country of incorporation</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="incorporation" type="text">
						</div><!-- col -->
					</div><!-- grid-row -->
				</div>
			</div>
		</fieldset>
		

		<hr />
		<h3 class="has-help larger">Business associates<a href="#"> <a class="cd-btn help" href="#help"><span>Help information</span></a></a></h3>
		<p>Add business associates using the buttons below. You require:</p>
		<ul>
			<li id="needDirector"><strong>at least one director</strong> with an Australian residential address</li>
			<li id="needOrganisation"><strong>at least one shareholder</strong></li>
			<li id="needAuthorisedContact"><strong>at least one authorised contact</strong></li>
		</ul>
		<p>Individuals can fulfill multiple roles. For example, a director can also be the authorised contact.</p>
		<div id="addEntity1" class="controls-content margin-bottom">
			<button type="button" id="btnIndividual1" class="btn btn-individual">Add individual</button>
			<button type="button" id="btnOrganisation1" class="btn btn-organisation">Add organisation</button>
		</div>

		<!-- DIRECTOR -->
		<div id="containerIndividual1" style="display: none">
			<h3 class="margin4 line">Details for individual 1:</h3>
			<fieldset class="custom-controls">
				<legend class="margin4 has-help larger">Office held <a class="cd-btn help" href="#help"><span>Help information</span></a></legend>
				<div class="grid-row">
					<div class="col4">&nbsp;</div>
					<div class="col3">
						<p>
							<input id="director" checked type="checkbox">
							<label for="director">Director</label>
						</p>
					</div><!-- col -->
					<div class="col5 last">
						<p>
							<input id="secretary" type="checkbox">
							<label for="secretary">Secretary</label>
						</p>
					</div><!-- col -->
				</div>
				<div class="grid-row">
					<div class="col4">&nbsp;</div>
					<div class="col3">
						<p>
							<input id="officer" type="checkbox">
							<label for="officer">Public officer</label>
						</p>
					</div><!-- col -->
					<div class="col5 last">
						<p>
							<input id="shareholder" type="checkbox">
							<label for="shareholder">Shareholder</label>
						</p>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">&nbsp;</div>
					<div class="col8 last">
						<p>
							<input id="authorisedContact" checked type="checkbox">
							<label for="authorisedContact">Authorised contact</label>
						</p>
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>
			<div class="grid-row grid-row-reveal">
				<fieldset class="no-margin">
					<legend class="col4 input-right has-help">Does this person require an AUSkey? <a class="cd-btn help" href="#help"><span>Help information</span></a></legend>
					<div class="col8 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on-auskey"><input id="on-auskey" type="radio" name="auskey"><span>Yes</span></label>
							<label class="off label-right" for="off-auskey"><input id="off-auskey" type="radio" name="auskey" checked><span>No</span></label>
						</div>
					</div>
				</fieldset>
			</div><!-- grid-row -->
			<fieldset>
				<legend class="margin4 larger">Individual details</legend>
				<div class="grid-row">
					<div class="col4">
						<label for="individual1-given" class="input-right">Given name</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="individual1-given" value="Robert" type="text">
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
						<input id="individual1-family" value="Johnson" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row">
					<div class="col4">
						&nbsp;
					</div><!-- col -->
					<div class="col8 last">
						<input type="checkbox" id="former-name" checked />&nbsp;<label for="former-name">The person has no former name</label>
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>

			<fieldset id="fieldsetPOIAddress" class="margin-bottom-075">
				<legend class="margin4 larger">
					Proof of identity<br />
					<span class="field-note">We require either the person's tax file number (TFN) or home address. Providing a TFN is the quickest way to prove identity, but you can <a href="#" id="useHomeAddress" class="showhide-trigger">enter a home address</a> if you prefer.</span>
				</legend>
				<div class="grid-row">
					<div class="col4">
						<label for="tfn" class="input-right">
							Tax File Number<br />
						</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="tfn" type="number" value="123456789">
						<p class="microcopy">
							<a href="#" class="showhide-trigger" id="backToTfn" style="display: none">Back to TFN</a>
						</p>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row">
					<div class="col4">
						<label for="dob" class="input-right">
							Date of birth<br />
							<span class="field-note">(DD/MM/YYYY)</span>
						</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="dob" type="date" value="01/01/1970">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="country" class="input-right">Country of birth</label>
					</div><!-- col -->
					<div class="col8 last">
						<select id="country">
							<option selected="selected" value="australia">Australia</option>
							<option value="noneAustralia">Choose this for non AU behavior...</option>
						</select>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div id="australianBirthLocation" class="col12">
					<div class="grid-row">
						<div class="col4">
							<label for="birthSuburb" class="input-right">Suburb of birth<br /><span class="field-note">Start typing then select from the list</span></label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="birthSuburb" type="text" value="2905 - Gilmore - ACT">
						</div>
					</div>
				</div>
			</fieldset>
			<div class="margin4 controls-content margin-bottom">
				<button type="button" id="btnsaveIndividual1" class="btn btn-default">Save individual</button>
			</div>                        
		</div><!-- individual 1 -->

		<div id="individual1Saved" style="display: none">
			<div class="cart-container">
				<div class="result-row fade-in fade-in-inherit">
					<div class="result-cell cell-icon">
						<img src="img/ico-tick-green.png" alt="Success" />
					</div>
					<div class="result-cell cell-detail">
						<h3>Robert Johnson</h3>
						<p>Saved as director and authorised contact</p>
					</div>
					<div class="result-cell cell-action">
						<a class="edit" href=""><span>Edit</span></a>&nbsp;<a class="remove" href=""><span>Remove</span></a>
					</div>
				</div><!-- result-row -->
			</div><!-- cart-container -->
			<div id="addEntity2" class="controls-content margin-top-075 margin-bottom">
				<button type="button" id="btnIndividual2" class="btn btn-individual">Add individual</button>
				<button type="button" id="btnOrganisation1" class="btn btn-organisation">Add organisation</button>
			</div>
		</div>

		<div id="individual2Saved" style="display: none">
			<div class="cart-container">
				<div class="result-row fade-in fade-in-inherit">
					<div class="result-cell cell-icon">
						<img src="img/ico-tick-green.png" alt="Success" />
					</div>
					<div class="result-cell cell-detail">
						<h3>Vic Firth</h3>
						<p>Saved as shareholder</p>
					</div>
					<div class="result-cell cell-action">
						<a class="edit" href=""><span>Edit</span></a>&nbsp;<a class="remove" href=""><span>Remove</span></a>
					</div>
				</div><!-- result-row -->
				<div class="result-row">
					<div class="result-cell cell-icon">
						<img src="img/ico-tick-green.png" alt="Success" />
					</div>
					<div class="result-cell cell-detail">
						<h3>Robert Johnson</h3>
						<p>Saved as director and authorised contact</p>
					</div>
					<div class="result-cell cell-action">
						<a class="edit" href=""><span>Edit</span></a>&nbsp;<a class="remove" href=""><span>Remove</span></a>
					</div>
				</div><!-- result-row -->
			</div><!-- cart-container -->
			<div id="addEntity3" class="controls-content margin-top-075 margin-bottom">
				<button type="button" id="btnIndividual2" class="btn btn-individual">Add individual</button>
				<button type="button" id="btnOrganisation1" class="btn btn-organisation">Add organisation</button>
			</div>
		</div>


		<!-- SHAREHOLDER -->
		<div id="containerIndividual2" style="display: none">
			<h3 class="margin4 line">Details for individual 2:</h3>
			<fieldset>
				<legend class="margin4 has-help larger">Office held <a class="cd-btn help" href="#help"><span>Help information</span></a></legend>
				<div class="grid-row checkboxes">
					<div class="col4">&nbsp;</div>
					<div class="col3">
						<input id="director" type="checkbox">&nbsp;<label for="director">Director</label>
					</div><!-- col -->
					<div class="col5 last">
						<input id="secretary" type="checkbox">&nbsp;<label for="secretary">Secretary</label>
					</div><!-- col -->
				</div>
				<div class="grid-row checkboxes">
					<div class="col4">&nbsp;</div>
					<div class="col3">
						<input id="officer" type="checkbox">&nbsp;<label for="officer">Public officer</label>
					</div><!-- col -->
					<div class="col5 last">
						<input id="shareholder" checked type="checkbox">&nbsp;<label for="shareholder">Shareholder</label>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row checkboxes">
					<div class="col4">&nbsp;</div>
					<div class="col8 last">
						<input id="authorisedContact" type="checkbox">&nbsp;<label for="authorisedContact">Authorised contact</label>
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>
			<div class="grid-row grid-row-reveal">
				<fieldset class="no-margin">
					<legend class="col4 input-right has-help">Does this person require an AUSkey? <a class="cd-btn help" href="#help"><span>Help information</span></a></legend>
					<div class="col8 last">
						<div class="col12 last">
							<div class="radio-toggle">
								<label class="on label-left" for="on-auskey"><input id="on-auskey" type="radio" name="auskey"><span>Yes</span></label>
								<label class="off label-right" for="off-auskey"><input id="off-auskey" type="radio" name="auskey" checked><span>No</span></label>
							</div>
						</div>
					</div>
				</fieldset>
			</div><!-- grid-row -->
			<fieldset>
				<legend class="margin4 larger">Individual details</legend>
				<div class="grid-row">
					<div class="col4">
						<label for="individual1-given" class="input-right">Given name</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="individual1-given" value="Vic" type="text">
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
						<input id="individual1-family" value="Firth" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row">
					<div class="col4">
						&nbsp;
					</div><!-- col -->
					<div class="col8 last">
						<input type="checkbox" id="former-name" checked />&nbsp;<label for="former-name">The person has no former name</label>
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>

			<fieldset id="fieldsetPOIAddress" class="margin-bottom-075">
				<legend class="margin4 larger">
					Proof of identity<br />
					<span class="field-note">We require either the person's tax file number (TFN) or home address. Providing a TFN is the quickest way to prove identity, but you can <a href="#" id="useHomeAddress" class="showhide-trigger">enter a home address</a> if you prefer.</span>
				</legend>
				<div class="grid-row">
					<div class="col4">
						<label for="tfn" class="input-right">
							Tax File Number<br />
						</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="tfn" type="number" value="123456789">
						<p class="microcopy">
							<a href="#" class="showhide-trigger" id="backToTfn" style="display: none">Back to TFN</a>
						</p>
					</div><!-- col -->
				</div><!-- grid-row -->

				<div class="grid-row">
					<div class="col4">
						<label for="dob" class="input-right">
							Date of birth<br />
							<span class="field-note">(DD/MM/YYYY)</span>
						</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="dob" type="date" value="01/01/1970">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="country" class="input-right">Country of birth</label>
					</div><!-- col -->
					<div class="col8 last">
						<select id="country">
							<option selected="selected" value="australia">Australia</option>
							<option value="noneAustralia">Choose this for non AU behavior...</option>
						</select>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div id="australianBirthLocation" class="col12">
					<div class="grid-row">
						<div class="col4">
							<label for="birthSuburb" class="input-right">Suburb of birth<br /><span class="field-note">Start typing then select from the list</span></label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="birthSuburb" type="text" value="2902 - Kambah - ACT">
						</div>
					</div>
				</div>
			</fieldset>
			<div class="margin4 controls-content margin-bottom">
				<button type="button" id="btnsaveIndividual2" class="btn btn-default">Save individual</button>
			</div>
		</div><!-- shareholder -->






		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" onclick="location.href='company-name-added.html'">Previous</button><button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->





<div id="section2" class="sub-section-container">
	<h2>Address and location</h2>
	<div class="sub-section-content">
		<fieldset id="fieldsetAddress">
			<legend class="margin4 larger">
				Registered office address<br />
				<span class="field-note">This does not have to be the principal place of business.</span>
			</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="address-suggest" class="input-right">Start typing address</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="address-suggest" type="text" placeholder="Start typing address">
					<p><a href="" id="manual" class="showhide-trigger">Can't find address</a></p>
					<p><a href="" id="addressSearch" class="showhide-trigger" style="display: none">Back to address search</a></p>
				</div><!-- col -->
			</div><!-- grid-row -->

			<div class="grid-row">
				<div class="col3 margin4">
					<label for="phone-num">Phone</label><br />
					<input id="phone-num" type="text">
				</div>
				<div class="col3">
					<label for="phone-type">Type</label><br />
					<select id="phone-type">
						<option value="1" selected="selected">Business number</option>
						<option value="2">Mobile etc...</option>
					</select>
				</div>
				<div class="col1 last">
					 <a class="cd-btn help" href="#help"><span>Help information</span></a>
				</div>
			</div><!-- grid-row -->
			<button type="button" class="btn btn-default btn-small margin-top-075 margin4">Add another number</button>

			<div class="grid-container showhide-target" id="manualAddress" style="display: none">
				<div class="grid-row">
					<div class="col4">
						<label for="address-line1" class="input-right">Address line 1</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="address-line1" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="address-line2" class="input-right">Address line 2</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="address-line2" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="suburb" class="input-right">Suburb, town or city</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="suburb" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="postcode" class="input-right">Postcode</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="postcode" type="number" style="width: 8em">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="state" class="input-right">State or territory</label><br />
					</div><!-- col -->
					<div class="col8 last">
						<select id="state" style="width: 8.75em">
							<option value="1" selected="selected">NSW</option>
							<option value="2">Qld etc</option>
						</select>
					</div><!-- col -->
				</div><!-- grid-row -->
			</div><!-- manualAddress -->

		</fieldset>

		<div class="grid-row">
			<fieldset class="no-margin">
				<legend class="col4 input-right">Is this the principal place of business?</legend>
				<div class="col8 last">
					<div class="col12 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on2"><input id="on2" type="radio" name="occupy"><span>Yes</span></label>
							<label class="off label-right" for="off2"><input id="off2" type="radio" name="occupy"><span>No</span></label>
						</div>
					</div>
				</div>
				<div class="margin4">
					<input type="checkbox" id="postal" />&nbsp;<label for="postal">Company has different postal address</label>
				</div>
				<div class="grid-row margin-top-075">
					<div class="col4">
						<label for="industry-different" class="input-right">Industry type at this address</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="industry-different" type="text" value="Plumbing services" disabled>&nbsp;<button type="button" class="btn btn-default">Change</button>
					</div><!-- col -->
				</div><!-- grid-row -->
				<p><button type="button" class="btn btn-default btn-small margin-top-075 margin-bottom-075">Add another address</button></p>
			</fieldset>
		</div><!-- grid-row -->

		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button><button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->





<div id="section3" class="sub-section-container">
	<h2>ABN details</h2>
	<div class="sub-section-content">
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button><button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->



<div id="section4" class="sub-section-container">
	<h2>Shares</h2>
	<div class="sub-section-content">
		<div id="containerAssignShares1">
			<fieldset class="no-margin" id="assign-shares">
				<legend class="margin4 larger">Assign shares to the company<br /><span class="field-note">You need to specify the total paid and unpaid shares for the <strong>company</strong> before allocating to business associates.</span></legend>
				<div class="grid-row">
					<div class="col4">
						<label for="company-share" class="input-right">Share class/type</label>
					</div><!-- col -->
					<div class="col8 last">
						<select id="company-share">
							<option selected="selected">-- Select share type --</option>
							<option>Create custom share type</option>
							<option>A - A</option>
							<option>B - B</option>
							<option>EMP - employee's</option>
							<option>FOU - founder's</option>
							<option>LG  - life governor's</option>
							<option>MAN - management</option>
							<option>ORD - ordinary</option>
							<option>RED - redeemable</option>
							<option>SPE - special</option>
							<option>PRF - preference</option>
							<option>CUMP -cumulative preference</option>
							<option>NCP - non-cumulative preference</option>
							<option>REDP - redeemable preference</option>
							<option>NRP - non-redeemable preference</option>
							<option>CRP - cumulative redeemable preference</option>
							<option>NCRP - non-cumulative redeemable preference</option>
							<option>PARP - participative preference</option>
						</select>
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="share-num" class="input-right">Number of shares</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="share-num" type="number">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="share-paid" class="input-right">Amount paid per share</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="share-paid" class="input-dollar" type="number">
					</div><!-- col -->
				</div><!-- grid-row -->
				<div class="grid-row">
					<div class="col4">
						<label for="share-unpaid" class="input-right">Amount unpaid per share</label>
					</div><!-- col -->
					<div class="col8 last">
						<input id="share-unpaid" class="input-dollar" type="number">
					</div><!-- col -->
				</div><!-- grid-row -->
			</fieldset>
			<div class="grid-row">
				<fieldset class="no-margin">
					<legend class="col4 input-right">Are these shares help on behalf of another individual, organisation or trust?</legend>
					<div class="col8 last">
						<div class="col12 last">
							<div class="radio-toggle">
								<label class="on label-left" for="on-behalf"><input id="on-behalf" type="radio" name="behalf"><span>Yes</span></label>
								<label class="off label-right" for="off-behalf"><input id="off-behalf" type="radio" name="behalf"><span>No</span></label>
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset class="no-margin">
					<legend class="col4 input-right">Are any of these shares issued other than for cash?</legend>
					<div class="col8 last">
						<div class="col12 last">
							<div class="radio-toggle">
								<label class="on label-left" for="on-other-cash"><input id="on-other-cash" type="radio" name="other-cash"><span>Yes</span></label>
								<label class="off label-right" for="off-other-cash"><input id="off-other-cash" type="radio" name="other-cash"><span>No</span></label>
							</div>
						</div>
					</div>
				</fieldset>
			</div><!-- grid-row -->
			<p class="no-margin-top"><button type="button" id="btnAddShareClass" class="btn btn-default btn-small margin4">Assign shares</button></p>
		</div><!-- containerAssignShares1 -->

		<div id="share-summary" style="display: none">
			<table>
				<caption>Summary of shares assigned to the company</caption>
				<thead>
					<tr>
						<th style="width: 23%">Share class/type</th>
						<th style="width: 23%">Total number of shares</th>
						<th style="width: 22%">Total paid</th>
						<th style="width: 22%">Total unpaid</th>
						<th style="width: 10%"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ORD</td>
						<td>2000</td>
						<td>$0.50</td>
						<td>$2.00</td>
						<td class="nowrap"><a class="edit" href=""><span>Edit</span></a>&nbsp;<a class="remove" href=""><span>Remove</span></a></td>
					</tr>
				</tbody>
			</table>
			<p class="no-margin-top"><button type="button" class="btn btn-small">Assign more shares</button></p>
			<hr />
		</div>


		<div id="allocate-shares" style="display: none">
			<div id="containerAllocateShares1">
				<fieldset class="no-margin">
					<legend class="margin4 larger">Allocate shares to business associates<br /><span class="field-note">Share amounts must total amount specified in company share summary</span></legend>
					<div class="grid-row">
						<div class="col4">
							<label for="selectAssociate" class="input-right">Select business associate</label>
						</div><!-- col -->
						<div class="col8 last">
							<select id="selectAssociate">
								<option selected="selected">Vic Firth (shareholder)</option>
								<option selected="selected">Robert Johnson (director, authorised contact)</option>
								<option>Assign more shares</option>
							</select>
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row">
						<div class="col4">
							<label for="company-share" class="input-right">Share class/type</label>
						</div><!-- col -->
						<div class="col8 last">
							<select id="company-share">
								<option selected="selected">-- Select share type --</option>
								<option>Create custom share type</option>
								<option>A - A</option>
								<option>B - B</option>
								<option>EMP - employee's</option>
								<option>FOU - founder's</option>
								<option>LG  - life governor's</option>
								<option>MAN - management</option>
								<option>ORD - ordinary</option>
								<option>RED - redeemable</option>
								<option>SPE - special</option>
								<option>PRF - preference</option>
								<option>CUMP - cumulative preference</option>
								<option>NCP - non-cumulative preference</option>
								<option>REDP - redeemable preference</option>
								<option>NRP - non-redeemable preference</option>
								<option>CRP - cumulative redeemable preference</option>
								<option>NCRP - non-cumulative redeemable preference</option>
								<option>PARP - participative preference</option>
							</select>
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row">
						<div class="col4">
							<label for="share-num" class="input-right">Number of shares</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="share-num" type="number">
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row">
						<div class="col4">
							<label for="share-paid" class="input-right">Amount paid per share</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="share-paid" class="input-dollar" type="number">
						</div><!-- col -->
					</div><!-- grid-row -->
					<div class="grid-row">
						<div class="col4">
							<label for="share-unpaid" class="input-right">Amount unpaid per share</label>
						</div><!-- col -->
						<div class="col8 last">
							<input id="share-unpaid" class="input-dollar" type="number">
						</div><!-- col -->
					</div><!-- grid-row -->
				</fieldset>
				<p class="no-margin-top"><button id="btnAllocateShares" type="button" class="btn btn-default btn-small margin4">Allocate shares</button></p>
			</div><!-- containerAllocateShares1 -->
			<div id="share-allocation-summary" style="display: none">
				<table>
					<caption>Summary of shares allocated to business associates<br />
					<span class="alert">The number of shares allocated to associates must equal the number of shares assigned to the company</span></caption>
					<thead>
						<tr>
							<th style="width: 20%">Shareholder</th>
							<th style="width: 11%">Share class/type</th>
							<th style="width: 11%" class="warning">No. of shares</th>
							<th style="width: 8%">$ paid per share</th>
							<th style="width: 8%">$ unpaid per share</th>
							<th style="width: 8%">Total paid</th>
							<th style="width: 8%">Total unpaid</th>
							<th style="width: 8%">Fully paid?</th>
							<th style="width: 8%">Beneficially held?</th>
							<th style="width: 10%"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Robert Johnson</td>
							<td>ORD</td>
							<td class="warning">1500</td>
							<td>$0.50</td>
							<td>$1.50</td>
							<td>$1.00</td>
							<td>$2.00</td>
							<td>Yes</td>
							<td>No</td>
							<td class="nowrap"><a class="edit" href=""><span>Edit</span></a>&nbsp;<a class="remove" href=""><span>Remove</span></a></td>
						</tr>
					</tbody>
				</table>
				<p class="no-margin-top"><button type="button" class="btn btn-small">Allocate more shares</button></p>
			</div>
		</div><!-- allocate shares -->


		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button>
				<button type="button" class="btn btn-default" onclick="location.href='taxation-details.html'">Continue to step 4</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>
<!--
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/jquery.collapse.js"></script>
    <script src="assets/js/jquery-toggleslide.js"></script>
    <script src="assets/js/jquery-accessibleMegaMenu.js"></script>
    <script src="assets/js/functions.js"></script>
-->
<script>

	$(document).ready(function () {

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

		$("#basic-toggle").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: true
		});
		$("#fieldsetAddress").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			clearOthers: false,
			toggleIds: "address-suggest;manual;addressSearch",
			toggleSlideSameElement: true
		});

		initSaveForLater();
		initApplicationOptions();
		navigationWithinPage();



		// Add director
		$('#btnIndividual1').click(function () {
			$('#addEntity1').toggle("fast");
			$('#containerIndividual1').toggle("fast");
			// scroll to top if the page is super long
			var targetTop = $(this).parent().offset().top;
			jQuery('html, body').animate({
				scrollTop: targetTop
			}, 800);
		});

		// Save director
		$('#btnsaveIndividual1').click(function () {
			$('#containerIndividual1').toggle("fast");
			$('#individual1Saved').toggle("fast");
			// scroll to top if the page is super long
			var targetTop = $(this).parent().offset().top;
			jQuery('html, body').animate({
				scrollTop: targetTop
			}, 800);
		});


		// Add shareholder
		$('#btnIndividual2').click(function () {
			$('#containerIndividual2').toggle("fast");
			// scroll to top if the page is super long
			var targetTop = $(this).parent().offset().top;
			jQuery('html, body').animate({
				scrollTop: targetTop
			}, 800);
		});

		// Save shareholder
		$('#btnsaveIndividual2').click(function () {
			$('#containerIndividual2').toggle("fast");
			$('#individual1Saved').hide();
			$('#individual2Saved').toggle("fast");
			// scroll to top if the page is super long
			var targetTop = $(this).parent().offset().top;
			jQuery('html, body').animate({
				scrollTop: targetTop
			}, 800);
		});

		// Assign shares
		$('#btnAddShareClass').click(function () {
			$('#share-summary').toggle("fast");
			$('#allocate-shares').toggle("fast");
			$('#containerAssignShares1').toggle("fast");
		});

		// Allocate shares
		$('#btnAllocateShares').click(function () {
			$('#share-allocation-summary').toggle("fast");
			$('#containerAllocateShares1').toggle("fast");
		});


		// add authorisaed contact

		$('#btnAuthContact').click(function () {
			$('#controlsIndividual1').toggle("fast");
			$('#containerAuthorised').toggle("fast");
			// scroll to top if the page is super long
			var targetTop = $(this).parent().offset().top;
			jQuery('html, body').animate({
				scrollTop: targetTop
			}, 800);
		});

		$("#country").change(function () {
			if ($(this).val() === "australia") {
				$("#australianBirthLocation").slideDown();
			} else {
				$("#australianBirthLocation").slideUp();
				clearElement($("#australianBirthLocation"));
			}
		});

	});

</script>

