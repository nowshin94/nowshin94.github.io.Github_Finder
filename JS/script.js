//Define the UI
let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
  let userText = searchUser.value;
  if (userText != '') {
    // alert(userText);
    //Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.message == 'Not Found') {
            ui.showAlert("User Not Fount","alert alert-danger");
        } else {
          ui.showProfile(data);
        }
      });
  } else {
    //clear profile
    ui.clearProfile()
  }
});
