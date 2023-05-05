import { useEffect, useRef, useState } from "react";

type Props = {
  focused: boolean
};

export default function CellInput({ focused }: Props) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
    // WARN: idk why it works without the [focused] dep
    // but for some reason it doesn't with it lol
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!focused) return;
    setValue(e.currentTarget.value);
  }

  return (
    <input
      onChange={(e) => handleChange(e)}
      value={value}
      className={`h-full w-full border-0 p-0 m-0 focus:outline-none text-black ${focused ? "cursor-text" : "cursor-pointer"}"`}
      ref={inputRef}
    />
  )
}
