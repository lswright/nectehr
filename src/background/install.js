// KAT-BEGIN show docs on install or upgrade from 1.0
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install') {
      // _gaq.push(['_trackEvent', 'app', 'install']);
      // _gaq.push(['_trackEvent', 'app', 'open-landing-page']);
      // chrome.tabs.create({'url': 'https://www.katalon.com/automation-recorder'});
      chrome.tabs.create({'url': 'https://github.com/lswright/nectehr'});
  } else if (details.reason === 'update') {
      // _gaq.push(['_trackEvent', 'app', 'update']);
      var previousVersion = details.previousVersion;
      var previousMajorVersion = previousVersion.substring(0, previousVersion.indexOf('.'));
      if (previousMajorVersion === '1') {
          // _gaq.push(['_trackEvent', 'app', 'open-landing-page']);
          // chrome.tabs.create({'url': 'https://www.katalon.com/automation-recorder'});
          chrome.tabs.create({'url': 'https://github.com/lswright/nectehr'});
      }
  }
});

// chrome.runtime.setUninstallURL('https://www.surveymonkey.com/r/katalon-recorder');
chrome.runtime.setUninstallURL('https://github.com/lswright/nectehr');
// KAT-END