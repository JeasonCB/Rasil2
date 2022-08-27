
export default function Layout ({ children }) {
  return (
    <>
      <div className="bg-gray-900 h-[640px] sm:h-[550px] md:h-[640px] w-full">
        {children}
      </div>
    </>
  )
}
