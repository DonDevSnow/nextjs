
function AccordionSection({ }) {
    return (
        <section className="bg-custombglight p-6 shadow-sm dark:bg-customdark">
            <ul className="mx-auto  max-w-2xl divide-y  rounded-xl shadow shadow-blue-600">
                <li>
                    <details className="group">
                        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                            <svg
                                className="size-5 text-gray-500 transition group-open:rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                ></path>
                            </svg>
                            <span>What am I getting as a Premium Member?</span>
                        </summary>
                        <article className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
                                sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
                                nec ex maximus, suscipit diam vel, tristique tellus.
                            </p>
                        </article>
                    </details>
                </li>
                <li>
                    <details className="group">
                        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                            <svg
                                className="size-5 text-gray-500 transition group-open:rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                ></path>
                            </svg>
                            <span>What am I getting as a Premium Member?</span>
                        </summary>
                        <article className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
                                sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
                                nec ex maximus, suscipit diam vel, tristique tellus.{" "}
                            </p>
                        </article>
                    </details>
                </li>
                <li>
                    <details className="group">
                        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                            <svg
                                className="size-5 text-gray-500 transition group-open:rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                ></path>
                            </svg>
                            <span>What am I getting as a Premium Member?</span>
                        </summary>
                        <article className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
                                sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
                                nec ex maximus, suscipit diam vel, tristique tellus.{" "}
                            </p>
                        </article>
                    </details>
                </li>
                <li>
                    <details className="group">
                        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                            <svg
                                className="size-5 text-gray-500 transition group-open:rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                ></path>
                            </svg>
                            <span>What am I getting as a Premium Member?</span>
                        </summary>
                        <article className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
                                sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
                                nec ex maximus, suscipit diam vel, tristique tellus.{" "}
                            </p>
                        </article>
                    </details>
                </li>
            </ul>
        </section>
    );
}

export default AccordionSection;