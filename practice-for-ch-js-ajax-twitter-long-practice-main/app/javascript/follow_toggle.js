import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener('click', this.handleClick)
    
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // console.log(this.followState)
    if (this.followState === "followed") {
      this.unfollow(); 
    } else {
      this.follow();
    }
  }

  async follow() {
    // Your code here
    console.log('follow is happening')
    this.followState = "followed"
  }

  async unfollow() {
    // Your code here
    console.log('unfollow is happening')
    this.followState = "unfollowed"
  }

  render() {
    switch (this.followState) {
      // Your code here
      case "followed":
        this.toggleButton.innerText = "Unfollow!";
        break;
      case "unfollowed":
        this.toggleButton.innerText = "Follow!";
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}