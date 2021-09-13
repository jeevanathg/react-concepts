function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return <>You are have {unreadMessages.length} unread messages</>;
}

export default MailBox;
