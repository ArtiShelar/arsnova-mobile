/*
 * This file is part of ARSnova Mobile.
 * Copyright (C) 2011-2012 Christian Thomas Weber
 * Copyright (C) 2012-2015 The ARSnova Team
 *
 * ARSnova Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ARSnova Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ARSnova Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
	var doc = window.document;
	var xhttp = new XMLHttpRequest();
	var configUrl = "/arsnova-config";

	var showContainer = function () {
		var innerSplashContainer = doc.getElementById("innerSplashScreenContainer");
		innerSplashContainer.style.display = 'initial';
		innerSplashContainer.classList.remove("isPaused");

		setTimeout(function () {
			window.closeSplashScreen = true;
			if (ARSnova && ARSnova.app) {
				ARSnova.app.closeSplashScreen();
			}
		}, 4000);
	};

	var applySplashScreenStyle = function (response) {		
		var imgElement = doc.getElementById("splashScreenLogo");

		imgElement.onload = showContainer;	
		imgElement.onerror = showContainer;
		imgElement.onabort = showContainer;
		imgElement.src = response.splashscreen.logo;

		doc.body.style.background = response.splashscreen.bgColor;
		doc.getElementById("splashScreenSlogan").innerHTML = response.splashscreen.slogan;
		doc.styleSheets[0].addRule('.circleLoadingInd div:before', 'background-color: ' +
			response.splashscreen.loadIndColor  + ';');
	};

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				var response = JSON.parse(xhttp.responseText);
				if (doc.readyState === 'complete') {
					applySplashScreenStyle(response);
				} else {
					window.onload = function () {
						applySplashScreenStyle(response);
					};
				}
			} else {
				if (doc.readyState === 'complete') {
					doc.getElementById("splashScreenContainer").style.display = "none";
				} else {
					window.onload = function () {
						doc.getElementById("splashScreenContainer").style.display = "none";
					};
				}
			}
		}
	};

	xhttp.open("GET", window.location.origin + configUrl, true);
	xhttp.timeout = 1000;
	xhttp.send();
})(window);