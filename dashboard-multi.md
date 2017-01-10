---
title: Application summary
layout: default
---
<style>
	
	p a.dismiss span {
		color: #aaa;
	}
	
	p a.dismiss span:hover, a.dismiss:focus span {
		color: #000;
	}
	
	a.dismiss:hover, a.dismiss:focus {
		background-color: transparent;
	}
	
	tr.extra {
		background-color: #eee;
		display: none;
	}
	
	tr.extra td {
		background-color: transparent;
	}
</style>

<h1>Application summary</h1>
<p>You have <strong>23 applications</strong>, showing the <strong>3 most recently changed</strong>.</p>

<div id="latest-updates" class="card clearfix">
	<div id="updates" class="grid-row">
		<h2 style="margin-top: 0.5em">Latest updates</h2>
		<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16MN1547">#16MN1547</a>: Payment declined <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16TL3306">#16TL3306</a>: Application completed, with 1 issue. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		<p style="margin: 0.5em"><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16MN1547">#16MN1547</a>: Business name registered. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		<p style="margin: 0.5em"><img src="img/ico-tick-green.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16TL3306">#16TL3306</a>: Application completed. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16MN1547">#16MN1547</a>: Payment declined. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		<div id="more-updates" style="display: none">
			<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16TL3306">#16TL3306</a>: Application completed, with 1 issue. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
			<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16MN1547">#16MN1547</a>: Payment declined <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
			<p style="margin: 0.5em"><img src="img/ico-exclamation-orange.png" style="width: 22px; margin-right: 10px; float: left" alt="Success"> Application <a href="#16TL3306">#16TL3306</a>: Application completed, with 1 issue. <a class="dismiss" href="#"><span class="fa fa-close"></span></a></p>
		</div>
		<button id="btnMoreUpdates" class="btn btn-small">Show more...</button>
	</div>
</div>

<div class="card clearfix">
	<fieldset id="filterContainer" class="no-margin">
		<legend class="larger visuallyhidden">Application search</legend>
		<div class="filter-container">
			<div class="grid-row">
				<div class="col4">
					<label for="search-term" class="input-right">Search string</label>
				</div>
				<div class="col8 last">
					<input id="search-term" placeholder="Reference, ABN/ACN, Company/Business name" type="text"> <button id="find-btn" type="button" class="btn btn-default btn-inline">Find applications</button><br />
					<a href="javascript:void(0)" id="show-adv">Show advanced options</a>
				</div>
			</div>
			<div id="advanced-search" style="display: none;">
				<div class="grid-row">
					<div class="col4">
						<label for="date-from" class="input-right">Date from <span class="field-note">(DD/MM/YYYY)</span></label>
					</div>
					<div class="col8 last">
						<input id="date-from" type="text" style="width: 6em">&nbsp;&nbsp;
						<label for="date-to" class="input-right label-inline">Date to <span class="field-note">(DD/MM/YYYY)</span></label>
						<input id="date-to" type="text" style="width: 6em; ">
					</div>
				</div>
				<div class="grid-row">
					<div class="col4">
						<label for="field5" class="input-right">Status of application</label>
					</div>
					<div class="col8 last">
						<select id="field5">
							<option>Show all</option>
							<option>Saved but not complete</option>
							<option>Completed</option>
							<option>Payment declined</option>
						</select>
					</div>
				</div>
				<div class="grid-row clearfix">
					<div class="col4">
						<p class="label input-right">Registration types</p>
					</div>
					<style>.inline p { margin: 0; } .inline { display: inline-block; margin-right: 20px; }</style>
					<div class="col8 last">
						<div class="custom-controls inline">
							<p class="no-margin">
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_0__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[0].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_0__Selected" id="type-abn">ABN</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_1__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[1].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_1__Selected" id="type-bn">Business name</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_3__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[3].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_3__Selected" id="type-company">Australian company</label>
							</p>	
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_10__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[10].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_10__Selected" id="type-btfn">Business TFN</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_4__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[4].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_4__Selected" id="type-payg">PAYG withholding</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_9__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[9].Selected" type="checkbox" value="true">
								<label class="has-help" for="RegistrationTypesViewModel_SelectedRegistrationTypes_9__Selected">AUSkey</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_2__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[2].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_2__Selected" id="type-gst">GST</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_6__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[6].Selected" type="checkbox" value="true">
								<label class="has-help" for="RegistrationTypesViewModel_SelectedRegistrationTypes_6__Selected">LCT</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_7__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[7].Selected" type="checkbox" value="true">
								<label class="has-help" for="RegistrationTypesViewModel_SelectedRegistrationTypes_7__Selected">FTC</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_8__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[8].Selected" type="checkbox" value="true">
								<label class="has-help" for="RegistrationTypesViewModel_SelectedRegistrationTypes_8__Selected">WET</label>
							</p>
						</div>
						<div class="custom-controls inline">
							<p>
								<input id="RegistrationTypesViewModel_SelectedRegistrationTypes_5__Selected" name="RegistrationTypesViewModel.SelectedRegistrationTypes[5].Selected" type="checkbox" value="true">
								<label for="RegistrationTypesViewModel_SelectedRegistrationTypes_5__Selected">FBT</label>
							</p>
						</div>
					</div>
				</div>
				<div>
					<p class="margin4"><button type="button" class="btn btn-default btn-inline" id="btnSearch">Find applications</button></p>
				</div>
			</div>
		</div>
	</fieldset>
