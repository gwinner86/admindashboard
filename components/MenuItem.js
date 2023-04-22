import React from "react";

function MenuItem({ url, text }) {
  return (
    <div>
      <a href={url} className="text-2xl">
        {text}
      </a>
    </div>
  );
}

export default MenuItem;
