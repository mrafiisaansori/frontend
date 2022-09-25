import Sidebar from "./components/Sidebar";
import {BiUser} from 'react-icons/bi';
import { FcSimCardChip } from "react-icons/fc";
import {GrNotification} from 'react-icons/gr';

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
      <section className="flex-1 bg-white text-center">Content Left</section>
      <section className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8">
        <div className="pt-12 flex justify-end space-x-9 item-center">
          <GrNotification className="mt-2" size={20}/>
          <BiUser className="mt-2" size={20}/>
          <img src="https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-9 w-9 object-cover rounded-full"/>
        </div>  
        <div className="card mt-9">
          <div className="relative p-4"> 
              <div className="mt-5 text-white text-2xl">Muhamad Rafi</div>
              <div className="mt-1">
                <div className="text-white">Programmer</div>
                <div className="text-white">+62 8123 1000 888</div>
                <div className="flex justify-between relative mt-5">
                  <FcSimCardChip className="w-9 h-9"/>
                  <span className="mt-2 text-white">NIP. 15201088</span>
                </div> 
              </div>
            </div>
        </div>
        <button className="py-3 rounded border border-indigo-400 text-indigo-400 border-dashed w-full mt-10">Pengumuman</button>
      </section>
    </div>
  );
} 

export default App;
