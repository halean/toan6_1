import logo from './logo.svg';
import './output.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Example from './components/Menu';
import MathExercise from './components/MathExercise';
import * as b1 from './data/toan1.json';
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
  return (<>
  <nav class="flex flex-col sm:flex-row justify-between items-center bg-gray-800 text-white p-4">
        <div class="text-lg font-semibold">Logo</div>
        <ul class="flex flex-col sm:flex-row mt-4 sm:mt-0">
            <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="#">Home</a></li>
            <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="#">About</a></li>
            <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="#">Services</a></li>
            <li class="sm:ml-4 hover:bg-gray-700 p-2 rounded"><a href="#">Contact</a></li>
        </ul>
    </nav>
    <div id="sidebar" class="w-64 h-screen bg-gray-800 text-white p-5 hidden sm:block">
    <h1 class="text-xl mb-4">Giới thiệu</h1>
    <ul>
        <li class="mb-3 hover:bg-gray-700 p-2">Toán lớp sáu</li>
        <li class="mb-3 hover:bg-gray-700 p-2">Python</li>
        <li class="mb-3 hover:bg-gray-700 p-2">Tôi là ai</li>
    </ul>
    <h1 class="text-xl mb-4">SỐ VÀ ĐẠI SỐ</h1>
    <ul>
        <li class="mb-3 hover:bg-gray-700 p-2">Sơ bộ về tập hợp. Tập hợp các số tự nhiên. </li>
        <li class="mb-3 hover:bg-gray-700 p-2">Các phép tính với số tự nhiên. </li>
        <li class="mb-3 hover:bg-gray-700 p-2">Tính chia hết trong tập hợp các số tự nhiên.  Số nguyên tố.  Ước chung và bội chung </li>
        <li class="mb-3 hover:bg-gray-700 p-2">Tập hợp các số nguyên  </li>
        <li class="mb-3 hover:bg-gray-700 p-2">Các phép tính với số nguyên. Tính chia hết trong tập hợp các số nguyên  </li>
    </ul>
</div>
<div class="flex-1 p-10">
    <button class="sm:hidden mb-4" onclick="toggleSidebar()">☰ Menu</button>
    <h2 class="text-2xl font-bold mb-5">Main Content</h2>
    <p>This is the main content area.</p>
</div></>
  );
}

const mathExercise = {
  "title": "Example Math Exercise",
  "content": "Solve the quadratic equation ax^2 + bx + c = 0.",
  "solution": "The solution is x = [-b ± sqrt(b^2 - 4ac)] / 2a.",
  "python_code": "import math\ndef solve_quadratic(a, b, c):\n    d = b**2 - 4*a*c\n    sol1 = (-b - math.sqrt(d)) / (2*a)\n    sol2 = (-b + math.sqrt(d)) / (2*a)\n    return sol1, sol2\n\n# Example usage\na, b, c = 1, 5, 6\nsolution = solve_quadratic(a, b, c)\nprint('The solutions are:', solution)"
};

function App3(){
  return(
    <>
    <MathExercise exercise={b1} />
    </>
  )
}
export default App3;
