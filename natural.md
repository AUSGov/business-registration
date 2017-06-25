---
title: Business registration
layout: default
---
<style>
	.natural-menu {
		max-width: 600px;
		margin: 0 auto 200px;
	}
	
	.natural-menu h1 {
		color: #3179b5;
		font-size: 300%;
		margin: 0.5em 0 0.25em 0;
		padding: 0;
	}
	
	.natural-menu .byline {
	    font-size: 110%;
		margin: 0 0 0.5em 0;
		padding: 0;
	}
	
	.natural-menu .menu {
		position: relative;
		margin-bottom: 20px;
	}
	
	.natural-menu p.lang {
		font-family: open_sansregular, helvetica, arial, sans-serif;
		margin-bottom: 5px;
	}
	
	.natural-menu p.lang a {
		text-decoration: none;
		border-bottom: 2px dotted #3179b5;
		color: #3179b5;
		font-weight: bold;
		margin-right: 25px;
		display: inline-block;
	}
	
	.natural-menu p.lang a:hover,
	.natural-menu p.lang a:focus	{
		cursor: pointer;
		background-color: inherit;
		border-bottom: 2px solid #3179b5;
	}
	
	.natural-menu p.lang a.single,
	.natural-menu p.lang a.single:hover,
	.natural-menu p.lang a.single:focus {
		border-bottom: none;
		margin-right: none;
		cursor: default;
	}
	
	.natural-menu p.lang a:after {
		position: absolute;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: 150%;
		content: "\f0d7";
		margin-top: 4px;
		margin-left: 5px;
	}
	
	.natural-menu p.lang a.active:after {
		content: "\f0d8";
		margin-top: 0;
	}
	
	.natural-menu p.lang a.single:after {
		display: none;
	}
	
	ul.natural-options {
	    list-style: none;
		position: absolute;
		background-color: #fff;
		box-shadow: 1px 1px 5px #ddd;
		z-index: 1;
		padding: 0;
	}
	
	ul.natural-options li {
		position: relative;
		padding: 0;
		cursor: pointer;
		display: block;
	}
	
	ul.natural-options li.selected:after {
		font: normal normal normal 14px/1 FontAwesome;
		font-size: 120%;
		content: "\f00c";
		position: absolute;
		top: 9px;
		right: 6px;
	}
	
	ul.natural-options li:hover {
		background-color: #ddd;
	}
	
	ul.natural-options li a {
		text-decoration: none;
		display: block;
		padding: 10px 40px 10px 10px;
	}
	
	ul.natural-options li a:hover,
	ul.natural-options li a:focus {
		background-color: #ddd;
		color: inherit;
	}
	
	ul#options1 {
		/* top: 6px;
		left: 0; */
		margin-top: -7px;
	}
	
	ul#options2 {
		margin-top: -7px;
		margin-left: -10px;
	}
</style>
<div class="natural-menu">
	<h1>Business registration</h1>
	<p class="byline">Your business and tax registrations in one place</p>
	<div class="grid-row">
		<h2>What would you like to do?</h2>
		<div class="menu">
			<p class="lang">I <a id="option1" href="javascript: void(0)">am not registered</a> and want to</p>
			<ul class="natural-options" id="options1" style="display: none;">
				<li id="not-reg" class="selected"><a href="javascript:void(0)">am not registered</a></li>
				<li id="have-abn"><a href="javascript:void(0)">already have an ABN</a></li>
				<li id="abn-ref"><a href="javascript:void(0)">have an ABN reference number</a></li>
			</ul>
			<p class="lang"><a id="option2" href="javascript: void(0)" class="not-reg">apply for an ABN, business name, company, TFN or taxes.</a></p>
			<ul class="natural-options" id="options2" style="display: none;">
				<li class="selected not-reg"><a href="javascript:void(0)">apply for an ABN, business name, company, TFN or taxes.</a></li>
				<li class="have-abn"><a href="javascript:void(0)">apply for GST, PAYG withholding or other taxes.</a></li>
				<li class="have-abn abn-ref"><a href="javascript:void(0)">apply for a business name.</a></li>
				<li class="have-abn"><a href="javascript:void(0)">apply for an Administrator AUSkey.</a></li>
			</ul>
		</div>
		<!-- <select>
			<option>am not registered</option>
			<option>already have an ABN</option>
			<option>have an ABN reference number</option>
		</select> -->
		<!-- <select>
			<option>apply for an ABN, business name, company, TFN or taxes.</option>
			<option>apply for GST, PAYG withholding or other taxes.</option>
			<option>apply for a business name.</option>
			<option>apply for an Administrator AUSkey</option>
		</select> -->
		<button id="go-btn" type="button" class="btn btn-small btn-default">Go &gt;</button>
	</div>
</div>
<script>

	$(document).ready(function() {
		$("#option1, #option2").click(function(event) {
			event.stopPropagation();
			if ($(this).hasClass("single"))
				return;
			var other = this.id == "option1"?$("#options2"):$("#options1");
			if (other.is(":visible")) {
				other.hide();
				other.prev().find("a").removeClass("active");
			}
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(this).parent().next().fadeOut("fast");
			}
			else
			{
				$(this).addClass("active");
				$(this).parent().next().fadeIn("fast");
			}
		});
		$(document.body).click(function() {
			$("a.active").removeClass("active");
			$("ul.natural-options").hide();
		});
		$("ul.natural-options li").click(function(event) {
			event.stopPropagation();
			$(this).parent().find('li').removeClass('selected');
			var option = $(this).find('a').html();
			$(this).parent().prev().find('a').attr('class', $(this).attr('class')).html(option);
			$(this).addClass('selected');
			$(this).parent().fadeOut('fast');
			$(this).parent().prev().find("a").removeClass("active");
			if (this.id) {
				var newopt = $("#options2 ." + this.id).first();
				$("#options2 li").removeClass('selected');
				$("#option2").html(newopt.find('a').html()).attr('class', newopt.attr("class"));
				newopt.addClass("selected");
				setopts(this.id);
			}
		});
		function setopts(cls) {
			$("#options2 li").hide();
			$("#options2 ." + cls).show();
			if ($("#options2 li." + cls).length == 1)
				$("#option2").addClass("single");
			else
				$("#option2").removeClass("single");
		}
			
		$("#go-btn").click(function() {
			var opt1 = $('#option1').html();
			var opt2 = $('#option2').html();
			if (opt1.indexOf("am") == 0)
				location.href = "register";
			if (opt1.indexOf("have") == 0)
				location.href = "register?type=bn";
			if (opt2.indexOf("apply for GST") == 0)
				location.href = "existing/tax-roles";
			if (opt2.indexOf("apply for a bus") == 0)
				location.href = "register?type=bn";
			if (opt2.indexOf("apply for an Admin") == 0)
				location.href = "existing/auskey";
		});

		setopts("not-reg");
		
	});
	
</script>
