---
title: Cancel / schedule job outages
layout: default-no-footer
---
<style>

p.select-all {
	float: right;
	margin: 0;
	margin-top: 3px;
	cursor: pointer;
	width: 65px;
}

tr.current td {
	background-color: #fff6f6;
}
.blockMsg {
	cursor: default;
}
td.more {
	cursor: pointer;
	background-color: #f7f7f7;
}
tr:hover td.more {
	background-color: #e7e7e7;
}
tr:hover td.more a {
	font-weight: bold;
}
td.more a:hover {
	color: #000;
	background-color: transparent;
}
tr:hover td.more span.fa {
	display: inline !important;
}

</style>
<h1>Service cancellation schedule</h1>
<div class="confirmation">
	<h3>Active cancellations</h3>
	<table>
		<thead class="">
			<tr>
				<th>Name</th>
				<th>Status</th>
				<th>Until</th>
				<th>Reason</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Email Dispatcher Job</td>
				<td style="color: red; font-weight: bold">Cancelled</td>
				<td>Sun 18/03/2018 23:59</td>
				<td>Email server issues</td>
				<td><button type="button" class="btn btn-default ico-edit">Restore</button></td>
			</tr>            
			<tr>
				<td>SendingMail Service</td>
				<td style="color: red; font-weight: bold">Cancelled</td>
				<td>Sun 18/03/2018 23:59</td>
				<td>Email server issues</td>
				<td><button type="button" class="btn btn-default ico-edit">Restore</button></td>
			</tr>
		</tbody>
	</table>
	<h3>Scheduled cancellations</h3>
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
		<tbody id="schedule">
			<tr>
				<td>Application Scheduler</td>
				<td>Sat 24/03/2018 00:01</td>
				<td>Sun 25/03/2018 23:59</td>
				<td>ATO scheduled outage</td>
				<td><button type="button" class="btn btn-default ico-remove">Remove</button>&nbsp;<button type="button" class="btn btn-default ico-edit">Edit</button></td>
			</tr>
			<tr id="bottom-row">
				<td colspan="5" style="border-bottom: 0; height: 140px;">*** END OF LIST ***</td>
			</tr>
		</tbody>
	</table>
	<div style="width: 100%">
		<button id="add-new" class="btn btn-small btn-default" style="margin-bottom: 1em;">Add new schedule</button>
	</div>
	<h3>Recent cancellations</h3>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Start date</th>
				<th>End date</th>
				<th>Reason</th>
				<th></th>
			</tr>
		</thead>
		<tbody id="past-schedule">
			<tr>
				<td>Application Scheduler</td>
				<td>Sat 10/03/2018 00:01</td>
				<td>Sat 12/03/2018 23:59</td>
				<td colspan="2">Long weekend maintenance</td>
			</tr>
			<tr>
				<td>Email Dispatcher</td>
				<td>Thu 01/03/2018 11:45</td>
				<td>Mon 05/03/2018 07:00</td>
				<td colspan="2">Email outage</td>
			</tr>
			<tr>
				<td>Application Scheduler</td>
				<td>Wed 14/02/2018 00:01</td>
				<td>Wed 14/02/2018 23:59</td>
				<td colspan="2">Valentine outage</td>
			</tr>
			<tr>
				<td>Application Scheduler</td>
				<td>Mon 04/01/2018 08:30</td>
				<td>Mon 04/01/2018 17:00</td>
				<td colspan="2">Scheduled update window</td>
			</tr>
			<tr>
				<td>Payment Status</td>
				<td>Mon 25/12/2017 00:01</td>
				<td>Mon 25/12/2017 23:59</td>
				<td colspan="2">ASIC Christmas outage</td>
			</tr>
			<tr>
				<td>Application Scheduler</td>
				<td>Fri 16/12/2017 21:00</td>
				<td>Mon 19/12/2017 06:00</td>
				<td colspan="2">Major release window</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td class="more" colspan="4" ><a href="#" style="text-decoration: none">Show more...</a></td>
				<td class="more" style="text-align: right;"><span style="display: none; margin-right: 10px" class="fa fa-caret-down"></span></td>
			</tr>
		</tfoot>
	</table>
</div>

