---
title: Validation examples 
layout: default
---
<div class="toc">
	<h1><span><a href="../style-guide.html"> &laquo; Style guide</a></span>
	Validation examples</h1>
</div>
<!-- <div id="validationSummary" class="validation-container clearfix" style="display: none">
	<div class="grid-row">
		<div class="validation-summary-icon">
			<img src="{{site.baseurl}}/img/ico-alert-red.png" alt="Error">
		</div>
		<div class="validation-message">
			<h2><a id="validationSummaryAnchor" href="">There was a problem</a></h2>
			<ul>
			  <li>Enter a value for <a class="skip" href="#validation-test-field1">Label for field 1</a></li>
			  <li>Enter a value for <a class="skip" href="#validation-test-field2">Label for field 2</a></li>
			  <li>Choose yes or no for <a class="skip" href="#validation-test-field3">Yes or no right aligned</a></li>
			  <li>Select one of the options for <a class="skip" href="#validation-test-field4">Additional features</a></li>
			  <li>Select one of the options for <a class="skip" href="#validation-test-field5">Left aligned form elements</a></li>
			  <li>Select one of the options for <a class="skip" href="#validation-test-field6">Yes no with help icon</a></li>
			  <li>Enter a value for <a class="skip" href="#validation-test-field7">Left aligned field 1</a></li>
			  <li>Enter a value for <a class="skip" href="#validation-test-field8">Left aligned field 2</a></li>
		</div>
	</div>
</div> -->
<p>This page shows examples of validation against various form fields. Click the <strong>fire validation</strong> button to trigger validation feedback. 
<div class="highlight">
	<p><a href="forms.html">Back to validation.</a></p>
</div>

