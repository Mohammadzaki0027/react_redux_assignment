import { useReducer, useState } from "react";
import { Userdata } from "./gitaction";
import { githubReducer } from "./gitreducer";

const intial= {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};

function Github() {
  const [state, dispatch] = useReducer(githubReducer, intial);
  const [text, setText] = useState("");

  return (
    <div>
   
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="add something"
        />
        <button onClick={() => Userdata(dispatch, text)}>Search</button>
      </div>
      <div>
        {state.data.map((item) => (
          <div key={item.login}> {item.login}</div>
        ))}
      </div>
    </div>
  );
}
export default Github;
