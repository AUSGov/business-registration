---
title: Buttons
layout: default
---
<div class="toc">
	<h1><span><a href="../style-guide.html"> &laquo; Style guide</a></span>
	Buttons</h1>
</div>
<div class="description">
	<p>Buttons includes default button styling as well as command hyperlinks and navigation controls.</p>
</div>

<h2>Individual button styling</h2>
<button type="button" class="btn">Regular button</button><br /><br />
<button type="button" class="btn btn-default">Default action</button><br /><br />
<button type="button" class="btn btn-default btn-small">Small button</button>
<h3>Disabled buttons</h3>
<button type="button" disabled="disabled" class="btn disabled">Regular button</button><br /><br />
<button type="button" disabled="disabled" class="btn btn-default disabled">Default action</button><br /><br />
<button type="button" disabled="disabled" class="btn btn-default btn-small disabled">Small button</button>
<h3>Pagination controls</h3>
<p>The <code>controls-container</code> div groups the buttons for navigating through registration steps. This div should only appear once at the bottom of the screen.</p>
<div class="controls-container">
	<div class="controls-content">
		<button type="button" class="btn previous">Previous</button>
		<button type="button" class="btn btn-default">Continue to step 3</button>
		<button type="button" class="btn btn-float btn-options">Options</button>
		<button type="button" class="btn btn-float btn-save">Save</button>
	</div><!-- controls-content -->
</div>
<h3>Pagination controls with return</h3>
<p>The return to confirmation button is displayed if an applicant is able to return directly to the confirmation screen after editing a previous screen.</p>
<div class="controls-container">
	<div class="controls-content">
		<button type="button" class="btn previous">Previous</button>
		<button type="button" class="btn">Continue to step 3</button>
		<button type="button" class="btn btn-default">Return to confirmation</button>
		<button type="button" class="btn btn-float btn-options">Options</button>
		<button type="button" class="btn btn-float btn-save">Save</button>
	</div><!-- controls-content -->
</div>

<h3>Buttons within fieldsets</h3>
<p></p> 
<fieldset>
	<legend class="margin4 larger">Fieldset legend<br /><span class="field-note">This example is used to delete the entire fieldset. For example, deleting an additional address block.</span></legend>
	<div class="grid-row">
		<div class="col4">
			<label for="field1" class="input-right">Address field 1</label>
		</div>
		<div class="col8 last">
			<input id="field1" type="text">
		</div>
	</div>
	<div class="grid-row">
		<div class="col4">
			<label for="field2" class="input-right">Address field 2</label>
		</div>
		<div class="col8 last">
			<input id="field2" type="text">
		</div>
	</div>
	<p><button type="button" class="btn btn-default">Remove this address</button>&nbsp;<button type="button" class="btn btn-default">Add another address</button></p>
</fieldset>