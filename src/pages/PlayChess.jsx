export default function PlayChess() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="/flutter/"
        title="Flutter App"
        className="w-full h-full border-none bg-black"
      />
    </div>
  );
}