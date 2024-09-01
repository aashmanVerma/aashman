
export default function Header({ onNavChange }: { onNavChange: (part: string) => void }) {

  const handleNavChange = (part: string) => {
    onNavChange(part)
  }

  return (
    <div className="px-10 z-40 top-3 py-4 rounded-lg text-white my-5 mx-4 flex justify-between items-center max-w-3xl w-[95%] bg-[#222831] bg-dot-transparent sticky ">
        <code>{'<av/>'}</code>
        <div className="flex gap-x-6">
            <span className="cursor-pointer text-sm md:text-base" onClick={() => handleNavChange("about")}>About</span>
            <span className="cursor-pointer text-sm md:text-base" onClick={() => handleNavChange("project")}>Project</span>
            <span className="cursor-pointer text-sm md:text-base" onClick={() => handleNavChange("contact")}>Contact</span>
        </div>
    </div>
  )
}
