export default function About() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Hi, I am Rajvardhan Aniruddha Pimple.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I am a developer, tutor and part-time sports person — both indoor and outdoor.
            </p>
          </div>

          {/* Profile Image*/}
          <div className="relative flex items-center justify-center mb-24">
            <div className="absolute inset-0  rounded-full blur-2xl opacity-30 w-52 h-52"></div>
            <img
              src="/raj.jpg" 
              alt="profile image"
              className="rounded-full w-48 h-48 object-cover transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white"
            />
          </div>

          {/* Professional Background */}
          <div className="bg-white shadow-md p-6 mb-16 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Professional Journey</h2>
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                Graduate with 2+ years of experience in software debugging, design, and testing.
                Skilled in modern development methodologies for front-end platforms, proficient in
                version control and manual testing. Collaborative team player with a proven ability
                to quickly adapt to emerging technologies for improved system performance and
                operational efficiency.
              </p>
              <p className="text-lg text-gray-600">
                Also experienced in collaborating across departments and delivering scalable
                solutions on tight deadlines. Passionate about learning and growth in both personal
                and professional capacities.
              </p>
            </div>
          </div>

          {/* Skill Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-white rounded-xl shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold mb-4">Skills & Strengths</h3>
              <p className="text-lg text-gray-600">
                Passionate about front-end development, testing, and performance optimization. Adept
                with tools like Git, VS Code, and browser dev tools. Strong communication and
                teamwork skills.
              </p>
            </div>
          </div>

          {/* Professional Interest */}
          <div className="bg-white p-8 bg-shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-center">Beyond Coding</h2> <br /> <br />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                <p className=" text-lg text-gray-800">I am actively contributing to open source code software and project on github</p>
              </div>

               <div className="space-y-3">
                <h3 className="text-2xl text-teal-700 font-semibold">Open Source Contribution</h3>
                <p className=" text-lg text-gray-800">I am actively contributing to open source code software and project on github</p>
              </div>

               <div className="space-y-3">
                <h3 className="text-2xl text-purple-700 font-semibold">Open Source Contribution</h3>
                <p className=" text-lg text-gray-800">I am actively contributing to open source code software and project on github</p>
              </div>

               <div className="space-y-3">
                <h3 className="text-2xl text-blue-700 font-semibold">Open Source Contribution</h3>
                <p className=" text-lg text-gray-800">I am actively contributing to open source code software and project on github</p>
              </div>
            </div>
          </div>

          {/* call to action */}
          <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 p-12 py-12 px-5 text-center rounded-xl">
            <h3 className="text-4xl text-white font-semibold mb-5">Continuous Learning</h3>
            <p className="text-xl text-white mx-auto">
              I am actively contributing to open source code software and project on github
            </p> <br />
            <a className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-colors duration-300">Get In touch</a>
          </div>
        </div>
      </div>
    </>
  );
}
