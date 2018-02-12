---
title: BRS Admin
layout: bootstrap
---

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	
	div.topbar {
		background-color: #254f90;
		padding-bottom: 29px;
		border-bottom: .25rem solid #e5b13d;
	}

	#react-app {
		max-width: 1024px;
		margin: 0 auto;
	}
	
	div.header {
		padding: 1em 2em;
	}
	
	div.header a {
		float: right;
		font-size: 1.2em;
		line-height: 36px;
		color: #000;
		text-decoration: none;
	}
	
	div.tile {
		border-top-style: solid;
		border-top-width: 10px;
		background-color: #f4f4f4;
		width: 100%;
		height: 170px;
		margin-top: 30px;
		padding: 10px;
		cursor: pointer;
	}
	
	div.tile.green {
		border-top-color: #339585;
	}

	div.tile.blue {
		border-top-color: #254f90;
	}
	
	div.tile.red {
		border-top-color: #c62c2a;
	}
	
	div.tile.purple {
		border-top-color: #3d2b97;
	}
	
	div.tile h2 {
		font-size: 1.5em;
	}
	
	div.title {
		text-align: center;
	}
	
	div.title h1 {
		color: #3179b5;
		margin: .5em 0 .25em 0;
	}
	
</style>
<div class="topbar"></div>
<div id="react-app">
	<div class="header">
		<img alt="business.gov.au logo" src="data:image/png;base64,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">
	</div>
	<div class="container">
		<div class="row title">
			<div class="col">
				<h1>BRS Admin Portal</h1>
				<p>Select from the following administration activities:</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-lg-4">
				<div class="tile red">
					<h2>Content admin</h2>
					<p>Import, export and compare content keys.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-lg-4">
				<div class="tile blue">
					<h2>Manage content</h2>
					<p>Add, remove and edit content items.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-lg-4">
				<div class="tile green">
					<h2>Activity logs</h2>
					<p>View and search activity logs.</p>
				</div>
			</div>
		</div>
	</div>

</div>