import Link from "next/link";

function HeroSection({ }) {
    return (
        <div
            className="bg-custombglight p-6 shadow-sm dark:bg-customdark "
        >
            <section className="relative overflow-hidden rounded-xl text-txtdark dark:text-txtlight ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center "

                ></div>

                <div className="container relative z-10 mx-auto px-5 py-7 md:py-32 lg:h-[90vh] lg:px-12">
                    <div className="flex flex-col items-center justify-around md:flex-row">
                        <div className="relative mb-12 w-full md:mb-0 md:w-1/2">
                            <h1 className="mb-6 font-serif text-5xl leading-tight md:text-8xl ">
                                Title
                                <br />

                                <span className="inline-block bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 bg-clip-text text-transparent">
                                    Marion
                                </span>
                            </h1>

                            <p className="mb-5 text-xl text-txtdark dark:text-txtlight">
                                Harnessing Research for developing Sustainable, Scalable, &
                                Impactful Solutions.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                                <button className="group relative w-full min-w-[160px] px-6 py-3 sm:w-auto">
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600"></div>
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 blur-0 transition-opacity duration-500 group-hover:opacity-60 lg:blur-md"></div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <span className="font-medium text-txtdark  dark:text-txtlight">Get Started</span>
                                        <svg
                                            className="size-5 text-txtdark  transition-transform group-hover:translate-x-1 dark:text-txtlight"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                <button className="w-full min-w-[160px] rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-txtdark/70 backdrop-blur-lg transition-all hover:bg-white/10 hover:text-txtdark dark:text-txtlight sm:w-auto">
                                    Documentation
                                </button>
                            </div>

                        </div>

                        <div className="w-full md:w-2/5 md:pl-12 ">
                            <div className="relative rounded-xl bg-customteal bg-opacity-30 p-8  shadow-2xl md:backdrop-blur-lg">
                                <h2 className=" mb-6 text-2xl font-semibold text-txtdark dark:text-txtlight">Why Choose Us?</h2>
                                <img
                                    src="img/leadsNexTech-logo-transparent.png"
                                    alt="Logo"
                                    className="drop_shadow absolute right-2 top-2 hidden h-16 md:block  lg:block"
                                />
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-3 size-6 text-yellow-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            ></path>
                                        </svg>
                                        <span>Data-Driven EarthTech Solutions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-3 size-6 text-green-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            ></path>
                                        </svg>
                                        <span>Human-Centric AI & Analytics</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-3 size-6 text-purple-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                            ></path>
                                        </svg>
                                        <span>NextGen Technology for a Sustainable Future</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </section>
        </div>
    );
}
export default HeroSection;
