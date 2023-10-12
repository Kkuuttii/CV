export function Header() {
  return (
    <>
      <div className="flex items-center justify-between h-16 p-4 bg-blue-300">
        <div>CV | Ekaterina Gorelik</div>
        <div className="flex justify-between w-3/5">
          <button>Contact me</button>
          <button> About me</button>
          <button>Education</button>
          <button>Skills</button>
          <button>Experience</button>
        </div>
      </div>
    </>
  );
}
