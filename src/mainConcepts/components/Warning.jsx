import MailBox from "./MailBox";

function Warning(props) {
  const unreadMessages = props.unreadMessages;
  const warn = props.warn;
  if (!warn) {
    return null;
  } else
    return (
      <p>
        Warning: {unreadMessages && <MailBox unreadMessages={unreadMessages} />}
      </p>
    );
}

export default Warning;
