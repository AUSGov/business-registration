---
title: Business registration
layout: default
---

<h1 id="heading" tabindex="-1">{{ page.title }}</h1>
<p>Your business and tax registrations in one place.</p>

<h2>What would you like to do?</h2>
<div>
	<div>
		<fieldset class="custom-controls">
			<legend class="larger has-help">I am currently registered for:<br /><span class="field-note">Tell us about what registrations you currently have.</span></legend>
			<div class="grid-row">
				<div class="col11">
					<p>
						<input class="no-margin" type="radio" name="myreg" id="opt-noregs" />
						<label class="no-margin" for="opt-noregs">I don't have any business registrations</label>
					</p>
				</div>
			</div>
			<div class="grid-row">
				<div class="col11">
					<p>
						<input class="no-margin" type="radio" name="myreg" id="opt-alreadyhave" />
						<label class="no-margin" for="opt-alreadyhave">I have an Australian Business Number (ABN)</label>
					</p>
				</div>
			</div>
			<div class="grid-row">
				<div class="col11">
					<p>
						<input class="no-margin" type="radio" name="myreg" id="opt-reference" />
						<label class="no-margin" for="opt-reference">I have an ABN reference number</label>
					</p>
				</div>
			</div>
			<div class="grid-row">
				<div class="col11">
					<p>
						<input class="no-margin" type="radio" name="myreg" id="opt-notrequired" />
						<label class="no-margin" for="opt-notrequired">I don't need an ABN</label>
					</p>
				</div>
			</div>
		</fieldset>
	</div>
	<div id="no-regs" style="display: none;">
		<fieldset id="fieldsetAbn" class="col12 custom-controls">
			<legend class="larger">I want to:<br /><span class="field-note">Tell us what you want to do.</span></legend>
			<div class="col12 last">
				<p>
					<input id="apply" name="noregs" class="showhide-trigger" type="radio">
					<label for="apply">Apply for an ABN, business name, company, TFN or taxes.</label>
				</p>
				<p>
					<input id="check" name="noregs" type="radio">
					<label for="check">Check on the progress of my existing application.</label>
				</p>
				<p>
					<input id="helpme" name="noregs" type="radio">
					<label for="helpme">I&apos;m not sure, help me decide.</label>
				</p>
			</div>
		</fieldset>
	</div>
	<div id="have-abn" style="display: none">
		<fieldset id="fieldsetCompanyAbn" class="custom-controls">
			<legend class="larger">I want to:<br /><span class="field-note">Tell us what you want to do.</span></legend>
			<div class="grid-row">
				<p>
					<input id="addtaxes" name="haveabn" type="radio" />
					<label for="addtaxes">Apply for GST, PAYG withholding or other taxes.</label>
				</p>
				<p>
					<input id="helptax" name="haveabn" type="radio" />
					<label for="helptax">I'm not sure which tax registrations I need, help me decide.</label>
				</p>
				<p>
					<input id="applybn" name="haveabn" type="radio" />
					<label for="applybn">Apply for a business name.</label>
				</p>
				<p>
					<input id="applyauskey" name="haveabn" type="radio" />
					<label for="applyauskey">Apply for an administrator AUSkey.</label>
				</p>
				<p>
					<input id="checktax" name="haveabn" type="radio" />
					<label for="checktax">Check the progress of your tax registrations.</label>
				</p>
				<p>
					<input id="checkbnakey" name="haveabn" type="radio" />
					<label for="checkbnakey">Check the progress of a business name or AUSkey application.</label>
				</p>
			</div>
		</fieldset>
	</div>
	<div id="abn-ref" style="display: none;">
		<fieldset class="col12 custom-controls">
			<legend class="larger">I want to:<br /><span class="field-note">Tell us what you want to do.</span></legend>
			<div class="col12 last">
				<p>
					<input id="applybn2" name="abnref" class="showhide-trigger" type="radio">
					<label for="applybn2">Apply for a business name.</label>
				</p>
				<p>
					<input id="check2" name="abnref" type="radio">
					<label for="check2">Check on the progress of my existing application.</label>
				</p>

			</div>
		</fieldset>
	</div>
	<div id="no-abn" style="display: none;">
		<fieldset class="col12 custom-controls">
			<legend class="larger">I want to:<br /><span class="field-note">Tell us what you want to do.</span></legend>
			<div class="col12 last">
				<p>
					<input id="applybn3" name="abnref" class="showhide-trigger" type="radio">
					<label for="applybn3">Apply for a business name.</label>
				</p>
				<p>
					<input id="applytfn" name="abnref" class="showhide-trigger" type="radio">
					<label for="applytfn">Apply for a business Tax File Number (TFN).</label>
				</p>
				<p>
					<input id="check3" name="abnref" type="radio">
					<label for="check3">Check on the progress of my existing application.</label>
				</p>

			</div>
		</fieldset>
	</div>
	<div class="controls-container">
		<div class="controls-content">
			<button type="button" class="btn btn-default" id="btnContinue" disabled>Go &gt;</button>
		</div><!-- controls-content -->
	</div>
</div>

<div class="saveforlater" id="saveForLater"></div>
<div class="applicationoptions" id="applicationOptions"></div>

<script src="scripts/jquery-1.11.3.min.js"></script>
<script src="scripts/jquery.collapse.js"></script>
<script src="scripts/jquery-toggleslide.js"></script>

<script type="text/javascript">

	$(document).ready(function () {
		
		$("#no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]").click(function() {
			$("#btnContinue").removeAttr("disabled");
		})
		
		$("#opt-noregs").click(function() {
			reset();
			$("#no-regs").show('fast');
			$("html, body").animate({
				scrollTop: $("#no-regs").offset().top
			}, 200);
		});
		
		$("#opt-alreadyhave").click(function() {
			reset();
			$("#have-abn").show('fast');
			$("html, body").animate({
				scrollTop: $("#have-abn").offset().top
			}, 200);
		});
		
		$("#opt-reference").click(function() {
			reset();
			$("#abn-ref").show('fast');
			$("html, body").animate({
				scrollTop: $("#abn-ref").offset().top
			}, 200);
		});

		$("#opt-notrequired").click(function() {
			reset();
			$("#no-abn").show('fast');
			$("html, body").animate({
				scrollTop: $("#no-abn").offset().top
			}, 200);
		});
		
		$("#btnContinue").click(function() {
			//if ($("")
		});
		
	});
	
	function reset() {
		$("#no-regs, #have-abn, #abn-ref, #no-abn").hide();
		$("#no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]:checked").removeAttr("checked");
		$("#btnContinue").attr("disabled", true);
	}

</script>
