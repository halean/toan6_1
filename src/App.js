import logo from './logo.svg';
import './output.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Example from './components/Menu';
import MathExercise from './components/MathExercise';
import b1 from './data/toan2.json';
import congTruNhanChia from './data/toan3.json';
import hinhHoc from './data/hinhhoc1.json';
import {Python, MongMuon, ToanLopSau, Main} from "./components/Python"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from './data/python_set_vs_math.txt';
import { useEffect } from 'react';


function App() {
  return (
    <>
      
      <div className="flex h-screen flex-col overflow-hidden bg-gray-700 font-sans text-gray-900 antialiased">
        <header className="relative z-10 flex flex-shrink-0 items-center justify-between border-b border-gray-200 bg-gray-700 px-4 py-4 sm:px-6 lg:px-8">
          <span className="font-bold text-right text-white">Bài tập Toán lớp Sáu, kết hợp Python</span>
        </header>

        

        <main className="flex-1 overflow-auto bg-gray-50">
          
        </main>
      </div>
    </>
    
  );
}
function App2() {
  useEffect(() => {
    document.title = 'Học toán lớp sáu bằng Python';
  }, []);

  return (
  <>
   <nav className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 text-white p-4">
    <div className="flex-row"><div className="flex-1"><img src={require('./logo.png')} width="64" height="64"/></div>
    <div className="flex text-lg font-semibold">Học toán lớp sáu bằng Python
    </div></div>
    <ul className="flex flex-col sm:flex-row mt-4 sm:mt-0">
      <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="/">Trang chủ</a></li>
      <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="/mong_muon">Ước vọng</a></li>
      <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="/lien_he">Liên hệ</a></li>
    </ul>
  </nav>
    <div className="flex h-screen">
      
      <div id="sidebar" class="w-64 h-screen bg-gray-800 text-white p-5 hidden sm:block">
        <h1 class="text-xl mb-4"><a href="/">Giới thiệu</a></h1>
        <ul>
          <li class="mb-3 hover:bg-gray-700 p-2"><a href="/toan_lop_sau"> Toán lớp sáu</a></li>
          <li class="mb-3 hover:bg-gray-700 p-2"><a href="/Python">Python</a></li>
          <li class="mb-3 hover:bg-gray-700 p-2"><a href="/mong_muon">Ước vọng</a></li>
        </ul>
        <h1 class="text-xl mb-4">SỐ VÀ ĐẠI SỐ</h1>
        <ul>
          <li class="mb-3 hover:bg-gray-700 p-2"><a href="/tap_hop_so_tu_nhien">Sơ bộ về tập hợp.
          Tập hợp các số tự nhiên. </a></li>
          <li class="mb-3 hover:bg-gray-700 p-2"><a href="/phep_tinh_so_tu_nhien">Các phép tính với số tự nhiên.</a></li>
          <li class="mb-3 hover:bg-gray-700 p-2">Tính chia hết trong tập hợp các số tự nhiên.  Số nguyên tố.  Ước chung và bội chung </li>
          <li class="mb-3 hover:bg-gray-700 p-2">Tập hợp các số nguyên  </li>
          <li class="mb-3 hover:bg-gray-700 p-2">Các phép tính với số nguyên. Tính chia hết trong tập hợp các số nguyên  </li>
        </ul>
        <h1 class="text-xl mb-4">Hình Học</h1>
        <ul>
        <li class="mb-3 hover:bg-gray-700 p-2"><a href="/hinh_hoc_1">AI làm Toán</a></li>
        </ul>
      </div>
      
      <Router>
      <Routes>
        <Route path="/Python" element={<Python />} >
        </Route>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/tap_hop_so_tu_nhien" element={<App3 />} >
        </Route>
        <Route path="/phep_tinh_so_tu_nhien" element={<SectionExercises sectionExerciseList={congTruNhanChia} />} >
        </Route>
        <Route path="/mong_muon" element={<MongMuon />}>

        </Route>
        <Route path="/hinh_hoc_1" element={<SectionExercises sectionExerciseList={hinhHoc} />} >
        </Route>
        <Route path="/toan_lop_sau" element={<ToanLopSau />}>
        
        </Route>
        
      </Routes>
      </Router>
      
      </div>
    </>
  );
}

const mathExercise = {
  "title": "Example Math Exercise",
  "content": "Solve the quadratic equation ax^2 + bx + c = 0.",
  "solution": "The solution is x = [-b ± sqrt(b^2 - 4ac)] / 2a.",
  "python_code": "import math\ndef solve_quadratic(a, b, c):\n    d = b**2 - 4*a*c\n    sol1 = (-b - math.sqrt(d)) / (2*a)\n    sol2 = (-b + math.sqrt(d)) / (2*a)\n    return sol1, sol2\n\n# Example usage\na, b, c = 1, 5, 6\nsolution = solve_quadratic(a, b, c)\nprint('The solutions are:', solution)"
};

function SectionExercises({sectionExerciseList}){
  var toggleSidebar = ()=>{document.getElementById("sidebar").classList.toggle("hidden")}
  return(
    <div className="grid grid-flow-col">  
    
    <div className="flex-row p-10 overflow-y-auto items-start">
    <div className="sticky-top-0">    <button class="sm:hidden mb-4" onClick={toggleSidebar}>☰ Menu</button></div>

    {sectionExerciseList.map(e =>
    <MathExercise exercise={e} />
  )}
    </div>
    <div>
      <ul className="w-64 h-scree np-5 hidden sm:block">
      {sectionExerciseList.map(e => 
      <li><a href={"#"+e.trinket}>{e.title}</a></li>
      )
      }
      </ul>
    </div>
    </div>
    
  )
}

function App3(){
  return (
    <SectionExercises sectionExerciseList={b1}></SectionExercises>
  )
}

function App5() {
  
  return (
    <div class="flex flex-col w-lvh">
    <div class="flex flex-row w-full p-2">
      <div class="basis-full h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
    </div>
    <div class="flex flex-row w-full h-full p-2 space-x-2">
      <div class="h-lvh w-80 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg p-2">01</div>
      <div class="h-lvh w-1/3 min-w-96 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg p-2">02</div>
      <div class="h-lvh w-96 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg p-2">03</div>
    </div>
    </div>
  );
}

function App6() {
  return (
    <>
    <iframe
  src="https://halean.github.io/JupyterLitePython/notebooks/?path=python.ipynb"
  width="100%"
  height="500px"
>
</iframe>
    </>
  )
}

export default App2;

