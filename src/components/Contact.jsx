import { useState } from "react";


export default function Contact() {
    const [form, setForm] = useState
    ({
        name:"",
        email:"",
        description:"",
    });
    const handleChange= (e)=>{
        const {name,value} = e.target;
        setForm((prev)=>({
            ...prev,
            [name]:value,
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const mailtoLink = `mailto:your-pimple0333@gmail.com?subject=Portfolio Contact: ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
        window.location.href=mailtoLink;
        setForm({name: " ", email: " ", message: " "});
    }
  return (
    <>
     <div id="Contact" className='min-h-screen w-full bg-gradient-to-b from-white to-gray-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Contact Me</h2>
            <p className="mt-4 text-xl text-center text-gray-600 font-semibold">Let's Connect and Explore more.</p>
        </div>

        {/* contact form */}

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6"> 
                <div className="">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded p-3 mb-5"/>

                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded p-3 mb-5"/>

                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message:</label>
                    <input type="text" name="message" id="message" placeholder="message" value={form.message} onChange={handleChange} required rows= "4" className="mt-1 block w-full border border-gray-300 rounded p-3 mb-5"/>
                </div>

                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 via-gray-300 to-teal-700">Submit</button>
                
            </form>
        </div>
    </div> 
    </>
  );
}
