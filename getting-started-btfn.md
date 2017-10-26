---
title: Getting started
layout: default
---

<div class="progress-container">
	<div class="progress-bar">
		<span id="progress-percent" role="progressbar" aria-valuetext="step 1 of 3 steps" style="width:22.65%"></span>
	</div><!-- meter -->

	<ul class="section-nav">
		<li class="bookend"><a href="/registration/type?appid=660"><span>‹</span><br>Select<br> registrations<span class="visually-hidden"> (completed)</span></a></li>
			<li class="active" style="width: 25.3%">
					<span class="visually-hidden">Step </span><span>1</span><br>Getting<br> started                        <span class="visually-hidden"> (current step)</span>
			</li>
			<li class="" style="width: 25.3%">
					<span class="visually-hidden">Step </span><span>2</span><br>Business<br> details                        <span class="visually-hidden"> (not completed)</span>
			</li>
			<li class="" style="width: 25.3%">
					<span class="visually-hidden">Step </span><span>3</span><br>Confirm<br> application                        <span class="visually-hidden"> (not completed)</span>
			</li>
		<!-- TODO: link to dashboard of logged in user -->
		<li class="bookend right"><a href="/registration/dashboard"><span>›</span><br>Application<br> summary</a></li>
	</ul>
</div>

<h1>{{ page.title }}</h1>

<div id="ajax-container-for-entitlement">
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


        <div class="sub-section-container sub-section-open" role="region" aria-labelledby="section-heading-2">
            <h2 id="section-heading-2">Entity details<span class="visuallyhidden"> (current section)</span></h2>

