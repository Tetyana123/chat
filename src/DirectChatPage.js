import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChatPage = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="a68d6967-f773-42d8-a1d8-9bfe73753c7c"
      userName="Tetyana"
      userSecret="1234567890"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChatPage;
