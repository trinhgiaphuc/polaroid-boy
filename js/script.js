// Utils Function
function deepRemove(node) {
  if (node.childNodes.length > 0) {
    node.childNodes.forEach(deepRemove);
    node.remove();
  }
  // Move node.remove() down here and it's gonna fuck everything up
}

// Scene1
function handleAccept() {
  msg.innerHTML = "Say ok when you're ready 👌";

  answerWrapper.childNodes.forEach(deepRemove);
  answerWrapper.append(okBtn, howItWorkBtn);
  scene.removeChild(bicyle);
  scene.append(takingPicture);
}
function handleReject() {
  msg.innerHTML = 'Well...Bye then 🤷‍♂️';

  answerWrapper.setAttribute('hidden', 'true');
  setTimeout(() => {
    bicyle.classList = 'img leaving-5s';
    setTimeout(() => {
      chatbox.setAttribute('hidden', 'true');
      bicyle.setAttribute('hidden', 'true');
    }, 5000);
  }, 1500);
}
function handleFuckOff() {
  bicyle.classList = 'img leaving-1s';
  setTimeout(() => {
    chatbox.toggleAttribute('hidden');
    bicyle.toggleAttribute('hidden');

    setTimeout(() => {
      bicyle.classList = 'img coming-1s';
      bicyle.toggleAttribute('hidden');

      setTimeout(() => {
        answerWrapper.remove();
        msg.innerHTML = 'Oh. I forgot somthing!';
        chatbox.toggleAttribute('hidden');
        chatbox.classList = 'chat-box';
        setTimeout(() => {
          bicyle.toggleAttribute('hidden');
          setTimeout(() => {
            bicyle.toggleAttribute('hidden');
            bicyle.src = '/assets/fuckyou.svg';
            bicyle.classList = 'img coming-1s';
            setTimeout(() => {
              bicyle.classList = 'img leaving-1s';
              setTimeout(() => {
                bicyle.src = 'assets/guy-cycling.svg';
                bicyle.classList = 'img';
                setTimeout(() => {
                  bicyle.classList = 'img leaving-1s';
                  setTimeout(() => {
                    bicyle.toggleAttribute('hidden');
                    chatbox.toggleAttribute('hidden');
                  }, 1000);
                }, 50);
              }, 1000);
            }, 1000);
          }, 0);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

acceptBtn.addEventListener('click', handleAccept);
rejectBtn.addEventListener('click', handleReject);
fuckOffBtn.addEventListener('click', handleFuckOff);

// Scene2
function howItWork() {
  okBtn.innerHTML = "I got this now ✨. Let's go take some pictures";
  fraudBtn.classList = 'answer';
  fraudBtn.appendChild(
    document.createTextNode(
      "No. that's not what I mean, I wanna see your camera."
    )
  );
  answerWrapper2.removeChild(howItWorkBtn);
  answerWrapper2.append(fraudBtn);
}

function ready() {
  scene2.removeChild;
}

howItWorkBtn.addEventListener('click', howItWork);
