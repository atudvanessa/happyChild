import React from "react";

function Agent() {
  return (
    <div>
      <p>A display of all the various children</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Agent;
