export function Sidebar({ sidebarClasses }: { sidebarClasses?: string }) {
  return (
    <aside
      className={`sidebar relative min-h-full w-[325px] bg-gray-50 text-gray-700 border-r border-r-gray-200 p-8 z-50 ${
        sidebarClasses && sidebarClasses
      }`}
    >
      <div className="sidebar__content">
        <div>
          <p>Widgets here...</p>
        </div>
      </div>
    </aside>
  );
}
