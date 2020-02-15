export default function Sidebar({ customClassName }) {
  return (
    <div className={`sidebar px-5 ${customClassName}`}>
      SIDEBAR
      <style jsx>{`
        .sidebar {
          flex: 1;
          height: calc(100vh - 60px);
          position: sticky;
          top: 60px;
          background-color: #f2666b;
        }
      `}</style>
    </div>
  );
}
