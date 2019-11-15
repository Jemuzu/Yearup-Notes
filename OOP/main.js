const INBOX = []

class Message {
  constructor(content) {
    this.content = content
    alert("You have a new message!")
    INBOX.push(this)
  }
}

var msg = new Message('It's ya boy James back at it again!')
