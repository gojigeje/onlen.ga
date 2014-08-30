function clearDomainInput(e){
  if (e.cleared){return;}
  e.cleared = true;
  e.value = '';
  e.style.color = '#000';
}
function receiveResponse(returned, domain){
  var status = document.getElementById('status');
  // Check for http at start of url
  realUrl = domain;
  displayUrl = domain;
  if (!domain.match(/^(?:f|ht)tps?:\/\//)){
    realUrl = 'http://' + domain;
  }else{
    displayUrl = domain.replace(/^(?:f|ht)tps?:\/\//, '');
  }
  displayUrl = displayUrl.replace(/\/{2,}/, '/');
  domainLink = '<a href="'+realUrl+'" target="_blank">'+displayUrl+'</a>';
  if(returned == '1'){
    response = domainLink + ' onlen :)';
  }else if(returned == '2'){
    response = domainLink + ' onlen, tapi error 404 (not found)!';
  }else if(returned == '0'){
    response = domainLink + ' nggak onlen :(';
  }else{
    response = returned;
  }
  status.innerHTML = '<h1>'+response+'</h1>';
}
if(BBQ && BBQ.areFeatures && BBQ.areFeatures('attachListener', 'isHostMethod')){
  function checkIfUp(e){
    var status = document.getElementById('status');
    status.innerHTML = '<img src="./images/loader.gif" />';
    if(BBQ.areFeatures('ajaxGet')){
      var domain = document.forms[0].domain.value;
      BBQ.ajaxGet('./api.php?url=' + domain, {
        success: function(returned){
          receiveResponse(returned, domain);
        }
      });
    }else{
      document.forms[0].submit();
    }
    if(e && e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }
  }
  BBQ.attachListener(window, 'load', function(){
    var bacon = document.getElementById('bacon');
    document.documentElement.className += 'js';
    BBQ.attachListener(bacon, 'click', function(e){
      checkIfUp(e);
    });
    BBQ.attachListener(document.forms[0], 'submit', function(e){
      checkIfUp(e);
    });
  });
};