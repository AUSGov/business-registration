---
title: Getting started
layout: default
---

<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" style="width: 18%"></span>
	</div><!-- meter -->
	<ul class="section-nav">
		<li class="bookend"><a href="register.html"><span>&lsaquo;</span><br>Select<br> registrations</a></li>
		<li class="active" style="width: 15.3%"><span>1</span><br>Getting<br> started</li>
		<li style="width: 15.3%"><span>2</span><br>Business<br> details</li>
		<li style="width: 15.3%"><span>3</span><br>Taxation<br>details</li>
		<li style="width: 15.3%"><span>4</span><br>Confirm<br> application</li>
		<li style="width: 15.3%"><span>5</span><br>Pay<br> &amp; submit</li>
		<li class="bookend right"><span class="icon-right">&rsaquo;</span><br>Dashboard<br> view</li>
	</ul>
</div><!-- progress-container -->

<h1 id="heading" tabindex="-1">1. {{ page.title }} <span>(Step 1 of 6)</span></h1>
<p>All fields are required unless marked as optional.</p>

<div id="section1" class="sub-section-container sub-section-open">
	<h2>Save and return</h2>
	<div class="sub-section-content">                                            
		<div id="validationSummary" class="validation-container clearfix" style="display: none">
			<div class="grid-row">
				<div class="validation-summary-icon">
					<img src="img/ico-alert-red.png" alt="Error">
				</div>
				<div class="validation-message">
					<h2><a id="validationSummaryAnchor" href="">There was a problem</a></h2>
					<ul>
						<li>Enter a value for <a class="skip" href="#validation-test-field1">Label for field 1</a></li>
						<li>Enter a value for <a class="skip" href="#validation-test-field2">Label for field 2</a></li>
						<li>Choose yes or no for <a class="skip" href="#validation-test-field3">Yes or no right aligned</a></li>
					</ul>
				</div>
			</div>
		</div>
		<p>Enter your details to enable returning to this application later or skip this now and find the option under the <em>settings</em> menu.</p>
		<div class="custom-controls">
			<p><input type="checkbox" id="already-setup0" /><label for="already-setup0">I have already set up save and return.</label></p>
		</div>
		<hr />
		<fieldset>
			<legend>To set up <em>save and return</em>, please provide the following required details:</legend>
			<div class="grid-row">
				<div class="col4">
					<label for="email0" class="input-right">Email address</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="email0" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="password0" class="input-right">Password</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="password0" type="password">
					<a id="forgotten-password" href="" style="display: none" class="smallest">Forgotten password?</a>
				</div><!-- col -->
			</div><!-- grid-row -->
			<div id="confirm-password" class="grid-row">
				<div class="col4">
					<label for="password02" class="input-right">Confirm password</label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="password02" type="password" style="width: 100%; max-width: 24em;">
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>
		
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" onclick="location.href='register.html'">Previous</button>
				<button type="button" class="btn btn-default next">Next</button>
			</div><!-- controls-content -->
		</div>
	</div>
</div>

