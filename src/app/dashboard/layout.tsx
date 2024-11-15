import Link from "next/link";

const sidebarMenu = [
  {
    path: "/dashboard/overview",
    title: "Overview",
  },
  {
    path: "/dashboard/blogs",
    title: "Blogs",
  },

  {
    path: "/dashboard/settings",
    title: "Settings",
  },
];
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="dashboard-wrapper flex items-stretch gap-2 h-screen font-sans">
        <aside className="bg-slate-100 w-72 max-h-screen sticky  flex flex-col">
          <div className="logo p-5 h-16">
            <span className="text-xl font-medium">Logo</span>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className="p-4 absolute inset-0 overflow-auto">
              <ul className="flex flex-col gap-2 w-full ">
                {sidebarMenu?.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="p-2 hover:bg-slate-200 w-full block"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* bottom  */}
          <div className="flex items-center gap-2 bg-slate-200 p-3 mt-auto">
            <div className="w-10 h-10 rounded-full grid place-items-center bg-slate-100 shadow">
              A
            </div>
            <span>Ashik Mahmud</span>
          </div>
        </aside>

        <div className="wrapper p-5">{children}</div>
      </div>
    </section>
  );
}
