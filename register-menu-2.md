---
title: Business registration
layout: default
---

<h1 id="heading" tabindex="-1" style="text-align: center; color: #3179b5; padding-bottom: 0;">{{ page.title }}</h1>
<p style="text-align: center; margin-bottom: 2em;">Your business and tax registrations in one place.</p>

<div style="width: 650px; margin: 0 auto;">
	<p>Answer the questions below so we can take you where you need to go.</p>
	<div id="sections" style="min-height: 350px;">
		<div id="reg-or-check">
			<fieldset class="custom-controls">
				<legend class="larger has-help">What do you want to do?</legend>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" name="wanttodo" data-dest="regos" id="opt-busreg" />
							<label class="no-margin" for="opt-busreg">I want to apply for business registrations</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="update-details" name="wanttodo" id="opt-update" />
							<label class="no-margin" for="opt-update">I want to update my details</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="check-existing" name="wanttodo" id="opt-status" />
							<label class="no-margin" for="opt-status">I want to check on the progress of my application</label>
						</p>
					</div>
				</div>
			</fieldset>
		</div>
		<div id="regos" data-parent="reg-or-check" style="display: none;">
			<fieldset class="custom-controls">
				<legend class="larger has-help">Do you have an Australian Business Number (ABN)?</legend>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="no-regs" name="myreg" id="opt-noregs" />
							<label class="no-margin" for="opt-noregs">I don't have any business registrations</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="have-abn" name="myreg" id="opt-alreadyhave" />
							<label class="no-margin" for="opt-alreadyhave">I have an ABN</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="" name="myreg" id="opt-inactive" />
							<label class="no-margin" for="opt-inactive">I have an ABN, but it&apos;s inactive</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="abn-ref" name="myreg" id="opt-reference" />
							<label class="no-margin" for="opt-reference">I have an ABN reference number</label>
						</p>
					</div>
				</div>
				<div class="grid-row">
					<div class="col11">
						<p>
							<input class="no-margin" type="radio" data-dest="no-abn" name="myreg" id="opt-notrequired" />
							<label class="no-margin" for="opt-notrequired">I don't need an ABN, I want to apply for a business name</label>
						</p>
					</div>
				</div>
			</fieldset>
		</div>
		<div id="no-regs" data-parent="regos" style="display: none;">
			<fieldset id="fieldsetAbn" class="col12 custom-controls">
				<legend class="larger">I don't have any business registrations, and I want to:</legend>
				<div class="col12 last">
					<p>
						<input id="apply" name="noregs" class="showhide-trigger" data-linkto="register" type="radio">
						<label for="apply">apply for an ABN, business name, company, TFN or taxes</label>
					</p>
					<p>
						<input id="helpme" name="noregs" data-linkto="help-me-decide/eligibility" type="radio">
						<label for="helpme">I&apos;m not sure what registrations I need, help me decide</label>
					</p>
				</div>
			</fieldset>
		</div>
		<div id="have-abn" data-parent="regos" style="display: none">
			<fieldset id="fieldsetCompanyAbn" class="custom-controls">
				<legend class="larger">I have an Australian Business Number, and I want to:</legend>
				<div class="grid-row">
					<p>
						<input id="addtaxes" name="haveabn" data-linkto="existing/tax-roles" type="radio" />
						<label for="addtaxes">apply for GST, PAYG withholding or other taxes</label>
					</p>
					<p>
						<input id="applybn" name="haveabn" data-linkto="haveabn-bn" type="radio" />
						<label for="applybn">apply for a business name</label>
					</p>
					<p>
						<input id="applyauskey" name="haveabn" data-linkto="auskey-new" type="radio" />
						<label for="applyauskey">apply for an administrator AUSkey</label>
					</p>
					<p>
						<input id="helptax" name="haveabn" data-linkto="help-me-decide/eligibility" type="radio" />
						<label for="helptax">I'm not sure which tax registrations I need, help me decide</label>
					</p>
				</div>
			</fieldset>
		</div>
		<div id="abn-ref" data-parent="regos" style="display: none;">
			<fieldset class="col12 custom-controls">
				<legend class="larger">I have an ABN reference number, and I want to:</legend>
				<div class="col12 last">
					<p>
						<input id="applybn2" name="abnref" class="showhide-trigger" type="radio">
						<label for="applybn2">apply for a business name</label>
					</p>
				</div>
			</fieldset>
		</div>
		<div id="no-abn" data-parent="regos" style="display: none;">
			<fieldset class="custom-controls">
				<legend class="larger">Why don't you need an ABN?<br>
					<span class="field-note">In most cases, you need an ABN to apply for a business name. You can apply without an ABN if you operate only on Christmas or Cocos Island or you're applying as a joint venture.</span>
				</legend>
				<div class="col12 last">
					<p>
						<input id="applybn3" name="dontneed" data-linkto="cocos-bn" type="radio">
						<label for="applybn3">I operate only on Christmas or Cocos Island</label>
					</p>
					<p>
						<input id="applytfn" name="dontneed" data-linkto="joint-venture-bn" type="radio">
						<label for="applytfn">I'm applying as a joint venture (all partners have an ABN)</label>
					</p>
					<p>
						<input id="needabn" name="dontneed" onclick="$('#btnPrevious').click();" type="radio">
						<label for="needabn">Neither of these apply, take me back</label>
					</p>
				</div>
			</fieldset>
		</div>
		<div id="update-details" data-parent="reg-or-check" style="display: none;">
			<fieldset id="fieldsetUpdate" class="col12 custom-controls">
				<legend class="larger">I want to update my details with:</legend>
				<div class="col12 last">
					<p>
						<input id="update-abn" name="reg-update" class="showhide-trigger" data-linkto="existing/aba-login?dest=../update-abn" type="radio">
						<label for="update-abn">Australian Business Register (ABR)<br><span class="field-note">Update details associated with your ABN registration.</span></label>
					</p>
					<p>
						<input id="update-asic" name="reg-update" data-linkto="existing/aba-login?dest=../update-asic" type="radio">
						<label for="update-asic">Australian Securities and Investments Commission (ASIC)<br><span class="field-note">Update details associated with your company or business names.</span></label>
					</p>
					<p>
						<input id="update-ato" name="reg-update" data-linkto="existing/aba-login?dest=../update-ato" type="radio">
						<label for="update-ato">Australian Taxation Office (ATO)<br><span class="field-note">Update details associated with your Tax registrations.</span></label>
					</p>
					<p>
						<input id="apply-for-auskey" name="reg-update" data-linkto="auskey-new" type="radio">
						<label for="apply-for-auskey">I don't have an AUSkey, I want to apply for one<br><span class="field-note">You need Governement credentials, such as an AUSkey to be able to review and make changes to your business registrations.</span></label>
					</p>
				</div>
				
				
			</fieldset>
		</div>
		<div id="check-existing" data-parent="reg-or-check" style="display: none;">
			<fieldset class="col12 custom-controls">
				<legend class="larger">I want to check on the progress of my:</legend>
				<div class="col12 last">
					<p>
						<input id="check1" name="checkexisting" data-linkto="existing/b2c-login.html?dest=dashboard-b2c" type="radio">
						<label for="check1">new business registrations</label>
					</p>
					<p>
						<input id="check2" name="checkexisting" data-linkto="existing/aba-login.html?dest=dashboard" type="radio">
						<label for="check2">additional tax registrations</label>
					</p>
					<p>
						<input id="check3" name="checkexisting" data-linkto="existing/b2c-login.html?dest=dashboard-b2c" type="radio">
						<label for="check3">administrator AUSkey application</label>
					</p>
					<p>
						<input id="check4" name="checkexisting" data-linkto="existing/aba-login.html?dest=dashboard" type="radio">
						<label for="check4">additional AUSkeys application</label>
					</p>
				</div>
			</fieldset>
		</div>
	</div>
		<div class="controls-container">
			<div class="controls-content">
				<button type="button" class="btn" id="btnPrevious" disabled>Previous</button>
				<button type="button" class="btn btn-default" id="btnContinue" disabled>Go &gt;</button>
			</div><!-- controls-content -->
		</div>
