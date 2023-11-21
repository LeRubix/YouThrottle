document.addEventListener("DOMContentLoaded", function() {
    var scriptElements = document.querySelectorAll('script[src*="desktop_polymer_enable_wil_icons"]');
    scriptElements.forEach(function(scriptElement) {
      var scriptContent = scriptElement.textContent;
      scriptContent = scriptContent.replace(/setTimeout\(function\(\) \{ c\(\); a\.resolve\(1\) \}, 5E3\);/g, "");
      scriptElement.textContent = scriptContent;
    });
  });
  