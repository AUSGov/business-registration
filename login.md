---
title: Sign in to business.gov.au
layout: identity
---
<div id="api" data-name="IdpSelections">
	<div>
		<div class="intro">
			 <h2>Sign up with your social account</h2>
		</div>
		<ul>
			<li>
				<button class="accountButton" id="FacebookExchange">Sign in with Facebook</button>
			</li>
			<li>
				<button class="accountButton" id="GoogleExchange">Sign in with Google+</button>
			</li>
			<li>
				<button class="accountButton" id="LinkedInExchange">Sign in with Linked In</button>
			</li>
			<li>
				<button class="accountButton" id="MicrosoftAccountExchange">Sign in with Microsoft</button>
			</li>
		</ul>
	</div>
	<div class="divider">
		<h2>OR</h2>
	</div>
	<div class="localAccount" role="form">
		<div class="intro">
			<h2>Sign in with your existing account</h2>
		</div>
		<div class="error pageLevel" aria-hidden="true" style="display: none;">
			<p role="alert"></p>
		</div>
		<div class="entry">
			<div class="entry-item">
				<label for="logonIdentifier">Email Address</label>
				<div class="error itemLevel" aria-hidden="true" style="display: none;">
					<p role="alert"></p>
				</div>
				<input type="email" id="logonIdentifier" name="Username or email address" pattern="^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder="Email Address" value="" tabindex="1">
			</div>
			<div class="entry-item">
				<div class="password-label">
					<label for="password">Password</label>
					<a id="forgotPassword" tabindex="2" href="/nonprodausgovcustomers.onmicrosoft.com/B2C_1_SignInOrUp/api/CombinedSigninAndSignup/forgotPassword?csrf_token=Tklra2JWRXZud2tObUhna2ZVaG5MNGxyUmtnWVNBa3dhN1R0SThML1JSa0ZjQnpGN3pjaXBvNnovZ29NZ1pMcCtOZklFTllXN0htcDA0cENwMkludmc9PTsyMDE2LTEwLTA1VDAxOjQ5OjM5Ljc4NzUwMjlaO1FwS09MekI4M2IrQTJCT0k1UWdtZ1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=eyJUSUQiOiJjOWE0ZmQ3Ny1iZmIyLTRhZTktOTk2Mi05ZmUzZmUzNGYxNmEifQ&amp;metrics=v1.0.1%3Bhttps%3A%2F%2Flogin.microsoftonline.com%2Fstatic%2Ftenant%2Fdefault%2Funified.cshtml%2C11%2C1%2C0%2C200%3B&amp;p=B2C_1_SignInOrUp">Forgot your password?</a>
				</div>
				<div class="error itemLevel" aria-hidden="true" style="display: none;">
				<p role="alert"></p></div><input type="password" id="password" name="Password" placeholder="Password" tabindex="1">
			</div>
			<div class="working">
			</div>
			<div class="buttons">
				<button id="next" tabindex="1">Sign in</button>
			</div>
		</div>
		<div class="divider">
			<h2>OR</h2>
		</div>
		<div class="create">
			<p>Don't have an account?<a id="createAccount" tabindex="1" href="create">Sign up now</a></p>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		window.setTimeout(function() {
			$("button.accountButton").each(function() {
				$(this).html($(this).html().replace(/Sign in with /g, ""));
			});
		}, 10);
	});
</script>