</div>

<div id="applicationResults">

	<div id="16AN8710" class="dashboard-container">
		<table>
			<caption>Application reference: <strong>#16AN8710</strong><br /><span>Not submitted</span><span class="controls"><a href="business-names-06.html" id="" class="edit">Resume</a></span></caption>
			<thead>
				<tr>
					<th class="status-item">Registration item</th>
					<th class="status-detail">Detail</th>
					<th class="status-information">Information</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="editing">Business name</td>
					<td>BOB THE BUILDER</td>
					<td></td>
				</tr>
				<tr>
					<td class="editing"><span class="visuallyhidden">Waiting - </span>Business name</td>
					<td>PLUMB BOB</td>
					<td></td>
				</tr>
				<tr>
					<td class="editing"><span class="visuallyhidden">Waiting - </span>Business name</td>
					<td>BOB&apos;S GASFITTING</td>
					<td></td>
				</tr>
				<tr>
					<td class="editing"><span class="visuallyhidden">Waiting - </span>Business name</td>
					<td>BOB&apos;S PLUMBING</td>
					<td></td>
				</tr>
				<tr>
					<td class="editing"><span class="visuallyhidden">Waiting - </span>ABN</td>
					<td>&nbsp;</td>
					<td></td>
				</tr>
				<tr>
					<td class="editing"><span class="visuallyhidden">Waiting - </span>GST</td>
					<td>&nbsp;</td>
					<td></td>
				</tr>
				<tr>
					<td class="no-border-bottom editing"><span class="visuallyhidden">Waiting - </span>PAYG</td>
					<td class="status-waiting no-border-bottom">&nbsp;</td>
					<td class="no-border-bottom"></td>
				</tr>
			</tbody>
		</table>
	</div>

	<div id="16MN1547" class="dashboard-container">
		<table>
			<caption>Application reference: <strong>#16MN1547</strong><br /><span>Submitted on 30 April 2016</span><span class="controls"><a href="confirmation-new.html" class="edit">Resume</a></span></caption>
			<thead>
				<tr>
					<th class="status-item">Registration item</th>
					<th class="status-detail">Detail</th>
					<th colspan="2" class="status-information">Information</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="declined"><span class="visuallyhidden">Declined - </span>Payment declined</td>
					<td></td>
					<td><a href="payment.html">Retry payment</a></td>
					<td></td>
				</tr>
				<tr>
					<td class="waiting"><span class="visuallyhidden">Waiting - </span>Company</td>
					<td>BOOGIE PTY PTD</td>
					<td colspan="2">Not submitted</td>
				</tr>
				<tr>
					<td class="waiting"><span class="visuallyhidden">Waiting - </span>Business name</td>
					<td>BOOGIE DAYS</td>
					<td colspan="2">Not submitted</td>
				</tr>
				<tr>
					<td class="waiting"><span class="visuallyhidden">Waiting - </span>Business name</td>
					<td>BOOGIE NIGHTS</td>
					<td colspan="2">Not submitted</td>
				</tr>
				<tr>
					<td class="waiting"><span class="visuallyhidden">Waiting - </span>ABN</td>
					<td>&nbsp;</td>
					<td colspan="2">Not submitted</td>
				</tr>
				<tr>
					<td class="waiting"><span class="visuallyhidden">Waiting - </span>GST</td>
					<td>&nbsp;</td>
					<td colspan="2">Not submitted</td>
				</tr>
				<tr>
					<td class="no-border-bottom waiting"><span class="visuallyhidden">Waiting - </span>PAYG</td>
					<td class="status-waiting no-border-bottom">&nbsp;</td>
					<td colspan="2">Not submitted</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div id="16TL3306" class="dashboard-container">
		<table>
			<caption>Application reference: <strong>#16TL3306</strong><br /><span>Completed on 11 April 2016</span></caption>
			<thead>
				<tr>
					<th class="status-item">Registration item</th>
					<th class="status-detail">Detail</th>
					<th colspan="2" class="status-information">Information</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>
					<td>Receipt number 176920075</td>
					<td><a class="more" href="#help-paymentdetails">Payment details</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
					<tr class="extra">
						<td>&nbsp;</td>
						<td colspan="3">
							<p>Payment processed, receipt number 176920075</p>
						</td>
					</tr>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>Company</td>
					<td>JOHNSON PLUMBERS PTY PTD</td>
					<td><a class="more" href="#help-company">Registered</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
					<tr class="extra">
						<td>&nbsp;</td>
						<td colspan="3">
							<p>Company registration successful, <a href="#">download certificate (PDF)</a>.</p>
							<p>ACN: <span class="acn">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.acn">Copy</button></p>
						</td>
					</tr>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
					<td>Bob's Plumbing</td>
					<td><a class="more" href="#help-business1">Registered</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
					<tr class="extra">
						<td>&nbsp;</td>
						<td colspan="3">
							<p>Business name registration successful, <a href="#">download certificate (PDF)</a>.</p>
						</td>
					</tr>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
					<td>Bob's Whitegoods Repairs</td>
					<td><a class="more" href="#help-business2">Registered</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
					<tr class="extra">
						<td>&nbsp;</td>
						<td colspan="3">
							<p>Business name registration successful, <a href="#">download certificate (PDF)</a>.</p>
						</td>
					</tr>
				<tr>
					<td class="declined"><span class="visuallyhidden">Declined - </span>Business name</td>
					<td>Canberra plumbing</td>
					<td><a class="more" href="#help-business3">Unavailable</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
				<tr class="extra">
					<td>&nbsp;</td>
					<td colspan="3">
						<p>Business name registration unsuccessful, name rejected.</p>
					</td>
				</tr>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>
					<td><span class="abn2">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn2">Copy</button></td>
					<td><a class="more" href="#help-abn">Successful</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
				<tr class="extra">
					<td>&nbsp;</td>
					<td colspan="3">
						<p>Your ABN has been issued, 68 957 383 599.</p>
					</td>
				</tr>
				<tr>
					<td class="registered"><span class="visuallyhidden">Success - </span>GST</td>
					<td>Done</td>
					<td><a class="more" href="#help-gst">Successful</a></td>
					<td><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
				<tr class="extra">
					<td>&nbsp;</td>
					<td colspan="3">
						<p>You are registered for GST.</p>
					</td>
				</tr>
				<tr>
					<td class="no-border-bottom registered"><span class="visuallyhidden">Success - </span>PAYG</td>
					<td class="status-waiting no-border-bottom">Done</td>
					<td class="no-border-bottom"><a class="more" href="#help-payg">Successful</a></td>
					<td class="no-border-bottom"><span class="fa fa-plus-square">&nbsp;</span></td>
				</tr>
				<tr class="extra">
					<td>&nbsp;</td>
					<td colspan="3">
						<p>You are registered for PAYG withholding</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<div id="more" style="display: none;">
		<div id="16TL3306" class="dashboard-container">
			<table>
				<caption>Application reference: <strong>#16TL3306</strong><br /><span>Completed on 11 April 2016</span><!-- <span class="controls"><a href="javascript:void(0);" id="linkOne" class="remove">Delete</a></span> --></caption>
				<thead>
					<tr>
						<th class="status-item">Registration item</th>
						<th class="status-detail">Detail</th>
						<th class="status-information">Information</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>
						<td>Receipt number 176920075</td>
						<td><a class="more" href="#help-paymentdetails">Payment details</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Company</td>
						<td>JOHNSON PLUMBERS PTY PTD</td>
						<td><a class="more" href="#help-company">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Plumbing</td>
						<td><a class="more" href="#help-business1">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Whitegoods Repairs</td>
						<td><a class="more" href="#help-business2">Registered</a></td>
					</tr>
					<tr>
						<td class="declined"><span class="visuallyhidden">Declined - </span>Business name</td>
						<td>Canberra plumbing</td>
						<td><a class="more" href="#help-business3">Unavailable</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>
						<td><span class="abn2">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn2">Copy</button></td>
						<td><a class="more" href="#help-abn">Successful</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>GST</td>
						<td>Done</td>
						<td><a class="more" href="#help-gst">Successful</a></td>
					</tr>
					<tr>
						<td class="no-border-bottom registered"><span class="visuallyhidden">Success - </span>PAYG</td>
						<td class="status-waiting no-border-bottom">Done</td>
						<td class="no-border-bottom"><a class="more" href="#help-payg">Successful</a></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="16TL3306" class="dashboard-container">
			<table>
				<caption>Application reference: <strong>#16TL3306</strong><br /><span>Completed on 11 April 2016</span><!-- <span class="controls"><a href="javascript:void(0);" id="linkOne" class="remove">Delete</a></span> --></caption>
				<thead>
					<tr>
						<th class="status-item">Registration item</th>
						<th class="status-detail">Detail</th>
						<th class="status-information">Information</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>
						<td>Receipt number 176920075</td>
						<td><a class="more" href="#help-paymentdetails">Payment details</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Company</td>
						<td>JOHNSON PLUMBERS PTY PTD</td>
						<td><a class="more" href="#help-company">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Plumbing</td>
						<td><a class="more" href="#help-business1">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Whitegoods Repairs</td>
						<td><a class="more" href="#help-business2">Registered</a></td>
					</tr>
					<tr>
						<td class="declined"><span class="visuallyhidden">Declined - </span>Business name</td>
						<td>Canberra plumbing</td>
						<td><a class="more" href="#help-business3">Unavailable</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>
						<td><span class="abn2">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn2">Copy</button></td>
						<td><a class="more" href="#help-abn">Successful</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>GST</td>
						<td>Done</td>
						<td><a class="more" href="#help-gst">Successful</a></td>
					</tr>
					<tr>
						<td class="no-border-bottom registered"><span class="visuallyhidden">Success - </span>PAYG</td>
						<td class="status-waiting no-border-bottom">Done</td>
						<td class="no-border-bottom"><a class="more" href="#help-payg">Successful</a></td>
					</tr>
				</tbody>
			</table>
		</div>	
		<div id="16TL3306" class="dashboard-container">
			<table>
				<caption>Application reference: <strong>#16TL3306</strong><br /><span>Completed on 11 April 2016</span><!-- <span class="controls"><a href="javascript:void(0);" id="linkOne" class="remove">Delete</a></span> --></caption>
				<thead>
					<tr>
						<th class="status-item">Registration item</th>
						<th class="status-detail">Detail</th>
						<th class="status-information">Information</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Payment received</td>
						<td>Receipt number 176920075</td>
						<td><a class="more" href="#help-paymentdetails">Payment details</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Company</td>
						<td>JOHNSON PLUMBERS PTY PTD</td>
						<td><a class="more" href="#help-company">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Plumbing</td>
						<td><a class="more" href="#help-business1">Registered</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>Business name</td>
						<td>Bob's Whitegoods Repairs</td>
						<td><a class="more" href="#help-business2">Registered</a></td>
					</tr>
					<tr>
						<td class="declined"><span class="visuallyhidden">Declined - </span>Business name</td>
						<td>Canberra plumbing</td>
						<td><a class="more" href="#help-business3">Unavailable</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>ABN</td>
						<td><span class="abn2">68 957 383 599</span> <button class="btn btn-copy" data-clipboard-action="copy" data-clipboard-target="span.abn2">Copy</button></td>
						<td><a class="more" href="#help-abn">Successful</a></td>
					</tr>
					<tr>
						<td class="registered"><span class="visuallyhidden">Success - </span>GST</td>
						<td>Done</td>
						<td><a class="more" href="#help-gst">Successful</a></td>
					</tr>
					<tr>
						<td class="no-border-bottom registered"><span class="visuallyhidden">Success - </span>PAYG</td>
						<td class="status-waiting no-border-bottom">Done</td>
						<td class="no-border-bottom"><a class="more" href="#help-payg">Successful</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