<div id="section2" class="sub-section-container">
	<h2>ABN details</h2>
	<div class="sub-section-content">
		<div id="have-abn" style="display: none">
			<fieldset class="custom-controls">
				<legend class="larger has-help">Don't need an ABN?<br /><span class="field-note">Please tell us why you opted out of registering an ABN.</span></legend>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" name="existing-abn" id="enter-abn" />
							<label class="no-margin" for="enter-abn"><strong>I already have an ABN</strong></label>
						</p>
					</div>
					<div class="col1 last">
						<a class="help" href="#"><span>help</span></a>
					</div><!-- col -->
				</div>
				<div id="enter-existing-abn" class="grid-row" style="display: none;">
					<div class="col1">&nbsp;</div>
					<div class="col7 last">
						<label for="reserved-name">Enter your ABN</label><br />
						<input id="reserved-name" type="text" value=""> <button type="button" class="btn btn-inline">Validate</button>
					</div>
				</div>

				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" name="existing-abn" id="abn-reference" />
							<label class="no-margin" for="abn-reference"><strong>I have an ABN reference number</strong></label>
						</p>
					</div>
					<div class="col1 last">
						<a class="help" href="#"><span>help</span></a>
					</div><!-- col -->
				</div>
				<div id="abn-ref" style="display: none;">
					<div class="grid-row">
						<div class="col1">&nbsp;</div>
						<div class="col7 last">
							<label for="reserved-name">Enter your ABN reference number</label><br />
							<input id="reserved-name" type="text" value="">
						</div>
					</div>
					<div class="grid-row">
						<div class="col1">&nbsp;</div>
						<div class="col10 margin-top-075">
							<fieldset>
								<label for="BusinessNameDetails_EntityTypeId">Which type of entity is the applicant?</label>
								<div>
									<input id="etIndividual" name="entity-types" type="radio">
									<label for="etIndividual">Individual</label><br />
									<input id="etPartnership" name="entity-types" type="radio" value="2">
									<label for="etPartnership">Partnership</label><br />
									<input id="etTrust" name="entity-types" type="radio">
									<label for="etTrust">Trust</label><br />
									<input id="etCompany" name="entity-types" type="radio">
									<label for="etCompany">Company</label><br />
									<input id="etSuper" name="entity-types" type="radio">
									<label for="etSuper">Superannuation</label>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" name="existing-abn" id="not-required" />
							<label class="no-margin" for="not-required"><strong>Business exists on Christmas Island or Cocos Island</strong></label>
						</p>
					</div><!-- col -->
					<div class="col1 last">
						<a class="help" href="#"><span>help</span></a>
					</div><!-- col -->
				</div>
				<div id="coco-entity" class="grid-row" style="display: none;">
					<div class="col1">&nbsp;</div>
					<div class="col11 last">
						<fieldset class="col11 last">
							<legend>Which type of entity is the applicant?</legend>
							<div class="radio-toggle">
								<label class="label-left" for="coIndividual">
									<input id="coIndividual" name="cocoType" type="radio">
									<span>Individual</span>
								</label>
								<label class="label-middle" for="coCompany">
									<input id="coCompany" name="cocoType" type="radio">
									<span>Company</span>
								</label>
								<label class="label-right" for="coOrganisation">
									<input id="coOrganisation" name="cocoType" type="radio">
									<span>Organisation</span>
								</label>
							</div>
						</fieldset>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" name="existing-abn" id="joint-venture" />
							<label class="no-margin" for="joint-venture"><strong>Registering a joint venture with multiple ABNs</strong></label>
						</p>
					</div>
					<div class="col1 last">
						<a class="help" href="#"><span>help</span></a>
					</div><!-- col -->
				</div>
			</fieldset>
			<div class="col12" id="jointVentureDiv" style="display:none">
				<div class="grid-row clearfix">
					<div class="col12 last">
						<label class="input-right" for="name">Extra details...</label><br />
						<input id="name" type="text">
					</div><!-- col -->
				</div><!-- grid-row -->
			</div>
		</div><!-- have-abn -->

		<div id="need-abn">
			<p>Before you continue, we need to first check that you’re entitled to an ABN.</p>
			<fieldset id="fieldsetAbn" class="col12 custom-controls" style="display: none">
				<legend class="larger">For taxation purposes, which type of entity is the applicant?</legend>
				<div class="col12 last">
					<p>
						<input id="rdIndividual" name="abnFor" class="showhide-trigger" type="radio">
						<label for="rdIndividual">Individual</label>
					</p>
					<p>
						<input id="rdPartnership" name="abnFor" type="radio">
						<label for="rdPartnership">Partnership</label>
					</p>
					<p>
						<input id="rdTrust" name="abnFor" type="radio">
						<label for="rdTrust">Trust</label>
					</p>
					<p>
						<input id="rdCompany" name="abnFor" class="showhide-trigger" type="radio">
						<label for="rdCompany">Company</label>
					</p>
					<p>
						<input id="rdSuperfund" name="abnFor" type="radio">
						<label for="rdSuperfund">Super fund</label>
					</p>
				</div>

				<!-- div id="divApprenticeMsg" class="col10 card" style="display: none">
					<p>
						<strong>You don’t need an ABN to work as an apprentice, trade assistant, or labourer. </strong>You work under the direction of your employer, so you’re actually an employee.
					</p>
					<p>
						If your employer is asking you to register as a contractor when you’re really an employee, you can <a target="_blank" href="https://www.ato.gov.au/Business/Employee-or-contractor/In-detail/Report-a-business-incorrectly-treating-employees-as-contractors/How-to-report-a-business-incorrectly-treating-employees-as-contractors/" class="ico-external">report the business to the Tax Office.</a>
					</p>
					<p>
						If you’re not sure whether you’re an employee or not, try the Tax Office’s <a target="_blank" href="https://www.ato.gov.au/Calculators-and-tools/Employee-or-contractor/" class="ico-external">Employee/contractor decision tool.</a>
					</p>
				</div -->
			</fieldset>
			<fieldset id="fieldsetCompanyAbn" style="display: none" class="custom-controls">
				<legend class="larger col12" id="fieldSetCompany">What type of company do you need an ABN for?</legend>
				<div class="grid-row">
					<p>
						<input id="rdPublicCompany" name="long-labels" type="radio" />
						<label for="rdPublicCompany">Australian public company</label>
					</p>
					<p>
						<input id="rdPrivateCompany" name="long-labels" type="radio" />
						<label for="rdPrivateCompany">Australian private company</label>
					</p>
					<p>
						<input id="rdOtherCompany" name="long-labels" type="radio" />
						<label for="rdOtherCompany">other type of company</label>
					</p>
					<div id="divGoToPOI" class="col10 card" style="display: none">
						<br />
						<div class="col1">&nbsp;</div>
						<p> You are entitled for ABN application, go to POI in step 1.2</p>
					</div>
				</div>
			</fieldset>
			<div class="col10 card" id="divGoToCompanyRegistration" style="display: none;">
				<div class="col1">&nbsp;</div>
				<div class="col10">
					<p>
						You need to register a <strong id="strongCompanyType">public</strong> company to apply for an ABN!
					</p>
					<div class="grid-row grid-row-block custom-controls clearfix">
						<div>
							<p>
								<input type="radio" id="rdHaveCompany" name="Compay" />
								<label for="rdHaveCompany">
									I have registered a company
								</label>
							</p>
						</div>
						<div class="col4">
							<label for="acn" class="input-right">
								ACN number:
							</label>
						</div>
						<div class="col8 last">
							<input type="number" id="acn" />
						</div>
					</div>

					<div class="grid-row grid-row-block grid-row-last custom-controls clearfix">
						<div class="col12 last">
							<p>
								<input type="radio" id="rdAddCompany" name="Compay" />
								<label for="rdAddCompany">
									I'd like to register a company
								</label>
							</p>
						</div>
					</div>
					<p>
						Not sure? Find out more about <a target="_blank" href="https://abr.gov.au/For-Business,-Super-funds---Charities/Applying-for-an-ABN/What-you-need-for-your-ABN-application/ACN-or-ARBN/">registering an ABN for companies.</a>
					</p>
				</div>
				<div class="col10 showhide-target card" style="display: none">
					<p>
						You need to register a <strong>private</strong> company to apply for an ABN!
					</p>
					<p>
						<label for="ckAddPrivateCompany">
							<input type="checkbox" id="ckAddPrivateCompany" class="addCompany" />&nbsp; company registration
						</label>
					</p>
					<p>
						<label for="ckHavePrivateCompany">
							<input type="checkbox" id="ckHavePrivateCompany" />&nbsp; I already have a company
						</label>
					</p>
					<p>
						Not sure? Find out more about <a target="_blank" href="https://abr.gov.au/For-Business,-Super-funds---Charities/Applying-for-an-ABN/What-you-need-for-your-ABN-application/ACN-or-ARBN/">registering an ABN for companies.</a>
					</p>
				</div>
			</div>
			<fieldset id="fieldsetCompanyType" class="col11 custom-controls" style="display: none">
				<legend class="larger">What type of company?</legend>
				<div class="grid-row">
					<div class="col5">
						<p>
							<input type="radio" id="rdCompanyBody" name="incorporated" />
							<label for="rdCompanyBody">Body corporate</label>
						</p>
						<p>
							<input type="radio" id="rdCompanySole" name="incorporated" />                                      
							<label for="rdCompanySole">Corporation sole</label>
						</p>
						<p>
							<input type="radio" id="rdCompanyForeign" name="incorporated" />                            
							<label for="rdCompanyForeign">Foreign company</label>
						</p>
						<p>
							<input type="radio" id="rdCompanyAssociation" name="incorporated" />
							<label for="rdCompanyAssociation">Incorporated Association</label>
						</p>
					</div>
					<div class="col7 last">
						<p>
							<input type="radio" id="rdCompanyStrata" name="incorporated" />
							<label for="rdCompanyStrata">Strata title</label>
						</p>
						<p>
							<input type="radio" id="rdCompanyCooperative" name="incorporated" />
							<label for="rdCompanyCooperative">Co-operative</label>
						</p>
						<p>
							<input type="radio" id="rdCompanyUnIncorpAssociation" name="incorporated" />
							<label for="rdCompanyUnIncorpAssociation">Unincorporated association</label>
						</p>
						<p>
							<input type="radio" id="rdCompanyOtherUnincorp" name="incorporated" />
							<label for="rdCompanyOtherUnincorp">None of these</label>
						</p>
					</div>
				</div>
			</fieldset>

			<div id="fieldsetAbnEligibility" class="col12 last"></div>
		</div><!-- need-abn -->
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn previous">Previous</button>
				<button type="button" class="btn btn-default" id="btnContinue">Continue to step 2</button>
			</div><!-- controls-content -->
		</div>
	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>
