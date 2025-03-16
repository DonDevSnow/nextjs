
function StepperSection({ }) {
    return (
        <section className="overflow-hidden bg-gray-100 py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-5xl">
                    <div className="-mx-5 flex flex-wrap items-center">
                        <div className="mb-20 w-full px-5 lg:mb-0 lg:w-1/2">
                            <div className="max-w-md">
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                    Getting Started
                                </span>
                                <h2 className="mb-10 mt-12 text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-200">
                                    Launch Your Journey with Ease
                                </h2>
                                <p className="mb-16 text-lg text-gray-600 dark:text-gray-400">
                                    Download our free mobile app and start building today!
                                </p>
                                <a
                                    className="inline-block rounded-full bg-blue-600 px-12 py-4 font-bold text-white shadow-lg transition duration-200 hover:bg-blue-700"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-5 lg:w-1/2">
                            <ul>
                                <li className="mb-8 flex border-b border-gray-200 pb-10 dark:border-gray-700">
                                    <div className="mr-8">
                                        <span className="flex size-14 items-center justify-center rounded-full bg-blue-200/50 text-lg font-bold text-blue-600 dark:bg-blue-600/30 dark:text-blue-300">
                                            1
                                        </span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                                            Create Your Account
                                        </h3>
                                        <p className="text-lg text-gray-500 dark:text-gray-400">
                                            Sign up quickly and easily to access our full range of
                                            features.
                                        </p>
                                    </div>
                                </li>
                                <li className="mb-8 flex border-b border-gray-200 pb-10 dark:border-gray-700">
                                    <div className="mr-8">
                                        <span className="flex size-14 items-center justify-center rounded-full bg-blue-200/50 text-lg font-bold text-blue-600 dark:bg-blue-600/30 dark:text-blue-300">
                                            2
                                        </span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                                            Personalize Your Experience
                                        </h3>
                                        <p className="text-lg text-gray-500 dark:text-gray-400">
                                            Tailor tools and settings to fit your needs and preferences.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex border-b border-gray-200 pb-10 dark:border-gray-700">
                                    <div className="mr-8">
                                        <span className="flex size-14 items-center justify-center rounded-full bg-blue-200/50 text-lg font-bold text-blue-600 dark:bg-blue-600/30 dark:text-blue-300">
                                            3
                                        </span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                                            Collaborate with Your Team
                                        </h3>
                                        <p className="text-lg text-gray-500 dark:text-gray-400">
                                            Seamlessly work together, sharing insights and tools for
                                            better productivity.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default StepperSection;