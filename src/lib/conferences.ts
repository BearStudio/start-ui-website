import { getCollection, getEntries } from "astro:content";

export const getTalksComputed = async () => {
  const talks = (await getCollection("conferences")).sort((a, b) => {
    const aHasVod = !!a.data.vod;
    const bHasVod = !!b.data.vod;
    if (aHasVod && !bHasVod) return -1;
    if (!aHasVod && bHasVod) return 1;
    return 0;
  });

  return await Promise.all(
    talks.map(async (talk) => {
      const speakers = await getEntries(talk.data.speakers);
      return {
        ...talk.data,
        _computed: {
          speakers,
        },
      };
    }),
  );
};
