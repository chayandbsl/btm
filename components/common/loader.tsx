export function LoadingSpinner({ message = "Loading...", size = 48 }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="loader double-circle"></div>
      <div className="hidden">
        {message}
        {size}
      </div>
    </div>
  );
}