</div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>

<script type="text/javascript">

	$(document).ready(function () {
		$("input[type=radio]:checked").removeAttr("checked");
		$("input[type=radio]").click(function() {
			if ($(this).attr("data-dest") === undefined && $(this).attr("data-linkto") === undefined) return;
			var dest = $("#" + $(this).attr("data-dest"));
			$("#btnContinue").attr("disabled", true).attr("data-link", "");
			if ($(this).attr("data-dest") !== undefined) {
				$("#sections > div:visible").fadeOut("fast", function() {
					dest.fadeIn('fast');
					$("#btnPrevious").attr("data-backto", dest.attr("data-parent"));
					$("#btnPrevious").attr("disabled", false);
				});
			} else {
				$("#btnContinue").attr("disabled", false);
				$("#btnContinue").attr("data-link", $(this).attr("data-linkto"));
			}
		});
		
		$("#btnPrevious").click(function() {
			var backto = $(this).attr("data-backto");
			var parent = $("#" + backto).attr("data-parent");
			if (parent === undefined)
				parent = "";
			$("#sections > div:visible").fadeOut("fast", function() {
				$("#" + backto).fadeIn('fast');
				$("#btnPrevious").attr("data-backto", parent);
				if (parent == "") {
					$("#btnPrevious").attr("disabled", true);
				}
			});
			$("input[type=radio]:checked").removeAttr("checked");
			$("#btnContinue").attr("disabled", true);
		});
		
		$("#btnContinue").click(function() {
			if ($(this).attr("data-link") !== undefined)
				location.href = $(this).attr("data-link");
		});
		
		
		
	});
	/*
	function reset(callback) {
		$("#regos").fadeOut('fast', callback);
		$("#no-regs, #have-abn, #abn-ref, #no-abn").hide();
		$("#no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]:checked").removeAttr("checked");
		$("#btnContinue").attr("disabled", true);
	} */

</script>
