---
title: Form layout
layout: default
---
<div class="toc">
	<h1><span><a href="../style-guide.html"> &laquo; Style guide</a></span>
	Form layout examples</h1>
</div>
<div class="description">
	<p>This page shows variations of form field layouts.</p>
</div>
<div class="highlight">
	<p><a href="forms.html">Back to form elements.</a></p>
</div>

<fieldset>
	<legend class="margin4 larger">Fieldset example 1</legend>
	<p class="no-margin-top margin4">Basic form fields with right aligned labels on large screens.</p>
	<div class="grid-row">
		<div class="col4">
			<label for="field1" class="input-right">Field label</label>
		</div>
		<div class="col8 last">
			<input id="field1" type="text">
		</div>
	</div>

	<div class="grid-row">
		<div class="col4">
			<label for="question1" class="input-right">Question</label>
		</div><!-- col -->
		<div class="col8 last">
			<div class="radio-toggle">
				<label class="on label-left" for="on"><input id="on" type="radio" name="question1"><span>Yes</span></label>
				<label class="off label-right" for="off"><input id="off" type="radio" name="question1"><span>No</span></label>
			</div>
		</div><!-- col -->
	</div><!-- grid-row -->

	<div id="basic-toggle">
		<div class="grid-row">
			<div class="col4">&nbsp;</div>
			<div class="col8 last custom-controls">
				<p>
					<input type="checkbox" id="basic-toggle-label" class="showhide-trigger" />
					<label for="basic-toggle-label">Click here to trigger basic toggle</label>
				</p>
			</div><!-- col -->
		</div><!-- grid-row -->
		<div class="grid-row showhide-target" style="display: none">
			<div class="col4">&nbsp;</div>
			<div class="col8 last">
				<p>Additional content</p>
			</div><!-- col -->
		</div><!-- grid-row -->
	</div><!-- basic-toggle -->
</fieldset>

<fieldset id="fieldsetReasonForApplication">
	<legend class="larger">Fieldset example 2</legend>
	<p class="no-margin-top">A left aligned form with longer labels</p>
	<div class="grid-row grid-row-block clearfix custom-controls">
		<div class="col11">
			<p>
				<input id="new-business" name="radiogroup1" class="showhide-trigger" type="radio">
				<label for="new-business">
					<span class="push-right">
						<strong>Main choice 1</strong><br />
						Important extra context as part of label element. Selecting this triggers progressive disclosure.
					</span>
				</label>
			</p>
		</div>
		<div class="col1 last padding-top-bottom">
			<a href="#"><img class="help-icon" src="{{site.baseurl}}/img/ico-help-form.png" alt="Help with question" /></a>
		</div>
	</div><!-- grid-row -->

	<div class="grid-row padding-bottom-1 clearfix showhide-target" id="new-business-check" style="display:none">
		<div class="col1">&nbsp;</div>
		<div class="col11 last">
			<p class="no-margin-top"><label for="australia">Additional question requiring single word answer</label></p>
			<div class="radio-toggle">
				<label class="on label-left" for="australia-yes"><input id="australia-yes" type="radio" name="australia"><span>Yes</span></label>
				<label class="off label-right" for="australia-no"><input id="australia-no" type="radio" name="australia"><span>No</span></label>
			</div>
		</div><!-- col -->
	</div><!-- grid-row -->

	<div class="grid-row grid-row-block grid-row-last clearfix custom-controls">
		<div class="col11">
			<p>
				<input id="radio02" class="showhide-trigger" name="radiogroup1" type="radio">
				<label for="radio02">
					<span class="push-right">
						<strong>Main choice 2</strong><br />
						Important extra context as part of label element. Selecting this clears progressive disclosure option from choice 1.
					</span>
				</label>
			</p>
		</div><!-- col -->
		<div class="col1 last padding-top-bottom">
			<a href="#"><img class="help-icon" src="{{site.baseurl}}/img/ico-help-form.png" alt="Help with question" /></a>
		</div>
	</div><!-- grid-row -->
</fieldset>