<script src="scripts/functions.js"></script>
<script src="scripts/jquery-accessibleMegaMenu.js"></script>

<script type="text/javascript">
	//var help;
	var isGst = false;
	var isAbnChecked = false;
	var isCompany = false;
	var isStarted = false;
	var isUnincorpAssociation = false;
	var inAustraliaMatters = false;
	var nextStepUrl = "business-names.html";

	$(document).ready(function () {
		// load save for later content
		initSaveForLater();
		initApplicationOptions();
		navigationWithinPage();

		$("#already-setup").click(function () {
			if (this.checked) {
				$("#confirm-password").hide();
				$("#forgotten-password").show();
			} else {
				$("#confirm-password").show();
				$("#forgotten-password").hide();
			}
		});


		$("#btnContinue").click(function() {
			window.location = nextStepUrl;
		});

		// detect whether company or gst selected
		var urlQueryStrings = getUrlVars();
		if (urlQueryStrings.type != undefined) {
			if (urlQueryStrings.type.indexOf("co") >= 0) {
				isCompany = true;
			}
			if (urlQueryStrings.type.indexOf("gst") >= 0) {
				isGst = true;
			}
			if (urlQueryStrings.type.indexOf("abn") >= 0) {
				isAbnChecked = true;
			}
		}
		// determine whether this is a company entitlement or not
		if (isCompany) {
			nextStepUrl = "company-name.html";
			$("#fieldsetCompanyAbn").slideDown();
		} else {
			$("#fieldsetAbn").slideDown();
		}

		// determine which ABN section to display
		if (isAbnChecked) {
			$("#have-abn").hide();
			$("#need-abn").show();
		} else {
			$("#have-abn").show();
			$("#need-abn").hide();
		}


		$("#fieldsetPOIAddress").registerToggleSlide({
			triggerClass: ".showhide-trigger",
			targetClass: ".showhide-target",
			toggleIds: "tfn;useHomeAddress;backToTfn",
			clearOthers: false,
			toggleSlideSameElement: true,
			slideUpCallback: function () {
				if ($("#addressSearch").is(":visible")) {
					$("#addressSearch").trigger("click");
				}
			}
		});
		$("#fieldsetPOIAddress").registerToggleSlide({
			triggerClass: ".showhide-trigger-1",
			targetClass: ".showhide-target-1",
			toggleIds: "address-suggest;manual;addressSearch",
			clearOthers: false,
			toggleSlideSameElement: true
		});

		$("input[name*='existing-abn']").click(function () {
			if (this.id == 'enter-abn') {
				$('#enter-existing-abn').show('fast');
			} else {
				$('#enter-existing-abn').hide('fast');
			}
			if (this.id == 'abn-reference') {
				$('#abn-ref').show('fast');
			} else {
				$('#abn-ref').hide('fast');
			}
			if (this.id == "not-required") {
				$('#coco-entity').show('fast');
			} else {
				$('#coco-entity').hide('fast');
			}
			//if (this.id == "joint-venture")
			//{
			//    $("#jointVentureDiv").show('fast');
			//}
			//else
			//{
			//    $("#jointVentureDiv").hide('fast');
			//    // clearElement("#jointVentureDiv");
			//}
		});

		// for what do you need an ABN for.
		$("#fieldsetAbn").find(":radio").click(function () {

			// partnership
			if (this.id === "rdPartnership") {

				loadEntitlementQuestions("entitlement/entitlement-partnership-content.html", true, function () { inAustraliaMatters = true; });
				loadEntitlementHlep("entitlement/entitlement-partnership-help.html");
				var offset = $('#fieldsetAbnEligibility').offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 400);
			};
			// sole trader
			if (this.id === "rdIndividual") {
				inAustraliaMatters = true;
				loadEntitlementQuestions("entitlement/entitlement-soletrader-content.html", true, function () { inAustraliaMatters = true; });
				loadEntitlementHlep("entitlement/entitlement-soletrader-help.html");
				var offset = $('#fieldsetAbnEligibility').offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 400);
			};

			// trust
			if (this.id === 'rdTrust') {
				inAustraliaMatters = true;
				loadEntitlementQuestions("entitlement/entitlement-trust-content.html", false, function () { inAustraliaMatters = true; });
				loadEntitlementHlep("entitlement/entitlement-trust-help.html");
				var offset = $('#fieldsetAbnEligibility').offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 400);
			}

			// company
			if (this.id === 'rdCompany') {
				inAustraliaMatters = true;
				loadEntitlementQuestions("entitlement/entitlement-company-content.html", false, function () { inAustraliaMatters = true; });
				loadEntitlementHlep("entitlement/entitlement-company-help.html");
				var offset = $('#fieldsetAbnEligibility').offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 400);
			}

			// superannuation
			if (this.id === 'rdSuperfund') {
				loadEntitlementQuestions("entitlement/entitlement-super-content.html", false, function () { inAustraliaMatters = true; });
				loadEntitlementHlep("entitlement/entitlement-super-help.html");
				var offset = $('#fieldsetAbnEligibility').offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 400);
			}

			return;

			// super fund & trust (not yet implemented)
			if (this.id === "rdSuperfund") {
				$("#fieldsetAbnEligibility").html("Not implemented yet.");
			}

			// Company public or private clicked
			if (this.id === "rdPublic" || this.id === "rdPrivate") {
				$("#divGoToCompanyRegistration").slideDown();
				$("#strongCompanyType").html("public");
				this.id === "rdPublic" ? $("#strongCompanyType").html("public") : $("#strongCompanyType").html("private");
				$("#fieldsetAbnEligibility").html("");
			} else {
				if ($("#divGoToCompanyRegistration").is(":visible")) {
					$("#divGoToCompanyRegistration").slideUp();
					clearElement($("#divGoToCompanyRegistration"));
				}
			}
			// Company other
			if (this.id === "rdOther") {
				isCompany = true;
				nextStepUrl = "company-name.html";
				$("#fieldsetAbnEligibility").slideUp();
				$("#fieldsetCompanyType").slideDown();
				jQuery('html, body').animate({ scrollTop: $('#fieldsetCompanyType').offset().top }, 1200);
				clearElement($("#divGoToCompanyRegistration"));
			} else {
				nextStepUrl = "business-names.html";
				$("#fieldsetCompanyType").slideUp();
				clearElement($("#fieldsetCompanyType"));
			}

		 });

		// for company type
		$("#fieldsetCompanyAbn").find(":radio").click(function () {
			if (this.id === "rdPublicCompany" || this.id === "rdPrivateCompany") {
				//$("#divGoToCompanyRegistration").slideDown();
				//jQuery('html, body').animate({ scrollTop: $('#divGoToCompanyRegistration').offset().top }, 1200);
				$("#fieldsetCompanyType").slideUp();
			} else {
				$("#fieldsetCompanyType").slideDown();
				jQuery('html, body').animate({ scrollTop: $('#fieldsetCompanyType').offset().top }, 1200);
				$("#divGoToCompanyRegistration").slideUp();
				clearElement($("#divGoToCompanyRegistration"));
			}
		});

		// for company entitlement.
		$("#fieldsetCompanyType").find(":radio").click(function () {
			jQuery('html, body').animate({ scrollTop: $(this).offset().top }, 1200);
			var callBackFunction = null;
			isUnincorpAssociation = false;

			if (this.id === "rdCompanyBody") {
				callBackFunction = function () {
					$("#divEstablished").show();
				}
			}

			if (this.id === "rdCompanySole") {
				callBackFunction = function () {
					$("#lbCorpOrSole").html("corporation sole");
					$("#divEstablished").show();
				}
			}

			if (this.id === "rdCompanyStrata") {
				callBackFunction = function () {
					$("#divRegistered").show();
				}
			}
			if (this.id === "rdCompanyCooperative") {

				callBackFunction = function () {
					$("#lbStrataCoop").html("Co-operative");
					$("#divRegistered").show();
				}
			}
			if (this.id === "rdCompanyAssociation") {
				callBackFunction = function () {
					$("#divIncorporatedWithJurisdiction").show();
				}
			}
			if (this.id === "rdCompanyUnIncorpAssociation") {
				callBackFunction = function () {
					$("#divBizStart").show();
					$("#pIncorporateAssociation").show();
					$("#divWhereYourBusinessOperate").show();
					$("#divWhatYouWillDo").hide();
					$("#fieldsetAbnEligibility").slideDown();
					isUnincorpAssociation = true;
					inAustraliaMatters = true;
				}
			}
			if (this.id === "rdCompanyForeign") {
				callBackFunction = function () {
					$("#divAsic").show();
					$("#divWhereYourBusinessOperate").show();
					$("#fieldsetAbnEligibility").slideDown();
					inAustraliaMatters = true;
				};
			}

			if (this.id === "rdCompanyOtherUnincorp") {
				callBackFunction = function () {
					$(".validation").hide();
					$("#divWhatYouWillDo").hide();
					$("#divNoneOfTheAboveComTypeNotEntitled").slideDown();
				}
			}

			loadEntitlementQuestions("entitlement/entitlement-company-content.html", true, callBackFunction);
			loadEntitlementHlep("entitlement/entitlement-company-help.html");
		});
	});

   function initialiseLogicForEntitlement() {
		/* Expand collapse headings config */

		isStarted = false;
		inAustraliaMatters = false;
		isUnincorpAssociation = false;
		// where you run your business
		$('[id^=whereBusinessWillOperate]').click(function () {
			// jQuery('html, body').animate({ scrollTop: $(this).offset().top }, 1200);
			if (this.id === "whereBusinessWillOperate1") {
				clearElement("#divBusinessActivity");
				$("#divNoneOfActivityInAustralia").hide();
				$("#divBusinessActivity").slideUp();
			} else {
				if (isGst) {
					$("#pGst").show();
				} else {
					$("#pNoGst").show();
				}
				$("#divEligible").hide();
				$("#divBusinessActivity").slideDown();
			}
		});

		// what your business does
		$('[id^=whatBusinessWillDo]').click(function () {
			//jQuery('html, body').animate({ scrollTop: $(this).offset().top }, 1200);
			if (this.id === "whatBusinessWillDoNone") {
				$("#divEligible").hide();
				clearElement("#divWhereYourBusinessOperate");
				$("#divNoneOfAbove").show();
				clearElement("#divBusinessActivity");
				$("#divBusinessActivity").slideUp();
				$("#divNoneOfActivityInAustralia").hide();
			} else {
				$("#divNoneOfAbove").hide();
			}
		});

		// sole trader questions:
		$('input[name=act-in-australia]').click(function () {
			clearActivity();
			if (this.id == 'in-australia-yes') {
				$('#divIndirectTaxZone').hide();
				$('#divGSTOnly').hide();
				$('#divNotEntitled1').hide();
				$('input[name=rdIndirectTax]').prop('checked', false);
				$('input[name=rdGSTOnly]').prop('checked', false);
				$('#divEligible1').hide();
				// go on
				$('#divStartedBusiness').show(function () {
					$('html, body').animate({ scrollTop: $('#divStartedBusiness').offset().top });
				});

			} else {
				clearElement("#divStartedBusiness");
				$("#divNotStartedMessage").hide();
				$('#divStartedBusiness').hide();
				$('#divIndirectTaxZone').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divIndirectTaxZone').offset().top });
				});
				$('#divGSTOnly').hide();
				$('#divNotEntitled1').hide();
				$('#divEligible1').hide();
			}
		});

		$('input[name=rdIndirectTax]').click(function () {
			clearActivity();
			if (this.id == 'rdIndirectTaxYes') {
				$('#divGSTOnly').hide('fast');
				$('input[name=rdGSTOnly]').prop('checked', false);
				$('#divNotEntitled1').hide();
				$('#divEligible1').hide();
				// go on
				$('#divStartedBusiness').show(function () {
					$('html, body').animate({ scrollTop: $('#divStartedBusiness').offset().top });
				});
			} else {
				clearElement("#divStartedBusiness");
				$("#divNotStartedMessage").hide();
				$('#divStartedBusiness').hide();
				$('#divGSTOnly').show(function () {
					$('html, body').animate({ scrollTop: $('#divGSTOnly').offset().top });
				});
			}
		});

		$('input[name=rdGSTOnly]').click(function () {
			clearActivity();
			if (this.id == 'rdGSTOnlyYes') {
				$('#divNotEntitled1').hide('fast', function() {
					$('#divEligible1').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible1').offset().top });
					});
				});
			} else {
				$('#divEligible1').hide('fast', function () {
					$('#divNotEntitled1').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEntitled1').offset().top });
					});
				});
			}
		});

	   // business started yet
		$("#rdStartedYes").click(function () {
			$("#divNotStartedMessage").hide();
			$('#divBusinessFunction').show('fast', function () {
				$('html, body').animate({ scrollTop: $('#divBusinessFunction').offset().top });
			});
			isStarted = true;
		});
		$("#rdStartedNo").click(function () {
			isStarted = false;
			$('#divBusinessFunction').hide();
			clearElement("#divBusinessFunction");
			$("#divNotStartedMessage").show('fast');
			// $("#divNoneOfActivityInAustralia").hide();
			// $("#divNoneOfAbove").hide();
		});

		function clearActivity() {
			$('#divNotEntitledApprentice').hide();
			$('#divFormOfBusiness, #divNotEntitledBusiness').hide();
			$('#divRenting, #divNotEntitledRenting').hide();
			$('#divLicence, #divNotEntitledLicence').hide();
			$('#divCommercial, #divNotEntitledCommercial').hide();
			$('#divEligible2').hide();
			clearElement('#divBusinessFunction');
			// $.map(['#divFormOfBusiness', '#divRenting', '#divLicence', '#divCommercial'], clearElement);
			$('#divBusinessFunction').hide();
		}

	   // Nature of activity
		$('input[name=whatBusinessWillDo]').click(function () {
			$('#divNotEntitledApprentice').hide();
			$('#divFormOfBusiness, #divNotEntitledBusiness').hide();
			$('#divRenting, #divNotEntitledRenting').hide();
			$('#divLicence, #divNotEntitledLicence').hide();
			$('#divCommercial, #divNotEntitledCommercial').hide();
			$('#divEligible2').hide();
			$.map(['#divFormOfBusiness', '#divRenting', '#divLicence', '#divCommercial'], clearElement);
			switch (this.id) {
				case 'whatBusinessWillDoApprentice':
					$('#divNotEntitledApprentice').show('fast');
					$('html, body').animate({ scrollTop: $('#divNotEntitledApprentice').offset().top }, 1200);
					break;
				case 'whatBusinessWillDoBusiness':
					$('#divFormOfBusiness').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divFormOfBusiness').offset().top }, 1200);
					});
					break;
				case 'whatBusinessWillDoRent':
					$('#divRenting').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divRenting').offset().top }, 1200);
					});
					break;
				case 'whatBusinessWillDoLicence':
					$('#divLicence').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divLicence').offset().top }, 1200);
					});
					break;
				case 'whatBusinessWillDoCommercial':
					$('#divCommercial').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divCommercial').offset().top }, 1200);
					});
					break;
				case 'whatBusinessWillDoGift':
				case 'whatBusinessWillDoCharity':
					$('#divEligible2').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible2').offset().top }, 1200);
					});
					break;
			}
		});
	   
		$('input[name=rdRunBusiness]').click(function () {
			if (this.id == 'rdRunBusinessYes') {
				$('#divNotEntitledBusiness').hide('fast', function () {
					$('#divEligible2').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible2').offset().top }, 1200);
					});
				});
			} else {
				$('#divEligible2').hide('fast', function () {
					$('#divNotEntitledBusiness').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEntitledBusiness').offset().top }, 1200);
					});
				});
			}
		});
	   
		$('input[name=rdRenting]').click(function () {
			if (this.id == 'rdRentingYes') {
				$('#divNotEntitledRenting').hide('fast', function () {
					$('#divEligible2').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible2').offset().top }, 1200);
					});
				});
			} else {
				$('#divEligible2').hide('fast', function () {
					$('#divNotEntitledRenting').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEntitledRenting').offset().top }, 1200);
					});
				});
			}
		});
	   
		$('input[name=rdLicence]').click(function () {
			if (this.id == 'rdLicenceYes') {
				$('#divNotEntitledLicence').hide('fast', function () {
					$('#divEligible2').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible2').offset().top }, 1200);
					});
				});
			} else {
				$('#divEligible2').hide('fast', function () {
					$('#divNotEntitledLicence').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEntitledLicence').offset().top }, 1200);
					});
				});
			}
		});
	   
		$('input[name=rdCommercial]').click(function () {
			if (this.id == 'rdCommercialYes') {
				$('#divNotEntitledCommercial').hide('fast', function () {
					$('#divEligible2').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divEligible2').offset().top }, 1200);
					});
				});
			} else {
				$('#divEligible2').hide('fast', function () {
					$('#divNotEntitledCommercial').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEntitledCommercial').offset().top }, 1200);
					});
				});
			}
		});

	   // Partnership questions:
		$('input[name=rdTypeOfPartnership]').click(function () {
			$('#divInAustralia').show('fast', function() {
				$('html, body').animate({ scrollTop: $('#divInAustralia').offset().top }, 1200);
			});
		});

	   // Trust questions:
		$('input[name=trustType]').click(function () {
			if (this.id == 'trustDeceasedEstate') {
				$('#divTrustDeed').hide();
				$('#divEstate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divEstate').offset().top }, 1200);
				});
			} else {
				$('#divEstate').hide();
				$('#divTrustDeed').show('fast', function () {
				  $('html, body').animate({ scrollTop: $('#divTrustDeed').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdExecutor]').click(function () {
			if (this.id == 'rdExecutorYes') {
				$('#divNotEligibleContinuing').hide();
				$('#divNotEligibleExecutor').hide();
				$('#divEligibleEstate').hide();
				clearElement('#divContinuing');
				$('#divContinuing').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divContinuing').offset().top }, 1200);
				});
			} else {
				$('#divContinuing').hide();
				$('#divNotEligibleContinuing').hide();
				$('#divEligibleEstate').hide();
				$('#divNotEligibleExecutor').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleExecutor').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdFinalise]').click(function () {
			if (this.id == 'rdFinaliseYes') {
				$('#divNotEligibleContinuing').hide();
				$('#divNotEligibleExecutor').hide();
				$('#divEligibleEstate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divEligibleEstate').offset().top }, 1200);
				});
			} else {
				$('#divNotEligibleContinuing').hide();
				$('#divEligibleEstate').hide();
				$('#divNotEligibleExecutor').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleExecutor').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdDeed]').click(function () {
			if (this.id == 'rdDeedYes') {
				$('#divNotEligibleDeed').hide();
				$('#divWhereYourBusinessOperate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divWhereYourBusinessOperate').offset().top }, 1200);
				});
			} else {
				$('#divWhereYourBusinessOperate').hide();
				$('#divNotEligibleDeed').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleDeed').offset().top }, 1200);
				});
			}
		});

		// company questions
		$('input[name=coType]').click(function () {
			$('#divCorporate').hide();
			clearElement('#divCorporate');
			$('#divNotEligibleCorp').hide();
			$('#publicCo').hide(); $('#privateCo').show();
			$("#public-co, #private-co").hide();
			$('#divEligibleCorp').hide();
			$('#divTrustDeed').hide();
			clearElement('#divTrustDeed');
			$('#divCoopStrata').hide();
			clearElement('#divCoopStrata');
			$('#divNotEligibleCoopStrata').hide();
			$('.coop-elt').hide(); $('.strata-elt').show();
			$('#divWhereYourBusinessOperate').hide();
			clearElement('#divWhereYourBusinessOperate');
			$('#divStartedBusiness').hide();
			clearElement('#divStartedBusiness');
			$('#divUnincorp').hide();
			clearElement('#divUnincorp');
			$('#divNotEligibleUnincorp').hide();
			$('#divOtherIncorporated').hide();
			clearElement('#divOtherIncorporated');
			
			switch (this.id) {
				case 'coPublic':
					$("#public-co").show("fast");
					break;
					//$('#publicCo').show(); $('#privateCo').hide();
				case 'coPrivate':
					$("#private-co").show("fast");
					//$('#divCorporate').show('fast', function () {
					 //   $('html, body').animate({ scrollTop: $('#divCorporate').offset().top }, 1200);
					//});
					break;
				case 'coUnitTrust':
				case 'coFirstHomeSaver':
				case 'coPublicTrading':
					$('#divTrustDeed').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divTrustDeed').offset().top }, 1200);
					});
					break;
				case 'coCoop':
					$('.coop-elt').show(); $('.strata-elt').hide();
				case 'coStrata':
					$('#divCoopStrata').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divCoopStrata').offset().top }, 1200);
					});
					break;
				case 'coPartnership':
					$('#divWhereYourBusinessOperate').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divWhereYourBusinessOperate').offset().top }, 1200);
					});
					break;
				case 'coUnincorp':
					$('#divUnincorp').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divUnincorp').offset().top }, 1200);
					});
					break;
				case 'coOtherInc':
					$('#divOtherIncorporated').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divOtherIncorporated').offset().top }, 1200);
					});
					break;
			}
		});

		$('input[name=rdRegistered').click(function () {
			if (this.id == 'rdRegisteredYes') {
				$('#divNotEligibleCorp').hide();
				$('#divEligibleCorp').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divEligibleCorp').offset().top });
				});
			} else {
				$('#divEligibleCorp').hide();
				$('#divNotEligibleCorp').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleCorp').offset().top });
				});
			}
		});

		$('input[name=rdCoopStrata').click(function () {
			if (this.id == 'rdCoopStrataYes') {
				$('#divNotEligibleCoopStrata').hide();
				$('#divWhereYourBusinessOperate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divWhereYourBusinessOperate').offset().top }, 1200);
				});
			} else {
				$('#divWhereYourBusinessOperate').hide();
				$('#divNotEligibleCoopStrata').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleCoopStrata').offset().top });
				});
			}
		});

		$('input[name=rdUnincorp').click(function () {
			if (this.id == 'rdUnincorpYes') {
				$('#divNotEligibleUnincorp').hide();
				$('#divWhereYourBusinessOperate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divWhereYourBusinessOperate').offset().top }, 1200);
				});
			} else {
				$('#divWhereYourBusinessOperate').hide();
				$('#divNotEligibleUnincorp').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleUnincorp').offset().top }, 1200);
				});
			}
		});

		$('input[name=otherType]').click(function () {
			$('#divNotEligibleOther').hide();
			$('#other-msgs div').hide();
			$('#otherQuestion').hide();
			$('#otherQuestion h3').hide();
			clearElement('#otherQuestion');
			switch (this.id) {
				case 'otherNone':
					$('#msgNone').show();
					$('#divNotEligibleOther').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divNotEligibleOther').offset().top }, 1200);
					});
					break;
				case 'otherBodyCorp':
					$('#otherBodyCorpQ').show();
					$('#msgBodyCorp').show();
					break;
				case 'otherSole':
					$('#otherSoleQ').show();
					$('#msgSole').show();
					break;
				case 'otherForeign':
					$('#otherForeignQ').show();
					$('#msgForeign').show();
					break;
				case 'otherAssociation':
					$('#otherAssociationQ').show();
					$('#msgAssociation').show();
					break;
			}
			if (this.id != 'otherNone') {
				$('#otherQuestion').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#otherQuestion').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdOther').click(function () {
			if (this.id == 'rdOtherYes') {
				$('#divNotEligibleOther').hide();
				$('#divWhereYourBusinessOperate').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divWhereYourBusinessOperate').offset().top }, 1200);
				});
			} else {
				$('#divWhereYourBusinessOperate').hide();
				$('#divNotEligibleOther').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleOther').offset().top }, 1200);
				});
			}
		});

		var reverse = false;

	   // superannuation
		$('input[name=superType]').click(function () {
			$('#divNotEligibleSuper').hide();
			$('#divEligibleSuper').hide();
			$('#other-msgs div').hide();
			$('#superQuestion').hide();
			$('#superQuestion h3').hide();
			clearElement('#superQuestion');
			$('#divATORegulated').hide();
			clearElement('#divATORegulated');
			reverse = false;
			switch (this.id) {
				case 'superATO':
					$('#divATORegulated').show('fast', function () {
						$('html, body').animate({ scrollTop: $('#divATORegulated').offset().top }, 1200);
					});
					break;
				case 'superAPRA':
					$('#APRAQ').show();
					$('#msgAPRA').show();
					break;
				case 'superNonReg':
					reverse = true;
					$('#nonRegQ').show();
					$('#msgNonReg').show();
					break;
				case 'superPooled':
					$('#pooledQ').show();
					$('#msgPooled').show();
					break;
				case 'superDeposit':
					$('#depositQ').show();
					$('#msgDeposit').show();
					break;
			}
			if (this.id != 'superATO') {
				$('#superQuestion').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#superQuestion').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdSuper').click(function () {
			if ((this.id == 'rdSuperYes' && !reverse) || (this.id == 'rdSuperNo' && reverse)) {
				$('#divNotEligibleSuper').hide();
				$('#divEligibleSuper').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divEligibleSuper').offset().top }, 1200);
				});
			} else {
				$('#divEligibleSuper').hide();
				$('#divNotEligibleSuper').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleSuper').offset().top }, 1200);
				});
			}
		});

		function resetATORegulate(from) {
			switch (from) {
				case 'all':
				case 'continuing':
					$('#divTerm').hide();
					clearElement('#divTerm');
				case 'term':
					$('#divAssetsValue').hide();
					clearElement('#divAssetsValue');
				case 'assets':
					$('#divGoverning').hide();
					clearElement('#divGoverning');
				case 'governing':
					$('#divEligibleATO').hide();
					$('#divNotEligibleATO').hide();
			}
		}

		$('input[name=rdContinuing]').click(function () {
			resetATORegulate('continuing')
			if (this.id == 'rdContinuingYes') {
				$('#divTerm').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divTerm').offset().top }, 1200);
				})
			} else {
				$('#ato-msgs div').hide();
				$('#msgContinuing').show();
				$('#divNotEligibleATO').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleATO').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdTerm]').click(function () {
			resetATORegulate('term')
			if (this.id == 'rdTermYes') {
				$('#divAssetsValue').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divAssetsValue').offset().top }, 1200);
				})
			} else {
				$('#ato-msgs div').hide();
				$('#msgTerm').show();
				$('#divNotEligibleATO').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleATO').offset().top }, 1200);
				});
			}
		});

		$('input[name=rdAssets]').click(function () {
			resetATORegulate('assets')
			if (this.id == 'rdZero') {
				$('#ato-msgs div').hide();
				$('#msgNoAssets').show();
				$('#divNotEligibleATO').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleATO').offset().top }, 1200);
				});
			} else {
				$('#divGoverning').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divGoverning').offset().top }, 1200);
				})
			}
		});

		$('input[name=rdGoverning]').click(function () {
			resetATORegulate('governing')
			if (this.id == 'rdGoverningYes') {
				$('#divEligibleATO').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divEligibleATO').offset().top }, 1200);
				})
			} else {
				$('#ato-msgs div').hide();
				$('#msgGoverning').show();
				$('#divNotEligibleATO').show('fast', function () {
					$('html, body').animate({ scrollTop: $('#divNotEligibleATO').offset().top }, 1200);
				});
			}
		});

	   // do you do any following activity
		$("#rdAnyActivityYes").click(function () {
			$("#divNoneOfActivityInAustralia").hide();
		});
		$("#rdAnyActivityNo").click(function () {
			$("#divNoneOfActivityInAustralia").show();
			$(".abnEntitled").hide();
		});

		$("#divHiddenCompanyQuesitons").find(":radio").click(function () {
			// if foreign company not registered with ASIC
			if (this.id === "rdAsicNo") {
				$("#divForeignCompanyNotEntitled").slideDown();
			}
			// if foreign company registered with ASIC
			if (this.id === "rdAsicYes") {
				$("#divForeignCompanyNotEntitled").hide();
			}

			// association
			if (this.id === "rdAssociationStarted") {
				$("#divNotStartedMessage").hide();
			}

			if (this.id === "rdAssociationNotStarted") {
				$("#divNotStartedMessage").show();
			}

			// strata title or cooperative
			if (this.id === "rdRegisteredYes") {
				$("#divRegisteredNotEntitled").hide();
			}
			if (this.id === "rdRegisteredNo") {
				$("#divRegisteredNotEntitled").show();
			}

			// sole and body
			if (this.id === "rdEstablishedYes") {
				$("#divEstablishedNotEntitled").hide();
			}
			if (this.id === "rdEstablishedNo") {
				$("#divEstablishedNotEntitled").show();

			}
			// incorporation association
			if (this.id === "rdIncorporatedYes") {
				$("#divrdIncorporatedNotEntitled").hide();
			}

			if (this.id === "rdIncorporatedNo") {
				$("#divrdIncorporatedNotEntitled").show();
			}

			if (this.value === "1") {
				isStarted = true;
			} else if (this.value === "0") {
				isStarted = false;
				$(".abnEntitled").hide();
				clearElement($("#divWhatYouWillDo"));
				clearElement($("#divWhereYourBusinessOperate"));
				clearElement($("#divBusinessActivity"));
				$("#divNoneOfActivityInAustralia").hide();
				$("#divEligible").hide();
				$("#divNoneOfAbove").hide();
			}
		});

		$("#fieldsetAbnEligibility").find(":radio").click(function () {

			var isInAustralia = $("#whereBusinessWillOperate1").prop("checked");
			var noneOfBusinessWillDo = false;
			var willDoSomeBusiness = false;
			var isAnyActivityAssociateWithAus = $("#rdAnyActivityYes").prop("checked");
			$("#divWhatYouWillDo").find(":radio").each(function (i, item) {
				if ($(item).prop("checked")) {
					if (item.id === "whatBusinessWillDoNone") {
						noneOfBusinessWillDo = true;
					} else {
						willDoSomeBusiness = true;
					}
				}
			});
			if (isStarted && (willDoSomeBusiness || isUnincorpAssociation)) {
				if (inAustraliaMatters) {
					if (isInAustralia || isAnyActivityAssociateWithAus) {
						$("#divEligible").show();
						jQuery('html, body').animate({ scrollTop: $('#divEligible').offset().top }, 1200);
					}
				} else {
					$("#divEligible").show();
					jQuery('html, body').animate({ scrollTop: $('#divEligible').offset().top }, 1200);
				}

			} else {
				$("#divEligible").hide();
				// jQuery('html, body').animate({ scrollTop: $(this).offset().top }, 1200);
			}
		});
	}

	function loadEntitlementQuestions(url, autoSlideDown, callBack) {
		if (autoSlideDown === undefined) {
			autoSlideDown = true;
		}
		if (autoSlideDown) {
			$("#fieldsetAbnEligibility").load(url + "?t=" + (new Date()).getTime(), function () {
				setTimeout(initialiseLogicForEntitlement, 0);
				if (callBack !== undefined && callBack !== null) {
					setTimeout(callBack, 0);
				}
			}).slideDown();
		} else {
			$("#fieldsetAbnEligibility").load(url + "?t=" + (new Date()).getTime(), function () {
				if (callBack !== undefined && callBack !== null) {
					setTimeout(callBack, 0);
				}
				setTimeout(initialiseLogicForEntitlement, 10);
			});
		}

	}

	function loadEntitlementHlep(url) {
		$("#helpFile").load(url + "?t=" + (new Date()).getTime(), function () {
			setTimeout(initHelp, 10);
		});
	}

	function fieldsetAbnEligibilityClear() {
		clearElement("#divWhatYouWillDo");
		clearElement("#divBusinessActivity");
		clearElement("#fieldsetAbnEligibility");
		clearElement("#divWhereYourBusinessOperate");
		$("#divNoneOfActivityInAustralia").hide();
		$("#divEligible").hide();
		$("#divNoneOfAbove").hide();
	}

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
</script>