<div id="section1" class="sub-section-container sub-section-open">
	<h2>Section one heading</h2>
	<div class="sub-section-content" id="validation">
		<fieldset>
			<legend id="test-field" class="margin4 larger">Text fields and simple radio buttons</legend>
			<p class="no-margin-top margin4">A validation summary provides context and links to all errornous fields.</p>
			<div class="grid-row">
				<div class="col4">
					<label for="validation-test-field1" class="input-right"><span id="validationInline1">Label for field 1<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="validation-test-field1" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row">
				<div class="col4">
					<label for="validation-test-field2" class="input-right"><span id="validationInline2">Label for field 2<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></label>
				</div><!-- col -->
				<div class="col8 last">
					<input id="validation-test-field2" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>

		<div class="grid-row grid-row-padding-bottom">
			<fieldset id="validation-test-field3" class="no-margin">
				<legend class="col4 input-right"><span id="validationInline3">Yes no right aligned<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></legend>
				<div class="col8 last">
					<div class="col12 last">
						<div class="radio-toggle">
							<label class="on label-left" for="on-right"><input id="on-right" type="radio" name="yes-no-right"><span>Yes</span></label>
							<label class="off label-right" for="off-right"><input id="off-right" type="radio" name="yes-no-right"><span>No</span></label>
						</div>
					</div>
				</div>
			</fieldset>
		</div><!-- grid-row -->

		<fieldset id="validation-test-field4">
			<legend class="larger margin4"><span id="validationInline4">Additional features<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span><br />
			<span class="field-note">This is extra context within <code>legend</code> so it's read in forms mode.</span>
			</legend>
			<div class="grid-row grid-row-block clearfix margin4">
				<div class="col1">
					<input id="requiredRadio1" class="showhide-trigger" name="requiredRadio-radios" type="radio">
				</div><!-- col -->
				<div class="col7 last">
					<label for="requiredRadio1">
						<strong>Option one</strong><br>
						With some extra context here to describe the choice.
					</label>
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row grid-row-block grid-row-last clearfix margin4">
				<div class="col1">
					<input id="requiredRadio2" class="showhide-trigger" name="requiredRadio-radios" type="radio">
				</div><!-- col -->
				<div class="col7 last">
					<label for="requiredRadio2">
						<strong>Option two</strong><br>
						With some extra context here to describe the choice.
					</label>
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>

		<fieldset id="validation-test-field5">
			<legend class="larger margin0"><span id="validationInline5">Left aligned form elements<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></legend>
			<div class="grid-row grid-row-block clearfix">
				<div class="col1">
					<input id="requiredRadio3" name="left-validation-radio" type="radio">
				</div><!-- col -->
				<div class="col11 last">
					<label for="requiredRadio3">
						<strong>Option one</strong><br>
						With some extra context here to describe the choice.
					</label>
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="showhide-target"></div>

			<div class="grid-row grid-row-block grid-row-last clearfix">
				<div class="col1">
					<input id="requiredRadio4" class="showhide-trigger" name="left-validation-radio" type="radio">
				</div><!-- col -->
				<div class="col11 last">
					<label for="requiredRadio4">
						<strong>Option two</strong><br>
						With some extra context here to describe the choice.
					</label>
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>

		<fieldset id="validation-test-field6">
			<legend class="larger has-help margin0"><span id="validationInline6">Yes no with help icon<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span><img class="help-icon" src="{{site.baseurl}}/img/ico-help-form.png" alt="Help with question" /> <br />
			<span class="field-note">This example may require a detailed text description.</span></legend>
			<div class="grid-row">
				<div class="col12 last">
					<div class="radio-toggle">
						<label class="on label-left" for="on-help"><input id="on-help" type="radio" name="help-with-icon" class="showhide-trigger"><span>Yes</span></label>
						<label class="off label-right" for="off-help"><input id="off-help" type="radio" name="help-with-icon"><span>No</span></label>
					</div>
				</div>
			</div><!-- grid-row -->
		</fieldset>

		<fieldset>
			<legend class="larger">Text fields left aligned</legend>
			<div class="grid-row grid-row-padding-bottom clearfix">
				<div class="col3">
					<label for="validation-test-field7"><span id="validationInline7">Left aligned field 1<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></label>
				</div><!-- col -->
				<div class="col9 last">
					<input id="validation-test-field7" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
			<div class="grid-row clearfix">
				<div class="col3">
					<label for="validation-test-field8"><span id="validationInline8">Left aligned field 2<img class="visuallyhidden" src="{{site.baseurl}}/img/ico-alert28.png" alt="Required field" /></span></label>
				</div><!-- col -->
				<div class="col9 last">
					<input id="validation-test-field8" type="text">
				</div><!-- col -->
			</div><!-- grid-row -->
		</fieldset>

		<div class="controls-container">
			<button type="button" id="attemptToValidate" class="btn btn-default">Fire validation</button>
		</div>


	</div><!-- sub-section-content -->
</div><!-- sub-section-container -->
<script src="../assets/js/jquery-1.11.3.min.js"></script>
<script>

	$(document).ready(function () {
		// the following code is to register the slide up/down effect. this is
		// a customized jQuery plugin, the element that registered registerToggleSlide is
		// actually the scope of the effect.

	});

	$("#attemptToValidate").click(function () {
		  $('#validationSummary').slideDown("fast");
		  $('#validationSummaryAnchor').focus();
		  $('#validationInline1, #validationInline2, #validationInline3, #validationInline4, #validationInline5, #validationInline6, #validationInline7, #validationInline8').addClass('validation-inline');
		  $("#validation").find('img').removeClass("visuallyhidden");
	});

	// Keyboard friendly anchor links to elements that can receive focus
	// bind a click event to the 'skip' link
	$(".skip").click(function(event){

		// strip the leading hash and declare
		// the content we're skipping to
		var skipTo="#"+this.href.split('#')[1];

		// Setting 'tabindex' to -1 takes an element out of normal 
		// tab flow but allows it to be focused via javascript
		$(skipTo).attr('tabindex', -1).on('blur focusout', function () {

			// when focus leaves this element, 
			// remove the tabindex attribute
			$(this).removeAttr('tabindex');

		}).focus(); // focus on the content container
	});  

</script>