<div class="card">
	<div class="grid-row">
		<p>You have 20 more applications <button id="btnShowMore" type="button" class="btn btn-inline" style="margin-left: 10px">Show more...</button></p>
	</div>
</div>
<script type="text/javascript" src="scripts/clipboard.min.js"></script>
<script>

	/* Copy to clipboard */
	var clipboard = new Clipboard('.btn-copy');

	/* Drop down settings menu */
//	$("nav").accessibleMegaMenu({
		/* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby */
//		uuidPrefix: "accessible-megamenu",
		/* css class used to define the megamenu styling */
//		menuClass: "nav-menu",
		/* css class for a top-level navigation item in the megamenu */
//		topNavItemClass: "nav-item",
		/* css class for a megamenu panel */
//		panelClass: "sub-nav",
		/* css class for a group of items within a megamenu panel */
//		panelGroupClass: "sub-nav-group",
		/* css class for the hover state */
//		hoverClass: "hover",
		/* css class for the focus state */
//		focusClass: "focus",
		/* css class for the open state */
//		openClass: "open"
//	});

	$(document).ready(function () {
		/* show/hide search filters */
		$('#btnShow, #btnShowFooter').click(function () {
			$("#updates").hide();
			$('#filterContainer').show("fast", function() {
				$("html, body").animate({
					scrollTop: $("#filterContainer").offset().top
				}, 500);
				$("#search-term").focus();
			});
			$('#find-more').hide();
		});
		$("#hide-search").click(function() {
			$("#filterContainer").hide("fast");
			$("#updates").show();
			$('#find-more').show();
		});
		$('#show-adv').click(function () {
			$('#advanced-search').toggle("fast");
			$("#search-term").focus();
			if ($('#show-adv').html().substr(0,4) == "Show")
				$('#show-adv').html("Hide advanced options");
			else
				$('#show-adv').html("Show advanced options");
			$("#find-btn").toggle();
		});
		// initHelp("#more-info", ".more");
		$("a.more").click(function() {
			var elt = $(this).closest("TR").next();
			var span = $(this).closest("TD").next().find("span");
			if (elt.is(":visible")) {
				elt.hide();
				span.removeClass("fa-minus-square").addClass("fa-plus-square");
			}
			else {
				$("tr.extra").hide();
				$(this).closest("TBODY").find("span.fa-minus-square").removeClass("fa-minus-square").addClass("fa-plus-square");
				elt.slideDown("slow");
				span.removeClass("fa-plus-square").addClass("fa-minus-square");
			}
		});
	});

	$(document).ready(function () {
		/* Delete confirmation */
		//visionaustralia.addDialog("linkOne", "dialogOne");
		$('#btnRemoveApplication').click(function () {
			visionaustralia.closeDialog("dialogOne");
			$('#application-16TL3306').toggle("fast");
			$('#messageNoApplications').toggle("fast");
		});
	});
	
	var count = 8;
	$("a.dismiss").click(function() {
		$(this).parent().remove();
		if (--count == 0)
			$("#latest-updates").hide("fast");
		return false;
	});
	
	$("#btnShowMore").click(function() {
		$("#more").show("fast");
	});
	
	$("#btnMoreUpdates").click(function() {
		$("#more-updates").show("fast");
	});

</script>