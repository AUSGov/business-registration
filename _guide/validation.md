---
title: validation
layout: default
---
<div class="toc">
	<h1><span><a href="../style-guide.html"> &laquo; Style guide</a></span>
	Validation and help text</h1>
</div>
<div class="description">
	<p>Validation and help text assist people understand what is required to submit an application.</p>
</div>

### Validation

Most pages within the registration process are made up of *sections*. Only one section is exposed to the user at a time. When the user clicks the *next* button the section they are working on will be validated before they can move on to the next section or page. If a section fails to validate these steps occur:

1. A validation summary appears at the top of the page
2. Focus is set to the validation heading
3. Each error is listed in the validation summary and advice on how to fix the error
4. A hyperlink from the list item allows users to link directly to the fieldset legend or input field
5. The legend and labels that require fixing have an error icon placed beside them and are also red to assist sighted users locate the errornous fields quickly
6. Throughout this process the next button is still available, it is not disabled

<div class="highlight">
	<p><a href="validation-examples.html">System validation example page</a></p>
</div>

### Modal dialogue box

The modal dialogue box is used only for confirming deletions. It should <strong>not</strong> be used for general feedback, validation or help. The modal dialogue box should warn the user what will happen if they continue with the deletion and give them the opportunity to cancel.

<div class="highlight">
	<p><a href="javascript:void(0);" id="linkOne">Trigger example dialog box</a></p>
</div>

### System messages

A system message can be displayed at the top of a page to present important messages. The system message contains a button for dismissing the message. Once a message is dismissed it should not reappear within the current session.

<div class="highlight">
	<p><a href="system-message.html">System message example page</a></p>
</div>

### Help text

There are 4 levels of help text, starting from short and concise through to longer explanations:

<table>
	<tr>
		<th style="width: 20%">Help type</th>
		<th style="width: 80%">Description and example</th>
	</tr>
	<tr>
		<td>Long microcopy</td>
		<td>
			<p>Body content microcopy is short paragraphs or sentences that usually appear <strong>*outside form content*</strong>. This content may not be read by a screen reader that is operating strictly in <em>forms modes</em> and is used mostly to introduce sections or forms.</p>
			<img src="{{site.baseurl}}/img/long-microcopy.png" alt="Example of long microcopy" />
		</td>
	</tr>
	<tr>
		<td>Labels and legends</td>
		<td>
			<p>Every fieldset requires a legend and every form input requires a label. Careful consideration needs to be given when using legends to explain radio groups, which have their own label/input pairing contained within the fieldset. In this situation, the legend will receive focus if there are validation errors.</p>
			<img src="{{site.baseurl}}/img/legends-labels.png" alt="Example of legends and labels" />
		</td>
	</tr>
	<tr>
		<td>Field notes</td>
		<td>
			<p>Where a simple label or legend is not enough to provide context, field notes can be added inside the label or legend element as a span tag. Field notes appear <strong>*inside form content*</strong>. They should be very short (not more than 10 or so words).</p>
			<img src="{{site.baseurl}}/img/field-note.png" alt="Example of field note 1" />
			<img src="{{site.baseurl}}/img/field-note2.png" alt="Example of field note 2" />
		</td>
	</tr>
	<tr>
		<td>Help panel</td>
		<td>
			<p>For sections of the page or form that require more detailed help, a help icon will activate a help panel. The help panel can contain multiple combinations of help content such as sentences, paragraphs, images, list items and video. The help panel should only be used where assistance cannot be provided concisely by microcopy.</p>
			<img src="{{site.baseurl}}/img/help-panel.png" alt="Example of help-panel" />
		</td>
	</tr>
</table>
<div id="dialogOne" style="display:none;">
	<h1>Confirm remove</h1> 
	<p>Are you sure you want to continue? You will be returned to the style guide home page.</p> 
	<input type="button" class="btn btn-default" value="Yes, remove" onclick="location.href='../style-guide.html'"/> 
	<a href="#" class="margin-left-075" onclick='visionaustralia.closeDialog("dialogOne");'>Cancel</a>
</div>
<script src="../scripts/jquery-1.11.3.min.js"></script>
<script src="../scripts/vadialog.js"></script> 
<script type="text/javascript">
	visionaustralia.addDialog("linkOne", "dialogOne"); 
</script>


