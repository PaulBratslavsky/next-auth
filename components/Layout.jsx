import Link from "next/link";
import { useDataStore } from '@/context/dataStore';


async function clearCookies() {
  const response = await fetch("/api/auth/remove-cookie", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
  });

  const data = await response.json();
  return data;
}


export default function Layout({ children }) {
  const store = useDataStore();

  console.log(store)


  async function handleLogout() {
    await clearCookies(); 
    store.clearStore();
    alert("logout");
  }
  return (
    <div>
      <section className="bg-white">
        <nav className="flex justify-between p-6 px-4 container mx-auto">
          <div className="flex justify-between items-center w-full">
            <div className="xl:w-1/3">
              <Link href="/">Auth Example</Link>
            </div>

            <div className="hxl:block xl:w-1/3">
              { false ?
              <div className="flex items-center justify-end">
                <Link
                  className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
                  href="/login"
                >
                  Log In
                </Link>
                <Link
                  className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div> :
              <div className="flex items-center justify-end">
                <span
                  className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
                >
                  {/* {props?.userData?.user.email} */}
                </span>
                <button
                  className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div> }
            </div>
          </div>
        </nav>
      </section>
      <main className="bg-gray-50">
        <div className="container mx-auto p-4">{children}</div>
      </main>
    </div>
  );
}
