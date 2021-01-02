function save_options() {
  var isHide = document.getElementById('AlwaysHide').checked;
  var isLogo = document.getElementById('Logo').checked;
  var debug = document.getElementById('Debug').checked;

  chrome.storage.sync.set({
    isHide: isHide,
    isLogo: isLogo,
    debug: debug
  }, function() {
    var status = document.getElementById('Status');
    status.textContent = 'Tallennettu';

    setTimeout(function() {
      status.textContent = '';
    }, 1250);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    isHide: false,
    isLogo: false
  }, function(items) {
    document.getElementById('AlwaysHide').checked = items.isHide;
    document.getElementById('Logo').checked = items.isLogo;
    document.getElementById('Debug').checked = items.debug;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('AlwaysHide').addEventListener('click', save_options);
// document.getElementById('Logo').addEventListener('click', save_options);
document.getElementById('tallenna').addEventListener('click', save_options);
