function deepRemove(node) {
  if (node.childNodes.length > 0) {
    node.childNodes.forEach(deepRemove);
    node.remove();
  }
  // Move node.remove() down here and it's gonna fuck everything up
}

function handleAccept() {
  msg.innerHTML = "Say ok when you're ready 👌";

  answerWrapper.childNodes.forEach(deepRemove);
  answerWrapper.append(okBtn, howItWorkBtn);
  scene.removeChild(bicyle);
  scene.append(takingPicture);
}
function handleReject() {
  msg1.innerHTML = 'Well...Bye then 🤷‍♂️';
  answerWrapper.setAttribute('hidden', 'true');
  setTimeout(() => {
    bicyle.classList = 'leaving';
    setTimeout(() => {
      chatbox.setAttribute('hidden', 'true');
      bicyle.setAttribute('hidden', 'true');
    }, 1000);
  }, 1500);
}
function handleFuckOff() {
  console.log('Clicked');
}

acceptBtn.addEventListener('click', handleAccept);
rejectBtn.addEventListener('click', handleReject);
fuckOffBtn.addEventListener('click', handleFuckOff);

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
