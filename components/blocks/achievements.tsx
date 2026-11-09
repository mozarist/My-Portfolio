import React from 'react'

export default function AchievementSection() {
    return (
        <section id="achievements" className="flex flex-col gap-4 scroll-mt-24 pb-8 border-b-2 border-dashed">
            <div className="flex flex-col gap-1">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading">
                    Achievements
                </h2>
            </div>

            <div className="flex flex-col gap-3 divide-y divide-border">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-2 pb-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            Silver Medalist of Level 5 English Competition
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                COSMII 2026
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                West Java Province Level
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        October 2026
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-2 pb-3">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            4th Place Level 5 English Competition
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                COSMII 2026
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                Bogor Regency/City Level
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        September 2026
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-2">
                    <div className="flex flex-col order-2 sm:order-1">
                        <h3 className="text-base font-medium">
                            1st Place Winner of Web Design Competition
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <h4>
                                Kesatuan Bogor Olympic Festival
                            </h4>
                            <span>
                                &nbsp;|&nbsp;
                            </span>
                            <span>
                                National Level
                            </span>
                        </div>
                    </div>

                    <div className="span text-xl sm:text-3xl font-heading order-1 sm:order-2">
                        January 2026
                    </div>
                </div>
            </div>
        </section>
    )
}
