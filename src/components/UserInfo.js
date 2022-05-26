export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
    this._userAvatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userAbout: this._userAboutElement.textContent,
    };
  }

  setUserInfo({ userName, userAbout }) {
    this._userNameElement.textContent = userName;
    this._userAboutElement.textContent = userAbout;
  }

  setUserAvatar(link) {
    console.log(link);
    this._userAvatarElement.src = `${link}`;
  }

  setUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
