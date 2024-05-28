import SideBar from "@/components/adminComponents/sideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <section className="py-24">
        <div className="container">
          <h1 className="text-2xl font-bold">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <div  className="row overflow-height flex items-start justify-between overflow-hidden ">
      <div className="col-md-2 overflow-height w-15  lg:w-1/5 ">
        <SideBar />
      </div>
      <div className="fix-height col-md-10 overflow-height w-full lg:w-4/5 overflow-y-scroll">{children}</div>
    </div>
  );
}
