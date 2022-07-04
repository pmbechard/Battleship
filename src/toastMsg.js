let created = false;
let storedMsg;

export async function setToastMsg(msg, time = 5000) {
  if (!created) {
    const mainContent = document.getElementById('main-content');

    const toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container');
    mainContent.appendChild(toastContainer);
    toastContainer.id = 'toast-container';

    let toastMsg = document.createElement('div');
    toastContainer.appendChild(toastMsg);
    toastMsg.classList.add('toast');
    toastMsg.id = 'toast';
    created = true;
  }

  let toastMsg = document.getElementById('toast');
  let toastContainer = document.getElementById('toast-container');

  clearTimeout(storedMsg);
  toastContainer.classList.remove('show');

  setTimeout(() => {
    toastContainer.classList.add('show');
    toastMsg.textContent = msg;
  }, 500);

  let newMsg = setTimeout(() => {
    toastContainer.classList.remove('show');
  }, time);

  storedMsg = newMsg;
}
