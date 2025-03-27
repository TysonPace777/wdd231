const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector('#results').innerHTML = `
<p>Join request received, ${myInfo.get('firstname')} ${myInfo.get('lastname')} <br> Email: ${myInfo.get('email')} <br> Phone: ${myInfo.get('phone')} <br> Business/Organization: ${myInfo.get('organization')} ${myInfo.get('timestamp')}</p>
`