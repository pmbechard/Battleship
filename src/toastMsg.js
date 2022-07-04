let storedMsg;

export async function setToastMsg(msg, time = 5000) {
  let toastContainer = document.getElementById('toast-container');

  if (toastContainer === null) {
    const mainContent = document.getElementById('main-content');

    toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container');
    mainContent.appendChild(toastContainer);
    toastContainer.id = 'toast-container';

    let toastMsg = document.createElement('div');
    toastContainer.appendChild(toastMsg);
    toastMsg.classList.add('toast');
    toastMsg.id = 'toast';
  }

  let toastMsg = document.getElementById('toast');

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
