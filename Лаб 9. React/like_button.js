'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
  
}

class LikeButton2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false}
    }

    render() {
        if (this.state.liked) {
            return "You liked comment"
        }

        return e(
            "button",
            { onClick: () => this.setState({ liked: true})},
            "Like"
        )
	
    }
}

const likeContainer_1 = document.querySelector("#like_button_container_1")
const likeContainer_2 = document.querySelector("#like_button_container_2")

ReactDOM.render(e(LikeButton2), likeContainer_1)
ReactDOM.render(e(LikeButton2), likeContainer_2)

document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });



