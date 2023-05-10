import React from "react"

function Landingpage() {
    return (
        <div className="">
            <div className="bg-slate-700 text-white px-8 py-16">
            <div className=" m-w-sm grid grid-cols-1 gap-8 px-8 py-16">
                <div className="bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-16">
                <div className="text-xl uppercase font-bold">Become a host</div>
                <div className="text-3xl font-bold underline">HOST YOUR SPACE SHARE YOUR WORLD</div>
                 <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="bg-red-500 py-3 px-6 rounded-md w-48">Try hosting</button>
                </div>
               
             </div>
            </div>

            <div className="px-8 py-16">
            <div className="max-w-md mb-16">
                <h1 className="text-5xl mb-8">Your next chapter made possible by hosting</h1>
            </div>

            <div className=" grid grid-cols-2 gap-4">  
            <div className=" text-slate-600">
            <h3 className="text-2xl font-bold mb-2">Share what you love</h3>
            <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil maiores obcaecati sit aperiam quia nostrum atque laboriosam, qui, nobis doloremque quod, ea delectus nisi rem! Dicta corrupti magnam animi.
            </p>
            </div>        
         
            <div className="text-slate-600">
            <h3 className="text-2xl font-bold mb-2">Host how you want to</h3>
            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quam error vitae ullam eaque impedit neque molestiae laborum hic fuga exercitationem ea, dicta magnam commodi tenetur totam possimus molestias quas.</p></div>
            </div>
            </div>

       </div>
    );
  }
  
  export default Landingpage;
