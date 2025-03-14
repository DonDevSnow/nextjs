import Link from 'next/link'

function HeroSection({ }) {
    return (



        <div className=" bg-white p-6 shadow-sm dark:bg-gray-800 ">
            <section className="container mx-auto rounded-lg bg-blue-300 px-4 py-5 dark:bg-blue-700 md:py-24">
                <div className="flex flex-col items-center justify-between md:flex-row">

                    <div className=" mb-4  w-full md:mb-0 md:w-1/2">
                        <h1 className="mb-4 font-serif text-2xl text-gray-800 md:text-5xl">Welcome to MyCompany</h1>
                        <p className="mb-6 text-xl text-gray-600">We are revolutionizing the industry with innovative solutions tailored to your needs.</p>

                    </div>


                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Industry-leading technology
                                </li>
                                <li className="flex items-center">
                                    <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

                                </li>
                                <li className="flex items-center">
                                    <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

                                </li>
                            </ul>
                            <div className="space-y-4">
                                <a href="#" className="block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-blue-700">Get Started</a>
                                <a href="#" className="block rounded-lg border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition duration-300 hover:bg-blue-50">Contact Sales</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>



    )
}
export default HeroSection;