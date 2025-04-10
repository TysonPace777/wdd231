const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector('#results').innerHTML = `
<p>Feedback Received, ${myInfo.get('firstname')} ${myInfo.get('lastname')} <br> Email: ${myInfo.get('email')} <br> Feedback Reason: ${myInfo.get('feedback')} ${myInfo.get('timestamp')}</p>
`