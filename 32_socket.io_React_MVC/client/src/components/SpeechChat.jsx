export default function SpeechChat({ chat }) {
  //chat : {content, type, name? , isDm?}
  return (
    <>
      <div class={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {chat.type == "other" && <span class="nickname">{chat.name}</span>}
        <span class="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