<div class="sub-section-content">

    <fieldset id="fieldsetBusinessEntityTypes" class="col12 required">
        <legend class="larger">
            For taxation purposes, which type of entity is the applicant? 
            <br><span class="field-note">Select a business structure that best describes the business. If you need help deciding on a business structure, see our <a href="/../helpmedecide/helpmedecide">Help me decide tool</a>.</span>
        </legend>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p>
					<input class="ajax-radio" data-ajax-action="kymSXViSDwYzf6rM9VeCECfOHzRM8m0uMXSqDC2OSiw=" data-ajax-value="__cvg__BCYO/NcQ/jJrzDKorfu2HYuKIuK5ogxv76dv9R9nfBc=" id="company-cb" name="AbnEntitlementDetails.EntityTypeId" type="radio" value="4">
					<label for="company-cb" id="entitytype_coy_lbl">
						Company <a class="cd-btn help" href="#help-entitlemententitytypecoy"><span>Help - Company</span></a>
						<br><span class="field-note">A company is a separate legal entity from you, and has at least one shareholder or member and one director (who runs the business). Income and losses belong to the company. Companies can employ staff. </span>
					</label>
				</p>
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p>
					<input class="ajax-radio" data-ajax-action="kymSXViSDwYzf6rM9VeCECfOHzRM8m0uMXSqDC2OSiw=" data-ajax-value="__cvg__BCYO/NcQ/jJrzDKorfu2HYuKIuK5ogxv76dv9R9nfBc=" id="trust-cb" name="AbnEntitlementDetails.EntityTypeId" type="radio" value="3">
					<label for="trust-cb" id="entitytype_trt_lbl">
						Trust <a class="cd-btn help" href="#help-entitlemententitytypetrt"><span>Help - Trust</span></a>
						<br><span class="field-note">Your business or businesslike activity is held and controlled for the benefit of others (the beneficiaries). A trustee is responsible for everything in the trust, including income and losses.</span>
					</label>
				</p>
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p>
					<input class="ajax-radio" data-ajax-action="kymSXViSDwYzf6rM9VeCECfOHzRM8m0uMXSqDC2OSiw=" data-ajax-value="__cvg__BCYO/NcQ/jJrzDKorfu2HYuKIuK5ogxv76dv9R9nfBc=" id="partnership-cb" name="AbnEntitlementDetails.EntityTypeId" type="radio" value="2">
					<label for="partnership-cb" id="entitytype_ptr_lbl">
						Partnership <a class="cd-btn help" href="#help-entitlemententitytypeptr"><span>Help - Partnership</span></a>
						<br><span class="field-note">You and your partners carry on a business together and share income, losses and control of the business. The partnership can employ staff, but the partners in the partnership are not considered employees.</span>
					</label>
				</p>
			</div>
		</div>
    </fieldset>
	<fieldset id="company-subtypes" class="col12 entitysubtype required" style="display: none;">
        <legend class="larger has-help">Please select one of the following entity sub types for the applicant</legend>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId31" type="radio" value="31">
                        <label for="AbnEntitlementDetails_EntitySubTypeId31">
                            Australian Public Company <a class="cd-btn help" href="#help-entitlemententitysubtypepub"><span>Help - Public company</span></a>
                            <br><span class="field-note">Public companies can sell shares to the public to raise funds They can have an unlimited number of shareholders.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId32" type="radio" value="32">
                        <label for="AbnEntitlementDetails_EntitySubTypeId32">
                            Australian Private Company <a class="cd-btn help" href="#help-entitlemententitysubtypeprv"><span>Help - Private company</span></a>
                            <br><span class="field-note">Private companies <strong>can't</strong> raise funds from the public by selling shares. They must have 50 or fewer shareholders.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId33" type="radio" value="33">
                        <label for="AbnEntitlementDetails_EntitySubTypeId33">
                            Co-operative <a class="cd-btn help" href="#help-entitlemententitysubtypecop"><span>Help - Co-operative</span></a>
                            <br><span class="field-note">Co-operatives are owned and controlled by members, and operate for the benefit of their members. For example, food co-ops selling food at a lower price to members.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="other-incorp-cb" type="radio" value="34">
                        <label for="other-incorp-cb">
                            Other Incorporated Entity <a class="cd-btn help" href="#help-entitlemententitysubtypeoie"><span>Help - Other incorporated entity</span></a>
                            <br><span class="field-note">Organisations that are like companies but not incorporated under the <em>Corporations Act 2001</em> (such as foreign companies and associations incorporated under state acts).</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId35" type="radio" value="35">
                        <label for="AbnEntitlementDetails_EntitySubTypeId35">
                            Strata-title <a class="cd-btn help" href="#help-entitlemententitysubtypestr"><span>Help - Strata title</span></a>
                            <br><span class="field-note">Where a title to a property is divided into a number of units for sale. </span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId52" type="radio" value="52">
                        <label for="AbnEntitlementDetails_EntitySubTypeId52">
                            Public Trading Trust <a class="cd-btn help" href="#help-entitlemententitysubtypeptt"><span>Help - Public trading trust</span></a>
                            <br><span class="field-note">Trusts created to finance or get an interest in the operation or development of a business or project.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId54" type="radio" value="54">
                        <label for="AbnEntitlementDetails_EntitySubTypeId54">
                            Other Unincorporated Entity <a class="cd-btn help" href="#help-entitlemententitysubtypeuie"><span>Help - Other unincorporated entity</span></a>
                            <br><span class="field-note">Organisations that are formed by a number of people for a common purpose and that <strong>aren't</strong> registered with any government authorities.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio comp-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId57" type="radio" value="57">
                        <label for="AbnEntitlementDetails_EntitySubTypeId57">
                            Limited Partnership <a class="cd-btn help" href="#help-entitlemententitysubtypelpt"><span>Help - Limited partnership</span></a>
                            <br><span class="field-note">Partnerships made up of at least one general partner and one limited partner.</span>
                        </label>
                    </p>
                </div>
            </div>
    </fieldset>
	
	<fieldset id="other-incorp-types" class="entitysubtype col12 required" style="display: none;">
        <legend class="larger">Which of the following are you? 
            
        </legend>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p><input class="final-step" id="AbnEntitlementDetails_Questions_22__SelectedAnswerId_50" name="AbnEntitlementDetails.Questions[0].SelectedAnswerId" type="radio" value="50">
				

					<label id="whichofthefollowingareyou_abodycorporate" for="AbnEntitlementDetails_Questions_22__SelectedAnswerId_50">A body corporate <a class="cd-btn help" href="#help-entitlementanswer50"><span>Help - Body corporate</span></a>
						<br><span class="field-note">Body corporates are set up under common law or an Act of Parliament, or registered under a statute. </span>
					</label>
				</p>
				
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p><input class="final-step" id="AbnEntitlementDetails_Questions_22__SelectedAnswerId_51" name="AbnEntitlementDetails.Questions[0].SelectedAnswerId" type="radio" value="51">
				

					<label id="whichofthefollowingareyou_acorporationsole" for="AbnEntitlementDetails_Questions_22__SelectedAnswerId_51">A corporation sole <a class="cd-btn help" href="#help-entitlementanswer51"><span>Help - Corporation sole</span></a>
						<br><span class="field-note">A corporation that consists of a particular position, such as a bishop in a church.</span>
					</label>
				</p>
				
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p><input class="final-step" id="AbnEntitlementDetails_Questions_22__SelectedAnswerId_52" name="AbnEntitlementDetails.Questions[0].SelectedAnswerId" type="radio" value="52">
				

					<label id="whichofthefollowingareyou_aforeigncompany" for="AbnEntitlementDetails_Questions_22__SelectedAnswerId_52">A foreign company <a class="cd-btn help" href="#help-entitlementanswer52"><span>Help - Foreign company</span></a>
						<br><span class="field-note">Companies set up outside Australia or in an external territory of Australia (such as Christmas Island).</span>
					</label>
				</p>
				
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p><input class="final-step" id="AbnEntitlementDetails_Questions_22__SelectedAnswerId_53" name="AbnEntitlementDetails.Questions[0].SelectedAnswerId" type="radio" value="53">
				

					<label id="whichofthefollowingareyou_anincorporatedassociation" for="AbnEntitlementDetails_Questions_22__SelectedAnswerId_53">An incorporated association  <a class="cd-btn help" href="#help-entitlementanswer53"><span>Help - Incorporated association</span></a>
						<br><span class="field-note">Organisations like clubs or community groups that are incorporated under state or territory law.</span>
					</label>
				</p>
				
			</div>
		</div>
		<div class="grid-row">
			<div class="col12 custom-controls">
				<p><input class="final-step" id="AbnEntitlementDetails_Questions_22__SelectedAnswerId_401" name="AbnEntitlementDetails.Questions[0].SelectedAnswerId" type="radio" value="401">
				

					<label id="whichofthefollowingareyou_corporationsaboriginalandtorresstraitislander" for="AbnEntitlementDetails_Questions_22__SelectedAnswerId_401">Corporations (Aboriginal and Torres Strait Islander) <a class="cd-btn help" href="#help-entitlementanswer401"><span>Help - Corporations (Aboriginal and Torres Strait Islander)</span></a>
						
					</label>
				</p>
				
			</div>
		</div>
    </fieldset>

	<fieldset id="trust-subtypes" class="col12 entitysubtype required" style="display: none;">
        <legend class="larger has-help">
            Please select one of the following entity sub types for the applicant 
            
        </legend>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId41" type="radio" value="41">
                        <label for="AbnEntitlementDetails_EntitySubTypeId41">
                            Deceased Estate <a class="cd-btn help" href="#help-entitlemententitysubtypedes"><span>Help - Deceased estate</span></a>
                            <br><span class="field-note">Used to finalise the estate (e.g. a business or property) of a deceased owner.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId42" type="radio" value="42">
                        <label for="AbnEntitlementDetails_EntitySubTypeId42">
                            Cash Management Trust <a class="cd-btn help" href="#help-entitlemententitysubtypecmt"><span>Help - Cash management trust</span></a>
                            <br><span class="field-note">Used to combine the small investments of individuals to help them access larger investment markets.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId44" type="radio" value="44">
                        <label for="AbnEntitlementDetails_EntitySubTypeId44">
                            Discretionary Investment Trust <a class="cd-btn help" href="#help-entitlemententitysubtypedit"><span>Help - Discretionary investment trust</span></a>
                            <br><span class="field-note">Where a trustee chooses how to distribute income from investment activities.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId45" type="radio" value="45">
                        <label for="AbnEntitlementDetails_EntitySubTypeId45">
                            Discretionary Services Management Trust <a class="cd-btn help" href="#help-entitlemententitysubtypedst"><span>Help - Discretionary services management trust</span></a>
                            <br><span class="field-note">Where a trustee chooses how to distribute income from services and/or management activities.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId46" type="radio" value="46">
                        <label for="AbnEntitlementDetails_EntitySubTypeId46">
                            Discretionary Trading Trust <a class="cd-btn help" href="#help-entitlemententitysubtypedtt"><span>Help - Discretionary trading trust </span></a>
                            <br><span class="field-note">Where a trustee chooses how to distribute income from trading activities.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId48" type="radio" value="48">
                        <label for="AbnEntitlementDetails_EntitySubTypeId48">
                            Fixed Unit Trust <a class="cd-btn help" href="#help-entitlemententitysubtypefut"><span>Help - Fixed unit trust </span></a>
                            <br><span class="field-note">Used to automatically distribute a prearranged amount or unit of income or capital to each beneficiary.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId49" type="radio" value="49">
                        <label for="AbnEntitlementDetails_EntitySubTypeId49">
                            Fixed Trust <a class="cd-btn help" href="#help-entitlemententitysubtypefxt"><span>Help - Fixed trust </span></a>
                            <br><span class="field-note">Used to automatically distribute a prearranged amount (e.g. percentage) of income or capital to each beneficiary.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId50" type="radio" value="50">
                        <label for="AbnEntitlementDetails_EntitySubTypeId50">
                            Hybrid Trust <a class="cd-btn help" href="#help-entitlemententitysubtypehyt"><span>Help - Hybrid trust </span></a>
                            <br><span class="field-note">Where a trustee distributes a prearranged amount of income or capital to beneficiaries, at their discretion.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId51" type="radio" value="51">
                        <label for="AbnEntitlementDetails_EntitySubTypeId51">
                            Unlisted Public Unit Trust <a class="cd-btn help" href="#help-entitlemententitysubtypepqt"><span>Help - Unlisted public unit trust </span></a>
                            <br><span class="field-note">Used to offer shares of the trust to the general public.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId53" type="radio" value="53">
                        <label for="AbnEntitlementDetails_EntitySubTypeId53">
                            Listed Public Unit Trust <a class="cd-btn help" href="#help-entitlemententitysubtypeput"><span>Help - Listed public unit trust </span></a>
                            <br><span class="field-note">Used to offer shares of the trust by listing on the stock exchange.</span>
                        </label>
                    </p>
                </div>
            </div>
    </fieldset>

    <fieldset id="partnership-subtypes" class="col12 entitysubtype required" style="display: none;">
        <legend class="larger has-help">
            Please select one of the following entity sub types for the applicant 
            
        </legend>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId56" type="radio" value="56">
                        <label for="AbnEntitlementDetails_EntitySubTypeId56">
                            Family Partnership 
                            <br><span class="field-note">Two or more members of the partnership are related in some way.</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="grid-row">
                <div class="col12 custom-controls">
                    <p>
                        <input name="AbnEntitlementDetails.EntitySubTypeId" class="ajax-radio final-step" data-ajax-action="kymSXViSDwYzf6rM9VeCEAWH10/zZ0GEzR0MdlP97DU=" data-ajax-value="__cvg__fA387yDv4Sk18+aNX8TE5rrpxZtipmjT4AlJSZV2q5A=" id="AbnEntitlementDetails_EntitySubTypeId58" type="radio" value="58">
                        <label for="AbnEntitlementDetails_EntitySubTypeId58">
                            Other Partnership 
                            <br><span class="field-note">All partners are equally responsible for the management of the business, its debts and obligations.</span>
                        </label>
                    </p>
                </div>
            </div>
    </fieldset>

    <div class="controls-container">
    <div class="controls-content">
