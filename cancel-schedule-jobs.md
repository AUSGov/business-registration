---
title: Cancel / schedule job outages
layout: default-no-footer
---
<style>

tr.current td {
	background-color: #fff6f6;
}

</style>
<h1>BRS job/service schedule</h1>
<div class="confirmation">
	<h2>Current status</h2>
	<table>
		<thead class="">
			<tr>
				<th>Name</th>
				<th>Status</th>
				<th>Next outage</th>
				<th>Reason</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Application Scheduler</td>
				<td style="color: green; font-weight: bold">Active</td>
				<td>Sat 24/03/2018 00:01 - Sun 25/03/2018 23:59</td>
				<td>ATO Scheduled outage</td>
			</tr>
			<tr>
				<td>Daily Tasks</td>
				<td style="color: green; font-weight: bold">Active</td>
				<td>Nothing scheduled</td>
				<td></td>
			</tr>
			<tr>
				<td>Email Dispatcher</td>
				<td style="color: red; font-weight: bold">Disabled</td>
				<td>until Sun 18/03/2018 23:59</td>
				<td>Email server issues</td>
			</tr>            
			<tr>
				<td>Notification Processor</td>
				<td style="color: green; font-weight: bold">Active</td>
				<td>Nothing scheduled</td>
				<td></td>
			</tr>
			<tr>
				<td>Payment Status</td>
				<td style="color: green; font-weight: bold">Active</td>
				<td>Nothing scheduled</td>
				<td></td>
			</tr>
		</tbody>
	</table>
	<h2>Cancellation schedule</h2>
	<table style="margin-bottom: 0.5em;">
		<thead class="">
			<tr>
				<th>Name</th>
				<th>Start date</th>
				<th>End date</th>
				<th>Reason</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr class="current">
				<td>Payment Status</td>
				<td>CURRENT</td>
				<td>Sun 18/03/2018 23:59</td>
				<td>Email server issues</td>
				<td><button type="button" class="btn btn-default ico-remove">Remove</button>&nbsp;<button type="button" class="btn btn-default ico-edit">Edit</button></td>
			</tr>
			<tr>
				<td>Application Scheduler</td>
				<td>Sat 24/03/2018 00:01</td>
				<td>Sun 25/03/2018 23:59</td>
				<td>ATO scheduled outage</td>
				<td><button type="button" class="btn btn-default ico-remove">Remove</button>&nbsp;<button type="button" class="btn btn-default ico-edit">Edit</button></td>
			</tr>
			<tr>
				<td colspan="5" style="border-bottom: 0; height: 140px;">*** END OF LIST ***</td>
			</tr>
		</tbody>
	</table>
	<button id="add-new" class="btn btn-small btn-default" style="margin-bottom: 1em;">Add new schedule</button>
</div>

<div id="add-popup" style="display: none;">
	<fieldset id="fieldsetProofOfIdentity">
        <legend class="margin4 larger">Schedule cancellation</legend>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="jobname">Job/Service name</label>
			</div>
			<div class="col8 last">
				<select id="jobname" style="width: 250px">
					<option>--- make a selection ---</option>
					<option>Application Scheduler</option>
					<option>Daily Tasks</option>
					<option>Email Dispatcher</option>
					<option>Notification Processor</option>
					<option>Payment Status</option>
					<option style="font-weight: bold">All Jobs</option>
				</select> <span class="fa fa-plus-circle" style="color: green; font-size: 1.5em;"></span>
			</div>
		</div>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="starttime">Start time</label>
			</div>
			<div class="col8 last">
				<input class="date" id="starttime" name="starttime" type="text" value=""> <button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
			</div>
		</div>
		<div class="grid-row">
			<div class="col4">
				<label class="input-right" for="endtime">End time</label>
			</div>
			<div class="col8 last">
				<input class="date" id="starttime" name="endtime" type="text" value=""> <button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
			</div>
		</div>
	</fieldset>
	<div style="text-align: center">
		<button id="add-cancel" class="btn cancel" type="submit" value="cancel">Cancel</button><button id="add-save" class="btn btn-default" type="button" value="Save">Save</button>
	</div>
</div>
<script src="scripts/jquery.blockUI.js"></script>
<script>
	$(document).ready(function() {
		$("#add-new").click(function() {
			$.blockUI({ message: $("#add-popup"), css: {
					width:          '60%',
					top:            '20%',
					left:           '20%',
					padding: "20px",
					textAlign: 'none'
				}
			});
		});
		
		$("#add-cancel, #add-save").click(function() {
			$.unblockUI();
		});
		
	});
</script>