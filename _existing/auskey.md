---
title: AUSkey only
layout: default
---
<h1 id="heading" tabindex="-1">{{ page.title }}</h1>

<div class="grid-row clearfix">
    <div class="col7">
		<p>Here you can apply for an AUSkey or additional authorisations for your business.</p>
        <p>An Administrator AUSkey is the login given to business owners to manage their tax details with the Australian Taxation Office (ATO).</p>
		<h2>Don't have an AUSkey?</h2>
		<p>If you already have an ABN, but don't have an Administrator AUSkey, continue here.</p>
		<button type="button" class="btn btn-small" onclick="window.location = 'b2c-login.html?dest=register-auskey-new'">New AUSkey</button>
		<h2>Have an AUSkey?</h2>
		<p>If you already have an Administrator AUSkey but need one or more additional AUSkeys e.g. for multiple owners, continue here.</p>
		<p>You'll need to sign in using an existing AUSkey or a myGov account so you can apply for one or more additional AUSkeys and assign them to your authorised representatives.</p>
		<button type="button" class="btn btn-small" onclick="window.location = 'aba-login.html?dest=add-auskeys'">Additional AUSkeys</button>
    </div>
    <div class="col5 last">
        <div class="registration-tip">
            <h2>Need an AUSkey for a tax agent or accountant?</h2>
			<p>Already have an Administrator AUSkey but need an addtional AUSkey for your tax agent or accountant? This is called a Standard AUSkey. You'll need to <a href="#">register for a Standard AUSkey</a> on the Australian Business Register (ABR) website.</p>
        </div>
		<p style="font-size: 90%">Want to check on the status of your previous applications?</p>
		<p style="font-size: 90%">View the application summary for your<br /><button type="button" class="btn btn-inline" onclick="location.href='dashboard-b2c'">New</button>or <button type="button" class="btn btn-inline" onclick="location.href='dashboard?type=auskey'" style="margin-left: 5px">Additional</button>AUSkey applications.</p>
    </div>
</div>
