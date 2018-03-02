---
title: Business registration
layout: default
---

<h1 id="heading" tabindex="-1" style="text-align: center; color: #3179b5; padding-bottom: 0;">{{ page.title }}</h1>
<p style="text-align: center; margin-bottom: 2em;">Your business and tax registrations in one place.</p>

<div style="width: 700px; margin: 0 auto;">
	<h2>What would you like to do?</h2>
	<p>First tell us about your current status, then select what you'd like to do next.</p>
	<div style="min-height: 350px;">
		<div id="regos">
			<fieldset class="custom-controls">
				<legend class="larger has-help">I am currently registered for:</legend>
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
				<legend class="larger">I don't have any business registrations, and I want to:</legend>
				<div class="col12 last">
					<p>
						<input id="apply" name="noregs" class="showhide-trigger" type="radio">
						<label for="apply">apply for an ABN, business name, company, TFN or taxes.</label>
					</p>
					<p>
						<input id="check" name="noregs" type="radio">
						<label for="check">check on the progress of my existing application.</label>
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
				<legend class="larger">I have an Australian Business Number, and I want to:</legend>
				<div class="grid-row">
					<p>
						<input id="addtaxes" name="haveabn" type="radio" />
						<label for="addtaxes">apply for GST, PAYG withholding or other taxes.</label>
					</p>
					<p>
						<input id="applybn" name="haveabn" type="radio" />
						<label for="applybn">apply for a business name.</label>
					</p>
					<p>
						<input id="applyauskey" name="haveabn" type="radio" />
						<label for="applyauskey">apply for an administrator AUSkey.</label>
					</p>
					<p>
						<input id="checktax" name="haveabn" type="radio" />
						<label for="checktax">check the progress of your tax registrations.</label>
					</p>
					<p>
						<input id="checkbnakey" name="haveabn" type="radio" />
						<label for="checkbnakey">check the progress of a business name or AUSkey application.</label>
					</p>
					<p>
						<input id="helptax" name="haveabn" type="radio" />
						<label for="helptax">I'm not sure which tax registrations I need, help me decide.</label>
					</p>
				</div>
			</fieldset>
		</div>
		<div id="abn-ref" style="display: none;">
			<fieldset class="col12 custom-controls">
				<legend class="larger">I have an ABN reference number, and I want to:</legend>
				<div class="col12 last">
					<p>
						<input id="applybn2" name="abnref" class="showhide-trigger" type="radio">
						<label for="applybn2">apply for a business name.</label>
					</p>
					<p>
						<input id="check2" name="abnref" type="radio">
						<label for="check2">check on the progress of my existing application.</label>
					</p>

				</div>
			</fieldset>
		</div>
		<div id="no-abn" style="display: none;">
			<fieldset class="col12 custom-controls">
				<legend class="larger">I don't need an ABN, and I want to:</legend>
				<div class="col12 last">
					<p>
						<input id="applybn3" name="abnref" class="showhide-trigger" type="radio">
						<label for="applybn3">apply for a business name.</label>
					</p>
					<p>
						<input id="applytfn" name="abnref" class="showhide-trigger" type="radio">
						<label for="applytfn">apply for a business Tax File Number (TFN).</label>
					</p>
					<p>
						<input id="check3" name="abnref" type="radio">
						<label for="check3">check on the progress of my existing application.</label>
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
		
		$("#no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]").click(function() {
			$("#btnContinue").removeAttr("disabled");
		})
		
		$("#regos input[type=radio]").click(function() {
			$("#btnPrevious").removeAttr("disabled");
		});
		
		$("#opt-noregs").click(function() {
			$("#regos").fadeOut('fast', function() {
				$("#no-regs").fadeIn('fast');
			});
			//$("html, body").animate({
			//	scrollTop: $("#no-regs").offset().top
			//}, 200);
		});
		
		$("#opt-alreadyhave").click(function() {
			$("#regos").fadeOut('fast', function() {
				$("#have-abn").fadeIn('fast');
			});
			//$("html, body").animate({
			//	scrollTop: $("#have-abn").offset().top
			//}, 200);
		});
		
		$("#opt-reference").click(function() {
			$("#regos").fadeOut('fast', function() {
				$("#abn-ref").fadeIn('fast');
			});
			//$("html, body").animate({
			//	scrollTop: $("#abn-ref").offset().top
			//}, 200);
		});

		$("#opt-notrequired").click(function() {
			$("#regos").fadeOut('fast', function() {
				$("#no-abn").fadeIn('fast');
			});
			//$("html, body").animate({
			//	scrollTop: $("#no-abn").offset().top
			//}, 200);
		});
		
		$("#btnPrevious").click(function() {
			$("#no-regs:visible, #have-abn:visible, #abn-ref:visible, #no-abn:visible").fadeOut("fast", function() {
				$("#regos").fadeIn('fast');
				$("#regos, #no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]:checked").removeAttr("checked");
			});
			$("#btnContinue, #btnPrevious").attr("disabled", true);

		});
		
		$("#btnContinue").click(function() {
			//if ($("")
		});
		
		
		
	});
	
	function reset(callback) {
		$("#regos").fadeOut('fast', callback);
		$("#no-regs, #have-abn, #abn-ref, #no-abn").hide();
		$("#no-regs, #have-abn, #abn-ref, #no-abn").find("input[type=radio]:checked").removeAttr("checked");
		$("#btnContinue").attr("disabled", true);
	}

</script>
