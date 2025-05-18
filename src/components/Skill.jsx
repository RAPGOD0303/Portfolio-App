import { useState } from "react"

export default function Skill() {
     const [skill, setskills]= useState('technical');
     const skills ={
        technical:[
            {name:"JavaScript", prof:90},
            {name:"NodeJs", prof:75},
            {name:"TailwindCSS", prof:60},
            {name:"Bootstrap", prof:55},
            {name:"AWS", prof:55},
            {name:"Cloud", prof:85},
        ],

        soft:[
            {name:"Communication", prof:90},
            {name:"Leadership", prof:75},
            {name:"Team Player", prof:60},
            {name:"Time Managment", prof:60},
            {name:"Adapability", prof:55},
            {name:"Creativity", prof:85},
        ]
     }
     const getProfLabel= (prof)=>{
        if(prof >= 90) return "Expert";
        if(prof > 75) return "Advanced";
        if(prof >= 60) return "Intermediate";
        return "Begineer";
     }
  return (
    <>
      <div id="skills" className="min-h-screen w-full bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-500 to-teal-600 bg-clip-text text-transparent">My Skills</h2>
                <p className="mt-4 text-xl text-gray-600">A comprehensive overivew of my technical experties and professional capabilities</p>
            </div>

            {/* toggle button */}
            <div className="flex justify-center mb-12 space-x-4">
                <button
                        onClick={() => setskills('technical')}
                        className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
                            skill === 'technical'
                            ? 'bg-gradient-to-r from-indigo-700 to-teal-700 text-white shadow-lg'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                        >
                        Technical Skills
                </button>

                        <button
                        onClick={() => setskills('soft')}
                        className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
                            skill === 'soft'
                            ? 'bg-gradient-to-r from-indigo-700 to-teal-700 text-white shadow-lg'
                            : 'text-gray-600 hover:text-indigo-800'
                        }`}
                        >
                        Soft Skills
                </button>
            </div>

            {/* map to show the output */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills[skill].map((skills, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300">
                                <div className="flex item-center space-x-4 mb-4">
                                    <h3 className="text-xl font-semibold text-gray-600">{skills.name}</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-700">
                                            {getProfLabel(skills.prof)}
                                        </span>
                                        <span className="">{skills.prof}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 transition-all duration-300"
                                        style={{width:`${skills.prof}%`}}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
      </div>
    </>
  );
}