<button class="btn cancel" name="wNjv11HSL2eBWG4934fyzQ==" type="submit" value="__cvg__3Vm2adfQYvusabNtBnBi9w==">Previous</button>
<button id="next-btn" class="btn btn-default next" disabled="disabled" type="submit" value="">Save and continue</button>    </div>
</div>
</div>


<a id="AbnEntitlementDetails_Bottom"></a>
<a id="AbnEntitlementDetails_EntityTypeId"></a>
<a id="AbnEntitlementDetails_EntitySubTypeId"></a>

         </div>
</div>
<script>

	$(document).ready(function() {
		$("footer").hide();
		$("#company-cb").click(function() {
			$(".entitysubtype").hide();
			$(".entitysubtype input[type=radio]").prop("checked", false);
			$("#company-subtypes").show();
		});
		$("#trust-cb").click(function() {
			$(".entitysubtype").hide();
			$(".entitysubtype input[type=radio]").prop("checked", false);
			$("#trust-subtypes").show();
		});
		$("#partnership-cb").click(function() {
			$(".entitysubtype").hide();
			$(".entitysubtype input[type=radio]").prop("checked", false);
			$("#partnership-subtypes").show();
		});
		$("#other-incorp-cb").click(function() {
			$("#other-incorp-types input[type=radio]").prop("checked", false);
			$("#other-incorp-types").show();
		});
		$(".comp-radio").click(function() {
			$("#other-incorp-types").hide();
		});
		$("input[type=radio]").click(function() {
			if ($(this).hasClass("final-step")) {
				$("#next-btn").prop("disabled", false);
				$('html, body').animate({ scrollTop: document.body.scrollHeight }, 500);
				//window.scrollTo(0, document.body.scrollHeight);
			} else {
				$("#next-btn").prop("disabled", true);
				window.setTimeout(function() {
					$('html, body').animate({ scrollTop: $("fieldset:visible").last().offset().top }, 500);
					//window.scrollTo(0, $("fieldset:last").offset().top);
				}, 10);
			}
			
		});
	});
</script>