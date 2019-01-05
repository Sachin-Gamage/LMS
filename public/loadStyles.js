
var url = window.location.host;

var domain = url.split(".")[0];

if (!document.getElementById('id1')) {
    var link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.href = domain;
    document.head.appendChild(link);
}