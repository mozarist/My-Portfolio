import React from 'react'

export default function CertificateListSection() {
    return (
        <section id="certificates" className="flex flex-col gap-6 scroll-mt-24">
            <div className="flex flex-col">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading">
                    Certificates
                </h2>
                <p className="text-sm text-muted-foreground">
                    A collection of professional certifications validating my technical expertise and skills.
                </p>
            </div>

            <div className="flex flex-col divide-y divide-border">
                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 pb-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            English Listening and Reading Official Score Certificate
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                TOEIC
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Score: 955/990
                            </span>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Valid until 2028/07/29
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        July 2026
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 py-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            Building a Full-Stack POS (Point Of Sale) and Laundry Management Project
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                PT. Wan Teknologi Indonesia
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Score: 84/100
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        June 2026
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 py-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            Building a Web-Based Student Management System with Laravel Framework
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                PT. Qelopak Teknologi Indonesia
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Score: 81/100
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        December 2025
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 py-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            Building SMK Informatika Pesat Student Council President Voting System with PHP and MySQL
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                Ginvo Studio
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Score: 89/100
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        June 2025
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 pt-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            Creating a Travel Landing Page with HTML, CSS, and JavaScript
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                Kreasi Media
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Score: 88/100
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        December 2024
                    </div>
                </div>
            </div>
        </section>
    )
}
