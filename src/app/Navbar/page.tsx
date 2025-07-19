'use client';
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router = useRouter();
  return (
    <div className="fixed top-0 w-full z-50 bg-black bg-opacity-80 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 text-white">
        
        {/* Profile Image */}
     <a
  href="https://drive.google.com/file/d/1ARSzLSRgIpuSKfQrsLJdTw7BN6Or4_2V/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-black px-4 py-2 rounded-3xl border border-pink-200 text-white font-semibold hover:brightness-110 transition">
    Resume
  </button>
</a>


        {/* Navigation Links */}
        <div className="flex gap-6 text-lg font-medium text-purple-200 bg-gradient-to-r from-zinc-900 to-black border border-pink-200 p-2 rounded-3xl shadow">
          <span className="hover:text-purple-400 cursor-pointer transition" onClick={()=> router.push('/Skills')}>Skills</span>
          <span className="hover:text-purple-400 cursor-pointer transition" onClick={()=> router.push('/projects')}>Projects</span>
          <span className="hover:text-purple-400 cursor-pointer transition" onClick={()=> router.push('/aboutme')}>About Me</span>
        </div>

        {/* Contact Button */}
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-2 rounded-3xl border-2 border-pink-200 text-white font-semibold hover:brightness-110 transition"  onClick={()=> router.push('/contactme')}>
          Contact Me
        </button>
      </div>
    </div>
  );
}
