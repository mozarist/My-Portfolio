"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "mozarist";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

const WEEKS_IN_YEAR = 53;
const WEEKDAY_LABEL_WIDTH = 40;
const MIN_FIT_WIDTH = 480;
const MIN_BLOCK_SIZE = 5;
const MAX_BLOCK_SIZE = 12;
const DEFAULT_BLOCK_SIZE = 8;
const DEFAULT_BLOCK_MARGIN = 3;

const CALENDAR_THEME = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const numberFormatter = new Intl.NumberFormat("en-US");

type ContributionsResponse = {
    contributions?: Array<{ date: string; count: number; level: number }>;
    total?: { lastYear?: number };
};

function getCalendarMetrics(width: number) {
    if (width === 0 || width < MIN_FIT_WIDTH) {
        return { blockSize: DEFAULT_BLOCK_SIZE, blockMargin: DEFAULT_BLOCK_MARGIN };
    }

    const availableWidth = width - WEEKDAY_LABEL_WIDTH;
    const blockSize = Math.max(
        MIN_BLOCK_SIZE,
        Math.min(MAX_BLOCK_SIZE, Math.floor(availableWidth / WEEKS_IN_YEAR) - 2),
    );
    const blockMargin = Math.max(
        1,
        (availableWidth - WEEKS_IN_YEAR * blockSize) / (WEEKS_IN_YEAR - 1),
    );

    return { blockSize, blockMargin };
}

function formatTooltip(activity: { date: string; count: number }) {
    const { count } = activity;
    const label = `${count} ${count === 1 ? "contribution" : "contributions"}`;
    const date = new Date(`${activity.date}T00:00:00Z`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });

    return `${label}\nGitHub ${count}\n${date}`;
}

export default function GitHubContributionsSection() {
    const { resolvedTheme } = useTheme();
    const [total, setTotal] = useState<number | null>(null);
    const [totalUnavailable, setTotalUnavailable] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new ResizeObserver(([entry]) => {
            setContainerWidth(entry.contentRect.width);
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        async function loadTotal() {
            try {
                const response = await fetch(CONTRIBUTIONS_API, { signal: controller.signal });
                if (!response.ok) throw new Error("Failed to load contributions");

                const data = (await response.json()) as ContributionsResponse;
                const fromApi = data.total?.lastYear;
                const computed = data.contributions?.reduce(
                    (sum, day) => sum + day.count,
                    0,
                );
                const value = typeof fromApi === "number" ? fromApi : computed;

                if (typeof value === "number") {
                    setTotal(value);
                } else {
                    setTotalUnavailable(true);
                }
            } catch {
                if (!controller.signal.aborted) {
                    setTotalUnavailable(true);
                }
            }
        }

        void loadTotal();
        return () => controller.abort();
    }, []);

    const { blockSize, blockMargin } = getCalendarMetrics(containerWidth);
    const colorScheme =
        resolvedTheme === "dark" ? "dark" : resolvedTheme === "light" ? "light" : undefined;

    return (
        <section id="contributions" className="flex flex-col gap-4 scroll-mt-24 pb-8 border-b-2 border-dashed">
            <style>{`
                .react-activity-calendar__tooltip {
                    z-index: 9999;
                    min-width: 8.5rem;
                    padding: 0.6rem 0.9rem;
                    border: 1px solid var(--border);
                    border-radius: 0.65rem;
                    background: var(--card);
                    box-shadow: 0 14px 36px -14px rgb(0 0 0 / 0.5);
                    color: var(--muted-foreground);
                    font-family: var(--font-sans);
                    font-size: 0.75rem;
                    line-height: 1.65;
                    text-align: center;
                    white-space: pre-line;
                }

                .react-activity-calendar__tooltip::first-line {
                    font-weight: 600;
                    color: var(--foreground);
                }

                .react-activity-calendar__tooltip-arrow {
                    fill: var(--card);
                }

                .react-activity-calendar__scroll-container {
                    scrollbar-width: none;
                }

                .react-activity-calendar__scroll-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="flex flex-col gap-1">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading">
                    Contributions
                </h2>

                <p className="text-sm sm:text-base font-medium text-foreground/80">
                    {total !== null ? (
                        <>
                            <span className="font-semibold text-foreground">
                                {numberFormatter.format(total)}
                            </span>{" "}
                            contributions in the last year
                        </>
                    ) : totalUnavailable ? (
                        "GitHub contributions in the last year"
                    ) : (
                        <>
                            <span className="inline-block h-4 w-9 animate-pulse rounded bg-muted align-middle" />{" "}
                            contributions in the last year
                        </>
                    )}
                </p>
            </div>

            <div ref={containerRef} className="w-full text-muted-foreground">
                <GitHubCalendar
                    username={GITHUB_USERNAME}
                    year="last"
                    colorScheme={colorScheme}
                    theme={CALENDAR_THEME}
                    blockSize={blockSize}
                    blockMargin={blockMargin}
                    blockRadius={2}
                    fontSize={11}
                    showMonthLabels
                    showWeekdayLabels={["mon", "wed", "fri"]}
                    showColorLegend={false}
                    showTotalCount={false}
                    errorMessage="Unable to load GitHub contributions."
                    tooltips={{
                        activity: {
                            text: formatTooltip,
                            placement: "top",
                            withArrow: true,
                            offset: 8,
                        },
                    }}
                />
            </div>
        </section>
    );
}