<div id="add-popup" style="cursor: default; display: none;">
	<h2 style="text-align: center; margin-top: 0;">Schedule Cancellation</h2>
	<fieldset id="fieldsetProofOfIdentity" class="no-margin">
        <legend class="larger">Select services</legend>
		<p style="margin-top: 0;">Use Ctrl+Click to select/de-select multiple services</p>
		<div class="grid-row clearfix">
			<div class="col4">
				<div>
					<p class="select-all"><i class="fa fa-check-square"></i> <span>all</span></p>
					<label for="asic-services">ASIC services</label>
				</div>
				<div>
					<select id="asic-services" size="8" multiple>
						<option>QueryNameAvailability</option>
						<option>SearchNniName</option>
						<option>InitiatePayment</option>
						<option>GetTransactionStatus</option>
						<option>CompanyLodgement</option>
						<option>SimpleFeeLookup</option>
						<option>BnLodgeApplication</option>
						<option>GetNni</option>
					</select>
				</div>
			</div>
			<div class="col4">
				<div>
					<p class="select-all"><i class="fa fa-check-square"></i> <span>all</span></p>
					<label for="ato-services">ATO services</label>
				</div>
				<div>
					<select id="jobname" size="3" multiple>
						<option>Lodge</option>
						<option>Prefill</option>
						<option>Prelodge</option>
					</select>
				</div>
				<div>
					<p  class="select-all"><i class="fa fa-check-square"></i> <span>all</span></p>
					<label for="ato-services">Experian services</label>
				</div>
				<div>
					<select id="jobname" size="3" multiple>
						<option>Email Client</option>
						<option>Address Client</option>
						<option>Mobile Client</option>
					</select>
				</div>
			</div>
			<div class="col4 last">
				<div>
					<p class="select-all"><i class="fa fa-check-square"></i> <span>all</span></p>
					<label for="jobname">Orchestration jobs</label>
				</div>
				<div>
					<select id="jobname" size="5" multiple>
						<option>Application Scheduler</option>
						<option>Daily Tasks</option>
						<option>Email Dispatcher</option>
						<option>Notification Processor</option>
						<option>Payment Status</option>
					</select>
				</div>
				<div>
					<label for="jobname">Miscellaneous services</label>
				</div>
				<div>
					<select id="jobname" size="2" multiple>
						<option>Check Domain Availability</option>
						<option>SendingMail</option>
					</select>
				</div>
			</div>
			<hr />
		</div>
	</fieldset>
	<fieldset>
		<legend class="larger">Schedule</legend>
		<div class="grid-row">
			<div class="col4">
				<label for="starttime">Start time</label><br />
				<input class="date" id="starttime" name="starttime" type="text" value="07/04/2018 08:00"> <button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
			</div>
			<div class="col4">
				<label for="endtime">End time</label><br />
				<input class="date" id="starttime" name="endtime" type="text" value="07/04/2018 20:00"> <button type="button" class="ui-datepicker-trigger"><span class="fa fa-calendar"></span></button>
			</div>
			<div class="col4 last">
				<label for="description">Description</label><br />
				<input class="" id="description" name="description" type="text" value="ASIC scheduled maintenance">
			</div>
		</div>
	</fieldset>
	<div style="text-align: center">
		<button id="add-cancel" class="btn cancel" type="submit" value="cancel">Cancel</button><button id="add-save" class="btn btn-default" type="button" value="Add">Add</button>
	</div>
</div>
<script src="scripts/jquery.blockUI.js"></script>
<script>
	$(document).ready(function() {
		$("#add-new").click(function() {
			$.blockUI({ message: $("#add-popup"), css: {
					width:          '80%',
					top:            '10%',
					left:           '10%',
					padding: "20px",
					textAlign: 'none'
				}
			});
		});
		
		$("#add-cancel").click(function() {
			$.unblockUI();
		});
		
		$("#add-save").click(function() {
			$("#pay-outage").html("Sat 07/04/2018 08:00 - Sat 25/03/2018 20:00");
			$("#pay-description").html("ASIC scheduled maintenance");
			$("#bottom-row").before('<tr><td>Payment Status</td><td>Sat 07/04/2018 08:00</td><td>Sat 07/04/2018 20:00</td><td>ASIC scheduled maintenance</td><td><button type="button" class="btn btn-default ico-remove">Remove</button>&nbsp;<button type="button" class="btn btn-default ico-edit">Edit</button></td></tr>"')
			$.unblockUI();
		});
		$("#view-past-toggle").click(function() {
			$("#schedule").toggle(); $("#past-schedule").toggle(); $("#show-more").toggle(); $("#add-new").toggle();
			if ($("#schedule").is(":visible")) {
				$("#view-past-toggle").html("Show past schedules");
			} else {
				$("#view-past-toggle").html("Show future schedules");
			}
		});
		$(".select-all").click(function() {
			var text = $(this).find("span").html();
			$(this).find("span").html(text=="all"?"none":"all");
			$(this).find("i").toggleClass("fa-check-square").toggleClass("fa-square");
			if (text == "all") {
				$(this).parent().next().find("option").prop("selected", true);
			} else {
				$(this).parent().next().find("option").removeAttr("selected");
			}
		});
		
	});
</script>