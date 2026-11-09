const GITHUB_USERNAME = "mozarist";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

type ContributionsResponse = {
    contributions?: Array<{ date: string; count: number; level: number }>;
    total?: { lastYear?: number };
};

export const revalidate = 3600;

export async function GET() {
    const response = await fetch(CONTRIBUTIONS_API, {
        headers: {
            Accept: "application/json",
        },
        next: { revalidate },
    });

    if (!response.ok) {
        return Response.json(
            { error: "Unable to load GitHub contributions." },
            { status: 502 },
        );
    }

    const data = (await response.json()) as ContributionsResponse;
    if (!Array.isArray(data.contributions)) {
        return Response.json(
            { error: "GitHub contributions returned an invalid response." },
            { status: 502 },
        );
    }

    const total =
        typeof data.total?.lastYear === "number"
            ? data.total.lastYear
            : data.contributions.reduce((sum, day) => sum + day.count, 0);

    return Response.json({
        contributions: data.contributions,
        total,
    });
}
