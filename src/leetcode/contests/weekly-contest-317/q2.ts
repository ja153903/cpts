type Metadata = {
   totalViews: number;
   mostViewedVideo: {
      views: number;
      id: string;
   };
};

function mostPopularCreator(
   creators: string[],
   ids: string[],
   views: number[]
): string[][] {
   const byCreator: Map<string, Metadata> = new Map();

   for (let i = 0; i < creators.length; i++) {
      const creator = creators[i];
      const id = ids[i];
      const viewCount = views[i];

      if (!byCreator.has(creator)) {
         byCreator.set(creator, {
            totalViews: 0,
            mostViewedVideo: {
               views: 0,
               id: '',
            },
         });
      }

      const metadata = byCreator.get(creator);
      if (metadata) {
         let maxViewCount = metadata.mostViewedVideo.views;
         let maxId = metadata.mostViewedVideo.id;

         if (viewCount === maxViewCount) {
            if (maxId === '' || id < maxId) {
               maxId = id;
            }
         } else if (viewCount > maxViewCount) {
            maxId = id;
            maxViewCount = viewCount;
         }

         byCreator.set(creator, {
            totalViews: viewCount + metadata.totalViews,
            mostViewedVideo: {
               views: maxViewCount,
               id: maxId,
            },
         });
      }
   }

   const result: string[][] = [];
   let maxTotalViewCount = 0;

   for (const metadata of byCreator.values()) {
      maxTotalViewCount = Math.max(maxTotalViewCount, metadata.totalViews);
   }

   for (const [creator, metadata] of byCreator.entries()) {
      if (metadata.totalViews === maxTotalViewCount) {
         result.push([creator, metadata.mostViewedVideo.id]);
      }
   }

   return result;
}

export { mostPopularCreator };
